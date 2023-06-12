import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Nav from "../shared/NavBar/Nav";


const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;