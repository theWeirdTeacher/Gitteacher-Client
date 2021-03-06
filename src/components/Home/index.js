import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../Layout';
import agent from '../../agent';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.common.appName,
  menuOpen: state.common.menuOpen
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) => dispatch({ type: 'HOME_PAGE_LOADED', payload }),
  openMenu: (payload) => dispatch({ type: 'OPEN_MENU', payload }),
  closeMenu: (payload) => dispatch({ type: 'CLOSE_MENU', payload })
});

const Home = (props) => {
  return (
    <div>
      <p>{props.appName}</p>
      <p>
        <Link to="/@a random user">
          <Button variant="contained" color="primary">User Page</Button>
        </Link>
      </p>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);