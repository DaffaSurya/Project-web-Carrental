import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../CSS/Paymentcard.css"
const Paymentcard = () => {
const [Bca, setBca] = useState(false);
const [Bni ,setBni] = useState(false);
const [mandiri ,setmandiri] = useState(false);
const {id} = useParams();
const [result , setresult] = useState([]);

useEffect(() => {
  const token = localStorage.getItem('token')
  
  const config = {
    headers: {
      access_token: token,
    }
  }

  axios
  .get(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`, config)
  .then((res) => {
    console.log(res.data.Car)
    setresult(res.data.Car)
  })
}, [])

const HandleATMBCA = () => {
   setBca(true)
   setBni(false)
   setmandiri(false)
   localStorage.setItem('Bank', "BCA Transfer");
}

const HandleATMBNI = () => {
   setBni(true)
   setBca(false)
   setmandiri(false)
   localStorage.setItem('Bank', "BNI Transfer");
}

const HandleATMmandiri = () => {
    setmandiri(true)
    setBca(false)
    setBni(false)
    localStorage.setItem('Bank', "Mandiri Transfer");
}

const Total = localStorage.getItem('total')
const dateCount = localStorage.getItem('date')

const dotcurrency = (number) => {
  const currency = number;
  return new Intl.NumberFormat('de-DE').format(currency)
}


    return (
        <div className="div-paymentcard">
          <div className="card-ATM">
           <p className="ATM-title">Pilih Bank Transfer</p>
           <p className="ATM-information">Kamu bisa membayar dengan transfer melalui ATM,
            Internet Banking atau Mobile Banking</p>

            {/* // ini untuk card BCA */}
            {Bca ?  
            <div className="div-cardBank" onClick={HandleATMBCA}>
             <div className="div-borderBCA">
              <p className="p-borderATM">BCA</p>
             </div>
              <p className="p-transferATM">BCA Transfer</p>
              <p className="p-checklist">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" class="bi bi-check-lg" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg> </p>
            </div>
            :  <div className="div-cardBank" onClick={HandleATMBCA}>
            <div className="div-borderBCA">
             <p className="p-borderATM">BCA</p>
            </div>
             <p className="p-transferATM">BCA Transfer</p>
           </div>}

           {/* // ini untuk card BNI */}

          {Bni ?
            <div className="div-BNI" onClick={HandleATMBNI}>
             <div className="div-borderBCA">
              <p className="p-borderATM">BNI</p>
             </div>
              <p className="p-transferATM">BNI Transfer</p>
              <p className="p-checklist">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" class="bi bi-check-lg" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
              </p>
            </div> : 
            <div className="div-BNI" onClick={HandleATMBNI}>
             <div className="div-borderBCA">
              <p className="p-borderATM">BNI </p>
             </div>
              <p className="p-transferATM">BNI Transfer</p>
            </div>}

            {mandiri ? 
            <div className="div-BNI" onClick={HandleATMmandiri}>
            <div className="div-borderBCA" >
              <p className="p-borderATM">Mandiri</p>
             </div>
              <p className="p-transferATM">Mandiri Transfer</p>
              <p className="p-checklist">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" class="bi bi-check-lg" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
              </p>
            </div>
            : 
            <div className="div-BNI" onClick={HandleATMmandiri}>
            <div className="div-borderBCA">
              <p className="p-borderATM">Mandiri</p>
             </div>
              <p className="p-transferATM">Mandiri Transfer</p>
            </div>  }
          </div>
        
          {/* batas */}
           {Object.entries(result).length ? (
            <div className="payment-result">
            <p className="result-namecar">{result.name}</p>
            <p className="p-sizeCar">{result.category}</p>
            <div className="price-payment">
               <p className="total-result">Total</p>
               <p className="price-result">Rp.{dotcurrency(Total)}</p>
            </div>
            <p className="p-Harga">Harga</p>
            <div className="harga-total-day">
              <p className="information">sewa mobil {result.price} untuk {dateCount} hari</p>
              <p className="price-information">Rp. {dotcurrency(Total)}</p>
            </div>
            <p className="biaya-lainnya">Biaya Lainnya</p>
            <li className="li-pajak">
              <p>Pajak</p>
              <p className="termasuk">Termasuk</p>
            </li>
            <li className="li-pajak">
              <p>Biaya makan sopir</p>
              <p className="termasuk">Termasuk</p>
            </li>
            <p className="belum-termasuk">Belum termasuk</p>
            <li className="li-pajak">Bensin</li>
            <li className="li-pajak">Tol dan parkir</li>
            <div className="Total-end-payment">
              <p className="TOTAL">Total</p>
              <p className="price-information">Rp {dotcurrency(Total)}</p>
            </div>                     
          {!Bca && !Bni && !mandiri ?
          <button className="button-bayar1">Bayar</button>
           :
           <Link to={`/ATMpayment/${id}`}>
          <button className="button-bayar">Bayar</button>
          </Link>}
          </div>
           ) : (null) }
        </div>
    );
}
 
export default Paymentcard;