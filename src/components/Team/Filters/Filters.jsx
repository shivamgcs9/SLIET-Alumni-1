import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  /* margin: 18px 200px; */
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin: 18px;
    flex-direction: column;
  }
`;

const Filter = styled.div`
  margin-top: 20px;
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
  }
`;
const MobileFilter = styled.div`
  flex: 1.5;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  display: none;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: flex;
    position: absolute;
    background-color: lightskyblue;
    bottom: 0;
    z-index: 999;
    display: none;
  }
`;

const FilterItem = styled.div`
  @media screen and (max-width: 768px) {
    width: 300px;
    margin-bottom: 1rem;
  }
`;

const Span = styled.span`
  font-weight: bold;
  /* margin: 0 15px 0 45px; */
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
  }
`;

const Select = styled.select`
  padding: 10px;
  margin-left: 20px;
  border: 1px solid rgb(90, 180, 220);
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
`;
const Option = styled.option``;

const SearchContainer = styled.div`
  flex: 1;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
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

const Button = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Filters = () => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({});

  const handleFilters = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    console.log(filters);
    console.log(value);
  };
  return (
    <Container>
      <SearchContainer>
        <InputBox>
          <Input
            placeholder="Search a Student, branch or job location"
            type="text"
          />
          <FaSearch />
        </InputBox>
      </SearchContainer>
      <Filter>
        <FilterItem>
          <Span onClick={() => setOpen(!open)}>Filters:</Span>
        </FilterItem>

        <FilterItem>
          <Select onChange={handleFilters}>
            <Option defaultValue>course</Option>
            <Option>Computer Science</Option>
            <Option>Mechanical Engineering</Option>
            <Option>Chemical Engineering</Option>
            <Option>Food Engineering</Option>
          </Select>
        </FilterItem>
        <FilterItem className="filterItem">
          <Select name="" id="" onChange={handleFilters}>
            <Option defaultValue>Passing Year</Option>
            <Option value="2018">2018</Option>
            <Option value="2019">2019</Option>
            <Option value="2020">2020</Option>
            <Option value="2021">2021</Option>
            <Option value="2022">2022</Option>
          </Select>
        </FilterItem>
        <FilterItem>
          <Select name="" id="" onChange={handleFilters}>
            <Option defaultValue>Location</Option>
            <Option value="Uttrakhand">Uttrakhand</Option>
            <Option value="Punjab">Punjab</Option>
            <Option value="Himachal">Himachal</Option>
            <Option value="Delhi">Delhi</Option>
            <Option value="Shimla">Shimla</Option>
          </Select>
        </FilterItem>
        <Button onClick={() => setOpen(!open)}>Apply</Button>
      </Filter>
      <MobileFilter>
        <FilterItem>
          <Span onClick={() => setOpen(!open)}>Filters:</Span>
        </FilterItem>

        {open && (
          <>
            <FilterItem>
              <Select>
                <Option defaultValue>course</Option>
                <Option>Computer Science</Option>
                <Option>Mechanical Engineering</Option>
                <Option>Chemical Engineering</Option>
                <Option>Food Engineering</Option>
              </Select>
            </FilterItem>
            <FilterItem className="filterItem">
              <Select name="" id="">
                <Option defaultValue>Graduation Year</Option>
                <Option value="">2018</Option>
                <Option value="">2019</Option>
                <Option value="">2020</Option>
                <Option value="">2021</Option>
                <Option value="">2022</Option>
              </Select>
            </FilterItem>
            <FilterItem>
              <Select name="" id="">
                <Option defaultValue>Location</Option>
                <Option value="">Uttrakhand</Option>
                <Option value="">Punjab</Option>
                <Option value="">Himachal</Option>
                <Option value="">Delhi</Option>
                <Option value="">Shimla</Option>
              </Select>
            </FilterItem>
            <Button onClick={() => setOpen(!open)}>Apply</Button>
          </>
        )}
      </MobileFilter>
    </Container>
  );
};

export default Filters;
