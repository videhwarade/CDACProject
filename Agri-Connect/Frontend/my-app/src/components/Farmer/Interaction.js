import React, { useState, useEffect } from "react";

// Mock data for initial products and discussions
const initialProducts = [
  { id: 1, name: "Apples", details: "Fresh and organic apples." },
  { id: 2, name: "Oranges", details: "Juicy and sweet oranges." },
];

const initialDiscussions = [
  {
    id: 1,
    productId: 1,
    message: "How are these apples harvested?",
    date: "2024-08-10",
  },
  {
    id: 2,
    productId: 2,
    message: "What is the cost per kilo?",
    date: "2024-08-11",
  },
];

const Interaction = () => {
  const [products, setProducts] = useState(initialProducts);
  const [discussions, setDiscussions] = useState(initialDiscussions);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newDiscussion, setNewDiscussion] = useState({
    productId: "",
    message: "",
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    // Fetch products and discussions from an API or local storage if needed
  }, []);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setNewDiscussion({ ...newDiscussion, productId: product.id });
  };

  const handleAddDiscussion = () => {
    setDiscussions([...discussions, { id: Date.now(), ...newDiscussion }]);
    setNewDiscussion({ ...newDiscussion, message: "" });
  };

  const filteredDiscussions = discussions.filter(
    (discussion) => discussion.productId === selectedProduct?.id
  );

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Product Discussions
      </h1>

      <div>
        <h2 style={{ fontSize: "20px", marginBottom: "10px", color: "white" }}>
          Select a Product to Discuss
        </h2>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: "10px" }}>
              <button
                onClick={() => handleProductSelect(product)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {product.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedProduct && (
        <div style={{ marginTop: "20px" }}>
          <h2
            style={{ fontSize: "20px", marginBottom: "10px", color: "white" }}
          >
            Discussions for {selectedProduct.name}
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddDiscussion();
            }}
            style={{ marginBottom: "20px" }}
          >
            <label style={{ display: "block", marginBottom: "10px" }}>
              Message:
              <textarea
                value={newDiscussion.message}
                onChange={(e) =>
                  setNewDiscussion({
                    ...newDiscussion,
                    message: e.target.value,
                  })
                }
                required
                style={{
                  display: "block",
                  width: "100%",
                  height: "100px",
                  marginTop: "5px",
                  padding: "10px",
                  fontSize: "14px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
            <label style={{ display: "block", marginBottom: "10px" }}>
              Date:
              <input
                type="date"
                value={newDiscussion.date}
                onChange={(e) =>
                  setNewDiscussion({ ...newDiscussion, date: e.target.value })
                }
                required
                style={{
                  display: "block",
                  width: "100%",
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
              }}
            >
              Add Discussion
            </button>
          </form>

          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
            Current Discussions
          </h3>
          <ul
            style={{ listStyleType: "none", paddingLeft: "0", color: "black" }}
          >
            {filteredDiscussions.map((discussion) => (
              <li key={discussion.id} style={{ marginBottom: "10px" }}>
                <div
                  style={{
                    padding: "10px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "5px",
                    border: "1px solid #e9ecef",
                  }}
                >
                  <p style={{ margin: "0" }}>
                    <strong>{discussion.message}</strong> - Date:{" "}
                    {discussion.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Interaction;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Replace with your actual API URL
// const API_URL = "http://localhost:8082/inventory";

// // Initial state and mock data are not needed anymore as we're fetching from an API

// const Interaction = () => {
//   const [products, setProducts] = useState([]);
//   const [discussions, setDiscussions] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [newDiscussion, setNewDiscussion] = useState({
//     productId: "",
//     message: "",
//     date: new Date().toISOString().split("T")[0],
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productsResponse = await axios.get(`${API_URL}/getall`);
//         setProducts(productsResponse.data);

//         const discussionsResponse = await axios.get(`${API_URL}/getall`);
//         setDiscussions(discussionsResponse.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleProductSelect = (product) => {
//     setSelectedProduct(product);
//     setNewDiscussion({ ...newDiscussion, productId: product.id });
//   };

//   const handleAddDiscussion = async () => {
//     try {
//       const response = await axios.post(`${API_URL}/new/create`, newDiscussion);
//       setDiscussions([...discussions, response.data]);
//       setNewDiscussion({ ...newDiscussion, message: "" });
//     } catch (error) {
//       console.error("Error adding discussion", error);
//     }
//   };

//   const handleDeleteDiscussion = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/delete/${id}`);
//       setDiscussions(discussions.filter((discussion) => discussion.id !== id));
//     } catch (error) {
//       console.error("Error deleting discussion", error);
//     }
//   };

//   const filteredDiscussions = discussions.filter(
//     (discussion) => discussion.productId === selectedProduct?.id
//   );

//   return (
//     <div
//       style={{
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//         color: "white",
//       }}
//     >
//       <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
//         Product Discussions
//       </h1>

//       <div>
//         <h2 style={{ fontSize: "20px", marginBottom: "10px", color: "white" }}>
//           Select a Product to Discuss
//         </h2>
//         <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
//           {products.map((product) => (
//             <li key={product.id} style={{ marginBottom: "10px" }}>
//               <button
//                 onClick={() => handleProductSelect(product)}
//                 style={{
//                   padding: "10px 20px",
//                   backgroundColor: "#007BFF",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 {product.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {selectedProduct && (
//         <div style={{ marginTop: "20px" }}>
//           <h2
//             style={{ fontSize: "20px", marginBottom: "10px", color: "white" }}
//           >
//             Discussions for {selectedProduct.name}
//           </h2>

//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleAddDiscussion();
//             }}
//             style={{ marginBottom: "20px" }}
//           >
//             <label style={{ display: "block", marginBottom: "10px" }}>
//               Message:
//               <textarea
//                 value={newDiscussion.message}
//                 onChange={(e) =>
//                   setNewDiscussion({
//                     ...newDiscussion,
//                     message: e.target.value,
//                   })
//                 }
//                 required
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "100px",
//                   marginTop: "5px",
//                   padding: "10px",
//                   fontSize: "14px",
//                   borderRadius: "5px",
//                   border: "1px solid #ccc",
//                 }}
//               />
//             </label>
//             <label style={{ display: "block", marginBottom: "10px" }}>
//               Date:
//               <input
//                 type="date"
//                 value={newDiscussion.date}
//                 onChange={(e) =>
//                   setNewDiscussion({ ...newDiscussion, date: e.target.value })
//                 }
//                 required
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   padding: "10px",
//                   fontSize: "14px",
//                   borderRadius: "5px",
//                   border: "1px solid #ccc",
//                   marginTop: "5px",
//                 }}
//               />
//             </label>
//             <button
//               type="submit"
//               style={{
//                 padding: "10px 20px",
//                 backgroundColor: "#28A745",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Add Discussion
//             </button>
//           </form>

//           <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
//             Current Discussions
//           </h3>
//           <ul
//             style={{ listStyleType: "none", paddingLeft: "0", color: "black" }}
//           >
//             {filteredDiscussions.map((discussion) => (
//               <li key={discussion.id} style={{ marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     padding: "10px",
//                     backgroundColor: "#f8f9fa",
//                     borderRadius: "5px",
//                     border: "1px solid #e9ecef",
//                   }}
//                 >
//                   <p style={{ margin: "0" }}>
//                     <strong>{discussion.message}</strong> - Date:{" "}
//                     {discussion.date}
//                     <button
//                       onClick={() => handleDeleteDiscussion(discussion.id)}
//                       style={{
//                         marginLeft: "10px",
//                         padding: "5px 10px",
//                         backgroundColor: "#DC3545",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Interaction;
