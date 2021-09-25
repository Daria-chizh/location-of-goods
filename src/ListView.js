import React from 'react';
import ShopItem from './ShopItem';

class ListView extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <table className='list'>
        <tbody>
          { items.map((item, idx) => <ShopItem item={item} key={idx} />) }
        </tbody>
      </table>
    );
  }
}
export default ListView;

