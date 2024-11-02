import { useState } from "react";
import ThemeSwicher from "./components/ThemeSwicher";
import Addtask from "./components/Addtask";
import TasksWrap from "./components/TasksWrap";
import Filters from "./components/Filters";

const App = () => {
  const [tasksArr, setTasksArr] = useState([]);
  return (
    <div className="center">
      <ThemeSwicher />
      <main>
        <Addtask />
        <section id="tasks-management">
          <TasksWrap />
          <hr />
          <Filters/>
        </section>
      </main>
    </div>
  );
};

export default App;
