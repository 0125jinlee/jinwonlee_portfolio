import React from "react";

import { data } from "./data";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <h1 className="Title">My Works</h1>
      <div className="BigProjects">
        <Project
          title={data[0].title}
          link={data[0].link}
          description={data[0].description}
          maxImgNum={data[0].maxImgNum}
          imgUrl={data[0].imgUrl}
        />
      </div>
      <div className="SmallProjects">
        <Project
          title={data[1].title}
          link={data[1].link}
          description={data[1].description}
          maxImgNum={data[1].maxImgNum}
          imgUrl={data[1].imgUrl}
        />
        <Project
          title={data[2].title}
          link={data[2].link}
          description={data[2].description}
          maxImgNum={data[2].maxImgNum}
          imgUrl={data[2].imgUrl}
        />
        <Project
          title={data[3].title}
          link={data[3].link}
          description={data[3].description}
          maxImgNum={data[3].maxImgNum}
          imgUrl={data[3].imgUrl}
        />
      </div>
    </div>
  );
};

export default Projects;
