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

const EditProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const userDetails = useSelector((state) => state.userProfile.userDetails);
  const [updatedUser, setUpdatedUser] = useState(userDetails);
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [orientation, setOrientation] = useState("");
  const [adress, setAdress] = useState("");
  const [status, setStatus] = useState("");

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
  console.log(updatedUser, "updatedUserDetails");

  const ageArr = [];
  const orientArr = [
    "Гетеро",
    "Гей",
    "Лесбиянка",
    "Бисексуал(ка)",
    "Пансексуал(ка)",
    "Демисексуал(ка)",
    "Асексуал(ка)",
    "Квир",
    "Не определился(лась)",
  ];

  const statusArr = [
    "Долгосрочный партнер",
    "Найти друга",
    "Повеселиться",
    "One Date",
  ];

  for (let i = 18; i < 100; i++) {
    ageArr.push(i);
  }

  return (
    <div className={styles.profilePage}>
      <div className={styles.sidebar}></div>
      <div className={styles.profile_container}>
        <div className={styles.user}></div>
        <div className={styles.profile}>
          <div className={styles.frontImg}>
            {/* <img
                src="https://assets-prd.ignimgs.com/2021/01/27/violet-evergarden-button-1611757901991.jpg"
                alt=""
              /> */}
            <div className={styles.edit_img}>
              <p>-</p>
            </div>
          </div>
          <div className={styles.profile_left}>
            <div className={styles.profile_img}>
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                // modules={[Pagination]}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://studybreaks.com/wp-content/uploads/2021/11/violetevergarden-e1638229152774.png"
                    alt=""
                  />
                  <div className={styles.edit_img}>
                    <p>-</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.edit_img}>
                    <p>-</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.edit_img}>
                    <p>-</p>
                  </div>
                </SwiperSlide>
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
              <input type="text" size="small" />
            </div>
            <div className={styles.profile_name}>
              <p>Имя</p>
              <input type="text" size="small" />
            </div>
            <div className={styles.profile_desc}>
              <p>Про меня:</p>
              <div>
                <p>
                  Я человек простой, холостой. Люблю жизнь и прогулки под
                  дождем. Нет ничего красивее в этом мире чем смотреть на
                  рассветы и закаты.
                </p>
              </div>
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
                  <InputLabel sx={{ fontSize: "12px" }} id="demo-select-small">
                    Пол
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={gender}
                    label="Age"
                    color="secondary"
                    sx={{
                      height: 35,
                      width: "100%",
                      // border: "#c252e1 1px solid",
                      borderRadius: "10px",
                      // boxShadow: "0 0 10px rgba(194, 82, 225, 0.25)",
                    }}
                    onChange={(e) => setGender(e.target.value)}
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
                  <InputLabel sx={{ fontSize: "12px" }} id="demo-select-small">
                    Возраст
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={(e) => setAge(e.target.value)}
                    color="secondary"
                    sx={{
                      height: 35,
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  >
                    {ageArr.map((item) => (
                      <MenuItem sx={{ fontSize: "12px" }} value={age}>
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
                  <InputLabel sx={{ fontSize: "12px" }} id="demo-select-small">
                    Ориентация
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={orientation}
                    label="Age"
                    onChange={(e) => setOrientation(e.target.value)}
                    color="secondary"
                    sx={{
                      height: 35,
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  >
                    {orientArr.map((item) => (
                      <MenuItem sx={{ fontSize: "12px" }} value={10}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className={styles.select_gender}>
                <p>Адрес</p>
                <input
                  className={styles.select_adress}
                  type="text"
                  size="small"
                  value={adress}
                  placeholder="Адрес"
                  onChange={(e) => {
                    setAdress(e.target.value);
                  }}
                />
                {/* <FormControl
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
                    <InputLabel sx={{ fontSize: "12px" }} id="demo-select-small">
                      Адрес
                    </InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={orientation}
                      label="Age"
                      onChange={(e) => setOrientation(e.target.value)}
                      color="secondary"
                      sx={{
                        height: 35,
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    >
                      {orientArr.map((item) => (
                        <MenuItem sx={{ fontSize: "12px" }} value={10}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl> */}
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
                  <InputLabel sx={{ fontSize: "12px" }} id="demo-select-small">
                    Статус
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="fullwidth"
                    value={orientation}
                    label="Age"
                    onChange={(e) => setStatus(e.target.value)}
                    color="secondary"
                    sx={{
                      height: 35,
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  >
                    {statusArr.map((item) => (
                      <MenuItem sx={{ fontSize: "12px" }} value={10}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className={styles.profile_interests}>
              <div className={styles.interests_list}>
                <p>Мои интересы (1/8):</p>
                <div className={styles.interests_wrapper}>
                  <div className={styles.interests_item}>
                    <p>Спорт</p>
                    <div className={styles.edit_interest}>
                      <p>-</p>
                    </div>
                  </div>
                  <div className={styles.edit_interests}>
                    <span>+</span>
                  </div>
                </div>
              </div>
              <div className={styles.save_btn}>
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
