import React, { Component } from 'react'

export class UpdateService extends Component {


    render() {
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
            <label className="col-12 col-form-label">Service name <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
            <div className="col-12">
              <input value={this.state.name} onChange={this.handleChange('name')} type="text" className="form-control" placeholder="placeholder" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-form-label">Service description <i className="tip tippy bg-success" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is textarea." /></label>
            <div className="col-12">
              <textarea value={this.state.description} onChange={this.handleChange('description')} className="form-control" rows={5} defaultValue={""} />
            </div>
          </div>
    
        </form>
      </div>
      <div className="panel-footer text-right">
        <button type="reset" className="btn btn-success mr-2" onClick={this.handleSubmit}>Update</button>
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

export default UpdateService
