import { useSelector } from "react-redux";
const singleItem = () => {
  return (
    <div className="singleItem">
      <img src="holder" alt="holder" />
      <div>
        <h2>price</h2>
        <span> quantity </span>
        <button>X</button>
      </div>
    </div>
  );
};
const Cart = () => {
  const cart = useSelector((f) => f.cart);
  const { data, loading, error } = cart;
  if (loading) return <h1> Loading..</h1>;
  if (error) return <h1> andek mochkol..</h1>;
  return (
    <div
      className="cart"
      style={{
        position: "absolute",
        zIndex: 5,
        right: "50px",
        top: "100px",
        padding: "2rem",
        backgroundColor: "#888",
        borderRadius: "15px",
      }}
    >
      {data.length !== 0 ? (
        data.map((v) => (
          <div>
            <h1> {v.title} </h1>
            <img src={v.thumbnail} alt="ff" />
            <span> {v.quantity} </span> <span> {v.price} </span>
          </div>
        ))
      ) : (
        <h1>cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
