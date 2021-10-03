import React from 'react';
import PropTypes from 'prop-types';

import CardsView from './CardsView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'view_module' };
  }

  onModeSwitch = () => {
    if (this.state.mode === 'view_list') {
      this.setState({ mode: 'view_module' });
    } else {
      this.setState({ mode: 'view_list' });
    }
  };

  render() {
    const { products } = this.props;

    const icon = this.state.mode === 'view_list' ? 'view_module' : 'view_list';
    return (
      <div>
        <IconSwitch icon={icon} onSwitch={() => this.onModeSwitch()} />
        { this.state.mode === 'view_list' ? <ListView items={products} /> : <CardsView cards={products} /> }
      </div>
    )
  }
}

Store.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      name: PropTypes.string,
      color: PropTypes.string,
      price: PropTypes.string,
    }),
  ).isRequired,
};

export default Store;
