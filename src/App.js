import "./App.css";
import Navbar from "./components/navbar";
import Description from "./components/description";
import City from "./components/city";

import BrowseProperties from "./components/browse-properties";
import HomeGuest from "./components/home-guest";
import SignUp from "./components/sign-up";

import FooterDB from "./components/footerDB";
import HotelPage from "./components/hotelpage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="" style={{ backgroundColor: "#003580" }}>
        <Navbar />
      </header>
      <Outlet />
      <FooterDB />
    </>
  );
}

export default App;
