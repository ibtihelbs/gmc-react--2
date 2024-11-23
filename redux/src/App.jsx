import "./App.css";
import { useSelector } from "react-redux";
import RestockPate from "./components/RestockPate";
function App() {
  const pate = useSelector((h) => h.pate.numberOfPate);
  const cashPate = useSelector((h) => h.pate.cash);
  const globalState = useSelector((state) => state);
  //console.log(globalState);
  return (
    <>
      <h1>number of pate : {pate} </h1>
      <h1>cash pate : {cashPate} </h1>
      <RestockPate />
    </>
  );
}

export default App;
