import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DATA, ERROR, LOADER } from "../Redux/action";
// Footballlist.jsx
// import React, { useCallback, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { LOADER, ERROR, DATA } from "../Redux/action";
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

const TodoList = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.todoReducer); // Renamed store to state
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(10);
  //   const data = JSON.stringify(storeData);

  useEffect(() => {
    fetchData();
    console.log("todo", storeData);
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
        `https://jsonplaceholder.typicode.com/todos?_limit=10&&_page=${current}`
      );
      const data = await res.json();
      console.log(data);
      dispatch({ type: DATA, payload: data });
      dispatch({ type: LOADER, payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: LOADER, payload: false });
      dispatch({ type: ERROR, payload: true });
    }
  };
  if(storeData.isLoading){
    return <Loading/>
  }

  return (
    <div>
      <Heading display={"flex"} justifyContent={"center"}>
        To Do List
      </Heading>
      <TableContainer mt={10}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th fontSize={20}>USER ID</Th>
              <Th fontSize={20}>TITLE</Th>
              <Th fontSize={20}>STATUS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {storeData.todoData.map((ele) => {
              return (
                <Tr key={ele.id}>
                  <Td>{ele.userId}</Td>
                  <Td>{ele.title}</Td>
                  <Td color={ele.completed?'green':'yellow'}>{ele.completed?"Completed":'Pending'}</Td>
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

export default TodoList;
