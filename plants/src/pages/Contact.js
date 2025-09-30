import React from "react";
import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <section>
        <div className="wel">
          <h4>Contact Us</h4>
          <h1>
            <b>Let’s Connect</b>
          </h1>
          <br />
        </div>
      </section>
      <section>
        <div className="fff">
          <div className="send">
            <h1>Send us Message</h1>
            <div className="ooo">
              <i><FaPhoneAlt size={30}/></i>
              <div>
                <h5>Phone</h5>
                <p>555-1234-678</p>
              </div>
            </div>
            <div className="ooo">
              <i><MdEmail size={30}/></i>
              <div>
                <h5>Email</h5>
                <p>mail@example.com</p>
              </div>
            </div>
            <div className="ooo">
              <i><FaLocationDot size={30}/></i>
              <div>
                <h5>Address</h5>
                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
              </div>
            </div>
          </div>
          <div className="form-container">
            <form>
              <label for="name">Name *</label>
              <input type="text" id="name" name="name" required />

              <label for="email">Email *</label>
              <input type="email" id="email" name="email" required />

              <label for="phone">Phone *</label>
              <input type="tel" id="phone" name="phone" required />

              <label for="message">Message</label>
              <textarea id="message" name="message" rows="4"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <section>
      <div className="ready">
      <h1>Ready to Find your Perfect Plant?</h1>
      <p>
        Browse our online store or visit us in person to <br />
        experience the beauty of nature.
      </p>
      <button>Shop Now</button>
    </div>
      </section>
    </div>
  );
};

export default Contact;
