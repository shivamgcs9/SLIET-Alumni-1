import React from "react";
import PropTypes from "prop-types";
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
  Button
} from "shards-react";

export const Forms = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">First Name</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="First Name"
                    value="Sierra"
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Last Name"
                    value="Brooks"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value="sierra@example.com"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Password</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value="1234 Main St."
                  onChange={() => {}}
                />
              </FormGroup>
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
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
                  <FormSelect id="feInputState">
                    <option>Choose...</option>
                    <option>...</option>
                  </FormSelect>
                </Col>
                {/* Zip Code */}
                <Col md="2" className="form-group">
                  <label htmlFor="feZipCode">Zip</label>
                  <FormInput
                    id="feZipCode"
                    placeholder="Zip"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Description</label>
                  <FormTextarea id="feDescription" rows="5" />
                </Col>
              </Row>
              <Button theme="accent">Update Account</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

Forms.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

Forms.defaultProps = {
  title: "Account Details"
};

// export default UserAccountDetails;


// import React, { useEffect, useState } from "react";
// import { useRef } from "react";
// import Snackbar from "@mui/material/Snackbar";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InputAdornment from "@mui/material/InputAdornment";
// import Button from "@mui/material/Button";
// import Divider from "@mui/material/Divider";
// import Alert from "@mui/material/Alert";
// import { blue } from '@mui/material/colors'; 
// import Chip from '@mui/material/Chip';


// export default function MultilineTextFields() {
//   // const [infos, setInfos] = useState([]);
//   useEffect(() => {
    
//     const API = "http://04fa-203-192-214-22.ngrok.io/api/profile-update";
//     fetch(API, {
//       method:'POST',
//       headers: {
//         authorization:
//           "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWExMThkYjM2NGU0NTc2NWZmMTJlYzkiLCJyb2xlIjowLCJpYXQiOjE2Mzc5NDc3NTV9.QfXnMTrdoi3XQX2v2rdACXgBC5AKaDXdLDwqqCU7Nnc",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((data) => data.json())
//       .then((result) => setUser(result));
//   }, []);

//   const updateProfile=()=>{
//     const API = "http://04fa-203-192-214-22.ngrok.io/api/profile-update";
//     return fetch(API,{
//       method:'POST',
//       headers: {
//         authorization:
//           "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWExMThkYjM2NGU0NTc2NWZmMTJlYzkiLCJyb2xlIjowLCJpYXQiOjE2Mzc5NDc3NTV9.QfXnMTrdoi3XQX2v2rdACXgBC5AKaDXdLDwqqCU7Nnc",
//         "Content-Type": "application/json",
//       },
//       body:JSON.stringify({
//         "dob":user.dob,
//         "phoneNumber":user.phoneNumber,
//         "address":user.address,
//         "collegeName":"SLIET",
//         "socialmedia":{
//                 "facebook":"Rucika",
//                 "instagram":"Ruchika",
//                 "linkedin":"Ruchika"
//                 },
//         "profileImage":user.profileImage
        
//       })
//     }).then(response=>{
//       return( response.json());

//       }).catch(err=>{
//           console.log(err);
//       });
//   }

  
//   // const [value, setValue] = React.useState("Controlled");
//   const [isErr, setIsErr] = React.useState(false);
//   // const [category, setCategory] = React.useState("EUR");
//   const [err, setErr] = React.useState("");

//   const phoneNumber = useRef(null);
//   const email = useRef(null);

//   const handleChange = (event) => {
//     if ((event.target.id === "firstName")) {
//       setUser({ ...user, name: event.target.value});
//       console.log(event.target.value)
//     }else if(event.target.id ==='dob'){
//       setUser({ ...user, dob: event.target.value});
//     }
//     else if((event.target.id) ==='address'){
//       console.log(event.target.value)
//       setUser({ ...user, address: event.target.value});
//     }
//   };
//   const imageUpload = (e) => {
//     console.log(URL.createObjectURL(e.target.files[0]));

//     setUser({ ...user, profileImage: URL.createObjectURL(e.target.files[0])});
//     // this contains image to b uploaded
//   };

//   const submitted = () => {
    
//     const reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//     const rePhoneNumber =
//       /^((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}$/i;

//     if (!reEmail.test(email.current.value)) {
//       // 
//       console.log("Invalid email");
//     }
//     else if (!rePhoneNumber.test(phoneNumber.current.value)) {
//       setIsErr(true);
//       setErr("Invalid Phone number");
//       console.log("invalid phone number");
//     }else if(!user.address){
      
//       setIsErr(true);
//       setErr('Address is Required')
//     }else if(!user.dob){
//       setIsErr(true);
//       setErr('invalid DOB')
//     }
//     else if(!user.profileImage){
//       console.log(user.image)
//       setIsErr(true)
//       setErr('Please upload image')
//     }
//     else{
//       updateProfile().then(response=>console.log(response));
//     }

//     console.log();


//   };
//   const handleClose = () => {
//     setIsErr(false);
//   };


//   const [user,setUser]= useState({
//     name:'',
//     dob: "",
//     email:'',
//     phoneNumber: "",
//     regNo: "",
//     branchOfStudy: "",
//     collegeName: "",
//     yearOfStudy: "",
//     image:'',
//     address: "",
//     socialmedia: {
//         facebook: "",
//         instagram: "",
//         linkedin: "",
//     }
//   });
  

//   return (
//     <Box
//       component="form"
//       sx={{
//         "& .MuiTextField-root": { m: 4, width: "50ch" },
//       }}
//       Validate
//       onSubmit={() => {
//         console.log("Submitted");
//       }}
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           id="firstName"
//           label="Full Name"
//           value={user.name}
//           required
//           maxRows={2}
//           // onChange = {handleInputs}
//             onChange={handleChange}
//         />
        
//         <TextField
//           id="email"
//           label="Email"
//           value={user.email}
//           type="email"
//           inputRef={email}
//           required
//         />
//         <TextField
//           id="dob"
//           helperText="Date of Birth"
//           type="date"
//           InputProps={{ inputProps: { max: `2021-11-26` } }}
//           required
//           onChange={handleChange} 
//         />
//         <TextField
//           id="mobile_number"
//           required
//           error={isErr}
//           helperText={isErr ? "Invalid Phone Number" : "Phone Number"}
//           type="text"
//           inputRef={phoneNumber}
          
          
//           // value= {mobileNumber}
//         />
//         <TextField
//           id="address"
//           label="Address"
//           type="text"
          
//           multiline
//           required
//           maxRows={2}
//           onChange={handleChange}
//         />
//         <TextField
//           id="outlined-multiline-flexible"
//           label="College Name"
//           type="text"
//           value={"SLIET"}
//           disabled
//           required
//           multiline
//           maxRows={2}
//           onChange={handleChange}
//         />
//         <TextField
//           id="profile_image"
//           helperText="Profile Image"
//           type="file"
//           required
//           InputProps={{ inputProps: { accept: "image/*" } }}
//           onChange={(e) => imageUpload(e)}
//         />
//         <Divider>
//         <Chip label="SOCIAL MEDIA" />
//       </Divider>
//         <TextField
//           id="outlined-multiline-static"
//           label="Insta"
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <InstagramIcon  sx={{ color: blue[500] }}/>
//               </InputAdornment>
//             ),
//           }}
//           onChange={handleChange}
//         />
//         <TextField
//           id="outlined-multiline-static"
//           label="LinkedIn"
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <LinkedInIcon sx={{ color: blue[500] }}/>
//               </InputAdornment>
//             ),
//           }}
//           onChange={handleChange}
//         />
//         <TextField
//           id="outlined-multiline-static"
//           label="Facebook"
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <FacebookIcon sx={{ color: blue[500] }}/>
//               </InputAdornment>
//             ),
//           }}
//           onChange={handleChange}
//         />
//         <Divider>
//         <Chip label="REVIEW" />
//       </Divider>
//         <TextField
//           id="outlined-multiline-static"
//           label="Comment"
//           multiline
//           rows={4}
//           onChange={handleChange}
//         />
//       </div>
//       <Snackbar open={isErr} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
//           {err}
//         </Alert>
//       </Snackbar>

//       <Button 
//         variant="contained" 
//         value="submit" 
//         size="large"
//         onClick={submitted}
//         style={{marginLeft: '31px'}}
//         >
//         Submit
//       </Button>
     
//     </Box>
//   );
// }
