
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {createApp} from './../../redux/actions/actions'
const qlik_server= process.env.REACT_APP_QLIK_SERVER_URL;
const mapStateToProps = state => {
    return {
        qNewAppDetails: state.qApps.qNewAppDetails
    }
}
class UNewApp extends Component {
    constructor(props) {
        super(props)
		
       
    }
	
	validateAppName= (e) =>{
	let n = e.target.value;
	if (n.length==0) {
		this.setState({appNameValid:false})
		
	}
	else{
		this.setState({appNameValid:true})
	}
	this.setState({appName: n})
		
	}
	
	createApp = () =>{
		this.props.createApp(this.state.appName,"")
		
	}
	
	componentWillMount() {
       this.setState({appName:""});
		this.setState({appDescription:""});
		this.setState({appNameValid: false});
		//this.props.openApp('NSEE.qvf');
    }
   
    render() {
		let self=this;
		let message=""
		if (self.props.qNewAppDetails!=null && self.props.qNewAppDetails.qResponseStatus!=null ){
			//alert(self.props.qNewAppDetails.qAppId)
			if (self.props.qNewAppDetails.qResponseStatus=="success"){
			message=<div className="alert alert-dismissible alert-success">
						<button type="button" className="close" data-dismiss="alert">&times;</button>
						<strong>App Created.</strong> <span>App Id: {self.props.qNewAppDetails.qResponseMsg.qAppId}</span>.
					</div>
			}else if (self.props.qNewAppDetails.qResponseStatus=="error"){
			message=<div className="alert alert-dismissible alert-primary">
					  <button type="button" className="close" data-dismiss="alert">&times;</button>
					  <strong>App creation failed</strong> Try again later.
					</div>
			}
			self.props.qNewAppDetails.qRequest=null;
			self.props.qNewAppDetails.qResponseStatus=null;
			self.props.qNewAppDetails.qResponseMsg=null;
		}
		
		return ( 
				<div>
				<button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#newapp">New App</button>	
							
				<div className="modal" id="newapp">
				  <div className="modal-dialog" role="document">
					<div className="modal-content">
					  <div className="modal-header">
						<h5 className="modal-title">New App Details</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						  <span aria-hidden="true">&times;</span>
						</button>
					  </div>
					  <div className="modal-body">
					  {message}
						<div className="form-group" className={this.state.appNameValid? "has-success" : "has-danger"}>
						  <label className="form-control-label" >App Name</label>
						  <input type="text" value={this.state.appName} onChange= {this.validateAppName}className={this.state.appNameValid? "form-control is-valid" : "form-control is-invalid"} id="inputValid"/>
						  <div className={this.state.appNameValid? "valid-feedback": "invalid-feedback"}>{this.state.appNameValid? 'Valid' : 'Invalid'} App Name</div>
						</div>
					  </div>
					  <div className="modal-footer">
						<button type="button" className="btn btn-primary" disabled={!this.state.appNameValid} onClick={this.createApp}>Create App</button>
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
					  </div>
					</div>
				  </div>
				</div>
				</div>
				 
					

            
        );
    }
}


export default connect(mapStateToProps, { createApp })(UNewApp);