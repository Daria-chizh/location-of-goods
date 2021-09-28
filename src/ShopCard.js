import React from 'react';

class ShopCard extends React.Component {
  render() {
    const { card } = this.props;

    return (
      <div className="card">
        <div className="itemName">{card.name}</div>
        <div>{card.color}</div>
        <div><img src={card.img} width="300px" /></div>
        <div className="cardFooter">
          <span className="itemPrice">${card.price}</span>
          <span className="itemAction">Add to cart</span>
        </div>
      </div>
    );
  }
}
export default ShopCard;

