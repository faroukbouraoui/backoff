
import Axios from 'axios'
import React, { useState } from 'react'
import Menu from './Menu'

function AddBlog() {
    const [title, setTitle] = useState('')
    const [description, setDescription]= useState('')
    const [author, setAuthor]= useState('')

   const changeOnClick = e =>{
       e.preventDefault()

       const blog ={
           title,
           author,
           description
       }
       setTitle('')
       setDescription('')
       setAuthor('')
       Axios.post("http://localhost:4000/blogs/new", blog).then(res => alert("sucess add")).catch(err => console.log(err))
   }
    
    return(
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
    <h5 className="panel-title">Add Blog</h5>
  </div>
  <div className="panel-body">
    <form>
      <div className="row">


      </div>
      <div className="form-group row">
        <label className="col-12 col-form-label">Blog Title <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
        <div className="col-12">
          <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" placeholder="placeholder" />
        </div>
      </div>
      <div className="form-group row">
      <label className="col-12 col-form-label">Blog author <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
      <div className="col-12">
        <input value={author} onChange={e => setAuthor(e.target.value)} type="text" className="form-control" placeholder="placeholder" />
      </div>
    </div>
      <div className="form-group row">
        <label className="col-12 col-form-label">Blog description <i className="tip tippy bg-success" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is textarea." /></label>
        <div className="col-sm-12" >
          <textarea  value={description} onChange={e => setDescription(e.target.value)} className="form-control" rows={5} placeholder="Description"/>
        </div>
      </div>

    </form>
  </div>
  <div className="panel-footer text-right">
    <button type="reset" className="btn btn-success mr-2" onClick={changeOnClick} >Submit</button>
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


        
    )}


    
export default AddBlog
