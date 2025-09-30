import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Footer from './componets/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Cartslice from './stores/Cartslice';
import Cart from './pages/Cart';
import Upload from './pages/Upload';
import Update from './pages/Update';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/update' element={<Update/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
        <Footer />
     </BrowserRouter>
    
    </div>
  );
}

export default App;
