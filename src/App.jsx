import background from "./assets/pattern-background-desktop.svg";
import cardImg from "./assets/illustration-hero.svg";
import priceIcon from "./assets/icon-music.svg";

import "./App.css";
const App = () => {
  return (
    <div>
      <div
        className="container-fluid px-0 mx-0 min-vw-100  min-vh-100 d-flex justify-content-center  align-items-center  "
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container   ">
          <div className="d-flex justify-content-center ">
            <div className=" col-md-5 col-lg-4  ">
              <div className="card-container  bg-white  text-center rounded-3  ">
                <div className="img-container">
                  <img
                    className=" rounded-top-3 w-100  "
                    src={cardImg}
                    alt=".."
                  />
                </div>

                <div className="card-data">
                  <h3 className="fw-bold mt-5">Order Summary</h3>
                  <p className="px-5">
                    You can now listen to millions of songs, audiobooks, and
                    podcasts on any device anywhere you like!
                  </p>
                </div>
                <div
                  className="price-container  rounded-3 mx-lg-5  pb-2 mx-3  "
                  style={{ background: "#f8f9fe" }}
                >
                  <div className=" ps-1 price-plan d-flex  justify-content-between   align-items-center px-lg-3   ">
                    <div className="price-icon-price d-flex justify-content-between   mt-3 ">
                      <div className="img">
                        <img src={priceIcon} className="me-3" alt="music" />
                      </div>

                      <div className="price ">
                        <div className="fw-bold ">Annual Plan</div>
                        <div style={{color:"#8f93a6"}}>$59.99/year</div>
                      </div>
                    </div>

                    <div className="change mt-2   ">
                      <a href="">Change</a>
                    </div>

                    <div className="payment-btn"></div>
                  </div>
                </div>
                <div className="button px-lg-5 mx-3 mx-lg-0 my-3">
                  <button className=" fw-bold bg-primary text-white payment-btn p-2 rounded-3 w-100  ">
                    Proceed to Payment
                  </button>
 
                  <button className="cancel-btn fw-bold my-3" style={{color:"#757c8d"}}>Cancel Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
