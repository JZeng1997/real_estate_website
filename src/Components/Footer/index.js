import React from 'react'

const Footer = () => {
    let name = 'Mei Zhao';
    let phone = '(720) 492-7563';
    let email = 'thinking2003@hotmail.com';
    let address = '24588 E Louisiana Cir\nAurora, CO 80018';
    return (
        <div className='footer-container'>
            <p>
                {name}<br/>
                {phone}<br/>
                {email}<br/>
                {address}<br/>
            </p>
        </div>
    )
}

export default Footer
