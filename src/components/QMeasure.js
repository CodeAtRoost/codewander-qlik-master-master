// src/components/QMeasures.js
import React, { Component } from 'react';
import axios from 'axios';
const qlik_server= process.env.REACT_APP_QLIK_SERVER_URL;

class QMeasure extends Component {
    constructor(props) {
        super(props)
       
    }
	
	
	getDetails(_id)
	{
		let self=this;
		//this.props.getMeasureDetails(_id)	
		axios.get(`${qlik_server}app/current/measuredetails/${_id}`)
        .then((res) => {
            let qMeasureDetails = res.data.msg;
			self.props.qMeasure.qMeasureDetails = qMeasureDetails;
			self.forceUpdate()
			//self.render()
        }).catch((err) => {
			console.log(err);
			//self.render();
			return {"error": "An error occurred"}
		
		
		})

	}
   
    render() {
		let self=this;
		self.getDetails(this.props.qMeasure.qInfo.qId)
		const qDetails=this.props.qMeasure.qMeasureDetails==null? "Fetching": this.props.qMeasure.qMeasureDetails.qMeasure.qDef;
		console.log(qDetails);
		return ( 
				
				<tr>
					  <th scope="row" >{this.props.qMeasure.qMeta.title}</th>
					  <td>{this.props.qMeasure.qMeta.description}</td>
					  <td>{qDetails}</td>
					  <td><button type="button" className="btn btn-outline-primary" onClick={(e) => self.getDetails(this.props.qMeasure.qInfo.qId)}>Details</button></td>	
					
				</tr>
				 
					

            
        );
    }
}


export default (QMeasure);