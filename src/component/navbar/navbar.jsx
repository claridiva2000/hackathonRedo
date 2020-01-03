import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authlinks = (
    <div>
      <Link to="/"><i className="fas fa-utensils"></i>  All Recipes</Link>
      <Link to="/dashboard"><i className="far fa-user"></i>  Dashboard</Link>
      <Link onClick={logout}>
        <i className="fas fa-sign-out-alt" /> log Out
      </Link>
    </div>
  );

  const guestlinks = (
    <div className='buttons'>
      <button className="signupbtn">
        <Link to="/register">SignUp</Link>
      </button>

      <button className="loginbtn">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );

  return (
    <div className="header">
      <div className="smlogo">
        <img
          className="hat"
          src="https://files.slack.com/files-pri/T4JUEB3ME-FL404HDB5/logo.jpg"
          alt="chefhat"
        />
        <div>
          <h1>Chef</h1>
          <h2>Portfolio</h2>
        </div>
      </div>

     
        {isAuthenticated ? authlinks : guestlinks} 
    
    </div>
  );
};

navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(navbar);
