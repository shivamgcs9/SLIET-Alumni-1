import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  margin: 18px 200px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
`;

const FilterItem = styled.div``;

const Span = styled.span`
  font-weight: bold;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: 1px solid rgb(90, 180, 220);
  border-radius: 5px;
`;
const Option = styled.option``;

const SearchContainer = styled.div`
  flex: 1;
`;

const InputBox = styled.div`
  padding: 10px;
  border: 1px solid rgb(90, 180, 220);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

const Filters = () => {
  return (
    <Container>
      <Filter>
        <FilterItem>
          <Span>Filters:</Span>
        </FilterItem>
        <FilterItem>
          <Select>
            <Option selected>course</Option>
            <Option>Computer Science</Option>
            <Option>Mechanical Engineering</Option>
            <Option>Chemical Engineering</Option>
            <Option>Food Engineering</Option>
          </Select>
        </FilterItem>
        <FilterItem className="filterItem">
          <Select name="" id="">
            <Option selected>Graduation Year</Option>
            <Option value="">2018</Option>
            <Option value="">2019</Option>
            <Option value="">2020</Option>
            <Option value="">2021</Option>
            <Option value="">2022</Option>
          </Select>
        </FilterItem>
        <FilterItem>
          <Select name="" id="">
            <Option selected>Location</Option>
            <Option value="">Uttrakhand</Option>
            <Option value="">Punjab</Option>
            <Option value="">Himachal</Option>
            <Option value="">Delhi</Option>
            <Option value="">Shimla</Option>
          </Select>
        </FilterItem>
      </Filter>
      <SearchContainer>
        <InputBox>
          <Input
            placeholder="Search a Student, branch or job location"
            type="text"
          />
          <FaSearch />
        </InputBox>
      </SearchContainer>
    </Container>
  );
};

export default Filters;
