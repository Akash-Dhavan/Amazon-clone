import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./layout/Header/Header";
import Home from './components/Home';
import Footer from './layout/Footer/Footer';
import Login from './components/login/Login';
import ListProduct from './components/listProduct/ListProduct';
import Profile from './components/profile/Profile';
import Orders from './components/order/Orders';
import Cart from './components/cart/Cart';
import AddProduct from './components/listProduct/AddProduct';
function App() {
  return (
    <>
      <BrowserRouter>
       
          <div>
            <Routes>
            <Route path="/" element={[<Header />, <Home />, <Footer />]}></Route>
            <Route path='/Profile' element={<Profile/>}>
            </Route>
            <Route path='/Login' element={<Login/>}>
            </Route>
            <Route path='' element={<ListProduct />}></Route>
            <Route path="/ListProduct" element={[<Header />, <Home />, <Footer />]}>

            </Route>
            <Route path="/Orders" element={[<Header />, <Orders />, <Footer />]}>
            </Route>
            <Route path="/Cart" element={[<Header />, <Cart />, <Footer />]}>
            </Route>
            <Route path="/AddProduct" element={[<AddProduct/>]}>
            </Route>
           
            </Routes>
          </div>
       
      </BrowserRouter>
    </> 
  );
}

export default App;
