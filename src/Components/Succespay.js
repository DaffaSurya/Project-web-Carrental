import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/Succespay.css";
const Succespay = () => {
const [cars , setcars] = useState({});
const {id} = useParams();

useEffect(() => {
   Handlegetcar();
}, [])

const Handlegetcar = () => {
 const token = localStorage.getItem('token');

 const config = {
     headers: {
      access_token: token,
     }
 }
 axios
 .get(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`, config)
 .then((res) => {
  console.log(res.data)
  setcars(res.data)
 })
 .catch((err) => err.message)
}
    return (
        <div>
           <div className="circle-tiket">
              <div className="circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-check2" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
              </div>
              <p className="p-tiket">Pembayaran Berhasil!</p>
              <p className="p-showtiket">Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
           </div>

           {/* ini tempat PDF VIEWER */}

           {Object.entries(cars).length ? 
           (<div className="div-boxpdf">
           <div className="container-boxpdf">
             <div className="div-box1">
               <p className="p-invoice">invoice</p>
               <p className="small-invoice">*no invoice</p>
             </div>
           <div className="div-box2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentcolor" class="bi bi-download" viewBox="0 0 16 16" className="logo-unduh">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            <p className="unduh">Unduh</p>
           </div>
           </div>

           {/* ini pdf view */}
           <div className="box-pdf">
           <img src={cars.slip} className="img-boxpdf"/>
           </div>
           </div>
           ):null}

          <div className="div-kosong">
          </div>
         </div>
    );
           
}
 
export default Succespay;