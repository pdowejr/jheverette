function Button({ label, type }) {
  const buttonStyle = {
    backgroundColor: type === "primary" ? "maroon" : "gray",
    color: "white",
    padding: "10px 20px",
    margin: "0px 5px 0px 5px",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
  };

  return <button style={buttonStyle}>{label}</button>;
}

export default Button;