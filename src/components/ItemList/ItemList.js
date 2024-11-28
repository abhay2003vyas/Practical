import React from 'react';
import './ItemList.css';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.length > 0 ? (
        items.map(item => (
          <div className="item-card" key={item._id}>
            <h3 className="item-name">{item.name}</h3>
            <p className="item-description">{item.description}</p>
            <div className="item-card-footer">
              <span>Price: $25</span>
              <span>Added: 2 days ago</span>
            </div>
          </div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default ItemList;
