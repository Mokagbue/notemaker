import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="homeBox">
            <h1 className="home-title">Note</h1>
            <Link className="homeEnterButton" to="/notes">Enter</Link>
        </div>
    );
}
export default Home;