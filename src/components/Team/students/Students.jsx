import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Student from "../student/Student";
import ReactPaginate from "react-paginate";
import { API } from "../../../../src/backend";
import { FaSearch } from "react-icons/fa";

import "./students.css";

const ContainerFill = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Filter = styled.div`
  width: 300px;
  text-align: center;
  margin-top: 20px;
`;
const MobileFilter = styled.div`
  display: none;
`;
const FilterItem = styled.div``;

const Span = styled.span`
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 25px;
  padding: 5px 25px;
  background-color: lightskyblue;
  cursor: pointer;
`;

const Select = styled.select`
  margin-top: 15px;
  width: 100%;
`;

const Option = styled.option``;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;
const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  padding: 10px;
  border: 2px solid lightskyblue;
  border-radius: 20px;
`;
const Icon = styled(FaSearch)`
  margin-left: 10px;
  font-size: 20px;
  color: lightskyblue;
`;
const SearchContainer = styled.div``;
const Button = styled.button`
  margin-top: 10px;
`;

const Container = styled.div`
  padding: 0 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Students = () => {
  let [users, setUsers] = useState([]);
  let [pageCount, setPageCount] = useState(1);
  let [currentPage, setCurrentPage] = useState(0);
  let [isLoaded, setisLoaded] = useState(false);

  //==========

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
  //==========

  const filledData = () => {
    console.log(currentPage === 0);
    let payload = {
      page: currentPage,
      limit: 10,
    };

    fetch(`${API}/get-alumni`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data.data);
        setPageCount(data.totalPages);
        setCurrentPage(data.page);
        setisLoaded(true);
      });
  };

  useEffect(() => {
    filledData();
  }, []);

  const handlePageChange = (page) => {
    currentPage = page.selected + 1;
    filledData();
  };

  const displayUsers = users.map((user) => {
    return <Student user={user} key={user.id} />;
  });

  return (
    <div className="App">
      <>
        <ContainerFill>
          <SearchContainer>
            <InputBox>
              <Input
                placeholder="Search a Student, branch or location"
                type="text"
              />
              <Icon />
            </InputBox>
          </SearchContainer>

          <Filter>
            <FilterItem>
              <Span onClick={() => setOpen(!open)}>Filters:</Span>
              <Span onClick={() => setFilters(filters)}>Clear</Span>
            </FilterItem>

            {open && (
              <>
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
              </>
            )}
          </Filter>
        </ContainerFill>
        <Container>{displayUsers}</Container>
        {isLoaded ? (
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={(e) => handlePageChange(e)}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"page"}
            nextLinkClassName={"page"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        ) : (
          <div>Nothing to display</div>
        )}
      </>
    </div>
  );
};

export default Students;
