import { useState } from "react";
import uid from "uniqid";
import "./App.scss";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [taskList, setTaskList] = useState([
    { id: uid(), goal: "Learn CSS Grid", isCompleted: false },
    { id: uid(), goal: "Finish React Hooks walk-through", isCompleted: true },
    { id: uid(), goal: "Build Svelte TODO List app", isCompleted: false },
  ]);

  const handleTaskAdd = (taskData) => {
    setTaskList([...taskList, { id: uid(), goal: taskData }]);
  };

  const handleTaskToggle = (task) => {
    const updatedTaskList = taskList.map((taskVal) => {
      return taskVal.id === task.id
        ? { ...taskVal, isCompleted: !taskVal.isCompleted }
        : taskVal;
    });

    setTaskList(updatedTaskList);
  };

  return (
    <main className="task-app">
      <TaskForm handleTaskAdd={handleTaskAdd} />
      <TaskList tasks={taskList} handleTaskToggle={handleTaskToggle} />
    </main>
  );
}

export default App;
