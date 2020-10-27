import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Offres extends Component {

    state={
        offres:[
            {
                name:"",
                description:"",
                price:"",
                services:[]
            }
        ]
        
    }
    componentDidMount(){
        Axios.get(`http://localhost:4000/offres/all`).then(res =>{
            const offres = res.data
            this.setState({offres})
          })
    }
    render() {
        return (

<div className="wrapper">
  <div className="page-wrapper">
    {/* Page Title */}
    <div className="page-title">
      <div className="row align-items-center">
        <div className="col-sm-6">
        <button className="btn btn-success btn-pill"><Link to="/add-offre">create offre</Link></button>
        </div>
        <div className="col-sm-6 text-right">
          <div className="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li>Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    
    <div className="page-body">
    
      <div className="row">
      {this.state.offres.map((offre)=>(
        <div className="col-md-4">
        
          <div className="pricing01">
          
            <div className="pricing-title">
            
              <i className="icon-screen-desktop" />
              <h2>{offre.name}</h2>
              <small>{offre.description}</small>
            </div>
            <div className="pricing-box">
              <span className="sup">$</span><span className="price">{offre.price}</span><span className="unit">Per Month</span>
            </div>
            
            <div className="pricing-body">
              <ul>
              <h3 style={{color: "red"}}>Services</h3>
              {offre.services.map(service =>(
                <li>{service.name} </li>
                ))}
              </ul>
            </div>
           
            <div className="pricing-footer">
              <button className="btn btn-primary btn-pill" style={{marginRight:"5px"}}>Update</button>
              <button className="btn btn-primary btn-pill">Delete</button>
            </div>
            
          </div>
          
        </div>
        ))}
      </div>
      
    </div></div></div>

        )
    }
}

export default Offres
