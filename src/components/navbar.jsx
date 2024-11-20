import React from "react";
import { MdHotel } from "react-icons/md";
import { MdOutlineFlight } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import "../components/style.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar container" style={{ backgroundColor: "#003580" }}>
        <div class="container-fluid" style={{ padding: "0 60px" }}>
          <a class="navbar-brand text-white">iamabooking</a>
          <form class="d-flex" role="search">
            <button
              type="submit"
              style={{
                marginRight: "25px",
                color: "#003580",
                border: "none",
              }}
            >
              Register
            </button>
            <button type="submit" style={{ color: "#003580", border: "none" }}>
              Login
            </button>
          </form>
        </div>
      </nav>

      <div
        className="container d-flex"
        style={{
          color: "white",
          paddingBottom: "25px",
          padding: "0 60px 30px",
          gap: "40px",
        }}
      >
        <div
          className=" d-flex align-items-center"
          style={{
            border: "1px solid white",
            padding: "10px",
            borderRadius: "30px",
          }}
        >
          <div className="icon-div">
            <MdHotel />
          </div>
          <div
            className="text"
            style={{
              marginLeft: "5px",
              fontSize: "16px",
            }}
          >
            Stays
          </div>
        </div>
        <div className=" d-flex  align-items-center">
          <div className="icon-div">
            <MdOutlineFlight />
          </div>
          <div className="text">Flights</div>
        </div>
        <div className=" d-flex  align-items-center">
          <div className="icon-div">
            <FaCar />
          </div>
          <div className="text">Car rental</div>
        </div>
        <div className=" d-flex  align-items-center">
          <div className="icon-div">
            <MdHotel />
          </div>
          <div className="text">Attraction</div>
        </div>
        <div className=" d-flex  align-items-center">
          <div className="icon-div">
            <FaCar />
          </div>
          <div className="text">Airport taxis</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
