import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import UserModal from "../UserModal";

function UserCard({ user }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDialogOpen, onOpen: onDialogOpen, onClose: onDialogClose } = useDisclosure()
  const cancelRef = React.useRef()
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{user?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UserModal user={user} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <AlertDialog
        isOpen={isDialogOpen}
        leastDestructiveRef={cancelRef}
        onClose={onDialogClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onDialogClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onDialogClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Box
        key={user?.id}
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        minW={["90vw", "90vw", "400px", "400px"]}
        maxW={["90vw", "90vw", "400px", "400px"]}
        borderRadius={5}
        bg={"#e6f0f5"}
        boxShadow={"md"}
        minH={"120px"}
        padding={2}
        mt={3}
        cursor={"pointer"}
        _hover={{
          background: '#c1e6f5',
          transitionDuration: 500
        }}
      >
        <Box display={"flex"} flexDir={"column"} alignItems={"start"} ml={5} mr={2}>
          <Text fontWeight={"semdibold"} fontSize={20}>
            {user?.username}
          </Text>
          <Button
            onClick={onOpen}
            bg={"#1b6be3"}
            _hover={{
              background: "#1b6be3"
            }}
            color={"white"}
            width={"100px"}
            mt={5}
          >
            Edit
          </Button>
        </Box>
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-end"}
          ml={"auto"}
          mr={5}
        >
          <Text fontSize={[15,15,16,16]}>{user?.email}</Text>
          <Button
            onClick={onDialogOpen}
            bg={"#e31b4a"}
            _hover={{
              background: "#e31b4a"
            }}
            color={"white"}
            width={"100px"}
            mt={5}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default UserCard;
