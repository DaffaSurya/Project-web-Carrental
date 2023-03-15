import Navbar from "../Components/Navbar";
import BreadcrumbAtm from "../Components/BreadcrumbAtm";
import Confirmpay from "../Components/Confirmpayment";
import Footer from "../Components/Footer";
const ATMpayment = () => {
    return (
        <div>
           <Navbar/>
           <BreadcrumbAtm/>
           <Confirmpay/>
           <Footer/>
        </div>
    );
}
 
export default ATMpayment;