import React from 'react';
import PropTypes from 'prop-types';

class IconSwitch extends React.Component {
  render() {
    const { icon, onSwitch } = this.props;

    return (
      <span className="material-icons switch-icon" onClick={() => onSwitch()}>{icon}</span>
    );
  }
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
