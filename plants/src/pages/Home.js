import React from "react";
import "./Home.css";
import { FaCreditCard } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { BiSolidPackage } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import img2 from "../images/img.2.jpg";
import img3 from "../images/img.3.jpg";
import img4 from "../images/img.4.jpg";
import { FaRegStar } from "react-icons/fa";
import img6 from "../images/img.6.jpg";
import img7 from "../images/img.7.jpg";
import img8 from "../images/img.8.jpg";
import img9 from "../images/img.9.jpg";
import img10 from "../images/img.10.jpg";
import img11 from "../images/img.11.jpg";
import img12 from "../images/img.12.jpg";
import img13 from "../images/img.13.jpg";
import img14 from "../images/img.14.jpg";
import img15 from "../images/img.15.jpg";
import { BiSolidQuoteLeft } from "react-icons/bi";


const Home = () => {
  return (
    <div>
      <section>
        <div className="bel">
          <h4>Welcome to Urban Jungle Co.</h4>
          <br />
          <h1>
            <b>
              Discover the Beauty of Nature at <br />
              Your Fingertips
            </b>
          </h1>
          <br />
          <button>Shop Now</button>
        </div>
      </section>
      <section>
        <div className="first">
          <div className="one">
            <FaCreditCard className="ione" size={50} />
            <h5>Secure Payment</h5>
            <p>Elementum feugiat diam</p>
          </div>
          <div className="one">
            <FaTruck className="ione" size={50} />
            <h5>Free Shipping</h5>
            <p>For $50 order</p>
          </div>
          <div className="one">
            <BiSolidPackage className="ione" size={50} />
            <h5>Delivered with Care</h5>
            <p>Lacinia pellentesque leo</p>
          </div>
          <div className="one">
            <FaRegHeart className="ione" size={50} />
            <h5>Excellent Service</h5>
            <p>Blandit gravida viverra</p>
          </div>
          <hr className="line" />
        </div>
      </section>
      <section>
        <div className="trend">
          <h1>Trending Products</h1>
          <div className="pros">
            <div className="pro">
              <img src={img2} />
              <br />
              <br />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <h5>Starlight Succulent</h5>
              <p>Indoor Plants</p>
              <p>$95.00</p>
            </div>
            <div className="pro">
              <img src={img3} />
              <br />
              <br />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <h5>Silver Mist</h5>
              <p>Indoor Plants</p>
              <p>$92.00</p>
            </div>
            <div className="pro">
              <img src={img4} />
              <br />
              <br />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <h5>Golden Glow</h5>
              <p>Indoor Plants</p>
              <p>$85.00</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="sale">
          <h1>
            Flash Sale: Up to 50% Off <br />
            On Select Items!
          </h1>
          <p>
            Don’t miss out on our flash sale event! For a limited time, enjoy up
            to 50% <br />
            off on a selection of our best-selling products.
          </p>
          <button>Shop Now</button>
        </div>
      </section>
      <section>
        <div className="our">
          <h1>Our Categories</h1>
        </div>
        <div className="plants">
          <div className="plan">
            <img src={img6} alt="" height="300px" width="300px" />
            <h4>Houseplants</h4>
          </div>
          <div className="plan">
            <img src={img7} alt="" height="300px" width="300px" />
            <h4>Outdoor Plants</h4>
          </div>
          <div className="plan">
            <img src={img8} alt="" height="300px" width="300px" />
            <h4>Succulents</h4>
          </div>
          <div className="plan">
            <img src={img9} alt="" height="300px" width="300px" />
            <h4>Desert Bloom</h4>
          </div>
        </div>
      </section>
      <section>
        <div className="your">
          <img src={img10} alt="" />
          <div className="you">
            <h1>
              Your Premier <br />
              Destination for All <br />
              Green.
            </h1>
            <p>
              <br />
              At Urban Jungle Co., we believe in the transformative power of
              plants. Whether you’re a seasoned gardener or just starting your
              green journey, <br />
              our curated selection of plants will inspire and enrich your
              living space.
            </p>
            <br />
            <hr />
            <div className="pers">
              <div className="per">
                <h2>98%</h2>
                <p>Customer Satisfaction</p>
              </div>
              <div className="per">
                <h2>103K</h2>
                <p>Plants Sold</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="trend">
          <h1>Popular Products</h1>
          <div className="pros">
            <div className="pro">
              <img src={img11} alt="" />
              <br />
              <br />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <h5>Desert Bloom</h5>
              <p>Indoor Plants</p>
              <p>$70.00</p>
            </div>
            <div className="pro">
              <img src={img12} alt="" />
              <br />
              <br />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <h5>Golden Glow</h5>
              <p>Indoor Plants</p>
              <p>$85.00</p>
            </div>
            <div className="pro">
              <img src={img13} alt="" />
              <br />
              <br />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <h5>Silver Mist</h5>
              <p>Indoor Plants</p>
              <p>$92.00</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="says">
          <h1>What Our Customers Say</h1>
          <p>
            Discover the reasons why people loves us and become your go-to
            partner.
          </p>

          <div class="carts">
            <div class="cart">
            <BiSolidQuoteLeft size={30} style={{textAlign:"start"}}/>
              <p>
                <b>
                  I am absolutely thrilled with the service I received from
                  their company! They were attentive, responsive, and genuinely
                  cared about meeting my needs. I highly recommend them.
                </b>
              </p>
              <div class="rev">
                <img src={img14} alt="" />
                <h5>Your Client</h5>
              </div>
            </div>

            <div class="cart">
            <BiSolidQuoteLeft size={30}/>
              <p>
                <b>
                  I am absolutely thrilled with the service I received from
                  their company! They were attentive, responsive, and genuinely
                  cared about meeting my needs. I highly recommend them.
                </b>
              </p>
              <div class="rev">
                <img src={img15} alt="" />
                <h5>Your Client</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="last">
        <h1>Ready to Find your Perfect Plant?</h1>
        <p>Browse our online store or visit us in person to <br/> experience the beauty of nature.</p>
        <button>Shop Now</button>
    </div>
      </section>
    </div>
  );
};

export default Home;
