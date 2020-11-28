import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
    <header>
		<div class="container">
			<div class="heading-wrapper">
				<div class="row">
					<div class="col-sm-6 col-md-6 col-lg-4">
						<div class="info">
							<i class="icon ion-ios-location-outline"></i>
							<div class="right-area">
								<h5>19 Hudson Close</h5>
								<h5>Bolton,BL3 4FP</h5>
							</div>
						</div>
					</div>
					
					<div class="col-sm-6 col-md-6 col-lg-4">
						<div class="info">
							<i class="icon ion-ios-telephone-outline"></i>
							<div class="right-area">
								<h5>07474768989</h5>
								<h6>MON - FRI,10AM - 7PM</h6>
							</div>
						</div>
					</div>
					
					<div class="col-sm-6 col-md-6 col-lg-4">
						<div class="info">
							<i class="icon ion-ios-chatboxes-outline"></i>
							<div class="right-area">
								<h5>hello@waleedrehman.co.uk</h5>
								<h6>REPLY IN 24 HOURS</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<a class="downlad-btn" href="/CV.docx">Download CV</a>
		</div>
	</header>
    )
  }
}
