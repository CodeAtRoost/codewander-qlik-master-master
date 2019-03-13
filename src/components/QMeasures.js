// src/components/QMeasures.js
import React, { Component } from 'react';
import QMeasure from './QMeasure'

class QMeasures extends Component {
    constructor(props) {
        super(props)
       
    }
	
	
	
    render() {
		let self=this;
		
		const qMeasures = this.props.qMeasures.map(function(qMeasure){
			return (<QMeasure ref={qMeasure.qInfo.qId} qMeasure={qMeasure} />);
								
		})
		
		const qMeasureDetails = JSON.stringify(this.props.qMeasureDetails);
	    return ( 
		
				<div className="row">
				<div className="col-lg-12">
				 <table className="table table-hover">
				  <thead>
					<tr>
					  <th scope="col">Title</th>
					  <th scope="col">Description</th>
					  <th scope="col">Details</th>
					  <th scope="col">Actions</th>
					</tr>
				  </thead>
				  <tbody>
				  {qMeasures}
				  </tbody>
				 </table>
				 </div>				 
				 </div>
				 
					

            
        );
    }
}


export default  (QMeasures);