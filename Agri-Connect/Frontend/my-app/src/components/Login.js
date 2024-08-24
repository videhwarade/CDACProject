// import React, { useState } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [useremail, setUseremail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState(location.state?.message || "");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`http://localhost:8082/${role}login`, {
//         email: useremail,
//         password: password,
//       });

//       if (response.data) {
//         // if response.data is true
//         setIsLoggedIn(true);
//         setMessage("Login successful!");
//         navigate("/dashboard");
//       } else {
//         setMessage("Invalid username or password.");
//       }
//     } catch (error) {
//       console.error("There was an error during the login process!", error);
//       setMessage("An error occurred. Please try again.");
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUseremail("");
//     setPassword("");
//     setMessage("You have logged out.");
//     navigate("/"); // Redirect to the login page or home page
//   };

//   return (
//     <div style={{ paddingTop: "100px" }}>
//       {!isLoggedIn ? (
//         <form
//           id="login-form"
//           className="form-login"
//           action="/login"
//           method="POST"
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             maxWidth: "400px",
//             margin: "0 auto",
//             padding: "20px",
//             backgroundColor: "#f8f9fa",
//             borderRadius: "8px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <h2
//             style={{
//               textAlign: "center",
//               marginBottom: "1rem",
//               fontWeight: "bold",
//             }}
//           >
//             Login
//           </h2>
//           {message && (
//             <p style={{ color: "red", textAlign: "center" }}>{message}</p>
//           )}
//           <div className="form-group" style={{ marginBottom: "1rem" }}>
//             <label
//               htmlFor="login-email"
//               style={{ display: "block", marginBottom: "0.5rem" }}
//             >
//               Email:
//             </label>
//             <input
//               type="email"
//               id="login-email"
//               name="email"
//               value={useremail}
//               onChange={(e) => setUseremail(e.target.value)}
//               required
//               style={{
//                 width: "100%",
//                 padding: "0.5rem",
//                 borderRadius: "4px",
//                 border: "1px solid #ced4da",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>
//           <div className="form-group" style={{ marginBottom: "1rem" }}>
//             <label
//               htmlFor="login-password"
//               style={{ display: "block", marginBottom: "0.5rem" }}
//             >
//               Password:
//             </label>
//             <input
//               type="password"
//               id="login-password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               style={{
//                 width: "100%",
//                 padding: "0.5rem",
//                 borderRadius: "4px",
//                 border: "1px solid #ced4da",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>
//           <button
//             type="button"
//             onClick={handleLogin}
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
//             Login
//           </button>
//           <section style={{ textAlign: "center", fontWeight: "bold" }}>
//             Don't have an account?
//             <Link
//               className="register"
//               to="/registration"
//               style={{ paddingLeft: 10 }}
//             >
//               SignUp
//             </Link>
//           </section>
//         </form>
//       ) : (
//         <div style={{ textAlign: "center", color: "white" }}>
//           <h2>Welcome, {useremail}!</h2>
//           <button
//             type="button"
//             onClick={handleLogout}
//             style={{
//               padding: "0.75rem 1.25rem",
//               backgroundColor: "#dc3545",
//               color: "#ffffff",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//               fontSize: "16px",
//             }}
//           >
//             Logout
//           </button>
//           {message && <p style={{ color: "red" }}>{message}</p>}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role
  const [message, setMessage] = useState(location.state?.message || "");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8082/${role}/login`, {
        email: useremail,
        password: password,
        role: role, // Send the role along with the email and password
      });

      if (response.data) {
        setIsLoggedIn(true);
        setMessage("Login successful!");
        navigate("/dashboard");
      } else {
        setMessage("Invalid username, password, or role.");
      }
    } catch (error) {
      console.error("There was an error during the login process!", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUseremail("");
    setPassword("");
    setRole("user"); // Reset the role to default
    setMessage("You have logged out.");
    navigate("/"); // Redirect to the login page or home page
  };

  return (
    <div style={{ paddingTop: "100px" }}>
      {!isLoggedIn ? (
        <form
          id="login-form"
          className="form-login"
          action="/login"
          method="POST"
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
            Login
          </h2>
          {message && (
            <p style={{ color: "red", textAlign: "center" }}>{message}</p>
          )}
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>
              Role:
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="farmer"
                checked={role === "farmer"}
                onChange={(e) => setRole(e.target.value)}
              />
              Farmer
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="merchant"
                checked={role === "merchant"}
                onChange={(e) => setRole(e.target.value)}
              />
              Merchant(Admin)
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="retailer"
                checked={role === "retailer"}
                onChange={(e) => setRole(e.target.value)}
              />
              Retailer
            </label>
          </div>
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="login-email"
              style={{ display: "block", marginBottom: "0.5rem" }}
            >
              Email:
            </label>
            <input
              type="email"
              id="login-email"
              name="email"
              value={useremail}
              onChange={(e) => setUseremail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ced4da",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="login-password"
              style={{ display: "block", marginBottom: "0.5rem" }}
            >
              Password:
            </label>
            <input
              type="password"
              id="login-password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ced4da",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
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
            Login
          </button>
          <section style={{ textAlign: "center", fontWeight: "bold" }}>
            Don't have an account?
            <Link
              className="register"
              to="/registration"
              style={{ paddingLeft: 10 }}
            >
              SignUp
            </Link>
          </section>
        </form>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Welcome, {useremail}!</h2>
          <button
            type="button"
            onClick={handleLogout}
            style={{
              padding: "0.75rem 1.25rem",
              backgroundColor: "#dc3545",
              color: "#ffffff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Logout
          </button>
          {message && <p style={{ color: "red" }}>{message}</p>}
        </div>
      )}
    </div>
  );
}
