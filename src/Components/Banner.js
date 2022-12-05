import '../Style/Banner.css'
import Car from "../assets/Images/Car flip Binar.png"
import { Link } from 'react-router-dom';

const Banner = (props) => {
    return (
        <div className='div-banner'>
         <div className='container-banner'>
            <div className='content-banner'>
              <p className='p-banner'>Sewa & Rental mobil terbaik di kawasan (lokasimu)</p>
              <p className='banner-text'>Selamat datang di Binar car rental. Kami menyediakan mobil kualitas terbaik 
                dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 Jam.
              </p>
              {

                props.isbtnshow ? (
                <Link to={'/carimobil'}>
              <button className='button-banner'>
                Mulai sewa mobil
              </button>
               </Link>): null

               } 
            </div>
            <div className='banner-content'>
             <img src={Car} alt="image" className='image-Banner'/>
            </div>
         </div>
        </div>
    );
}
 
export default Banner;