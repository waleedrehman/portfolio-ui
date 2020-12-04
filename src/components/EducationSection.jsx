import React, { Component } from 'react'
import axios from 'axios';

export default class EducationSection extends Component {
	constructor() {
		super()
		this.state = {
			result: []
		}
	}

	componentDidMount() {
		axios.get('https://portfolio-backend.waleedrehman.co.uk/getEducation/all')
		.then(responce => this.setState({result: responce.data}))
	}

  render() {
	const  educationList = this.state.result.map(function (education){
		  return (
			<div class="education margin-b-50">
				<h4><b>{education.courseTitle}</b></h4>
				<h5 class="font-yellow"><b>{education.institution}</b></h5>
				<h6 class="font-lite-black margin-t-10">{education.dateFromTo}</h6>
				<p class="margin-tb-30">{education.description}</p>
			</div>
		);
	});

    return (
		<section class="education-section section">
		<div class="container">
			<div class="row">
				<div class="col-sm-4">
					<div class="heading">
						<h3><b>Education</b></h3>
						<h6 class="font-lite-black"><b>ACADEMIC CAREER</b></h6>
					</div>
				</div>
				<div class="col-sm-8">
					<div class="education-wrapper">
						{educationList}
					</div>
				</div>
			</div>
		</div>
	</section>
    )
  }
}
