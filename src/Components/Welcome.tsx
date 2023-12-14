import {
  Box,
  Circle,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  MdOutlineWavingHand,
  MdOutlineFastfood,
  MdAirlineSeatIndividualSuite,
} from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaCode, FaInstagram } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import "./Welcome.css";

export default function Welcome() {
  const { toggleColorMode, colorMode } = useColorMode();

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${
      colorMode === "light" ? "#2196F3, #FF5722" : "#FF5722, #2196F3"
    })`,
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
  };

  const SocialIcons = () => {
    return (
      <Flex margin={20} direction="row" justify="center" align="center">
        <a href="#" className="social-icon">
          <Icon as={FaFacebook} className="icon" />
        </a>
      </Flex>
    );
  };

  return (
    <Flex
      // backgroundImage={`url(${backgroundImageUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height="100vh"
      width="100%"
      justifyContent="space-evenly"
      marginTop="40"
    >
      <Flex direction="column" fontFamily="monospace">
        <Heading as="h1">
          Hello <Icon as={MdOutlineWavingHand} boxSize={8}></Icon> ,
        </Heading>
        <Text fontSize="xl">
          I'm <span style={gradientStyle}>Ketul Patel</span>{" "}
          <Icon as={BsPersonWorkspace} boxSize={5}></Icon>. Full Stack
          Developer,
        </Text>
        <Text fontSize="xl">
          Cloud Learner & Machine Learning Enthusiastic.
        </Text>
        <Flex gap={20}>
          <Icon as={MdOutlineFastfood} boxSize={6}></Icon>
          <Icon as={MdAirlineSeatIndividualSuite} boxSize={6}></Icon>
          <Icon as={FaCode} boxSize={6}></Icon>
          <Icon as={BsArrowRepeat} boxSize={6}></Icon>
        </Flex>
        <Flex gap={12}>
          <Text>eat();</Text>
          <Text>sleep();</Text>
          <Text>code();</Text>
          <Text>repeat();</Text>
        </Flex>
        <Flex marginLeft={-10} marginTop={10} justifyContent="space-evenly">
          <Circle size={12} 
 className="social-link social-link-0">
            <Icon as={FaGithub} className="icon" boxSize={8} />
          </Circle>
          <Circle size={12}className="social-link social-link-1">
            <Icon as={FaFacebook} className="icon" boxSize={8} />
          </Circle>
          <Circle size={12} className="social-link social-link-2">
            <Icon as={FaTwitter} className="icon" boxSize={8} />
          </Circle>
          <Circle size={12}className="social-link social-link-3">
            <Icon
              as={FaLinkedin}
              className="icon"
              boxSize={8}
              color="#0077B5"
            />
          </Circle>
          <Circle size={12} className="social-link social-link-4">
            <Icon as={PiMicrosoftOutlookLogoFill} className="icon" boxSize={8} />
          </Circle>
          <Circle size={12} className="social-link social-link-5">
            <Icon as={FaInstagram} className="icon" boxSize={8} />
          </Circle>
        </Flex>
      </Flex>

      <Flex></Flex>
    </Flex>
    // <Flex
    //     direction="column"
    //     alignItems="center"
    //     borderRadius="lg"
    //     boxShadow="lg"
    //     bg="black"
    //     padding={10}
    //   >
    //     <Heading
    //       as="h1"
    //       size="xl"
    //       marginBottom="1rem"
    //     >
    //      Bonjour.
    //      Ketul here
    //     </Heading>
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 1, delay: 0.5 }}
    //     >
    //       <Text
    //         fontSize="lg"
    //       >
    //         I'm a passionate software developer, and this is my
    //         tech-inspired portfolio website.
    //       </Text>
    //     </motion.div>
    //     <motion.div
    //       initial={{ opacity: 0, scale: 0.8 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{ duration: 1, delay: 1 }}
    //       style={{ marginTop: "2rem" }}
    //     >
    //       <Text
    //         fontSize="lg"
    //       >
    //         Explore my projects, coding journey, and more.
    //       </Text>
    //     </motion.div>
    //   </Flex>
  );
}
