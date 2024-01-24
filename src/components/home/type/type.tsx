import { FunctionComponent } from "react"

interface taype{
    Color?:string,
    input?:string
}
const Type: FunctionComponent<taype>=({Color, input })=>{
    return(
        <p className="font-[700] text-[18px]" style={{color:Color}} >{input}</p>
    )
}
export default Type