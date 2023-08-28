import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
import HomeNavBar from "./components/Navs/HomeNavBar";
import HomeFooter from "./components/footer/HomeFooter";
import { Outlet } from "react-router-dom";

function App() {

  

  return (
    <>
    <HomeNavBar />
        <Outlet/>
    <HomeFooter />
          
    </>
  )
}

export default App
