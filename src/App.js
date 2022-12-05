import './App.css'
import Homepage from './Pages/Homepage';
import CarDetail from './Pages/CarDetail';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Searchcar from './Pages/Searchcar';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='carimobil' element={<Searchcar/>}/>
        <Route path="/CarDetail/:id" element={<CarDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;