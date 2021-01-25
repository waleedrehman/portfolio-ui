import React, { Component } from 'react'
import profileImage from '../images/Waleed Memoji Laptop White.fw.png';

export default class IntroSection extends Component {
  render() {
    return (
    <section className="intro-section">
		<div className="container">
			<div className="row">
				<div className="col-md-1 col-lg-2"></div>
				<div className="col-md-10 col-lg-8">
					<div className="intro">
						<div className="profile-img"><img src={profileImage} alt=""></img></div>
						<h2><b>Muhammad Waleed ur Rehman</b></h2>
						<h4 className="font-yellow">Software and Web Developer</h4>
						<ul className="information margin-tb-30">
							<li><b>BASED IN : </b>Bolton</li>
                            <li><b>BORN : </b>19 January 1994</li>
							<li><b>EMAIL : </b>hello@waleedrehman.co.uk</li>
							<li><b>MARITAL STATUS : </b>Engaged</li>
						</ul>
						<ul className="social-icons">
							<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/muhammad-waleed-ur-rehman/"><i className="ion-social-linkedin"></i></a></li>
							<li><a href="mailto:hello@waleedrehman.co.uk"><i className="ion-email"></i></a></li>
							<li><a href="http://waleedrehman.co.uk"><i className="ion-ios-world"></i></a></li>
							<li><a target="_blank" rel="noreferrer" href="https://about.me/waleedrehman"><i className="ion-person"></i></a></li>
							<li><a target="_blank" rel="noreferrer" href="https://github.com/waleedrehman/"><i className="ion-social-github"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
  }
}
