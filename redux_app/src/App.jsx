import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import "./App.css";
import Footballlist from "./components/Footballlist";
import TodoList from "./components/TodoList";
import Routes from "./Allroutes/Routeer";
import Routeer from "./Allroutes/Routeer";
import { Link, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Flex className="shadow">
      <Spacer/>
        <Box mr={10} p={5}>
          <Link to={'/'}>
          
          <Button bg={"red"} fontSize={25} borderRadius={5} p={2} mr={4} fontWeight={700} color={'white'} >Football Mathch List</Button>
          </Link>
          <Link to={'/todo_list'}>
          
          <Button bg={"red"} fontSize={25} borderRadius={5} p={2} fontWeight={700} color={'white'} >ToDo List</Button>
          </Link>
        </Box>
        
      
      </Flex>
      <hr  style={{height:"10px"}}/>
      <Routeer/>

    </>
  );
}

export default App;
