import Axios from 'axios'
import React, { Component } from 'react'
import Select from 'react-select'
import Menu from './Menu'

class AddOffre extends Component {
    constructor(props){
        super(props)
        this.state = {
          selectOptions : [],
          value:[],
          name:"",
          description:"",
          price:"",
          
          
        }
      }

     async changeOnClick () {
       
 
        const offre ={
            name:this.state.name,
            description:this.state.desription,
            price:this.state.price,
            services:this.state.value
            
            
            
        }

      await   Axios.post("http://localhost:4000/offres/neww", offre).then(res => alert("sucess add")).catch(err => console.log(err))
    }


      async getOptions(){
        const res = await Axios.get('http://localhost:4000/services/all')
        const data = res.data
    
        const options = data.map(d => ({
          "value" : d._id,
          "label": d.name
          
        }))
        this.setState({selectOptions: options})
      }
      handleChange(e){
        this.setState({value:e})
      }

      componentDidMount(){
        this.getOptions()
        this.changeOnClick()
        
    }
    handleChangename = event =>{
        this.setState({name:event.target.value})
    }
    handleChangedescription = event =>{
        this.setState({description:event.target.value})
    }
    handleChangeprice = event =>{
        this.setState({price:event.target.value})
    }

    render() {
        console.log(this.state.value)
        return (
            <div>
            <Menu />
            <div className="page-wrapper">
            <div className="page-title">
            
            
            <div className="page-body">
            <div className="row">
            <div className="col-12">
            <div className="panel panel-default">
    <div className="panel">
      <div className="panel-head">
        <h5 className="panel-title">Tip Sytle form</h5>
      </div>
      <div className="panel-body">
        <form>
          
  
  
          
          <div className="form-group row">
            <label className="col-12 col-form-label" >Offre name <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
            <div className="col-12">
              <input value={this.state.name} onChange={this.handleChangename} type="text" className="form-control" placeholder="placeholder" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-form-label">Service description <i className="tip tippy bg-success" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is textarea." /></label>
            <div className="col-12">
              <textarea value={this.state.description} onChange={this.handleChangedescription} className="form-control" rows={5} defaultValue={""} />
            </div>
          </div>
          <div className="form-group row">
          <label className="col-12 col-form-label">Price per month<i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
          <div className="col-12">
            <input value={this.state.price} onChange={this.handleChangeprice} type="number" className="form-control" placeholder="price" />
          </div>
        </div>
        <div className="form-group row">
        <label className="col-12 col-form-label">Services<i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
        <div className="col-12">
        <Select  placeholder="Select service . . ." options={this.state.selectOptions} onChange={this.handleChange.bind(this)} isMulti />
          
        </div>
      </div>
        </form>
      </div>
      <div className="panel-footer text-right">
        <button type="submit" className="btn btn-success mr-2" onClick={this.changeOnClick.bind(this)} >Submit</button>
        <button type="reset" className="btn btn-outline btn-secondary btn-outline-1x">Cancel</button>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div></div>
        )
    }
}

export default AddOffre
