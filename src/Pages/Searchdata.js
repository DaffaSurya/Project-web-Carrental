import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Searchdata = () => {
    const [Api, setApi] = useState([]);
    useEffect(() => {
    axios 
    .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
    .then((res) => {
        console.log(res);
        setApi(res.data);
    })
    .catch((err) => console.log(err.message))
}, []);

console.log(Api)

  useEffect(()=> {}, []);
    return (
        <div>
            
        </div>
    );
}
 
export default Searchdata;