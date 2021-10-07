import React from "react";
import { Container, Stack } from "@chakra-ui/layout";
import Dashboard from "./components/Dashboard"

function App() {

  return (
    <Stack pt={5}>
      <Container maxW="container.xl">
        <Dashboard />
      </Container>
    </Stack>
  );

}

export default App;