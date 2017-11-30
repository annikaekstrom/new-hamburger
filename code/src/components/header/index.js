import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (

      <header>

        <Grid className="header-grid">
          <label className="hamburger" htmlFor="hamburger">
            <div className="burgermenu"></div>
            <div className="burgermenu"></div>
            <div className="burgermenu"></div>
          </label>
          <input id="hamburger" type="checkbox" className="hamburger-checkbox"></input>
          <div className="menu">
            <li><a href="http://technigo.io">Technigo</a></li>
            <li><a href="http://technigo.io">Boot Camp</a></li>
            <li><a href="http://technigo.io">Stories</a></li>
            <li><a href="http://technigo.io">About</a></li>
          </div>
        </Grid>

      </header>
    )
  }

}

export default Header
