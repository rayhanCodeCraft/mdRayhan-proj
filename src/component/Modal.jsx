import React from "react";
import PropTypes from "prop-types";
import './Modal.css';

const Modal = ({ closeModal }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Attachments</h2>
                <ul className="attachment-list">
                    <li>file1.jpg</li>
                    <li>file2.pdf</li>
                    <li>file3.docx</li>
                </ul>
            </div>
        </div>
    );
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default Modal;
