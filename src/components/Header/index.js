import React from 'react';

import {Header} from './styles';

function PageHeader() {
    return (
        <Header>
            <div className="logo">
                Squad Management Tool
            </div>

            <div className="login">
                Patrick Mota
                <span>PM</span>
            </div>
            
        </Header>
    );
}

export default PageHeader