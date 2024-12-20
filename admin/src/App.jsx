import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import Add from "./Pages/Add/Add.jsx";
import List from "./Pages/List/List.jsx";
import Orders from "./Pages/Orders/Orders.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const url = "http://localhost:4000";
  return (
    <>
      <div>
        <ToastContainer />
        <NavBar />
        <hr />
        <div className="app-content">
          <SideBar />
          <Routes>
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
