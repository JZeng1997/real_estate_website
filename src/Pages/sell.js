import React from 'react';
import Navbar from '../Components/Navbar';
import './pages.css';

const Sell = () => {
    return (
        <div className="page-container">
            <Navbar />
            <h1>Sell page</h1>
            <div className='address-container'>
                <form>
                    <input type='text' name='address' id='address' placeholder='1234 Fake St' required></input>
                    <input type='text' name='city' id='city' placeholder='City' required></input>
                    <input type='text' name='state' id='state' placeholder='State' required></input>
                    <input type='number' name='zip-code' id='zip-code' placeholder='Zip Code' required></input>
                    <button type='submit' value='submit'>Search</button>
                </form>
            </div>
            <div className='sell-container'>
                <form>
                    <input type='date' name='sell-date' id='sell-date' placeholder='Estimate of Sell Date' required></input>
                    <input type='text' name='name' id='name' placeholder='Name' required></input>
                    <input type='tel' name='number' id='number' placeholder='XXX-XXX-XXXX'></input>
                    <input type='email' name='email' id='email' placeholder='Email' required></input>
                </form>
            </div>
        </div>
    )
}

export default Sell
