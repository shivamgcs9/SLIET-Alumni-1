import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import Filter from "../../components/Team/Filters/Filters";
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
  return (
      <>
      
    <Navigation />
    <Container>
      <Filter />
      <Students />
    </Container>
    </>
  );
};

export default Teams;
