import React from "react";
import {
  Flex,
  Heading,
  Text,
  Image,
  Wrap,
  WrapItem,
  Icon,
  Tooltip,
  useColorMode,
  useDisclosure,
  Box,
  VStack,
  Circle,
} from "@chakra-ui/react";
import { BsCaretRightFill } from "react-icons/bs";

export default function Education() {
  const imageDalhousie = "/Dalhousie.png";
  const imageDharmsinh = "/Dharmsinh.png";
  const imageGraduation = "/Graduation.png";
  const imageUndergraduation = "/Undergraduation.png";
  const sections = [
    {
      name: "Graduation",
      university: {
        name: "Dalhousie University",
        image: imageDalhousie,
      },
      image: imageGraduation,
      degree: {
        name: "Masters in Applied Computer Science",
        year: "Jan 2022 - Sep 2023",
        CGPA: "3.98/4.3",
      },
    },
    {
      name: "Undergraduation",
      university: {
        name: "Dharmsinh Desai University",
        image: imageDharmsinh,
      },
      image: imageUndergraduation,
      degree: {
        name: "Bachelors in Information & Technology",
        year: "Aug 2017 - May 2021",
        CGPA: "8.34/10",
      },
    },
  ];

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
    <div>
      {sections.map((section, index) => (
        <Flex
          minHeight="100vh"
          width="100%"
          fontFamily="monospace"
          flexDirection="column"
        >
          <Flex alignItems="center" padding="10">
            <Flex width="45%">
              <Image
                src={section.image}
                width="400px"
                height="400px"
                alt={section.name}
              ></Image>
            </Flex>
            <Flex width="70%" flexDirection="column" gap={5}>
              <Flex justifyContent="center" fontSize="xl">
                <Heading style={gradientStyle}>{section.name}</Heading>
              </Flex>
              <Flex
                border={`1px solid ${
                  colorMode === "light" ? "black" : "white"
                }`}
                borderRadius="lg"
                boxShadow={
                  colorMode === "light"
                    ? "0 6px 8px rgba(0, 0, 0, 0.7)"
                    : "0 6px 8px rgba(255, 255, 255, 0.7)"
                }
                padding="5"
                gap={5}
              >
                <Image
                  src={section.university.image}
                  width="75px"
                  height="75px"
                  alt={section.name}
                  backgroundColor="white"
                ></Image>
                <Flex flexDirection="column" width="100%">
                  <Flex
                    justifyContent="space-between"
                    fontSize="lg"
                    fontWeight="bold"
                  >
                    <Text>{section.university.name}</Text>
                    <Text>{section.degree.year}</Text>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    fontSize="md"
                    fontStyle="oblique"
                  >
                    <Text>{section.degree.name}</Text>
                    <Text>CGPA: {section.degree.CGPA}</Text>
                  </Flex>
                  <Flex mt="5"  flexDirection="column">
                    <Flex alignItems="center">
                        <Icon as={BsCaretRightFill} boxSize={4} color="peru"/><Text fontSize="md">
                            Completed Internship as Junior Developer
                        </Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Icon as={BsCaretRightFill} boxSize={4} color="peru" /><Text fontSize="md">
                            Completed Internship as Junior Developer
                        </Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Icon as={BsCaretRightFill} boxSize={4} color="peru"/><Text fontSize="md">
                            Completed Internship as Junior Developer
                        </Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Icon as={BsCaretRightFill} boxSize={4} color="peru"/><Text fontSize="md">
                            Completed Internship as Junior Developer
                        </Text>
                    </Flex>
                    </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </div>
  );

  /* <Flex>
   */
}
