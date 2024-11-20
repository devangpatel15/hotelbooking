const BrowseProperties = (props) => {
  const { propertiesImages } = props;

  // {
  // return propertiesImages.map((image) => {
  // return (
  // <div style={{ display: "flex" }}>
  //   <div
  //     class="card-group"
  //     style={{
  //       width: "13rem",
  //     }}
  //   >
  //     <div class="card">
  //       <img src={image.src} class="card-img-top" alt="..." />
  //       <div class="card-body">
  //         <h5 class="card-title">{image.type}</h5>
  //         <p class="card-text">{image.numbers} Hotels</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // );
  // });
  // }

  return (
    <>
      <div className="container d-flex justify-content-between">
        {propertiesImages.map((img) => {
          return (
            <>
              <div>
                <img
                  src={img.src}
                  style={{
                    width: "13rem",
                    height: "150px",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                  }}
                />

                <div>
                  <h5>{img.type}</h5>
                  <p>{img.numbers} hotels</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BrowseProperties;
