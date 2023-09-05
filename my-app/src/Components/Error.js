import Image from "../assets/Error_image.jpeg";
import { useRouteError } from "react-router-dom";
const Error=()=>
{
    const errorInfo = useRouteError();
    return(
        <div className="m-4">
        <img src={Image} alt="ErrorImage" className="h-[80vh]" />
         <h1 className="font-worksans text-4xl">Oops!!! Something went wrong.</h1>
         <h2 className="font-light text-2xl">{errorInfo.status+" : "+ errorInfo.statusText}</h2>
        </div>
    );
}

export default Error;