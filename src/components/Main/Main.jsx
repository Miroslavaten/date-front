import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Recs/Recs.css";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import TinderCard from "react-tinder-card";
import { statusObj } from "../../helpers/consts";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { useRef } from "react";
import { useMemo } from "react";

const Main = () => {
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
  // const [lastDirection, setLastDirection] = useState();

  // const onSwipe = (direction, nameToDelete) => {
  //   // console.log("You swiped: " + direction);
  //   if (direction === "left") {
  //     console.log("you swiped left");
  //   } else {
  //     console.log("you swiped right");
  //   }
  //   // console.log(nameToDelete + " has been removed");
  //   setLastDirection(direction);
  // };

  // const onCardLeftScreen = (myIdentifier) => {
  //   console.log(myIdentifier + " left the screen");
  // };

  const [currentIndex, setCurrentIndex] = useState(users.length - 1);
  console.log(currentIndex, "cur");
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  // const canGoBack = currentIndex < users.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < users.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <div className="mainPage">
      <Sidebar />
      <div className="main-container">
        <Navbar />
        <div className="main-top">
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
              {users.map((user, index) => (
                <SwiperSlide>
                  <TinderCard
                    ref={childRefs[index]}
                    onSwipe={(dir) => swiped(dir, user.name, index)}
                    onCardLeftScreen={() => outOfFrame(user.name, index)}
                    className="tinder-card pressable"
                    // onSwipe={(direction) => onSwipe(direction, user.name)}
                    // onCardLeftScreen={() => onCardLeftScreen(user.name)}
                    preventSwipe={["up", "down"]}
                  >
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
                            <div
                              className="dislike"
                              // onClick={() => onSwipe("left")}
                              onClick={() => swipe("left")}
                            >
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

                          <div
                            className="like"
                            // onClick={() => onSwipe("right")}
                            onClick={() => swipe("right")}
                          >
                            <img
                              src={require("../../assets/images/heart.png")}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TinderCard>
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

export default Main;
