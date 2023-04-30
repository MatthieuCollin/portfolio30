import './index.scss';
import {HiMail, HiPhone} from 'react-icons/hi'

const Contact = () =>{
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
                    <form action="">
                        <div className="names">
                            <label htmlFor="firstName">Prénom</label>
                            <input type="text" name="firstName" id="firstName" />

                            <label htmlFor="lastName">Nom de famille</label>
                            <input type="text" name="lastName" id="lastName" />
                        </div>
                        <div className="subject">
                            <label htmlFor="subject">Sujet</label>
                            <input type="text" name="subject" id="subject" />
                        </div>
                        <div className="text">
                            <label htmlFor="text">Votre Message</label>
                            <textarea name="text" id="text" rows={20}></textarea>
                        </div>
                        <input type="submit" value="Envoyez le message" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;