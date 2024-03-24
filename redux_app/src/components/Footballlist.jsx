// Footballlist.jsx
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOADER, ERROR, DATA } from "../Redux/action";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import Loading from "./Loading";
import Pagination from "./Pagination";
// import store from "../Redux/store.js"; // Importing the Redux store

const Footballlist = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.footballreducer); // Renamed store to state
  const [current,setCurrent]=useState(1)
  const [total,setTotal]=useState(1000)
  //   const data = JSON.stringify(storeData);

  useEffect(() => {
    fetchData();
    console.log("f", storeData.footballMatches);
  }, [current]);
  const handleclick = () => {
    setCurrent((prev) => prev + 1);
  };
  const handleclick1 = () => {
    setCurrent((prev) => prev - 1);
  };

  const fetchData = async () => {
    dispatch({ type: LOADER, payload: true });
    try {
      const res = await fetch(
        `https://jsonmock.hackerrank.com/api/football_matches?page=${current}`
      );
      const data = await res.json();
      //   console.log(data);
      dispatch({ type: DATA, payload: data.data });
      dispatch({ type: LOADER, payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: LOADER, payload: false });
      dispatch({ type: ERROR, payload: true });
    }
  };
  if (storeData.isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Heading display={"flex"} justifyContent={"center"}>
        Football match list
      </Heading>
      <TableContainer mt={10}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th fontSize={20}>Competition</Th>
              <Th fontSize={20}>Round</Th>
              <Th fontSize={20}>Team1</Th>
              <Th fontSize={20}>Team1_Goals</Th>
              <Th fontSize={20}>Team2</Th>
              <Th fontSize={20}>Team2_Goals</Th>
              <Th fontSize={20}>Year</Th>
            </Tr>
          </Thead>
          <Tbody>
            {storeData.footballMatches.map((ele) => {
              return (
                <Tr key={ele.id}>
                  <Td>{ele.competition}</Td>
                  <Td>{ele.round}</Td>
                  <Td>{ele.team1}</Td>
                  <Td> {ele.team1goals}</Td>
                  <Td>{ele.team2}</Td>
                  <Td> {ele.team2goals}</Td>
                  <Td>{ele.year}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination
            current={current}
            total={total}
            handleclick={handleclick}
            handleclick1={handleclick1}
          />
    </div>
  );
};

export default Footballlist;
