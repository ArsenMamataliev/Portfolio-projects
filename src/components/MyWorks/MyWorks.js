import React from 'react';
import style from './MyWorks.module.scss';
import styleContainer from '../../Common/Styles/Container.module.scss';
import {MyWork} from './MyWork/MyWork';
import photoGallery from './../../assets/img/photo_gallery.jpg';
import booking from './../../assets/img/booking.jpg';

export const MyWorks = () => {
    const networksData=[
        { 
            title: 'Photo Gallery', 
            stack: ['React', 'Redux', 'MaterialUI', 'SCSS', 'UnSplash API'],
            imgLink: photoGallery,
            link: 'gallery'
        }, 
        {
            title: 'Booking',
            stack: ['React', 'Redux', 'MaterialUI', 'SCSS'],
            imgLink: booking,
            link: 'booking'
        },
      ]
    
    return (
        <div className={style.myWorks}>
            <div className={styleContainer.container}>
                <div className={style.links}>
                    {networksData.map(data=>
                        <MyWork title={data.title}
                            key={data.title}
                            imgLink={data.imgLink}
                            text={data.text}
                            link={data.link}
                        />
                    )}
                </div>
            </div>
        </div>
    )

}