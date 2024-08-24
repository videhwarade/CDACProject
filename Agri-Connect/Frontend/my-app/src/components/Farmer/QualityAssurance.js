import React, { useState, useEffect } from "react";

// Mock data for initial products and quality checks
const initialProducts = [
  { id: 1, name: "Apples", quality: "High", lastChecked: "2024-08-10" },
  { id: 2, name: "Oranges", quality: "Medium", lastChecked: "2024-08-09" },
];

const initialQualityChecks = [
  { id: 1, productId: 1, comment: "Quality is excellent.", date: "2024-08-10" },
  {
    id: 2,
    productId: 2,
    comment: "Minor blemishes noted.",
    date: "2024-08-09",
  },
];

const QualityAssurance = () => {
  const [products, setProducts] = useState(initialProducts);
  const [qualityChecks, setQualityChecks] = useState(initialQualityChecks);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newCheck, setNewCheck] = useState({
    productId: "",
    comment: "",
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    // Fetch products and quality checks from an API or local storage if needed
  }, []);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setNewCheck({ ...newCheck, productId: product.id });
  };

  const handleAddQualityCheck = () => {
    setQualityChecks([...qualityChecks, { id: Date.now(), ...newCheck }]);
    setNewCheck({ ...newCheck, comment: "" });
  };

  const handleQualityUpdate = (id, quality) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, quality } : product
      )
    );
  };

  const filteredQualityChecks = qualityChecks.filter(
    (check) => check.productId === selectedProduct?.id
  );

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "700px",
        margin: "auto",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          marginBottom: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        Quality Assurance
      </h1>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px", color: "white" }}>
          Select a Product to Review
        </h2>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: "10px" }}>
              <button
                onClick={() => handleProductSelect(product)}
                style={{
                  padding: "10px 15px",
                  fontSize: "14px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {product.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedProduct && (
        <div>
          <h2
            style={{
              fontSize: "20px",
              marginBottom: "20px",
              textAlign: "center",
              color: "white",
            }}
          >
            Quality Check for {selectedProduct.name}
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddQualityCheck();
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            <label style={{ display: "flex", flexDirection: "column" }}>
              Comment:
              <textarea
                value={newCheck.comment}
                onChange={(e) =>
                  setNewCheck({ ...newCheck, comment: e.target.value })
                }
                required
                style={{
                  padding: "10px",
                  fontSize: "14px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginTop: "5px",
                  minHeight: "100px",
                }}
              />
            </label>
            <label style={{ display: "flex", flexDirection: "column" }}>
              Date:
              <input
                type="date"
                value={newCheck.date}
                onChange={(e) =>
                  setNewCheck({ ...newCheck, date: e.target.value })
                }
                required
                style={{
                  padding: "10px",
                  fontSize: "14px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginTop: "5px",
                }}
              />
            </label>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#28A745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              Add Quality Check
            </button>
          </form>

          <h3
            style={{
              fontSize: "18px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Current Quality Checks
          </h3>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              marginBottom: "20px",
              color: "black",
            }}
          >
            {filteredQualityChecks.map((check) => (
              <li key={check.id} style={{ marginBottom: "10px" }}>
                <div
                  style={{
                    padding: "10px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "5px",
                    border: "1px solid #e9ecef",
                  }}
                >
                  <p style={{ margin: "0" }}>
                    <strong>{check.comment}</strong> - Date: {check.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
              Update Product Quality
            </h3>
            <select
              value={selectedProduct.quality}
              onChange={(e) =>
                handleQualityUpdate(selectedProduct.id, e.target.value)
              }
              style={{
                padding: "10px",
                fontSize: "14px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default QualityAssurance;
