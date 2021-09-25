import React from 'react';

class ShopItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <tr className='item'>
        <td><img width='100px' src={item.img} /></td>
        <td><span className='itemName'>{item.name}</span></td>
        <td>{item.color}</td>
        <td><span className='itemPrice'>${item.price}</span></td>
        <td><span className='itemAction'>Add to cart</span></td>
      </tr>
    );
  }
}
export default ShopItem;

