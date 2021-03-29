
import React from "react";
import "./style.css";
import "./messageform.php"


const Contact= () => {

  return (
<div class="contactcontainer">  

  <form id="contact" action="messageform.php" method="post">
      <h3>CONTACT</h3>
<a href="mailto:kreidanderson@gmail.com">kreidanderson@gmail.com</a>

  </form>

</div>

  );
};



export default Contact;


{/* <div class="contactcontainer">  
  <form id="contact" action="messageform.php" method="post">
    <h3>Let's Chat</h3>
    <h4>Get in touch re: web dev, art, or just to say hi.</h4>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>

      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>

      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>

  </form>

</div> */}