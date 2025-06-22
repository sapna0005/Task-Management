import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
  <footer
      style={{
        background: 'linear-gradient(90deg, #8FC1E3 0%, #3B8EA5 100%)',
        color: '#fff'
      }}
      className="pt-5 pb-4"
    >
      <div className="container text-center text-md-start">
        <div className="row">

          {/* About */}
          <div className="col-md-3 col-lg-3 col-xl-3 mb-4">
            <h5 className="text-uppercase fw-bold">Task Management</h5>
            <p>
              Manage your tasks efficiently with our easy-to-use platform. Stay organized and productive!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-lg-3 col-xl-3 mb-4">
            <h5 className="text-uppercase fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Dashboard</a></li>
              <li><a href="#" className="text-light text-decoration-none">My Tasks</a></li>
              <li><a href="#" className="text-light text-decoration-none">Team</a></li>
              <li><a href="#" className="text-light text-decoration-none">Settings</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-3 col-lg-3 col-xl-3 mb-4">
            <h5 className="text-uppercase fw-bold">Follow Us</h5>
            <a href="#" className="text-light me-3">
              <i className="bi bi-facebook fs-4"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="bi bi-twitter fs-4"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="bi bi-instagram fs-4"></i>
            </a>
            <a href="#" className="text-light">
              <i className="bi bi-linkedin fs-4"></i>
            </a>
          </div>

          {/* Newsletter (optional) */}
          <div className="col-md-3 col-lg-3 col-xl-3 mb-4">
            <h5 className="text-uppercase fw-bold">Newsletter</h5>
            <form>
              <div className="input-group1">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  aria-label="Email"
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

        </div>

        <hr className="mb-4" />

        <div className="text-center">
          © 2025 Task Management System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
