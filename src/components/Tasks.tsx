import React, { useState } from "react";
import Alert from "./Alert";
import "./additional.css";

export const Tasks = (props: { title: string }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [tasks, setTasks] = useState<{ msg: string; desc: string }[]>([]);
  const [alertMessage, setAlertMessage] = useState("");
  const myStyle = {
    border: "1px solid #ddd", // Light grey border
    borderRadius: "5px", // Rounded corners
    padding: "10px", // Padding inside the border
    marginBottom: "10px", // Space between tasks
    marginTop: "30px",
  };

  const handleAddTask = () => {
    if (taskDesc === "" && taskName === "") {
      setAlertMessage("Add a Task first");
    } else if (taskName === "") {
      setAlertMessage("Add Task Name");
    } else if (taskDesc === "") {
      setAlertMessage("Add Task Description");
    } else {
      setTasks([...tasks, { msg: taskName, desc: taskDesc }]);
      setTaskName(""); // Clear input after adding
      setTaskDesc(""); // Clear textarea after adding
      setAlertMessage("");
    }
  };

  return (
    <div className="my-5">
      <div className="container my-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1 className="my-3">{props.title}</h1>
        </label>
        <div className="my-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Task Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <textarea
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          placeholder="Enter your task"
          rows={5}
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
        ></textarea>

        {alertMessage && <Alert name={alertMessage}></Alert>}

        <button className="btn btn-primary my-2" onClick={handleAddTask}>
          Add
        </button>
        <h1>{tasks.length}</h1>
        {tasks.length !== 0 && (
          <div style={myStyle}>
            {tasks.map((task, index) => (
              <div key={index}>
                <h2>{task.msg}</h2>
                <p>{task.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
