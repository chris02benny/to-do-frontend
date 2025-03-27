import React from "react";
import "../assets/css/ListInput.css";
function ListInput() {
  return (
    <>
      <div className="container-sm mt-5">
      <div class="input-group mb-3">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder="Username"
          />
          <label for="floatingInputGroup1">Enter your to-do</label>
         <div>
         <button type="submit" class="btn btn-primary mt-2">
            Add Task
          </button>
         </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ListInput;
