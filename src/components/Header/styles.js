import styled from 'styled-components';

export const Header = styled.div`
    background:linear-gradient(to right, var(--pink) , var(--purple));

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 35px;

    .logo{
        color: var(--white);
        font-size: 17px;
        font-weight: bold;
    }

    .login{
        color: var(--white);
        font-weight: bold;
    }

    .login span{
        color: gray;
        background: var(--background);
        font-size: 16px;
        font-weight: bold;
        padding: 7px;
        margin-left: 15px;

        border-radius: 50%;
    }

    @media(max-width: 640px){
        padding: 15px 8px;

        .logo{
            font-size: 14px;
        }

        .login{
            font-size: 12px;
        }

        .login span{
            font-size: 12px;
            margin-left: 8px;
        }
    }
`;