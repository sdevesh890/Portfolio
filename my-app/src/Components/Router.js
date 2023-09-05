import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Body from "./Body";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";
import Error from "./Error";
const router = createBrowserRouter([
     
    {
        path : "/",
        element :<Root/>,
        errorElement:<Error/>,
        children: [
                { path: "", element: <Body /> },
                { path: "/project", element: <Project /> },
                {path: "/contact", element:<Contact/>},
                {path:"/resume",element:<Resume/>}
        ]
    },
   
]);

export default router;