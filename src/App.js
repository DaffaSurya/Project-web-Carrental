import './App.css'
import Homepage from './Pages/Homepage';
import CarDetail from './Pages/CarDetail';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Searchcar from './Pages/Searchcar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Carouselreview from './Components/Carouselreview';
import Cardcontent from './Components/Cardcontent';
import Dropdown from './Components/Dropdown';
import Paymentpage from './Pages/Paymentpage';
import Protectedroute from './Hoc/Protectedroute';
import ATMpayment from './Pages/ATMpayment';
import Ticket from './Pages/Tiket';
const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='carimobil' element={<Searchcar/>}/>
        <Route path="/CarDetail/:id" element={<CarDetail/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path="/Testimonial" element={<Carouselreview/>}/>
        <Route path='/Whyus' element={<Cardcontent/>}/>
        <Route path='/FAQ' element={<Dropdown/>}/>
        <Route element={<Protectedroute/>}>
        <Route path='/Paymentpage/:id' element={<Paymentpage/>}/>
        <Route path='/ATMpayment/:id' element={<ATMpayment/>}/>
        <Route path='/Ticketpayment/:id' element={<Ticket/>}/>
        </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;