import React from "react";
import "../assets/css/ListInput.css";
import { useState } from "react";
import axios from "axios"
function ListInput() {
  const [property, setProperty] = useState({
    title: "",
  });

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://to-do-backend-rp6k.onrender.com/itemInserting", property);
      alert("To-do added successfully!");
      setProperty({ title: "" });
    } catch (error) {
      console.error("Error adding to-do:", error);
      alert("Failed to add to-do.");
    }
  };
  return (
    <>
      <div className="container-sm mt-5">
        <div class="input-group mb-3">
          <div class="form-floating">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                class="form-control"
                id="floatingInputGroup1"
                placeholder="Enter Your To-do"
                name="title"
                value={property.title}
                onChange={handleChange}
              />
              <div>
                <button type="submit" class="btn btn-primary mt-2">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListInput;
