// src/components/QVisualizations.js
import React, { Component } from 'react';
class QVisualizations extends Component {
    constructor(props) {
        super(props)
       
    }
   
    render() {
		
		const qVisualizations = this.props.qVisualizations.map(function(qVisualization){
			return <tr>
					  <th scope="row" >{qVisualization.qMeta.title}</th>
					  <td>{qVisualization.qMeta.description}</td>
					  <td>{qVisualization.qData.visualization}</td>
					  <td><button type="button" class="btn btn-outline-primary">Details</button></td>
					</tr>
			
			
		})
	
		
		
        return ( 
				 <table className="table table-hover">
				  <thead>
					<tr>
					  <th scope="col">Title</th>
					  <th scope="col">Description</th>
					  <th scope="col">Visualization Type</th>
					  <th scope="col">Action</th>
					</tr>
				  </thead>
				  <tbody>
				  {qVisualizations}
				  </tbody>
				 </table>
					

            
        );
    }
}


export default (QVisualizations);