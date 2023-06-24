import { Outlet } from "react-router-dom";
import Navbar from "../Componants/NavBar/Navbar";
import Footer from "../Componants/Footer/Footer";
import Header from "../Componants/Header/Header";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;