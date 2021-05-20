import React, { useState, useRef } from 'react';
import Link from 'next/link'
import axios from 'axios'
import { SecaoNewsletter, Container } from './styles';


const Newsletter: React.FC = () => {

    const inputNome = useRef(null);
    const inputEmail = useRef(null);
    const [message ,setMessage] = useState('');

    const newNewsletter = () => {
        setMessage('');
    }

    const subscribe = async (e) => {
        e.preventDefault();

        const email = inputEmail.current.value;
        const name = inputNome.current.value;


        axios({
            method: "post",
            url: "https://corebiz-test.herokuapp.com/api/v1/newsletter",
            data: {
                "email": email,
                "name": name
            },
            headers: { "Content-Type": "application/json" },
        })
        .then(function (response) {

            //handle success
            inputEmail.current.value = '';
            inputNome.current.value = '';

            setMessage('Seu e-mail foi cadastrado com sucesso!');
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    };

    return (
        <SecaoNewsletter>
            <Container>
                {message
                    ?
                    <div className="sucess">
                        <h2>{message}</h2>
                        <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>

                        <a onClick={newNewsletter} className="button">Cadastrar novo e-mail</a>
                    </div>
                    :
                    <form onSubmit={subscribe}>
                        <h2>Participe de nossas news com promoções e novidades!</h2>
                        <label htmlFor="">
                            <input
                                id="email-input"
                                name="nome"
                                placeholder="Digite seu nome"
                                ref={inputNome}
                                required
                                type="text"
                            />
                        </label>
                        <label>
                            <input
                                id="email-input"
                                name="email"
                                placeholder="Digite seu email"
                                ref={inputEmail}
                                required
                                type="email"
                            />
                        </label>

                        <button type="submit">Eu quero!</button>

                    </form>
                }

            </Container>
        </SecaoNewsletter>
    )
}

export default Newsletter;