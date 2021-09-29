import React from 'react';

class ShopCard extends React.Component {
  render() {
    const { card } = this.props;

    return (
      <div className="card">
        <div className="item-name">{card.name}</div>
        <div>{card.color}</div>
        <div><img src={card.img} width="300px" /></div>
        <div className="card-footer">
          <span className="item-price">${card.price}</span>
          <span className="item-action">Add to cart</span>
        </div>
      </div>
    );
  }
}
export default ShopCard;

