import React, { useState } from "react";
import axios from "axios";
import './CreateItem.css';

const CreateItem = () => {
  const [item, setItem] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/items", item);
      setItem({ name: "", description: "" });
      alert("Item added successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-item">
      <h2>Create New Item</h2>
      <form onSubmit={handleSubmit} className="item-form">
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          placeholder="Item Name"
          className="input-field"
        />
        <textarea
          name="description"
          value={item.description}
          onChange={handleChange}
          placeholder="Item Description"
          className="input-field"
        />
        <button type="submit" className="submit-btn">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default CreateItem;
