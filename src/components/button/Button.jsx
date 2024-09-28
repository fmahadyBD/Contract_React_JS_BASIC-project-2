import React from 'react';
import styles from "./Button.module.css";
export const Button = ({ isOutLine, icon, text }) => {
    // i pass three parameter and make it conditionals
    return (
        <button className={isOutLine ? styles.outline_btn : styles.primary_btn}>
            {icon}
            {text}
        </button>
    );
}
