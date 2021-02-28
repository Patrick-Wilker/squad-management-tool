import React from 'react';

import {Team} from './styles';

import Header from '../../components/Header'
import Footer from '../../components/Footer'


function TeamPage(){

    return (
        <>
        <Header/>
        <Team>
            <section className="team">
                <header>
                    <h1>Create your team</h1>
                </header>

                <form className="container">
                    <h2>
                        TEXT INFORMATION
                    </h2>
                    <div className="fields">
                        <div className="field">
                            <input 
                                name="team-name" 
                                id="team-name" 
                                type="text" 
                                placeholder="Insert team name"
                                required
                            />
                            <label htmlFor="team-name">Team name</label>
                        </div>
                        <div className="field">
                            <input 
                                name="team-website" 
                                id="team-website" 
                                type="text" 
                                placeholder="http://myteam.com"
                                required
                            />
                            <label htmlFor="team-website">Team website</label>
                        </div>
                        <div className="field">
                            <textarea 
                                name="description" 
                                id="description" 
                                type="text" 
                                required
                            />
                            <label htmlFor="description">Description</label>
                        </div>
                        <div className="field">
                            <span htmlFor="team-type">Team type</span>
                            <div className="group-radio">
                                <div>
                                    <input type="radio" id="real" name="team-type" value="real" />
                                    <label htmlFor="real">Real</label>
                                </div>
                                <div>
                                    <input type="radio" id="fantasy" name="team-type" value="fantasy" />
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

                            <select name="formation" id="formation">
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
                                    required
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

                        <button type="button">
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