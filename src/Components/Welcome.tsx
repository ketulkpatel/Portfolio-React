import {
  Box,
  Circle,
  Flex,
  Heading,
  Icon,
  Img,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  MdOutlineWavingHand,
  MdOutlineFastfood,
  MdAirlineSeatIndividualSuite,
} from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaCode, FaInstagram } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import "./Welcome.css";

export default function Welcome() {
  const { colorMode } = useColorMode();

  const socialMediaLinks = [
    { name: "GitHub", link: "https://github.com/ketulkpatel", icon: FaGithub },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/ketul-patel-61264b188/", icon: FaLinkedin },
    { name: "Outlook", link: "mailto:ketul.patel6@outlook.com", icon: PiMicrosoftOutlookLogoFill },
    { name: "Twitter", link: "https://twitter.com/ketulpatel455", icon: FaTwitter },
    { name: "Facebook", link: "https://www.facebook.com/ketul.patel.94801116/", icon: FaFacebook },
    { name: "Instagram", link: "https://www.instagram.com/the_ketul_patel/", icon: FaInstagram },
  ];

  const imageSrc =
    colorMode === "dark"
      ? "/src/assets/images/Person_Night.png"
      : "/src/assets/images/Person_Day.png";

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${
      colorMode === "light" ? "#2196F3, #FF5722" : "#FF5722, #2196F3"
    })`,
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
  };

  const handleSocialLinkClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Flex
      minHeight="100vh"
      width="100%"
      justifyContent="space-evenly"
      paddingTop="75"
    >
      <Flex direction="column" fontFamily="monospace">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
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
          <Flex marginTop={10}>
            <Text fontSize="22" fontFamily="monospace" fontStyle="oblique">
              CONNECT WITH ME
            </Text>
          </Flex>
          <Flex marginLeft={-10} marginTop="3" justifyContent="space-evenly">
            {socialMediaLinks.map((socialMedia, index) => (
              <Circle
                key={index}
                size={12}
                className={`social-link social-link-${index}`}
                onClick={() => handleSocialLinkClick(socialMedia.link)}
                cursor= "pointer"
              >
                <Icon as={socialMedia.icon} className="icon" boxSize={8} />
              </Circle>
            ))}
          </Flex>
        </motion.div>
      </Flex>

      <Flex>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          key={imageSrc}
        >
          <img
            src={imageSrc}
            width="400px"
            height="400px"
            alt="Person Image"
          ></img>
        </motion.div>
      </Flex>
    </Flex>
  );
}
