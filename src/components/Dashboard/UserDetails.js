import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import { API } from "../../backend";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
} from "shards-react";

import avatar from "../../assets/user.png";
import { isAuthenticated } from "../../auth/helper";

const UserDetails = ({ userDetails }) => {
  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
  };

  const handleChange = (event) => {
    switch (event.target.id) {
      case 'companyName':
        setAlumniData({ ...alumniData, companyName: event.target.value })
        break;
      case 'companyAddress':
        setAlumniData({ ...alumniData, companyAddress: event.target.value })
        break;
      case 'companyEmail':
        setAlumniData({ ...alumniData, companyEmail: event.target.value })
        break;
      case 'country':
        setAlumniData({ ...alumniData, country: event.target.value })
        break;
      case 'designation':
        setAlumniData({ ...alumniData, designation: event.target.value })
        break;
      case 'yearOfExp':
        setAlumniData({ ...alumniData, yearofExp: event.target.value })
        break;
      case 'batch':
        setAlumniData({ ...alumniData, batch: event.target.value })
        break;
      case 'branchOfStudy':
        setAlumniData({ ...alumniData, branchOfStudy: event.target.value })
        break;
      case 'city':
        setAlumniData({ ...alumniData, city: event.target.value })
        break;
      case 'state':
        setAlumniData({ ...alumniData, state: event.target.value })
        break;
      case 'regNo':
        setAlumniData({ ...alumniData, regNo: event.target.value })
        break;
      case 'passingYear':
        setAlumniData({ ...alumniData, passingYear: event.target.value })
        break;
    }
  };

  const [alumniData, setAlumniData] = useState({
    batch: '',
    branchOfStudy: "",
    city: "",
    companyAddress: "",
    companyEmail: "",
    companyName: "",
    country: "",
    designation: "Designation",
    passingYear: '',
    regNo: "",
    state: "",
    userId: "",
    yearOfExp: "",
  });

  const [status, setStatus] = useState('Request Alumni')
  const [userName, setUserName] = useState('')

  // const requestAlumni = () => {
  //   setOpen(true)

  //   fetch(`${API}/get-profile`, {
  //     method: 'GET',
  //     headers: {
  //       authorization:
  //         `bearer ${isAuthenticated()}`,
  //       "Content-Type": "application/json",
  //     }
  //   })
  //     .then((data) => data.json())
  //     .then((result) => {
  //       if (result.alumniId) {
  //         setAlumniData(result.alumniId)
  //         setStatus('Update Alumni Data')

  //       }
  //       else {
  //         setStatus('RequestAlumni')
  //       }
  //     })
  // }
  useEffect(() => {

    fetch(`${API}/get-profile`, {
      method: 'GET',
      headers: {
        authorization:
          `bearer ${isAuthenticated()}`,
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((result) => {
        if (result.alumniId) {
          setStatus('Update Alumni Data')
          setAlumniData(result.alumniId)
        }
        setUserName(result.name)
      });
  }, []);

  const updateProfile = () => {
    let endPoint = "/alumni-update";
    if(!alumniData._id){
      endPoint = "/request-alumni"
    }
    fetch(`${API}${endPoint}`, {
      method: 'POST',
      headers: {
        authorization:
          `bearer ${isAuthenticated()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName: alumniData.companyName,
        companyAddress: alumniData.companyAddress,
        companyEmail: alumniData.companyEmail,
        designation: alumniData.designation,
        yearOfExp: alumniData.yearOfExp,
        city: alumniData.city,
        state: alumniData.state,
        country: alumniData.country,
        regNo: alumniData.regNo,
        branchOfStudy: alumniData.branchOfStudy,
        batch: alumniData.batch,
        passingYear: alumniData.passingYear,

      })
    }).then(response => {
      response.json()
    }).then(data => { console.log(data) })
      .catch(err => {
        console.log(err);
      });
  }
  const submitted = () => {
    console.log("submiteed");
    updateProfile();
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card small className="mb-4 pt-3" style={{ height: "60vh" }}>
      <CardHeader
        className="border-bottom text-center"
        style={{ height: "300px" }}
      >
        <div className="mb-3 mx-auto">
          <img
            className="rounded-circle"
            style={{ borderRadius: "50%", objectFit: "cover" }}
            src={userDetails.avatar}
            alt={alumniData.name}
            width="160"
            height="160"
          />
        </div>
        <h4 className="mb-0" style={{ fontSize: "22px" }}>
          {userName}
        </h4>
        <span
          className="text-muted d-block mb-2"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          {alumniData.designation}
        </span>
        <br />
        <Button
          variant="outlined"
          onClick={() => setOpen(true)}
          sx={{ fontSize: "10px", mt: 2 }}
        >
          {status}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Please Enter Your Details
            </Typography>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form>
                      <Row form>
                        {/* First Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="companyName">Company Name</label>
                          <FormInput
                            id="companyName"
                            placeholder="Company Name"
                            value={alumniData.companyName}
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Last Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="companyAddress">
                            Company address
                          </label>
                          <FormInput
                            type="address"
                            id="companyAddress"
                            placeholder="Company Address"
                            value={alumniData.companyAddress}
                            onChange={handleChange}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        {/* Email */}
                        <Col md="12" className="form-group">
                          <label htmlFor="companyEmail">Company Email</label>
                          <FormInput
                            type="email"
                            id="companyEmail"
                            placeholder="Company Email"
                            value={alumniData.companyEmail}
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Password */}
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="designation">Designation</label>
                          <FormInput
                            type="text"
                            id="designation"
                            placeholder="Designation"
                            value={alumniData.designation}
                            onChange={handleChange}
                          />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="exp">Year Of Exp</label>
                          <FormInput
                            type="number"
                            id="exp"
                            placeholder="Year Of Exp"
                            value={alumniData.yearOfExp}
                            onChange={handleChange}
                          />
                        </Col>
                      </Row>

                      <Row form>
                        {/* City */}
                        <Col md="4" className="form-group">
                          <label htmlFor="city">City</label>
                          <FormInput
                            id="city"
                            placeholder="City"
                            value={alumniData.city}
                            onChange={handleChange}
                          />
                        </Col>
                        {/* State */}
                        <Col md="4" className="form-group">
                          <label htmlFor="state">State</label>
                          <FormInput
                            id="state"
                            placeholder="State"
                            onChange={handleChange}
                            value={alumniData.state}
                          />
                        </Col>
                        {/* Zip Code */}
                        <Col md="4" className="form-group">
                          <label htmlFor="country">Country</label>
                          <FormInput
                            id="country"
                            placeholder="Country"
                            onChange={handleChange}
                            value={alumniData.country}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        {/* First Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="regNo">Reg Number</label>
                          <FormInput
                            id="regNo"
                            placeholder="Reg Number"
                            value={alumniData.regNo}
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Last Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="branchOfStudy">Branch Of Study</label>
                          <FormInput
                            id="branchOfStudy"
                            placeholder="Branch Of Study"
                            value={alumniData.branchOfStudy}
                            onChange={handleChange}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        {/* First Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="batch">Batch</label>
                          <FormInput
                            id="batch"
                            type="number"
                            maxLength="4"
                            placeholder="Batch"
                            value={alumniData.batch}
                            onChange={handleChange}
                          />
                        </Col>
                        {/* Last Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="passingYear">Passing Year</label>
                          <FormInput
                            type="number"
                            id="passingYear"
                            placeholder="Passing Year"
                            value={alumniData.passingYear}
                            onChange={handleChange}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        <Button
                          variant="contained"
                          sx={{ fontSize: "12px" }}
                          onClick={submitted}
                        >
                          {status}
                        </Button>
                      </Row>

                    </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Box>
        </Modal>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-4" style={{ fontSize: "14px" }}>
          <strong className="text-muted d-block mb-2">
            {userDetails.metaTitle}
          </strong>
          <span>{userDetails.metaValue}</span>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object,
};

UserDetails.defaultProps = {
  userDetails: {
    // name: alumniData.name,
    avatar: avatar,
    // jobTitle: alumniData.designation ? alumniData.designation : "User Profile!!",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
  },
};

export default UserDetails;
