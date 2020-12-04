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
			<div key={education.id} className="education margin-b-50">
				<h4><b>{education.courseTitle}</b></h4>
				<h5 className="font-yellow"><b>{education.institution}</b></h5>
				<h6 className="font-lite-black margin-t-10">{education.dateFromTo}</h6>
				<p className="margin-tb-30">{education.description}</p>
			</div>
		);
	});

    return (
		<section className="education-section section">
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="heading">
						<h3><b>Education</b></h3>
						<h6 className="font-lite-black"><b>ACADEMIC CAREER</b></h6>
					</div>
				</div>
				<div className="col-sm-8">
					<div className="education-wrapper">
						{educationList}
					</div>
				</div>
			</div>
		</div>
	</section>
    )
  }
}
