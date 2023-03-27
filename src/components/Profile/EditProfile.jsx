import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  editUserDetails,
  getUserDetails,
} from "../../redux/features/userProfileSlice/userProfileSlice";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styles from "./Profile.module.css";
import "./Swiper.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { genderObj, interestsObj } from "../../helpers/consts";

const EditProfile = () => {
  const userDetails = useSelector((state) => state.userProfile.userDetails);
  const [updatedUser, setUpdatedUser] = useState(userDetails);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  function deleteImage(id) {
    try {
    } catch (error) {}
  }

  useEffect(() => {
    dispatch(getUserDetails(params.id));
  }, [dispatch]);

  useEffect(() => {
    setUpdatedUser(userDetails);
  }, [userDetails]);

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(editUserDetails(updatedUser));
    navigate("/profiles");
  };

  console.log(userDetails, "userDetails");

  const ageArr = [];

  for (let i = 18; i < 100; i++) {
    ageArr.push(i);
  }

  return (
    <div className={styles.profilePage}>
      <div className={styles.sidebar}></div>
      <div className={styles.profile_container}>
        <div className={styles.user}></div>
        <div className={styles.profile}>
          <div
            className={styles.frontImg}
            style={{
              backgroundImage: `url(${updatedUser?.images[0].image})`,
            }}
          >
            <div className={styles.edit_img}>
              <p>-</p>
            </div>
          </div>
          <div className={styles.profile_left}>
            <div className={styles.profile_img}>
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {updatedUser?.images.map((item) => (
                  <SwiperSlide>
                    <img src={item.image} alt="" />
                    <div className={styles.edit_img}>
                      <p>-</p>
                    </div>
                  </SwiperSlide>
                ))}

                <SwiperSlide
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    className={styles.swiper_icon}
                    src={require("./../../assets/images/addBtn.png")}
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={styles.profile_name}>
              <p>Фамилия</p>
              <input
                type="text"
                size="small"
                onChange={handleChange}
                value={updatedUser?.surname}
                name="surname"
              />
            </div>
            <div className={styles.profile_name}>
              <p>Имя</p>
              <input
                type="text"
                size="small"
                name="name"
                value={updatedUser?.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.profile_desc}>
              <p>Про меня:</p>
              <input
                type="text"
                name="description"
                value={updatedUser?.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.profile_right}>
            <div className={styles.profile_selects}>
              <div className={styles.select_gender}>
                <p>Пол</p>
                <FormControl
                  sx={{
                    m: 1,
                    width: "90%",
                    fontSize: "12px",
                    marginTop: 0,
                    border: "#c252e1 1px solid",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(194, 82, 225, 0.25)",
                    margin: 0,
                  }}
                  size="small"
                >
                  {/* <InputLabel sx={{ fontSize: "12px" }} id="demo-select-small">
                    Пол
                  </InputLabel> */}
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    defaultValue={genderObj[updatedUser?.gender]}
                    label="Age"
                    color="secondary"
                    sx={{
                      height: 35,
                      width: "100%",
                      // border: "#c252e1 1px solid",
                      borderRadius: "10px",
                      // boxShadow: "0 0 10px rgba(194, 82, 225, 0.25)",
                    }}
                    name="gender"
                    value={updatedUser?.gender}
                    onChange={handleChange}
                  >
                    <MenuItem sx={{ fontSize: "12px" }} value={"M"}>
                      Мужской
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "12px" }} value={"F"}>
                      Женский
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={styles.select_gender}>
                <p>Возраст</p>
                <FormControl
                  sx={{
                    m: 1,
                    width: "90%",
                    fontSize: "12px",
                    marginTop: 0,
                    border: "#c252e1 1px solid",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(194, 82, 225, 0.25)",
                    margin: 0,
                  }}
                  size="small"
                >
                  {/* <InputLabel sx={{ fontSize: "12px" }} id="demo-select-small">
                    Возраст
                  </InputLabel> */}
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    label="Age"
                    color="secondary"
                    sx={{
                      height: 35,
                      width: "100%",
                      borderRadius: "10px",
                    }}
                    name="age"
                    value={updatedUser?.age}
                    onChange={handleChange}
                  >
                    {ageArr.map((item) => (
                      <MenuItem sx={{ fontSize: "12px" }} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className={styles.select_gender}>
                <p>Ориентация</p>
                <FormControl
                  sx={{
                    m: 1,
                    width: "90%",
                    fontSize: "12px",
                    marginTop: 0,
                    border: "#c252e1 1px solid",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(194, 82, 225, 0.25)",
                    margin: 0,
                  }}
                  size="small"
                >
                  {/* <InputLabel sx={{ fontSize: "12px" }} id="demo-select-small">
                    Ориентация
                  </InputLabel> */}
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    label="Age"
                    color="secondary"
                    sx={{
                      height: 35,
                      width: "100%",
                      borderRadius: "10px",
                    }}
                    name="sexual_orientation"
                    value={updatedUser?.sexual_orientation}
                    onChange={handleChange}
                  >
                    <MenuItem sx={{ fontSize: "12px" }} value={"HE"}>
                      Гетеро
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "12px" }} value={"HO"}>
                      Гей
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "12px" }} value={"HO"}>
                      Лесбиянка
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "12px" }} value={"BI"}>
                      Бисексуал(ка)
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "12px" }} value={"PA"}>
                      Пансексуал(ка)
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "12px" }} value={"DE"}>
                      Демисексуал(ка)
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "12px" }} value={"AS"}>
                      Асексуал(ка)
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "12px" }} value={"QU"}>
                      Квир
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "12px" }} value={"ND"}>
                      Не определился(лась)
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={styles.select_gender}>
                <p>Адрес</p>
                <input
                  className={styles.select_adress}
                  type="text"
                  size="small"
                  placeholder="Адрес"
                  name="address"
                  value={updatedUser?.adress}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.select_status}>
                <p>Статус</p>
                <FormControl
                  sx={{
                    m: 1,
                    width: "95%",
                    fontSize: "12px",
                    marginTop: 0,
                    border: "#c252e1 1px solid",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(194, 82, 225, 0.25)",
                    margin: 0,
                  }}
                  size="small"
                >
                  {/* <InputLabel sx={{ fontSize: "12px" }} id="demo-select-small">
                    Статус
                  </InputLabel> */}
                  <Select
                    labelId="demo-select-small"
                    id="fullwidth"
                    label="Age"
                    color="secondary"
                    sx={{
                      height: 35,
                      width: "100%",
                      borderRadius: "10px",
                    }}
                    name="status"
                    value={updatedUser?.status}
                    onChange={handleChange}
                  >
                    <MenuItem sx={{ fontSize: "12px" }} value={"LP"}>
                      Долгосрочный партнер
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "12px" }} value={"FR"}>
                      Найти друга
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "12px" }} value={"HF"}>
                      Повеселиться
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "12px" }} value={"OD"}>
                      One Date
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className={styles.profile_interests}>
              <div className={styles.interests_list}>
                <p>Мои интересы (1/8):</p>
                <div className={styles.interests_wrapper}>
                  {updatedUser?.interests.map((item) => (
                    <div className={styles.interests_item}>
                      <p>{interestsObj[item]}</p>
                      <div className={styles.edit_interest}>
                        <p>-</p>
                      </div>
                    </div>
                  ))}
                  <div className={styles.edit_interests}>
                    <span>+</span>
                  </div>
                </div>
              </div>
              <div className={styles.save_btn} onClick={handleSave}>
                <p>Сохранить изменения</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
