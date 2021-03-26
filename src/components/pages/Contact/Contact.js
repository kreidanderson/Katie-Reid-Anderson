
import React from "react";
import "./style.css";


const Contact= () => {

  return (
<div className="">
<div className="container">
	<form>
    <label for="username">
				<i className="far fa-user"></i>Your Name
			</label>
		<div className="field" tabindex="1">
			<input name="username" type="text" placeholder="Full Name" required/>
		</div>
        <label for="email">
				<i className="far fa-envelope"></i>Your Email
			</label>
		<div className="field" tabindex="2">
			<input name="email" type="text" placeholder="email@domain.com" required/>
		</div>
        <label for="message">
				<i className="far fa-edit"></i>Your Message
			</label>
		<div className="field" tabindex="3">
			<textarea name="message" placeholder="Message" required></textarea>
		</div>
		<button type="reset">Send Me Message</button>
		<div className="social-media">
			<span>
				Get In Touch<i className="fas fa-long-arrow-alt-right"></i>
			</span>
		</div>
	</form>
</div>
</div>

  );
};



export default Contact;
