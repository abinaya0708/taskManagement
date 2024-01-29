import {React} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Login } from "./Login";
import {Acnt} from "./Acnt"
import { useSelector } from "react-redux";
import { Form } from "./Form";
import { Home } from "./Home";
export const Routing=()=>{
    const State=useSelector((abi)=>abi.data)
    return(
       
        <BrowserRouter>
            {State.isAuth?
            <Routes>
                {/* <Route path="/" element={<Login/>}></Route> */}
                {/* <Route path="/home" element={</>}></Route> */}
                <Route path="/" element={<Form/>}></Route>
                <Route path="/Home" element={<Home/>}></Route>
            </Routes>
            :
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/home" element={<Acnt/>}></Route>
        
            </Routes>
            }
        </BrowserRouter>
        
    )
}