import React from 'react';
import Navbar from '../Components/Navbar';
import './pages.css';

const AutoInsurance = () => {
    return (
        <div className='pop-up'>

        </div>
    )
}

const HomeInsurance = () => {
    return (
        <div className='pop-up'>
            <form>
                <div className='property-info'>
                    <label for='property-type'>Property Type*:</label>
                    <select id='property-type' name='property-type'>
                        <option value='single'>Single Family Home</option>
                        <option value='multi'>Multi Family Home</option>
                        <option value='duplex'>Duplex Home</option>
                        <option value='mobile'>Mobile Home</option>
                        <option value='townhome'>Townhome</option>
                        <option value='condo'>Condomunium</option>
                        <option value='manufactured'>Manufactured Home</option>
                    </select>
                    <label for='occupancy'>Occupancy*:</label>
                    <select id='occupancy' name='occupancy'>
                        <option value='primary'>Primary Residential</option>
                        <option value='seasonal'>Seasonal Residential</option>
                        <option value='vacation'>Vacation Property</option>
                        <option value='rental'>Rental Property</option>
                    </select>
                    <label for='property-address'>Property Address*:</label>
                    <input type='text' id='property-address' name='property-address' required></input>
                    <label for='property-zip'>Property zip code*:</label>
                    <input type='number' id='property-zip' name='property-zip' required></input>
                    <label for='property-year'>Year Built*:</label>
                    <input type='number' id='property-year' name='property-year' required></input>
                </div>
                <div className='about'>
                    <label for='name'>First and Last Name*:</label>
                    <input type='text' id='name' name='name' required></input>
                    <label for='address'>Address*:</label>
                    <input type='text' name='address' id='address' placeholder='1234 Fake St' required></input>
                    <label for='city'>City*:</label>
                    <input type='text' name='city' id='city' placeholder='City' required></input>
                    <label for='state'>State*:</label>
                    <input type='text' name='state' id='state' placeholder='State' required></input>
                    <label for='zip-code'>Zip Code*:</label>
                    <input type='number' name='zip-code' id='zip-code' placeholder='Zip Code' required></input>
                    <label for='phone'>Phone*:</label>
                    <input type='tel' id='phone' name='phone' placeholder='XXX-XXX-XXX' required></input>
                    <label for='email'>Email*:</label>
                    <input type='email' id='email' name='email' required></input>
                </div>
                <button type='submit' value='Submit'>Get My Quote</button>
            </form>
        </div>
    )
}

const Insurance = () => {
    return (
        <div className='page-container'>
            <Navbar />
            <h1>Insurance Page</h1>
            <select id='type'>
                <option value='home'>Home</option>
                <option value='auto'>Auto</option>
            </select>
            <button>Get Free Quote</button>
            
        </div>
    )
}

export default Insurance
