import { useState, useEffect } from "react";
import { Box, Text, Spinner, Button } from "@chakra-ui/react";
import UserCard from "./components/UserCard";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [lastUsers, setLastUsers] = useState([]);
  const [showLast, setShowLast] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setUsers(response?.data);
        setLastUsers(response?.data?.slice(6, 10));
        // console.log(response?.data);
      })
      .catch(function (error) {
        setUsers([]);
        console.log(error);
      })
  }, []);

  return (
    <>
      <Box
        minW={"98vw"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
        mt={5}
      >
        <Text
          textAlign={"center"}
          mt={5}
          mb={5}
          fontWeight={"bold"}
          fontSize={24}
        >
          User List
        </Text>
        {users?.length === 0 ? (
          <Box display={"flex"} flexDir={"column"} alignItems={"center"} mt={5}>
            <Spinner size={"lg"} />
          </Box>
        ) : (
          <></>
        )}
        {users && users?.length > 0 && !showLast ? (
          users
            ?.slice(0, 5)
            ?.map(user => <UserCard user={user} key={user?.id} />)
        ) : (
          <></>
        )}
        {users && users?.length > 0 && showLast ? (
          lastUsers?.map(user => <UserCard user={user} key={user?.id} />)
        ) : (
          <></>
        )}
        {users?.length > 5 && !showLast ? (
          <Box mt={5}>
            <Button onClick={() => setShowLast(true)}>Next</Button>
          </Box>
        ) : (
          <> </>
        )}
        {users?.length > 5 && showLast ? (
          <Box mt={5}>
            <Button onClick={() => setShowLast(false)}>Prev</Button>
          </Box>
        ) : (
          <> </>
        )}
      </Box>
    </>
  );
}

export default App;
