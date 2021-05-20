import styled from 'styled-components';

export const CarrProdutos = styled.div`
    width: min(92%, 1010px);
    margin: 0 auto;
    padding: 25px 0;

    h3{
        font-weight: 900;
         font-size: 20px;

        &:after{
            content: '';
            display: block;
            width: 65px;
            height: 5px;
            background-color: #C0C0C0;
            margin: 16px 0;
        }
    }


    .slick-next, .slick-prev{
        width: 12px;
        height: 22px;
    }

    .slick-next:before, .slick-prev:before{
        color: #000;
    }

    .slick-prev:before{
        content: ' ';
        background: url('./arrow-prev.svg');
        background-size: 100% 100%;
        width: 12px;
        height: 22px;
        display: block;
    }

    .slick-next:before{
        content: ' ';
        background: url('./arrow-next.svg');
        background-size: 100% 100%;
        width: 12px;
        height: 22px;
        display: block;
    }

    @media screen and (max-width: 550px){
         .slick-dots {
            display: block;
            list-style: none;
            margin: 0;
            padding: 15px 0;
            text-align: center;
            width: 100%;
            bottom: -15px;

            li button {
                width: 6px;
                height: 6px;
                background-color: #BDBDBD;
                border-radius: 10px;
                box-shadow: none;
                cursor: pointer;
                display: block;
                height: 6px;
                padding: 0;
                text-indent: -99999px;
                transition: .3s;
                width: 6px;
            }

            li.slick-active button {
                border-width: 2px;
                background: 0 0;
                width: 6px;
                height: 6px;

                &:before{
                width: 6px;
                height: 6px;
                    border-radius: 10px;
                    background-color: #F8475F;
                    opacity: 1;
                }

            }
        }
    }

`;