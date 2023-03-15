import { useEffect, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import "../Style/Navbar.css"

const Navbar = () => {
     const [login, setlogin] = useState(false)
     const [Myemail, setMyemail] = useState()
     const navigate = useNavigate('');
      
     useEffect(() => {
       const token = localStorage.getItem('token')
       const Email = localStorage.getItem('Email')

       if(!token) {
        setlogin(false)
       } else {
        setlogin(true)
       }
      
      if(Email) {
        setMyemail(Email)
      } else {
        setMyemail();
      }
     })

     const Handleremovetoken = () => {
       localStorage.removeItem('token');
       localStorage.removeItem('Email')
       navigate('/');
     }

     console.log(Myemail)
    return (
        <div className="div-navbar">
           <div className="container">
             <div className="content-navbar">
              <h3>Daffa surya</h3>
             </div>
             <div className="navbar-content">
               <ul className="navbar-list">
                <li className="li-navbar">Our services</li>
                <Link to={"/Whyus"} className="Link-li">
                <li className="li-navbar">Why us</li>
                </Link>
                <Link to={"/Testimonial"} className="Link-li">
                <li className="li-navbar">Testimonial</li>
                </Link>
                <Link to={'/FAQ'} className="Link-li">
                <li className="li-navbar">FAQ</li>
                </Link>
               {login ? <button className="button-register" onClick={Handleremovetoken}>Logout</button> :
                <Link to={"/Register"}>
                <button className="button-register">Register</button>
                 </Link> 
               }
               {login ? <div className="profile-navbar">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
               <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
               </svg>
               <p className="p-profile">{Myemail}</p>
                </div> 
               : null}
              </ul>
              <button className="button-navbar">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
               </svg>
              </button>
             </div>
           </div>
        </div>
    );
}
 
export default Navbar;