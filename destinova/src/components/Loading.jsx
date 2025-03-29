import React from "react";
import Logo from "../assets/coloredlogo.png";
const Loading = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "60vh" }}
    >
        <img src={Logo} alt="" width={100} />
      <h5>Loading...</h5>
    </div>
  );
};

export default Loading;
