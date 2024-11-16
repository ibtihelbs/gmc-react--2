import axios from "axios";
import { Link } from "react-router-dom";
const Post = ({ v, count, setCount }) => {
  const { title, price, id, description } = v;
  const deleteFn = async () => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      setCount(count - 1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="rounded-md p4 border border-solid grid gap-2">
      <div className="flex justify-between">
        <Link to={`/singleproduct/${id}`}> details </Link>
        <button onClick={deleteFn}>x</button>
      </div>
      <h1>{title}</h1>
      <h2> {price} </h2>
      <p> {description} </p>
    </div>
  );
};

export default Post;
