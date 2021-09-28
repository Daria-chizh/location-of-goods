import React from 'react';
import ShopCard from './ShopCard';

class CardsView extends React.Component {
  render() {
    const { cards } = this.props;

    return (
      <div className="cards">
        { cards.map((card, idx) => <ShopCard card={card} key={idx} />) }
      </div>
    );
  }
}
export default CardsView;

