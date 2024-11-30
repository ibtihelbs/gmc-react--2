import { useState } from "react";
import { useDispatch } from "react-redux";
import { buycake } from "../store/cakeSlice";
const BuyCake = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const restockFn = (e) => {
    e.preventDefault();
    dispatch(buycake(parseInt(input) || 0));
    setInput("");
  };
  return (
    <div>
      <h2>BuyCake</h2>
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

export default BuyCake;