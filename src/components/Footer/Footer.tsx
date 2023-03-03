import React from 'react';
import './Footer.scss'
import telegram from '../../utils/icons/ico-telegram.png'
import instagram from '../../utils/icons/instagram.png'
import phone from '../../utils/icons/phone.png'
import viber from '../../utils/icons/viber.png'

export const Footer = () => {
    return (
        <div className='footer-wrap'>
            <div className='container'>
                <div className='footer-block'>
                    <a href="#" className='footer-link'><img src={telegram} alt='telegram'/></a>
                    <a href="#" className='footer-link'><img src={instagram} alt='instagram'/></a>
                    <a href="#" className='footer-link'><img src={phone} alt='phone'/></a>
                    <a href="#" className='footer-link'><img src={viber} alt='viber'/></a>
                </div>
            </div>
        </div>
    );
};