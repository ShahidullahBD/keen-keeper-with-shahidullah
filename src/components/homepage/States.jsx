import React from 'react';

const States = () => {

    const countStyle = 'text-3xl font-bold text-green-800';
    
    return (
        <div className='grid grid-cols-4 gap-5 mb-15 mt-5 text-center'>
            <div className='shadow py-10'>
                <p className={countStyle}>10</p>
                <p className='text-lg'>Total Friend</p>
            </div>
            <div className='shadow py-10'>
                <p className={countStyle}>3</p>
                <p className='text-lg'>On Track</p>
            </div>
            <div className='shadow py-10'>
                <p className={countStyle}>6</p>
                <p className='text-lg'>Need Attention</p>
            </div>
            <div className='shadow py-10'>
                <p className={countStyle}>12</p>
                <p>Interections This Month</p>
            </div>
        </div>
    );
};

export default States;