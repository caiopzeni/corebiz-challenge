import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'
import { CartProvider } from '../components/cartIcon/CartIcon'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
        <CartProvider>
            <Component {...pageProps} />
            <GlobalStyles />
        </CartProvider>
        </>
    )
}

export default MyApp
