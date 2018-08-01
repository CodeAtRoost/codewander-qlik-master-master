import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getApps, openApp} from './../redux/actions/actions'

const mapStateToProps = state => {
    return {
        qApps: state.qApps.qApps
    }
}

class qEngine extends Component {
	constructor(props) {
        super(props)
        this.selectApp = this.selectApp.bind(this)
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
		//this.props.openApp('NSEE.qvf');
    }
	
	
    
    render() {
	if (this.props.qApps.length>0){
	var self=this;
	var selectedAppDetails=[];
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
						<div class="well">
							<h4>Description</h4>
							<p>{qApp.qMeta.description}</p>
						</div>
						  <div class="row">
							<div class="col-sm-4">
							  <div class="well">
								<h4>File Size</h4>
								<p>{qApp.qFileSize}</p> 
							  </div>
							</div>
							<div class="col-sm-4">
							  <div class="well">
								<h4>File Time</h4>
								<p>{fTime}</p> 
							  </div>
							</div>
							<div class="col-sm-4">
							  <div class="well">
								<h4>Last Reloaded</h4>
								<p>{qApp.qLastReloadTime}</p> 
							  </div>
							</div>
						 </div>
						 <div class="row">
							<div class="col-sm-9">
							  <div class="well">
								<h4>App Id</h4>
								<p>{qApp.qDocId}</p> 
							  </div>
							</div>
							<div class="col-sm-3">
							  <div class="well">
								<h4>Connected Users</h4>
								<p>{qApp.qConnectedUsers}</p> 
							  </div>
							</div>
							
						 </div>
				</div>
					
					
					
				}
                return <li className={qApp.isSelected==true?"list-group-item active":"list-group-item"}  id={qApp.qDocName} onClick={(e) => self.selectApp(qApp)}>
					{qApp.qDocName}
                </li>
			}
            )
	
		return ( 
			<div>
            <nav className="navbar navbar-inverse visible-xs">
			  <div className="container-fluid">
				<div className="navbar-header">
				  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>                        
				  </button>
				  <a className="navbar-brand" href="#">Apps</a>
				</div>
				<div className="collapse navbar-collapse" id="myNavbar">
				  <ul className="nav navbar-nav">
				  {qApps}
				  </ul>
				</div>
			  </div>
			</nav>

			<div className="container-fluid">
			  <div className="row content">
				<div className="col-sm-3 sidenav hidden-xs">
				  <h2>Apps</h2>
				  <ul className="nav nav-pills nav-stacked">
				  {qApps}
				  </ul><br></br>
				</div>
				{selectedAppDetails}
				</div>
			</div><br></br>
			 
			 
			
			
			
			</div>
        );
	}
	else{
		return null
	}
    }
}
export default connect(mapStateToProps, { getApps, openApp })(qEngine);
