const SingleTask = ({ data, setTasksArr, tasksArr, index }) => {
  const { task, done, id } = data;
  const edit = () => {
    const tasksCopy = [...tasksArr];
    tasksCopy[index].done = !tasksCopy[index].done;
    setTasksArr(tasksCopy);
  };
  const deleteFn = () => {
    const tasksCopy = [...tasksArr].filter((v) => v.id != id);
    setTasksArr(tasksCopy);
  };
  return (
    <div className="single-task flex between">
      <div className="flex">
        <form className="checked">
          <input
            type="checkbox"
            checked={done}
            onChange={edit}
            className="state"
          />
        </form>
        <p className={`${done ? "lined" : ""}`}>{task} </p>
      </div>
      <button className="delete" onClick={deleteFn}>
        <img src="./images/icon-cross.svg" alt="icon-cross" />
      </button>
    </div>
  );
};

export default SingleTask;
