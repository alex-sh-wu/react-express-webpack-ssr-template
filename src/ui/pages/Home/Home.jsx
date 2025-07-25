import React from "react";
import photo from "./Keyboard_cat.jpg";
import "./Home.css";

const Home = () => {
    return (
        <div className="background">
            <div className="container">
                <h1>Welcome to the Home Page</h1>
                <p>This page is rendered on the server using React 19 and Express.js.</p>
                <img src={photo} alt="A beautiful view" className="photo" />
            </div>
        </div>
    );
}

export default Home;
