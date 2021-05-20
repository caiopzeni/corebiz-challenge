import styled from 'styled-components';


export const Container = styled.div`
    text-align: center;
    transition: .3s ease-in-out;
    padding: 0 0 20px 0;

    h2{
        font-size: 12px;
        color: #7A7A7A;
        font-weight: 600;
        width: 100%;
        text-align: center;
        margin: 7px 0;
    }


`;

export const ImgProduct = styled.div`
    width: 100%;

    img{
        width: 100%;
    }
`;

export const ButtonComprar = styled.a`
    display: table;
    margin: 16px auto 0 auto;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    padding: 8px 28px;
    border-radius: 5px;
    opacity: 0;
    transition: .3s ease-in-out;

    @media screen and (max-width: 550px){
        opacity: 1;
    }
`;


export const Price = styled.div`
    font-size: 18px;
    color: 18px;
    font-weight: 700;
    padding: 20px 0;

    
    @media screen and (max-width: 550px){
        font-size: 15px;
        min-height: 95px
    }

    span,
    strike{
        display: block;
        font-size: 12px;
        color: #7A7A7A;
    }

`;

export const ItemProduct = styled.div`
    padding: 25px;

    &:hover ${Container}{
        background-color: #E6E8EA;
    }

    &:hover ${ButtonComprar} {
        opacity: 1;
        cursor: pointer;
    }
`;

