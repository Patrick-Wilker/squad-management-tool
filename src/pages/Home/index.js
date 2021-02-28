import React from 'react';

import {Home} from './styles';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import {Link} from 'react-router-dom';

import { FaAngleUp, FaAngleDown, FaPen, FaTrash } from "react-icons/fa";

function HomePage(){

    function addBorderPink(id){
        let element = document.getElementById(id);
        element.classList.toggle("focus");
    }
    return (
        <>
        <Header/>
        <Home>
        <section className="create-team">
            <header>
                <h1>My teams</h1>
                <Link to="/team">
                    <button type="button">
                        <span>+</span>
                    </button>  
                </Link>
                
            </header>

            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Name <span><FaAngleUp/> <FaAngleDown/></span></th>
                            <th>Description <span><FaAngleUp/> <FaAngleDown/></span></th>
                        </tr>  
                    </thead>
                    <tbody>
                        <tr>
                            <td>Barcelona</td>
                            <td>Barcelona Squad
                                <div>
                                    <span className="remove"><FaTrash/></span>
                                    <span className="edit"><FaPen/></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Barcelona</td>
                            <td>Barcelona Squad
                                <div>
                                    <span className="remove"><FaTrash/></span>
                                    <span className="edit"><FaPen/></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Barcelona</td>
                            <td>Barcelona Squad
                                <div>
                                    <span className="remove"><FaTrash/></span>
                                    <span className="edit"><FaPen/></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Barcelona</td>
                            <td>Barcelona Squad
                                <div>
                                    <span className="remove"><FaTrash/></span>
                                    <span className="edit"><FaPen/></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Barcelona</td>
                            <td>Barcelona Squad
                                <div>
                                    <span className="remove"><FaTrash/></span>
                                    <span className="edit"><FaPen/></span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
            </main>

        </section>

        <section>
            <section className="players">
                <header>
                    <h1>Top 5</h1>
                </header>

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