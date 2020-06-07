import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import whiteLogo from "../images/tango_logo_white.svg"
import closeButton from "../images/tango_close_button.svg"

import { Overlay } from "./styles/OverlayMenuStyles"

const OverlayMenu = ({ menuOpen, callBack }) => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query OverlayMenu {
      menu: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 2 } }
      ) {
        edges {
          node {
            items {
              title
              url
            }
          }
        }
      }
    }
  `)

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <img src={whiteLogo} alt="tango-white-logo" className="whiteLogo" />
        <ul className="overlayMenu">
          {menu.items.map((item, i) => (
            <li key={i}>
              <Link to={item.url} activeClassName="overlayActive" tabIndex="0">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="closeButton"
          onClick={callBack}
          role="button"
          tabIndex={0}
          onKeyDown={callBack}
        >
          <img src={closeButton} alt="tango-close-button" />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
