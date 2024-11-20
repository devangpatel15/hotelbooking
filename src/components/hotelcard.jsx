import cardPhoto from "../assets/cardphoto.webp";

const HotelCard = () => {
  return (
    <div
      className="d-flex"
      style={{
        gap: "20px",
        border: "1px solid #d3d3d3",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "20px",
      }}
    >
      <div>
        <img src={cardPhoto} style={{ width: "14rem" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h1 style={{ color: "#0071c2", fontSize: "20px" }}>
          Tower Street Apartments
        </h1>
        <span style={{ fontSize: "12px" }}>500m from center</span>
        <span
          style={{
            color: "white",
            backgroundColor: "#008009",
            padding: "3px",
            borderRadius: "5px",
            fontSize: "12px",
            width: "max-content",
          }}
        >
          Free airport taxi
        </span>
        <span style={{ fontWeight: "700", fontSize: "12px" }}>
          Studio Apartment with Air conditioning
        </span>
        <span style={{ fontSize: "12px" }}>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span style={{ fontSize: "12px", fontWeight: "700", color: "#008009" }}>
          Free cancelletion
        </span>
        <span style={{ fontSize: "12px", color: "#008009" }}>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "158px",
          }}
        >
          <span style={{ fontSize: "16px", fontWeight: "500" }}>Excellent</span>
          <button
            style={{
              backgroundColor: "#003580",
              border: "none",
              color: "white",
              fontWeight: "700",
              padding: "5px",
            }}
          >
            8.9
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ fontSize: "24px", textAlign: "end" }}>$112</span>
          <span style={{ fontSize: "12px", color: "gray", textAlign: "end" }}>
            Includes taxes and fees
          </span>
          <button
            style={{
              border: "none",
              backgroundColor: "#0071c2",
              borderRadius: "5px",
              color: "white",
              fontWeight: "700",
              padding: "10px 5px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
