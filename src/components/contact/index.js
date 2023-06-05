import './index.scss';
import {HiMail, HiPhone} from 'react-icons/hi';
import emailjs, { send } from '@emailjs/browser';
import {useRef} from 'react';

const Contact = () =>{

    const refForm = useRef();

    const sendEmail = (e) =>{
        e.preventDefault();

        console.log(e.target);
        
        emailjs
        .sendForm(
            'service_pr9e348',
            'template_pkxqntm',
            refForm.current,
            'W6NX56shliq8xGMgH',
        )
        .then(
            ()=>{
                alert('Message bien envoyé !')
                window.location.reload(false)
            },
            ()=>{
                alert('Erreur, veuillez ressayer.')
            }
        );
    };

    return(
        <div id='contact' className="contact">
            <h2>Me contacter :</h2>
            <p>
                Pour plus d'informations, veuillez me contacter :
            </p>
            <div className="contactInfo">
                <div className="content">
                    <div className="mail">
                        <HiMail className='icon'></HiMail>
                        <p><span>Mail: </span>matthcollin6@gmail.com</p>
                    </div>
                    <div className="mail">
                        <HiPhone className='icon'></HiPhone>
                        <p><span>Téléphone: </span>06.23.50.77.61</p>
                    </div>
                    <div className="mail">
                        <HiMail className='icon'></HiMail>
                        <p><span>Mail: </span>matthcollin6@gmail.com</p>
                    </div>
                </div>
                <div className="form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <div class="field">
                            <label for="from_name">Mail</label>
                            <input type="email" className='mail' name="from_name" id="from_name" />
                        </div>
                        <div class="field">
                            <label for="message">Message</label>
                            <textarea className='text' name="message" id="message" cols={30} />
                        </div>
                        <input type="submit" id="button" value="Envoyer" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;