import "../Style/Register.css";
import Landingpage from "../assets/Images/Landing page - Desktop.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name ,setname] = useState('');
  const [Email, setEmail] = useState('');
  const [pas, setpas] = useState('');
  const [Error, seterror] = useState('')
  const navigate = useNavigate('');

   const Handlename = (e) => {
    setname(e.target.value)
  }

  const HandleEmail = (e) => {
    setEmail(e.target.value)
  }

  const Handlepas = (e) => {
    setpas(e.target.value)
  }

  console.log(name)
  console.log(Email)
  console.log(pas)

  const HandleSignUp = async() => {
     if(!name.length && !Email.length && !pas.length) {
        seterror("Masukkan name , email dan Password terlebih dahulu");
     } else {
        const payload = {
           email : Email,
           password: pas,
           role : "Admin",
        }
       try {
          const res = await axios.post(`https://bootcamp-rent-cars.herokuapp.com/customer/auth/register`, payload) 
          console.log(res);
          navigate('/login');
       } catch (error) {
           if(error.response.status === 400) {
             console.log(error.response)
             seterror(error.response.data.message)
           } else if(error.response.status === 500) {
              console.log(error.response)
              seterror(error.response.data.errors[0].message)
           }
         } 
     } 
    }

  console.log(Error)
    return (
        <div className="div-register">
           <div className="regis-content1">
            <div className="">
              <p className="p-regiscontent"></p>
              <p className="p-titlecontent">Sign Up</p>
              <p className="p-nameregis">Name</p>
              <input type={"text"} className="input-nameregis" placeholder="Nama Lengkap" onChange={Handlename}/>
              <p className="p-Emailregis">Email*</p>
              <input type={"text"} className="input-Emailregis" placeholder="Contoh: johndee@gmail.com" onChange={HandleEmail}/>
              <p className="p-Pasregis"> Password*</p>
              <input type={"password"} className="input-Pasregis" placeholder="6+ karakter" onChange={Handlepas}/>
              <div>
                <button className="regis-button"onClick={HandleSignUp}>Sign Up</button>
              </div>
              <div className="div-p-signIn">
                <p className="">Already have an account?</p>
                <Link to={"/login"}>
                <p className="SignIn">Sign In here</p>
                </Link>
              </div>
              <div className="div-errorregis">
              {Error.length ? 
               <div className="div-notiferror">
                {Error}
               </div>
              : null}
              </div>
            </div>
           </div>
           <div className="regis-content2">
           <p className="p-img-login">Binar Car Rental</p>
            <img src={Landingpage} className="img-content2"/>
           </div>
        </div>
    );
}
 
export default Register;