import { useState } from "react";
const Addtask = ({ setTasksArr }) => {
  const [task, setTask] = useState("");
  const generateKey = () => {
    return `${new Date().getTime()}`;
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTasksArr((prev) => [
          ...prev,
          { task, done: false, id: generateKey() },
        ]);
        setTask("");
      }}
      className="flex"
    >
      <span></span>
      <input
        onChange={(e) => {
          setTask(e.target.value);
        }}
        type="text"
        id="add"
        placeholder="Create new todo ...."
        value={task}
      />
    </form>
  );
};

export default Addtask;
