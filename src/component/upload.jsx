import React from 'react';

function upload({ onClose, attachments }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>Attachments</h3>
        <ul className="attachment-list">
          {attachments.map((attachment, index) => (
            <li key={index}><a href={attachment.url} target="_blank" rel="noopener noreferrer">{attachment.name}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default upload;

