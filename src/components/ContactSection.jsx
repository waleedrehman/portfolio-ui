import React, { Component } from 'react'
import axios from 'axios';
import $ from 'jquery';

export default class ContactSection extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fields: {}
		}
	}

	shakeField = function(elementId) {
		var element = document.getElementById(elementId);
		element.classList.add('error'); 
            // remove the class after the animation completes
        setTimeout(function() {
			element.classList.remove('error');
		}, 900);
	}

	validateForm = function() {
		let fields = this.state.fields;
		let validation = true;
		if(!fields["name"]){
			validation = false;
			this.shakeField("contactName");
			this.shakeField("labelName");
		}
		if(!fields["email"]){
			validation = false;
			this.shakeField("contactEmail");
			this.shakeField("labelEmail");
		}
		if(!fields["subject"]){
			validation = false;
			this.shakeField("contactSubject");
			this.shakeField("labelSubject");
		}
		if(!fields["message"]){
			validation = false;
			this.shakeField("contactMessage");
			this.shakeField("labelMessage");
		}
		console.log(validation);
		return validation;
	}

	handleSubmit(e){
		e.preventDefault();
		//this.validateForm();
		if (this.validateForm()) {
			//submit to end point for emailing
			axios.get('https://portfolio-backend.waleedrehman.co.uk/sendEmail', {
      			params: {
					subject: this.state.fields["subject"],
					name: this.state.fields["name"],
					email: this.state.fields["email"],
					message: this.state.fields["message"],
				},
				mode: 'cors'
    		}).then(response => {
	  			console.log(response);
				if (response.status === 200) {
	  				alert("Message Sent."); 
				} else {
	  				alert("Message failed to send.")
				}
  			})
		}
	  }

  render() {
    return (
		<section id="contact" className="experience-section section">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="heading">
							<h3><b>Get In Touch</b></h3>
							<h6>
								<b>
									Use the form to get in touch <br />
									You can use this form to find out quotations regarding new website or design work on existing websites. <br />
									Get in touch regarding new roles. <br />
									I am always happy to help with any queries you might have
								</b>
							</h6>
						</div>
					</div>
					<div className="col-sm-8">
						<div className="experience margin-b-50">
							<form onSubmit={this.handleSubmit.bind(this)} method="post" id="contactForm" name="contactForm">
								<fieldset>
									<div>
										<label id="labelName" htmlFor="contactName">Name <span className="required">*</span></label>
										<input type="text" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} id="contactName" name="contactName"></input>
									</div>
									<div>
										<label id="labelEmail" htmlFor="contactEmail">Email <span className="required">*</span></label>
										<input type="text" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} id="contactEmail" name="contactEmail"></input>
									</div>
									<div>
										<label id="labelSubject" htmlFor="contactSubject">Subject <span className="required">*</span></label>
										<input type="text" onChange={this.handleChange.bind(this, "subject")} value={this.state.fields["subject"]} id="contactSubject" name="contactSubject"></input>
									</div>
									<div>
										<label id="labelMessage" htmlFor="contactMessage">Message <span className="required">*</span></label>
										<textarea cols="50" rows="15" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]}id="contactMessage" name="contactMessage"></textarea>
									</div>
									<div>
										<button type="submit" className="submit">Submit</button>
										<span id="image-loader">
                        					<img alt="" src="images/loader.gif" />
                     					</span>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
  }

  handleChange(field, e){         
	let fields = this.state.fields;
	fields[field] = e.target.value;        
	this.setState({fields});
  }

}
