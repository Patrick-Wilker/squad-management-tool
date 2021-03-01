import styled from 'styled-components';

export const Team = styled.div`
    margin: 40px 40px 0;

    .team{
        background: var(--white);
        border-radius: 8px;
        padding: 30px 0;
    }

    .team h2{
        color: var(--text);
        font-size: 16px;
        text-align: center;
        margin-bottom: 30px;
    }

    .container{
        margin: 20px 100px;
    }

    form .fields, form .configure{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 150px;
        row-gap: 30px;
        margin-bottom: 30px;
    }

    form .fields .field, .field{
        display: flex;
        flex-direction: column;
    }

    form .fields .field > label, form .fields .field span, form .formation label, .search-player .field label{
        display: block;
        color: var(--text-dark);
        font-weight: bold;
        margin-bottom: 10px;

        order: -1;
    }

    form .fields .field > input:focus + label, form .fields .field > textarea:focus + label, .search-player .field input:focus + label{
        color: var(--pink);
    }

    form .fields .field > input:focus, form .fields .field > textarea:focus, .search-player .field input:focus{
        border: 1px solid var(--pink);
    }

    form .fields .field > input, form .fields .field > textarea, .search-player .field input{
        color: var(--purple);
        /* font-weight: bold; */
        border: 1px solid #ccc;
        padding: 10px 15px;
        border-radius: 4px;

        width: 100%;
        order: 0;
    }

    form .fields .field textarea{
        resize: none;
        height: 150px;
    }

    form .fields .field > span:hover{
        color: var(--pink);
    }

    form .group-radio{
        display: flex;
    }

    form .group-radio div + div{
        margin-left: 50px;
    }

    form .group-radio input{
        margin-right: 8px;
        background-color: yellow;
    }

    form .group-radio input:checked + label{
        font-weight: bold;
        color: var(--pink);
    }

    form .group-radio label{
        color: #ccc;
    }

    form .formation{
        display: flex;
        align-items: baseline;
    }

    form .formation label{
        margin-right: 40px;
    }

    form .formation select{
        padding: 5px 10px;
        border-radius: 4px;
        font-weight: bold;
        color: var(--text-dark);
    }

    form .formation select:before{
        border: 1px solid var(--text-dark);
    }

    form .configure > button{
        background:linear-gradient(to bottom, var(--pink) , var(--purple));
        border: 0;
        border-radius: 4px;
        color: var(--white);
        font-weight: bold;
        padding: 10px 0;
    }

    form .search-player ul{
        margin-top: 20px;
    }

    form .search-player ul li{
        background: #eee;
        padding: 10px 20px;
        list-style: none;
        border: 3px dashed #ccc;
    }

    form .search-player ul li + li{
        margin-top: 20px;
    }

    form .search-player ul li div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 5px;
    }

    form .search-player ul li p{
        color: var(--pink);
    }

    form .search-player ul li p strong{
        color: var(--text-dark);
    }

    @media(max-width: 1100px){
        form .fields, form .configure{
            column-gap: 90px;
        }
    }

    @media(max-width: 900px){
        form .fields, form .configure{
            grid-template-columns: 1fr;
            column-gap: 0px;
        }
    }

    @media(max-width: 640px){
        margin: 20px 8px 0;

        .container{
            margin: 20px 20px;
        }
    }
`;