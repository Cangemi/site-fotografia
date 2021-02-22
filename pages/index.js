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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"></link>
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
                                <button className="BtnHead2" href="https://site-fotografia.vercel.app/#section-7">Orçamento</button>
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
                            <NumberCounter className="number" start={49000} end={50000} delay={1} />
                            <h3 className="counterName">Clicks registrados</h3>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Jumbotron fluid id="section-5">
                <Container>
                    <h2>Nosso Trabalho</h2>
                    <div className="row bigBox">
                        <div className="col">
                            <ul>
                                <li><FontAwesomeIcon className="iconCheck" icon="check" />Temos uma equipe dedicada e programada para atender as suas necessidades</li>
                                <li><FontAwesomeIcon className="iconCheck" icon="check" />Agendamos um horário para conhecer nossos clientes pessoalmente</li>
                                <li><FontAwesomeIcon className="iconCheck" icon="check" />Entregamos tudo dentro do prazo que definimos com a menos brevidade possível</li>
                                <li><FontAwesomeIcon className="iconCheck" icon="check" />Um dos melhores preços do mercado sem deixar de lado qualidade e dedicação</li>
                                <li><FontAwesomeIcon className="iconCheck" icon="check" />O pagamento pode ser parcelado</li>
                            </ul>
                        </div>
                        <Image className="col nossoTrabalho" src="/toddler.jpg" width="550" height="350" />
                    </div>
                </Container>
            </Jumbotron>
            <Jumbotron fluid id="section-6">
                <div className="divisorForma4"></div>
                <Container>
                    <h2>Nossos Clientes</h2>
                    <div className="row">
                        <div className="col cardi">
                            <p className="card-text cardText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <ul className="row">
                                <li>
                                    <div className="rounded-circle circulo1"></div>
                                </li>
                                <li>
                                    <h5 class="card-title cardText titulo">John Doe</h5>
                                    <p className="card-text cardText">Designer</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col cardi">
                            <p className="card-text cardText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <ul className="row">
                                <li>
                                    <div className="rounded-circle circulo2"></div>
                                </li>
                                <li>
                                    <h5 class="card-title cardText titulo">Greta Silva</h5>
                                    <p className="card-text cardText">Designer</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col cardi">
                            <p className="card-text cardText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <ul className="row">
                                <li>
                                    <div className="rounded-circle circulo3"></div>
                                </li>
                                <li>
                                    <h5 class="card-title cardText titulo">Joana Lana</h5>
                                    <p className="card-text cardText">Designer</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
                <div className="divisorForma5"></div>
            </Jumbotron>
            <Jumbotron fluid id="section-7">
                
                <Container>
                    <h2 className="tituloSection7">Pacotes de cobertura</h2>
                    <div className="row">
                        <div className="col cartao">
                            <h3 className="tituloCartao">Pacote 1</h3>
                            <p className="textoCartao"><FontAwesomeIcon className="iconCheck2" icon="check" />Cobertura por 1 fotografo</p>
                            <p className="textoCartao"><FontAwesomeIcon className="iconCheck2" icon="check" />2 horas de Ensaio/Cobertura</p>
                            <p className="textoCartao"><FontAwesomeIcon className="iconCheck2" icon="check" />Todas as fotos editadas</p>
                            <p className="textoCartao"><FontAwesomeIcon className="iconCheck2" icon="check" />Prazo de entrega de 72 horas</p>
                            <h3 className="preco">R$ 340</h3>
                            <button className="BtnCartao" href="/">Tenho interesse</button>
                        </div>
                        <div className="col cartao">
                            <h3 className="tituloCartao">Pacote 2</h3>
                            <p className="textoCartao"><FontAwesomeIcon className="iconCheck2" icon="check" />Cobertura por 1 fotografo</p>
                            <p className="textoCartao"><FontAwesomeIcon className="iconCheck2" icon="check" />2 horas de Ensaio/Cobertura</p>
                            <p className="textoCartao"><FontAwesomeIcon className="iconCheck2" icon="check" />Todas as fotos editadas</p>
                            <p className="textoCartao"><FontAwesomeIcon className="iconCheck2" icon="check" />Prazo de entrega de 72 horas</p>
                            <h3 className="preco">R$ 620</h3>
                            <button className="BtnCartao" href="/">Tenho interesse</button>
                        </div>
                        <div className="col cartao">
                            <h3 className="tituloCartao">Pacote 3</h3>
                            <p className="textoCartao"><FontAwesomeIcon className="iconCheck2" icon="check" />Cobertura por 1 fotografo</p>
                            <p className="textoCartao"><FontAwesomeIcon className="iconCheck2" icon="check" />2 horas de Ensaio/Cobertura</p>
                            <p className="textoCartao"><FontAwesomeIcon className="iconCheck2" icon="check" />Todas as fotos editadas</p>
                            <p className="textoCartao"><FontAwesomeIcon className="iconCheck2" icon="check" />Prazo de entrega de 72 horas</p>
                            <h3 className="preco">R$ 1520</h3>
                            <button className="BtnCartao" href="/">Tenho interesse</button>
                        </div>
                    </div>
                    <button className="BtnPort" href="/">Pacote Personalizado</button>
                </Container>
            </Jumbotron>
            <Jumbotron fluid id="footer">
            <div className="divisorForma6"></div>
                <Container>
                    <div>
                         <p className="txtRedes"><i class="far fa-envelope iconRede"></i>pedrocangemi@gmail.com</p>
                         <p className="txtRedes"><i class="fab fa-whatsapp iconRede"></i>(16) 981777171</p>
                         <p className="txtRedes"><i class="fas fa-map-marker-alt iconRede"></i>Rua dos Alfeneiros, 212</p>
                    </div>
                    <div >
                       <i className="fab fa-facebook Redes"></i>
                       <i className="fab fa-twitter Redes"></i>
                       <i className="fab fa-youtube Redes"></i>
                    </div>
                    <p className="txtRedes">Desenvolvido por: Pedro Cangemi</p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home