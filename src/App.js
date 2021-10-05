import React from "react";
import TopHeader from "./components/TopHeader";
import { VStack } from "@chakra-ui/layout";
import Header from "./components/Header";
import ToDo from "./components/ToDo"

function App() {

  return (
    <VStack p={5}>
      <TopHeader></TopHeader>
      <Header></Header>
      <ToDo></ToDo>
    </VStack>
  );

}

export default App;