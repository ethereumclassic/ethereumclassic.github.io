import React from "react";

const Banner = () => {
  return (
    <section className="intro">
      <header>
        <h1>Big<br/>Title</h1>
        <p>A free responsive site template designed by <a href="https://twitter.com/ajlkn">@ajlkn</a> / <a href="https://html5up.net">HTML5 UP</a></p>
        <ul className="actions">
          <li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
        </ul>
      </header>
      <div className="content">
        <span className="image fill" data-position="center"><img src="images/pic01.jpg" alt="" /></span>
      </div>
    </section>
  )
};

export default Banner;
