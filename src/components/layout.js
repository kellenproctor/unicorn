// ./src/components/layout
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, withPrefix } from 'gatsby'
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
                { name: 'description', content: 'Create polls for stuff and things' },
                { name: 'keywords', content: 'polling, rating' },
                { name: 'msapplication-TileColor', content: '#08AEEA'},
                { name: 'theme-color', content: '#2AF598'}
              ]}>
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={withPrefix('/favicons/apple-touch-icon.png')}
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href={withPrefix('/favicons/favicon-32x32.png')}
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href={withPrefix('/favicons/favicon-16x16.png')}
              />
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