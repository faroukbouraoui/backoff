import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Menu extends Component {
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
      {/* Menu Wrapper */}
      <div className="menu-wrapper">
        <div className="menu">
          {/* Menu Container */}
          <ul>
            <li className="menu-title">Main</li>
            <li className="has-sub active">
              <a><i className="icon-screen-desktop" /><span>Dashboard</span><i className="arrow rotate" /></a>
              <ul className="sub-menu">
                <li>
                  <Link to='/services'><span>Gestion Services</span></Link>
                </li>
                <li>
                  <Link to="/offres"><span>Gestion Offres</span></Link>
                </li>
                <li>
                  <Link href="dashboard-crm.html"><span>Gestion Blogs</span></Link>
                </li>
                <li>
                  <Link href="dashboard-analytics.html"><span>Templates</span></Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}

export default Menu
