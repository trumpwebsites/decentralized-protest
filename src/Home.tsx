import React, { useState, lazy } from "react";
import Navbar from "react-bootstrap/Navbar";
import { FaQrcode } from "react-icons/fa";
import PWAPrompt from 'react-ios-pwa-prompt'

import "./Home.css";

const QRModal = lazy(() => import('./QRCode/QRModal'));
const Posts = lazy(() => import('./Posts/Posts'));

const Home: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div>
            <Navbar bg="dark" sticky="top" variant="dark" className="justify-content-center navbar-border" style={{ borderBottom: "1px solid #282c34" }}>
                <Navbar.Brand href="#">
                    {process.env.REACT_APP_APPLICATION_NAME}
                </Navbar.Brand>
            </Navbar>
            <div style={{margin: "5%"}}>
                <Posts />
            </div>
            <button type="button" className="btn btn-light btn-circle btn-xl fixed-button" onClick={handleShow}>
                <FaQrcode width="40px" height="40px" />
            </button>
            <PWAPrompt
                copyBody={`Stay informed by receiving notifications and the most up-to-date information for ${process.env.REACT_APP_APPLICATION_NAME}.`} 
                timesToShow={3}
                permanentlyHideOnDismiss={false}
            />
            <QRModal show={showModal} onClose={handleClose} />
        </div>
    )
};

export default Home;
