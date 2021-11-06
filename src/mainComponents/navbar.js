import css from "./navbar.css";
import { Link, useLocation } from "react-router-dom";

let Navbar = ({ isAuth: isAuthenticated })=>{
    let links = [];
    if(isAuthenticated){
        links = ['profile', 'logout'];
    }else{
        links = ['login', 'SignUp'];
    }

    let txt = [['Products', 'Products'],  ['Cartel','Cartel'] ,['About us','AboutUs'], [links[0], links[0]],
     [links[1],links[1]]];
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light our-nav">
                <Link className="navbar-brand" id='brando' to='/'><i style={{fontSize:"24px"}} className='fas clover'>&#xf4d8;</i>Les Maitres de frutell</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                {
                        txt.map((e,i)=>{
                            return <Link to={`/${e[1]}`} className="nav-item nav-link links" key={i}>
                                <div className="list">{e[0]}</div></Link>
                        })
                    }
                </div>
            </div>
            <div className="input-container">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <a href='https://www.google.com' id="search"><i className="fa">&#xf002;</i></a>
                            </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with checkbox" />
            </div>
            </nav>
        </div>
    )
}

export default Navbar;