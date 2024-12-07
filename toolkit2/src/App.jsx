import "./App.css";
import BuyCake from "./components/BuyCake";
import { useSelector } from "react-redux";
function App() {
  const theme = useSelector((state) => state.cake.className);
  console.log(theme);
  return (
    <div className={theme}>
      <BuyCake />
    </div>
  );
}

export default App;
