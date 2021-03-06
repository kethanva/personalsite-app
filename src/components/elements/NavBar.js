import React from "react";
import MenuItem from "./MenuItem";
import Resume from "../../resume.json";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(e) {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  }

  render() {
    return (
      <nav className="navbar header">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item title is-unselectable name is-transparent">
                {Resume.basics.name}
            </a>
            <span
              className="navbar-burger burger"
              onClick={this.handleMenuClick}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className={ "navbar-menu nav-menu " +
              (this.state.showMenu ? "is-active" : null)
            }
          >

            <div className="navbar-end" onClick={this.handleMenuClick}>
              <div class="navbar-item">
                <div class="buttons">

                  <MenuItem text="About Me" href="#aboutMe" />
                  <MenuItem text="Skills" href="#skills" />
                  <MenuItem text="Experience" href="#experience" />
                  <MenuItem text="Contact" href="#contact" />

                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
