import React, { Component } from 'react'

export default class ContactSection extends Component {
  render() {
    return (
		<section id="contact" class="experience-section section">
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<div class="heading">
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
					<div class="col-sm-8">
						<div class="experience margin-b-50">
							<form action="email.php" onSubmit="return validateForm();" method="post" id="contactForm" name="contactForm">
								<fieldset>
									<div>
										<label for="contactName">Name <span class="required">*</span></label>
										<input type="text" defaultValue="" size="35" id="contactName" name="contactName"></input>
									</div>
									<div>
										<label for="contactEmail">Email <span class="required">*</span></label>
										<input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail"></input>
									</div>
									<div>
										<label for="contactSubject">Subject <span class="required">*</span></label>
										<input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject"></input>
									</div>
									<div>
										<label for="contactMessage">Message <span class="required">*</span></label>
										<textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
									</div>
									<div>
										<button type="submit" class="submit">Submit</button>
										<span id="image-loader">
                        					<img alt="" src="images/loader.gif" />
                     					</span>
									</div>
								</fieldset>
							</form>
							<div id="message-warning"> Error boy</div>
							<div id="message-success">
                  				<i class="fa fa-check"></i>Your message was sent, thank you!<br />
				   			</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
  }
}
