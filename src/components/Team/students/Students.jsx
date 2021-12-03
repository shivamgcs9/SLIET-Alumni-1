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

  //! backend const [users, setUsers] = useState(JsonData.slice(0, 5));
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const filledData = () => {
    fetch(`${API}/get-alumni`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data.data);
        setPageNumber(data.page);
      });
  };

  useEffect(() => {
    filledData();
  }, []);

  const usersPerPage = 10;
  // const pagesVisited = pageNumber * usersPerPage;
  const pagesVisited = 1;

  const displayUsers = users
    //! backend  .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <Container>
          {users.map((user) =>
            // <Student user={user} key={user.id} />
            console.log(user)
          )}
        </Container>
      );
    });

  //! backend const pageCount = Math.ceil(users.length / usersPerPage);
  const pageCount = 2;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      {/* {displayUsers} */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Students;
