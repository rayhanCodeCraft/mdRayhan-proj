import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (e) => setFiles([...e.target.files]);

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    const response = await axios.post('http://localhost:5000/upload', formData);
    setUploadedFiles(response.data.files);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <ul>
        {uploadedFiles.map(file => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileUploader;
