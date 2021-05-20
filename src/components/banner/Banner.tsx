import React from 'react';
import Link from 'next/link'
import Slider from "react-slick";
import { SecaoBanner, SliderItem, Container, Desc } from './styles';


const Banner: React.FC = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    return (
        <SecaoBanner>
            <Slider {...settings}>
                <SliderItem>
                    <Container>
                        <Desc>
                            <h2>Olá, o que você está buscando?</h2>
                            <h1>Criar ou migrar seu e-commerce?</h1>
                        </Desc>
                    </Container>
                </SliderItem>
                <SliderItem>
                    <Container>
                        <Desc>
                            <h2>Olá, o que você está buscando?</h2>
                            <h1>Criar ou migrar seu e-commerce?</h1>
                        </Desc>
                    </Container>
                </SliderItem>
            </Slider>
        </SecaoBanner>
    )
}

export default Banner;