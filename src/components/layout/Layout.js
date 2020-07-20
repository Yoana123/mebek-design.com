import React from "react"
import PropTypes from "prop-types"

import { CSSVariables, GlobalStyles } from "../styles"
import NavBar from "../navbar"
import Footer from "../footer"

const Layout = ({ children }) => {
  return (
    <>
      <>
        <CSSVariables />
        <GlobalStyles />
      </>
      <div>
        <div className="container relative">
          <NavBar />
          <div role="main" id="main" className="px-3">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
