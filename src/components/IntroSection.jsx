import React, { Component } from 'react'
import profileImage from '../images/profile3.JPG';

export default class IntroSection extends Component {
  render() {
    return (
    <section class="intro-section">
		<div class="container">
			<div class="row">
				<div class="col-md-1 col-lg-2"></div>
				<div class="col-md-10 col-lg-8">
					<div class="intro">
						<div class="profile-img"><img src={profileImage} alt=""></img></div>
						<h2><b>Muhammad Waleed ur Rehman</b></h2>
						<h4 class="font-yellow">Software and Web Developer</h4>
						<ul class="information margin-tb-30">
							<li><b>BASED IN : </b>Bolton</li>
                            <li><b>BORN : </b>19 January 1994</li>
							<li><b>EMAIL : </b>hello@waleedrehman.co.uk</li>
							<li><b>MARITAL STATUS : </b>Engaged</li>
						</ul>
						<ul class="social-icons">
							<li><a target="_blank" href="https://www.linkedin.com/in/muhammad-waleed-ur-rehman/"><i class="ion-social-linkedin"></i></a></li>
							<li><a href="mailto:hello@waleedrehman.co.uk"><i class="ion-email"></i></a></li>
							<li><a href="http://waleedrehman.co.uk"><i class="ion-ios-world"></i></a></li>
							<li><a target="_blank" href="https://about.me/waleedrehman"><i class="ion-person"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
  }
}
