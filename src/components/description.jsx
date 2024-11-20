const Description = () => {
  return (
    <div
      style={{
        backgroundColor: "#003580",
        color: "white",
      }}
    >
      <div className="container" style={{ padding: "30px 60px 100px 60px" }}>
        <h1 style={{ fontWeight: "500" }}>
          A lifetime of discounts? It's Genius.
        </h1>
        <p>
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button
          type="submit"
          style={{
            backgroundColor: "#0071C2",
            color: "white",
            padding: "5px",
            border: "none",
          }}
        >
          Sign in / Register
        </button>
      </div>
    </div>
  );
};

export default Description;
