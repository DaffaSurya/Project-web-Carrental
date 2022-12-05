import "../Style/Carousel.css"
import Man from "../assets/Images/man.png"
import star from "../assets/Images/star.jpg"
import women from "../assets/Images/women.png"
const Carouselreview = () => {
    return (
        <div className="div-carousel">
          <div className="container-carousel">
           <div className="content-carousel1">
            <div className="logo-carousel1">
              <img src={star} className="Star" alt="IMAGE"/>
            </div>
            <div className="review-carousel1">
              <p className="p-review">sed do eiusmod lorem ipsum dolor sit amet,
              consectetur adipiscing elit, 
              sed do eiusmod lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed </p>
              <p className="text-review">
                2,Bromo
              </p>
            </div>
           </div>
           <div className="content-carousel">
            <div className="profile-carousel">
              <div className="image-carousel">
                <img src={Man} alt="image" className="profile"/>
              </div>
            </div>
            <div className="review-carousel">
              <div className="review-result">
                <div className="logo-carousel">
                  <img src={star} className="Star" alt="image"/>
                  <img src={star} className="Star" alt="image"/>
                  <img src={star} className="Star" alt="image"/>
                  <img src={star} className="Star" alt="image"/>
                  <img src={star} className="Star" alt="image"/>
                </div>
                <p className="p-review">“Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod”</p>
                <p className="text-review">
                John Dee 32, Bromo   
                </p>
              </div>
            </div>
           </div>
           <div className="content-carousel">
           <div className="profile-carousel">
              <div className="image-carousel">
                <img src={women} alt="image" className="profile"/>
              </div>
            </div>
            <div className="review-carousel">
              <div className="review-result">
                <div className="logo-carousel">
                  <img src={star} className="Star"/>
                  <img src={star} className="Star" alt="image"/>
                  <img src={star} className="Star" alt="image"/>
                  <img src={star} className="Star" alt="image"/>
                  <img src={star} className="Star" alt="image"/>
                </div>
                <p className="p-review">“Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod”</p>
                <p className="text-review">
                John Dee 32, Bromo   
                </p>
              </div>
            </div>
           </div>
          </div>
        </div>
    );
}
 
export default Carouselreview;