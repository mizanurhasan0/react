import React from "react";
import "../Styles/view.css";

export const View = () => {
  return (
    <div className="ViewApp">
      <div className="listOfCard">
        <div className="card">
          <h2>Top Info</h2>
          <div className="cardInfo">
            <div>
              <img src={require("../Images/logo.png")} />
            </div>
            <div className="userInfo">
              <h3>User Name</h3>
              <div>
                <span>
                  <i className="fa fa-envelope"></i>
                </span>
                <p>email@gmail.com</p>
              </div>
              <div>
                <span>
                  <i className="fa fa-mobile"></i>
                </span>
                <p>+8801912-34432</p>
              </div>
              <div>
                <span>
                  <i className="fa fa-location-arrow"></i>
                </span>
                <p>Dhanmondi-27, Dhaka</p>
              </div>
              <div className="edit">
                <i class="fa fa-edit"></i>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="card2">
          <h2>Experience</h2>
          <div className="cardInfo">
            <div className="userInfo">
              <div className="headerExperience">
                <h3>IT Executive</h3>
                <p>2020 - 2022</p>
              </div>
              <div>
                <h3>Anowara Medical Service</h3>
              </div>
              <div>
                <p>
                  <b>Job Responsibilities :</b>
                  Create/Modify Projects(Web, Desktop and Console Application),
                  Bug- Fix, Requirement Gather, UI Design.
                </p>
              </div>
              <div className="edit">
                <i class="fa fa-edit"></i>
              </div>
            </div>
          </div>

          <div className="cardInfo">
            <div className="userInfo">
              <div className="headerExperience">
                <h3>IT Executive</h3>
                <p>2020 - 2022</p>
              </div>
              <div>
                <h3>Anowara Medical Service</h3>
              </div>
              <div>
                <p>
                  <b>Job Responsibilities :</b>
                  Create/Modify Projects(Web, Desktop and Console Application),
                  Bug- Fix, Requirement Gather, UI Design.
                </p>
              </div>
              <div className="edit">
                <i class="fa fa-edit"></i>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="card3">
          <h2>Last Education</h2>
          <div className="cardInfo">
            <div className="userInfo">
              <h3>Bsc in Software Engineer</h3>

              <p>
                <b>Institute :</b>Daffodil International University
              </p>
              <p>
                <b>CGPA :</b>3.71 out of 4.00
              </p>
              <p>
                <b>Passing Year :</b>March 2016
              </p>
              <div className="edit">
                <i class="fa fa-edit"></i>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="card4">
          <h2>Skills</h2>
          <div className="cardInfo">
            <div className="userInfo">
              <p>
                <b>Backend :</b>Nodejs, java, SQL,Framework
              </p>
              <p>
                <b>Frontend :</b>ReactJS, Angular, HTML, CSS, SASS, Bootstrap.
              </p>
              <p>
                <b>Database :</b>Mongoose, MySql
              </p>
              <p>
                <b>SCM :</b>Git
              </p>
              <div className="edit">
                <i class="fa fa-edit"></i>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="card4">
          <h2>Personal Projects</h2>
          <div className="cardInfo">
            <div className="userInfo">
              <h3>Online Book Store</h3>

              <p>
                Used Technologies: SpringBoot (JWT), Angular. Web app Demo, GIT
                App Application (React, Angular & NodeJS)
              </p>

              <div className="edit">
                <i class="fa fa-edit"></i>
              </div>
            </div>
          </div>
          <div className="cardInfo">
            <div className="userInfo">
              <h3>Online Book Store</h3>

              <p>
                Used Technologies: SpringBoot (JWT), Angular. Web app Demo, GIT
                App Application (React, Angular & NodeJS)
              </p>

              <div className="edit">
                <i class="fa fa-edit"></i>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="card4">
          <h2>Personal Details</h2>
          <div className="cardInfo">
            <div className="userInfo">
              <p>
                <b>Father's Name:</b> Md. Salam Khan
              </p>
              <p>
                <b>Mother's Name:</b> Md. Salam Khan
              </p>
              <p>
                <b>Nationality :</b> Md. Salam Khan
              </p>
              <p>
                <b>P. Address :</b> Md. Salam Khan
              </p>
              <p>
                <b>DOB:</b> 12th Dec 1996
              </p>
              <p>
                <b>Gender</b>: Male
              </p>
              <p>
                <b>Blood Group</b>: O+
              </p>
              <p>
                <b>Religion:</b> Islam
              </p>
              <div className="edit">
                <i class="fa fa-edit"></i>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
