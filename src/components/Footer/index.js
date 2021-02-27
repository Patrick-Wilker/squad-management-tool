import React from 'react';

import {Footer} from './styles';

function PageFooter() {
    const data = new Date().getFullYear()
    return (
        <Footer>
            <span>
                {data} - All rights reserved
            </span>      
        </Footer>
    );
}

export default PageFooter