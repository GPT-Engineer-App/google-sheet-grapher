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
          <Text>Here would be a graph based on data from Google Sheets.</Text>
          {/* Placeholder for graph */}
          <Image src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaW1wbGUlMjBiYXIlMjBjaGFydHxlbnwwfHx8fDE3MTQ1ODIwMTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Bar Chart" />
        </Box>
      )}
    </VStack>
  );
};

export default Index;
