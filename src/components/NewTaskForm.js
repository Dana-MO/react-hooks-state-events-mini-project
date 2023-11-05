import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const categoryList =  categories.filter((category) => category !== "All");

  const [newTask, setNewTask] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  function handleNewTask(event) {
    setNewTask(event.target.value);
  }

  function handleCategory(event) {
    setTaskCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();

    onTaskFormSubmit({
      text: newTask,
      category: taskCategory,
    });

    setNewTask("");
    setTaskCategory("");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={handleNewTask} />
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={handleCategory}>
        <option value=""></option>
          {categoryList.map((category) => {
              return <option key={category} value={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
