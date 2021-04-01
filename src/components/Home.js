import React from "react"

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container top_home">
          <p className="mg_0">Hi! I'm </p>
          <h1 className="top_home_h1 mg_0">Bill Yengo</h1>
          <h3 className="glass mg_0">Full stack web Developer</h3>
        </div>

        <div className="container">

          <div className="row center_home">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="row skills_head">
                <div className="col-sm-12 skills_head">
                  <p className="align_center">I have a diverse set of skills ranging from:</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 margin_bottom_line">
                  <h5>Frontend</h5>
                  <p><span>React,</span> <span>VueJs,</span> <span>HTML/CSS,</span> <span>Blazor</span></p>
                </div>
                <div className="col-md-6 margin_bottom_line">
                  <h5>Backend</h5>
                  <p><span>ASP.Net</span>, <span>NodeJs</span></p>
                </div>
              </div>

              <div className="row ">
                <div className="col-md-6 margin_bottom_line">
                  <h5>Languages</h5>
                  <p><span>javascript/Typescript,</span> <span>C#,</span> <span>Java</span></p>
                </div>
                <div className="col-md-6 margin_bottom_line">
                  <h5>Database</h5>
                  <p><span>Relational databases(MySQL, ..),</span> <span>NoSQL databases(MongoDb)</span></p>
                </div>
              </div>

              <div className="row" >
                <div className="col-sm-12 margin_bottom_line">
                  <h5>Server side</h5>
                  <p className="align_left"><span>NGINX,</span> <span>Docker,</span>  <span>Apache</span></p>
                </div>
              </div>
              <div className="row figures justify-content-lg-center justify-content-md-between justify-content-sm-around">
                <div className="csharp_image"></div>
                <div className="js_image"></div>
                <div className="react_image"></div>
                <div className="ts_image"></div>
                <div className="nodejs_image"></div>
                <div className="html_image"></div>
                <div className="css_image"></div>
                <div className="etc"><p>...</p></div>
              </div>
            </div>

            <div className="col-sm-12 col-md-0 col-lg-4 profile_image">

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
