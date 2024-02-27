import { useState } from "react";
import styles from "./main_page.module.scss";
import Modal from "../Modal";
import InfoPage from "../InfoPage";

const mainPageInitialState = {
    password: "",
    baby: "Marine",
    babySister: "Yelena",
    passwordError: "",
    canJoin: false,
};

const MainPage = () => {
    const [data, setData] = useState(mainPageInitialState);

    const changeData = (key, value) => {
        setData({ ...data, [key]: value });
    };

    return (
        <div className={styles.main_page_wrapper}>
            <div className={styles.starts_animation}></div>
            {!data.canJoin && <Modal data={data} changeFn={changeData} />}
            {data.canJoin && <InfoPage data={data} changeFn={changeData} />}
        </div>
    );
};

export default MainPage;
