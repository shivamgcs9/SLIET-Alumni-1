import React from "react";
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";
import avatar from '../../assets/avatarImage.jpg'

const UserDetails = ({ userDetails }) => (
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
      <span className="text-muted d-block mb-2" style={{fontSize:'14px',fontWeight:'bold',marginBottom:'50px'}}>{userDetails.jobTitle}</span>
      <br/>
      <Button variant='outlined' >
        Hello
      </Button>
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
);

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
