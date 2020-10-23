import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
 <div>
 <div class="loader-wrapper">
 <div class="loader spinner-3">
     <div class="bg-primary"></div>
     <div class="bg-primary"></div>
     <div class="bg-primary"></div>
     <div class="bg-primary"></div>
     <div class="bg-primary"></div>
     <div class="bg-primary"></div>
     <div class="bg-primary"></div>
     <div class="bg-primary"></div>
     <div class="bg-primary"></div>
 </div>
</div>
 <div className="wrapper">
 {/* Main Container */}
 <div id="main-wrapper" className="menu-fixed page-hdr-fixed">
  <div className="page-hdr">
    <div className="row align-items-center">
      <div className="col-4 col-md-7 page-hdr-left">
        {/* Logo Container */}
        <div id="logo">
          <div className="tbl-cell logo-icon">
            <a href="#"><img src="images/icon.png" alt /></a>
          </div>
          <div className="tbl-cell logo">
            <a href="#"><img src="images/logo.png" /></a>
          </div>
        </div>
        <div className="page-menu menu-icon">
          <a className="animated menu-close"><i className="far fa-hand-point-left" /></a>
        </div>
        <div className="page-menu page-fullscreen">
          <a><i className="fas fa-expand" /></a>
        </div>

      </div>
      <div className="col-8 col-md-5 page-hdr-right">
        <div className="page-hdr-desktop">
          <div className="page-menu menu-dropdown-wrapper menu-user">
            <a className="user-link">
              <span className="tbl-cell user-name pr-3">Hello <span className="pl-2">John Doe</span></span>
              <span className="tbl-cell avatar"><img src="uploads/author-4.jpg" alt /></span>
            </a>
            <div className="menu-dropdown menu-dropdown-right menu-dropdown-push-right">
              <div className="arrow arrow-right" /> 
              <div className="menu-dropdown-inner">
                <div className="menu-dropdown-head pb-3">
                  <div className="tbl-cell">
                    <img src="uploads/author-1.jpg" alt />
                    {/* <i class="fa fa-user-circle"></i> */}
                  </div>
                  <div className="tbl-cell pl-2 text-left">
                    <p className="m-0 font-18">John Doe</p>
                    <p className="m-0 font-14">Demonstration</p>
                  </div>
                </div>
               
                <div className="menu-dropdown-footer text-right">
                  <a href="#" className="btn btn-outline btn-primary btn-pill btn-outline-2x font-12 btn-sm">Logout</a>
                </div>
              </div>
            </div>
          </div>
          <div className="page-menu menu-dropdown-wrapper menu-notification">
            <a><i className="icon-bell" /><span className="notification">20</span></a>
            <div className="menu-dropdown menu-dropdown-right menu-dropdown-push-right">
              <div className="arrow arrow-right" /> 
              <div className="menu-dropdown-inner">
                <div className="menu-dropdown-head">Notification</div>
                <div className="menu-dropdown-body">
                  <ul className="timeline m-0">
                    <li>
                      <a href target="_blank" className="timeline-container">
                        <div className="arrow" />
                        <div className="description">Wallet Adddes </div>
                      </a>
                    </li>
                    <li>
                      <a href target="_blank" className="timeline-container">
                        <div className="arrow" />
                        <div className="description">Coin Transferred from BTC<span className="badge badge-danger badge-pill badge-sm">Unpaid</span></div>
                      </a>
                    </li>
                    <li>
                      <a href target="_blank" className="timeline-container">
                        <div className="arrow" />
                        <div className="description">BTC bought</div>
                      </a>
                    </li>
                    <li>
                      <a href target="_blank" className="timeline-container">
                        <div className="arrow" />
                        <div className="description">Server Restarted <span className="badge badge-success badge-pill badge-sm">Resolved</span></div>
                      </a>
                    </li>
                    <li>
                      <a href target="_blank" className="timeline-container">
                        <div className="arrow" />
                        <div className="description">New order received</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="page-menu menu-dropdown-wrapper menu-quick-links">
            <a><i className="icon-grid" /></a>
            <div className="menu-dropdown menu-dropdown-right menu-dropdown-push-right">
              <div className="arrow arrow-right" /> 
              <div className="menu-dropdown-inner">
                <div className="menu-dropdown-head">Quick Links</div>
                <div className="menu-dropdown-body p-0">
                  <div className="row m-0 box">
                    <div className="col-6 p-0 box">
                      <a href>
                        <i className="icon-emotsmile" />
                        <span>New Contact</span>
                      </a>
                    </div>
                    <div className="col-6 p-0 box">
                      <a href>
                        <i className="icon-docs" />
                        <span>New Invoice</span>
                      </a>
                    </div>
                    <div className="col-6 p-0 box">
                      <a href>
                        <i className="icon-calculator" />
                        <span>New Quote</span>
                      </a>
                    </div>
                    <div className="col-6 p-0 box">
                      <a href>
                        <i className="icon-rocket" />
                        <span>New Expense</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-menu">
            <a className="open-sidebar-right"><i className="icon-settings" /><span /></a>
          </div>
        </div>
        <div className="page-hdr-mobile">
          <div className="page-menu open-mobile-search">
            <a href="#"><i className="icon-magnifier" /></a>
          </div>
          <div className="page-menu open-left-menu">
            <a href="#"><i className="icon-menu" /></a>
          </div>
          <div className="page-menu oepn-page-menu-desktop">
            <a href="#"><i className="icon-options-vertical" /></a>
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

export default Header
