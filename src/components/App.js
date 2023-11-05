import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [toDo, setToDo] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleClick(event) {
    const category = event.target.id;
    setSelectedCategory(category);
  }

  const filteredTasks = toDo.filter(
    task => selectedCategory === "All" || task.category === selectedCategory
  );

  function handleTaskFormSubmit(onTaskFormSubmit) {
    const updatedTasks = [...toDo, onTaskFormSubmit];
    setToDo(updatedTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onClick={handleClick} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
