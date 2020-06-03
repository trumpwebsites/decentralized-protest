import React, { lazy } from "react";
import Navbar from "react-bootstrap/Navbar";
import { BsBoxArrowUp } from "react-icons/bs";
import "./Home.css";

const Posts = lazy(() => import('./Posts'));

const Home: React.FC = () => {
    return (
        <div>
            <Navbar bg="dark" sticky="top" variant="dark" className="justify-content-center navbar-border" style={{ borderBottom: "1px solid #282c34" }}>
                <Navbar.Brand href="#">
                    {process.env.REACT_APP_APPLICATION_NAME}
                </Navbar.Brand>
            </Navbar>
            <button type="button" className="btn btn-light btn-circle btn-xl fixed-button">
                <BsBoxArrowUp width="40px" height="40px" />
            </button>
            <div style={{margin: "5%"}}>
                <Posts />
            </div>
        </div>
    )
};

export default Home;
