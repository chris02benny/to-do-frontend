import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ShowList() {
  return (
    <>
      <div className="container-sm shadow border rounded-1 p-5">
        <div className="row">
          <div className="col">
            <h3>Title</h3>
          </div>
          <div className="col-3">
            <button className="btn btn-primary"><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>
            <button className="btn btn-success ms-2"><FontAwesomeIcon icon="fa-solid fa-check" /></button>
            <button className="btn btn-danger ms-2"><FontAwesomeIcon icon="fa-solid fa-trash-can" /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowList;
