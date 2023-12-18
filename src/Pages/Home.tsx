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
import Welcome from "../Components/Welcome";
import FullStack from "../Components/FullStack";
export default function Home() {
  const { colorMode } = useColorMode();
  const skillsData = [
    {
      category: "Languages",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "C",
        "C++",
      ],
    },
    {
      category: "Frameworks",
      skills: [
        "React",
        "AngularJS",
        "Node.js",
        "Spring",
        "Django",
        "Flask",
        "jQuery",
        "Bootstrap",
      ],
    },
    {
      category: "Database",
      skills: [
        "MongoDB",
        "Oracle",
        "MySQL",
        "PostgreSQL",
        "Firestore",
        "DynamoDB",
        "GraphQL",
      ],
    },
    {
      category: "Version Control",
      skills: [
        "Git",
        "GitHub",
        "Gitlab",
        "Bitbucket",
        "Jira",
        "Jenkins",
        "Kubernetes",
      ],
    },
    {
      category: "Cloud",
      skills: ["AWS", "GCP", "asda", "adasdasd", "asdsad"],
    },
    {
      category: "Testing",
      skills: ["JUnit", "Jest", "Selenium"],
    },
  ];

  return (
    <VStack minHeight="100vh">
      <Welcome />
      <Heading>Interests</Heading>
      <FullStack />
      {/* <HStack width="100%" justifyContent="space-evenly">
        {skillsData.map((categoryData) => (
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            key={categoryData.category}
          >
            <Heading
              as="h3"
              size="md"
              color={colorMode === "light" ? "teal.500" : "cyan.300"}
            >
              {categoryData.category}
            </Heading>
            <Wrap spacing="1rem">
              {categoryData.skills.map((skill) => (
                <WrapItem key={skill} style={{ flex: "0 0 calc(20% - 1rem)" }}>
                  <img
                    src={`/src/assets/images/${skill}.png`}
                    alt={skill}
                    width="35px"
                    height="35px"
                  />
                </WrapItem>
              ))}
            </Wrap>
          </Flex>
        ))}
      </HStack> */}
    </VStack>
  );
}
