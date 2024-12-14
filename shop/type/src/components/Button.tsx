type buttonType = {
  children : React.ReactNode, 
  styling?: React.CSSProperties,
  setCount?:  React.Dispatch<React.SetStateAction<number>>| undefined,
}
const Button = ({children, styling, setCount}:buttonType) => {
  return (
    <>
    <button onClick={()=>{ 
     if (setCount){
      setCount((prev)=> prev +1)
     }

    }} style={styling}>
         {children}
    </button>
    
    </>
  )
}

export default Button