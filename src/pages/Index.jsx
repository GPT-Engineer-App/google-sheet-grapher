import React, { useState } from "react";
import { Box, Button, Text, VStack, Heading, useToast, Image } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([
    { label: "A", value: 30 },
    { label: "B", value: 70 },
  ]);
  const toast = useToast();

  const handleLogin = () => {
    setIsLoggedIn(true);
    toast({
      title: "Logged in",
      description: "You have logged in using Google.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged out",
      description: "You have logged out.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Heading>Welcome to the Data Grapher!</Heading>
      <Text>If you log in with Google, you can see your data graphed here.</Text>
      {!isLoggedIn ? (
        <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={handleLogin}>
          Login with Google
        </Button>
      ) : (
        <Button colorScheme="blue" onClick={handleLogout}>
          Logout
        </Button>
      )}
      {isLoggedIn && (
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">Graphed Data</Heading>
          <Text>Below is a simple bar chart based on data from Google Sheets.</Text>
          <svg width="200" height="100" style={{ border: "1px solid black" }}>
            {data.map((item, index) => (
              <rect key={index} x={index * 50 + 10} y={100 - item.value} width="40" height={item.value} fill="blue" />
            ))}
          </svg>
        </Box>
      )}
    </VStack>
  );
};

export default Index;
