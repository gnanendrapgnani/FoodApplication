import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import Add from "./Pages/Add/Add.jsx";
import List from "./Pages/List/List.jsx";
import Orders from "./Pages/Orders/Orders.jsx";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <hr />
        <div className="app-content">
          <SideBar />
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
