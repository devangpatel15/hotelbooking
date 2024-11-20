const Citys = (props) => {
  const { image } = props;

  return (
    <>
      <div className="container d-flex justify-content-between">
        {image.map((img) => {
          return (
            <>
              <div style={{ position: "relative" }}>
                <img
                  src={img.src}
                  style={{ width: "25rem", borderRadius: "5px" }}
                />
                <div
                  className="img-caption-container"
                  style={{
                    position: "absolute",
                    color: "white",
                    bottom: 0,
                  }}
                >
                  <h1>{img.caption}</h1>
                  <p>{img.properties} Properties</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* <img
              src={img.src}
              class="card-img-top"
              alt="..."
              style={{ position: "absolute" }}
            />

      {/* // )
      // // })} */}
    </>
  );
};

export default Citys;
