import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1 className="title">Welcome to App X </h1>
                            <p className="subtitle"> Product Manager Edition </p>
                        </div>
                            <div className="buttonContainer">
                                <a href="/create">
                                    <Button size='lg'className='landingbutton'>
                                        Create Product
                                    </Button>
                                </a>
                                <a href="/products">
                                    <Button size='lg'className='landingbutton' variant='outline-primary'>
                                        View All 
                                    </Button>
                                </a>
                            </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default LandingPage;
