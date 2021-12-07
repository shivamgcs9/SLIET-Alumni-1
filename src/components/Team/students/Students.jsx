import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Student from "../student/Student";
import ReactPaginate from "react-paginate";
import { API } from "../../../../src/backend";

import "./students.css";

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
    </div>
  );
};

export default Students;
