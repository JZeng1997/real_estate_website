import React, {useState, useReducer}from 'react';
import Navbar from '../Components/Navbar';
import './pages.css';

const Contact = () => {
    const [submitting, setSubmitting] = useState(false);
    return (
        <div className="page-container">
            <Navbar />
            <h1>Contact me for Questions</h1>
            <form className='contact-bg'>
                {!submitting && <div>
                <input type='text' id='name' name='from_name' style={{width: '40vw', margin: '5px', padding: '5px'}} placeholder=' Name' required ></input>
                <br/>
                <input type='tel' id='phone' name='phone' style={{width: '40vw', margin: '5px', padding: '5px'}} placeholder=' xxx-xxx-xxxx' required></input>
                <br/>
                <input type='text' id='email' name='reply_to' style={{width: '40vw', margin: '5px', padding: '5px'}} placeholder=' Email' required ></input>
                <br/>
                <input type='text' style={{width: '40vw', margin: '5px', padding: '5px'}} placeholder=' Interest' required></input>
                <br/>
                <textarea type='text' id='message' name='message' style={{width: '40vw', height: '20vh', margin: '5px', padding: '5px'}} placeholder=' Message' required ></textarea>
                <br/>
                <button type='submit' value='Submit' style={{
                    borderRadius: '30%', backgroundColor: '#15cdfc', padding: '5px', fontSize:'14px', width: '80px'
                }}><strong>Send</strong></button>
                </div>}
                {submitting && <div style={{
                    textAlign: 'center', color: 'white'
                }}>
                        <strong>Thanks for the message! :)<br/>I'll respond as soon as I can!</strong>
                    </div>}
            </form>
        </div>
    )
}

export default Contact
