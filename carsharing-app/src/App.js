import React, { useState } from "react";
import {useRoutes} from "./routes";
import Sidebar from "./Components/SideBar";
import "./styles/SideBar.css";
import MenuContext from "./Context/MenuContext";

function App() {
  const routes = useRoutes()
  const [width, setWidth] = useState('')
  return (
      <div className="App">
        <MenuContext.Provider value={[width, setWidth]}>
          <Sidebar />
          {routes}
        </MenuContext.Provider>
      </div>
  );
}

export default App;
