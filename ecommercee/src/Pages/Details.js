import React, { useState } from "react";
import "../Designs/details.css";

export const Details = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log(index);
  };
  return (
    <div className="container details">
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../Images/product.jpg")}
                className="d-block w-100"
                alt="product"
              />
            </div>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 short-specification">
          <p className="newArrival text-center">New</p>
          <h2>Dell Laptop Core i3</h2>
          <p>Product Code : ISR2022</p>

          <p className="price">
            USD{" "}
            <span className="text-muted text-decoration-line-through card-oldPrice">
              $20.00
            </span>
            {" - "}$ 15.00
          </p>
          <p>
            <b>Availabililty</b> In Stock
          </p>
          <p>
            <b>Condition</b> New
          </p>
          <p>
            <b>Brand</b> Dell Company
          </p>
          <label>Quantity</label>
          <input type="text" defaultValue={1} className="details-qty-field" />
          <button type="button" className="btn btn-default cartbtn">
            Add to card
          </button>
        </div>
      </div>
      {/* Speciment Description Description */}
      <div className="row ">
        <div className="col-md-12">
          <div className="block-tabs">
            <button
              onClick={() => toggleTab(1)}
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            >
              Details
            </button>
            <button
              onClick={() => toggleTab(2)}
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            >
              Specification
            </button>
            <button
              onClick={() => toggleTab(3)}
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            >
              Rating
            </button>
          </div>
          <div className="content-tabs">
            <div className={toggleState === 1 ? "active-content" : "content"}>
              <h2>Basic Info</h2>
              <hr />
              {/*  */}
              <p>
                Description HP 15s-du1088TU Intel Pentium N5030 15.6 inch FHD
                Laptop with Win 10 HP P15s-du1088TU Laptop comes with Intel
                Pentium Silver 5030 processor, 4GB DDR4 RAM, 1TB HDD, 15.6"
                diagonal FHD backlit (1920 x 1080) Display, Intel UHD Graphics
                and Windows 10 Home. This laptop featured with Li-ion battery,
                Chicklit Keyboard, 720p HD Web camera with integrated dual array
                digital microphones. Here, Realtek RTL8822CE 802.11a/b/g/n/ac
                (2x2) Wi-Fi and Bluetooth 5 wireless and networking connectivity
                are also available. This laptop also has SuperSpeed USB Type-A
                signaling rate AC smart pin, HDMI x 1, 2.0 headphone/microphone
                combo ports and connectivity. This latest HP 15s-du1088TU Laptop
                has 01 year International Limited Warranty (Terms & condition
                Apply As Per HP).
              </p>
            </div>
            <div className={toggleState === 2 ? "active-content" : "content"}>
              <h2>Description</h2>
              <hr />
              <p>
                Intel Pentium Silver 5030 (1.10 To 3.10 GHz 4MB Cache) Processor
                Display 15.6" diagonal FHD backlit (1920 x 1080) Display Memory
                4GB DDR4 RAM Storage 1TB HDD Graphics Intel UHD Graphics 605
                Operating System Windows 10 Home Microsoft Office Home & Student
                Audio 2.0 headphone/microphone combo Office Microsoft Office
                Home & Student
              </p>
            </div>
            <div className={toggleState === 3 ? "active-content" : "content"}>
              <h2>Review</h2>
              <hr />
              <p>
                Get specific details about this product from customers who own
                it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
