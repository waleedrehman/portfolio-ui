import React, { Component } from 'react'
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

export default class ExperienceSection extends Component {

	constructor() {
		super()
		this.state = {
			result: []
		}
	}

	componentDidMount() {
		axios.get('https://portfolio-backend.waleedrehman.co.uk/getEmployment/all')
		.then(response => this.setState({result: response.data}))
	}
  render() {
	const  employmentList = this.state.result.map(function (employment){
		return (
			<div key={employment.id} className="experience margin-b-50">
				<h4><b>{employment.jobTitle}</b></h4>
				<h5 className="font-yellow"><b>{employment.company}</b></h5>
				<h6 className="margin-t-10">{employment.dateFromTo}</h6>
				<p className="font-semi-white margin-tb-30">{ ReactHtmlParser(employment.description)} </p>
			</div>
	  	);
  	});  
    return (
		<section className="experience-section section">
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="heading">
						<h3><b>Work Experience</b></h3>
						<h6 className="font-lite-black"><b>PREVIOUS JOBS</b></h6>
					</div>
				</div>
				<div className="col-sm-8">
					{employmentList}
				</div>
			</div>
		</div>
		
	</section>
    )
  }
}
