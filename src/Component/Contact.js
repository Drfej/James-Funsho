import React from 'react'
import emailjs from 'emailjs-com';

import "./Contact.css"

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v9arvjm', 'template_u11i98l', e.target, 'jNCRXxN7rA97sBEv3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }).then(
          _message => alert('Message sent successfully. Kindly wait for Mr James reply')
      );

      e.target.reset()

  };


  return (
    <section>
      <div className='container'>
          <form onSubmit={sendEmail}>
            <h2>Contact me</h2>
            <h3>I am always available...</h3>

            <div className='row100'>
              <div className='col-1'>
                <div className='inputbox'>
                <input type='text' id='name' placeholder='' name='name' required />
                <span className='text'>Full Name</span>
                <span className='line'></span>
                </div>
              </div>
            </div>

            <div className='row100'>
              <div className='col-1'>
                <div className='inputbox'>
                <input type='email' id='email' placeholder='' name='email' required />
                <span className='text'>Email</span>
                <span className='line'></span>
                </div>
              </div>
            </div>

            <div className='row100'>
              <div className='col-1'>
                <div className='inputbox'>
                <input type='text' id='phone' placeholder='' name='phone' required />
                <span className='text'>Mobile</span>
                <span className='line'></span>
                </div>
              </div>
            </div>
            
            <div className='row100'>
              <div className='col-1'>
                <div className='inputbox textarea'>
                <textarea id='message' placeholder='' name='message' required />
                <span className='text'>Kindly leave me a message</span>
                <span className='line'></span>
                </div>
              </div>
            </div>

            <div className='row100 btn'>
              <div className='col-1'>
                <button type='submit'>Send</button>
              </div>
            </div>
            
          </form>
      </div>
    </section>
  )
}

export default Contact
