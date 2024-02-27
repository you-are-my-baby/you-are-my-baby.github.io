import React from "react";
import mar_ticket from "../../assets/images/Marine.png";
import yel_ticket from "../../assets/images/Yelena.png";
import Earth from "../EarthPlanet";
import ReactPlayer from "react-player";
import zimmer from "../../assets/music/zimer.mp3";
import styles from "./info_page.module.scss";

const initialData = {
    Marine: {
        img: mar_ticket,
    },
    Yelena: {
        img: yel_ticket,
    },
};

const InfoPage = ({ data, changeFn }) => {
    const name = data.password.split("@")[0];

    if (!data.password) {
        return null;
    }
    return (
        <div className={styles.info_page_wrapper}>
            <div className={styles.absolute_texts}>
                <p className={styles.name}>{name}</p>
                <p className={styles.tell_you}>I want to tell you that</p>
                <p className={styles.you_are}>you are</p>
                <p className={styles.my}>my</p>
            </div>
            <div className={styles.earth}>
                <Earth />
            </div>
            <p className={styles.wish}>You fill my days with happiness and my world with love!</p>
            <div className={styles.gift}>
                <p>Your gift my baby ♥</p>
                <p>Han's Zimmer's Universe</p>
                <img src={initialData[name].img} alt="Loading" />
            </div>
            <div className={styles.song}>
                <ReactPlayer url={zimmer} controls={false} playing style={{ width: 0, height: 0 }} />
            </div>
        </div>
    );
};

export default InfoPage;
