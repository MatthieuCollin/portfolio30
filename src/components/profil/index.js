import { erwan, melvin, nico, profil } from '../../assets/img';
import {MdArrowForwardIos} from 'react-icons/md'
import './index.scss'

const Profil = () =>{

    return(
        <div id='profil' className='profilBox'>
            <h2 >PROFIL</h2>
            <div className="content">
                <div className="about">
                    <div className="informations">
                        <img src={profil} alt="profil" />
                        <div className="details">
                            <h3> Développeur web, Javascript/PHP</h3>
                            <p> 👋 Salut ! Je suis un développeur web passionné, spécialisé en langages informatiques tels que 🐘 PHP, 🌐 JS, 🚀 React et 🎶 Symfony. Actuellement en formation DISII, je suis en stage chez TIPS et prépare mon avenir avec la formation CSI. Je suis curieux, social, patient et j'aime partager mes connaissances. Vous pouvez jeter un œil à mon site web 🌐 devwebcollin.fr pour en savoir plus sur mes projets.</p>
                            <ul>
                                <li> <MdArrowForwardIos className='arrow'/> Age : <span>21 ans</span></li>
                                <li> <MdArrowForwardIos className='arrow'/> Ville : <span>Caen</span> </li>
                                <li> <MdArrowForwardIos className='arrow'/> École : <span>Scholar fab</span></li>
                                <li> <MdArrowForwardIos className='arrow'/>  Mail : <span>matthcollin6@gmail.com</span> </li>
                                <li> <MdArrowForwardIos className='arrow'/>  Télephone :<span> 06.23.50.77.61</span> </li>
                                <li> <MdArrowForwardIos className='arrow'/>  Site Web : <span>www.devwebcollin.fr</span> </li>
                            </ul>
                            </div>
                        </div>
                 
                </div>
            </div>
        </div>
    )
}

export default Profil;