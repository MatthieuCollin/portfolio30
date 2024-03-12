import { erwan, melvin, nico, profil } from '../../assets/img';
import {MdArrowForwardIos} from 'react-icons/md'
import './index.scss'
import { useEffect, useState } from 'react';
import fetchApi from '../../functions/fetchApi';

const Profil = (props) => {

    
    let data = props.profil;
    
    return(
        <div id='profil' className='profilBox'>
            <h2 >PROFIL</h2>
            <div className="content">
                <div className="about">
                    <div className="informations">
                        <img src={profil} alt="profil" />
                        {data ?   <div className="details">
                            <h3> {data.job}</h3>
                            <p> {data.description}</p>
                            <ul>
                                <li> <MdArrowForwardIos className='arrow'/> Age : <span>{data.age} ans</span></li>
                                <li> <MdArrowForwardIos className='arrow'/> Ville : <span>{data.city}</span> </li>
                                <li> <MdArrowForwardIos className='arrow'/>  Mail : <span>{data.mail}</span> </li>
                                <li> <MdArrowForwardIos className='arrow'/>  Télephone :<span> {data.phone}</span> </li>
                                <li> <MdArrowForwardIos className='arrow'/>  Site Web : <span>www.devwebcollin.fr</span> </li>
                            </ul>
                            </div>
                            : <></>}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Profil;