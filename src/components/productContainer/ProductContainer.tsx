import React, { useContext } from 'react';
import Link from 'next/link'
import { sendData } from 'next/dist/next-server/server/api-utils';
import StarRatings from 'react-star-ratings';

import { ItemProduct, Container, ImgProduct, Price, ButtonComprar } from './styles';
import { CartContext } from '../cartIcon/CartIcon';

interface Props {
    productName: string,
    stars: number,
    imageUrl: string,
    listPrice: string,
    price: number,
    quantity: number,
    value: number
}



const ProductContainer: React.FC<Props> = ({
    productName,
    stars,
    imageUrl,
    listPrice,
    price,
    quantity,
    value
}) => {

    const { handleAddItemToCart } = useContext(CartContext);
   
    let priceList = (
        <div></div>
    );

    if (listPrice > price) {
        priceList = (
            <div>
                <Price>
                    <strike>De: {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(listPrice / 100)}</strike>
                    Por {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price / 100)}
                    <span>ou em {quantity}x de {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value / 100)}</span>
                </Price>
            </div>
        );
    } else {
        priceList = (
            <div>
                <Price>
                    Por {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price / 100)}
                    <span>ou em {quantity}x de {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value / 100)}</span>
                </Price>
            </div>
        );
    }

    return (
        <ItemProduct>
            <Container>
                <ImgProduct>
                    <img src={imageUrl} alt="" />
                </ImgProduct>
                


                <h2>{productName}</h2>

                <StarRatings
                    rating={stars}
                    starRatedColor="#F8475F"
                    numberOfStars={6}
                    name='rating'
                    starDimension="11"
                    starSpacing="2"
                />


                {priceList}


                <ButtonComprar onClick={() => handleAddItemToCart({productName})}>
                    COMPRAR
                </ButtonComprar>

            </Container>
        </ItemProduct>
    )
}

export default ProductContainer;