import {React, useEffect, useState} from "react";
import "./Form.scss";
import { update2 } from "./Store/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Form=()=>{
    const [name,setname]=useState("");
    const [des,setdes]=useState("");
    const [complete,iscomplete]=useState(false);
    const [fill,isFill]=useState(false);
    const State=useSelector((abi)=>abi.data)
    const dispatch=useDispatch();
    const nav=useNavigate()

    const change=(e)=>{
        if(e.target.name==="tname"){
            setname(e.target.value)
        }
        else  if(e.target.name==="tdes"){
            setdes(e.target.value)
        }
        else  if(e.target.name==="fulfill"){
            iscomplete(e.target.checked)
        }
        else if(e.target.name==="pending"){
            iscomplete(!e.target.checked)
        }
    }
    const [param]=useSearchParams();

    useEffect(()=>{
        if(param.get("key")!==null){
           let x= State.arr2.find((e,i)=>{
                return i===Number(param.get("key"))
            })
            setname(x.name)
            setdes(x.des)
            iscomplete(x.complete)
        }
        else{
            dispatch(update2(State.arr2))
            setname("")
            setdes("")
        }
    },[State.arr2,param,dispatch])
    const submit=(e)=>{
        e.preventDefault();
        if(name===""||des===""){
            isFill(true)
        }
        else if(param.get("key")!==null){
            let aob={name,des,complete,time:new Date().getHours()+":"+new Date().getMinutes()};
            let x=State.arr2.map((e,i)=>{
                return i===Number(param.get("key"))?aob:e
            })
            dispatch(update2(x));
            setname("")
            setdes("")
            iscomplete(true)
            
        }
        else {
            let obj={name,des,complete,time:new Date().getHours()+":"+new Date().getMinutes()}
            dispatch(update2([...State.arr2,obj]));
            isFill(false);
            setname("");
            setdes("");
            iscomplete(false);
            
        }
    }
    const view=(e)=>{
        e.preventDefault();
    nav("/Home")
    }
    console.log(State.arr2);
    return(
        <div>
            <form>
                <div className="container">
                    <div className="form-card">
                        <div className="det-div">
                            <label>Enter task name:</label>
                            <input type="text" placeholder="Task name" name="tname" onChange={change} value={name}/>
                            {fill&&name===""? <p style={{color:"red"}}>This field cannot be empty</p>:""}
                        </div>
                        <div className="det-div">
                            <label>Enter task Description:</label>
                            <input type="text" placeholder="Task Description" name="tdes" onChange={change} value={des}/>
                            {fill&&des===""? <p style={{color:"red"}}>This field cannot be empty</p>:""}
                        </div>
                        <div className="det-div" style={{display:"flex",justifyContent:"space-between",width:"70%"}}>
                            <input type="radio" name="fulfill" onChange={change} checked={complete}/>Completed
                            <input type="radio" name="pending" onChange={change} checked={!complete}/>Incomplete
                        </div>
                        <div className="det-div">
                            <button onClick={submit}>Submit</button>
                        </div>
                        <div className="det-div">
                            <button onClick={view}>View details</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}