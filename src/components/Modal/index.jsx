import React from "react";
import styles from "./modal.module.scss";
import { MARINES_PASSWORD, YELENAS_PASSWORD } from "../../utils/constants";

const Modal = ({ data, changeFn }) => {
    const onSubmit = () => {
        if (data.password === MARINES_PASSWORD || data.password === YELENAS_PASSWORD) {
            changeFn("canJoin", true);
        } else {
            changeFn("passwordError", "Incorrect Password");
        }
    };

    const changePassword = (value) => {
        if (data.passwordError !== "") {
            changeFn("passwordError", "");
        }
        changeFn("password", value);
    };

    const onEnter = (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    };

    return (
        <div className={styles.modal}>
            <div className={styles.input_wrapper}>
                <input
                    type="password"
                    placeholder="Please write you password"
                    value={data.password}
                    onChange={(e) => changePassword(e.target.value)}
                    onKeyDown={onEnter}
                />
                {data.passwordError && <span>{data.passwordError}</span>}
                <button onClick={onSubmit}>Sign in</button>
            </div>
        </div>
    );
};

export default Modal;
