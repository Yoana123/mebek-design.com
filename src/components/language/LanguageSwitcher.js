import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import styled from "styled-components"

const LanguageSwitcherButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  display: inline;
  margin: 0;
  padding: 0;

  :focus {
    outline: none;
  }
`

const LanguageSwitcher = () => {
  return (
    <div className="d-none d-md-flex">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => {
            if (language === currentLocale) {
              return null
            }

            return (
              <LanguageSwitcherButton
                key={language}
                onClick={() => changeLocale(language)}
              >
                {language}
              </LanguageSwitcherButton>
            )
          })
        }
      </IntlContextConsumer>
    </div>
  )
}

export default LanguageSwitcher
