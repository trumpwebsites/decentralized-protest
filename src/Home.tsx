import React from "react";
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';

const Home: React.FC = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark" className="justify-content-center">
                <Navbar.Brand href="#">
                    {process.env.REACT_APP_APPLICATION_NAME}
                </Navbar.Brand>
            </Navbar>
            <div style={{margin: "5%"}}>
                <Card bg="dark" text="white">
                    <Card.Body>
                        <Card.Title>
                            Placeholder
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
};

export default Home;
