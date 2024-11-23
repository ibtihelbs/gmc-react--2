import { useState } from "react";
import { useDispatch } from "react-redux";
import { restockPate } from "../store/pate/actions";
const RestockPate = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const restockFn = (e) => {
    e.preventDefault();
    dispatch(restockPate(parseInt(input) || 0));
    setInput("");
  };
  return (
    <div>
      <h2>RestockPate</h2>
      <form onSubmit={restockFn}>
        <input
          type="number"
          placeholder="2"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button>add</button>
      </form>
    </div>
  );
};

export default RestockPate;
