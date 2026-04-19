import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className='space-y-5 text-center'>            
            <h2 className='text-3xl font-bold text-center p-10 text-red-500'>This page is not found</h2>            
            <Link to={'/'}><button className='btn mx-auto bg-green-800 text-white'>
                to Home</button></Link>            
        </div>
    );
};

export default NotFoundPage;