import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Student from "../student/Student";
import JsonData from "../../../MOCK_DATA .json";
import ReactPaginate from "react-paginate";
import { API } from "../../../../src/backend";

import "./students.css";

const Container = styled.div`
  padding: 0 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Students = () => {
  //   const [users, setUsers] = useState(JsonData.slice(0, 1));
  //   const [pageNumber, setPageNumber] = useState(0);

  //   const usersPerPage = 10;
  //   const pagesVisited = pageNumber * usersPerPage;

  //   const displayUsers = users
  //     .slice(pagesVisited, pagesVisited + usersPerPage)
  //     .map((user) => {
  //       return (
  //         <Container>
  //           {users.map((user) => (
  //             <Student user={user} key={user.id} />
  //           ))}
  //         </Container>
  //       );
  //     });

  //   const pageCount = Math.ceil(users.length / usersPerPage);

  //   const changePage = ({ selected }) => {
  //     setPageNumber(selected);
  //   };
  //   return (
  //     <div className="App">
  //       {displayUsers}
  //       <ReactPaginate
  //         previousLabel={"Previous"}
  //         nextLabel={"Next"}
  //         pageCount={pageCount}
  //         onPageChange={changePage}
  //         containerClassName={"paginationBttns"}
  //         previousLinkClassName={"previousBttn"}
  //         nextLinkClassName={"nextBttn"}
  //         disabledClassName={"paginationDisabled"}
  //         activeClassName={"paginationActive"}
  //       />
  //     </div>
  //   );
  // };

  let [users, setUsers] = useState([]);
  let [pageCount, setPageCount] = useState(1);
  let [currentPage, setCurrentPage] = useState(0);
  let [isLoaded, setisLoaded] = useState(false);

  const filledData = () => {
    console.log(currentPage == 0);
    let payload = {
      page: currentPage,
      limit: 1
    }

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
    currentPage = (page.selected) + 1;
    filledData();
  };


  const displayUsers = users
    .map((user) => {
      return (
        <Container>
          <Student user={user} key={user.id} />
        </Container>
      );
    });

  // const changePage = ({selected}) => {
  //   // setPageNumber(selected);
  // };

  return (
    <div className="App">
      {displayUsers}
      {isLoaded ? (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={(e) => handlePageChange(e)}
          containerClassName={"container"}
          previousLinkClassName={"page"}
          nextLinkClassName={"page"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"active"}
        />
      ) : (
        <div>Nothing to display</div>
      )}


    </div>
  );
};

export default Students;
