import Citys from "./citys";
import first from "../assets/first-one.webp";
import second from "../assets/second-one.webp";
import third from "../assets/third-one.webp";
import { MdHotel } from "react-icons/md";
import { addDays } from "date-fns";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";

const cityImages = [
  {
    src: first,
    caption: "Dublin",
    properties: 123,
  },
  {
    src: second,
    caption: "Reno",
    properties: 533,
  },
  {
    src: third,
    caption: "Austin",
    properties: 532,
  },
];

const City = () => {
  const navigate = useNavigate();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  // const [openDate, setOpenDate] = useState();

  return (
    <>
      <div
        className="search-bar card container"
        style={{
          border: "3px solid yellow",
          position: "relative",
          top: "-18px",
        }}
      >
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="search-location-container d-flex">
              <div>
                <MdHotel style={{ color: "gray" }} />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  style={{ border: "none" }}
                />
              </div>
            </div>
            <div className="date-container d-flex">
              <div>{/* <MdHotel /> */}</div>
              <div>
                {/* <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(state[0].startDate, "MM/dd/yyyy")} to ${format(
                  state[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span> */}
              </div>
            </div>
            <div className="number-of-pasenger-cotainer d-flex">
              <div>{/* <MdHotel /> */}</div>
              <div>
                <span>hello</span>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  navigate("/search");
                }}
                type="submit"
                style={{
                  backgroundColor: "#0071C2",
                  color: "white",
                  padding: "5px",
                  border: "none",
                  textDecoration: "none",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="row">
        <div class="col-sm-4 mb-3 mb-sm-0">
          <div class="card" style={{ width: "18rem" }}> */}

      <Citys image={cityImages} />
      {/* </div>
        </div>
      </div> */}
    </>
  );
};

export default City;
