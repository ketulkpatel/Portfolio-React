import React, { useEffect, useState } from "react";
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
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { BsCaretRightFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

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
        year: "2022 - 2023",
        CGPA: "3.98/4.3",
      },
      achievements: [
        // "Completed Internship as Junior Developer",
        // "Completed Internship as Junior Developer",
        // "Completed Internship as Junior Developer",
      ],
      transcript: "https://porfolio-ketul.s3.ca-central-1.amazonaws.com/Ketul_Transcript_Dalhousie.pdf",
      x_before: -100,
      x_after: 0,
      y_before: 0,
      y_after: 0,
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
        year: "2017 - 2021",
        CGPA: "8.34/10",
      },
      achievements: [
        // "Completed Internship as Junior Developer",
        // "Completed Internship as Junior Developer",
        // "Completed Internship as Junior Developer",
      ],
      transcript: "https://porfolio-ketul.s3.ca-central-1.amazonaws.com/Ketul_Transcript_Dharmsinh.pdf",
      x_before: 100,
      x_after: 0,
      y_before: 0,
      y_after: 0,
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

  const invertStyle = colorMode === "dark" ? { filter: "invert(100%)" } : {};
  const [isBigSize] = useMediaQuery("(min-width: 760px)");

  const fetchTranscript = (transcript: string) => {
    window.open(transcript, '_blank');
  };
  
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      fontFamily="monospace"
      justifyContent="space-evenly"
    >
      <Flex justifyContent="center">
        <Heading style={gradientStyle}>EDUCATION</Heading>
      </Flex>
      <Flex flexDirection={["column", "row"]}>
        {sections.map((section, index) => (
          <Flex width="100%" flexDirection="column" zIndex={1} key={index}>
            <Flex alignItems="center" padding="10">
              <Flex
                width="100%"
                justifyContent="center"
                flexDirection="column"
                gap={7}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 0,
                    y: -100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{ duration: 2 }}
                  key={section.name}
                >
                  <Flex justifyContent="center" fontSize="xl">
                    <Heading fontFamily="mono">{section.name}</Heading>
                  </Flex>
                </motion.div>
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
                  alignItems="center"
                  flexDirection={["column", "row"]}
                >
                  <Image
                    src={section.university.image}
                    width="75px"
                    height="75px"
                    alt={section.name}
                    backgroundColor="white"
                  ></Image>

                  <Flex flexDirection="column" width="100%" gap={5}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: section.x_before,
                        y: section.y_before,
                      }}
                      animate={{
                        opacity: 1,
                        x: section.x_after,
                        y: section.y_after,
                      }}
                      transition={{ duration: 2 }}
                      key={section.name}
                    >
                      <Flex
                        justifyContent={["space-between"]}
                        fontSize={["xs", "lg"]}
                        fontWeight="bold"
                      >
                        <Text>{section.university.name}</Text>
                        <Text>{section.degree.year}</Text>
                      </Flex>
                      <Flex
                        justifyContent="space-between"
                        fontSize={["2xs", "lg"]}
                        fontStyle="oblique"
                      >
                        <Text>{section.degree.name}</Text>
                      </Flex>
                      <Flex mt="5" flexDirection="column">
                        {section.achievements.map((achievement, i) => (
                          <Flex alignItems="center">
                            <Icon
                              as={BsCaretRightFill}
                              boxSize={4}
                              color="peru"
                            />
                            <Text fontSize={["xs", "lg"]}>{achievement}</Text>
                          </Flex>
                        ))}
                      </Flex>
                    </motion.div>
                    <Flex marginLeft="auto">
                      <Button colorScheme="blue" padding="2" height="130%"  width="100%" onClick={() => fetchTranscript(section.transcript)}>
                        <Text fontSize={["xs", "md"]} fontFamily="monospace" >Transcript <Icon as={FaExternalLinkAlt} boxSize="2"></Icon> </Text>
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>

      {isBigSize && (
        <div
          style={{
            content: "''",
            backgroundImage: "url('./Education_day.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
            position: "absolute",
            top: 70,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            opacity: 0.15,
            zIndex: 0,
            ...invertStyle,
          }}
        />
      )}
    </Flex>
  );
}
