import React,{useState} from "react";
import "./Home.scss"
import { useNavigate } from "react-router-dom";
export const Acnt=()=>{
    // const State=useSelector((abi)=>abi.data)
    const[username,setname]=useState("");
    const[password,setpass]=useState("");
    const[num,setnum]=useState("")
    const[isFill,setFill]=useState(false);
    const [aob,setaob]=useState(JSON.parse(localStorage.getItem("create"))||[])
    const nav=useNavigate()
    console.log(username,password);
    const check=(e)=>{
        e.preventDefault()
        if(e.target.name==="username"){
           setname(e.target.value)
        }
        if(e.target.name==="mbl"){
           
            setnum(e.target.value)
        }
        if(e.target.name==="psw"){
           setpass(e.target.value)
        }
    }
    
    
    const create=(e)=>{
        e.preventDefault();
        if(username===""||password===""){
            setFill(true)
        }
        else if(isFill===false){
            const users={username,num,password}
            setaob([...aob,users])
            localStorage.setItem("create",JSON.stringify([...aob,users]));
            
            nav("/")
        }
        else{
            setFill(false)
        }

    }
    
    return(
        <div>
             <form>
                <div className="container">
                <h2 style={{color:"blue", textAlign:"center",padding:"10px"}}>Account-creation-page</h2>
                    <div className="login-card">
                        <div className="det-div">
                            <input type="text"  placeholder="Enter your username" name="username" onChange={check}/>
                            {isFill&&username==="" ? <p style={{color:"red"}}>*This field cannot be empty</p>:""}
                        </div>
                        <div className="det-div">
                            <input type="number" placeholder="Enter your Mobile number" name="mbl" onChange={check}/>
                            {isFill&&username==="" ? <p style={{color:"red"}}>*This field cannot be empty</p>:""}
                        </div>
                        <div className="det-div">
                            <input type="text" placeholder="Enter your password" name="psw" onChange={check}/>
                            {isFill&&username==="" ? <p style={{color:"red"}}>*This field cannot be empty</p>:""}
                        </div>
                        <div className="det-div">
                            <button onClick={create}>Create Account</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}


                
                    
                        