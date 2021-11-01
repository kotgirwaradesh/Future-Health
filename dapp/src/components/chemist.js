import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import web3 from '.././web3';
import contract from '.././contract';

class Chemist extends Component {
	state = {
		current : 0,
		makepdv : 0,
		gmedpacn : 0,
		gmedmed : '',
		pid : 0,
		did : 0,
		date : '',
		med : '',
		amt :0
	};
	render() {
		  return (
				<div id="sidebar">

				<div className="sidenav">
				  <center><h4>Chemist</h4></center>
				  <br></br>
				  <center><h6><button onClick={() => {
				  	this.setState({current : 1});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Check Treament Details</button></h6></center>

				<center><h6><button onClick={() => {
				  	this.setState({current : 2});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Upload Bill</button></h6></center>

				  


				</div>


				

				{
					(this.state.current==1)
					?    (<form id="spt" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient's Aadhaar Number</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient's Aadhaar Card Number"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient's Treatment Id</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient's Aadhaar Card Number"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#spt");
					  	this.setState({ gmedpacn : x.elements[0].value, tid : x.elements[1].value });
					  	x.elements[0].value='';
						x.elements[1].value='';
					  	await contract.methods.getPTDetails(this.state.gmedpacn,this.state.tid).call({from : accounts[0]},(error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
									pid : result[0],
									did  : result[1],
								  	date : result[2],
									med : result[3]
						  		});
						  		this.setState({makepdv : 1});
						  	}
							else{
								console.log("unsuccessful");
								this.setState({makepdv :7});
							}	
					  	})
					  }}className="btn btn-primary">Submit</button>
					  </div>
					</form>)
					: (<span></span>)
				}

				{
					(this.state.current==2)
					?    (<form id="gmed" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient's Aadhaar Number</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient's Aadhaar Card Number"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient's Treatment Id</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient's Aadhaar Card Number"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Medication Bill</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Medication Bill"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#gmed");
					  	this.setState({ gmedpacn : x.elements[0].value, tid : x.elements[1].value ,amt: x.elements[2].value });
					  	x.elements[0].value='';
						x.elements[1].value='';
						x.elements[2].value='';
					  	await contract.methods.uploadBill(this.state.gmedpacn,this.state.tid,this.state.amt).send({from : accounts[0]},(error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
								
						  		});
						  		this.setState({makepdv : 2});
						  	}
							else{
								console.log("unsuccessful");
								this.setState({makepdv :7});
							}	
					  	})
					  }}className="btn btn-primary">Submit</button>
					  </div>
					</form>)
					: (<span></span>)
				}

			    {
			    	(this.state.makepdv==1)
					?    (<div><h4 className="yf">Patient Id : {this.state.pid}</h4>
								<h4 className="yf">Doctor Id : {this.state.did}</h4>
								<h4 className="yf">Date : {this.state.date}</h4>
								<h4 className="yf">Medicines : {this.state.med}</h4></div>
								)
					: (<span></span>)
				  }

				{
			    	(this.state.makepdv==2)
					?    (<div><h4 className="yf">Bill generated succesfully</h4>
								</div>
								)
					: (<span></span>)
				  }
				  {
			    	(this.state.makepdv==7)
					?    (<div><h4 className="yf">You do not have acces to see the details.</h4></div>)
					: (<span></span>)
				}


				  
				</div>
		  );
	}
}

export default Chemist;