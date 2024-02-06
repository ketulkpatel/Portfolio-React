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

export default function Experience() {
  const imageMobia = "/Mobia.png";
  const imageCerebulb = "/Cerebulb.png";
  const imageFreelance = "/Freelance.png";

  const sections = [
    {
      company: {
        name: "Freelance",
        image: imageFreelance,
      },
      position: {
        name: "FullStack Developer",
        year: "September 2023 - Present",
      },
      achievements: [
        "Spearheaded the strategic planning phase for a cutting-edge API marketplace, outlining the vision, objectives, and technical requirements.",
        "Evaluated various technologies, considering scalability, security, and ease of integration, to lay the foundation for a robust and flexible platform.",
        "Worked closely with developers, designers, and other stakeholders to initiate the coding phase and ensure alignment with project timelines.",
        "Orchestrated the formation of a collaborative development team, fostering an agile and responsive work environment.",
      ],
      x_before: -100,
      x_after: 0,
      y_before: 0,
      y_after: 0,
    },
    {
      company: {
        name: "Mobia Technology Innovations",
        image: imageMobia,
      },
      position: {
        name: "Junior Developer",
        year: "May 2023 - September 2023",
      },
      achievements: [
        "Implemented and refined the website for GE Aviation, utilizing a micro-service architecture to efficiently manage and organize diverse manuals associated with various aircraft across multiple sites.",
        "Played a key role in optimizing application performance, achieving a significant reduction in load time from 10 seconds to 2 seconds which enabled seamless access and efficient management of extensive volumes of critical manuals.",
        "Implemented a user-friendly interface, improving the overall user experience by providing intuitive navigation and efficient access to essential information.",
      ],
      x_before: 100,
      x_after: 0,
      y_before: 0,
      y_after: 0,
    },
    {
      name: "Freelance",
      company: {
        name: "Freelance",
        image: imageFreelance,
      },
      position: {
        name: "Software Developer",
        year: "May 2021 -  November 2021",
      },
      achievements: [
        "Crafted a visually stunning and fully functional e-commerce website tailored to the unique needs of the jewellery industry.",
        "Enhanced the jewellery website with personalized choices such as ring sizing, metal selection, and gemstone preferences, resulting in a tailored and interactive shopping experience that contributed to a nearly 8%increase in overall profits.",
        "Integrated secure payment gateways and user-friendly navigation, providing an engaging online shopping experience for customers",
        "Prioritized mobile responsiveness to capture a wider audience, enhancing the accessibility of the jewellery website for potential customers.",
      ],
      x_before: -100,
      x_after: 0,
      y_before: 0,
      y_after: 0,
    },
    {
      company: {
        name: "Cerebulb",
        image: imageCerebulb,
      },
      position: {
        name: "Python Developer",
        year: "December 2020 - May 2021",
      },
      achievements: [
        "Contributed to the development and implementation of a Django framework-based web application, focusing on anomaly detection and response.",
        "Deployed Neural Network-based image algorithms for real-time anomaly detection, boosting efficiency from 96% to 98%, markedly improving the application’s responsiveness to irregularities.",
        "Pioneered the creation and delivery of a graph-based interactive admin dashboard, providing clients with seamless access to real-time sensor data that empowered users to make informed decisions based on current and real-time information.",
      ],
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
    window.open(transcript, "_blank");
  };

  const [visibleAchievements, setVisibleAchievements] = useState<number[]>([]);

  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      fontFamily="monospace"
      width="100%"
    >
      <Flex justifyContent="center" margin={50}>
        <Heading style={gradientStyle}>EXPERIENCE</Heading>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        gap="9"
        flexDirection="column"
        padding={["0","50"]}
      >
        {sections.map((section, index) => (
          <motion.div
            initial={{
              opacity: 0,
              x: section.x_before,
              y: section.y_before,
              width: "70%",
            }}
            animate={{
              opacity: 1,
              x: section.x_after,
              y: section.y_after,
              width: "70%",
            }}
            transition={{ duration: 2 }}
            key={`${section.name}_${index}`} 
            onClick={() => {
              setVisibleAchievements((prev) => {
                if (prev.includes(index)) {
                  return prev.filter((i) => i !== index);
                } else {
                  return [...prev, index];
                }
              });
            }}
          >
            <Flex
              border={`1px solid ${colorMode === "light" ? "black" : "white"}`}
              borderRadius="lg"
              boxShadow={
                colorMode === "light"
                  ? "0 6px 8px rgba(0, 0, 0, 0.7)"
                  : "0 6px 8px rgba(255, 255, 255, 0.7)"
              }
              padding={["3","5"]}
              gap={5}              
              flexDirection={["column", "row"]}
              cursor="pointer"
              alignItems="center"
            >
              <Image
                src={section.company.image}
                width="75px"
                height="75px"
                alt={section.name}
                backgroundColor="white"
              ></Image>

              <Flex flexDirection="column" width="100%" gap={1}>
                <Flex
                  justifyContent={["space-between"]}
                  fontSize={["xs", "lg"]}
                  fontWeight="bold"
                >
                  <Text>{section.company.name}</Text>
                  <Text>{section.position.year}</Text>
                </Flex>
                <Flex
                  justifyContent="space-between"
                  fontSize={["2xs", "lg"]}
                  fontStyle="oblique"
                >
                  <Text>{section.position.name}</Text>
                </Flex>
                <Flex mt="5" flexDirection="column">
                  {section.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0, opacity: 0, translateY: "100%" }}
                      animate={
                        visibleAchievements.includes(index)
                          ? { height: "auto", opacity: 1, translateY: 0 }
                          : { height: 0, opacity: 0, translateY: "100%" }
                      }
                      exit={{ height: 0, opacity: 0, translateY: "100%" }}
                      transition={{ duration: 1 }}
                    >
                      <Flex alignItems="center">
                        <Text fontSize={["xs", "lg"]}>
                          <Icon
                            mr="2"
                            as={BsCaretRightFill}
                            boxSize={4}
                            color="peru"
                          />
                          {achievement}
                        </Text>
                      </Flex>
                    </motion.div>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </motion.div>
        ))}
      </Flex>

      {isBigSize && (
        <div
          style={{
            content: "''",
            backgroundImage: "url('./Experience.png')",
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
            opacity: colorMode === "light" ? 0.03 : 0.1,
            zIndex: 0,
            pointerEvents: "none",
            ...invertStyle,
          }}
        />
      )}
    </Flex>
  );
}
