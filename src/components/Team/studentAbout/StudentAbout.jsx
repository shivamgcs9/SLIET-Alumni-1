import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 3;
  padding: 20px;
  background-color: rgba(235, 235, 235, 0.2);
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h5`
  text-align: center;
  margin-bottom: 15px;
  border-bottom: 1px solid blue;
  padding: 10px;
`;

const Box = styled.div`
  flex: 1;
  border: 1px solid blue;
  border-bottom: transparent;
  margin-bottom: 30px;
  box-shadow: 0px 10px 13px -7px #000000;
`;
const BoxItem = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid blue;
`;
const Span = styled.div`
  font-weight: bold;
  width: 150px;
  margin-right: 20px;
  border-right: 1px solid blue;
`;
const ItemValue = styled.div``;
// const LName = styled.div``;
const StudentAbout = () => {
  return (
    <Container>
      <BoxContainer>
        <Box>
          <Title>Basic Information</Title>
          <BoxItem>
            <Span>Full Name</Span>
            <ItemValue>Shivam Kumar</ItemValue>
          </BoxItem>
          <BoxItem>
            <Span>Email Address</Span>
            <ItemValue>Shivam@gmail.com</ItemValue>
          </BoxItem>
          <BoxItem>
            <Span>Designation</Span>
            <ItemValue> Web Developer</ItemValue>
          </BoxItem>
          <BoxItem>
            <Span>Registration No.</Span>
            <ItemValue>1930071</ItemValue>
          </BoxItem>
          <BoxItem>
            <Span>Batch</Span>
            <ItemValue>2018-2022</ItemValue>
          </BoxItem>
          <BoxItem>
            <Span>Branch</Span>
            <ItemValue>Computer Science</ItemValue>
          </BoxItem>
        </Box>
      </BoxContainer>
      <BoxContainer>
        <Box>
          <Title>Other Information</Title>
          <BoxItem>
            <Span>Gender</Span>
            <ItemValue>Male</ItemValue>
          </BoxItem>
          <BoxItem>
            <Span>DOB</Span>
            <ItemValue>09 July 1997</ItemValue>
          </BoxItem>
          <BoxItem>
            <Span>Phone No.</Span>
            <ItemValue>8198978095</ItemValue>
          </BoxItem>
          <BoxItem>
            <Span>Address</Span>
            <ItemValue>Kashipur, Uttrakhand, INDIA</ItemValue>
          </BoxItem>
        </Box>
      </BoxContainer>
      <BoxContainer>
        <Box>
          <Title>Comapnies Work with</Title>
          <BoxItem>
            <Span>Compnay Name</Span>
            <ItemValue>Google</ItemValue>
          </BoxItem>
          <BoxItem>
            <Span>Company Address</Span>
            <ItemValue>Banglore, India</ItemValue>
          </BoxItem>
          <BoxItem>
            <Span>Company Email</Span>
            <ItemValue>officialGoogle@gmail.com</ItemValue>
          </BoxItem>
        </Box>
      </BoxContainer>
    </Container>
  );
};

export default StudentAbout;
