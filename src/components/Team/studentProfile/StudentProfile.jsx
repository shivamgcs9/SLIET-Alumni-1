import React from "react";
import styled from "styled-components";
import { FaDribbble, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 3;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 80px;
  background-color: rgba(235, 235, 235, 0.2);

  @media screen and (max-width: 768px) {
    position: unset;
  }

  /* &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
  } */
`;
const ImgContainer = styled.div`
  flex: 1;
  padding-top: 30px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 10px 13px -7px blue;

  @media screen and (max-width: 768px) {
    height: 90%;
    width: 90%;
  }
`;
const Info = styled.div`
  flex: 1;
  text-align: center;
`;
const Name = styled.h1`
  color: rebeccapurple;
`;
const Email = styled.p`
  font-size: 18px;
  letter-spacing: 2px;
`;

const Socials = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  transition: all 0.5s ease;
`;

const SocialIcons = styled.span`
  margin: 0 15px;

  &:hover {
    color: blue;
    transform: scale(1.5);
  }
`;
const Designation = styled.p``;

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const StudentProfile = () => {
  return (
    <Container>
      <ImgContainer>
        <Image
          src="https:images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </ImgContainer>
      <Info>
        <Name>Natasha</Name>
        <Email>Natasha@gmail.com</Email>
        <Designation>Web Developer</Designation>
        <Socials>
          <SocialIcons>
            <Link to="/blog" style={linkStyle}>
              <FaFacebook />
            </Link>
          </SocialIcons>

          <SocialIcons>
            <FaInstagram />
          </SocialIcons>

          <SocialIcons>
            <FaDribbble />
          </SocialIcons>

          <SocialIcons>
            <FaTwitter />
          </SocialIcons>
        </Socials>
      </Info>
    </Container>
  );
};

export default StudentProfile;
