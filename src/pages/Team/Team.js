import React from "react";
// import Navbar from "../../components/navbar/Navbar";
import Student from '../../components/Team/student/Student';
import "./Team.css";

const Team = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="filterBox">
        <div className="filterContainer">
          <div className="filterItem bold">Filters</div>
          <div className="filterItem">
            <select name="" id="">
              <option selected value="">
                course
              </option>
              <option value="">Computer Science</option>
              <option value="">Mechanical Engineering</option>
              <option value="">Chemical Engineering</option>
              <option value="">Food Engineering</option>
            </select>
          </div>
          <div className="filterItem">
            <select name="" id="">
              <option selected value="">
                Graduation Year
              </option>
              <option value="">2018</option>
              <option value="">2019</option>
              <option value="">2020</option>
              <option value="">2021</option>
              <option value="">2022</option>
            </select>
          </div>
          <div className="filterItem">
            <select name="" id="">
              <option selected value="">
                Location
              </option>
              <option value="">Uttrakhand</option>
              <option value="">Punjab</option>
              <option value="">Himachal</option>
              <option value="">Delhi</option>
              <option value="">Shimla</option>
            </select>
          </div>
        </div>
        <div className="searchContainer">
          <div className="inputBox">
            <input
              placeholder="Search a Student, branch or job location"
              type="text"
            />
            🔍
          </div>
        </div>
      </div>
      <Student />
    </div>
  );
};

export default Team;
