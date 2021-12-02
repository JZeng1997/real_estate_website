import React from 'react';
import Navbar from '../Components/Navbar';
import './pages.css';

const Home = () => {
    return (
        <div className="page-container">
            <div className='house-image'>
                <Navbar />
                <div className='center-container'>
                    <div className='transparent-box center-container'>
                        <h1 style={{ color: 'white' }}>Welcome to Mei Zhao Realty</h1>
                        <div className='flex-horizontal'>
                            <button className='home-button'>Buy</button>
                            <button className='home-button'>Sell</button>
                            <button className='home-button'>Insurance</button>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Home page</h1>
        </div>
    );
}

export default Home;