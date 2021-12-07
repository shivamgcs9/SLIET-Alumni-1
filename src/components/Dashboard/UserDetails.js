import React,{useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from "prop-types";
import {API} from '../../backend'
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

import avatar from '../../assets/avatarImage.jpg'

const UserDetails = ({ userDetails }) => {
  const [open,setOpen] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    borderRadius:'8px',
    boxShadow: 24,
    p: 4,
  };

  const handleChange=()=>{
    console.log('changed')
  }

  const updateProfile=()=>{
    
    return fetch(`${API}/request-alumni`,{
      method:'POST',
      headers: {
        authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWExMThkYjM2NGU0NTc2NWZmMTJlYzkiLCJyb2xlIjowLCJpYXQiOjE2Mzc5NDc3NTV9.QfXnMTrdoi3XQX2v2rdACXgBC5AKaDXdLDwqqCU7Nnc",
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        "companyName":"BugsMirror",
        "companyAddress":"Indore",
        "companyEmail":"BugsMirror@gmail.com",
        "designation":"Intern",
        "yearOfExp": "1",
        "city":"Indore",
        "state":"MP",
        "country":"India",
        "regNo":"1930053",
        "branchOfStudy":"Computer Sci.",
        "batch":"2018",
        "passingYear":"2022"
        
      })
    }).then(response=>{
      return( response.json());

      }).catch(err=>{
          console.log(err);
      });
  }

  const submitted=()=>{
    console.log('submiteed')
    updateProfile();
  }

  const handleClose =()=>{
    setOpen(false)
  }
  return(
  <Card small className="mb-4 pt-3" style={{height:'60vh'}}>
    <CardHeader className="border-bottom text-center" style={{height:'300px'}}>
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={userDetails.avatar}
          alt={userDetails.name}
          width="110"
        />
      </div>
      <h4 className="mb-0" style={{fontSize:'22px'}}>{userDetails.name}</h4>
      <span className="text-muted d-block mb-2" style={{fontSize:'14px',fontWeight:'bold'}}>{userDetails.jobTitle}</span>
      <br/>
      <Button variant='outlined' onClick={()=>setOpen(true)} sx={{fontSize:'10px',mt:2}}>
        Request Alumni
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
                    value={''}
                    onChange={handleChange}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="companyAddress">Company address</label>
                  <FormInput
                    type="address"
                    
                    id="companyAddress"
                    placeholder="Company Address"
                    value={''}
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
                    value={''}
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
                    value={''}
                    onChange={handleChange}
                    
                  />
                </Col>
                <Col md="6" className="form-group">
                  <label htmlFor="exp">Year Of Exp</label>
                  <FormInput
                    type="number"
                    id="exp"
                    
                    
                    placeholder="Year Of Exp"
                    value={''}
                    onChange={handleChange}
                    
                  />
                </Col>
              </Row>
              
          
              <Row form>
                {/* City */}
                <Col md="4" className="form-group">
                  <label htmlFor="feCity">City</label>
                  <FormInput
                    id="feCity"
                    placeholder="City"
                    onChange={() => {}}
                  />
                </Col>
                {/* State */}
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">State</label>
                  <FormInput
                    id="feCity"
                    placeholder="State"
                    onChange={() => {}}
                  />
                </Col>
                {/* Zip Code */}
                <Col md="4" className="form-group">
                  <label htmlFor="feZipCode">Country</label>
                  <FormInput
                    id="feCity"
                    placeholder="Country"
                    
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="regNumber">Reg Number</label>
                  <FormInput
                    id="regNumber"
                    placeholder="Reg Number"
                    value={''}
                    onChange={handleChange}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="branch">Branch Of Study</label>
                  <FormInput
                    
                    
                    id="branch"
                    placeholder="Branch Of Study"
                    value={''}
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
                    type='number'
                    maxLength='4'
                    placeholder="Batch"
                    value={''}
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
                    value={''}
                    onChange={handleChange}
                    
                  />
                </Col>
              </Row>
              <Button variant='contained' sx={{fontSize:'12px'}} onClick={submitted} >Request</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
          </Box>
        </Modal>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-4" style={{fontSize:'14px'}}>
        <strong className="text-muted d-block mb-2">
          {userDetails.metaTitle}
        </strong>
        <span>{userDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
)};

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Sierra Brooks",
    avatar: avatar,
    jobTitle: "Project Manager",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

export default UserDetails;
