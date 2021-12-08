import { FaSearch } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../auth/helper";
import styled from "styled-components";
import Students from "../../components/Team/students/Students";
import { Navigation } from "../../components/Home/navigation";

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: calc(100vh- 80px);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const Teams = () => {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());

  useEffect(() => {
    setLoggedIn(isAuthenticated());
  });
  return (

    <>
    {loggedIn ?<>
      <Navigation />
      <Container>
        {/* <Filter /> */}
        <Students />
      </Container>
    </> : <Redirect to="/register" /> }
      
    </>
  );
};

export default Teams;
