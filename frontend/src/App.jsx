import About from "./components/About"
import ApiData from "./components/ApiData"
import Counter from "./components/Counter"
import Dashboard from "./components/Dashboard"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import PasswordHideShow from "./components/PasswordHideShow"
import Qna from "./components/QNA"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

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
    <Route path="/Signing"element={<Dashboard/>}/>

    </Routes>
<Footer/>
    </Router>
    </>
  )
}
export default App