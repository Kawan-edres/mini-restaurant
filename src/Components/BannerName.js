import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "$";
  return (
    <div className="bannerContent">
      <h3>Hello {name},</h3>
      <p>
        Get free discount for every <span>{`${currency}${discount}`}</span>{" "}
        purchase
      </p>
      <a href="https://www.linkedin.com/in/kawan-edres-babb66216/">About Me</a>
    </div>
  );
}

export default BannerName;
