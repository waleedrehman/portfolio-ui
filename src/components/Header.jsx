import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
    <header>
		<div className="container">
			<div className="heading-wrapper">
				<div className="row">
					<div className="col-sm-6 col-md-6 col-lg-4">
						<div className="info">
							<i className="icon ion-ios-location-outline"></i>
							<div className="right-area">
								<h5>19 Hudson Close</h5>
								<h5>Bolton,BL3 4FP</h5>
							</div>
						</div>
					</div>
					
					<div className="col-sm-6 col-md-6 col-lg-4">
						<div className="info">
							<i className="icon ion-ios-telephone-outline"></i>
							<div className="right-area">
								<h5>07474768989</h5>
								<h6>MON - FRI,10AM - 7PM</h6>
							</div>
						</div>
					</div>
					
					<div className="col-sm-6 col-md-6 col-lg-4">
						<div className="info">
							<i className="icon ion-ios-chatboxes-outline"></i>
							<div className="right-area">
								<h5>hello@waleedrehman.co.uk</h5>
								<h6>REPLY IN 24 HOURS</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<a className="downlad-btn" href="/CV.docx">Download CV</a>
		</div>
	</header>
    )
  }
}
