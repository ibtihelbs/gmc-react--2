import './App.css'
import BuyCake from './components/BuyCake'
import RestockCake from './components/RestockCake'
import { useSelector } from 'react-redux'
function App() {
  const globalState = useSelector(f => f.pate)
  console.log(globalState)
 const numberofcakes= useSelector(state=>state.cake.cakeNumber)
 const cakeTotalPrice = useSelector(state => state.cake.cakeTotalPrice)
  return (
    <>
      <BuyCake/>
      <RestockCake/>
      <h1>number of cakes : {numberofcakes} </h1> 
      <h1>price of cakes : {cakeTotalPrice} dt </h1> 
    </>
  )
}

export default App
