import React, { useState } from 'react';
import { Button } from '../button/Button';
import styles from "./Form.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export const Form = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");





    const onViaCallSubmit = () => {

        console.log("I am from call");

    }

    const onSubbmit = (event) => {
        event.preventDefault();
        // console.log(event);


        // console.log("name: ", event.target[0].value);
        // console.log("email: ", event.target[1].value);
        // console.log("Text: ", event.target[2].value);


        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

        // name = event.target[0].value;
        // email = event.target[1].value;
        // text = event.target[1].value;
    }


    return (
        <section className={styles.form_container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button

                        onClick={onViaCallSubmit}
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



                <form action="" onSubmit={onSubbmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="eamil">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">TEXT</label>
                        <textarea name="text" rows="10" />
                    </div>
                    <div className={styles.submit}>
                        <Button text="SUBMIT">

                        </Button>
                    </div>
                    <div>
                        {name + " " + email + " " + text}
                    </div>
                </form>
            </div>
            <div className="">
                <img src="/images/con.svg" alt="" />
            </div>
        </section>
    );
}
