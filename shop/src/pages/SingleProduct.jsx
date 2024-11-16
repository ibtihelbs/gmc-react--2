import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const SingleProduct = () => {
  const { ki } = useParams();

  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:3000/products/${ki}`);
      setData(res.data);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title} </h1>
        </div>
      ) : (
        <h1>wait</h1>
      )}
    </div>
  );
};

export default SingleProduct;
