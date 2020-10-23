import Axios from 'axios'
import React, { Component } from 'react'
import Select from 'react-select'

class AddOffre extends Component {
    constructor(props){
        super(props)
        this.state = {
          selectOptions : [],
          value:[],
          name:"",
          desription:"",
          price: 0,
          services:""
          
        }
      }

     changeOnClick =() =>{
       
 
        const offre ={
            name:this.state.name,
            description:this.state.desription,
            price:this.state.price,
            services:this.state.services
            
            
            
        }

         Axios.post("http://localhost:4000/offres/neww", {offre}).then(res => alert("sucess add")).catch(err => console.log(err))
    }


      async getOptions(){
        const res = await Axios.get('http://localhost:4000/services/all')
        const data = res.data
    
        const options = data.map(d => ({
          "value" : d.name,
          "label": d.name
          
        }))
        this.setState({selectOptions: options})
      }

      componentDidMount(){
        this.getOptions()
        
    }
   /* handleChangename = event =>{
        this.setState({name:event.target.value})
    }
    handleChangedescription = event =>{
        this.setState({description:event.target.value})
    }
    handleChangeprice = event =>{
        this.setState({price:event.target.value})
    }
    handleChangeservices = event =>{
        this.setState({services:event.target.value})
    }
*/

    render() {
        console.log(this.state.value)
        return (
            <div>
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
          <div className="row">
  
  
          </div>
          <div className="form-group row">
            <label className="col-12 col-form-label" >Offre name <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
            <div className="col-12">
              <input  onChange={e =>this.setState({name:e.target.value})} type="text" className="form-control" placeholder="placeholder" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-form-label">Service description <i className="tip tippy bg-success" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is textarea." /></label>
            <div className="col-12">
              <textarea  onChange={e =>this.setState({description:e.target.value})}className="form-control" rows={5} defaultValue={""} />
            </div>
          </div>
          <div className="form-group row">
          <label className="col-12 col-form-label">Price per month<i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
          <div className="col-12">
            <input  onChange={e =>this.setState({price:e.target.value})} type="number" className="form-control" placeholder="price" />
          </div>
        </div>
        <div className="form-group row">
        <label className="col-12 col-form-label">Services<i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
        <div className="col-12">
        <Select  placeholder="Select service . . ." options={this.state.selectOptions} onChange={e =>this.setState({value:e.target.value})} isMulti />
  
        </div>
      </div>
        </form>
      </div>
      <div className="panel-footer text-right">
        <button type="reset" className="btn btn-success mr-2" onClick={this.changeOnClick.bind(this)} >Submit</button>
        <button type="reset" className="btn btn-outline btn-secondary btn-outline-1x">Cancel</button>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
            </div>
        )
    }
}

export default AddOffre