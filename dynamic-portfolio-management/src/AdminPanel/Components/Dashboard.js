import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/dashboard.css";

export const Dashboard = () => {
  const [navActive, setNavActive] = useState(true);
  const onClickActive = () => {
    setNavActive(!navActive);
    console.log(navActive);
  };
  return (
    <div className="DashboardApp">
      <div className={navActive ? "navigation" : "navigation active"}>
        <ul>
          <li>
            <Link to="/">
              <span className="icon">
                <img
                  src={require("../../Images/logo.png")}
                  style={{ width: "30px" }}
                />
              </span>
              <span className="title">
                <h2>Software BD</h2>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fa fa-users"></i>
              </span>
              <span className="title">Customers</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fa fa-envelope-open"></i>
              </span>
              <span className="title">Message</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fa fa-info"></i>
              </span>
              <span className="title">Help</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fa fa-cog"></i>
              </span>
              <span className="title">Setting</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fa fa-key"></i>
              </span>
              <span className="title">Password</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fa fa-sign-out"></i>
              </span>
              <span className="title">Logout</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className={navActive ? "main" : "main active"}>
        <div className="topbar">
          <div className="toggle" onClick={onClickActive}>
            <i className="fa fa-bars" id="bars"></i>
          </div>
          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
              <i className="fa fa-search"></i>
            </label>
          </div>
          <div className="user">
            <img src={require("../../Images/logo.png")} />
          </div>
        </div>

        {/* Card Box... */}
        <div className="cardBox">
          <div className="card">
            <div>
              <div className="numbers">1,032</div>
              <div className="cardName">Daily Views</div>
            </div>
            <div className="iconBox">
              <i className="fa fa-eye"></i>
            </div>
          </div>

          <div className="card">
            <div>
              <div className="numbers">82</div>
              <div className="cardName">Sales</div>
            </div>
            <div className="iconBox">
              <i className="fa fa-shopping-cart"></i>
            </div>
          </div>

          <div className="card">
            <div>
              <div className="numbers">208</div>
              <div className="cardName">Commenta</div>
            </div>
            <div className="iconBox">
              <i className="fa fa-comment"></i>
            </div>
          </div>

          <div className="card">
            <div>
              <div className="numbers">$835235</div>
              <div className="cardName">Earning</div>
            </div>
            <div className="iconBox">
              <i className="fa fa-dollar"></i>
            </div>
          </div>
        </div>

        {/* Details */}

        <div className="details">
          <div className="recentOrders">
            <div className="cardHeader">
              <h2>Recent Orders</h2>
              <Link to="/" className="btn">
                View All
              </Link>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>paid</td>
                  <td>
                    <span className="status delivered">Delivered</span>
                  </td>
                </tr>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>paid</td>
                  <td>
                    <span className="status inprogress">in Progress</span>
                  </td>
                </tr>
                <tr>
                  <td>HP Laptop</td>
                  <td>$1200</td>
                  <td>paid</td>
                  <td>
                    <span className="status pending">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>paid</td>
                  <td>
                    <span className="status return">Return</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="recentCustomers">
            <div className="cardHeader">
              <h2>Recent Customer</h2>
            </div>
            <table>
              <tbody>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src={require("../../Images/logo.png")} />
                    </div>
                  </td>
                  <td>
                    <h4>
                      David <br />
                      <span>Italy</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src={require("../../Images/logo.png")} />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Hasan <br />
                      <span>Bangladesh</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src={require("../../Images/logo.png")} />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Khan <br />
                      <span>Pakistan</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src={require("../../Images/logo.png")} />
                    </div>
                  </td>
                  <td>
                    <h4>
                      David <br />
                      <span>Italy</span>
                    </h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Details end */}
      </div>
    </div>
  );
};
