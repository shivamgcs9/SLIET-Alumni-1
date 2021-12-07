import React from "react";
import { useEffect, useState } from 'react';
import { useRef } from "react";
import {API} from '../../backend'
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
} from "shards-react";
import Button from '@mui/material/Button';


 
export const Forms = () => {
  const [user,setUser]= useState({
    name:"",
    dob: "",
    email:'',
    phoneNumber: "",
    regNo: "",
    branchOfStudy: "",
    collegeName: "",
    yearOfStudy: "",
    image:'',
    address: "",
    socialmedia: {
        facebook: "",
        instagram: "",
        linkedin: "",
    }
  });

  const [err,setErr] = useState("");
  const [isErr,setIsErr] = useState(false);
  const [errAt,setErrAt] = useState("");

    const handleChange = (event) => {
    if ((event.target.id === "firstName")) {
      setUser({ ...user, name: event.target.value});
      console.log(event.target.value)
    }else if(event.target.id ==='dob'){
      setUser({ ...user, dob: event.target.value});
    }
    else if((event.target.id) ==='address'){
      console.log(event.target.value)
      setUser({ ...user, address: event.target.value});
    }

  };

  useEffect(() => {
    
    fetch(`${API}/profile-update`, {
      method:'POST',
      headers: {
        authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWExMThkYjM2NGU0NTc2NWZmMTJlYzkiLCJyb2xlIjowLCJpYXQiOjE2Mzc5NDc3NTV9.QfXnMTrdoi3XQX2v2rdACXgBC5AKaDXdLDwqqCU7Nnc",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((result) => setUser(result));
  }, []);

    const updateProfile=()=>{
    
    return fetch(`${API}/profile-update`,{
      method:'POST',
      headers: {
        authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWExMThkYjM2NGU0NTc2NWZmMTJlYzkiLCJyb2xlIjowLCJpYXQiOjE2Mzc5NDc3NTV9.QfXnMTrdoi3XQX2v2rdACXgBC5AKaDXdLDwqqCU7Nnc",
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        "dob":user.dob,
        "phoneNumber":user.phoneNumber,
        "address":user.address,
        "collegeName":"SLIET",
        "socialmedia":{
                "facebook":"Rucika",
                "instagram":"Ruchika",
                "linkedin":"Ruchika"
                },
        "profileImage":user.profileImage
        
      })
    }).then(response=>{
      return( response.json());

      }).catch(err=>{
          console.log(err);
      });
  }


    // const [value, setValue] = React.useState("Controlled");
  
  // const [category, setCategory] = React.useState("EUR");
  

  const phoneNumber = useRef(null);
  const email = useRef(null);
    const submitted = () => {
    
    const reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const rePhoneNumber =/^((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}$/i;

    console.log(phoneNumber.current.value)
    if(rePhoneNumber.test(phoneNumber.current.value)){
      setUser({ ...user, phoneNumber: phoneNumber.current.value});  
    }
    
    
    // if (!reEmail.test(email.current.value)) {
    //   // 
    //   console.log("Invalid email");
    // }
    // else if (!rePhoneNumber.test(phoneNumber.current.value)) {
    //   setIsErr(true);
    //   console.log('{HOPNE NUMBER')
    //   setErr("Invalid Phone number");
    //   setErrAt("phoneNumber")
    //   console.log("invalid phone number");
    // }else if(!user.address){
    //   console.log('ADDRESS')
    //   setIsErr(true);
    //   setErr('Address is Required')
    // }else if(!user.dob){
    //   setIsErr(true);

    //   setErr('invalid DOB')
    //   console.log('DOB')
    // }
    // else if(!user.profileImage){
    //   console.log(user.image)
    //   setIsErr(true)
    //   setErr('Please upload image')
    // }
    // else{
      
    // }
    updateProfile().then(response=>console.log(response));
  }
  return(
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{'HASTA LA VISTA BABY'}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <FormInput
                    id="firstName"
                    placeholder="First Name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="email">Email</label>
                  <FormInput
                    type="email"
                    innerRef={email}
                    id="email"
                    placeholder="Email Address"
                    value={user.email}
                    onChange={handleChange}
                    
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="dob">Date Of Birth</label>
                  <FormInput
                    type="date"
                    id="dob"
                    placeholder="Date Of Birth"
                    value={user.dob}
                    onChange={handleChange}
                    
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="phoneNumber">Contact Number</label>
                  <FormInput
                    type="text"
                    id="phoneNumber"
                    
                    innerRef={phoneNumber}
                    placeholder="Contact Number"
                    value={user.phoneNumber}
                    onChange={handleChange}
                    maxLength='13'
                  />
                </Col>
              </Row>
              <Row form>
              <Col md="12" className="form-group">
                  <label htmlFor="address">Address</label>
                  <FormInput
                    type="text"
                    id="address"
                    placeholder="Address"
                    value={user.address}
                    onChange={() => {}}
                    
                  />
                </Col>
              </Row>
          
              <Row form>
                {/* City */}
                <Col md="4" className="form-group">
                  <label htmlFor="feCity">LinkedIn</label>
                  <FormInput
                    id="feCity"
                    placeholder="LinkedIn"
                    onChange={() => {}}
                  />
                </Col>
                {/* State */}
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">Facebook</label>
                  <FormInput
                    id="feCity"
                    placeholder="Facebook"
                    onChange={() => {}}
                  />
                </Col>
                {/* Zip Code */}
                <Col md="4" className="form-group">
                  <label htmlFor="feZipCode">Instagram</label>
                  <FormInput
                    id="feCity"
                    placeholder="Instagram"
                    
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Comment</label>
                  <FormTextarea id="feDescription" rows="5" />
                </Col>
              </Row>
              <Button variant='contained' sx={{fontSize:'12px'}} onClick={submitted} >Update Account</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
  )};

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

