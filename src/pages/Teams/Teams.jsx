import styled from "styled-components";
import Students from "../../components/Team/students/Students";

const Container = styled.div`
  width: 100%;
  height: calc(100vh- 80px);
  display: flex;
  align-items: center;
`;

const Teams = () => {
  return (
    <Container>
      <Students />
    </Container>
  );
};

export default Teams;
