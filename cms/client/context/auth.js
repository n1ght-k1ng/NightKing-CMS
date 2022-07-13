import axios from "axios";
import { useState, useEffect , createContext } from "react";

const AuthContext = createContext()
const AuthProvider =({children}) =>{
    const [auth, setAuth] = useState({
        user: null ,
        token: ''

    })

    if(process.browser){
        axios.default.baseURL = process.env.NEXT_PUBLIC_API

    }
    else{
        axios.default.baseURL = process.env.API
    }

    useEffect(()=>{
        if(localStorage.getItem("auth")){
            setAuth(JSON.parse(localStorage.getItem("auth")))   
        }

    },[])
    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}

        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};