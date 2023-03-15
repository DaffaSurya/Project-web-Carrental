import { Link } from "react-router-dom";
import "../Style/Cardcar.css"
const Carcard = (props) => {
    return (
        <div className="div-Carcard">
         {!!props.mobil.length ? (
            props.mobil.map((item) => {
                return(
                    <div className="div-card">
                    <img src={item.image} className="img-cardcar"/>
                    <div className="div-cardname">
                    <h6 className="h6-carcard">{item.name}</h6>
                    <h4 className="h4-price">RP.{item.price}</h4>
                    </div>
                    <h5 className="h5-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                    </h5>
                    <div>
                    <Link to={`/Cardetail/${item.id}`}>
                    <button className="button-cardcar">Pilih Mobil</button>
                    </Link>
                    </div>
                   </div>
                )
            })
         ): (
            <h2>Loading...</h2>
         )}
        </div>
    );
}
 
export default Carcard;