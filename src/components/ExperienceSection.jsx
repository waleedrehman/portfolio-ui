import React, { Component } from 'react'
import axios from 'axios';

export default class ExperienceSection extends Component {

	constructor() {
		super()
		this.state = {
			result: []
		}
	}

	componentDidMount() {
		axios.get('https://portfolio-backend.waleedrehman.co.uk/getEmployment/all')
		.then(responce => this.setState({result: responce.data}))
	}
  render() {
	const  employmentList = this.state.result.map(function (employment){
		return (
			<div class="experience margin-b-50">
				<h4><b>{employment.jobTitle}</b></h4>
				<h5 class="font-yellow"><b>{employment.company}</b></h5>
				<h6 class="margin-t-10">{employment.dateFromTo}</h6>
				<p class="font-semi-white margin-tb-30">{employment.description} </p>
			</div>
	  	);
  	});  
    return (
		<section class="experience-section section">
		<div class="container">
			<div class="row">
				<div class="col-sm-4">
					<div class="heading">
						<h3><b>Work Experience</b></h3>
						<h6 class="font-lite-black"><b>PREVIOUS JOBS</b></h6>
					</div>
				</div>
				<div class="col-sm-8">
					{employmentList}
				</div>
			</div>
		</div>
		
	</section>
    )
  }
}
