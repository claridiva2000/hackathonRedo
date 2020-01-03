import React from 'react';
//proptype 'impt'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//style
import '../../App.css';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert-${alert.alertType}`}>
      <h5>{alert.msg}</h5>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

//bring in state from alerts and turn into props
const mapStateToProps = state => ({ alerts: state.alert });

//connect
export default connect(mapStateToProps)(Alert);
