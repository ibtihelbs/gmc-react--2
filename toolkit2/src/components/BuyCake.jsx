import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCake, setTheme } from "../store/cakeSlice";
const BuyCake = () => {
  const cake = useSelector((item) => item.cake);
  const [mode, setMode] = useState(false);
  const { numberOfCakes, profit } = cake;
  const [inputs, setInputs] = useState({
    number: "",
    price: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme(mode));
  }, [mode]);

  const hundleSubmit = (e) => {
    e.preventDefault();

    if (mode) {
      dispatch(buyCake(inputs));
    } else {
      dispatch(restockCake(inputs));
    }
    setInputs({
      number: "",
      price: "",
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          setMode(!mode);
          if (numberOfCakes <= 0) {
            setMode(false);
          }
          if (profit <= 0) {
            setMode(true);
          }
        }}
      >
        {" "}
        {mode ? "Buy" : "Restock"}
      </button>
      <h1> number of cakes : {numberOfCakes} </h1>
      <h2> cake profit : {profit} dt </h2>
      <form onSubmit={hundleSubmit}>
        <input
          type="number"
          min="1"
          placeholder="number"
          name="number"
          value={inputs.number}
          onChange={(e) =>
            setInputs((prev) => ({
              ...prev,
              [e.target.name]: parseFloat(e.target.value),
            }))
          }
          required
        />
        <input
          type="number"
          min="1"
          placeholder="price"
          name="price"
          value={inputs.price}
          onChange={(e) =>
            setInputs((prev) => ({
              ...prev,
              [e.target.name]: parseFloat(e.target.value),
            }))
          }
          required
        />
        <button>send</button>
      </form>
    </div>
  );
};

export default BuyCake;
