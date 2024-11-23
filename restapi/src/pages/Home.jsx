import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/countries");
      setData(res.data);
    };
    getData();
  }, []);

  return <div>Home</div>;
};

export default Home;
