import React from 'react';
import Navbar from '../Components/Navbar';
import './pages.css';

const Buy = () => {
    return (
        <div className='page-container'>
            <Navbar />
            <h1>Buy page</h1>
            <div className='address-container'>
                <form>
                    <input type='text' name='address' id='address' placeholder='1234 Fake St' required></input>
                    <input type='text' name='city' id='city' placeholder='City' required></input>
                    <input type='text' name='state' id='state' placeholder='State' required></input>
                    <input type='number' name='zip-code' id='zip-code' placeholder='Zip Code' required></input>
                    <button type='submit' value='Submit'>Search</button>
                </form>
            </div>

        </div>
    );
}

export default Buy;