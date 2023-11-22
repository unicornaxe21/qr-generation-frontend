import React from "react";
import Logo from "./../images/Logo.png";
import footerFirst from "./../images/footerFirst.png";
import footerSecond from "./../images/footerSecond.png";

export const ThankYouPage = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__inner">
        <img src={Logo} alt="logo.png" className="logo" />
        <div className="wrapper__inner_text">Thank you!</div>
      </div>
      <div className="footer">
        <img
          src={footerSecond}
          alt="footer.png"
          className="footerSecond__img"
        />
        <img src={footerFirst} alt="footer.png" className="footerFirst__img" />
      </div>
    </div>
  );
};
