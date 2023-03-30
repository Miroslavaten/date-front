import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import main from "../../assets/images/main.png";
import recs from "../../assets/images/recs.png";
import likes from "../../assets/images/likes.png";
import messages from "../../assets/images/messages.png";
import profile from "../../assets/images/profile.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const navigate = useNavigate();
  const [showMain, setShowMain] = useState(false);
  const [showRecs, setShowRecs] = useState(false);
  const [showLikes, setShowLikes] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const user_id = useSelector((state) => state.auth.user_id);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_wrapper}>
        <div className={styles.logo}>
          <img src={require("../../assets/images/logo.png")} alt="" />
        </div>
        <div
          className={(styles.main, showMain && styles.active)}
          onClick={() => {
            setShowMain(true);
            setShowRecs(false);
            setShowLikes(false);
            setShowChat(false);
            setShowProfile(false);
            navigate("/main");
          }}
        >
          <div className={styles.img_wrapper}>
            <img src={main} alt="" />
          </div>
        </div>
        <div
          className={(styles.recs, showRecs && styles.active)}
          onClick={() => {
            setShowRecs(true);
            setShowMain(false);
            setShowLikes(false);
            setShowChat(false);
            setShowProfile(false);
            navigate("/recs");
          }}
        >
          <div className={styles.img_wrapper} style={{ width: "70%" }}>
            <img src={recs} alt="" />
          </div>
        </div>
        <div
          className={(styles.likes, showLikes && styles.active)}
          onClick={() => {
            setShowLikes(true);
            setShowRecs(false);
            setShowMain(false);
            setShowChat(false);
            setShowProfile(false);
            // navigate("/");
          }}
        >
          <div className={styles.img_wrapper}>
            <img src={likes} alt="" />
          </div>
        </div>
        <div
          className={(styles.messages, showChat && styles.active)}
          onClick={() => {
            setShowChat(true);
            setShowRecs(false);
            setShowMain(false);
            setShowLikes(false);
            setShowProfile(false);
            // navigate("/");
          }}
        >
          <div className={styles.img_wrapper}>
            <img src={messages} alt="" />
          </div>
        </div>
        <div
          className={(styles.profile, showProfile && styles.active)}
          onClick={() => {
            setShowProfile(true);
            setShowRecs(false);
            setShowMain(false);
            setShowLikes(false);
            setShowChat(false);
            navigate(`/profile/${user_id}`);
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
