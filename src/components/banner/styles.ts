import styled from 'styled-components';

export const SecaoBanner = styled.div`
    width: 100%;

     .slick-dots {
            display: block;
            list-style: none;
            margin: 0;
            padding: 15px 0;
            text-align: center;
            width: 100%;
            bottom: 5px;

            @media screen and (max-width: 550px){
                bottom: 0;
            }

            li button {
                width: 13px;
                height: 13px;
                background-color: #BDBDBD;
                border-radius: 10px;
                box-shadow: none;
                cursor: pointer;
                display: block;
                height: 14px;
                padding: 0;
                text-indent: -99999px;
                transition: .3s;
                width: 14px;
                
                @media screen and (max-width: 550px){
                    width: 6px;
                    height: 6px;
                }

            }

            li.slick-active button {
                border-width: 2px;
                background: 0 0;
                width: 21px;
                height: 21px;
                
                @media screen and (max-width: 550px){
                    width: 6px;
                    height: 6px;
                }

                &:before{
                    border-radius: 10px;
                    background-color: #F8475F;
                    opacity: 1;
            
                    @media screen and (max-width: 550px){
                        width: 6px;
                        height: 6px;
                    }
                }

            }
        }
`;

export const SliderItem = styled.div`
    background: url('/slider-1.png');
    background-size: auto 110%;
    background-position: right;
    background-repeat: no-repeat;
    height: 430px;
    position: relative;

    
    @media screen and (max-width: 550px){
        height: 68vw;
        background-size: cover;
    }

    &:after{
        content: '';
        width: 50vw;
        top: 0;
        bottom: 0;
        left: 0;
        background: #000;
        position: absolute;

        
        @media screen and (max-width: 550px){
            width: 100vw;
            opacity: 0.55;
        }
    }

    &:before{
        content: '';
        width: 100px;
        top: 0;
        bottom: 0;
        left: 49vw;
        position: absolute;
        background: url('/detail-banner.svg');
        background-size: 100% 100%;
        background-position: right;

        
        @media screen and (max-width: 550px){
            display: none
        }

    }

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
    height: 100%;
    align-items: center;
    align-content: center;
`;
export const Desc = styled.div`
    position: relative;
    z-index: 2;
    width: 45%;


    h2{
        font-weight: 700;
        color: #fff;
        font-size: 30px
    }

    h1{
        font-weight: 700;
        color: #fff;
        font-size: 45px;
    }

    
    @media screen and (max-width: 550px){
        width: 100%;

        h2{
            font-size: 24px;
        }

        h1{
            font-size: 36px;
        }

    }

`;