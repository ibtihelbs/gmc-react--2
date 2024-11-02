import { useState } from "react";
const Addtask = () => {
  const [task, setTask] = useState({});
  return (
    <form className="flex">
      <span></span>
      <input type="text" id="add" placeholder="Create new todo ...." />
    </form>
  );
};

export default Addtask;
