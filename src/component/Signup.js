import React from 'react'

const Signup = ()=>{
const showSignupform = ()=>(
    <div className="lgn-background" style={{backgroundImage: 'url(uploads/slider-law-1.jpg)'}}>
  <div className="lgn-wrapper">
    <div className="lgn-logo text-center">
      <a><img src="images/logo-white.png" alt /></a>
    </div>
    <div id="login-form" className="lgn-form ">
      <form className="form-vertical">
        <div className="lgn-input form-group">
          <label className="control-label col-sm-12">Username</label>
          <div className="col-sm-12">
            <input className="form-control" type="text" name="username" id="lgn-mail" placeholder="Enter your Username" autoComplete="off" />
          </div>
        </div>
        <div className="lgn-input form-group">
        <label className="control-label col-sm-12">Email</label>
        <div className="col-sm-12">
          <input className="form-control" type="email" name="email" id="lgn-mail" placeholder="Enter your Username" autoComplete="off" />
        </div>
      </div>
        <div className="lgn-input form-group">
          <label className="control-label col-sm-12">Password</label>
          <div className="col-sm-12">
            <input type="password" name="password" id="lgn-pass" className="form-control" placeholder="Enter your Password" autoComplete="off" />
          </div>  
        </div>

        <div className="lgn-submit">
          <button type="submit" id="lgn-submit" className="btn btn-primary btn-pill btn-lg" name="login">Create Account</button>
        </div>
      </form>
    </div> 
  </div>
</div>

)
return (
    <div>{showSignupform()}</div>
)
}

export default Signup;