import React, { Component } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './Utilities/ProgressProvider';

export default class AboutSection extends Component {
  render() {
    return (
    <section className="about-section section">
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="heading">
						<h3><b>About me</b></h3>
						<h6 className="font-lite-black"><b>PROFESSIONAL PATH</b></h6>
					</div>
				</div>
				<div className="col-sm-8">
					<p className="margin-b-50">FullStack Developer at Barclays working with technologies such as Java, React.js, Jest, Maven/Gradle, JavaScript MVC, JQuery and SASS. I have had previous commercial experience with C#, ASP.net, PL-SQL, Oracle Database, Oracle Apex Builder, SQL, HTML, CSS and JavaScript. I have also been working with database systems such as MySQL and T-SQL and have also been working with tools such as Jenkins, Bladelogic and AWS. I am always active and hungry for knowledge. I am a quick learner and I try to teach myself looking at examples available. I have experience with online tools to create websites such as inWeby, Interspire, Google Sites , BigCartel, Big Commerce and WordPress. I even have my own linux based server on which I am hosting a WordPress website for my client, www.ledhubuk.com. I have experience with SSL Security. In my free time I tend to improve my skills as a developer by going through online tutorials, kata solutions and play around with code/websites on my server.</p>
					
					<div className="row">
						<div className="col-sm-6 col-md-6 col-lg-3">
							<div className="radial-prog-area margin-b-30">
								<ProgressProvider valueStart={0} valueEnd={100}>
									{(value) => <CircularProgressbar text="HTML & CSS3" value={value} />}
								</ProgressProvider>
							</div>
						</div>
					
						<div className="col-sm-6 col-md-6 col-lg-3">
							<div className="radial-prog-area margin-b-30">
								<ProgressProvider valueStart={0} valueEnd={90}>
									{(value) => <CircularProgressbar text="Wordpress" value={value} />}
								</ProgressProvider>
							</div>
						</div>
						
						<div className="col-sm-6 col-md-6 col-lg-3">
							<div className="radial-prog-area margin-b-30">
								<ProgressProvider valueStart={0} valueEnd={80}>
									{(value) => <CircularProgressbar text="JAVASCRIPT" value={value} />}
								</ProgressProvider>
							</div>
						</div>
						
						<div className="col-sm-6 col-md-6 col-lg-3">
							<div className="radial-prog-area margin-b-50">
								<ProgressProvider valueStart={0} valueEnd={70}>
									{(value) => <CircularProgressbar text="JQUERY" value={value} />}
								</ProgressProvider>
							</div>
						</div>
                        
                        <div className="col-sm-6 col-md-6 col-lg-3">
							<div className="radial-prog-area margin-b-50">
								<ProgressProvider valueStart={0} valueEnd={70}>
									{(value) => <CircularProgressbar text="PHOTOSHOP" value={value} />}
								</ProgressProvider>
							</div>
						</div>
                        
                        <div className="col-sm-6 col-md-6 col-lg-3">
							<div className="radial-prog-area margin-b-50">
								<ProgressProvider valueStart={0} valueEnd={70}>
									{(value) => <CircularProgressbar text="ASP.net" value={value} />}
								</ProgressProvider>
							</div>
						</div>
                        
                        <div className="col-sm-6 col-md-6 col-lg-3">
							<div className="radial-prog-area margin-b-50">
								<ProgressProvider valueStart={0} valueEnd={70}>
									{(value) => <CircularProgressbar text="C#" value={value} />}
								</ProgressProvider>
							</div>
						</div>

						<div className="col-sm-6 col-md-6 col-lg-3">
							<div className="radial-prog-area margin-b-50">
								<ProgressProvider valueStart={0} valueEnd={70}>
									{(value) => <CircularProgressbar text="JAVA" value={value} />}
								</ProgressProvider>
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
