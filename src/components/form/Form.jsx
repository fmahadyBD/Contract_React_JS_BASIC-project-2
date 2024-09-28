import React from 'react';
import { Button } from '../button/Button';
import styles from "./Form.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export const Form = () => {
    return (
        <div className={styles.form_container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button
                        text="VIA SUPPORT CHAT"
                        icon={<MdMessage fontSize="24px" />}
                    />
                    <Button
                        text="VIA CALL"
                        icon={<FaPhoneAlt fontSize="24px" />}

                    />
                </div>
                <Button
                    text="VIA EMAIL FORM"
                    icon={<HiMail fontSize="24px" />}
                    isOutLine={true}

                />
            </div>
        </div>
    );
}
