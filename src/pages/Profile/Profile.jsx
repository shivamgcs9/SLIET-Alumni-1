import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StudentAbout from "../../components/Team/studentAbout/StudentAbout";
import StudentProfile from "../../components/Team/studentProfile/StudentProfile";
import { Navigation } from "../../components/Home/navigation";
import { API } from "../../../src/backend";
import { isAuthenticated } from "../../auth/helper";
// import { isAuthenticated} from "../../auth/helper";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;



const Profile = () => {
  let [users, setUsers] = useState([]);
  let [isLoaded, setisLoaded] = useState(false);

  const filledData = () => {
    fetch(`${API}/get-profile`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${isAuthenticated()}`,
      },
    }).then((res) => {
      return res.json();
    })
      .then((data) => {
        if (data) {
          console.log('>>', data);
          setUsers(data);
          setisLoaded(true);
        }
      });
  };

  useEffect(() => {
    filledData();
  }, []);


  return (
    <>
      <Navigation />
      {isLoaded ? (
        <Container>
          <StudentProfile data={users} key={users._id} />
          <StudentAbout data={users} key={users._id} />
        </Container>
      ) : "Loading..."}

    </>
  );
};

export default Profile;

// import { FaDribbble, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const Container = styled.div`
//   width: 100%;
//   height: calc(100vh - 80px);
//   padding: 0 20px;
//   display: flex;
// `;

// const UserContainer = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
//   position: sticky;
//   overflow-y: scroll;

//   &::-webkit-scrollbar {
//     width: 5px;
//   }
//   &::-webkit-scrollbar-track {
//     background-color: #f1f1f1;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: rgb(179, 179, 179);
//   }
// `;

// const Image = styled.img`
//   width: 60%;
//   height: 60%;
//   border-radius: 50%;
//   object-fit: cover;
// `;

// const Name = styled.h1``;
// const Email = styled.p``;

// const Socials = styled.div`
//   margin-bottom: 20px;
//   display: flex;
//   transition: all 0.5s ease;
// `;

// const SocialIcons = styled.span`
//   margin-left: 15px;

//   &:hover {
//     color: blue;
//     transform: scale(1.3);
//   }
// `;
// const InfoContainer = styled.div`
//   flex: 1;
//   margin: 0 10px;
//   background-color: #f1f1f1;
// `;

// const InfoTitle = styled.h6`
//   text-align: center;
// `;
// const CompanyContainer = styled.div`
//   flex: 1;
//   margin: 0 10px;
//   background-color: #f1f1f1;
// `;

// const CompanyTitle = styled.h6`
//   text-align: center;
// `;
// const linkStyle = {
//   textDecoration: "none",
//   color: "inherit",
// };
// const Profile = () => {
//   return (
//     <Container>
//       <UserContainer>
//         <Image
//           src="https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//           alt=""
//         />
//         <Name>Natsha</Name>
//         <Email>Natsha@gmail.com</Email>
//         <Socials>
//           <SocialIcons>
//             <Link to="/blog" style={linkStyle}>
//               <FaFacebook />
//             </Link>
//           </SocialIcons>
//           <SocialIcons>
//             <FaInstagram />
//           </SocialIcons>
//           <SocialIcons>
//             <FaDribbble />
//           </SocialIcons>
//           <SocialIcons>
//             <FaTwitter />
//           </SocialIcons>
//         </Socials>
//       </UserContainer>
//       <InfoContainer>
//         <InfoTitle>User Information</InfoTitle>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
//           ratione deleniti minus amet reprehenderit, pariatur quia quasi,
//           possimus, itaque odio quis quod soluta ad. Delectus distinctio
//           similique laborum dolore a!
//         </p>{" "}
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
//           ratione deleniti minus amet reprehenderit, pariatur quia quasi,
//           possimus, itaque odio quis quod soluta ad. Delectus distinctio
//           similique laborum dolore a!
//         </p>{" "}
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
//           ratione deleniti minus amet reprehenderit, pariatur quia quasi,
//           possimus, itaque odio quis quod soluta ad. Delectus distinctio
//           similique laborum dolore a!
//         </p>{" "}
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
//           ratione deleniti minus amet reprehenderit, pariatur quia quasi,
//           possimus, itaque odio quis quod soluta ad. Delectus distinctio
//           similique laborum dolore a!
//         </p>{" "}
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
//           ratione deleniti minus amet reprehenderit, pariatur quia quasi,
//           possimus, itaque odio quis quod soluta ad. Delectus distinctio
//           similique laborum dolore a!
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
//           ratione deleniti minus amet reprehenderit, pariatur quia quasi,
//           possimus, itaque odio quis quod soluta ad. Delectus distinctio
//           similique laborum dolore a!
//         </p>
//       </InfoContainer>
//       <CompanyContainer>
//         <CompanyTitle>Company Details</CompanyTitle>
//       </CompanyContainer>
//     </Container>
//   );
// };

// export default Profile;
