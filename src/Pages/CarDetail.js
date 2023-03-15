import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/Cardetail.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import moment from "moment/moment";
const CarDetail = (props) => {
    const [car, setcar] = useState([])
    const {id} = useParams()
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const isprice = car.price
    const dateCount = Math.round((endDate-startDate) / (1000 * 60 * 60 * 24));
    const realPrice = isprice * (dateCount + 1);
    const navigate = useNavigate('');
        useEffect(() => {
            axios 
            .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
            .then((res) => {
                console.log(res);
                setcar(res.data);
            })
            .catch((err) => console.log(err.message))
        }, []);
        //  console.log(car)
    
    const dotcurrency = (number) => {
         const currency = number;
         return new Intl.NumberFormat('de-DE').format(currency)
    }

   function totalprice() {
    if((dateCount >= 0) && (dateCount < 7))  {
        return(dotcurrency(realPrice))
    } else if(dateCount < 0) {
        return 0;
    } else {
        return "lebih dari 7 hari"
    }
    }

  const start = moment(startDate).format('LL');   
  const end =   moment(endDate).format('LL');  
  console.log(start)
  console.log(end)

   const HandleCreateorder = () => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            access_token: token,
        }
    }

    const payload = {
        "start_rent_at":  start,
        "finish_rent_at": end,
        "car_id": car.id
     }

    axios
    .post('https://bootcamp-rent-cars.herokuapp.com/customer/order', payload , config)
    .then((res) => {
        console.log(res)
        localStorage.setItem('start', res.data.start_rent_at)
        localStorage.setItem('end', res.data.finish_rent_at)
        localStorage.setItem('CarId', res.data.CarId)
        localStorage.setItem('total', res.data.total_price)
        localStorage.setItem('date', dateCount + 1)
        navigate(`/Paymentpage/${res.data.id}`)
        
    }) .catch((err) => err.message)
   }
 return (
        <div>
        <Navbar/>
        <div className="div-cardetail">
         <div className="container-detail">
        <div className="content-detail">
        <p className="Y">Tentang Paket</p>
        <ul className="x-title"> include </ul>
            <li  className="x">Apa saja yang termasuk dalam paket misal durasi max 12jam</li>
            <li  className="x">Sudah termasuk bensin selama 12 jam</li>
            <li  className="x">Sudah termasuk Tiket wisata</li>
            <li  className="x">Sudah termasuk pajak</li>
        <ul  className="x-title">Exclude</ul>
        <li className="x">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
        <li  className="x">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
        <li  className="x">Tidak termasuk akomodasi penginapan</li>
        <ul  className="x-title">Include</ul>
        <li  className="x">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
        <li  className="x">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
        <li  className="x">Tidak termasuk akomodasi penginapan</li>
        <li  className="x">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
        <li  className="x">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
        <li  className="x">Tidak termasuk akomodasi penginapan</li>
        <li  className="x">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
        <li  className="x">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
        <li  className="x">Tidak termasuk akomodasi penginapan</li>
        </div>
        <div className="detail-content">
         {Object.entries(car).length ? (
           <div className="carddetail">
             <img src={car.image} className="img-cardetail"/>
             <p className="h4-detail">{car.name}</p>
             <div className="person-detail">
             <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="gray" class="bi bi-people" viewBox="0 0 16 16">
             <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
            </svg>
            <p className="p-person">{car.category}</p>
             </div>
             <div className="div-calender">
             <p className="p-calender">Tentukan lama sewa mobil (max.7 hari)</p>
             <DatePicker 
             selectsRange={true}
             startDate={startDate}
             endDate={endDate}
             onChange={(update) => {
                setDateRange(update)
             }}
              isClearable={true}
              className="datepicker" placeholderText=" Pilih tanggal dan hari"/>
             <div className="div-totalprice">
              <p className="p-totalprice">Total</p>
              <p className="p-price">Rp.{totalprice()}</p>
             </div>
            {dateCount < 7 && startDate? 
             <button className="button-cardetail1" onClick={HandleCreateorder}>Lanjutkan Pembayaran</button>
             : 
             <button className="button-cardetail">Lanjutkan Pembayaran</button>
            }
           </div>
           </div>
         ) : (
            null
         )}
        </div>
         </div>
        </div>
        <Footer/>
        </div>
    );
}
 
export default CarDetail;