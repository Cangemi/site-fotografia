import Navbar from '../components/Navbar';

import { Jumbotron, Container } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';


function Home(){
    return(
        <div>
            <Navbar />
            <Jumbotron fluid id="Cabecalho">
                <Container >
                    <div class ="row">  
                        <div  class="col">
                            <h1 className="Text1">Não registramos apenas momentos.</h1>
                        </div>
                        <div class="col" >
                            <img src="/header.png" width="620" height="420" />
                        </div>
                    </div>

                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home