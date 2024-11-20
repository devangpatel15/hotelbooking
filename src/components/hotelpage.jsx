import HotelCard from "./hotelcard";

const HotelPage = () => {
  return (
    <div>
      <div
        className="container d-flex"
        style={{ justifyContent: "center", marginTop: "20px", gap: "30px" }}
      >
        <div
          className="search-booking-info-container"
          style={{
            backgroundColor: "#FEBB02",
            padding: "10px",
            borderRadius: "10px",
            height: "max-content",
            position: "sticky",
            top: "10px",
          }}
        >
          <h1 style={{ fontSize: "20px", color: "#555" }}>Search</h1>
          <label style={{ fontSize: "12px" }}>Destination</label>
          <br />
          <input style={{ height: "40px", width: "245px", border: "none" }} />
          <br />
          <label style={{ fontSize: "12px" }}>Check-in Date</label>
          <br />
          <input style={{ height: "40px", width: "245px", border: "none" }} />
          <br />
          <label>Options</label>
          <br />
          <div className="d-flex align-items-center">
            <div>
              <span>Min price per night</span>
              <input
                type="number"
                style={{ width: "50px", marginLeft: "10px" }}
              />
              <br />
              <span>Max price per night</span>
              <input
                type="number"
                style={{ width: "50px", marginLeft: "8px" }}
              />
              <br />
              <span>Adult</span>
              <input
                type="number"
                style={{ width: "50px", marginLeft: "105px" }}
              />
              <br />
              <span>Children</span>
              <input
                type="number"
                style={{ width: "50px", marginLeft: "90px" }}
              />
              <br />
              <span>Room</span>
              <input
                type="number"
                style={{ width: "50px", marginLeft: "105px" }}
              />
            </div>
            <div className="d-flex" style={{ flexDirection: "column" }}></div>
          </div>
          <button
            style={{
              backgroundColor: "#0071c2",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontWeight: "500",
              padding: "10px",
              width: "100%",
            }}
          >
            Search
          </button>
        </div>
        <div>
          <div>
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
