import { useCallback, useEffect, useState } from "react";
import "../CSS/BreadcrumbATM.css";
import moment from "moment/moment";
import { useDropzone } from "react-dropzone";
import Countdown from "./Countdown";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Confirmpay = () => {
  const [upload, setupload] = useState(false);
  const [Bca , setBca] = useState(true);
  const [MBca , setMBca] = useState(false);
  const [klik , setKlik] = useState(false);
  const [Internet , setinternet] = useState(false);
  const [img, setimg] = useState(true)
  const {id} = useParams();
  const navigate = useNavigate();
  

  const Handleconfirmpay = () => {
        setupload(true)
  }

  const HandleATMBCA = () => {
    setBca(true);
    setMBca(false)
    setKlik(false)
    setinternet(false)
  }

  const HandleMBCA = () => {
    setMBca(true);
    setKlik(false);
    setinternet(false)
    setBca(false)
  }

  const Handleklik = () => {
    setKlik(true)
    setBca(false)
    setinternet(false)
    setMBca(false)
  }

  const Handleinternet = () => {
    setinternet(true)
    setKlik(false)
    setMBca(false)
    setBca(false)
  }

  // ini untuk local storage ATM
    const Bank = localStorage.getItem('Bank');
  // ini penutupnya
  
   const today = new Date();
   const tomorrow = new Date(today);
   tomorrow.setDate(tomorrow.getDate() + 2)

   console.log(tomorrow)
  //  const startDay = localStorage.getItem('start');
   const Total = localStorage.getItem('total');

   const dotcurrency = (number) => {
    const currency = number;
    return new Intl.NumberFormat('de-DE').format(currency)
  }

  // ini untuk dropzone
  const [files, setfiles] = useState([]);
  console.log(files)
  

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {
      'image/*': []
     },
     onDrop: acceptedFiles => {
      setfiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
  }
}
  )
 const getImage = files.map(file => (
    <div className="getimg" key={file.name}>
     <div className="img-container">
       <img
       src={file.preview}
       className="img-dropzone"
       onLoad={() => {URL.revokeObjectURL(file.preview)}}
       />
     </div>
    </div>
  ))

  useEffect(() => {
   return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [])

  
const handledropzone = () => {
  setimg(false)
} 


// get handle orderID
const handleorderID = () => {
  const token = localStorage.getItem('token');

  const configurasi = {
     headers: {
      access_token: token,
     },
  }

  axios
  .get(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`, configurasi)
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => err.message)
}

useEffect(() => {
  handleorderID()
},[])

// API UPLOAD PAYMENT SLIP

const Handlepaymentslip = async() => {
 const token = localStorage.getItem('token');

 const config = {
   headers: {
    access_token: token,
   },
 }

 const formdata = new FormData();
 formdata.append('slip', files[0]);

  try {
     const res = await axios.put(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}/slip`, formdata, config)
     console.log(res.data)
     navigate(`/Ticketpayment/${id}`)
  }
   catch(error) {
    console.log(error.message);
  }
}

return (
        <div>
            <div className="div-Confirmpayment">
            <div className="Content-1">
             <div className="div-Endpayment">
               <div className="date-payment">
                  <p className="p-date">Selesaikan Pembayaran Sebelum</p>
                <p className="p-date1">{moment(tomorrow).format('Do MMMM YYYY, h:mm:ss a')}</p>
               </div>

               <div className="div-countdown">
                 <h2 className="p-countdown"><Countdown/></h2>
               </div>
             </div>

              {/* bates - bates */}
             <div className="transfer-session">
                <p className="p-transfer">Lakukan transfer ke</p>
                <div className="div-ATMtransfer">
                   <div className="ATM-transfer">
                     <p>ATM</p>
                   </div>

                   <div className="name-transferATM">
                     <p className="p-">{Bank}</p>
                     <p className="">a.n Binar Car Rental</p>
                   </div>
                </div>
                <p className="p-nomorRekening">Nomor Rekening</p>
                <div className="input-noRek">
                  <p className="p-noRek">54104257877</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-clipboard2" viewBox="0 0 16 16" className="copy-icon">
                  <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z"/>
                  <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
                  </svg>
                </div>
                
                <p className="p-bayar">Total Bayar</p>
                <div className="input-noRek">
                <p className="p-noRek">{dotcurrency(Total)}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-clipboard2" viewBox="0 0 16 16" className="copy-icon">
                  <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z"/>
                  <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
                  </svg>
                </div>

                {/* ini cara cara pembayaran untuk berbagai atm */}
             </div>
             <div className="detail-otherpayment">
                <p className="p-Instruksipay">Instruksi Pembayaran</p>
                <div className="div-methodpay">
                  <div className="method1">
                   <p onClick={HandleATMBCA}>ATM BCA</p>
                  </div>

                  <div className="method2">
                    <p onClick={HandleMBCA}>M-BCA</p>
                  </div>

                  <div className="method2">
                     <p onClick={Handleklik}>BCA-Klik</p>
                  </div>

                  <div className="method2">
                    <p onClick={Handleinternet}>Internet Banking</p>
                  </div>
                </div>

                  {/* ini detail payment ATM */}
              
              {Bca ?
                <div className="div-detailATM">
                  <p>Masukkan kartu ATM lalu pin</p>
                  <p>Pilih menu "transaksi lainnya - transfer " Ke Rek BCA virtual Account </p>
                  <p>Masukkan virtual BCA Account 70020+Order ID</p>
                  <p>Contoh:</p>
                  <p>No peserta: 12345678 maka ditulis 7002012345678</p>
                  <p>Layar ATM akan menampilkan konfirmasi</p>
                  <p>Ambil dan Simpanlah Bukti transaksi tersebut</p>
                </div> : null }
              
              {MBca ? 
              <div className="div-detailATM">
              <p>Masuk ke M - BCA aplikasi</p>
              <p>Pilih menu "transaksi lainnya - transfer " Ke  Mobile BCA </p>
              <p>Masukkan M-BCA 70020+Order ID</p>
              <p>Contoh:</p>
              <p>No peserta: 12345678 maka ditulis 7002012345678</p>
              <p>Layar ATM akan menampilkan konfirmasi</p>
              <p>Ambil dan Simpanlah Bukti transaksi tersebut</p>
            </div> : null}

            {klik ?
            <div className="div-detailATM">
            <p>Masukkan kartu ATM lalu pin</p>
            <p>Pilih menu "transaksi lainnya - transfer " Ke Rek BCA klik </p>
            <p>Masukkan virtual BCA Klik 70020+Order ID</p>
            <p>Contoh:</p>
            <p>No peserta: 12345678 maka ditulis 7002012345678</p>
            <p>Layar ATM akan menampilkan konfirmasi</p>
            <p>Ambil dan Simpanlah Bukti transaksi tersebut</p>
            </div> : null}

            {Internet ? 
            <div className="div-detailATM">
            <p>Masukkan ke Aplikasi internet banking</p>
            <p>Pilih menu "transaksi lainnya - transfer " Ke Rek BCA virtual Account </p>
            <p>Masukkan virtual internet banking 70020+Order ID</p>
            <p>Contoh:</p>
            <p>No peserta: 12345678 maka ditulis 7002012345678</p>
            <p>Layar aplikasi akan menampilkan konfirmasi</p>
            <p>Simpanlah Bukti transaksi tersebut</p>
           </div> : null}
               


              </div>
            </div>

            {/* batas */}

            <div className="Content-2">
              {upload ?
               <div className="div-uploadpay">
              <p className="p-konfirmasipembayaran">Konfirmasi Pembayaran</p>
              <div className="div-p-upload">
              Terima kasih telah melakukan konfirmasi pembayaran. 
              Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.
              </div>
              <p className="p-upload">Upload Bukti pembayaran</p>
              <div className="div-p-upload1">
              Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu
              </div>
              <div className="div-Dropzone">
              <div {...getRootProps()} className='div-dropzone'>
             <input {...getInputProps()} onClick={handledropzone} className="input-dropzone" />
             {img ? <p className="p-dropzonetext">drop this file...</p>:
             <p></p>}
            <aside>
              {getImage}
            </aside>
            </div>
              </div>
              <button className="button-uploadconfirm" onClick={Handlepaymentslip}>Upload</button>
              </div> : 
              <div className="konfirmasi-pembayaran">
                <p className="p-confirmation">Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                <button className="button-confirmation" onClick={Handleconfirmpay}>Konfirmasi Pembayaran</button>
              </div>
              }
            </div>
            </div>
        </div>
    );
}
 
export default Confirmpay;