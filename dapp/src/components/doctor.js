import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import web3 from '.././web3';
import contract from '.././contract';

class Doctor extends Component {
	state = {
		current : 0,
		makepdv : 0,
		tid : 0,
		ppid : 0,
		pid : 0,
		did : 0,
		digno : '',
		test : '',
		bill : 0,
		tpdate : '',
		date : '',
		dpacn : '',
		precau : '',
		tppacn : 0,
		tpdid : 0,
		tpdiagno : '',
		tptests : '',
		tpbill : 0,
		tpmed : '',
		tptid : 0,
		inkpid : 0,
		inkmed : '',
		adpid:0,
		addt:'',
		adrs:'',
		drprc:'',
		drtid:[],
	};
	render() {
		  return (
				<div id="sidebar">

				<div className="sidenav">
				  <center><h4>Doctor</h4></center>
				  <br></br>
				  <center><h6><button onClick={() => {
				  	this.setState({current : 1});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Get Treatment Details</button></h6></center>

				  <center><h6><button onClick={() => {
				  	this.setState({current : 2});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Update Precaution</button></h6></center>

				  <center><h6><button onClick={() => {
				  	this.setState({current : 3});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Treat Patient</button></h6></center>

				  <center><h6><button id="toomuch3" onClick={() => {
				  	this.setState({current : 4});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Send Medication to Insurance</button></h6></center>

				  <center><h6><button id="toomuch3" onClick={() => {
				  	this.setState({current : 5});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Raise Emergency</button></h6></center>
				</div>

				{
					(this.state.current==1)
					?    (<form id="gtd" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient Id</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient ID"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Treatment ID</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Treatment ID"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#gtd");
					  	this.setState({ ppid : x.elements[0].value, tid : x.elements[1].value });
					  	x.elements[0].value='';
						x.elements[1].value='';
						
					  	await contract.methods.getTreatmentDetails(this.state.ppid,this.state.tid)
					  	.call({from : accounts[0]},(error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
						  			pid : result[0],
						  			did  : result[1],
						  			digno : result[2],//web3.utils.hexToAscii(result[2]),
						  			test : result[3],//web3.utils.hexToAscii(result[3]),
						  			bill : result[4],
									date :result[5]
						  		});
						  		this.setState({makepdv : 1});
						  	}	
							else{
								console.log("unsuccessful");
								this.setState({makepdv : 7});
							}
					  	})
					  }}className="btn btn-primary">Submit</button>
					   </div>
					</form>)
					: (<span></span>)
				}
				{
					(this.state.current==2)
					?    (<form id="udp" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient Adhar Card No.</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient Adhar Card No."></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">New Precaution</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter New Precaution"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#udp");
					  	this.setState({ dpacn : x.elements[0].value, precau : x.elements[1].value });//web3.utils.asciiToHex(x.elements[1].value)
					  	x.elements[0].value='';
					  	x.elements[1].value='';
					  	await contract.methods.UpdatePrecautions(this.state.dpacn,this.state.precau)
					  	.send({from : accounts[0]});
					  }}className="btn btn-primary">Submit</button>
					   </div>
					</form>)
					: (<span></span>)
				}
				{
					(this.state.current==3)
					?    (<form id="tpp" className="abc">	
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient Adhar Card No.</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient Adhar Card No."></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Doctor ID</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Doctor ID"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Diagnosis</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the diagnosis"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Tests Conducted</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the tests"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Bill</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the bill"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Date</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Date"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Medicines</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the Medicines"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	let x = document.querySelector("#tpp");
					  	this.setState({ 
					  		tppacn : x.elements[0].value,
					  		tpdid : x.elements[1].value,
					  		tpdiagno : x.elements[2].value,//web3.utils.asciiToHex(x.elements[2].value),
					  		tptests : x.elements[3].value,//web3.utils.asciiToHex(x.elements[3].value),
					  		tpbill : x.elements[4].value,
							tpdate : x.elements[5].value,
					  		tpmed : x.elements[6].value,//web3.utils.asciiToHex(x.elements[5].value)
					  	});
					  	for(let i=0; i<=6; i++)
					  	{
					  		x.elements[i].value = '';
					  	}
					  	const accounts = await web3.eth.getAccounts();
					  	await contract.methods.TreatPatient(this.state.tppacn,this.state.tpdid,this.state.tpdiagno,this.state.tptests,this.state.tpbill,this.state.tpdate,this.state.tpmed).send({from : accounts[0]}, (error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
						  			tptid : this.state.tppacn
						  		});
						  		this.setState({makepdv : 3});
						  	}
							else{
								console.log("unsuccessful");
								this.setState({makepdv : 7});
							}	
					  	});
					  }}className="btn btn-primary">Submit</button>
					   </div>
					</form>)
					: (<span></span>)
				}
				{
					(this.state.current==4)
					?    (<form id="ink" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient ID</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient ID"></input>
					 </div>
					
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#ink");
					  	this.setState({ inkpid : x.elements[0].value});
					  	x.elements[0].value='';
					  	await contract.methods.addToinsurance(this.state.inkpid).send({from : accounts[0]});
					  }}className="btn btn-primary">Submit</button>
					   </div>
					</form>)
					: (<span></span>)
				}

				{
					(this.state.current==5)
					?    (<form id="adesh" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient ID</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient ID"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Date</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Date"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Reason</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Reason"></input>
					 </div>
					
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#adesh");
					  	this.setState({ adpid : x.elements[0].value,addt : x.elements[1].value,adrs : x.elements[2].value});
					  	x.elements[0].value='';
						x.elements[1].value='';
						x.elements[2].value='';
					  	await contract.methods.raiseEmergency(this.state.adpid,this.state.addt,this.state.adrs).send({from : accounts[0]});
						await contract.methods.getTreatmentIdsforDr(this.state.adpid).call({from : accounts[0]},(error,result) => {
							if(!error)
							{
								
								this.setState({
									drtid : result[0],
									drprc : result[1]
								});
								this.setState({makepdv : 5});
							}	
						})
					  }
					  }className="btn btn-primary">Submit</button>
					   </div>
					</form>)
					: (<span></span>)
				}
				
			    {
			    	(this.state.makepdv==1)
					?    (<div><h4 className="yf">Patient Id : {this.state.pid}</h4>
					    <h4 className="yf">Doctor Id : {this.state.did}</h4>
					    <h4 className="yf">Diagnostics : {this.state.digno}</h4>
					    <h4 className="yf">Tests Conducted : {this.state.test}</h4>
					    <h4 className="yf">Bill : {this.state.bill}</h4>
						<h4 className="yf">Date : {this.state.date}</h4>
						</div>)
					: (<span></span>)
				}
				{
			    	(this.state.makepdv==3)
					?    (<div><h4 className="yf">Treatment ID is generated and attached to patients Treatments list </h4></div>)
					: (<span></span>)
				}

				{
				    (this.state.makepdv==5)
					?    (<div><h3 className="yf">Treatment Id: {this.state.drtid.map(name => <h2>{name}</h2>)}</h3>
						 <h3 className="yf">Patient Precautions: {this.state.drprc}</h3>
					           </div>)
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


export default Doctor;