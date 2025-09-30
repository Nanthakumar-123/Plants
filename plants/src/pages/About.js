import React from "react";
import "./About.css";
import img10 from "../images/img.10.jpg";
import img24 from "../images/img.24.png";
import img25 from "../images/img.25.jpg";
import { PiPackageFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <section>
        <div className="content">
          <h5>About</h5>
          <h1>
            <b>
              We are Passionate <br />
              About Our Work
            </b>
          </h1>
        </div>
      </section>
      <section>
        <div className="your">
          <img src={img10} alt="" />
          <div className="you">
            <h1>We strive to provide our customers with the highest quality</h1>
            <br />
            <p>
              Urban Jungle Co. was founded in 1960 by a group of plant
              enthusiasts who recognized the positive impact that plants can
              have on our lives. Whether it’s purifying the air, reducing
              stress, or simply adding a touch of beauty to your environment,
              plants are more than just decoration—they’re a lifestyle.
            </p>
            <hr />
            <br />
            <p>
              “We love what we do & create partnerships with our clients to
              ensure their digital transformation is positioned for long-term
              success.”
            </p>
            <div className="twin">
              <img src={img24} alt="" />
              <div className="kar">
                <h5>Karen Lynn</h5>
                <p>CEO & Co-founder @ Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="three">
          <h1>
            Our Core Values that Drive <br />
            Everything We Do
          </h1>
          <div className="gri">
            <div className="one">
              <PiPackageFill size={50} />
              <div>
                <h5>Passionate About Work</h5>
                <p>
                  Passion for work is a enthusiasm and excitement for what you
                  do.
                </p>
              </div>
            </div>
            <div className="one">
              <PiPackageFill size={50} />
              <div>
                <h5>Creative team members</h5>
                <p>
                  A creative team is to design and execute campaigns & encourage
                </p>
              </div>
            </div>
            <div className="one">
              <PiPackageFill size={50} />
              <div>
                <h5>Innovation solutions</h5>
                <p>
                  Using either completely concepts finding new ways of using
                  existing
                </p>
              </div>
            </div>
            <div className="one">
              <PiPackageFill size={50} />
              <div>
                <h5>Qualitiful products</h5>
                <p>
                  Product quality refers to how well a product satisfies our
                  customer
                </p>
              </div>
            </div>
            <div className="one">
              <PiPackageFill size={50} />
              <div>
                <h5>Customer satisfaction</h5>
                <p>
                  Happy customers are delighted because of the customer service
                </p>
              </div>
            </div>
            <div className="one">
              <PiPackageFill size={50} />
              <div>
                <h5>Simplicity interface</h5>
                <p>
                  Simplicity is used loosely to refer to the need to minimize a
                  process
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="miss">
      <div className="mis">
        <h1>Our Mission</h1>
        <br />
        <p>
          Our mission is to make the world a greener place, one plant at a time.
          We strive to provide our customers with the highest quality plants and
          plant care products, along with the knowledge and support to help them
          thrive.
        </p>
        <div className="quality">
          <div className="qua">
          <FaCheckCircle style={{color:"#82f317",marginTop:"3px",marginRight:"5px"}}/>
            <p>Quality and Variety</p>
          </div>
          <div className="qua">
          <FaCheckCircle style={{color:"#82f317",marginTop:"3px",marginRight:"5px"}}/>
            <p>Expert Guidance</p>
          </div>
          <div className="qua">
          <FaCheckCircle style={{color:"#82f317",marginTop:"3px",marginRight:"5px"}}/>
            <p>Sustainable Practices</p>
          </div>
          <div className="qua">
          <FaCheckCircle style={{color:"#82f317",marginTop:"3px",marginRight:"5px"}}/>
            <p>Experienced Team</p>
          </div>
        </div>
      </div>
      <img src={img25} alt="" />
    </div>
      </section>
      <section>
      <div className="ready">
      <h1>Ready to Find your Perfect Plant?</h1>
      <p>Browse our online store or visit us in person to <br/> experience the beauty of nature.</p>
      <button>Shop Now</button>
  </div>
      </section>
    </div>
  );
};

export default About;
