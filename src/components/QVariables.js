// src/components/QVariables.js
import React, { Component } from 'react';
class QVariables extends Component {
    constructor(props) {
        super(props)
       
    }
   
    render() {
		
		const qVariables = this.props.qVariables.map(function(qVariable){
			return <tr>
					  <th scope="row" >{qVariable.qName}</th>
					  <td>{qVariable.qDefinition}</td>
					  <td><button type="button" class="btn btn-outline-primary">Details</button></td>
					</tr>
			
			
		})
	
		
		
        return ( 
				 <table className="table table-hover">
				  <thead>
					<tr>
					  <th scope="col">Name</th>
					  <th scope="col">Definition</th>
					  <th scope="col">Action</th>
					</tr>
				  </thead>
				  <tbody>
				  {qVariables}
				  </tbody>
				 </table>
					

            
        );
    }
}


export default (QVariables);