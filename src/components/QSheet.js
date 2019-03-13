import React, { Component } from 'react';
import axios from 'axios';

const qlik_server= process.env.REACT_APP_QLIK_SERVER_URL;


class QSheet extends Component {
    constructor(props) {
        super(props)       
    }
	
	
	getDetails(_id)
	{
		let self=this;
		//this.props.getMeasureDetails(_id)	
		axios.get(`${qlik_server}app/current/objectdetails/${_id}`)
        .then((res) => {
            let qSheetDetails = res.data.msg;
			self.props.qSheet.qSheetDetails = qSheetDetails;
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
		self.getDetails(this.props.qSheet.qInfo.qId)
		const qDetails=this.props.qSheet.qSheetDetails==null? "Fetching": this.props.qSheet.qSheetDetails.cells.length + " visual components";
		return ( 
				
				<tr>
					  <th scope="row" >{this.props.qSheet.qMeta.title}</th>
					  <td>{this.props.qSheet.qMeta.description}</td>
					  <td>{qDetails}</td>
					  <td><button type="button" className="btn btn-outline-primary" onClick={(e) => self.getDetails(this.props.qSheet.qInfo.qId)}>Details</button></td>	
					
				</tr>
				 
					

            
        );
    }
}


export default (QSheet);