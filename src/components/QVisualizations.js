// src/components/QVisualizations.js
import React, { Component } from 'react';
import QVisualization from './QVisualization'
class QVisualizations extends Component {
    constructor(props) {
        super(props)
       
    }
   
    render() {
		
		const qVisualizations = this.props.qVisualizations.map(function(qVisualization){
			return(<QVisualization qVisualization={qVisualization} />);
					
			
			
		})
	
		
		
        return ( 
				 <table className="table table-hover">
				  <thead>
					<tr>
					  <th scope="col">Title</th>
					  <th scope="col">Description</th>
					  <th scope="col">Visualization Type</th>
					  <th scope="col">Details</th>
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