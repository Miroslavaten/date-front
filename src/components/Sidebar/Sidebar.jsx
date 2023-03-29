import React from "react";
import styles from "./Sidebar.module.css";
import main from "../../assets/images/main.png";
import recs from "../../assets/images/recs.png";
import likes from "../../assets/images/likes.png";
import messages from "../../assets/images/messages.png";
import profile from "../../assets/images/profile.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_wrapper}>
        <div className={styles.logo}>
          {/* <img src="../../assets/images/logo.png" alt="" /> */}
        </div>
        <div
          className={styles.main}
          onClick={() => {
            navigate("/");
          }}
        >
          <div className={styles.img_wrapper}>
            <img src={main} alt="" />
          </div>
        </div>
        <div className={styles.recs}>
          <div className={styles.img_wrapper}>
            <img src={recs} alt="" />
          </div>
        </div>
        <div className={styles.likes}>
          <div className={styles.img_wrapper}>
            <img src={likes} alt="" />
          </div>
        </div>
        <div className={styles.messages}>
          <div className={styles.img_wrapper}>
            <img src={messages} alt="" />
          </div>
        </div>
        <div
          className={(styles.profile, styles.active)}
          onClick={() => {
            // navigate(`/profile/${id}`);
          }}
        >
          <div className={styles.img_wrapper}>
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
