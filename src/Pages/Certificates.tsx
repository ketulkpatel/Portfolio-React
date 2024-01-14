import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Square,
  Stack,
  useColorMode,
  Text,
  Icon,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { FaAws, FaReact } from "react-icons/fa";

function Certificates() {
  const { colorMode } = useColorMode();

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${
      colorMode === "light" ? "#2196F3, #FF5722" : "#FF5722, #2196F3"
    })`,
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
  };

  const certificates = [
    {
      name: "AWS Developer Associate",
      to: "/",
      image: "./AWS.png",
      color: "yellow.500",
    },
    {
      name: "AWS Cloud Practitioner",
      to: "/education",
      image: "./AWS.png",
      color: "yellow.500",
    },
    {
      name: "AWS Developer Associate",
      to: "/certificates",
      image: "./DeepLearning.png",
      color: "yellow.500",
    },
    { name: "AWS Developer Associate", to: "/", color: "green.500" },
    { name: "AWS Developer Associate", to: "/", color: "cyan.500" },
    { name: "AWS Developer Associate", to: "/", color: "blue.500" },
  ];

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="space-evenly">
      <Flex width="35%">
        <Image src="./Certificates.png" width="500px" height="500px"></Image>
      </Flex>
      <Flex flexDirection="column" gap="10" width="70%">
        <Flex alignItems="center" justifyContent="center">
          <Heading style={gradientStyle}>Certifications</Heading>
        </Flex>
        <Flex gap="5" flexWrap="wrap">
          {certificates.map((certificate, index) => (
            <Card
              size="xs"
              padding="2"
              border={`1px dotted ${colorMode === "light" ? "black" : "white"}`}
              borderRadius="lg"
              boxShadow={
                colorMode === "light"
                  ? "0 6px 8px rgba(0, 0, 0, 0.7)"
                  : "0 6px 8px rgba(255, 255, 255, 0.7)"
              }
              backgroundColor={colorMode === "light"
              ? "white"
              : "white"}
            >
              <CardBody>
                <Center>
                  <Image
                    alignItems="center"
                    src={certificate.image}
                    height="70"
                  />
                </Center>
                <Stack>
                  <Text fontWeight="bold" fontFamily="monospace" fontSize="lg" textColor="black">
                    {certificate.name}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Certificates;
