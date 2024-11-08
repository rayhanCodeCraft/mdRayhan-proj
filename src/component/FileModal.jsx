// src/components/FileModal.jsx
import React from "react";
import "./FileModal.css";

const FileModal = ({ file, closeModal }) => {
  if (!file) return null;

  const fileExtension = file.name.split(".").pop();

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          ×
        </span>
        <h2>File Details</h2>
        <p><strong>File Name:</strong> {file.name}</p>
        <p><strong>Extension:</strong> {fileExtension}</p>
        <p><strong>Size:</strong> {file.size} bytes</p>
      </div>
    </div>
  );
};

export default FileModal;
