import React from "react"
import { Link } from "gatsby"

import tangoMail from "../../images/tango-mail-icon.svg"
import tangoPage from "../../images/tango-page-icon.svg"

import {
  SidebarWrapper,
  SidebarMenu,
  EducationBadge,
} from "./styles/PageSidebarStyles"

const PageSidebar = ({ children, parentChildren, currentPage, parent }) => {
  const getParentContent = () =>
    // If Page with no children, Show default text
    children.edges.length === 0 ? (
      <>
        <li className="sidebar-menu-header">
          <img src={tangoMail} alt="Tango Mail" />
          <span>Mailing List</span>
        </li>
        <p>
          If want to be informed when new trends are published?
          <br />
          Just eMail us with your Contact Information{" "}
          <a href="mailto:jdoe@gmail.net">John Doe</a>
        </p>
      </>
    ) : (
      // if Page with children: Show Menu
      <>
        <li className="sidebar-menu-header">
          <img src={tangoPage} alt="Tango Page" />{" "}
          <span dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        </li>
        {children.edges.map(child => (
          <li key={child.node.id}>
            <Link to={child.node.link}>
              <span dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            </Link>
          </li>
        ))}
      </>
    )

  const getChildContent = () => (
    <div>
      <li className="sidebar-menu-header">
        <img src={tangoPage} alt="Tango Page" />{" "}
        <span dangerouslySetInnerHTML={{ __html: parent.title }} />
      </li>
      {parentChildren.edges.map(child => (
        <li
          key={child.node.id}
          className={
            currentPage.id === child.node.id ? "sidebar-highlighted" : ""
          }
        >
          {currentPage.id === child.node.id ? (
            <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
          ) : (
            <Link to={child.node.link}>
              <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
            </Link>
          )}
        </li>
      ))}
    </div>
  )

  return (
    <SidebarWrapper className="col-lg-3">
      {currentPage.acf.education ? (
        <EducationBadge className="tango-call-to-action-education">
          <a href="mailto:jdoe@gmail.net">Enroll in a course</a>
        </EducationBadge>
      ) : null}
      <SidebarMenu className="tango-sidebar-menu tango-page-sidebar-text">
        {currentPage.wordpress_parent === 0
          ? getParentContent()
          : getChildContent()}
      </SidebarMenu>
    </SidebarWrapper>
  )
}

export default PageSidebar
