import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

const FooterWrapper = styled.footer`
  padding: 40px 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: relative;
`

const Copyright = styled.p`
  line-height: var(--line-height-navigation);
  letter-spacing: 0.3px;
`

const Footer = () => {
  const intl = useIntl()

  return (
    <>
      <FooterWrapper>
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center align-items-center">
              <Copyright className="fs-1 mb-0">
                © {new Date().getFullYear()},{" "}
                {intl.formatMessage({ id: "mebekdesign" })}.
              </Copyright>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center align-items-center">
              <ul className="d-flex">
                <li className="d-flex justify-content-center align-items-center">
                  <Link className="px-1 fs-1" to="/">
                    {intl.formatMessage({ id: "home" })}
                  </Link>
                </li>
                <li className="d-flex justify-content-center align-items-center">
                  <Link className="px-1 fs-1" to="/services">
                    {intl.formatMessage({ id: "services" })}
                  </Link>
                </li>
                <li className="d-flex justify-content-center align-items-center">
                  <Link className="px-1 fs-1" to="/products">
                    {intl.formatMessage({ id: "products" })}
                  </Link>
                </li>
                <li className="d-flex justify-content-center align-items-center">
                  <Link className="px-1 fs-1" to="/gallery">
                    {intl.formatMessage({ id: "gallery" })}
                  </Link>
                </li>
                <li className="d-flex justify-content-center align-items-center">
                  <Link className="px-1 fs-1" to="/contacts">
                    {intl.formatMessage({ id: "contacts" })}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center justify-content-md-end align-items-center">
              <Link className="fs-1" to="/terms">
                {intl.formatMessage({ id: "terms" })}
              </Link>
              <Link className="ml-3 fs-1" to="/privacy">
                {intl.formatMessage({ id: "privacy" })}
              </Link>
            </div>
          </div>
        </div>
      </FooterWrapper>
    </>
  )
}

export default Footer
