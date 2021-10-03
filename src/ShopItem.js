import React from 'react';
import PropTypes from 'prop-types';

class ShopItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <tr className="item">
        <td><img width="100px" src={item.img} /></td>
        <td><span className="item-name">{item.name}</span></td>
        <td>{item.color}</td>
        <td><span className="item-price">${item.price}</span></td>
        <td><span className="item-action">Add to cart</span></td>
      </tr>
    );
  }
}

ShopItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default ShopItem;
