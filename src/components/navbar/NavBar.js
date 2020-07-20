import React from "react"
import styled from "styled-components"
import { Link, useIntl } from "gatsby-plugin-intl"

import { LanguageSwitcher } from "../language"

const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavBar = () => {
  const intl = useIntl()

  return (
    <>
      <Header className="flex-column flex-md-row px-md-3 py-3">
        <Link to="/" className="mr-0 mr-md-2 py-1 d-inline-block">
          LOGO
        </Link>
        <nav>
          <ul className="d-flex flex-row">
            <li>
              <Link to="/services" className="d-block px-1 px-md-3 py-2">
                {intl.formatMessage({ id: "services" })}
              </Link>
            </li>
            <li>
              <Link to="/products" className="d-block px-1 px-md-3 py-2">
                {intl.formatMessage({ id: "products" })}
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="d-block px-1 px-md-3 py-2">
                {intl.formatMessage({ id: "gallery" })}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="d-block px-1 px-md-3 py-2">
                {intl.formatMessage({ id: "contacts" })}
              </Link>
            </li>
          </ul>
        </nav>
        <LanguageSwitcher />
      </Header>
    </>
  )
}

export default React.memo(NavBar)
