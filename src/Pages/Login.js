import "../Style/Login.css";
import Landingpage from "../assets/Images/Landing page - Desktop.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Login = () => {
    const [Email, setEmail] = useState('');
    const [pas, setpas] = useState('');
    const [error, seterror] = useState('');
    const navigate = useNavigate('');
    const Handleemail = (e) => {
      setEmail(e.target.value)
    }

    const Handlepassword = (e) => {
       setpas(e.target.value)
    }
    
    console.log(Email)
    console.log(pas)

    const Handlebutton = async() => {
        if(!Email.length && !pas.length) {
          seterror('Masukkan email dan password terlebih dahulu');
        } else {
           const payload = {
             email: Email,
             password: pas,
           }

           try {
              const res = await axios.post(`https://bootcamp-rent-cars.herokuapp.com/customer/auth/login`, payload)
              console.log(res)
              localStorage.setItem('token', res.data.access_token);
              localStorage.setItem("Email",res.data.email);
              alert('welcome...')
              navigate('/carimobil');
             
           }
           catch (error) {
              console.log(error.response)
              seterror(error.response.data.message)
           }

        }
    }
     
    return (
      <div className="div-login">
       <div className="login-content1">
       <p className="p-logincontent1"></p>
       <p className="p-content1">Welcome Back!</p>
       <p className="email-login">Email</p>
       <input type={"text"} className="input-email-login" placeholder="Masukkan email" onChange={Handleemail}/>
       <p className="password-login">Password</p>
       <input type={"password"} className="input-password-login" placeholder="Masukkan password" onChange={Handlepassword}/>
       <div>
        <button className="button-login" onClick={Handlebutton}>Sign in</button>
       </div>
       <div className="div-p-login">
        <p>Don’t have an account?</p>
        <Link to={"/Register"}>
        <p className="p-signup">Sign up for free</p>
        </Link>
       </div>
       <div className="div-seterror">
       {error.length ? <div className="div-error">
         {error}
         </div>
       : null}
       </div>
       </div>
       <div className="login-content2">
       <p className="p-img-login">Binar Car Rental</p>
       <img src={Landingpage} className="img-content2"/>

        </div>
        </div>
    );
}
 
export default Login;