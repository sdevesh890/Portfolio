import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Router";
import './App.css';

function App() {
    return(
      <main>
        <RouterProvider router={router}/>
      </main>
    );
}
export default App;
