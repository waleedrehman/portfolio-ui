import React, { Component } from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from './Utilities/AnimatedProgressProvider';
import TrackVisibility from 'react-on-screen';
import { easeQuadInOut } from 'd3-ease';

export default class AboutSection extends Component {

	constructor() {
		super()
		this.state = {
			skills: [
				{
					Name: 'HTML & CSS3',
					Value: 100
				},
				{
					Name: 'Wordpress',
					Value: 90
				},
				{
					Name: 'JAVASCRIPT',
					Value: 80
				},
				{
					Name: 'JQUERY',
					Value: 70
				},
				{
					Name: 'PHOTOSHOP',
					Value: 70
				},
				{
					Name: 'ASP.net',
					Value: 70
				},
				{
					Name: 'C#',
					Value: 70
				},
				{
					Name: 'JAVA',
					Value: 70
				}
			]
		}
	}
  render() {
	const skillsList = this.state.skills.map(function (skill){
		return (
			<div key={skill.Name} className="col-sm-6 col-md-6 col-lg-3">
				<div className="radial-prog-area margin-b-30">
					<TrackVisibility partialVisibility once>
            			{({ isVisible }) => isVisible && 
							<AnimatedProgressProvider valueStart={0} valueEnd={skill.Value} duration={1.2} easingFunction={easeQuadInOut} >
								{(value) => {
    								const roundedValue = Math.round(value);
    								return (
										<CircularProgressbarWithChildren value={value} >
											<div className="CircularProgressWithChildren">
    											<stong>{skill.Name}</stong>
  											</div>
										  	<div className="CircularProgressWithChildren">
											  <stong>{roundedValue + '%'}</stong>
											</div>
										</CircularProgressbarWithChildren>
    								);
  								}}
							</AnimatedProgressProvider>}
        			</TrackVisibility>
				</div>
			</div>
	  	);
	});
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
					<p className="margin-b-50">Java developer at DWP/BPDTS. Ex FullStack Developer at Barclays working with technologies such as Java, React.js, Jest, Maven/Gradle, JavaScript MVC, JQuery and SASS. I have had previous commercial experience with C#, ASP.net, PL-SQL, Oracle Database, Oracle Apex Builder, SQL, HTML, CSS and JavaScript. I have also been working with database systems such as MySQL and T-SQL and have also been working with tools such as Jenkins, Bladelogic and AWS. I am always active and hungry for knowledge. I am a quick learner and I try to teach myself looking at examples available. I have experience with online tools to create websites such as inWeby, Interspire, Google Sites , BigCartel, Big Commerce and WordPress. I even have my own linux based server on which I am hosting a WordPress website for my client, www.ledhubuk.com. I have experience with SSL Security. In my free time I tend to improve my skills as a developer by going through online tutorials, kata solutions and play around with code/websites on my server.</p>
					
					<div className="row">
						{skillsList}
					</div>
				</div>
			</div>
		</div>
	</section>
    )
  }
}
