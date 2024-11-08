import React from "react";
import FileUploader from "./FileUploader";

const Card = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <FileUploader />
    </div>
  );
};

export default Card;
