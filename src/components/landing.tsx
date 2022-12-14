import React from "react";
import LaptopScreen from "../assets/laptop_screen.png";
import { Center, Container, Heading, Link, Text } from "@chakra-ui/react";

export const Landing: React.FC = () => {
  return (
    <div className="mb-10 mt-5">
      <Center>
        <Heading mt={10} size="4xl">
          Building <span className="text-teal-400">Productive</span> Doctors
        </Heading>
      </Center>
      <Center>
        <Text fontSize="xl" mt={8} className="opacity-80">
          <Link
            href="https://github.com/octoi/heartbeat"
            className="font-medium"
          >
            HeartBeat
          </Link>{" "}
          is an open-source desktop application for doctors to manage patient
          data .
        </Text>
      </Center>
      <Center mt={10}>
        <Container maxW="container.lg">
          <img src={LaptopScreen} alt="Heartbeat" />
        </Container>
      </Center>
    </div>
  );
};
