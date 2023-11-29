// Assuming this is your Home component
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-4">Welcome to My Product Management App</h1>
          <p className="lead">
            Simplify product management with our easy-to-use application.
          </p>
          <Link to="/products" className="btn btn-primary btn-lg">
            Explore Products
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section my-5">
        <div className="container">
          <div className="row">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="fas fa-list-ul fa-3x mb-3"></i>
                <h3>Manage Products</h3>
                <p>
                  Easily add, edit, and delete products with our intuitive
                  interface.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="fas fa-search fa-3x mb-3"></i>
                <h3>Search Functionality</h3>
                <p>
                  Efficiently search and filter products to find what you need.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="fas fa-check-circle fa-3x mb-3"></i>
                <h3>Update Status</h3>
                <p>Toggle the status of products with a simple click.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
