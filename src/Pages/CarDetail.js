import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/Cardetail.css"
const CarDetail = (props) => {
    const [car, setcar] = useState([])
    const {id} = useParams()

        useEffect(() => {
            axios 
            .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
            .then((res) => {
                console.log(res);
                setcar(res.data);
            })
            .catch((err) => console.log(err.message))
        }, []);
         console.log(car)
    return (
        <div>
        <Navbar/>
        <div className="div-cardetail">
         <div className="container-detail">
        <div className="content-detail">
        <h3 className="Y">Tentang paket</h3>
        <ul className="x"> include </ul>
            <li  className="x">Apa saja yang termasuk dalam paket misal durasi max 12jam</li>
            <li  className="x">Sudah termasuk bensin selama 12 jam</li>
            <li  className="x">Sudah termasuk Tiket wisata</li>
            <li  className="x">Sudah termasuk pajak</li>
        <ul  className="x">Exclude</ul>
        <li className="x">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
        <li  className="x">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
        <li  className="x">Tidak termasuk akomodasi penginapan</li>
        <ul  className="x">Include</ul>
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
             <h4 className="h4-detail">{car.name}</h4>
             <h5 className="h5-detail">Total</h5>
             <h5 className="h5-price-detail">Rp.{car.price}</h5>
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