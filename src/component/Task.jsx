// src/component/Task.jsx
import React, { useState } from 'react';
import PropTypes from "prop-types";
import './Task.css';
import upload from "./upload";

function Task({ task }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="task">
      <div className="task-header">
        <div className="client-name">{task.clientName}</div>
        <div className="assignee">
          <img alt="Assignee" src={task.assigneeImage} />
          <span>{task.assigneeName}</span>
        </div>
      </div>
      <div className="task-body">
        {task.description}
        <div className="attachment" onClick={openModal}>Attachment</div>
      </div>
      <div className="task-footer">
        <div className="icons">
          <i className="fas fa-layer-group"></i> {task.layerGroup}
          <i className="fas fa-comments"></i> {task.comments}
          <i className="fas fa-tasks"></i> {task.tasks}
        </div>
        <div className="date">
          <i className="fas fa-calendar-alt"></i> {task.date}
        </div>
      </div>
      {isModalOpen && <upload onClose={closeModal} upload={task.attachments} />}
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    clientName: PropTypes.string.isRequired,
    assigneeImage: PropTypes.string.isRequired,
    assigneeName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    layerGroup: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    tasks: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    attachments: PropTypes.array.isRequired,
  }).isRequired,
};

export default Task;
