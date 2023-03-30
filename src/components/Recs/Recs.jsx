import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Recs.css";
import TinderCard from "react-tinder-card";
import Navbar from "../Navbar/Navbar";

const Recs = () => {
  return (
    <div className="recsPage">
      <Sidebar />
      <div className="recs-container">
        <Navbar />
        <div className="recs-top">
          <div className="interests">
            <h4 className="recs-title">Рекомендации</h4>
            <div className="interests-top">
              <div className="interests-art">
                <p>Искусство</p>
              </div>
              <div className="interests-sport">
                <p>Спорт</p>
              </div>
            </div>
            <div className="interests-middle">
              <div className="interests-music">
                <p>Музыка</p>
              </div>
              <div className="interests-self">
                <p>Саморазвитие</p>
              </div>
            </div>
            <div className="interests-bottom">
              <div className="interests-create">
                <p>Творчество</p>
              </div>
              <div className="interests-other">
                <p>Другое</p>
              </div>
            </div>
          </div>
          <div className="card-list">
            <TinderCard className="tinder-card">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-name">Василий Пупкин</h3>
                  <div className="card-info">
                    <div className="card-status">
                      <div className="status-icon">
                        <img
                          src={require("../../assets/images/status.png")}
                          alt=""
                        />
                      </div>
                      <p>Найти друга</p>
                    </div>
                    <div className="card-age">
                      <div className="status-icon">
                        <img
                          src={require("../../assets/images/age.png")}
                          alt=""
                        />
                      </div>
                      <p>23</p>
                    </div>
                  </div>
                  <div className="card-actions">
                    <div className="action-left">
                      <div className="dislike">
                        <img
                          src={require("../../assets/images/dislike.png")}
                          alt=""
                        />
                      </div>
                      <div className="star">
                        <img
                          src={require("../../assets/images/star.png")}
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="like">
                      <img
                        src={require("../../assets/images/heart.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TinderCard>
          </div>
        </div>
        <div className="recs-bottom">
          <div className="matching"></div>
          <div className="my-info">
            <h5 className="my-info_title">Про меня:</h5>
            <p className="my-info_desc">
              Я человек простой, холостой. Люблю жизнь и прогулки под дождем.
              Нет ничего красивее в этом мире яем смотреть на рассветы и закаты.
            </p>
          </div>
          <div className="my-interests">
            <h5>Мои интересы:</h5>
            <div className="my-interests-list">
              <div className="interests-item">
                <span>Спорт</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recs;
