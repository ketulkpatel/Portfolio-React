import {
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Stack,
  useColorMode,
  Text,
  Image,
  HStack,
  VStack,
  Tooltip,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaAws, FaReact } from "react-icons/fa";
import { BiLogoGoogleCloud } from "react-icons/bi";
import {
  SiKubernetes,
  SiHeroku,
  SiDocker,
  SiSpring,
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiJquery,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiRender,
  SiPostman,
} from "react-icons/si";
import {
  FaAngular,
  FaBootstrap,
  FaC,
  FaCss3,
  FaFlask,
  FaJava,
  FaNode,
} from "react-icons/fa6";

function Projects() {
  const { colorMode } = useColorMode();

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${
      colorMode === "light" ? "#2196F3, #FF5722" : "#FF5722, #2196F3"
    })`,
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
  };

  const projects = [
    {
      name: "CineScope",
      to: "/",
      link: "",
      description: "Created an IMDb-inspired website utilizing MERN Stack.",
      skills: [
        { name: "TypeScript", color: "blue.500", icon: SiTypescript },
        { name: "ReactJS", color: "blue.400", icon: FaReact },
        { name: "NodeJS", color: "green.500", icon: FaNode },
        { name: "ExpressJS", color: "indigo.500", icon: SiExpress },
        { name: "MongoDB", color: "green.600", icon: SiMongodb },
        { name: "Netlify", color: "blue.700", icon: SiNetlify },
        { name: "Render", color: "red.700", icon: SiRender }
    ],
    },
    // {
    //   name: "Food Delivery System",
    //   to: "/",
    //   link: "",
    //   description:
    //     "Deployed cutting-edge multi-cloud-based serverless food delivery system.",
    //   skills: [
    //     { name: "Python", color: "blue.500", icon: SiPython },
    //     { name: "JavaScript", color: "yellow.500", icon: SiJavascript },
    //     { name: "ReactJS", color: "teal.500", icon: FaReact },
    //     { name: "NodeJS", color: "green.500", icon: FaNode },
    //     { name: "AWS", color: "orange.600", icon: FaAws },
    //     { name: "Google Cloud", color: "blue.600", icon: BiLogoGoogleCloud },
    //   ],
    // },
    // {
    //   name: "Drive Test Scheduler",
    //   to: "/",
    //   link: "",
    //   description:
    //     "Designed web application leveraging serverless architecture and AWS services.",
    //   skills: [
    //     { name: "Python", color: "blue.500", icon: SiPython },
    //     { name: "JavaScript", color: "yellow.500", icon: SiJavascript },
    //     { name: "ReactJS", color: "teal.500", icon: FaReact },
    //     { name: "NodeJS", color: "green.500", icon: FaNode },
    //     { name: "AWS", color: "orange.600", icon: FaAws },
    //   ],
    // },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeSkillName, setActiveSkillName] = useState<string | null>(null);

  const handleClick = (skillName: string) => {
    if (activeSkillName === skillName) {
      onClose();
      setActiveSkillName(null);
    } else {
      onOpen();
      setActiveSkillName(skillName);
    }
  };
  const handleMouseEnter = (skillName: string) => {
    onOpen();
    setActiveSkillName(skillName);
  };

  const handleMouseLeave = () => {
    onClose();
    setActiveSkillName(null);
  };
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      fontFamily="monospace"
      width="100%"
    >
      <Flex flexDirection="column" gap="10">
        <Flex justifyContent="center" margin={50}>
          <Heading style={gradientStyle}>PROJECTS</Heading>
        </Flex>
        <motion.div
          initial={{
            opacity: 0,
            z: -100,
          }}
          animate={{
            opacity: 1,
            z: 0,
          }}
          transition={{ duration: 4 }}
        >
          <Flex gap="5" flexWrap="wrap" justifyContent="center" padding="3">
            {projects.map((project, index) => (
              <Card
                size="xs"
                width={["300px", "400px"]}
                padding="4"
                border={`1px solid ${
                  colorMode === "light" ? "black" : "white"
                }`}
                borderRadius="lg"
                boxShadow={
                  colorMode === "light"
                    ? "0 6px 8px rgba(0, 0, 0, 0.7)"
                    : "0 6px 8px rgba(255, 255, 255, 0.7)"
                }
                backgroundColor={colorMode === "light" ? "white" : "black"}
                _hover={{
                  cursor: "pointer",
                }}
              >
                <CardBody>
                  <VStack align="left">
                    <Text
                      fontWeight="bold"
                      fontFamily="monospace"
                      fontSize="xx-large"
                    >
                      {project.name}
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontFamily="monospace"
                      fontSize="md"
                    >
                      {project.description}
                    </Text>
                    <Flex maxWidth="100%" gap="5" flexWrap="wrap">
                      {project.skills.map((skill, index) => (
                        <Tooltip
                          key={`${project.name}_${index}`}
                          label={skill.name}
                          placement="bottom"
                          isOpen={isOpen && skill.name === activeSkillName}
                          onClose={onClose}
                          closeOnClick={false}
                        >
                          <span
                            onClick={() => handleClick(skill.name)}
                            onMouseEnter={() => handleMouseEnter(skill.name)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <Icon
                              as={skill.icon}
                              boxSize={8}
                              key={index}
                              flexBasis="calc(20% - 20px)"
                              color={skill.color}
                              _hover={{ cursor: "pointer" }}
                            />
                          </span>
                        </Tooltip>
                      ))}
                    </Flex>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
}

export default Projects;
