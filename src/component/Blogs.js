import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'

export class Blogs extends Component {


    state={
        blogs:[
            {
                title:"",
                description:"",
                author:"",
                file:null
                
            }
        ]

        
    }
    componentDidMount(){
        Axios.get("http://localhost:4000/blogs/readall").then(res =>{
            const blogs = res.data
            this.setState({blogs})
          })
    }
    deleteblog(blogid)
    {
      if(window.confirm('Are you sure'))
      {
        fetch('http://localhost:4000/blogs/delete/'+blogid,{
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
<Menu />
  <div className="page-wrapper">
    {/* Page Title */}
    <div className="page-title">
      <div className="row align-items-center">
        <div className="col-sm-6">
          <h2 className="page-title-text">Blogs</h2>
        </div>
        
        <div className="col-sm-6 text-right">
          <div className="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li>Faq</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button className="btn btn-success btn-pill" style={{marginBottom:"10px",marginLeft:"500px"}}><Link to="/add-blog">create blog</Link></button>
    {/* Page Body */}
    {this.state.blogs.map((blog)=>(
    <div className="page-body" key={blog._id}>
      <div className="row">
        <div className="col-12">
          <div className="panel panel-default">
            <div className="panel-head">
              <div className="panel-title">
                <span className="panel-title-text">{blog.author}</span>
                
              </div>
            </div>
            <div className="panel-body">
              <div className="theme-accordion-container">
                <div className="theme-accordion">
                  <div className="theme-accordion-hdr">
                    <h4 className="text-primary"><i className="fa fa-stethoscope" />{blog.title}</h4>
                    <div className="theme-accordion-control"><i className="fa fa-plus" /></div>
                  </div>
                  <div className="theme-accordion-bdy">
                    <div className="row p-3">
                      <div className="col-sm-3 theme-accordian-img text-center">
                        <img className="img-responsive img-thumbnail" src="uploads/blog-1.jpg" alt />
                      </div>
                      <div className="col-sm-9">
                        <p style={{borderBottom:"1px lightgray solid"}} className="paragraph-small paragraph-black">
                          {blog.description}
                         
                        </p>
                        <div className="pull-right">
                          <button style={{marginRight:"5px"}} className="btn btn-outline btn-primary btn-pill btn-outline-1x btn-gradient btn-shadow" onClick={(e) => {this.deleteblog(blog._id, e)}}>Delete</button>
                          <button  className="btn btn-outline btn-primary btn-pill btn-outline-1x btn-gradient btn-shadow"><Link to={"/update-blog/"+blog._id}>Update</Link></button>
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
            </div>
    ))}
            </div></div>

        )
    }
}

export default Blogs
