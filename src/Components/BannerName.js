import React from "react";

function BannerName({ name }) {
  
  return (
    <div className="bannerContent">
      <h3>Hello {name},</h3>
      <p>
      Enjoy your meal with our foods , we will serve you as far as we can 
      </p>
      <a href="https://www.linkedin.com/in/kawan-edres-babb66216/">About Me</a>
    </div>
  );
}

export default BannerName;
