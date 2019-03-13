import React, { Component } from 'react';
import axios from 'axios';
const qlik_server= process.env.REACT_APP_QLIK_SERVER_URL;

class QVisualization extends Component {
    constructor(props) {
        super(props)       
    }
	
	
	getDetails(_id)
	{
		let self=this;
		//this.props.getMeasureDetails(_id)	
		axios.get(`${qlik_server}app/current/objectdetails/${_id}`)
        .then((res) => {
            let qVisualizationDetails = res.data.msg;
			self.props.qVisualization.qVisualizationDetails = qVisualizationDetails;
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
		self.getDetails(this.props.qVisualization.qInfo.qId)
		const qDetails=this.props.qVisualization.qVisualizationDetails==null? "Fetching": "# of Dimensions: "+ this.props.qVisualization.qVisualizationDetails.qHyperCube.qDimensionInfo.length + "and # of Measures: " + this.props.qVisualization.qVisualizationDetails.qHyperCube.qMeasureInfo.length;
		return ( 
				<tr>
					  <th scope="row" >{this.props.qVisualization.qMeta.title}</th>
					  <td>{this.props.qVisualization.qMeta.description}</td>
					  <td>{this.props.qVisualization.qData.visualization}</td>
					  <td>{qDetails}</td>
					  <td><button type="button" class="btn btn-outline-primary">Details</button></td>
				</tr>
				
				 
					

            
        );
    }
}


export default (QVisualization);