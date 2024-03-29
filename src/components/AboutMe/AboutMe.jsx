import React from 'react';
import style from './AboutMe.module.scss';
import avatar from './../../assets/img/avatar.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {linksDataItems} from './../../Constants/constants';
import Fade from 'react-awesome-reveal';
import TerminalIcon from '@mui/icons-material/Terminal';
import { Link } from 'react-router-dom';

export const AboutMe = () => {
 const contactsDataItems = [
   {icon: LocationOnIcon, data: 'Bishkek, Kyrgyzstan'},
   {icon: CallIcon, data: '+996772294925'},
   {icon: EmailIcon, data: 'a.mamataliev93@gmail.com'},
   {icon: MenuBookIcon, data: 'English level: B1'}
 ];

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <Fade left>
                    <div className={style.containerPhoto}>
                        <img src={avatar} className={style.myPhoto} alt={'avatar'}/>
                    </div>
                </Fade>
                <Fade right>
                    <div className={style.containerContact}>
                        {contactsDataItems.map((item, index) =>
                            <p 
                                className={style.text}
                                key={index}
                            >
                                <item.icon className={style.contactIcon}/> 
                                {item.data}
                            </p>
                        )}
                    </div>
                </Fade>
            </div>    
                <Fade left>
                    <div className={style.containerLink}>
                        {linksDataItems.map((item, index) => 
                            <a 
                                href={item.link}
                                key={index}
                            >
                                <img src={item.icon} alt={'icon'} width={40}className={style.linkIcon}/>
                            </a>
                        )}
                    </div>
                </Fade>
                <Fade bottom>
                    <div className={style.aboutText}>
                        <p>I have experience with creating SPA using React, Redux, TypeScript, HTML, Material UI,
                            CSS, SCSS.
                            I'm currently focused on improving my skills by using new technologies and tools.
                            My hobbies are solving puzzles on Codewars, reading books about coding, and watching
                            educational videos. I keep polishing up my English by using apps, reading articles and
                            watching TV shows and series. I really enjoy learning something new.
                        </p>
                    </div>
                </Fade>
                <Link to='/projects/list' className={style.link}>
                    <button className={style.projectBtn}> 
                        <TerminalIcon /> PROJECT PAGE
                    </button>        
                </Link>
        </div>
    )
}