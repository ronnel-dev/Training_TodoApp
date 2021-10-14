import React from "react";
import TodoApp from "./TodoApp";
import TicTacToe from "../TicTacToe/TicTacToe";
import TopHeader from "./TopHeader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/color-mode";
import todoApp from "../assets/todo-app.png";
import tictactoeApp from "../assets/tictactoe-app.png";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";

export default function Dashboard() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const DashboardHeading = () => (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 10 }}
        >
          <Heading
            color={isDark ? "cyan.400" : "blue.500"}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            React + Chakra UI Training
          </Heading>
          <Text color={"gray.500"}>Powered by FullSpeed Technologies.</Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              onClick={() =>
                window.open("https://www.fullspeedtechnologies.com/")
              }
              colorScheme={"blue"}
              bg={"blue.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "blue.500",
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8 }}
          py={{ base: 10 }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Link to="/todo-app">
              <Box
                border={"1px"}
                borderColor={"cyan.400"}
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
                _hover={{
                  border: "2px",
                  borderColor: "purple.500",
                  boxShadow: "0px 5px 20px 0px  rgb(128 0 128 / 43%)",
                }}
              >
                <Image
                  alt={"Todo App"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={todoApp}
                />
              </Box>
            </Link>
          </Flex>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Link to="/tictactoe-app">
              <Box
                border={"1px"}
                borderColor={"cyan.400"}
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
                _hover={{
                  border: "2px",
                  borderColor: "purple.500",
                  boxShadow: "0px 5px 20px 0px  rgb(128 0 128 / 43%)",
                }}
              >
                <Image
                  alt={"Tictactoe App"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={tictactoeApp}
                />
              </Box>
            </Link>
          </Flex>
        </Stack>
      </Container>
    </>
  );

  return (
    <Router>
      <TopHeader />
      <Switch>
        <Route path="/" exact component={DashboardHeading} />
        <Route path="/todo-app" component={TodoApp} />
        <Route path="/tictactoe-app" component={TicTacToe} />
      </Switch>
    </Router>
  );
}
