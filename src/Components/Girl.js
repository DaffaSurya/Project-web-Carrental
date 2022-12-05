import "../Style/Girl.css"
import Girls from "../assets/Images/Happy Girl.png"
const Girl = () => {
    return (
        <div className="div-girl">
           <div className="container-girl">
              <div className="content-girl">
               <img src={Girls} className="image-girl" alt="Image picture"/>
              </div>
              <div className="content-text">
                <p className="p-content-girl">Best Car Rental for any kind of trip in (lokasimu)!</p>
                <p className="text-p">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                 serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                 <div className="div-content-girl">
                    <ul className="ul-content-girl">
                      <li className="li-content">Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                      <li className="li-content-1">Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                      <li className="li-content-2">Sewa Mobil Jangka Panjang Bulanan</li>
                      <li className="li-content-3">Gratis Antar - Jemput Mobil di Bandara</li>
                      <li className="li-content-4">Layanan Airport Transfer / Drop In Out</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
    );
}
 
export default Girl;