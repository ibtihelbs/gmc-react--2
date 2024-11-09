import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Posts from "./components/Posts";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/products");
      setData(res.data);
    };
    getData();
  }, [count]);

  return (
    <>
      <h1> products </h1>

      <Posts setCount={setCount} count={count} data={data} />
      <Form setCount={setCount} count={count} />
    </>
  );
}

export default App;
