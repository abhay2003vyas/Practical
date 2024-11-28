import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import CreateItem from "./components/CreateItem/CreateItem";
import Search from "./components/Search/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import './styles.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("https://practical-ck2g.onrender.com/api/items");
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <Navbar />
      <Search searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <Routes>
        <Route path="/" element={<ItemList items={filteredItems} />} />
        <Route path="/create" element={<CreateItem />} />
      </Routes>
    </Router>
  );
};

export default App;
