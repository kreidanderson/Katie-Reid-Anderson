
import React from "react";
import "./style.css";


const Contact= () => {

  return (
<div class="contactcontainer">  
  <form id="contact" action="" method="post">
    <h3>Let's Chat</h3>
    <h4>Get in touch re: web dev, art, or just to say hi.</h4>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
<a><h5>kreidanderson@gmail.com</h5></a>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>

      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>

      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>

  </form>
</div>

  );
};



export default Contact;
