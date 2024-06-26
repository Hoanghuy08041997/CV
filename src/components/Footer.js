import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center footer-infor">
          <div className="col-lg-6">
            <h3 className="mb-2">Contact me:</h3>
            <p className="mb-2">Email: hoanghuy08041977@gmail.com</p>
            <p>Phone: +123 456 789</p>
          </div>
          <div className="col-lg-6 footer-infor">
            <h3 className="mb-2">Follow me:</h3>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://www.linkedin.com/in/huyaty2003/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li className="list-inline-item"><a href="https://www.facebook.com/huyaty.2003/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li className="list-inline-item"><a href="https://github.com/Hoanghuy08041997" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
