import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Team} from './styles';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderBox from '../../components/HeaderBox'

function TeamPage(){
    const [name, setName] = useState('')
    const [website, setWebsite] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [formation, setFormation] = useState('3 - 2 - 2 - 3')

    const [teams, setTeams] = useState([])

    useEffect(()=>{
        function loadDatas(){
            const savedTeams = localStorage.getItem('teams')
            if(savedTeams){
                setTeams(JSON.parse(savedTeams))
            }
        }
        loadDatas()

    }, [])

    async function validation(event){
        event.preventDefault()

        const validation = {
            name: name, website: website, description: description, type: type, formation: formation
        }

        const schema = Yup.object().shape({
            name: Yup
                .string()
                .required('Team name is required'),
            website: Yup
                .string()
                .required('Team website is required')
                .matches(
                    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                    'Enter correct URL in the field Team website'
                ),
            description: Yup
                .string()
                .required('Description is required'),
            type: Yup
                .string()
                .required('Team type is required'),
            formation: Yup
                .string()
                .required('Formation is required')      
        });

        try {
            await schema.validate(validation, { abortEarly: false });

            const uptadeTeam = [
                ...teams, validation
            ]

            setTeams(uptadeTeam)
            toast.success('Team successfully created')
            localStorage.setItem('teams', JSON.stringify(uptadeTeam));

            setName('')
            setType('')
            setWebsite('')
            setDescription('')
            let inputs = document.querySelectorAll('input[type="radio"]');
            for (let i = 0, l = inputs.length; i < l; i++){
                inputs[i].checked = false;
            }
            
        } catch(err){
            // toast.info(err.errors[0])
            err.errors && err.errors.map(e => {
                return(
                   toast.info(e)  
                )
            })
        }
    }

    return (
        <>
        <Header/>
        <Team>
            <section className="team">
                <HeaderBox title="Create your team" button={false}/>

                <form className="container" onSubmit={validation}>
                    <h2>
                        TEXT INFORMATION
                    </h2>
                    <div className="fields">
                        <div className="field">
                            <input 
                                name="name" 
                                id="name" 
                                type="text" 
                                placeholder="Insert team name"
                                value={name}
                                onChange= {e => setName(e.target.value)}
                                required
                            />
                            <label htmlFor="name">Team name</label>
                        </div>
                        <div className="field">
                            <input 
                                name="website" 
                                id="website" 
                                type="text" 
                                value={website}
                                placeholder="http://myteam.com"
                                onChange= {e => setWebsite(e.target.value)}
                                required
                            />
                            <label htmlFor="website">Team website</label>
                        </div>
                        <div className="field">
                            <textarea 
                                name="description" 
                                id="description" 
                                type="text" 
                                onChange= {e => setDescription(e.target.value)}
                                value={description}
                                required
                            />
                            <label htmlFor="description">Description</label>
                        </div>
                        <div className="field">
                            <span htmlFor="type">Team type</span>
                            <div className="group-radio">
                                <div>
                                    <input type="radio" id="real" name="type" value="real" 
                                        onChange= {e => setType(e.target.value)} required
                                    />
                                    <label htmlFor="real">Real</label>
                                </div>
                                <div>
                                    <input type="radio" id="fantasy" name="type" value="fantasy" 
                                        onChange= {e => setType(e.target.value)} required
                                    />
                                    <label htmlFor="fantasy">Fantasy</label> 
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <h2>
                        CONFIGURE SQUAD
                    </h2>

                    <section className="configure">
                        <div className="formation">
                            <label htmlFor="formation">Formation</label>

                            <select name="formation" id="formation"
                                onChange= {e => setFormation(e.target.value)}
                                defaultValue={'3 - 2 - 2 - 3'} required
                            >
                                <option value="3 - 2 - 2 - 3">3 - 2 - 2 - 3</option>
                                <option value="3 - 2 - 3 - 1">3 - 2 - 3 - 1</option>
                                <option value="3 - 4 - 3">3 - 4 - 3</option>
                                <option value="3 - 5 - 2">3 - 5 - 2</option>
                                <option value="4 - 2 - 3 - 1">4 - 2 - 3 - 1</option>
                                <option value="4 - 3 - 1 - 1">4 - 3 - 1 - 1</option>
                                <option value="4 - 3 - 2">4 - 3 - 2</option>
                                <option value="4 - 4 - 2">4 - 4 - 2</option>
                                <option value="4 - 5 - 1">4 - 5 - 1</option>
                                <option value="5 - 4 - 1">5 - 4 - 1</option>
                            </select>
                        </div>

                        <div className="search-player">
                            <div className="field">
                                <input 
                                    name="search" 
                                    id="search" 
                                    type="text" 
                                    placeholder="Ronal"
                                     
                                />
                                <label htmlFor="search">Search Players</label>
                            </div>
                            <ul>
                                <li>
                                    <div>
                                        <p><strong>Name: </strong>Patrick Mota</p>
                                        <p><strong>Age: </strong>20</p>
                                    </div>
                                    <p><strong>Nacionality: </strong>Brazil</p>
                                </li>
                                <li>
                                    <div>
                                        <p><strong>Name: </strong>Patrick Mota</p>
                                        <p><strong>Age: </strong>20</p>
                                    </div>
                                    <p><strong>Nacionality: </strong>Brazil</p>
                                </li>
                                <li>
                                    <div>
                                        <p><strong>Name: </strong>Patrick Mota</p>
                                        <p><strong>Age: </strong>20</p>
                                    </div>
                                    <p><strong>Nacionality: </strong>Brazil</p>
                                </li>
                            </ul>
                        </div>

                        <button type="submit">
                            Save
                        </button>
                    </section>
                    
                </form>
            </section>
            
        </Team>
        <Footer/>
        </>
    );
}

export default TeamPage