import React from "react"

import tangoFB from "../images/tango-facebook-icon.svg"
import tangoIG from "../images/tango-instagram-icon.svg"
import tangoLI from "../images/tango-linkedin-icon.svg"

import { FooterWrapper } from "./styles/FooterStyles"

const Footer = () => (
  <FooterWrapper>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h3>John Smith</h3>
          <p className="tango-contact">
            <a href="mailto:jsmith@tango.dev">jsmith@tango.dev</a>
          </p>
          <p className="tango-contact">(888)-555-1212</p>
          <span className="social">
            <a
              href="https://creativedev.pro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tangoLI} alt="tango-li" />
            </a>
          </span>
        </div>

        <div className="col-md-4">
          <h3>Robert Wagner</h3>
          <p className="tango-contact">
            <a href="mailto:rwagner@tango.dev">rwagner@tango.dev</a>
          </p>
          <p className="tango-contact">(800)-555-1111</p>
          <span className="social">
            <a
              href="https://creativedev.pro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tangoFB} alt="tango-fb" />
            </a>
          </span>
        </div>

        <div className="col-md-4">
          <h3>Stephany Powers</h3>
          <p className="tango-contact">
            <a href="mailto:spowers@tango.dev">spowers@tango.dev</a>
          </p>
          <p className="tango-contact">(888)-123-4567</p>
          <span className="social">
            <a
              href="https://creativedev.pro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tangoIG} alt="tango-ig" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </FooterWrapper>
)

export default Footer
