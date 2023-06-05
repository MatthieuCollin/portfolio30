import { profil } from '../../assets/img';
import {SiLinkedin, SiGithub, SiPinterest} from 'react-icons/si';
import {FaHome, FaUser, FaSuitcase, FaMailBulk} from 'react-icons/fa'
import {MdOutlineWebAsset} from 'react-icons/md'
import { Link, animateScroll as scroll } from "react-scroll";
import './index.scss';

const Sidebar = () =>{
    
    return(
        <header className="sidebar">
            <div className="profil">
                <img src={profil} alt="profil" srcset="" />
                <h2>Collin Matthieu</h2>
                <div className="socials">
                    <a href=""><SiLinkedin className='icone'/></a>
                    <a href=""><SiGithub className='icone'/></a>
                    <a href=""><SiPinterest className='icone'/></a>
                </div>
            </div>
            <ul id='navbar'>
                <Link
                    className='link'
                    activeClass="active"
                    to="homepage"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                ><FaHome className='icone'/> Accueil</Link>
                <Link
                    className='link'
                    activeClass="active"
                    to="profil"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                ><FaUser className='icone'/>Profil</Link>
                <Link
                    className='link'
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ><MdOutlineWebAsset className='icone'/>Portfolio</Link>
                <Link
                    className='link'
                    activeClass="active"
                    to="experiences"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ><FaSuitcase className='icone'/>Expériences</Link>
                <Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ><FaMailBulk className='icone'/>Contact</Link>
            </ul>
        </header>
    )
}

export default Sidebar;