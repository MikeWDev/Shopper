import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade ">Reviews(122) </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit,
          incidunt facere dolores repudiandae illum adipisci atque? Quo quae
          quisquam tempore architecto sint reprehenderit natus earum perferendis
          rem similique error voluptate minus autem non tenetur sed sit vel
          harum, est, voluptatem rerum provident itaque! Incidunt mollitia
          officiis rem libero sint.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          repellat maxime magnam. Reiciendis, neque repellat.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
