import { useState } from "react";
import SingleTask from "./SingleTask";

const TasksWrap = ({ tasksArr, setTasksArr, filter }) => {
  const toDisplay = () => {
    console.log(filter);
    if (filter == "all") {
      return tasksArr;
    } else if (filter == "completed") {
      return [...tasksArr].filter((v) => v.done);
    } else {
      console.log([...tasksArr].filter((v) => !v.done));
      return [...tasksArr].filter((v) => !v.done);
    }
  };

  return (
    <div id="tasks-wrap">
      {toDisplay().map((v, index) => (
        <SingleTask
          data={v}
          index={index}
          key={v.id}
          tasksArr={tasksArr}
          setTasksArr={setTasksArr}
        />
      ))}
    </div>
  );
};

export default TasksWrap;
