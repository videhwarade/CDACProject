import React, { useState, useEffect } from "react";
import axios from "axios";

// API base URL
const API_BASE_URL = "http://localhost:8082/inventory";

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    quantity: "",
    quality: "",
    cost: "",
    harvestDate: "",
  });
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getall`);
      setInventory(response.data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  const handleAddItem = async () => {
    try {
      if (editItem) {
        await axios.put(`${API_BASE_URL}/update/${newItem.id}`, newItem);
      } else {
        const response = await axios.post(
          `${API_BASE_URL}/new/create`,
          newItem
        );
        const createdItemId = response.data.id;
        setNewItem((prevState) => ({ ...prevState, id: createdItemId }));
      }
      fetchInventory();
      resetForm();
    } catch (error) {
      console.error("Error adding/updating item:", error);
    }
  };

  const handleEditItem = (item) => {
    setEditItem(item);
    setNewItem({
      id: item.id, // Ensure ID is populated
      name: item.name,
      quantity: item.quantity,
      quality: item.quality,
      cost: item.cost,
      harvestDate: item.harvestDate,
    });
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/delete/${id}`);
      fetchInventory();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const resetForm = () => {
    setEditItem(null);
    setNewItem({
      id: "",
      name: "",
      quantity: "",
      quality: "",
      cost: "",
      harvestDate: "",
    });
  };

  return (
    <div style={{ color: "black" }}>
      <h1 style={{ textAlign: "center", marginBottom: "10px", color: "white" }}>
        Inventory Management
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddItem();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Display the ID (Read-Only) */}
        {editItem && (
          <label style={{ marginBottom: "10px" }}>
            ID:
            <input
              type="text"
              value={newItem.id}
              readOnly
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ced4da",
                boxSizing: "border-box",
                marginTop: "5px",
              }}
            />
          </label>
        )}
        <label style={{ marginBottom: "10px" }}>
          Product Name:
          <input
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ced4da",
              boxSizing: "border-box",
              marginTop: "5px",
            }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Quantity:
          <input
            type="number"
            value={newItem.quantity}
            onChange={(e) =>
              setNewItem({ ...newItem, quantity: e.target.value })
            }
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ced4da",
              boxSizing: "border-box",
              marginTop: "5px",
            }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Quality:
          <input
            type="text"
            value={newItem.quality}
            onChange={(e) =>
              setNewItem({ ...newItem, quality: e.target.value })
            }
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ced4da",
              boxSizing: "border-box",
              marginTop: "5px",
            }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Cost:
          <input
            type="number"
            step="0.01"
            value={newItem.cost}
            onChange={(e) => setNewItem({ ...newItem, cost: e.target.value })}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ced4da",
              boxSizing: "border-box",
              marginTop: "5px",
            }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Harvest Date:
          <input
            type="date"
            value={newItem.harvestDate}
            onChange={(e) =>
              setNewItem({ ...newItem, harvestDate: e.target.value })
            }
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ced4da",
              boxSizing: "border-box",
              marginTop: "5px",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "0.75rem 1.25rem",
            backgroundColor: "#007BFF",
            color: "#ffffff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          {editItem ? "Update Item" : "Add Item"}
        </button>
      </form>
      <h2 style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
        Current Inventory
      </h2>
      <ul
        style={{
          listStyleType: "none",
          flexDirection: "column",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          color: "black",
        }}
      >
        {inventory.map((item) => (
          <li
            key={item.id}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>ID: {item.id}</strong>
              <br />
              <strong>{item.name}</strong> - Quantity: {item.quantity}, Quality:{" "}
              {item.quality}, Cost: ₹{item.cost}, Harvest Date:{" "}
              {item.harvestDate}
            </div>
            <div>
              <button
                onClick={() => handleEditItem(item)}
                style={{
                  padding: "0.5rem",
                  backgroundColor: "#007BFF",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                  marginRight: "5px",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteItem(item.id)}
                style={{
                  padding: "0.5rem",
                  backgroundColor: "#dc3545",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryManagement;
