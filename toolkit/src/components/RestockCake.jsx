import { useState } from "react";
import { useDispatch } from "react-redux";
import { restockcake } from "../store/cakeSlice";
const RestockCake = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const restockFn = (e) => {
    e.preventDefault();
    dispatch(restockcake(parseInt(input) || 0));
    setInput("");
  };
  return (
    <div>
      <h2>RestockCake</h2>
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

export default RestockCake;