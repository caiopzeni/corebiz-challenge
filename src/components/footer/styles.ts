import styled from 'styled-components';

export const SecaoFooter = styled.footer`
    background-color: #000;
    padding: 25px 0;
`;

export const Container = styled.div`
    width: min(92%, 1010px);
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


export const ColLocalizacao = styled.div`
    h2{
        font-weight: 700;
        color: #fff;
        font-size: 20px;

        &:after{
            content: '';
            display: block;
            width: 45px;
            height: 5px;
            background-color: #fff;
            margin: 16px 0;
        }

    }

    p{
        font-size: 13px;
        color: #fff;
        line-height: 2;
    }
    
    @media screen and (max-width: 550px){
        width: 100%;
    }



`;

export const ColBtns = styled.div`
    align-self: center;
    
    @media screen and (max-width: 550px){
        width: 100%;
        text-align: center;
        padding: 20px 0;
    }


    a{
        display: table;
        background: #fff;
        padding: 12px 18px;
        font-weight: 600;
        color: #000;
        border-radius: 5px;

        & + a{
            margin-top: 36px;
        }


        span.ico{
            display: inline-table;
            vertical-align: middle;
            margin-right: 15px;
            width: 20px;
        }

        span.txt{
            vertical-align: middle;
            display: inline-table;
        }

            
        @media screen and (max-width: 550px){
            margin: 0 auto;
        }

    }

`;

export const ColPowered = styled.div`
    align-self: center;

    
        @media screen and (max-width: 550px){
            width: 100%;
            text-align: center;
        }

    span{
        display: inline-table;
        margin-left: 29px;

        
        @media screen and (max-width: 550px){
            margin: 0 45px;
        }
    }
    

`;