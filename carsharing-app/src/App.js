import React, { useState } from "react";
import {useRoutes} from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const routes = useRoutes()
  return (
      <div className="App">
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            {routes}
          </BrowserRouter>
      </div>
  );
}

export default App;
