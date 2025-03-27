import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useEffect, useState } from "react";
import axios from "axios";

const ShowList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
      fetchProperties();
  });

  const fetchProperties = async () => {
      try {
          const response = await axios.get("http://localhost:3000/itemInserting");
          setProperties(response.data);
      } catch (error) {
          console.error("Error fetching To-do:", error);
      }
  };

  return (
    
     <>
       {properties.length === 0 ? ( <p>No to-do found.</p>
      ) : (
        properties.map((property,index) => 
        (  <div className="container-sm shadow-sm border rounded-1 p-5 mb-2">
          <div className="row">
          <div className="col">
            <h3>{property.title}</h3>
          </div>
          <div className="col-3">
            <button className="btn btn-primary"><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>
            <button className="btn btn-success ms-2"><FontAwesomeIcon icon="fa-solid fa-check" /></button>
            <button className="btn btn-danger ms-2"><FontAwesomeIcon icon="fa-solid fa-trash-can" /></button>
          </div>
        </div></div>)))}
        </>
    
  );
}

export default ShowList;
