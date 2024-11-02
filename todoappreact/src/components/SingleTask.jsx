const SingleTask = () => {
  return (
    <div className="single-task flex between">
      <div className="flex">
        <form className="checked">
          <input type="checkbox" className="state" />
        </form>
        <p>task </p>
      </div>
      <button className="delete">
        <img src="./images/icon-cross.svg" alt="icon-cross" />
      </button>
    </div>
  );
};

export default SingleTask;
