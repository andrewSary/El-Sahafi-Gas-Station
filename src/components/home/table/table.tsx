import { FunctionComponent } from "react"

interface taable {
    td1?:string,
    td2?:string,
    td3?:string,
    td4?:string,
    bgColor?:string
    color?:string

}

const Table : FunctionComponent<taable> = ({td1 , td2 , td3 , td4 , bgColor , color}) => {
    return (
       <thead style={{backgroundColor:bgColor , color:color}} className="bg-[#F4F2F2] ">
        <tr>
            <td>{td1}</td>
            <td className="py-[20px]">{td2}</td>
            <td>{td3}</td>
            <td>{td4}</td>
        </tr>
       </thead>
        
    )
}

export default Table