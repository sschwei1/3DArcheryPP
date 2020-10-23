using Microsoft.AspNetCore.Mvc;
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

namespace _3dArcheryApi.Controllers
{
    [ApiController]
    [Microsoft.AspNetCore.Mvc.Route("[controller]/[action]")]

    public class TrackController : ControllerBase
    {
        [System.Web.Http.HttpPost]
        public JsonResult CreateTrack([Microsoft.AspNetCore.Mvc.FromBody] CreateTrackModel trackData)
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

        [System.Web.Http.HttpPost]
        public JsonResult CreateLocation([Microsoft.AspNetCore.Mvc.FromBody] CreateLocationModel locationData)
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

        [System.Web.Http.HttpGet]
        public JsonResult GetTrackFiltered([FromUri]int filterFrom, [FromUri]int filterTo, [FromUri]string filterName = "", [FromUri]string filterLocation = "")
         {
            var response = new JsonResponse();

            using var repos = new ArcheryRepos();
            var trackList = repos.GetTrackFiltered(filterFrom, filterTo, filterName, filterLocation);
            
            return new JsonResult(new JsonResponse<List<TrackMinModel>>(trackList));
         }
    }
}
