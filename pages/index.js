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
                <link rel="stylesheet" href="all.css" type="text/css" media="all"></link>
            </Head>
            <Navbar />
            <Jumbotron fluid id="header">
                <Container >
                    <div class="row">
                        <div class="col">
                            <h1 className="Titulo1">Não registramos <br />apenas momentos.</h1>
                            <h3 className="Divisor">▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀</h3>
                            <h2 className="Titulo2" >Eternizamos emoções</h2>
                            <div className="BtnHead">
                                <button className="BtnHead2" href="/">Orçamento</button>
                            </div>
                        </div>
                        <Image class="col" src="/header.png" width="620" height="480" />
                    </div>
                </Container>
                <div className="divisorForma"></div>
            </Jumbotron>
            <Jumbotron fluid id="section-1">
                <Container>
                    <div class="row">
                        <Image class="col" src="/quemsoueu.png" width="580" height="380" />
                        <div class="col">
                            <h2 className ="Titulo3">Quem sou eu.</h2>
                            <h3 className="Divisor2">♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦</h3>
                            <p className="texto-quem-sou">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas 
                                sed fringilla augue, sit amet rutrum ex. Nullam vitae eleifend quam. 
                                Curabitur sapien eros, tempor vestibulum purus et, sollicitudin ultricies 
                                ipsum. Etiam tincidunt venenatis pellentesque. Vestibulum lobortis erat 
                                malesuada, hendrerit velit ut, congue eros. Integer ligula turpis, 
                                euismod a tincidunt sed, convallis eu lacus. Curabitur eu cursus massa. 
                                Praesent sed nisi vitae nisl consectetur consequat in eget sapien. Donec 
                                risus urna, dapibus vel lectus ut, lobortis egestas velit. Praesent sollicitudin 
                                lacus vitae mi maximus egestas.
                            </p>
                        </div>
                    </div>
                </Container>

            </Jumbotron>

        </div>
    )
}

export default Home