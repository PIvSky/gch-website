import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import style from '../styles/Contact.module.css'

const Contact = () => {

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
                <h2 className={`${style.contact_title}`}>skontaktuj się!</h2>
                <form ref={form} onSubmit={sendEmail} className={`${style.contact_form}`}>
                    <label for='contact_name'>imię</label>
                    <input id='contact_name' type="text" name="contact_name" />
                    <label for='contact_email'>adres email</label>
                    <input id='contact_email' type="email" name="contact_email" />
                    <label for='contact_message'>wiadomość</label>
                    <textarea id='contact_message' name="contact_message" />
                    <input type="submit" value="Send" />
                </form>
            </div>

        </>
    )
}

export default Contact;