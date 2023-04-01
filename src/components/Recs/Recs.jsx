import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Recs.css";
import TinderCard from "react-tinder-card";
import Navbar from "../Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import { statusObj } from "../../helpers/consts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRecs } from "../../redux/features/recsSlice/recsSlice";

const Recs = () => {
  const recs = useSelector((state) => state.recs.recs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecs());
    console.log(recs);
  }, [dispatch]);

  const users = [
    {
      id: 1,
      name: "Эрнас",
      surname: "Лучший",
      gender: "M",
      sexual_orientation: "DE",
      description: "описание",
      status: "LP",
      interests: ["SP", "MS", "SD"],
      age: 20,
      address: "Бишкек",
      images: [
        {
          id: 1,
          image: " https://pbs.twimg.com/media/Eb-lba0UcAAbJLx.jpg",
          profile: 1,
        },
        {
          id: 2,
          image:
            "https://i.pinimg.com/736x/a7/26/ba/a726baa5a6d522e24ef546d8a2d3e32d.jpg",
          profile: 1,
        },
        {
          id: 3,
          image:
            "https://i.pinimg.com/736x/f2/06/96/f206961ce8da130c69270c6a33e82b33.jpg",
          profile: 1,
        },
      ],
      user: "ernas@gmail.com",
    },
    {
      id: 2,
      name: "Нана",
      surname: "Мина",
      gender: "F",
      sexual_orientation: "ND",
      description: "qwerty",
      status: "FR",
      interests: ["MS"],
      age: 18,
      address: "Бишкек",
      images: [
        {
          id: 1,
          image:
            "https://i1.sndcdn.com/artworks-X59Yfrvx1i32lser-oJrdkA-t500x500.jpg",
          profile: 2,
        },
      ],
      user: "aftaami@gmail.com",
    },
    {
      id: 3,
      name: "Чики",
      surname: "Брики",
      gender: "F",
      sexual_orientation: "ND",
      description: "qwerty",
      status: "FR",
      interests: ["MS"],
      age: 18,
      address: "Бишкек",
      images: [
        {
          id: 1,
          image:
            "https://i1.sndcdn.com/artworks-X59Yfrvx1i32lser-oJrdkA-t500x500.jpg",
          profile: 2,
        },
      ],
      user: "aftaami@gmail.com",
    },
  ];
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
            <Swiper
              effect={"coverflow"}
              // grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              // pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {recs.map((user, index) => (
                <SwiperSlide>
                  {/* <TinderCard
                    ref={childRefs[index]}
                    onSwipe={(dir) => swiped(dir, user.name, index)}
                    onCardLeftScreen={() => outOfFrame(user.name, index)}
                    className="tinder-card pressable"
                    // onSwipe={(direction) => onSwipe(direction, user.name)}
                    // onCardLeftScreen={() => onCardLeftScreen(user.name)}
                    preventSwipe={["up", "down"]}
                  > */}
                  <div className="card">
                    <div className="card-content">
                      <h3 className="card-name">
                        {user.name} {user.surname}
                      </h3>
                      <div className="card-info">
                        <div className="card-status">
                          <div className="status-icon">
                            <img
                              src={require("../../assets/images/status.png")}
                              alt=""
                            />
                          </div>
                          <p>{statusObj[user.status]}</p>
                        </div>
                        <div className="card-age">
                          <div className="status-icon">
                            <img
                              src={require("../../assets/images/age.png")}
                              alt=""
                            />
                          </div>
                          <p>{user.age}</p>
                        </div>
                      </div>
                      <div className="card-actions">
                        <div className="action-left">
                          <div className="dislike">
                            <img
                              onClick={() => console.log("click")}
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
                  {/* </TinderCard> */}
                </SwiperSlide>
              ))}
            </Swiper>
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
