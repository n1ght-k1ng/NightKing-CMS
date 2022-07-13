import { useContext } from "react";
import ToggleTheme from "../components/ToggleTheme";
import {AuthContext} from "../context/auth"

 
function Home (){

    const [auth , setAuth] = useContext(AuthContext); //gives us the value of AuthContext 
    return(

        <div> 
            <h1> Home</h1>
            <pre>{JSON.stringify(auth,null,6)}</pre>
            {/* <ToggleTheme/> */}
        </div>
    )
} 
export default Home;