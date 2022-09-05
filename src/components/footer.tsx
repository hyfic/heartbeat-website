import React from "react";
import HyficLogo from "../assets/hyfic.svg";
import { AiFillHeart } from "react-icons/ai";
import { Flex, Link, Text, Divider } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <div className="mt-16">
      <Divider />
      {/* Todo: Add a quick links */}
      <Flex mt={5} mb={10} alignItems="center" justifyContent="space-between">
        {/* <Flex alignItems="center">
          <Text fontSize="lg" className="opacity-70">
            Made with
          </Text>
          <Text mx={1} fontSize="lg" color="red.300">
            <AiFillHeart />
          </Text>
          <Link
            href="https://fadhilsaheer.github.io"
            fontSize="lg"
            className="opacity-70 font-medium"
          >
            Fadhil
          </Link>
        </Flex> */}
        <Flex alignItems="center">
          <Text fontSize="lg" mr={1} className="opacity-70">
            Powered by
          </Text>
          <Link href="https://hyfic.github.io">
            <img
              src={HyficLogo}
              alt="hyfic logo"
              className="w-14 opacity-60 transition-all duration-100 hover:opacity-100"
            />
          </Link>
        </Flex>
        <Text fontSize="lg" className="opacity-70">
          © HeartBeat {new Date().getFullYear()}
        </Text>
      </Flex>
    </div>
  );
};
