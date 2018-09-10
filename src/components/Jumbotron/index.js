import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import './style.css';

const Jumbotron1 = () => {
    return (
        <div>
            <Jumbotron fluid className='main_jumbotron'>
                <div className='container'>
                    <Container fluid className='jumbo'>
                        <h1 className="display-3 ">Lazy day?</h1>
                        <p className="lead ">Pick a Movie or a Book!</p>
                    </Container>
                </div>
            </Jumbotron>
        </div>
    );
};

export default Jumbotron1;