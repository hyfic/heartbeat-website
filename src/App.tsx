import React from "react";
import { Container } from "@chakra-ui/react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Landing } from "./components/landing";

const App: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Header />
      <Landing />
      <Footer />
    </Container>
  );
};

export default App;
