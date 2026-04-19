import React from 'react';
import HeaderSection from '../../components/homepage/HeaderSection';
import States from '../../components/homepage/States';
import YourFriends from '../../components/homepage/YourFriends';

const HomePage = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <HeaderSection></HeaderSection>
            <States></States>
            <YourFriends></YourFriends>
        </div>
    );
};

export default HomePage;