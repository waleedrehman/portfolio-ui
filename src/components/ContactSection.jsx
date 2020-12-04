import React, { Component } from 'react'
import axios from 'axios';
import $ from 'jquery';

export default class ContactSection extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fields: {},
			errors: {}
		}
	}

	validateForm = function() {
		let fields = this.state.fields;
		let errors = {};
		let validation = true;
		if(!fields["name"]){
			validation = false;
			errors["name"] = "Name is required";
		}
		if(!fields["email"]){
			validation = false;
			errors["email"] = "Email is required";
		}
		if(!fields["subject"]){
			validation = false;
			errors["subject"] = "Subject is required";
		}
		if(!fields["message"]){
			validation = false;
			errors["message"] = "Message is required";
		}
		console.log(validation);
		this.setState({errors: errors});
		return validation;
	}

	handleSubmit(e){
		e.preventDefault();
		//this.validateForm();
		if (this.validateForm()) {
			//submit to end point for emailing
			/*
		axios({
		  method: "POST", 
		  url:"??", 
		  data:  this.state
		}).then((response)=>{
		  if (response.data.status === 'success') {
			alert("Message Sent."); 
			this.resetForm()
		  } else if (response.data.status === 'fail') {
			alert("Message failed to send.")
		  }
		}) */
		}
		else {
			alert("validation failed");
		}
		
		console.log("hitting the submit, need to validate and create end point for sending email");
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
							<form onSubmit={this.handleSubmit.bind(this)} method="POST" method="post" id="contactForm" name="contactForm">
								<fieldset>
									<div>
										<label htmlFor="contactName">Name <span className="required">*</span></label>
										<input type="text" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} size="35" id="contactName" name="contactName"></input>
										<span style={{color: "red"}}>{this.state.errors["name"]}</span>
									</div>
									<div>
										<label htmlFor="contactEmail">Email <span className="required">*</span></label>
										<input type="text" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} size="35" id="contactEmail" name="contactEmail"></input>
										<span style={{color: "red"}}>{this.state.errors["email"]}</span>
									</div>
									<div>
										<label htmlFor="contactSubject">Subject <span className="required">*</span></label>
										<input type="text" onChange={this.handleChange.bind(this, "subject")} value={this.state.fields["subject"]} size="35" id="contactSubject" name="contactSubject"></input>
										<span style={{color: "red"}}>{this.state.errors["subject"]}</span>
									</div>
									<div>
										<label htmlFor="contactMessage">Message <span className="required">*</span></label>
										<textarea cols="50" rows="15" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]}id="contactMessage" name="contactMessage"></textarea>
										<span style={{color: "red"}}>{this.state.errors["message"]}</span>
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
