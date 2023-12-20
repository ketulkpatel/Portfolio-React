import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  useColorMode,
  Circle,
  GridItem,
  Grid,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Img,
} from "@chakra-ui/react";
import "./Home.css";
import Interests from "../Components/Interests";
import MadeWith from "../Components/MadeWith";
import Welcome from "../Components/Welcome";
export default function Home() {
  const { colorMode } = useColorMode();
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${
      colorMode === "light" ? "#2196F3, #FF5722" : "#FF5722, #2196F3"
    })`,
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
  };

  return (
    <VStack minHeight="100vh">
      <Welcome />
      <Heading style={gradientStyle}>INTERESTS</Heading>
      <Interests />
    </VStack>
  );
}
