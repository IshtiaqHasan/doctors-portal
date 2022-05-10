import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }}
            className="p-20"
        >
            <div className='text-center'>
                <h3 className='text-xl text-primary font-bold'>Contact Us</h3>
                <h2 className='text-3xl text-white'>Stay Connected With us</h2>
            </div>
            <div >
                <div className='text-center'>
                    <input type="text" placeholder="Email Address" className="input input-bordered  w-full max-w-xs mt-5 mb-2" />
                    <br />
                    <input type="text" placeholder="Subject" className="input input-bordered  w-full max-w-xs mb-2" />
                    <br />
                    <input type="text" placeholder="Your Message" class="input input-bordered input-lg w-full max-w-xs mb-4" />
                </div>
                <div className='text-center'>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary align-middle">Submit</button>
                </div>
            </div>

        </section>
    );
};

export default Contact;