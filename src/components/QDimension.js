import React, { Component } from 'react';
import axios from 'axios';
const qlik_server= process.env.REACT_APP_QLIK_SERVER_URL;

class QDimension extends Component {
    constructor(props) {
        super(props)       
    }
	
	
	getDetails(_id)
	{
		let self=this;
		//this.props.getMeasureDetails(_id)	
		axios.get(`${qlik_server}app/current/dimensiondetails/${_id}`)
        .then((res) => {
            let qDimensionDetails = res.data.msg;
			self.props.qDimension.qDimensionDetails = qDimensionDetails;
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
		self.getDetails(this.props.qDimension.qInfo.qId)
		const qDetails=this.props.qDimension.qDimensionDetails==null? "Fetching": this.props.qDimension.qDimensionDetails.expr;
		return ( 
				
				<tr>
					  <th scope="row" >{this.props.qDimension.qMeta.title}</th>
					  <td>{this.props.qDimension.qMeta.description}</td>
					  <td>{qDetails}</td>
					  <td><button type="button" className="btn btn-outline-primary" onClick={(e) => self.getDetails(this.props.qDimension.qInfo.qId)}>Details</button></td>	
					
				</tr>
				 
					

            
        );
    }
}


export default (QDimension);