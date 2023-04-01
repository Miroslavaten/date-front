import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Profile.module.css";
import "./Swiper.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";
import {
  genderObj,
  interestsObj,
  orientationObj,
  statusObj,
} from "../../helpers/consts";
import { useNavigate, useParams } from "react-router-dom";
import { getUserDetails } from "../../redux/features/userProfileSlice/userProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const Profile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const user = useSelector((state) => state.userProfile.userDetails);
  const user_id = useSelector((state) => state.auth.user_id);

  const { status, error } = useSelector((state) => state.userProfile);

  useEffect(() => {
    dispatch(getUserDetails({ id: params.id }));
  }, [dispatch]);

  console.log("userDetails", user);
  console.log(user.images[0].image);

  const navigate = useNavigate();

  // console.log(require("./addBtn.png"));
  const ageArr = [];

  for (let i = 18; i < 100; i++) {
    ageArr.push(i);
  }

  return (
    <div className={styles.profilePage}>
      {/* {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>} */}

      {/* <div className={styles.sidebar}></div> */}
      <Sidebar />
      <div className={styles.profile_container}>
        <Navbar />
        {/* <div className={styles.user}></div> */}
        <div className={styles.profile}>
          <div
            className={styles.frontImg}
            style={{
              backgroundImage: `url(${user?.images[0].image})`,
            }}
          ></div>
          <div className={styles.profile_left}>
            <div className={styles.profile_img}>
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {user?.images.map((item) => (
                  <SwiperSlide>
                    <img src={item.image} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={styles.profile_name}>
              <p>Фамилия</p>
              <div>
                <p>{user?.surname}</p>
              </div>
            </div>
            <div className={styles.profile_name}>
              <p>Имя</p>
              <div>
                <p>{user?.name}</p>
              </div>
            </div>
            <div className={styles.profile_desc}>
              <p>Про меня:</p>
              <div>
                <p>{user?.description}</p>
              </div>
            </div>
          </div>
          <div className={styles.profile_right}>
            <div className={styles.profile_selects}>
              <div className={styles.select_gender}>
                <p>Пол</p>
                <div className={styles.select_gender_wrapper}>
                  <div className={styles.select_gender_icon}>
                    <img
                      src={require("../../assets/images/gender.png")}
                      alt=""
                    />
                  </div>
                  <p>{genderObj[user?.gender]}</p>
                </div>
              </div>
              <div className={styles.select_gender}>
                <p>Возраст</p>
                <div className={styles.select_gender_wrapper}>
                  <div className={styles.select_gender_icon}>
                    <img src={require("../../assets/images/age.png")} alt="" />
                  </div>
                  <p>{user?.age}</p>
                </div>
              </div>
              <div className={styles.select_gender}>
                <p>Ориентация</p>
                <div className={styles.select_gender_wrapper}>
                  <div className={styles.select_gender_icon}>
                    <img
                      src={require("../../assets/images/orientation.png")}
                      alt=""
                    />
                  </div>
                  <p>{orientationObj[user?.sexual_orientation]}</p>
                </div>
              </div>
              <div className={styles.select_gender}>
                <p>Адрес</p>
                <div className={styles.select_gender_wrapper}>
                  <div className={styles.select_gender_icon}>
                    <img
                      src={require("../../assets/images/adress.png")}
                      alt=""
                    />
                  </div>
                  <p>{user?.address}</p>
                </div>
              </div>
              <div className={styles.select_status}>
                <p>Статус</p>
                <div
                  className={styles.select_gender_wrapper}
                  style={{ width: "95%" }}
                >
                  <div className={styles.select_gender_icon}>
                    <img
                      src={require("../../assets/images/status.png")}
                      alt=""
                    />
                  </div>
                  <p>{statusObj[user?.status]}</p>
                </div>
              </div>
            </div>
            <div className={styles.profile_interests}>
              <div className={styles.interests_list}>
                <p>Мои интересы ({user?.interests.length}/8):</p>
                <div className={styles.interests_wrapper}>
                  {/* {user?.interests.map((item) => ( */}
                  <div className={styles.interests_item}>
                    <span>{interestsObj[user?.interests]}</span>
                  </div>
                  {/* ))} */}
                </div>
              </div>
              <div
                className={styles.save_btn}
                onClick={() => navigate(`/edit-profile/${user?.id}`)}
              >
                <p>Редактировать</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
