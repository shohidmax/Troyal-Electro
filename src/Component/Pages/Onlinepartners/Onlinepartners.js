import React from "react";
import alibaba from "./logos/Alibaba.svg";
import Amazon from "./logos/Amazon.svg";
import Daraz from "./logos/Daraz.svg";
import Ebay from "./logos/Ebay.svg";
import Rakuten from "./logos/Rakuten.svg";
import Target from "./logos/Target.svg";
import Walmart from "./logos/Walmart.svg";

const Onlinepartners = () => {
  return (
    <div className="container">
      <div className="row">
          <h1> Our Online Partner</h1>
        <div className="lg:col-md-12">
          <div className="logos">
            <hr />
            <div className="row">
            <div className="d-flex m-2 p-3 lg:col-md-6 justify-content-evenly">
              <div className="logo ms-2">
                {" "}
                <img src={alibaba} alt="" className="logim" />
              </div>
              <div className="logo ms-2">
                {" "}
                <img src={Amazon} alt="" className="logim" />
              </div>
              <div className="logo">
                {" "}
                <img src={Ebay} alt="" className="logim" />
              </div>
            </div>
            </div>

            <div className="row">
            <div className="d-flex m-2 p-3 justify-content-evenly">
              <div className="logo">
                {" "}
                <img src={Rakuten} alt="" className="logim" />
              </div>
              <div className="logo">
                {" "}
                <img src={Target} alt="" className="logim" />
              </div>
              <div className="logo">
                {" "}
                <img src={Walmart} alt="" className="logim" />
              </div>
            </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onlinepartners;
