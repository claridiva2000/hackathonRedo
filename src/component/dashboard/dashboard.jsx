import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import Spinner from '../messages/spinner';
import Chefcardlist from '../cardlist/chefcardlist';
import AddRecipe from '../addrecipe/AddRecipe';

const Dashboard = ({
  getCurrentProfile,
  auth,
  chef,
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  const [displayEditAccount, toggleDisplayEditAccount] = useState(false);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Dashboard</h1>
      <p>Welcome, Chef {chef.lastname}</p>
      <div>
        <img src={chef.profilepic} alt="" />
      </div>
      <i
        className="fas fa-user-edit"
        onClick={() => toggleDisplayEditAccount(!displayEditAccount)}
      />

      {displayEditAccount === true ? (
        <div style={{marginBottom:'15px'}}>
          <form>
            <input type="name" placeholder='name' style={{padding:'0'}} />
            <input type="location" placeholder='location' style={{padding:'0'}} />
            <input type="email" placeholder='email' style={{padding:'0'}}/>
            <input type="profilepic" placeholder='Updated Profile Picture url'style={{padding:'0'}} />
          </form>
        </div>
      ) : (
        <Fragment>
          <p>Location: {chef.location}</p>
          <p>email: {chef.email}</p>
        </Fragment>
      )}

      <div>
        <AddRecipe />
        <Chefcardlist name={chef.firstname} />
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  chef: state.profile.chef
  // recipes: state.profile.recipes
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
