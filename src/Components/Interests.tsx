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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
import { useState } from "react";

export default function Interests() {
  const cloudSkillIcons = [
    { name: "AWS", color: "yellow.500", icon: FaAws },
    { name: "Google Cloud", color: "blue.500", icon: BiLogoGoogleCloud },
    { name: "Heroku", color: "purple.500", icon: SiHeroku },
    { name: "Kubernetes", color: "blue.600", icon: SiKubernetes },
    { name: "Docker", color: "blue.400", icon: SiDocker },
  ];

  const fullStackSkillIcons = [
    { name: "HTML5", color: "orange.500", icon: SiHtml5 },
    { name: "CSS3", color: "blue.500", icon: FaCss3 },
    { name: "JavaScript", color: "yellow.500", icon: SiJavascript },
    { name: "TypeScript", color: "blue.700", icon: SiTypescript },
    { name: "Java", color: "red.600", icon: FaJava },
    { name: "Python", color: "green.500", icon: SiPython },
    { name: "C", color: "gray.700", icon: FaC },
    { name: "C++", color: "pink.500", icon: SiCplusplus },
    { name: "React", color: "blue.400", icon: FaReact },
    { name: "Angular", color: "red.500", icon: FaAngular },
    { name: "Node.js", color: "green.600", icon: FaNode },
    { name: "Spring", color: "green.300", icon: SiSpring },
    { name: "Django", color: "green.600", icon: SiDjango },
    { name: "Flask", color: "gray.500", icon: FaFlask },
    { name: "Bootstrap", color: "purple.500", icon: FaBootstrap },
    { name: "jQuery", color: "blue.600", icon: SiJquery },
  ];

  const machineLearningSkillIcons = [
    { name: "Pandas", color: "red.500", icon: SiPandas },
    { name: "NumPy", color: "yellow.700", icon: SiNumpy },
    { name: "Scikit-learn", color: "orange.500", icon: SiScikitlearn },
    { name: "TensorFlow", color: "purple.600", icon: SiTensorflow },
    { name: "Keras", color: "red.600", icon: SiKeras },
  ];

  const imageFullStack = "/FullStack.png";
  const imageML = "/ML.png";
  const imageCloud = "/Cloud.png";

  const sections = [
    {
      name: "Cloud Computing",
      image: {
        name: imageCloud,
        x_before: -100,
        x_after: 0,
        y_before: 0,
        y_after: 0,
      },
      skills: {
        name: cloudSkillIcons,
        x_before: 0,
        x_after: 0,
        y_before: 100,
        y_after: 0,
      },
    },
    {
      name: "FullStack Developement",
      image: {
        name: imageFullStack,
        x_before: 0,
        x_after: 0,
        y_before: -100,
        y_after: 0,
      },
      skills: {
        name: fullStackSkillIcons,
        x_before: 0,
        x_after: 0,
        y_before: 100,
        y_after: 0,
      },
    },
    {
      name: "Machine Learning",
      image: {
        name: imageML,
        x_before: 100,
        x_after: 0,
        y_before: 0,
        y_after: 0,
      },
      skills: {
        name: machineLearningSkillIcons,
        x_before: 0,
        x_after: 0,
        y_before: 100,
        y_after: 0,
      },
    },
  ];
  const sectionRefs = sections.map(() => {
    const [ref, inView] = useInView({
      triggerOnce: true,
    });
    return { ref, inView };
  });
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

  const { colorMode } = useColorMode();
  return (
    <Flex
      minHeight="100vh"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      padding="10"
      gap="5"
      flexDirection={["column", "row"]}
    >
      {sections.map((section, index) => (
        <Flex
          ref={sectionRefs[index].ref}
          width={["100%", "33.33%"]}
          flexDirection="column"
          alignItems="center"
          key={index}
        >
          <Text
            fontFamily="mono"
            fontWeight="medium"
            marginBottom="5"
            fontSize={[18, 24]}
          >
            {section.name}
          </Text>
          <Flex
            border={`1px solid ${colorMode === "light" ? "black" : "white"}`}
            borderRadius="lg"
            boxShadow={
              colorMode === "light"
                ? "0 6px 8px rgba(0, 0, 0, 0.7)"
                : "0 6px 8px rgba(255, 255, 255, 0.7)"
            }
            flexDirection="column"
            alignItems="center"
          >
            {sectionRefs[index].inView && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: section.image.x_before,
                  y: section.image.y_before,
                }}
                animate={{
                  opacity: 1,
                  x: section.image.x_after,
                  y: section.image.y_after,
                }}
                transition={{ duration: 2 }}
                key={section.image.name}
              >
                <Image
                  src={section.image.name}
                  width="300px"
                  height="300px"
                  alt={section.name}
                  key={index}
                ></Image>
              </motion.div>
            )}
            {sectionRefs[index].inView && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: section.skills.x_before,
                  y: section.skills.y_before,
                }}
                animate={{
                  opacity: 1,
                  x: section.skills.x_after,
                  y: section.skills.y_after,
                }}
                transition={{ duration: 2 }}
                key={index}
              >
                <Flex
                  maxWidth="100%"
                  justifyContent="center"
                  gap="5"
                  flexWrap="wrap"
                  margin="5"
                >
                  {section.skills.name.map((skill, index) => (
                    <Tooltip
                      key={index}
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
                          boxSize={10}
                          key={index}
                          flexBasis="calc(20% - 20px)"
                          color={skill.color}
                          _hover={{ cursor: "pointer" }}
                        />
                      </span>
                    </Tooltip>
                  ))}
                </Flex>
              </motion.div>
            )}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
