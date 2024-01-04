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
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ketul-patel-61264b188/",
      icon: FaLinkedin,
    },
    {
      name: "Outlook",
      link: "mailto:ketul.patel6@outlook.com",
      icon: PiMicrosoftOutlookLogoFill,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/ketulpatel455",
      icon: FaTwitter,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/ketul.patel.94801116/",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/the_ketul_patel/",
      icon: FaInstagram,
    },
  ];

  const imageSrc =
    colorMode === "dark" ? "/Person_Night.png" : "/Person_Day.png";

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
      maxWidth="100%"
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={["unset","space-between"]}
      gap={[0, 40]}
    >
      <Flex padding={[10, 0]} direction="column" fontFamily="monospace">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <Text fontSize={[24, 40]} fontWeight="bold">
            Hello <Icon as={MdOutlineWavingHand} boxSize={[6, 8]}></Icon> ,
          </Text>
          <Text fontSize={["md", "xl"]}>
            I'm <span style={gradientStyle}>Ketul Patel</span>{" "}
            <Icon as={BsPersonWorkspace} boxSize={[4, 5]}></Icon>. Full Stack
            Developer, Cloud Learner <br></br>& Machine Learning Enthusiastic.
          </Text>
          <Flex gap={20}>
            <Icon as={MdOutlineFastfood} boxSize={[4, 6]}></Icon>
            <Icon as={MdAirlineSeatIndividualSuite} boxSize={[4, 6]}></Icon>
            <Icon as={FaCode} boxSize={[4, 6]}></Icon>
            <Icon as={BsArrowRepeat} boxSize={[4, 6]}></Icon>
          </Flex>
          <Flex gap={12}>
            <Text fontSize={["xs", "sm"]}>eat();</Text>
            <Text fontSize={["xs", "sm"]}>sleep();</Text>
            <Text fontSize={["xs", "sm"]}>code();</Text>
            <Text fontSize={["xs", "sm"]}>repeat();</Text>
          </Flex>
          <Flex marginTop={[6, 10]}>
            <Text
              fontSize={[18, 22]}
              fontFamily="monospace"
              fontStyle="oblique"
            >
              CONNECT WITH ME
            </Text>
          </Flex>
          <Flex marginTop="3" gap={[3, 7]}>
            {socialMediaLinks.map((socialMedia, index) => (
              <Circle
                key={index}
                size={[8, 12]}
                className={`social-link social-link-${index}`}
                onClick={() => handleSocialLinkClick(socialMedia.link)}
                cursor="pointer"
              >
                <Icon as={socialMedia.icon} className="icon" boxSize={[6, 8]} />
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
          <Img
            src={imageSrc}
            width={["250px", "400px"]}
            height={["250px", "400px"]}
            alt="Person Image"
          ></Img>
        </motion.div>
      </Flex>
    </Flex>
  );
}
