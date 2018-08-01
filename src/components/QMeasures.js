// src/components/QMeasures.js
import React, { Component } from 'react';
class QMeasures extends Component {
    constructor(props) {
        super(props)
       
    }
   
    render() {
		
		const qMeasures = this.props.qMeasures.map(function(qMeasure){
			return <tr>
					  <th scope="row" >{qMeasure.qMeta.title}</th>
					  <td>{qMeasure.qMeta.description}</td>
					  <td><button type="button" class="btn btn-outline-primary">Details</button></td>
					</tr>
			
			
		})
	
		
		
        return ( 
				 <table class="table table-hover">
				  <thead>
					<tr>
					  <th scope="col">Title</th>
					  <th scope="col">Description</th>
					  <th scope="col">Action</th>
					</tr>
				  </thead>
				  <tbody>
				  {qMeasures}
				  </tbody>
				 </table>
					

            
        );
    }
}


export default (QMeasures);