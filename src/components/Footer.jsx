import React from "react";
import '../styles/footer.css';

const Footer = () => {
  return (
    <section id="contact">
      <footer className="bg-dark text-white pt-4 mt-4">
      <div className="container">
        <div className="row">
          {/* About Me */}
          <div className="col-md-4">
            <h5>About Me</h5>
            <p>
              I am a passionate web developer specializing in creating amazing
              websites and applications.
            </p>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>
              Email:{" "}
              <a href="mailto:avvariprabhas24@gmail.com" className="text-white">
                avvariprabhas24@gmail.com
              </a>
            </p>
            <p>Phone: +91 8555824986</p>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5>Follow Me</h5>
            <a
              href="https://www.linkedin.com/in/prabhas-avvari24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a
              href="https://github.com/prabhasavvari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a
              href="https://x.com/PrabhasAvvari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-3 border-top border-secondary">
        <p>© 2024 Prabhasavvari. All Rights Reserved.</p>
      </div>
    </footer>

    </section>
  );
};

export default Footer;
