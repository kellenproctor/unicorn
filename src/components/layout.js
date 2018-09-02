import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Container from '../styledComponents/layout'
import './layout.css'

const LayoutContainer = Container.extend`
  padding-top: 0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}>
          <html lang="en" />
        </Helmet>
        <Header
          //background="background-image: linear-gradient(0deg, #00701a 0%, #2AFD98 100%)"
          background="background-image: linear-gradient(116deg, #08aeea 0%, #2af598 100%)"
          title={data.site.siteMetadata.title}
        />
        <LayoutContainer>{children}</LayoutContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
