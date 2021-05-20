import styled from 'styled-components';

export const Container = styled.div`
    width: min(92%, 716px);
    margin: 0 auto;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-justify-content: space-between;
    -ms-justify-content: space-between;
    justify-content: space-between;
    padding: 16px 0;
    `;

export const SecaoNewsletter = styled.div`
    background-color: #F2F2F2;
    padding: 24px 0;

    .sucess{
        text-align: center;
        margin: 0 auto;

        p{
            font-size: 12px;
        }

        h2{
            font-size: 14px;
            padding-bottom: 0;
        }

        a.button{
            display: inline-table;
            padding: 15px 60px;
            background: #000;
            margin-top: 20px;
            border-radius: 5px;
            color: #fff;
            font-weight: 700;
            cursor: pointer;
        }
    }

    h2{
        font-weight: 700;
        font-size: 22px;
        width: 100%;
        text-align: center;
        padding-bottom: 16px;


        @media screen and (max-width: 550px){
            text-align: left;
        }

    }

    form{
        width: 100%;
        margin: 0 auto;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-flow: row wrap;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        -webkit-justify-content: space-between;
        -ms-justify-content: space-between;
        justify-content: space-between;
        
        label{
            width: 40%;
            
            @media screen and (max-width: 550px){
                width: 100%;
                margin: 10px 0;
            }

        }

        input{
            width: 100%;
            padding: 16px;
            border: none;
            border-radius: 5px;
        }

        button{
            background-color: #000;
            text-align: center;
            width: 18%;
            border: none;
            color: #F2F2F2;
            cursor: pointer;
            font-size: 14px; 
            border-radius: 5px;
            
            @media screen and (max-width: 550px){
                width: 100%;
                text-align: center;
                padding: 16px;
            }
        }
    
    }

`;