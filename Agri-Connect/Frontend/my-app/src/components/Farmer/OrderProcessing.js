// import React, { useState, useEffect } from "react";

// // Mock data for initial orders
// const initialOrders = [
//   {
//     id: 1,
//     product: "Apples",
//     quantity: 50,
//     status: "Pending",
//     deliveryDate: "2024-08-15",
//   },
//   {
//     id: 2,
//     product: "Oranges",
//     quantity: 30,
//     status: "Shipped",
//     deliveryDate: "2024-08-12",
//   },
// ];

// const OrderProcessing = () => {
//   const [orders, setOrders] = useState(initialOrders);
//   const [newOrder, setNewOrder] = useState({
//     product: "",
//     quantity: "",
//     status: "Pending",
//     deliveryDate: "",
//   });
//   const [editOrder, setEditOrder] = useState(null);

//   useEffect(() => {
//     // Fetch orders data from an API or local storage if needed
//   }, []);

//   const handleAddOrder = () => {
//     if (editOrder) {
//       setOrders(
//         orders.map((order) =>
//           order.id === editOrder.id ? { ...editOrder, ...newOrder } : order
//         )
//       );
//       setEditOrder(null);
//     } else {
//       setOrders([...orders, { id: Date.now(), ...newOrder }]);
//     }
//     setNewOrder({
//       product: "",
//       quantity: "",
//       status: "Pending",
//       deliveryDate: "",
//     });
//   };

//   const handleEditOrder = (order) => {
//     setEditOrder(order);
//     setNewOrder(order);
//   };

//   const handleDeleteOrder = (id) => {
//     setOrders(orders.filter((order) => order.id !== id));
//   };

//   const handleStatusChange = (id, status) => {
//     setOrders(
//       orders.map((order) => (order.id === id ? { ...order, status } : order))
//     );
//   };

//   return (
//     <div
//       style={{
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//         maxWidth: "600px",
//         margin: "auto",
//         color: "white",
//       }}
//     >
//       <h1
//         style={{ fontSize: "24px", marginBottom: "20px", textAlign: "center" }}
//       >
//         Order Processing
//       </h1>

//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleAddOrder();
//         }}
//         style={{
//           marginBottom: "20px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "15px",
//         }}
//       >
//         <label style={{ display: "flex", flexDirection: "column" }}>
//           Product:
//           <input
//             type="text"
//             value={newOrder.product}
//             onChange={(e) =>
//               setNewOrder({ ...newOrder, product: e.target.value })
//             }
//             required
//             style={{
//               padding: "10px",
//               fontSize: "14px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               marginTop: "5px",
//             }}
//           />
//         </label>
//         <label style={{ display: "flex", flexDirection: "column" }}>
//           Quantity:
//           <input
//             type="number"
//             value={newOrder.quantity}
//             onChange={(e) =>
//               setNewOrder({ ...newOrder, quantity: e.target.value })
//             }
//             required
//             style={{
//               padding: "10px",
//               fontSize: "14px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               marginTop: "5px",
//             }}
//           />
//         </label>
//         <label style={{ display: "flex", flexDirection: "column" }}>
//           Status:
//           <select
//             value={newOrder.status}
//             onChange={(e) =>
//               setNewOrder({ ...newOrder, status: e.target.value })
//             }
//             required
//             style={{
//               padding: "10px",
//               fontSize: "14px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               marginTop: "5px",
//             }}
//           >
//             <option value="Pending">Pending</option>
//             <option value="Shipped">Shipped</option>
//             <option value="Delivered">Delivered</option>
//           </select>
//         </label>
//         <label style={{ display: "flex", flexDirection: "column" }}>
//           Delivery Date:
//           <input
//             type="date"
//             value={newOrder.deliveryDate}
//             onChange={(e) =>
//               setNewOrder({ ...newOrder, deliveryDate: e.target.value })
//             }
//             required
//             style={{
//               padding: "10px",
//               fontSize: "14px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               marginTop: "5px",
//             }}
//           />
//         </label>
//         <button
//           type="submit"
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#28A745",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             alignSelf: "flex-start",
//           }}
//         >
//           {editOrder ? "Update Order" : "Add Order"}
//         </button>
//       </form>

//       <h2
//         style={{
//           fontSize: "20px",
//           marginBottom: "10px",
//           textAlign: "center",
//           color: "white",
//         }}
//       >
//         Current Orders
//       </h2>
//       <ul
//         style={{
//           listStyleType: "none",
//           paddingLeft: "0",
//           marginTop: "0",
//           marginBottom: "20px",
//           color: "black",
//         }}
//       >
//         {orders.map((order) => (
//           <li key={order.id} style={{ marginBottom: "10px" }}>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "10px",
//                 padding: "10px",
//                 backgroundColor: "#f8f9fa",
//                 borderRadius: "5px",
//                 border: "1px solid #e9ecef",
//               }}
//             >
//               <span>
//                 <strong>{order.product}</strong> - Quantity: {order.quantity},
//                 Status: {order.status}, Delivery Date: {order.deliveryDate}
//               </span>
//               <div style={{ display: "flex", gap: "10px" }}>
//                 <button
//                   onClick={() => handleEditOrder(order)}
//                   style={{
//                     padding: "5px 10px",
//                     backgroundColor: "#007BFF",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDeleteOrder(order.id)}
//                   style={{
//                     padding: "5px 10px",
//                     backgroundColor: "#DC3545",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Delete
//                 </button>
//                 {order.status !== "Delivered" && (
//                   <select
//                     value={order.status}
//                     onChange={(e) =>
//                       handleStatusChange(order.id, e.target.value)
//                     }
//                     style={{
//                       padding: "5px",
//                       fontSize: "14px",
//                       borderRadius: "5px",
//                       border: "1px solid #ccc",
//                       cursor: "pointer",
//                     }}
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Shipped">Shipped</option>
//                     <option value="Delivered">Delivered</option>
//                   </select>
//                 )}
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OrderProcessing;
import React, { useState, useEffect } from "react";
import axios from "axios";

// API base URL
const API_BASE_URL = "http://localhost:8082/farmerorderprocessing";

const OrderProcessing = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    orderId: "",
    productName: "",
    quantity: "",
    status: "Pending",
    deliveryDate: "",
  });
  const [editOrder, setEditOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getallorders`);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleAddOrder = async () => {
    try {
      if (editOrder) {
        await axios.put(`${API_BASE_URL}/update/${newOrder.orderId}`, newOrder);
      } else {
        const response = await axios.post(
          `${API_BASE_URL}/new/create`,
          newOrder
        );
        const createdOrderId = response.data.orderId;
        setNewOrder((prevState) => ({ ...prevState, orderId: createdOrderId }));
      }
      fetchOrders();
      resetForm();
    } catch (error) {
      console.error("Error adding/updating order:", error);
    }
  };

  const handleEditOrder = (order) => {
    setEditOrder(order);
    setNewOrder({
      orderId: order.orderId,
      productName: order.productName,
      quantity: order.quantity,
      status: order.status,
      deliveryDate: order.deliveryDate,
    });
  };

  const handleDeleteOrder = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/delete/${id}`);
      fetchOrders();
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const resetForm = () => {
    setEditOrder(null);
    setNewOrder({
      orderId: "",
      productName: "",
      quantity: "",
      status: "Pending",
      deliveryDate: "",
    });
  };

  return (
    <div style={{ color: "black" }}>
      <h1 style={{ textAlign: "center", marginBottom: "10px", color: "white" }}>
        Order Processing
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddOrder();
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
        {editOrder && (
          <label style={{ marginBottom: "10px" }}>
            ID:
            <input
              type="text"
              value={newOrder.orderId}
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
            value={newOrder.productName}
            onChange={(e) =>
              setNewOrder({ ...newOrder, productName: e.target.value })
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
          Quantity:
          <input
            type="number"
            value={newOrder.quantity}
            onChange={(e) =>
              setNewOrder({ ...newOrder, quantity: e.target.value })
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
          Status:
          <select
            value={newOrder.status}
            onChange={(e) =>
              setNewOrder({ ...newOrder, status: e.target.value })
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
          >
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </label>
        <label style={{ marginBottom: "10px" }}>
          Delivery Date:
          <input
            type="date"
            value={newOrder.deliveryDate}
            onChange={(e) =>
              setNewOrder({ ...newOrder, deliveryDate: e.target.value })
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
          {editOrder ? "Update Order" : "Add Order"}
        </button>
      </form>

      <h2 style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
        Current Orders
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
        {orders.map((order) => (
          <li
            key={order.orderId}
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
              <strong>ID: {order.orderId}</strong>
              <br />
              <strong>{order.productName}</strong> - Quantity: {order.quantity},
              Status: {order.status}, Delivery Date: {order.deliveryDate}
            </div>
            <div>
              <button
                onClick={() => handleEditOrder(order)}
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
                onClick={() => handleDeleteOrder(order.orderId)}
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
              {order.status !== "Delivered" && (
                <select
                  value={order.status}
                  onChange={(e) =>
                    handleAddOrder({ ...order, status: e.target.value })
                  }
                  style={{
                    padding: "5px",
                    fontSize: "14px",
                    borderRadius: "4px",
                    border: "1px solid #ced4da",
                    cursor: "pointer",
                  }}
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderProcessing;
