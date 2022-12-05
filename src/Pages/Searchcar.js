import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Filter from "../Components/Filter";
import Carcard from "../Components/Carcard";
import Footer from "../Components/Footer"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Searchcar = () => {
    const [car, setcar] = useState([]);
    const { id } = useParams();
    useEffect(() => {
    axios 
    .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car`)
    .then((res) => {
        console.log(res);
        setcar(res.data.cars);
    })
    .catch((err) => console.log(err.message))
}, []);

console.log(car)

 useEffect(()=> {}, []);

 const Handlefilter = (e) => {
    axios 
    .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${carname}&category=${Category}&isRented=${Stat}&minPrice=${minprice}&maxPrice=${max}`)
    .then((res) => {
        console.log(res);
        setcar(res.data);
    })
    .catch((err) => console.log(err.message))
 }

 const [carname, setcarname] = useState(``);
 const handlechangename = (e) => {
    setcarname(e.target.value)
 }

 const [Category, setcategory] = useState(``);
 const handleCategory = (e) => {
    setcategory(e.target.value)
 }

 const [Stat, setStat] = useState(``);
 const handlestat = (e) => {
    setStat(e.target.value)
 }

 const [minprice, setminprice] = useState(``);
 const handleMinprice = (e) => {
    setminprice(e.target.value)
 }

 const [max, setmax] = useState(``);
 const handlemax = (e) => {
    setmax(e.target.value)
 }

return (
<div>
 <Navbar/>
 <Banner isbtnshow={false}/>
 <Filter
  namefilter = {handlechangename}
  Categoryfilter = {handleCategory}
  statfilter = {handlestat}
  minfilter = {handleMinprice}
  maxfilter = {handlemax}
  handlesearch = {Handlefilter}
 />
 <Carcard mobil={car}/>
 <Footer/>
 </div>
       
    );
}
export default Searchcar;