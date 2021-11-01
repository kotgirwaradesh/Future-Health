import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import web3 from '.././web3';
import contract from '.././contract';

class Patient extends Component {
	state = {
		current : 0,
		pacn : 0,
		pname : '',
		paddr : '',
		pno : 0,
		pbg : '',
		picid : 0,
		pemer : 0,
		pprecau : '',
		makepdv : 0,
		did : 0,
		ddid:0,
		dddid:0,
		dname : '',
		dprac : '',
		dexp : '',
		dno : 0,
		daddr : '',
		gicicid : 0,
		mbill:0,
		gicname : '',
		gicno : 0,
		afipacn : 0,
		afires : '',
		tida : [],
		tdta : [''],
		tid : 0,
		pid : 0,
		did : 0,
		digno : '',
		test : '',
		bill : 0,
		date :'',
		pppid : 0,
		emgid:[],
		emgdt:[''],
		emgrs:[''],
		insust:'',
	};
	render() {
		  return (
				<div id="sidebar">

				<div className="sidenav">
				  <center><h4>Patient</h4></center>
				  <br></br>
				  <center><h6><button onClick={() => {
				  	this.setState({current : 1});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Get Your Details</button></h6></center>

				  <center><h6><button onClick={() => {
				  	this.setState({current : 2});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Get Doctor Details</button></h6></center>

				  <center><h6><button id="toomuch" onClick={() => {
				  	this.setState({current : 3});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Get Insurance Company Details</button></h6></center>

				  

				  <center><h6><button onClick={() => {
				  	this.setState({current : 5});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Get Treatment History</button></h6></center>

				  <center><h6><button onClick={() => {
				  	this.setState({current : 6});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Get Treatment Details</button></h6></center>

				  <center><h6><button onClick={() => {
				  	this.setState({current : 7});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Give Access</button></h6></center>

				<center><h6><button onClick={() => {
				  	this.setState({current : 8});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Emergency Logs</button></h6></center>

				<center><h6><button onClick={() => {
				  	this.setState({current : 9});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Update Insurance Company</button></h6></center>
				</div>

				{
					(this.state.current==1)
					?    (<form id="gpd" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Aadhaar Number</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Aadhaar Card Number"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#gpd");
					  	this.setState({ pacn : x.elements[0].value });
					  	x.elements[0].value='';
					  	await contract.methods.getPatientInfo(this.state.pacn)
					  	.call({from : accounts[0]},(error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
						  			pname : web3.utils.hexToAscii(result[0]),
						  			paddr : web3.utils.hexToAscii(result[1]),
						  			pno : result[2],
						  			pbg : web3.utils.hexToAscii(result[3]),
						  			picid : result[4],
						  			pemer : result[5],
						  			pprecau : result[6],//web3.utils.hexToAscii(result[6])
						  		});
						  		this.setState({makepdv : 1});
						  	}
							else{
								console.log("unsuccessful");
								this.setState({makepdv : 9});
							}	
					  	})
					  }}className="btn btn-primary">Submit</button>
					  </div>
					</form>)
					: (<span></span>)
				}
				{	
					(this.state.current==2)
					?    (<form id="gdd" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Doctor ID</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Doctor ID"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#gdd");
					  	this.setState({ did : x.elements[0].value });
					  	x.elements[0].value='';
					  	await contract.methods.getDoctorDetails(this.state.did)
					  	.call({from : accounts[0]},(error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
						  			dname : web3.utils.hexToAscii(result[1]),
						  			dprac : web3.utils.hexToAscii(result[2]),
						  			dexp : web3.utils.hexToAscii(result[3]),
						  			dno : result[4],
						  			daddr :web3.utils.hexToAscii(result[5])
						  		});
						  		this.setState({makepdv : 2});
						  	}	
					  	})
					  }}className="btn btn-primary">Submit</button>
					  </div>
					</form>)
					: (<span></span>)
			    }
			    {	
					(this.state.current==3)
					?    (<form id="gic" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Insurance Company ID</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Insurance Company ID"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#gic");
					  	this.setState({ gicicid : x.elements[0].value });
					  	x.elements[0].value='';
					  	await contract.methods.getInsuranceCompany(this.state.gicicid).call({from : accounts[0]},(error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
						  			gicname : result[0],//web3.utils.hexToAscii(result[0]),
						  			gicno : result[1]
						  		});
						  		this.setState({makepdv : 3});
						  	}	
					  	})
					  }}className="btn btn-primary">Submit</button>
					  </div>
					</form>)
					: (<span></span>)
			    }
			    {
					(this.state.current==4)
					?    (<form id="afi" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Aadhaar Number</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Aadhaar Card Number"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#afi");
					  	this.setState({ afipacn : x.elements[0].value });
					  	x.elements[0].value='';
					  	await contract.methods.applyForInsurance(this.state.afipacn).call({from : accounts[0]}, (error,result) => {
					  		if(!error)
					  		{
					  			console.log(result);
						  		this.setState({
						  			afires : result
						  		});
						  		this.setState({makepdv : 4});
						  	}	
					  	});
					  }}className="btn btn-primary">Submit</button>
					  </div>
					</form>)
					: (<span></span>)
				}

				{
					(this.state.current==5)
					?    (<form id="afi" className="abc">	
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
							await contract.methods.getTreatmentIds().call({from : accounts[0]},(error,result) => {
							if(!error)
							{
								
								this.setState({
									tida : result[0],
									tdta : result[1]
								});
								this.setState({makepdv : 5});
							}	
						});
					  }}className="btn btn-primary">Get Treatment Ids</button>
					  </div>
					</form>)
					: (<span></span>)
				}

				{
					(this.state.current==6)
					?    (<form id="gtd" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient ID</label>
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
					  	this.setState({ pppid : x.elements[0].value,tid : x.elements[1].value });
					  	x.elements[0].value='';
						x.elements[1].value='';
					  	await contract.methods.getTreatmentDetails(this.state.pppid,this.state.tid)
					  	.call({from : accounts[0]},(error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
						  			pid : result[0],
						  			did  : result[1],
						  			digno : result[2],//web3.utils.hexToAscii(result[2]),
						  			test : result[3],//web3.utils.hexToAscii(result[3]),
						  			bill : result[4],
									date : result[5],

									
						  		});
						  		//this.setState({makepdv : 6});
						  	}
							else{
								console.log("unsuccessful");
								this.setState({makepdv :9});
							}	
					  	})
						await contract.methods.getMbill(this.state.pppid,this.state.tid)
					  	.call({from : accounts[0]},(error,result) => {
					  		if(!error)
					  		{
						  		this.setState({
						  			
									mbill:result[0],
									insust:result[1],
						  		});
						  		this.setState({makepdv : 6});
						  	}	
					  	})
					  }}className="btn btn-primary">Submit</button>
					   </div>
					</form>)
					: (<span></span>)
				}

				{
					(this.state.current==7)
					?    (<form id="gtd" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Id to give access</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Id to give access"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#gtd");
					  	this.setState({ ddid : x.elements[0].value });
					  	x.elements[0].value='';
					  	await contract.methods.giveAccessToDoctor(this.state.ddid)
					  	.send({from : accounts[0]},(error,result) => {
							if(!error)
					  		{
						  		console.log("succesfull");
								this.setState({
									dddid : result
									
								});
						  		this.setState({makepdv : 7});
						  	}	
					  	})
					  }}className="btn btn-primary">Submit</button>
					   </div>
					</form>)
					: (<span></span>)
				}

				{
					(this.state.current==8)
					?    (<form id="maza" className="abc">	
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
							await contract.methods.raisedEmergencyDetails().call({from : accounts[0]},(error,result) => {
							if(!error)
							{
								
								this.setState({
									emgid : result[0],
									emgdt : result[1],
									emgrs : result[2],
								});
								this.setState({makepdv : 8});
							}	
						});
					  }}className="btn btn-primary">Emergency Logs</button>
					  </div>
					</form>)
					: (<span></span>)
				}
				{
					(this.state.current==9)
					?    (<form id="bhaijan" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Update Insurance Company</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="New Insurance Company Id"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#bhaijan");
					  	this.setState({ ddid : x.elements[0].value });
					  	x.elements[0].value='';
					  	await contract.methods.updateInsuComp(this.state.ddid)
					  	.send({from : accounts[0]},(error,result) => {
							if(!error)
					  		{
						  		console.log("succesfull");
								
						  		this.setState({makepdv : 10});
						  	}	
					  	})
					  }}className="btn btn-primary">Submit</button>
					   </div>
					</form>)
					: (<span></span>)
				}
			    {
			    	(this.state.makepdv==1)
					?    (<div><h4 className="yf">Name : {this.state.pname}</h4>
					    <h4 className="yf">Address : {this.state.paddr}</h4>
					    <h4 className="yf">Phone Number : {this.state.pno}</h4>
					    <h4 className="yf">Blood Group : {this.state.pbg}</h4>
					    <h4 className="yf">Insurance Company Id : {this.state.picid}</h4>
					    <h4 className="yf">Emergency Contact : {this.state.pemer}</h4>
					    <h4 className="yf">Precautions : {this.state.pprecau}</h4></div>)
					: (<span></span>)
				}
				{
				    (this.state.makepdv==2)
					?    (<div><h4 className="yf">Name : {this.state.dname}</h4>
					    <h4 className="yf">Practice Type : {this.state.dprac}</h4>
					    <h4 className="yf">Area of Expertize : {this.state.dexp}</h4>
					    <h4 className="yf">Phone Number : {this.state.dno}</h4>
					    <h4 className="yf">Address : {this.state.daddr}</h4></div>)
					: (<span></span>)
			    }
			    {
				    (this.state.makepdv==3)
					?    (<div><h4 className="yf">Name : {this.state.gicname}</h4>
					    <h4 className="yf">Phone No : {this.state.gicno}</h4></div>)
					: (<span></span>)
			    }
			    {
				    (this.state.makepdv==4)
					?    (<div><h3 className="yf">{this.state.afires}</h3></div>)
					: (<span></span>)
			    }
				{
				    (this.state.makepdv==10)
					?    (<div><h3 className="yf">New Insurance Company linked succesfully</h3></div>)
					: (<span></span>)
			    }
				{
				    (this.state.makepdv==50)
					?    (<div><h3 className="yf">Treatment date: {this.state.tdta.map(name => <h2>{name}</h2>)},Treatment ids: {this.state.tida.map(name => <h2>{name}</h2>)}</h3>
					           </div>)
					: (<span></span>)
			    }

				{
				    (this.state.makepdv==5)
					?    (<div>
                            <h3 style={{display: "flex",justifyContent: "center",alignItems: "center"}}>Treatment Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;  Treatment Id</h3>
					        <table>
								
					            <tr>
                                    <h3 className="yf">{this.state.tdta.map(name => (
                                        <ul>
                                                <td>{name} </td>  
                                        </ul>))}</h3>
                                </tr>
								<tr>
									&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;       
									
								</tr>
								
                                <tr>
                                        <h3 className="yf">{this.state.tida.map(name => (
                                        <ul>
                                                <td>{name} </td>
                                        </ul>))}</h3>
                                </tr>
                            </table>
							
							
                         </div>)

					: (<span></span>)
			    }

				{
			    	(this.state.makepdv==6)
					?    (<div><h4 className="yf">Patient Id : {this.state.pid}</h4>
					    <h4 className="yf">Doctor Id : {this.state.did}</h4>
					    <h4 className="yf">Diagnostics : {this.state.digno}</h4>
					    <h4 className="yf">Tests Conducted : {this.state.test}</h4>
					    <h4 className="yf">Hospital Bill : {this.state.bill}</h4>
						<h4 className="yf">Date : {this.state.date}</h4>
						<h4 className="yf">Chemist Bill : {this.state.mbill}</h4>
						<h4 className="yf">Insurance Status : {this.state.insust}</h4></div>)
					: (<span></span>)
				}
				{
			    	(this.state.makepdv==7)
					?    (<div><h4 className="yf">Given access to : {this.state.ddid}</h4>
					    </div>)
					: (<span></span>)
				}
				{
				    (this.state.makepdv==80)
					?    (<div><h3 className="yf">Docter Id: {this.state.emgid.map(name => <h2>{name}</h2>)},Date: {this.state.emgdt.map(name => <h2>{name}</h2>)},Reason: {this.state.emgrs.map(name => <h2>{name}</h2>)}</h3>
					           </div>)
					: (<span></span>)
			    }
				{
				    (this.state.makepdv==8)
					?(<div>
                            <h3 style={{display: "flex",justifyContent: "center",alignItems: "center"}}>Doctor Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reason</h3>
					        <table>
					            <tr>
                                    <h3 className="yf">{this.state.emgid.map(name => (
                                        <ul>
                                              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {name}   
                                        </ul>))}</h3>
                                </tr>
                                <tr>
                                        <h3 className="yf">{this.state.emgdt.map(name => (
                                        <ul>
                                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}
                                        </ul>))}</h3>
                                </tr>
                                 <tr>
                                        <h3 className="yf">{this.state.emgrs.map(name => (
                                        <ul>
                                                {name}
                                        </ul>))}</h3>
                                </tr>
                            </table>
                         </div>)


					: (<span></span>)
			    }
				{
			    	(this.state.makepdv==9)
					?    (<div><h4 className="yf">You do not have acces</h4></div>)
					: (<span></span>)
				}

				</div>
		  );
	}
}

export default Patient;