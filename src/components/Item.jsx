import React from "react";

const Item = ({ item, onDelete }) => {
  return (
    <div className="item">
      <p>{item.name}</p>
      <button className="delete-btn" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
};

export default Item;
