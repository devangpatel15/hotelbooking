const HomeGuestRender = (props) => {
  const { homeGuestDb } = props;

  return (
    <>
      <div className="container d-flex justify-content-between">
        {homeGuestDb.map((homeGuest) => {
          return (
            <>
              <div className="image-container">
                <img src={homeGuest.src} alt="" style={{ width: "13rem" }} />
                <div className="hotel-info-container">
                  <span style={{ fontWeight: "700" }}>{homeGuest.name}</span>
                  <br />
                  <span style={{ fontWeight: "300" }}>{homeGuest.city}</span>
                  <h6>Starting from ${homeGuest.price}</h6>

                  <a
                    style={{
                      backgroundColor: "#003580",
                      color: "white",
                      padding: "2px 10px",
                    }}
                  >
                    {homeGuest.rating}
                  </a>
                  <span style={{ marginLeft: "10px" }}>{homeGuest.type}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default HomeGuestRender;
