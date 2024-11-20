const SignUp = () => {
  return (
    <div className="main-div" style={{ backgroundColor: "#003580" }}>
      <div
        style={{
          padding: "50px 0",
          marginTop: "50px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2em", fontWeight: "bold" }}>
          Save time, save money!
        </h1>
        <p>Sign up and we'll send the best deals to you</p>
        <input
          type="text"
          placeholder="Your Email"
          style={{
            height: "45px",
            width: "300px",
            borderRadius: "5px",
            padding: "10px",
            marginRight: "10px",
          }}
        />
        <button
          style={{
            height: "45px",
            backgroundColor: "#0071C2",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          subscribe
        </button>
      </div>
    </div>
  );
};

export default SignUp;
