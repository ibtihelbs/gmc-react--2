import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../store/cakeSlice";
const BuyCake = () => {
  const cake = useSelector((item) => item.cake);
  const { numberOfCakes, profit } = cake;
  const [inputs, setInputs] = useState({
    number: 0,
    price: 0,
  });
  const dispatch = useDispatch();
  const hundleSubmit = (e) => {
    e.preventDefault();
    if (numberOfCakes == 0) {
      alert("no cakes !");
    } else {
      dispatch(buyCake(inputs));
    }
    setInputs({
      number: 0,
      price: 0,
    });
  };
  return (
    <div>
      <h1> number of cakes : {numberOfCakes} </h1>
      <h2> cake profit : {profit} dt </h2>
      <form onSubmit={hundleSubmit}>
        <input
          type="text"
          placeholder="number"
          name="number"
          value={inputs.number}
          onChange={(e) =>
            setInputs((prev) => ({
              ...prev,
              [e.target.name]: parseFloat(e.target.value),
            }))
          }
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          value={inputs.price}
          onChange={(e) =>
            setInputs((prev) => ({
              ...prev,
              [e.target.name]: parseFloat(e.target.value),
            }))
          }
        />
        <button>send</button>
      </form>
    </div>
  );
};

export default BuyCake;
