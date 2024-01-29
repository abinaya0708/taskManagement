import {React, useState} from "react";
import { Link} from "react-router-dom";
import "./Login.scss"
import { useDispatch } from "react-redux";
import { forAuth } from "./Store/Slice";
export const Login=()=>{
    const[name,setname]=useState("");
    const[pass,setpass]=useState("");
    const[isFill,setFill]=useState(false);
    const[nameerr,seterr]=useState(false);
    const[pswerr,seterror]=useState(false);
    // const State=useSelector((abi)=>abi.data)
    const dispatch=useDispatch()
    
    const change=(e)=>{
        e.preventDefault()
        if(e.target.name==="username"){
            setname(e.target.value)
        }
        else if(e.target.name==="psw"){
            setpass(e.target.value)
        }
    }
    const submit=(e)=>{
        e.preventDefault()
        if(name===""||pass===""){
            setFill(true)
        }
        
        else {
            const check=JSON.parse(localStorage.getItem("create")).some((e,i)=>{
                if(e.username!==name&&e.password!==pass){
                    seterr(true);
                    seterror(true);
                    setFill(false);
                }
                else if(e.username!==name&&e.password===pass){
                        seterr(true);
                        seterror(false);
                        setFill(false)
                }
                else if(e.username===name&&e.password!==pass){
                    seterror(true);
                    seterr(false);
                    setFill(false)
                }
                
                    return e.username===name&&e.password===pass
                

            });
            if(check===true){
                dispatch(forAuth(true))
            }
        }
        
    }
   
    
    return(
        <div>
            <form>
                <div className="container">
                    <h2 style={{color:"blue", textAlign:"center",padding:"10px"}}>Login-page</h2>
                    <div className="login-card">
                        <div className="det-div">
                            <input type="text" placeholder="Enter your username" name="username" onChange={change}/>
                            {isFill&&name==="" ? <p style={{color:"red"}}>*This field cannot be empty</p>:""}
                            {nameerr? <p style={{color:"red"}}>Enter correct username</p>:""}
                        </div>
                        <div className="det-div">
                            <input type="text" placeholder="Enter your password" name="psw" onChange={change}/>
                            {isFill&&name==="" ? <p style={{color:"red"}}>*This field cannot be empty</p>:""}
                            {pswerr? <p style={{color:"red"}}>Enter correct password</p>:""}
                        </div>
                        {/* {err? <p style={{color:"red"}}>Enter correct username and password</p>:""} */}
                        <div className="det-div">
                            <button onClick={submit}>Submit</button>
                        </div>
                        <Link to="/home">Create a new account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}