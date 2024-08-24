import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Registration() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const x1 = useRef();
  const x2 = useRef();
  const x3 = useRef();

  async function f1(event) {
    event.preventDefault();

    const userName = x1.current.value;
    const email = x2.current.value;
    const password = x3.current.value;

    const record = {
      role,
      userName,
      email,
      password,
    };

    try {
      const response = await axios.post(
        `http://localhost:8082/${role}/new/create`,
        record
      );
     
      navigate("/login", { state: { message: response.data.message } });
    } catch (error) {
      console.error("There was an error registering the user!", error);
    }
  }

  function handleRoleChange(event) {
    setRole(event.target.value);
  }

  return (
    <div>
      <form
        onSubmit={f1}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Register
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <label
              htmlFor="role"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Role:
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <label>
                <input
                  type="radio"
                  id="farmer"
                  name="role"
                  checked={role === "farmer"}
                  onChange={handleRoleChange}
                  value="farmer"
                  required
                />
                <span style={{ marginLeft: "5px" }}>Farmer</span>
              </label>
              <label>
                <input
                  type="radio"
                  id="merchant"
                  name="role"
                  checked={role === "merchant"}
                  onChange={handleRoleChange}
                  value="merchant"
                  required
                />
                <span style={{ marginLeft: "5px" }}>Merchant(Admin)</span>
              </label>
              <label>
                <input
                  type="radio"
                  id="retailer"
                  name="role"
                  checked={role === "retailer"}
                  onChange={handleRoleChange}
                  value="retailer"
                  required
                />
                <span style={{ marginLeft: "5px" }}>Retailer</span>
              </label>
            </div>
          </div>

          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <label
              htmlFor="username"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              UserName:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              ref={x1}
              required
              style={{
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={x2}
              required
              style={{
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              ref={x3}
              required
              style={{
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

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
              marginBottom: "1rem",
            }}
          >
            Register
          </button>
          <section style={{ textAlign: "center", fontWeight: "bold" }}>
            Already have an account?
            <Link className="login" to="/login" style={{ paddingLeft: 10 }}>
              Login
            </Link>
          </section>
        </div>
      </form>
    </div>
  );
}



// import React, { useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export function Registration() {
//   const [role, setRole] = useState("");
//   const navigate = useNavigate();
//   const x1 = useRef();
//   const x2 = useRef();
//   const x3 = useRef();

//   async function f1(event) {
//     event.preventDefault(); // Prevent the default form submission

//     const userName = x1.current.value;
//     const email = x2.current.value;
//     const password = x3.current.value;

//     const record = {
//       role: role,
//       userName: userName,
//       email: email,
//       password: password,
//     };

//     try {
//       const response = await axios.post(
//         `http://localhost:8082/${role}/new/create`,
//         record
//       );
//       console.log(response.data);
//       navigate("/login", { state: { message: response.data } });
//     } catch (error) {
//       console.error("There was an error registering the user!", error);
//     }
//   }

//   function handleRoleChange(event) {
//     setRole(event.target.value);
//   }

//   return (
//     <div>
//       <form
//         onSubmit={f1}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           maxWidth: "400px",
//           margin: "0 auto",
//           padding: "20px",
//           backgroundColor: "#f8f9fa",
//           borderRadius: "8px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "1rem",
//             fontWeight: "bold",
//           }}
//         >
//           Register
//         </h2>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//             marginBottom: "1rem",
//           }}
//         >
//           <div
//             style={{
//               marginBottom: "15px",
//             }}
//           >
//             <label
//               htmlFor="role"
//               style={{
//                 display: "block",
//                 marginBottom: "5px",
//                 color: "#555",
//               }}
//             >
//               Role:
//             </label>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "20px",
//               }}
//             >
//               <label>
//                 <input
//                   type="radio"
//                   id="farmer"
//                   name="role"
//                   checked={role === "farmer"}
//                   onChange={handleRoleChange}
//                   value="farmer"
//                   required
//                 />
//                 <span style={{ marginLeft: "5px" }}>Farmer</span>
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   id="merchant"
//                   name="role"
//                   checked={role === "merchant"}
//                   onChange={handleRoleChange}
//                   value="merchant"
//                   required
//                 />
//                 <span style={{ marginLeft: "5px" }}>Merchant(Admin)</span>
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   id="retailer"
//                   name="role"
//                   checked={role === "retailer"}
//                   onChange={handleRoleChange}
//                   value="retailer"
//                   required
//                 />
//                 <span style={{ marginLeft: "5px" }}>Retailer</span>
//               </label>
//             </div>
//           </div>

//           <div
//             style={{
//               marginBottom: "15px",
//             }}
//           >
//             <label
//               htmlFor="username"
//               style={{
//                 display: "block",
//                 marginBottom: "5px",
//                 color: "#555",
//               }}
//             >
//               UserName:
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               ref={x1}
//               required
//               style={{
//                 padding: "5px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//                 width: "100%",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>

//           <div
//             style={{
//               marginBottom: "15px",
//             }}
//           >
//             <label
//               htmlFor="email"
//               style={{
//                 display: "block",
//                 marginBottom: "5px",
//                 color: "#555",
//               }}
//             >
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               ref={x2}
//               required
//               style={{
//                 padding: "5px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//                 width: "100%",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>

//           <div
//             style={{
//               marginBottom: "15px",
//             }}
//           >
//             <label
//               htmlFor="password"
//               style={{
//                 display: "block",
//                 marginBottom: "5px",
//                 color: "#555",
//               }}
//             >
//               Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               ref={x3}
//               required
//               style={{
//                 padding: "5px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//                 width: "100%",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             style={{
//               padding: "0.75rem 1.25rem",
//               backgroundColor: "#007BFF",
//               color: "#ffffff",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//               fontSize: "16px",
//               marginBottom: "1rem",
//             }}
//           >
//             Register
//           </button>
//           <section style={{ textAlign: "center", fontWeight: "bold" }}>
//             Already have an account?
//             <Link className="login" to="/login" style={{ paddingLeft: 10 }}>
//               Login
//             </Link>
//           </section>
//         </div>
//       </form>
//     </div>
//   );
// }