import React from "react";
import "./Footer.css";
import img17 from "../images/img.17.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Logo + Description */}
        <div className="footer-brand">
          <img src={img17} alt="Company Logo" className="footer-logo" />
          <p className="footer-text">
            Your trusted eCommerce store. Shop with us for the best deals,
            quality products, and fast delivery 🚚
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </div>

        {/* Customer Support */}
        <div className="footer-links">
          <h4>Support</h4>
          <Link to="/faq">FAQ</Link>
          <Link to="/shipping">Shipping</Link>
          <Link to="/returns">Returns</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>

      {/* Social + Bottom */}
      <div className="footer-bottom">
        <div className="footer-social">
          <FaFacebook size={28} />
          <FaInstagram size={28} />
          <FaYoutube size={28} />
        </div>
        <p>© {new Date().getFullYear()} Generic eCommerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;








// import React from "react";
// import "./Footer.css";
// import img17 from "../images/img.17.svg";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div>
//       <div className="footer">
//         <div className="logo">
//           <img src={img17} alt="" />
//         </div>
//         <div className="fles">
//           <Link to="/">
//             <a className="nav-link active" aria-current="page">
//               Home
//             </a>
//           </Link>
//           <Link to="/shop">
//             <a className="nav-link active" aria-current="page">
//               Shop
//             </a>
//           </Link>
//           <Link to="/about">
//             <a className="nav-link active" aria-current="page">
//               About
//             </a>
//           </Link>
//           <Link to="/contact">
//             <a className="nav-link active" aria-current="page">
//               Contact
//             </a>
//           </Link>
//           <Link to="/cart">
//             <a className="nav-link active" aria-current="page">
//               Cart
//             </a>
//           </Link>
          
//         </div>
//         <div className="ins">
//           <FaFacebook className="ice" size={30} />
//           <FaInstagram className="ice" size={30} />
//           <FaYoutube className="ice" size={30} />
//         </div>
//       </div>
//       <div className="fin">
//         <hr />
//         <p>Copyright © 2025 Generic eCommerce</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
