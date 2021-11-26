import React from "react";
import styled from "styled-components";
import Student from "../student/Student";

const Container = styled.div`
  padding: 0 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Students = () => {
  return (
    <Container>
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
    </Container>
  );
};

export default Students;
