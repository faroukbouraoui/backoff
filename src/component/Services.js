import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Services extends Component {
  state={
    services:[]
  }
  componentDidMount(){
    Axios.get(`http://localhost:4000/services/all`).then(res =>{
      const services = res.data
      this.setState({services})
    })
  }

  deleteService(serviceid)
  {
    if(window.confirm('Are you sure'))
    {
      fetch('http://localhost:4000/services/delete/'+serviceid,{
        method:'DELETE',
        header:{'Accept':'application/json',
        'Content-Type':'application/json'
      }
      })
    }
  }
    render() {
        return (
<div>

<div className="page-wrapper">
  {/* Page Title */}



<div className="page-body">
  <div className="row">
 

  <div className="col-md-8">
  {this.state.services.map((service,key)=>(
    <div className="panel panel-default">
      <div className="panel-head">
        <div className="panel-title">
          <i className="icon-layers panel-head-icon text-primary" />
          <span className="panel-title-text">{service.name}</span>
        </div>
      </div>
      <div className="panel-wrapper">
        <div className="panel-body">
          <p className="text-muted m-0">{service.description}</p>
        </div>
      </div>
      <div className="panel-footer">
        <div className="row">
         
          <div className="col-md-6 text-right">
            <button className="btn btn-primary btn-pill btn-sm"><Link to="/post-service">Add</Link></button>
            <button className="btn btn-warning btn-pill btn-sm"><Link to={"/updateservice/"+service._id}>Update</Link></button>
            <button className="btn btn-danger btn-pill btn-sm" onClick={(e) => {this.deleteService (service._id, e)}}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    ))}
  </div>
 
</div>
</div>
</div>
</div>
        )
    }
}

export default Services
