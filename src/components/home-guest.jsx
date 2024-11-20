import HomeGuestRender from "./home-guest-render";
import aparthotel from "../assets/aparthotel.webp";

const homeGuestDb = [
  {
    src: aparthotel,
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rating: 8.9,
    type: "Excellent",
  },
  {
    src: aparthotel,
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rating: 9.3,
    type: "Exceptional",
  },
  {
    src: aparthotel,
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rating: 8.8,
    type: "Excellent",
  },

  {
    src: aparthotel,
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rating: 8.9,
    type: "Excellent",
  },
];

const HomeGuest = () => {
  return <HomeGuestRender homeGuestDb={homeGuestDb} />;
};

export default HomeGuest;
