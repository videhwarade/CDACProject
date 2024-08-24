import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const handleopeninteraction = () => {
    navigate("/farmerinteraction");
  };
  const handleopeninventory = () => {
    navigate("/farmerinventory");
  };
  const handleopenorderprocessing = () => {
    navigate("/farmerorderprocessing");
  };
  const handleopenqualityassurance = () => {
    navigate("/farmerqualityassurance");
  };
  const handleLogout = () => {
    navigate("/"); // Redirect to the login page or home page
  };
  return (
    <div>
      <section>
        <button onClick={handleLogout}>Logout</button>
      </section>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              width="800"
              height="400"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: First slide"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <image
                className="img-fluid"
                href="https://www.cbi.eu/sites/default/files/styles/hero_banner_1920_x_480_big/public/visuals/exotic-tropical-fruit_banner3_pexels-jane-doan-1132047.jpg"
              ></image>
            </svg>
          </div>
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              width="800"
              height="400"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Second slide"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <image
                className="img-fluid"
                x="0"
                y="0"
                href="https://www.lifeextension.com/-/media/lifeextension/wellness/wellness-index-jumbotrons/superfoods_hero.jpg?rev=77ad246a25eb48c2bb912a1532b4672f&h=480&w=1920&la=en&hash=A5B45C713D00B05C6883D50539F46188"
              ></image>
            </svg>
          </div>
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              width="800"
              height="400"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Third slide"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <image
                className="img-fluid"
                x="0"
                y="0"
                href="https://static.vecteezy.com/system/resources/previews/025/480/722/large_2x/vegetables-set-and-spices-for-cooking-on-dark-background-ai-generated-free-photo.jpg"
              ></image>
            </svg>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <section>
        <div className="main-content">
          <div
            className="header"
            style={{
              color: "white",
              textAlign: "center",
              padding: "20px 0",
              backgroundColor: "#343a40", // Dark background for the header
            }}
          >
            Welcome to Your Dashboard
          </div>
          <div className="container" style={{ padding: "20px" }}>
            <div className="row g-4">
              {" "}
              {/* Use Bootstrap's g-4 for spacing between columns */}
              <div className="col-xl-3">
                <div
                  className="card p-2"
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                  }}
                >
                  <h3>Inventory</h3>
                  <button
                    type="button"
                    onClick={handleopeninventory}
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
                    Open
                  </button>
                  {/* <p>This is Inventory</p> */}
                </div>
              </div>
              <div className="col-xl-3">
                <div
                  className="card p-2"
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                  }}
                >
                  <h3>Interaction</h3>
                  <button
                    type="button"
                    onClick={handleopeninteraction}
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
                    Open
                  </button>
                  {/* <p>This is some information</p> */}
                </div>
              </div>
              <div className="col-xl-3">
                <div
                  className="card p-2"
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                  }}
                >
                  <h3>OrderProcessing</h3>
                  <button
                    type="button"
                    onClick={handleopenorderprocessing}
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
                    Open
                  </button>
                </div>
              </div>
              <div className="col-xl-3">
                <div
                  className="card p-2"
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                  }}
                >
                  <h3>QualityAssurance</h3>
                  <button
                    type="button"
                    onClick={handleopenqualityassurance}
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
                    Open
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
