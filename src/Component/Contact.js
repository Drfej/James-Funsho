import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com';

import "./Contact.css"

const Contact = () => {

  const [formvalue, setFormvalue] = useState({name:'', email:'', message:''});
  const [formerror, setFormerror] = useState({});
  const [issubmit, setSubmit] = useState(false);


  const handlevalidation =(e) =>{
    const {name, value}= e.target;
    setFormvalue({...formvalue, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormerror(validationform(formvalue))
    setSubmit(true);

  };


  const validationform = (value) => {
    const errors = {};
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(!value.name){
      errors.name="Please enter your name"
    }

    if(!value.email){
      errors.email="Please enter email"
    } else if(!emailPattern.test(value.email))
    {
      errors.email= "Enter valid email"
    }

    if(!value.message){
      errors.message="Please enter your message"
    }

    return errors;
  };

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


  useEffect(  ()=>{

    if(Object.keys(formerror).length===0 && issubmit){

        console.log(formvalue);

    }
  },[formerror, formvalue, issubmit]);



  return (
    <section>
      <div className='container'>
          <form onSubmit={(e) => {handleSubmit(e); sendEmail(e);}}>
            <h2>Contact Me</h2>
            <h3>I am always available...</h3>

            <div className='row100'>
              <div className='col-1'>
                <div className='inputbox'>
                <input type='text' id='name' placeholder='' name='name' required value={ formvalue.name } onChange={ handlevalidation }/>
                <span className='text'>Full Name</span>
                <span className='line'></span>
                <span className='text-error'>{ formerror.name } </span>
                </div>
              </div>
            </div>

            <div className='row100'>
              <div className='col-1'>
                <div className='inputbox'>
                <input type='email' id='email' placeholder='' name='email' required value={ formvalue.email } onChange={ handlevalidation }/>
                <span className='text'>Email</span>
                <span className='line'></span>
                <span className='text-error'>{ formerror.email } </span>
                </div>
              </div>
            </div>

            <div className='row100'>
              <div className='col-1'>
                <div className='inputbox'>
                <input type='text' id='phone' placeholder='' name='phone' required/>
                <span className='text'>Mobile</span>
                <span className='line'></span>
                </div>
              </div>
            </div>
            
            <div className='row100'>
              <div className='col-1'>
                <div className='inputbox textarea'>
                <textarea id='message' placeholder='' name='message' required value={ formvalue.message } onChange={ handlevalidation }/>
                <span className='text'>Kindly leave me a message</span>
                <span className='line'></span>
                <span className='text-error'>{ formerror.message } </span>
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
