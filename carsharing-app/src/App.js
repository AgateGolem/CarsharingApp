import React, { useState } from "react";
import {useRoutes} from "./routes";
import Sidebar from "./Components/SideBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  const routes = useRoutes()
  return (
      <div className="App">
          <Sidebar />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            {routes}
          </BrowserRouter>
      </div>
  );
}

export default App;
