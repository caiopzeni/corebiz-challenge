import styled from 'styled-components';

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

export const NavResponsive = styled.div`
    display: none;
    
    @media screen and (max-width: 550px){
        flex: 1;
        display: block;

        .hamburguer {
            display: block;
            background: #000;
            width: 25px;
            height: 2px;
            position: relative;
            top: 34px;
            left: 2px;
            transition: .4s ease-in-out;
            cursor: pointer;
            z-index: 9;

            &:after,
            &:before {
                background: #000;
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                transition: .4s ease-in-out;
                left: 0;
            }

            &:before {
                top: -6px;
            }

            &:after {
                bottom: -6px;
            }
        }
    }
`;
export const Logo = styled.div`
    flex: 3;

    svg{
        width: 170px;
    }

    
    @media screen and (max-width: 550px){
        flex: 1;
        text-align: center;

        svg{
            width: 109px;
        }
    }

`;

export const Search = styled.div`
    flex: 7;
    align-self: center;
    position: relative;

    @media screen and (max-width: 550px){
        display: block;
        order: 3;
        flex: 100%;
    }


    &:after{
        content: '';
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translate(0, -50%);
        width: 18px;
        height: 18px;
        background: url('/ico-search.svg');
        background-size: 100% 100%;
    }

    input{
        width: 100%;
        border: none;
        font-size: 13px;
        border-bottom: 1px solid #7A7A7A;
        padding: 10px;

    }
    

`;

export const Nav = styled.div`
    flex: 2;
    align-self: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-left: 30px;

    
    @media screen and (max-width: 550px){
        justify-content: flex-end;
        margin-left: 0;
        flex: 1;
    }

    .btnMinhaConta{
        width: 100px;
            
        @media screen and (max-width: 550px){
            display: none;
        }


        span.ico{
            display: inline-table;
            vertical-align: middle;
            width: 15px;
            height: 17px;
        }

        span.txt{
            display: inline-table;
            vertical-align: text-top;
            width: calc(100% - 21px);
            margin-left: 5px;
            font-size: 13px;
            color: #7A7A7A;
        }
    }
`;


export const Cart = styled.div`
    align-self: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    .ico{
        display: block;
        width: 18px;
        height: 18px;
    }

    .number{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items:center;
        align-self: center;
        width: 14px;
        height: 14px;
        background: #F8475F;
        margin-left: 5px;
        border-radius: 50%;
        font-size: 10px;
        font-weight: 700;
        color: #fff;
    }

`;