import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { NavigationWrapper } from "./styles/NavigationStyles"

const Navigation = ({ menu }) => {
  return (
    <NavigationWrapper>
      <ul>
        {menu.items.map((item, i) => (
          <li key={i}>
            <Link to={item.url} activeClassName="nav-active">
              {item.title}
            </Link>
            {item.wordpress_children ? (
              <>
                <span>&#8964;</span>
                <ul>
                  {item.wordpress_children.map((child, ichild) => (
                    <li key={ichild}>
                      <Link to={child.url} activeClassName="nav-active">
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </NavigationWrapper>
  )
}

Navigation.propTypes = {
  menu: PropTypes.object,
}

export default Navigation
