// ./src/pages/poll.js
import React from 'react';
import PropTypes from 'prop-types';
import { Router, navigate } from '@reach/router';

import Poll from '../../containers/Poll';

const PrivateRoute = ({ component: Component, location, ...rest}) => {
  if (!location.pathname.match(/\/poll\//)) {
    navigate(`/`)
    return null
  }

  return <Component {...rest} />
}
PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

const PollPage = ({ uid, signIn, firebase }) => {
  return (
    <Router>
      <PrivateRoute
        path="/poll/:pollId"
        component={Poll}
        uid={uid}
        signIn={signIn}
        firebase={firebase} />
    </Router>
  )
}

PollPage.propTypes = {
  uid: PropTypes.string,
  signIn: PropTypes.func,
}

export default PollPage