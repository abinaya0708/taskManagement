import {React} from "react";
import "./table.scss"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {update2 } from "./Store/Slice";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
export const Home=()=>{
const State=useSelector((abi)=>abi.data)
const nav=useNavigate();
const dispatch=useDispatch()

const edit=(i)=>{
    nav(`/?key=${i}`);
}
const trash=(i)=>{
    let y=State.arr2.filter((e,ind)=>{
        return i!==ind? e:""
    })
    dispatch(update2(y))
}
    return(
        <div style={{padding:"5% 0 0 25%"}}>
            <h1 style={{color:"aquamarine",padding:"0 0 5% 0"}}>Task Details</h1>
           <table>
                <tr>
                    <th>S.no</th>
                    <th>Task Name</th>
                    <th>Task Description</th>
                    <th>Completed or not</th>
                    <th>Time</th>
                    <th>Update</th>
                </tr>
                
                
                    {State.arr2.map((e,i)=>{
                        return(
                            <tr>
                                <td>{i+1}.</td>
                                <td>{e.name}</td>
                                <td>{e.des}</td>
                                {e.complete? <td>Completed</td>:<td>Incomplete</td>}
                                <td>{e.time}</td>
                                <td>
                                    <div style={{display:"flex"}}>
                                        <div style={{padding:"5px"}}>
                                            <button onClick={()=>edit(i)}><FaPencilAlt/></button>
                                        </div>
                                        <div style={{padding:"5px"}}>
                                            <button onClick={()=>trash(i)}><FaRegTrashAlt/></button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                    
                
           </table>
           </div>
    )
}