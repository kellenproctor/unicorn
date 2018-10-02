// ./src/components/layout
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import FirebaseContext from '../containers/FirebaseContext'
import Auth from '../containers/Auth'
import Header from './header'
import Container from '../styledComponents/layout'
import './layout.css'

const LayoutContainer = styled(Container)`
  padding-top: 0;
`

const Layout = ({ data, children, props }) => (
  <FirebaseContext.Consumer>
    {firebase => (
      <Auth firebase={firebase}>
        {auth => (
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
              {...auth}
            />
            <LayoutContainer>
              {React.Children.map(children, child => (
                React.cloneElement(child, {
                  ...props,
                  ...auth,
                  firebase
                })
              ))}
            </LayoutContainer>
          </>
        )}
      </Auth>
    )}
  </FirebaseContext.Consumer>
)

export default props => (
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
    render={data => <Layout data={data} {...props} />}
  />
)

Layout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }),
  children: PropTypes.node.isRequired,
}