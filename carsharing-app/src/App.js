import React, { useState } from "react";
import {useRoutes} from "./routes";
import { HashRouter } from "react-router-dom";

function App() {
  const routes = useRoutes()
  return (
      <div className="App">
          <HashRouter>
            {routes}
          </HashRouter>
      </div>
  );
}

export default App;
