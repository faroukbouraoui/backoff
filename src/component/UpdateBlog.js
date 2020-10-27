import Axios from 'axios'
import React, { Component } from 'react'

export class UpdateBlog extends Component {

    constructor(props){
        super(props)
        this.onChangeBlogTitle = this.onChangeBlogTitle.bind(this);
        this.onChangeBlogAuthor = this.onChangeBlogAuthor.bind(this);
        this.onChangeBlogDescription = this.onChangeBlogDescription.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    this.state={
        
        title:'',
        author:'',
        description:''
      }
    }
    componentDidMount(id){
        Axios.get(`http://localhost:4000/blogs/update/${id}`).then(res =>{
            this.setState({
                title:res.data.title,
                author: res.data.author,
                description:res.data.description
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
    onChangeBlogTitle(e){
        this.setState({title: e.target.value})
    }
    onChangeBlogAuthor(e){
        this.setState({author: e.target.value})
    }
    onChangeBlogDescription(e){
        this.setState({description: e.target.value})
    }
    onSubmit(e,id){
        e.preventDefault()

        const blogobj = {
            title:this.state.title,
            author:this.state.author,
            description:this.state.description,
        }
        Axios.patch(`http://localhost:4000/blogs/update-blog/${id}`, blogobj).then((res)=>{
            console.log(res.data)
            console.log('blog successfully updated')
        }).catch((error)=>{
            console.log(error)
        })
        this.props.history.push('/blogs')
    }





    render() {
        return (
            <div>
                 <div>
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
    <form onSubmit={this.onSubmit} >
      <div className="row">


      </div>
      <div className="form-group row">
        <label className="col-12 col-form-label">Blog Title <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
        <div className="col-12">
          <input value={this.state.title}  onChange={this.onChangeBlogTitle} type="text" className="form-control" placeholder="placeholder" />
        </div>
      </div>
      <div className="form-group row">
      <label className="col-12 col-form-label">Blog author <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
      <div className="col-12">
        <input value={this.state.author}  onChange={this.onChangeBlogAuthor} type="text" className="form-control" placeholder="placeholder" />
      </div>
    </div>
      <div className="form-group row">
        <label className="col-12 col-form-label">Blog description <i className="tip tippy bg-success" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is textarea." /></label>
        <div className="col-sm-12" >
          <textarea value={this.state.description} onChange={this.onChangeBlogDescription}  className="form-control" rows={5} defaultValue={""} />
        </div>
      </div>

    
      
  <div className="panel-footer text-right">
    <button type="reset" className="btn btn-success mr-2" >Submit</button>
    <button type="reset" className="btn btn-outline btn-secondary btn-outline-1x">Cancel</button>
  </div>
  </form>
      </div>
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

export default UpdateBlog
