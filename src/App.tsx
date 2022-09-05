import React from "react";
import { Container } from "@chakra-ui/react";
import { Header } from "./components/header";

const App: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Header />
    </Container>
  );
};

export default App;
