import BrowseProperties from "./browse-properties";
import City from "./city";
import Description from "./description";
import HomeGuest from "./home-guest";
import SignUp from "./sign-up";
import hotel from "../assets/hotel.webp";
import apartment from "../assets/apartment.jpg";
import resort from "../assets/resort.jpg";
import villas from "../assets/villas.jpg";
import cabins from "../assets/cabins.jpg";

const propertiesImages = [
  {
    src: hotel,
    type: "Hotels",
    numbers: 233,
  },
  {
    src: apartment,
    type: "Apartment",
    numbers: 2331,
  },
  {
    src: resort,
    type: "Resort",
    numbers: 2331,
  },
  {
    src: villas,
    type: "Villas",
    numbers: 2331,
  },
  {
    src: cabins,
    type: "Cabins",
    numbers: 2331,
  },
];

const Home = () => {
  return (
    <div className="">
      <main>
        <Description />
        <City />
        <h1
          className="titles-container container"
          style={{
            fontSize: "20px",
            fontWeight: "700",
            marginTop: "25px",
            marginBottom: "15px",
          }}
        >
          Browse by property type
        </h1>

        <BrowseProperties propertiesImages={propertiesImages} />
        <h1
          className="titles-container container"
          style={{
            fontSize: "20px",
            fontWeight: "700",
            marginTop: "25px",
            marginBottom: "15px",
          }}
        >
          Homes guests love
        </h1>
        <HomeGuest />
        <SignUp />
      </main>
    </div>
  );
};

export default Home;
