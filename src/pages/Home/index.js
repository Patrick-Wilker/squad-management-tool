import React, {useState, useEffect} from 'react';
import { toast } from 'react-toastify';

import {Home} from './styles';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderBox from '../../components/HeaderBox'

import { FaAngleUp, FaAngleDown, FaPen, FaTrash } from "react-icons/fa";

function HomePage(){
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

    function addBorderPink(id){
        let element = document.getElementById(id);
        element.classList.toggle("focus");
    }

    function updateTable(){
        const savedTeams = localStorage.getItem('teams')
        if(savedTeams){
            setTeams(JSON.parse(savedTeams))
        }
    }

    function removeTeam(id){
        teams.splice(id, 1);
        setTeams(teams);

        localStorage.setItem('teams', JSON.stringify(teams));
        
        updateTable()
        
        toast.success('Successfully removed');
    }

    return (
        <>
        <Header/>
        <Home>
        <section className="create-team">
            <HeaderBox title="My team" button={true}/>

            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Name <span><FaAngleUp/> <FaAngleDown/></span></th>
                            <th>Description <span><FaAngleUp/> <FaAngleDown/></span></th>
                        </tr>  
                    </thead>
                    <tbody>
                        { teams.length > 0 && 
                            teams.map((team, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{team.name}</td>
                                        <td>{team.description}
                                            <div>
                                                <span className="remove" onClick={()=>removeTeam(i)}><FaTrash/></span>
                                                <span className="edit"><FaPen/></span>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    
                </table>
            </main>

        </section>

        <section>
            <section className="players">
                <HeaderBox title="Top 5" button={false}/>

                <main>
                    <ul>
                        Highest avg age
                        <div>
                            <li id="1" onClick={() => addBorderPink(1)}><p>Patrick Mota <span>10</span></p></li>
                            <li><p>Patrick Mota <span>10</span></p></li>
                            <li><p>Patrick Mota <span>10</span></p></li>
                            <li><p>Patrick Mota <span>10</span></p></li>
                            <li><p>Patrick Mota <span>10</span></p></li>
                        </div>
                        
                    </ul>

                    <ul>
                        Lowest avg age
                        <div>
                            <li><p>Patrick Mota <span>10</span></p></li>
                            <li><p>Patrick Mota <span>10</span></p></li>
                            <li><p>Patrick Mota <span>10</span></p></li>
                            <li><p>Patrick Mota <span>10</span></p></li>
                            <li><p>Patrick Mota <span>10</span></p></li>
                        </div>
                    </ul>
                </main>
            </section>

            <section className="comparison">
                <div>
                    <h1>Most picked player</h1>

                    <figure>
                        <img src="https://github.com/Patrick-Wilker.png" alt="Most picked player"/>
                        <span>75%</span>
                    </figure>
                </div>
                <div>
                    <h1>Less picked player</h1>

                    <figure>
                        <img src="https://github.com/Patrick-Wilker.png" alt="Less picked player"/>
                        <span>25%</span>
                    </figure>
                </div>
            </section>            
        </section>
        </Home>
        <Footer/>
        </>
    );
}

export default HomePage