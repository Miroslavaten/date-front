import React from "react";
import crownPic from "../../imgs/crown.png";

const Premium = () => {
  return (
    <div className="premium">
      <div className="premium__blur">
        <button className="premium__blur-btn">Узнать больше</button>
        <p className="premium__blur-desc">Совместимость:</p>
        <h4 className="premium__blur-title">
          Премиум
          <img src={crownPic} alt="" />
        </h4>
      </div>
    </div>
  );
};

export default Premium;
