import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../search/searchbox';
import './header.styles.css';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const header = ({ placeholder, handleChange,auth: { isAuthenticated, loading }, logout  }) => {

  const authlinks = (
    <div>
      <Link to="/"> All Recipes</Link>
      <Link to="/dashboard">Dashboard</Link>
      <a href="#" onClick={logout}>
        <i className="fas fa-sign-out-alt" /> log Out
      </a>
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
      <div className='search'>
      <Search placeholder={placeholder} handleChange={handleChange} />
      </div>

      <div className="buttons">
      {isAuthenticated ? authlinks : guestlinks} 
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
}); 

export default connect(mapStateToProps, {logout}) (header);
