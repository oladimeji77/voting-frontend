import React from "react";

const Header = ({ content, heading }) => {
  return (
    <>
      <div className="container-xl big-padding">
        <div className="row section-title">
          <h2 className="fs-4">{heading}</h2>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
