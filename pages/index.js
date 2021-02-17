import Head from 'next/head';

import Image from 'next/image';


import Navbar from '../components/Navbar';

import { Jumbotron, Container } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <div>
            <Head>

                <title>Pagina de estudo</title>
                <meta name='description' content='Site de estudo' />
                <meta name='author' content='Pedro Cangemi' />
                <link href="https://fonts.googleapis.com/css2?family=Chau+Philomene+One&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet"></link>

            </Head>
            <Navbar />
            <Jumbotron fluid id="Cabecalho">
                <Container >
                    <div class="row">
                        <div class="col">
                            <h1 className="Titulo1">Não registramos <br />apenas momentos.</h1>
                            <h2 className="Divisor">▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀</h2>
                            <h2 className="Titulo2" >Eternizamos emoções</h2>
                            <div  className="BtnHead">
                             <button className="BtnHead2" href="/">Orçamento</button>
                            </div>
                        </div>
                        <Image class="col" src="/header.png" width="620" height="480" />
                    </div>

                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home