import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

import "./Project.css";

const SmallProject = (props) => {
  return (
    <div className="TodoList">
      <div className="TodoDesc">
        <a href="https://5ofxt.csb.app/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="LinkIcon" icon={faLink} />
          <h1>To Do List</h1>
        </a>
      </div>
      <div
        className="TodoImages"
        onMouseEnter={() => setTdHovered(true)}
        onMouseLeave={() => setTdHovered(false)}
      >
        <button
          className="LeftBtn"
          onClick={leftBtnHandler}
          style={tdHovered ? { opacity: 1 } : { opacity: 0 }}
        >
          <FontAwesomeIcon className="LeftBtnIcon" icon={faChevronLeft} />
        </button>
        <img src={"todo_" + imgNum + ".png"} alt={"todo_" + imgNum} />
        <button
          className="RightBtn"
          onClick={rightBtnHandler}
          style={tdHovered ? { opacity: 1 } : { opacity: 0 }}
        >
          <FontAwesomeIcon className="RightBtnIcon" icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default SmallProject;
