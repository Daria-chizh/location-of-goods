import React from 'react';
import ShopItem from './ShopItem';
import PropTypes from 'prop-types';

class ListView extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <table className="list">
        <tbody>
          { items.map((item, idx) => <ShopItem item={item} key={idx} />) }
        </tbody>
      </table>
    );
  }
}

ListView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      name: PropTypes.string,
      color: PropTypes.string,
      price: PropTypes.string,
    }),
  ).isRequired,
};

export default ListView;
