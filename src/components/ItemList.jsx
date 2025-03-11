import React, { useEffect, useState } from "react";
import Item from "./Item";

const API_URI = "http://localhost:5000/items"; // Change if needed

const ItemList = () => {
  const [items, setItems] = useState([]);

  // Fetch items from API
  useEffect(() => {
    fetch(API_URI)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  // Handle delete
  const deleteItem = async (id) => {
    try {
      const res = await fetch(`${API_URI}/${id}`, { method: "DELETE" });
      if (res.ok) {
        setItems(items.filter((item) => item.id !== id)); // Update state
      } else {
        console.error("Failed to delete item");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="item-list">
      <h2>Component List</h2>
      {items.length > 0 ? (
        items.map((item) => <Item key={item.id} item={item} onDelete={deleteItem} />)
      ) : (
        <p>No components available</p>
      )}
    </div>
  );
};

export default ItemList;
