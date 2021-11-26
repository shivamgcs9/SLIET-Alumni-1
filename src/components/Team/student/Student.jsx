import { FaDribbble, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Socials = styled.div`
  opacity: 0;

  display: flex;
  transition: all 0.5s ease;
`;
const Batch = styled.p`
  opacity: 0;
  position: absolute;
  top: 0;
  right: -30px;
  padding: 2px 5px;
  border-bottom: 5px solid blue;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 2;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  margin: 15px;
  min-width: 350px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;
  position: relative;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 10px 13px -7px #000000;
  position: relative;
  transition: all 1s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:hover ${Socials} {
    opacity: 1;
  }

  &:hover ${Batch} {
    opacity: 1;
    right: 0;
  }
`;

const Profile = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 5px 13px -7px blue;
  padding: 5px;
`;
const Info = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const Name = styled.h5``;

const Profession = styled.p``;

const SocialIcons = styled.span`
  margin-left: 5px;

  &:hover {
    color: blue;
    transform: scale(1.1);
  }
`;
const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const Student = () => {
  return (
    <Link to="/profile" style={linkStyle}>
      <Container>
        <Profile
          src="https://cdn.myanimelist.net/images/characters/6/278736.jpg"
          alt=""
        />

        <Info>
          <Profession>Web Developer</Profession>
          <Name>Hinata Hyuga</Name>
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

        <Batch>2018-22</Batch>
      </Container>
    </Link>
  );
};

export default Student;
