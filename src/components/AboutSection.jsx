import React, { Component } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class AboutSection extends Component {
  render() {
    return (
    <section class="about-section section">
		<div class="container">
			<div class="row">
				<div class="col-sm-4">
					<div class="heading">
						<h3><b>About me</b></h3>
						<h6 class="font-lite-black"><b>PROFESSIONAL PATH</b></h6>
					</div>
				</div>
				<div class="col-sm-8">
					<p class="margin-b-50">FullStack Developer at Barclays working with technologies such as Java, React.js, Jest, Maven/Gradle, JavaScript MVC, JQuery and SASS. I have had previous commercial experience with C#, ASP.net, PL-SQL, Oracle Database, Oracle Apex Builder, SQL, HTML, CSS and JavaScript. I have also been working with database systems such as MySQL and T-SQL and have also been working with tools such as Jenkins, Bladelogic and AWS. I am always active and hungry for knowledge. I am a quick learner and I try to teach myself looking at examples available. I have experience with online tools to create websites such as inWeby, Interspire, Google Sites , BigCartel, Big Commerce and WordPress. I even have my own linux based server on which I am hosting a WordPress website for my client, www.ledhubuk.com. I have experience with SSL Security. In my free time I tend to improve my skills as a developer by going through online tutorials, kata solutions and play around with code/websites on my server.</p>
					
					<div class="row">
						<div class="col-sm-6 col-md-6 col-lg-3">
							<div class="radial-prog-area margin-b-30">
								<CircularProgressbar value={100} text="HTML & CSS3" />
							</div>
						</div>
					
						<div class="col-sm-6 col-md-6 col-lg-3">
							<div class="radial-prog-area margin-b-30">
								<CircularProgressbar value={90} text="Wordpress" />
							</div>
						</div>
						
						<div class="col-sm-6 col-md-6 col-lg-3">
							<div class="radial-prog-area margin-b-30">
								<CircularProgressbar value={80} text="JAVASCRIPT" />
							</div>
						</div>
						
						<div class="col-sm-6 col-md-6 col-lg-3">
							<div class="radial-prog-area margin-b-50">
								<CircularProgressbar value={70} text="JQUERY" />
							</div>
						</div>
                        
                        <div class="col-sm-6 col-md-6 col-lg-3">
							<div class="radial-prog-area margin-b-50">
								<CircularProgressbar value={70} text="PHOTOSHOP" />
							</div>
						</div>
                        
                        <div class="col-sm-6 col-md-6 col-lg-3">
							<div class="radial-prog-area margin-b-50">
								<CircularProgressbar value={70} text="ASP.net" />
							</div>
						</div>
                        
                        <div class="col-sm-6 col-md-6 col-lg-3">
							<div class="radial-prog-area margin-b-50">
								<CircularProgressbar value={70} text="C#" />
							</div>
						</div>

						<div class="col-sm-6 col-md-6 col-lg-3">
							<div class="radial-prog-area margin-b-50">
								<CircularProgressbar value={70} text="JAVA" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
  }
}
