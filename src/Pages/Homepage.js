import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Girl from "../Components/Girl";
import Cardcontent from "../Components/Cardcontent";
import Testimonial from "../Components/Testimonial";
import Carouselreview from "../Components/Carouselreview";
import Buttoncarosel from "../Components/Buttoncarosel";
import Carrental from "../Components/Carrental";
import Dropdown from "../Components/Dropdown";
import Footer from "../Components/Footer";
const Homepage = (props) => {
    return(
        <div>
       <Navbar/>
       <Banner isbtnshow={true}/>
       <Girl/>
       <Cardcontent/>
       <Testimonial/>
       <Carouselreview/>
       <Buttoncarosel/>
       <Carrental/>
       <Dropdown/>
       <Footer/>
       </div>
    )
}

export default Homepage;