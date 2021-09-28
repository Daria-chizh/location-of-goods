import React from 'react';

class IconSwitch extends React.Component {
  render() {
    const { icon, onSwitch } = this.props;

    return (
      <span className="material-icons switchIcon" onClick={() => onSwitch()}>{icon}</span>
    );
  }
}
export default IconSwitch;

