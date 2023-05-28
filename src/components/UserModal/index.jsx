import {
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";

function UserModal({ user }) {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" defaultValue={user?.email} />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>User Name</FormLabel>
        <Input type="name" defaultValue={user?.username} />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>Name</FormLabel>
        <Input type="name" defaultValue={user?.name} />
      </FormControl>
      <FormControl mt={2} mb={5}>
        <FormLabel>Phone</FormLabel>
        <Input type="name" defaultValue={user?.phone} />
      </FormControl>
      <FormControl mt={2} mb={2}>
        <FormLabel>Website</FormLabel>
        <Input type="text" defaultValue={user?.website} />
      </FormControl>
      <FormControl mt={2} mb={2}>
        <FormLabel>Address</FormLabel>
        <Box
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Input
            type="text"
            defaultValue={user?.address?.street}
            mb={2}
            mr={2}
          />
          <Input type="text" defaultValue={user?.address?.suite} mb={2} />
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Input type="text" defaultValue={user?.address?.city} mb={2} mr={2} />
          <Input type="text" defaultValue={user?.address?.zipcode} mb={2} />
        </Box>
      </FormControl>
      <FormControl mt={2} mb={5}>
        <FormLabel>Company</FormLabel>
        <Box
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Input type="text" defaultValue={user?.company?.name} mr={2} />
          <Input type="text" defaultValue={user?.company?.catchPhrase} />
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Input type="text" defaultValue={user?.company?.bs} mt={2} />
        </Box>
      </FormControl>
    </Box>
  );
}

export default UserModal;
