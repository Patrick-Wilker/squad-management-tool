import styled from 'styled-components';

export const HeaderBoxCSS = styled.div`
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 30px 30px;
        margin-bottom: 30px;
        border-bottom: 1px solid var(--background)
    }

    header h1{
        color: var(--purple);
    }

    header button{
        border: 0;
        font-size: 0px;
        border-radius: 8px;
        width: 25px;
        height: 25px;
        background: linear-gradient(to bottom, var(--pink) , var(--purple));
    }

    header button > span{
        color: var(--white);
        font-size: 20px;
    }

`