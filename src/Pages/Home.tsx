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
    <VStack minHeight="100vh" >
      <Welcome/>
      <Flex>
        <Heading
          as="h1"
          size="xl"
          marginBottom="1rem"
          color={colorMode === "light" ? "teal.500" : "cyan.300"}
        >
          Interests
        </Heading>
      </Flex>
      <HStack width="100%" justifyContent="space-around">
        <Flex>
          <img
            src={`/src/assets/images/Full_Stack.png`}
            alt={"FullStack Developer"}
            width="500px"
            height="500px"
          />
        </Flex>
          <VStack>
          <Flex>
            <Heading
              as="h2"
              size="lg"
              
              color={colorMode === "light" ? "teal.500" : "cyan.300"}
            >
              Full Stack Developement
            </Heading>
            ⚡ Crafting dynamic and responsive web frontends with expertise in ReactJS and Angular for an enhanced user experience.
            ⚡ Building mobile applications using Flutter for cross-platform development and native Android technologies to bring innovative ideas to life.
            ⚡ Driving server-side development with proficiency in NodeJS, ExpressJS, and Flask to create robust and scalable backend systems for seamless application functionality.
          </Flex>
          </VStack>
      </HStack>
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
