import { Redirect } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import authCheck from "./authService/authCheck";
import Loader from "./Loader/loader";

let Logout = ({ setLinks, setIsAuthenticated }) =>{
    let [ isLoadin, setIsLoading ] = useState(true);
    let abortCtr = new AbortController();
    useEffect(async ()=>{
        fetch('http://localhost:5000/logout', { credentials: 'include', signal: abortCtr.signal})
        .then(res=>{ 
            setIsAuthenticated(false);
            setIsLoading(false);
        })
        .catch(err=> <Redirect to='/profile'/>)

        return ()=> {
            abortCtr.abort();
        }
    })


    if(isLoadin){
        return <Loader />
    }else{
        return (
                <Redirect to='/login' />
    )}
}
export default Logout;