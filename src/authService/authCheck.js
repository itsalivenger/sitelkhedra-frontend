import { useHistory } from "react-router-dom";
export default function authCheck( setIsAuthenticated, setIsLoading) {
    let abrtctrl = new AbortController();
    fetch('http://localhost:5000/auth', {credentials: 'include', signal: abrtctrl.signal})
    .then(res=> res.json())
    .then(res=>{ 
        console.log(res)
        setIsAuthenticated(res.approved);
        
        if(setIsLoading){
            setIsLoading(false);
        }
    });
    
    return abrtctrl;
}
