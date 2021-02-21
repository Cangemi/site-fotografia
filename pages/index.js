import Head from 'next/head';

import Image from 'next/image';


import Navbar from '../components/Navbar';

import Gallery from '../components/Gallery';

import NumberCounter from 'number-counter';

import { Jumbotron, Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);



function Home() {
    return (
        <div>
            <Head>

                <title>Pagina de estudo</title>
                <meta name='description' content='Site de estudo' />
                <meta name='author' content='Pedro Cangemi' />
                <link href="https://fonts.googleapis.com/css2?family=Chau+Philomene+One&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap" rel="stylesheet"></link>
            </Head>
            <Navbar />
            <Jumbotron fluid id="header">
                <Container >
                    <div className="row">
                        <div className="col">
                            <h1 className="Titulo1">Não registramos <br />apenas momentos.</h1>
                            <h3 className="Divisor">▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀</h3>
                            <h2 className="Titulo2" >Eternizamos emoções</h2>
                            <div className="BtnHead">
                                <button className="BtnHead2" href="/">Orçamento</button>
                            </div>
                        </div>
                        <Image className="col" src="/header.png" width="620" height="480" />
                    </div>
                </Container>
                <div fluid id="divisorForma"></div>
            </Jumbotron>
            <Jumbotron fluid id="section-1">
                <Container>
                    <div className="row">
                        <Image className="col" src="/quemsoueu.png" width="580" height="380" />
                        <div className="col">
                            <h2 className="Titulo3">Quem sou eu.</h2>
                            <h3 id="Divisor2">◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊</h3>
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
            <Jumbotron fluid id="section-2">
                <div fluid id="divisorForma2"></div>
                <Container>
                    <div className="row">
                        <div className="col">
                            <div className="quad">
                                <div className="centralizar">
                                    <FontAwesomeIcon className="icone" icon="camera-retro" />
                                </div>
                                <h3 className="nomeCard">Ensaios</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div className="quad">
                                <div className="centralizar">
                                    <FontAwesomeIcon className="icone" icon="gem" />
                                </div>
                                <h3 className="nomeCard">Casamento</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div className="quad">
                                <div className="centralizar">
                                    <FontAwesomeIcon className="icone" icon="baby-carriage" />
                                </div>
                                <h3 className="nomeCard">NewBorn</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div className="quad">
                                <div className="centralizar">
                                    <FontAwesomeIcon className="icone" icon="beer" />
                                </div>
                                <h3 className="nomeCard">Comemorações</h3>
                            </div>
                        </div>

                    </div>
                </Container>
            </Jumbotron>
            <div className="col-12 divisorCentralizar">
                <div fluid id="divisorForma3"></div>
            </div>
            <Jumbotron fluid id="section-3">
                <Container>
                    <h2>Portfólio</h2>
                    <Gallery />
                    <div className="BtnHead">
                        <button className="BtnPort" href="/">Ver ensaios completos</button>
                    </div>
                </Container>
            </Jumbotron>
            <Jumbotron id="section-4">
                <Container>
                    <div className="row">
                        <div className="col">
                            <NumberCounter className="number" end={43} delay={1} />
                            <h3 className="counterName">Clientes Satisfeitos</h3>
                        </div>
                        <div className="col">
                            <NumberCounter className="number" end={32} delay={1} />
                            <h3 className="counterName">Álbuns Entregues</h3>
                        </div>
                        <div className="col">
                            <NumberCounter className="number" end={5000} delay={1} />
                            <h3 className="counterName">Clicks registrados</h3>
                        </div>
                    </div>
                </Container>


            </Jumbotron>
        </div>
    )
}

export default Home