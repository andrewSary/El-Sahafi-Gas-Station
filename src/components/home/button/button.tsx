import { FunctionComponent } from "react"
import Leter from "../liter/liter"

interface botton{
    text?:string,
    bgColor?:string
}

const Button : FunctionComponent<botton>=({text , bgColor})=>{
    return(
        <p style={{backgroundColor:bgColor}} className="py-[20px] flex justify-center items-center mt-[50px]  px-[90px] text-white rounded-[12px]"> <Leter text="ريال" number="123456789"/><span className="ms-[50px]">{text}</span></p>
    )
}
export default Button