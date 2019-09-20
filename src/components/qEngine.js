import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getApps, openApp} from './../redux/actions/actions'
import QOpenAppButton from './QOpenAppButton'
import UNewApp from './modal/UNewApp'
const mapStateToProps = state => {
    return {
        qApps: state.qApps.qApps
    }
}

class qEngine extends Component {
	constructor(props) {
        super(props)
		
        //this.newAppModal= false
		this.selectApp = this.selectApp.bind(this)
		//this.createApp = this.createApp.bind(this)
    }
	
	
	
	getAppNameandDesc(){
		this.setState({newAppModal:true});
		
		
	}
	
	selectApp(qApp_selected){
		//this.props.openApp(_id);	
		 this.props.qApps.map(function(qApp){
			 if (qApp===qApp_selected) qApp.isSelected=true 
			 else qApp.isSelected=false
		 })
		 
		 this.setState(this.props.qApps)
		
		
	}
	
    componentWillReceiveProps(nextProps) {
		
        
    }
        
    componentWillMount() {
        this.props.getApps()
		this.setState()
		
		//this.props.openApp('NSEE.qvf');
    }
	
	
    
    render() {
	if (this.props.qApps.length>0){
	var self=this;
	var newAppModalForm = ""
	
	var selectedAppDetails=[];
	//alert (this.state.newAppModal)
     
	const qApps = this.props.qApps.map(function(qApp){
				//qApp.isSelected=false				
				if (qApp.isSelected){
					
				var time = qApp.qFileTime
					if (time < 0)
					time = 0;
				  var hrs = ~~(time / 3600 % 24),
					mins = ~~((time % 3600) / 60),
					timeType = (hrs > 11 ? "PM" : "AM");
				  if (hrs > 12)
					hrs = hrs - 12;
				  if (hrs == 0)
					hrs = 12;
				var fTime=hrs + ":" + mins + " " + timeType;
				
				
				selectedAppDetails=	
				<div className="col-sm-9">
				<h2>Details</h2>
						<div className="well">
							<h4>Description</h4>
							<p>{qApp.qMeta.description}</p>
						</div>
						  <div className="row">
							<div className="col-sm-4">
							  <div className="well">
								<h4>File Size</h4>
								<p>{qApp.qFileSize}</p> 
							  </div>
							</div>
							<div className="col-sm-4">
							  <div className="well">
								<h4>File Time</h4>
								<p>{fTime}</p> 
							  </div>
							</div>
							<div className="col-sm-4">
							  <div className="well">
								<h4>Last Reloaded</h4>
								<p>{qApp.qLastReloadTime}</p> 
							  </div>
							</div>
						 </div>
						 <div className="row">
							<div className="col-sm-9">
							  <div className="well">
								<h4>App Id</h4>
								<p>{qApp.qDocId}</p> 
							  </div>
							</div>
							<div className="col-sm-3">
							  <div className="well">
								<h4>Connected Users</h4>
								<p>{qApp.qConnectedUsers}</p> 
							  </div>
							</div>
							<div className="pul-right">
							<QOpenAppButton _appid={qApp.qDocName}/>
							</div>
							
							
						 </div>
				</div>
					
				return 	<li className="list-group-item d-flex justify-content-between align-items-center active" onClick={(e) => self.selectApp(qApp)} >
					{qApp.qDocName} 
					</li>
					
				}
				
				
                return <li className="list-group-item d-flex justify-content-between align-items-center" onClick={(e) => self.selectApp(qApp)} >
					{qApp.qDocName} 
					</li>
					
			}
            )
	
		const dd= {position:'absolute', top: '0px', left: '0px', transform: 'translate3d(0px, 38px, 0px)'};
		return ( 
			
				 <div className="container-fluid " >
				 
					  <div className="row content " >
						<div className="col-sm-3 ">
						  <h2>Apps </h2>
						  <UNewApp/>
						  <ul className="list-group  vertical-scroll" >
						  {qApps}
						  </ul><br></br>
						</div>
						{selectedAppDetails}
						</div>						
				  </div>

			
			 
			
			
			
			
        );
	}
	else{
		return null
	}
    }
}
export default connect(mapStateToProps, { getApps, openApp })(qEngine);
