using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Web;
using System.Web.Http;
using Microsoft.AspNetCore.Http;
using _3dArcheryApi.Response;
using _3dArcheryRepos;
using _3dArcheryRepos.ServersideModels;
using Microsoft.AspNetCore.Mvc;

using HttpMvc = Microsoft.AspNetCore.Mvc;
using HttpWeb = System.Web.Http;
using _3dArcheryRepos.Helper;
using Microsoft.AspNetCore.Cors;

namespace _3dArcheryApi.Controllers
{
    [HttpMvc.ApiController]
    [Microsoft.AspNetCore.Mvc.Route("[controller]/[action]")]
    public class TrackController : HttpMvc.ControllerBase
    {
        [HttpWeb.HttpPost]
        public JsonResult CreateTrack([HttpMvc.FromBody] CreateTrackModel trackData)
        {
            var response = new JsonResponse();

            // validate data
            if (trackData.Validate())
            {
                using var repos = new ArcheryRepos();

                repos.CreateTrack(trackData);
            }
            else
            {
                response.Status = "Data is not in a correct format.";
                response.StatusCode = 404;
            }

            return new JsonResult(new JsonResponse());
        }

        [HttpWeb.HttpPost]
        public JsonResult CreateLocation([HttpMvc.FromBody] CreateLocationModel locationData)
        {
            var response = new JsonResponse();
            if (locationData.Validate())
            {
                using var repos = new ArcheryRepos();

                repos.CreateLocation(locationData);
            }
            else
            {
                response.Status = "Data is not in a correct format.";
                response.StatusCode = 404;
            }

            return new JsonResult(new JsonResponse());
        }

        /*
         get
         - from
         - to
         - nameFilter
         - locationFilter
         */

        [HttpWeb.HttpGet]
        public JsonResult GetTrackFiltered([FromUri]int filterFrom, [FromUri]int filterTo, [FromUri]string filterName, [FromUri]string filterLocation)
         {
            var response = new JsonResponse();

            using var repos = new ArcheryRepos();
            var trackList = repos.GetTrackFiltered(filterFrom, filterTo, filterName, filterLocation);
            
            return new JsonResult(new JsonResponse<List<TrackMinModel>>(trackList.ToList()));
         }

        [HttpWeb.HttpPost]
        public JsonResult CreateEvent([HttpMvc.FromBody]CreateEventGetDataModel data)
        {
            
            DateTime creationDate = DateTime.Now;

            var eventCode = StringHelper.RandomString(6);




            using var repos = new ArcheryRepos();

            var evt = new CreateEventModel();
            evt.Name = data.Name;
            evt.TrackId = data.TrackId;
            evt.CreationDate = creationDate;
            evt.EventCode = eventCode;
            evt.CountTypeId = data.CountTypeId;


           var eventId = repos.CreateEvent(evt);


            var userList = repos.AddEventUsers(data.EventUsers, eventId);
            var chatIdList = repos.GetChatIdsFromUserIds(userList);

            if (BotHelper.TeleBot != null) {
                Parallel.ForEach(chatIdList, chatId => {
                    _ = BotHelper.TeleBot.SendMessage(chatId, "You are invited to an event type /accept to participate");
                });
            }

            

            return new JsonResult(new JsonResponse<string>(eventCode));
        }

        [HttpWeb.HttpGet]
        public JsonResult GetUserFiltered([FromUri] int from, [FromUri] int to, [FromUri] string name, [FromUri] string exceptIds)
        {
            var response = new JsonResponse();
            var exceptIdsArray = (exceptIds ?? "").Split(',')
                .Select(e => int.TryParse(e, out var n) ? n : -1)
                .Where(e => e >= 0)
                .ToArray();
            
            using var repos = new ArcheryRepos();
            var userList = repos.GetUserFiltered(from, to, name, exceptIdsArray);

            return new JsonResult(new JsonResponse<List<GetUserFilteredModel>>(userList.ToList()));
        }

        [HttpWeb.HttpGet]
        public JsonResult GetToken([FromUri] string shortToken)
        {
            var response = new JsonResponse();
            using var repos = new ArcheryRepos();

            var token = repos.GetToken(shortToken);


            return new JsonResult(new JsonResponse<string>(token));
        }
    }

   
}
