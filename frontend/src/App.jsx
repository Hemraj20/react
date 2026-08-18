import About from "./components/About"
import ApiData from "./components/ApiData"
import Counter from "./components/Counter"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import PasswordHideShow from "./components/PasswordHideShow"
import Qna from "./components/Qna"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Services from "./components/Services"
import Contacts from "./components/Contacts"
import Product from "./components/Product"
import ProductDetails from "./components/ProductDetails"

const Landing = ()=>{
  return(
    <div>
    <Hero/>
    <Counter/>
    <Qna/> 

    </div>
  )
}


const App = () => {
  return (
    <>
    <Router>
<Header/>
    <Routes>
    
    <Route path="/"element={<Landing/>}/>
    <Route path="/about"element={<About/>}/>
    <Route path="/api"element={<ApiData/>}/>
    <Route path="/logging"element={<PasswordHideShow/>}/>
    <Route path="/Services"element={<Services/>}/>
    <Route path="/Contact"element={<Contacts/>}/>
    <Route path="/product"element={<Product/>}/>
    <Route path="/products/:slug"element={<ProductDetails/>}/>
    
    {/* Hiiii */}

    </Routes>
<Footer/>
    </Router>
    </>
  )
}
export default App