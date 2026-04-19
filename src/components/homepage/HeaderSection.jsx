import React from 'react';
import { FaPlus } from 'react-icons/fa';

const HeaderSection = () => {
    return (
        <div className='text-center space-y-5 py-10'>
            <h1 className='text-5xl font-bold'>Friends to keep close in your life</h1>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.
            </p>
            <div className='flex justify-center mt-8'>
                <button className='btn bg-green-800 text-white font-bold flex items-center gap-2'>
                <FaPlus></FaPlus>
                Add a Friend</button>
            </div>
        </div>
    );
};

export default HeaderSection;