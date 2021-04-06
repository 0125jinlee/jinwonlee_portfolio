import React from "react";

import { data } from "./data";
import Project from "./Project";
import "./Projects.css";

const Projects = (props) => {
  return (
    <div className="Projects">
      <h1 className="Title">MY WORKS</h1>
      <Project
        title={data[0].title}
        link={data[0].link}
        description={data[0].description}
        maxImgNum={data[0].maxImgNum}
        imgUrl={data[0].imgUrl}
      />
      <Project
        title={data[1].title}
        link={data[1].link}
        description={data[1].description}
        maxImgNum={data[1].maxImgNum}
        imgUrl={data[1].imgUrl}
      />
    </div>
  );
};

export default Projects;
