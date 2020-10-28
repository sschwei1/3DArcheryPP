using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _3dArcheryRepos.DatabaseContext;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace _3dArcheryApi
{
    public class Startup
    {
        private ConfigJson Config;
        
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            
            services.AddControllers();
            services.AddDbContext<ArcheryDb>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            InitConfig();
            
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Use(async (ctx, next) =>
            {
                ctx.Response.Headers["Access-Control-Allow-Credentials"] = "true";
                ctx.Response.Headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS, DELETE, PUT, PATCH";
                ctx.Response.Headers["Access-Control-Allow-Origin"] = Config.HostAddress;

                await next.Invoke();
            });
            
            app.UseRouting();

            app.UseAuthorization();
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
        
        private void InitConfig()
        {
            var settings = new JsonSerializerSettings();
            settings.MissingMemberHandling = MissingMemberHandling.Ignore;
            
            string json;
            using(var fs = File.OpenRead("config.json"))
            using (var sr = new StreamReader(fs, new UTF8Encoding(false)))
            {
                json = sr.ReadToEnd();
            }

            this.Config = JsonConvert.DeserializeObject<ConfigJson>(json, settings);
        }
    }
}
