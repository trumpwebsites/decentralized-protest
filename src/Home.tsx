import React from "react";
import Navbar from 'react-bootstrap/Navbar';

import Posts from './Posts';

const Home: React.FC = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark" className="justify-content-center">
                <Navbar.Brand href="#">
                    {process.env.REACT_APP_APPLICATION_NAME}
                </Navbar.Brand>
            </Navbar>
            <div style={{margin: "5%"}}>
                <Posts />
                {/* <Card bg="dark" text="white">
                    <Card.Body>
                        <Card.Title>
                            Placeholder
                        </Card.Title>
                    </Card.Body>
                </Card> */}
            </div>
        </div>
    )
};

export default Home;
