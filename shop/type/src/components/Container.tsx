type containerType = {
    children?: React.JSX.Element,
    classes?: string,
   // tasks?:string[]
   tasks?:{
    title: string, 
    status: boolean
   }[],
   arr:[number, number, number, number],
   input:string,
   hundleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
//{
// name: string,
// phone: number
//}[]
const Container = ({children, classes, hundleChange, input}: containerType) => {
  
  return (
    <div className="bg-lime-400 mt-4 p-5 flex flex-col gap-3">
       <p>{input}</p>
        <div className={classes}>
            <input type="text"  onChange={ hundleChange} />
          {children}
        </div>
    </div>
  )
}
//React.ChangeEvent<HTMLInputElement>
export default Container