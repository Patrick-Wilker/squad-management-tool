import React from 'react';

import {Link} from 'react-router-dom';

import {Header} from './styles';

function PageHeader() {
    return (
        <Header>
            <Link to="/">
                <div className="logo">
                    Squad Management Tool
                </div>
            </Link>

            <div className="login">
                Patrick Mota
                <span>PM</span>
            </div>
            
        </Header>
    );
}

export default PageHeader