import React from 'react';
import ShopCard from './ShopCard';
import PropTypes from 'prop-types';

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

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      name: PropTypes.string,
      color: PropTypes.string,
      price: PropTypes.string,
    }),
  ).isRequired,
};

export default CardsView;
