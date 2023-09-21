import React, { Component, Fragment } from "react";
import Logo from "../../assets/logo.svg";
import "./index.css";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="container">
            <nav>
              <div className="nav-left">
                <div className="logo">
                  <img src={Logo} alt="logo" />
                </div>
                <div className="nav-menu">
                  <ul className="links">
                    <li className="nav-link">
                      <a href="#home">Home</a>
                    </li>
                    <li className="nav-link">
                      <a href="#about">About</a>
                    </li>
                    <li className="nav-link">
                      <a href="#services">Services</a>
                    </li>
                    <li className="nav-link">
                      <a href="#articles">Articles</a>
                    </li>
                    <li className="nav-link">
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-right">
                <h1 className="card">
                  Cart(<span>0</span>)
                </h1>

                <button className="free-quote-btn">Get a free quote</button>
              </div>
            </nav>
          </div>
        </header>
      </Fragment>
    );
  }
}
