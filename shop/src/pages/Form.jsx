import { useState } from "react";
import axios from "axios";
const Form = () => {
  const [inputs, setInputs] = useState({
    title: "",
    price: 0,
    description: "",
  });
  const postFn = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/products", inputs);
    setInputs({
      title: "",
      price: 0,
      description: "",
    });
  };

  return (
    <form
      onSubmit={postFn}
      className="w-96 border capitalize grid gap-3 border-solid rounded-md p-4"
    >
      <div className="flex flex-col items-start gap-2 ">
        <label htmlFor="title">title :</label>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={inputs.name}
          className="border-2 w-full border-solid rounded-full p-2"
          onChange={(e) =>
            setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          required
        />
      </div>
      <div className="flex flex-col items-start  gap-2">
        <label htmlFor="price">price</label>
        <input
          type="number"
          placeholder="price"
          className="border-2 w-full border-solid rounded-full p-2"
          name="price"
          onChange={(e) =>
            setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          required
        />
      </div>
      <div className="flex flex-col items-start  gap-2">
        <label htmlFor="description">description</label>
        <textarea
          type="number"
          placeholder="description"
          className="border-2 w-full border-solid rounded-lg p-2"
          name="description"
          onChange={(e) =>
            setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          required
        ></textarea>
      </div>
      <button className="px-4 py-2 border-2 w-full border-solid rounded-full p-2 place-self-start hover:bg-orange-500  ">
        send
      </button>
    </form>
  );
};

export default Form;
