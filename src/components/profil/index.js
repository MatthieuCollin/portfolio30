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
                    <p>
                    J'ai découvert le développement lors de la formation SPAMIN (Se Préparer Aux Métiers de l'Informatique et du Numérique) au centre ADEN de Caen. Cette formation m'a permis de participer à divers ateliers tout au long des 6 mois du cursus. De plus, j'ai eu l'opportunité d'effectuer un stage d'un mois en tant qu'analyste développeur chez Dot Net @ Home. Cette expérience m'a conforté dans mon choix de poursuivre dans ce domaine, ce qui m'a conduit à m'inscrire en formation DISII (Développeur intégrateur de solutions Intranet et Internet) au Havre.
                    </p>
                    <br></br>
                    <p>
                    Au cours de cette formation, j'ai pu échanger avec des professionnels du métier, approfondir mes compétences et acquérir de l'expérience grâce à un stage de 3 mois. Ainsi, il me semble tout naturel de continuer ma progression en m'orientant vers un bac +3 CSI (concepteur d'information système). Cependant, cette formation est disponible uniquement en alternance, ce qui explique pourquoi je suis actuellement à la recherche d'une entreprise pour poursuivre mon parcours.                   
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profil;