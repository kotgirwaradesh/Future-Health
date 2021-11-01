import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import web3 from '.././web3';
import contract from '.././contract';

class InsuranceCompany extends Component {
	state = {
		current : 0,
		makepdv : 0,
		mnamed : 0,
		insu : [],
		statu : [''],
		pid : 0,
		did :0,
		digno:'',
		test: '',
		bill:0,
		date:'',
		pppid:0,
		tid:0,
		mbill:0,

	};
	render() {
		  return (
				<div id="sidebar">

				<div className="sidenav">
				  <center><h4>Insurance Company</h4></center>
				  <br></br>

				  <center><h6><button id="toomuch2" onClick={() => {
				  	this.setState({current : 1});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Recieved Applications</button></h6></center>

				  <center><h6><button onClick={() => {
				  	this.setState({current : 2});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Get Treatment Details</button></h6></center>

				<center><h6><button onClick={() => {
				  	this.setState({current : 3});
				  	this.setState({makepdv : 0});
				  }} className="btn btn-light">Update Application status</button></h6></center>

				</div>

				{
					(this.state.current==1)
					?    (<form id="mna" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient Id</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient Id"></input>
					 </div>
					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#mna");
					  	this.setState({ mnamed : x.elements[0].value });
					  	x.elements[0].value='';
					  	await contract.methods.recApp(this.state.mnamed).call({from : accounts[0]}, (error,result) => {
							if(!error)
							{
								this.setState({
									insu : result[0],
									statu : result[1]
								});
								this.setState({makepdv : 1});
							}
							else{
								console.log("unsuccessful");
								this.setState({makepdv :9});
							}	
						});
					  }}className="btn btn-primary">Submit</button>
					  </div>
					</form>)
					: (<span></span>)
				}

				{
					(this.state.current==2)
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
						  			
									mbill:result[0]
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
					?    (<form id="mymy" className="abc">	
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Patient ID</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Patient ID"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Treatment ID</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Treatment ID"></input>
					 </div>
					 <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Status</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Status"></input>
					 </div>

					  <div className="aab">
					  <button onClick={async(event) => {
					  	event.preventDefault();
					  	const accounts = await web3.eth.getAccounts();
					  	let x = document.querySelector("#mymy");
					  	this.setState({ pppid : x.elements[0].value,tid : x.elements[1].value,apr : x.elements[2].value });
					  	x.elements[0].value='';
						x.elements[1].value='';
						x.elements[2].value='';
					  	await contract.methods.coverInsurance(this.state.pppid,this.state.tid,this.state.apr)
					  	.send({from : accounts[0]},(error,result) => {
					  		if(!error)
					  		{
						  		
						  		this.setState({makepdv : 3});
						  	}
							else{
								console.log("unsuccessful");
								this.setState({makepdv :9});
							}	
					  	})
					  }}className="btn btn-primary">Submit</button>
					   </div>
					</form>)
					: (<span></span>)
				}





				{
				    (this.state.makepdv==10)
					?    (<div><h3 className="yf">Treatment Ids: {this.state.insu.map(name => <h2>{name}</h2>)},Status: {this.state.statu.map(name => <h2>{name}</h2>)}</h3>
					           </div>)
					: (<span></span>)
			    }
				{
				    (this.state.makepdv==1)
					?   (<div>
                            <h3 style={{display: "flex",justifyContent: "center",alignItems: "center"}}>Treatment Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
					        <table>

                                <tr>
                                        <h3 className="yf">{this.state.insu.map(name => (
                                        <ul>
                                                {name}
                                        </ul>))}</h3>
                                </tr>
                                 <tr>
                                        <h3 className="yf">{this.state.statu.map(name => (
                                        <ul>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}
                                        </ul>))}</h3>
                                </tr>
                            </table>
                         </div>)


					: (<span></span>)
			    }

				{
			    	(this.state.makepdv==2)
					?    (<div><h4 className="yf">Patient Id : {this.state.pid}</h4>
					    <h4 className="yf">Doctor Id : {this.state.did}</h4>
					    <h4 className="yf">Diagnostics : {this.state.digno}</h4>
					    <h4 className="yf">Tests Conducted : {this.state.test}</h4>
					    <h4 className="yf">Bill : {this.state.bill}</h4>
						<h4 className="yf">Date : {this.state.date}</h4>
						<h4 className="yf">Chemist Bill : {this.state.mbill}</h4></div>)
					: (<span></span>)
				}

				{
				    (this.state.makepdv==3)
					?    (<div><h3 className="yf">Information updated succesfully!</h3>
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

export default InsuranceCompany;