import React, { Component, Fragment } from "react";
import callIcon from "../../assets/call.svg";
import homeImg from "../../assets/home-img.png";
import aboutCardFirst from "../../assets/about-card-1.svg";
import aboutCardSecond from "../../assets/about-card-2.svg";
import aboutCardThird from "../../assets/about-card-3.svg";
import industryCardFirst from "../../assets/industry-card-1.svg";
import industryCardSecond from "../../assets/industry-card-2.svg";
import industryCardThird from "../../assets/industry-card-3.svg";
import covidCardLeft from "../../assets/covid-card-left.svg";
import articleCardFirst from "../../assets/article-card-1.png";
import articleCardSecond from "../../assets/article-card-2.png";

import "./index.css";

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <main>
          <div className="container">
            <div className="home">
              <div className="home-left">
                <h1>Quality cleaning for your home</h1>
                <span>
                  Condimentum mauris sit cursus amet id non neque pharetra nulla
                  ornare sed facilisis senectus dapibus nibh ultrices eget
                  suscipit aliquet et nulla magna lacus penatibus.
                </span>
                <div className="linking">
                  <button className="free-quote-btn-2">Get a free quote</button>
                  <div className="call">
                    <img src={callIcon} alt="call-icon" className="call-icon" />
                    <div className="call-number">
                      <span>Call us now</span>
                      <a href="tel:+998907917119">(90) 791 - 71 - 19</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-right">
                <img src={homeImg} alt="home-right" />
              </div>
            </div>
            <div className="about-us">
              <h1>About Us</h1>
              <span>
                Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
                neque nisi felis non ultrices massa id egestas quam velit
                pretium nu.
              </span>
              <div className="about-cards">
                <div className="about-card">
                  <img src={aboutCardFirst} alt="first-card" />
                  <h1>1. Schedule online</h1>
                  <span>
                    Sagittis nibh scelerisque vitae egetolment vulputate sem
                    elementum sed n.
                  </span>
                </div>
                <div className="about-card">
                  <img src={aboutCardSecond} alt="second-card" />
                  <h1>2. Pay online easily</h1>
                  <span>
                    Vitae ut accumsan blandit ullamcorperolm suscipit dui
                    gravida amet at nunc.
                  </span>
                </div>
                <div className="about-card">
                  <img src={aboutCardThird} alt="third-card" />
                  <h1>3. Get your house cleaned</h1>
                  <span>
                    Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                    cursus eleifend.
                  </span>
                </div>
              </div>
              <div className="about-buttons">
                <button className="free-quote-btn-2">Get a free quote</button>
                <button className="explore-services">Explore services</button>
              </div>
            </div>
            <div className="our-services">
              <div className="service-heading">
                <h1>Our Services</h1>
                <button className="explore-services">Explore Services</button>
              </div>
              <div className="industry-cards">
                <div className="industry-card">
                  <img src={industryCardFirst} alt="industry-card-1" />
                  <h1>House cleaning</h1>
                  <span>
                    Lorem ipsum dolor sit amet consecte tur adipiscing elit
                    semper dalaracc lacus vel facilisis volutpat est.
                  </span>
                </div>
                <div className="industry-card">
                  <img src={industryCardSecond} alt="industry-card-2" />
                  <h1>Office cleaning</h1>
                  <span>
                    Lorem ipsum dolor sit amet consecte tur adipiscing elit
                    semper dalaracc lacus vel facilisis volutpat est.
                  </span>
                </div>
                <div className="industry-card">
                  <img src={industryCardThird} alt="industry-card-3" />
                  <h1>Industrial cleaning</h1>
                  <span>
                    Lorem ipsum dolor sit amet consecte tur adipiscing elit
                    semper dalaracc lacus vel facilisis volutpat est.
                  </span>
                </div>
              </div>
              <div className="covid-card">
                <div className="covid-card-left">
                  <img src={covidCardLeft} alt="covid-card-left-img" />
                </div>
                <div className="covid-card-right">
                  <h1>Covid-19 sanitization</h1>
                  <span>
                    We follow guidelines to keep you safe from the COVID-19
                    virus
                  </span>
                  <p>
                    Lobortis mattis odio leo eget mauris met aliquet semper
                    molestie sollicitudin congue massa mauris lectus.
                  </p>
                  <div className="linking">
                    <button className="free-quote-btn-2">
                      Get a free quote
                    </button>
                    <div className="call">
                      <img
                        src={callIcon}
                        alt="call-icon"
                        className="call-icon"
                      />
                      <div className="call-number">
                        <span>Call us now</span>
                        <a href="tel:+998907917119">(90) 791 - 71 - 19</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="articles">
              <div className="article-heading">
                <h1>Articles & resources</h1>
                <div className="article-buttons">
                  <btton className="free-quote-btn-2">Get a free quote</btton>
                  <button className="explore-services">Browse articles</button>
                </div>
              </div>
              <div className="article-cards">
                <div className="article-card">
                  <img src={articleCardFirst} alt="article-card-first" />
                  <div className="card-details">
                    <h1>
                      8 best vacuum cleaners to clean any mess for your home in
                      2022
                    </h1>
                    <span>
                      Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                      justo quis odio sit sit ac port titor sit males.
                    </span>
                    <div className="date">
                      <p>Jan 28, 2022</p>
                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="article-card">
                  <img src={articleCardSecond} alt="article-card-second" />
                  <div className="card-details">
                    <h1>
                      8 best vacuum cleaners to clean any mess for your home in
                      2022
                    </h1>
                    <span>
                      Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                      justo quis odio sit sit ac port titor sit males.
                    </span>
                    <div className="date">
                      <p>Feb 1, 2022</p>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}
