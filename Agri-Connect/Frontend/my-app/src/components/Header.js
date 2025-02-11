import { Link } from "react-router-dom";
function Header() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Link class="navbar-brand" to="">
          Agri-Connect
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="about">
               About
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="contactus"
              >
                Contact-Us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>  
  );
}
export default Header;