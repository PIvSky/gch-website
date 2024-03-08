import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import emailIcon from '../assets/icons/email.png';
import phoneIcon from '../assets/icons/telephone.png'

import style from '../styles/Contact.module.css'

const Contact = () => {

    const emailData = ['kontakt@grzecznichlopcy.pl']

    const phoneData = [
        {
            name: 'michał mościcki - manager',
            phoneNumber: '791-272-305'
        },
        {
            name: 'jakub pałys - booker',
            phoneNumber: '609-093-045'
        },
    ]

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            'service_jfqmbbc', 
            'template_2uoubuu',
            form.current, 
            {
            publicKey: 'ulJtPOUQPTfSAUx5o',
            })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <>
            <div id="kontakt" className={`${style.contact_wrapper}`}>
                <h2 className={`${style.contact_title}`}>skontaktuj się</h2>
                <div className={`${style.contact_container}`}>
                    <form ref={form} onSubmit={sendEmail} className={`${style.contact_form}`}>
                        <label for='contact_name'>imię i nazwisko</label>
                        <input id='contact_name' type="text" name="contact_name" />
                        <label for='contact_email'>adres email</label>
                        <input id='contact_email' type="email" name="contact_email" />
                        <label for='contact_message'>wiadomość</label>
                        <textarea id='contact_message' name="contact_message" />
                        <button type="submit" value="Send">wyślij</button>
                    </form>
                    <div className={`${style.contact_data}`}>
                        <div className={`${style.email_container}`}>
                            <img src={emailIcon}></img>
                            <p>{emailData}</p>
                        </div>
                        <div className={`${style.phone_container}`}>
                            <img src={phoneIcon}></img>
                            {phoneData.map((e, index) =>
                                <div key={index} className={`${style.phone_person}`}> 
                                    <p className={`${style.person_name}`}>{e.name}</p>
                                    <p className={`${style.person_phoneNumber}`}>{e.phoneNumber}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;