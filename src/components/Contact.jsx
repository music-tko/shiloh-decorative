import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ib6n0pf', 'template_p4wjsbj', form.current, 'f_KZtxyPjhJa7Z_9-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return ( 
        <div className="contact-us">
            <div className="contact-text">
               <h1>Get A Quote</h1> 
               <p className='sub-text'><strong>Fill up the form and our team will get back to you within 24 hours.</strong></p>

               <div className="contact-details">
               <div className="phone"><a href="tel:+0843646468">Click To Call</a></div>
               <div className="email"><a href="mailto:alaba.adegbiji@gmail.com">Send Us An Email</a></div>
               <div className="address">Cnr Amsterdam Street, Gerdview, Germiston, 1401</div>
               </div>

               <div className="socials">
                    <div className="facebook"></div>
                    <div className="instagram"></div>
                    <div className="linkedin"></div>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" className='submit'/>
            </form>
        </div>
     );
}
 
export default Contact;