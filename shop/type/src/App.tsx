
import './App.css'
import Container from './components/Container'
import Button from './components/Button'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [input, setInput]= useState('')

  const hundleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value)
  }
  let hello = "hello"

    const tasks = [{
      title: "work out",
      status: false
    },
    {
      title: "meal prep",
      status: false
    }]
    const arr : [number, number, number, number] =[12, 8, 50, 30]
  return (
    <>
     <h1 className='bg-red-300'> {hello} </h1>
     {count}
     <Button  setCount={setCount}  children={"hi"} />
    <Container tasks={tasks} arr={arr} hundleChange={hundleChange} input={input} >
      <h2>jfjiofjefis</h2>
    </Container>
    </>
  )
}

export default App
