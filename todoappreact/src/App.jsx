import { useState } from "react";
import ThemeSwicher from "./components/ThemeSwicher";
import Addtask from "./components/Addtask";
import TasksWrap from "./components/TasksWrap";
import Filters from "./components/Filters";

const App = () => {
  const [tasksArr, setTasksArr] = useState([]);
  const [filter, setFilter] = useState("all");

  return (
    <div className="center">
      <ThemeSwicher />
      <main>
        <Addtask setTasksArr={setTasksArr} />
        <section id="tasks-management">
          <TasksWrap
            filter={filter}
            tasksArr={tasksArr}
            setTasksArr={setTasksArr}
          />
          <hr />
          <Filters
            setFilter={setFilter}
            setTasksArr={setTasksArr}
            tasksArr={tasksArr}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
