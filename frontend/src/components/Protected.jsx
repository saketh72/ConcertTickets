import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "./Login";

function Protected(props) {
    const {Component} = props;
    const nav = useNavigate();
    let login = localStorage.getItem('login');
    useEffect(()=> {
        if(login === false) {
            console.log("login");
            console.log(login);
            nav('/login');
        }
    })

    return (
        <div>
            {
                login? (<Component/>) : (<Login />)
            }
            
        </div>
    );
}

export default Protected;