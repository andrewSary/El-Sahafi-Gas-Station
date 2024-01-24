import { FunctionComponent } from "react"

interface Liter {
    number? : string,
    text? : string,
    bgColor? : string,
    radius? : string,
    p? : string

}

const Leter : FunctionComponent<Liter> = ({number , text , bgColor , radius , p}) => {
    return (
        <p style={{
            backgroundColor: bgColor,
            borderRadius : radius,
            padding : p
        }} className="flex items-center text-[18px] font-[700] justify-center gap-5 "><span>{text}</span>{number}</p>
    )
}

export default Leter