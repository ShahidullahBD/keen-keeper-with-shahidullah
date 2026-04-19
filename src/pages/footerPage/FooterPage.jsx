import React from 'react';
import logoXl from '../../assets/logo-xl.png';
import fblogo from '../../assets/facebook.png';
import inslogo from '../../assets/instagram.png';
import twtlogo from '../../assets/twitter.png';


const FooterPage = () => {
    return (
        <div className='w-full bg-green-800 space-y-5 pt-15 pb-8 text-center'>
            <div>
                <img className='mx-auto' src={logoXl} alt="logoXL" />
            </div>
            <p className='text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <div>
                <p className='text-white font-bold mb-3'>Social Links</p>
                <div className='flex gap-3 items-center justify-center'>
                    <img src={inslogo} alt="Instagram Logo" />
                    <img src={fblogo} alt="Facebook Logo" />
                    <img src={twtlogo} alt="Tweter Logo" />
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default FooterPage;