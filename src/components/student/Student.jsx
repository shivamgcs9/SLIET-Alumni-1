import React, { useState } from "react";

import "./student.css";

const Student = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(true);
  };
  return (
    <>
      {open ? (
        <div>
          <div className="student" onClick={handleClick}>
            <img
              src="https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="profileImg"
            />
            <div className="info">
              <h3 className="name">alisha</h3>
              <p className="job">Developer at Sliet Alumini</p>
            </div>
            <div className="course">
              <p>B.E 2022</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="studentPop">
          <button className="close" onClick={handleClose}>
            close
          </button>
          <div className="top">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <div className="topInfo">
              <h1>Alisha</h1>
              <p>Developer at Sliet Alumini</p>
              <p>B.E 2022</p>
            </div>
          </div>
          <div className="bottom">
            <div className="bottomLeft">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque enim quaerat autem odit voluptatibus officia maiores
              quibusdam, beatae necessitatibus id
            </div>
            <div className="bottomRight">
              <div className="bottomRightTitle">Social Links</div>
              <div>social link 1</div>
              <div>social link 2</div>
              <div>social link 3</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Student;
