import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Square,
  Stack,
  useColorMode,
  Text,
  Icon,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { FaAws, FaReact } from "react-icons/fa";
import "../Components/Welcome.css";

function Certificates() {
  const { colorMode } = useColorMode();

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${
      colorMode === "light" ? "#2196F3, #FF5722" : "#FF5722, #2196F3"
    })`,
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
  };

  const certificates = [
    {
      name: "AWS Developer Associate",
      to: "/",
      image: "./AWS.png",
      color: "orange.200",
      link: "https://www.credly.com/badges/ac4abf95-1613-4862-abea-fa75a38b308e/public_url",
    },
    {
      name: "AWS Cloud Practitioner",
      to: "/education",
      image: "./AWS.png",
      color: "orange.200",
      link: "https://www.credly.com/badges/a214b923-7be6-47b8-9877-25de78ccf3ca/public_url",
    },
    {
      name: "Neural Networks and Deep Learning",
      to: "/",
      image: "./DeepLearning.png",
      color: "purple.200",
      link: "https://porfolio-ketul.s3.ca-central-1.amazonaws.com/Neural_Network_%26_Deep_Learning.pdf",
    },
    {
      name: "Improving Deep Neural Networks",
      to: "/",
      image: "./DeepLearning.png",
      color: "gray.200",
      link: "https://porfolio-ketul.s3.ca-central-1.amazonaws.com/Improving_Deep_Neural+_Networks.pdf",
    },
    {
      name: "Structuring Machine Learning Projects",
      to: "/",
      image: "./DeepLearning.png",
      color: "blue.300",
      link: "https://porfolio-ketul.s3.ca-central-1.amazonaws.com/Structuring_Machine_Learning_Projects.pdf",
    },
    {
      name: "Sequence Models",
      to: "/",
      image: "./DeepLearning.png",
      color: "teal.200",
      link: "https://porfolio-ketul.s3.ca-central-1.amazonaws.com/Sequence_Models.pdf",
    },
    {
      name: "Convolutional Neural Networks",
      to: "/certificates",
      image: "./DeepLearning.png",
      color: "red.300",
      link: "https://porfolio-ketul.s3.ca-central-1.amazonaws.com/Convolutional_Neural_Networks.pdf",
    },
    {
      name: "Deep Learning Specialization",
      to: "/certificates",
      image: "./DeepLearning.png",
      color: "orange.300",
      link: "https://porfolio-ketul.s3.ca-central-1.amazonaws.com/Deep_Learning_Specialization.pdf",
    },
    {
      name: "Problem Solving (Basic)",
      to: "/certificates",
      image: "./HackerRank.png",
      color: "green.100",
      link: "https://porfolio-ketul.s3.ca-central-1.amazonaws.com/Hackerrank(ProblemSolving).png",
    },
    {
      name: "Python (Basic)",
      to: "/certificates",
      image: "./HackerRank.png",
      color: "green.100",
      link: "https://porfolio-ketul.s3.ca-central-1.amazonaws.com/Hackerrank(Python).png",
    },
  ];

  const fetchCertificate = (certificateLink : string) => {
      window.open(certificateLink, '_blank');
  }

  return (
    <Flex minHeight="100vh" alignItems="center" marginTop={10}>
      <Flex flexDirection="column" gap="10">
        <Flex justifyContent="center" textAlign="center">
          <Heading style={gradientStyle} fontFamily="monospace">
            CERTIFICATIONS
          </Heading>
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
            {certificates.map((certificate, index) => (
              <Card
                size="xs"
                width={["300px", "400px"]}
                padding="2"
                border={`1px solid ${
                  colorMode === "light" ? "black" : "white"
                }`}
                borderRadius="lg"
                boxShadow={
                  colorMode === "light"
                    ? "0 6px 8px rgba(0, 0, 0, 0.7)"
                    : "0 6px 8px rgba(255, 255, 255, 0.7)"
                }
                backgroundColor={certificate.color}
                _hover={{
                  cursor: "pointer",
                }}
                onClick={()=> fetchCertificate(certificate.link)}
                key={index}
              >
                <CardBody>
                  <Center>
                    <Image
                      alignItems="center"
                      src={certificate.image}
                      height="70"
                    />
                  </Center>
                  <Stack>
                    <Text
                      fontWeight="bold"
                      fontFamily="monospace"
                      fontSize="lg"
                      textColor="black"
                      textAlign="center"
                    >
                      {certificate.name}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
}

export default Certificates;
