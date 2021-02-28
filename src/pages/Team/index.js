import React from 'react';

import {Team} from './styles';

import Header from '../../components/Header'
import Footer from '../../components/Footer'


function TeamPage(){

    return (
        <>
        <Header/>
        <Team>
            <h1>Team</h1>
        </Team>
        <Footer/>
        </>
    );
}

export default TeamPage