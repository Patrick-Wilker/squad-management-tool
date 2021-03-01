import React from 'react';
import {Link} from 'react-router-dom';

import {HeaderBoxCSS} from './styles';

function HeaderBox(props){
    return (
        <HeaderBoxCSS>
            <header>
                <h1>{props.title}</h1>
                {props.button && 
                    <Link to="/team">
                        <button type="button">
                            <span>+</span>
                        </button>  
                    </Link>
                }
            </header>  
        </HeaderBoxCSS>
    )
}

export default HeaderBox