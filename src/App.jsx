// src/App.jsx
import React, { useState } from "react";
import TaskBoard from "./component/TaskBoard";
import FileModal from "./component/FileModal"; // Only if needed
import Modal from "./component/Modal";        
import "./App.css";

function App() {
  const [showFileModal, setShowFileModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <TaskBoard />
      {showFileModal && <FileModal />}
      {showModal && <Modal />}
    </div>
  );
}

export default App;
