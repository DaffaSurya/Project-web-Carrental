import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/Detailorder.css"
import moment from "moment";
 const Detailorder = () => {
   const {id} = useParams();
   const [order, setorder] = useState([])
   
   useEffect(() => {
     const token = localStorage.getItem('token');

     const config = {
       headers: {
         access_token: token,
       }
     }

     axios
     .get(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`, config)
     .then((res) => {
        console.log(res.data.Car)
        setorder(res.data.Car)
     })
     .catch((err) => err.message)
   }, [])
   const END = localStorage.getItem('end');
   const Start = localStorage.getItem('start')
   const Timestart = moment(Start).format("Do MMM YY");  
   const Timeend = moment(END).format("Do MMM YY");  
    return (
        <div>
         {Object.entries(order).length ? (
           <div className="order-card">
            <div className="card-order">
               <p className="title-order">Detail Pesananmu</p>
               <p className="tipe-order">Nama/Tipe Mobil</p>
               <p className="name-order">{order.name}</p>
            </div>
            <div className="card-order">
            <p className='p-card-order'>Kategori</p>
            <p className="name-order">{order.category}</p>
            </div>
            <div className="card-order">
            <p className='p-card-order'>Tanggal Mulai Sewa</p>
            <p className="name-order">{Timestart}</p>
            </div>
            <div className="card-order">
            <p className='p-card-order'>Tanggal Akhir Sewa</p>
            <p className="name-order">{Timeend}</p>
            </div>
            </div>
         ): null}
         </div>
    );
 }
  
 export default Detailorder;