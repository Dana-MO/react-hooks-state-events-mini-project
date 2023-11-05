import React, { useState, useEffect } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);
  
  function handleDelete(event) {
    const newList = taskList.filter((task) => task.text !== event.target.id)
    setTaskList(newList);
  }

  return (
    <div className="tasks">
      {taskList.map((task) => {
        return <Task key={task.text} text={task.text} category={task.category} onDelete={handleDelete} />
      })}
    </div>
  );
}

export default TaskList;
