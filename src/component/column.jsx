// src/components/Column.jsx
import React from "react";
import PropTypes from "prop-types";
import "./column.css";
import Card from "./Card";

import Task from './Task';

function Column({ title, className, tasks }) {
  return (
    <div className={`column ${className}`}>
      <div className="column-header">
        <h2>{title}</h2>
        <div className="count">{tasks.length}</div>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Column;