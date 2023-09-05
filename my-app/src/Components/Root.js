import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Root=()=>
{
    return(
        <div className="h-auto bg-[#f0f4f7]">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}   

export default Root;