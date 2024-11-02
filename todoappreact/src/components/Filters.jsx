const Filters = ({ setFilter, setTasksArr, tasksArr }) => {
  return (
    <div className="filters flex between">
      <span className="items-left">
        {tasksArr.filter((v) => !v.done).length}
      </span>
      <div className="filter-btn">
        <button
          className="all"
          onClick={() => {
            setFilter("all");
          }}
        >
          All
        </button>
        <button
          className="active"
          onClick={() => {
            setFilter("active");
          }}
        >
          Active
        </button>
        <button
          className="completed"
          onClick={() => {
            setFilter("completed");
          }}
        >
          Completed
        </button>
      </div>
      <button
        className="clear-completed"
        onClick={() => {
          setTasksArr([...tasksArr].filter((v) => !v.done));
        }}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Filters;
