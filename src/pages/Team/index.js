import React from 'react';

import {Team} from './styles';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderBox from '../../components/HeaderBox'
import FormPage from '../../components/Form';

function TeamPage(){

    return (
        <>
        <Header/>
        <Team>
            <section className="team">
                <HeaderBox title="Create your team" button={false}/>

                <FormPage/>
           </section>
            
        </Team>
        <Footer/>
        </>
    );
}

export default TeamPage