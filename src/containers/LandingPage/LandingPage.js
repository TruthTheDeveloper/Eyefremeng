import React from 'react';
import Header from './components/Header';
import Guide from './components/Guide';
import Trends from './components/Trends';
import Mission from './components/Mission';
import InfoGuide from './components/InfoGuide';

const LandingPage = () => {
    return(
        <>
            <Header/>
            <Guide/>
            <Trends/>
            <Mission/>
            <InfoGuide/>
        </>
    )
}

export default LandingPage;