using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _3dArcheryApi.Response
{
    public class JsonResponse
    {
        public JsonResponse()
        {
            this.Status = "OK";
            this.StatusCode = 200;
        }

        public string Status { get; set; }
        public int StatusCode { get; set; }
    }

    public class JsonResponse<T> : JsonResponse
    {
        public JsonResponse(T data)
            : base()
        {
            this.Data = data;
        }

        public T Data { get; set; }
    }
}
