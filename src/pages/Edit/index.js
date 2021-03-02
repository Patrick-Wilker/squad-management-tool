import React from 'react';

import {Edit} from './styles';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderBox from '../../components/HeaderBox'
import FormPage from '../../components/Form';

function EditPage(){
    // const [name, setName] = useState('')
    // const [website, setWebsite] = useState('')
    // const [description, setDescription] = useState('')
    // const [type, setType] = useState('')
    // const [formation, setFormation] = useState('3 - 2 - 2 - 3')

    // useEffect(()=>{
    //     function loadDatas(){
    //         const teams = JSON.parse(localStorage.getItem('teams'))

    //         const id = localStorage.getItem('team-edit')
    //         teams && teams.map((team, i)=>{
    //             if(i === id){
    //                 setDescription(team.description)
    //                 setName(team.name)
    //                 setWebsite(team.website)
    //                 setType(team.type)
    //                 setFormation(team.formation)
    //             }
    //         })
    //     }
    //     loadDatas()
    // }, [])

    return (
        <>
        <Header/>
        <Edit>
            <section className="team">
                <HeaderBox title="Edit your team" button={false}/>

                <FormPage/>
            </section>
            
        </Edit>
        <Footer/>
        </>
    );
}

export default EditPage