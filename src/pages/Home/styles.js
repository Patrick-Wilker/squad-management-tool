import styled from 'styled-components';

export const Home = styled.div`
    margin: 40px 40px 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    h1{
        font-size: 20px;
    }

    .create-team, .players{
        background: var(--white);
        border-radius: 8px;
        padding: 30px 0;

        /* height: fit-content; */
    }

    .create-team header, .players header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 30px 30px;
        margin-bottom: 30px;
        border-bottom: 1px solid var(--background)
    }

    .create-team header h1, .players header h1{
        color: var(--purple);
    }

    .create-team header button{
        border: 0;
        font-size: 0px;
        border-radius: 8px;
        width: 25px;
        height: 25px;
        background: linear-gradient(to bottom, var(--pink) , var(--purple));
    }

    .create-team header button > span{
        color: var(--white);
        font-size: 20px;
    }

    .create-team main {
        padding: 0 30px;
    }

    .create-team table{
        width: 100%;

        font-weight: bold;
        color: var(--text);
    }

    .create-team thead tr, .create-team tbody tr{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;

        border-bottom: 1px solid var(--background); 
    }

    .create-team thead th{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 8px 20px;
        color: var(--text-dark)
    }

    .create-team thead th span{
        display: inline-grid;
    }

    .create-team tbody{
        display: table;
        width: 100%;
    }

    .create-team tbody tr{
        transition: 0.2s;
    }

    .create-team tbody td{
        padding: 20px 8px;

        display: flex;
        justify-content: space-between
    }

    .create-team tbody td > div > span{
        background: none;
        border: 0;
        padding-left: 8px;
    }

    .create-team tbody tr:hover{
        border-radius: 8px;
        color: var(--pink);
        background: #FEF4F8;
    }

    .create-team tbody td > div > .remove:hover::after {
        content: "Remove";
        position: absolute;
        transform: translate(-100%, -100%);
        color: var(--white);
        font-weight: normal;
        background: var(--text-dark);
        padding: 5px 8px;
    }

    .create-team tbody td > div > .edit:hover::after {
        content: "Edit";
        position: absolute;
        transform: translate(-100%, -100%);
        color: var(--white);
        font-weight: normal;
        background: var(--text-dark);
        padding: 5px 8px;
    }

    .players main{
        padding: 0 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }

    .players main ul{
        color: var(--text-dark);
        font-weight: bold;
    }

    .players main ul > div{
        margin-top: 20px;
        background: var(--background);
        padding: 1px 0;
        border-radius: 8px;
    }

    .players main ul li{
        list-style: none;
        color: var(--text);
        font-weight: bold;
        margin: 5px;
    }

    .players main ul li p{
        background: var(--white);
        border-radius: 8px;
        padding: 15px 20px;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .focus{
        border: 1px solid var(--pink);
        border-radius: 8px;
    }

    .comparison{
        background: linear-gradient(to bottom, var(--pink) , var(--purple));
        padding: 50px;
        border-radius: 8px;
        margin: 20px 0;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .comparison h1{
        color: var(--white);
        margin-bottom: 20px;
        text-align: center;
    }

    .comparison figure{
        display: flex;
    }

    .comparison figure img{
        background-color: var(--background);
        border-radius: 50%;
        width: 170px;
        height: 170px;
    }

    .comparison figure span{
        font-weight: bold;
        color: var(--white);
        height: fit-content;
        padding-right: 20px;
        border-bottom: 2px solid var(--white);
    }

    @media(max-width: 1100px){
        grid-template-columns: 1fr;

        .comparison{
            justify-content: space-evenly;
        }
    }

    @media(max-width: 900px){
        .players main{
            grid-template-columns: 1fr;
        }

        .players main ul + ul{
            margin-top: 30px;            
        }
    }

    @media(max-width: 640px){
        margin: 15px 8px;
        align-items: center;

        .create-team, .players, .comparison{
            width: auto;
        }

        .create-team table tbody td div span{
            padding: 0px;
        }

        .comparison{
            margin-top: 30px;
            display: block;
        }

        .comparison div + div{
            margin-top: 30px;
        }

        .comparison figure{
            justify-content: center;
        }
    }
`;