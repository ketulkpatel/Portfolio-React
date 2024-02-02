import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import {
  Image,
  Flex,
  Button,
  Input,
  Stack,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Circle,
  Textarea,
  Icon,
  Heading,
  useColorMode,
  Text,
  Box,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { useToast } from '@chakra-ui/react';
import { Spinner } from "@chakra-ui/react";

function Contact() {
  const { colorMode } = useColorMode();
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${
      colorMode === "light" ? "#2196F3, #FF5722" : "#FF5722, #2196F3"
    })`,
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
  };

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
  const handleSocialLinkClick = (link: string) => {
    window.open(link, "_blank");
  };
  const [isLoading, setIsLoading] = useState(false);

  const [formErrors, setFormErrors] = useState<Map<string, string>>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const toast = useToast();

  const showToast = (status: any, description: string) => {
    toast({
      title: description,
      status: status,
      duration: 5000,
      isClosable: true,
    });
  };

  const validateForm = () => {
    const errors = new Map<string, string>();

    if (!form.name.trim()) {
      errors.set("name", "Name is required");
    }

    if (!form.email.trim()) {
      errors.set("email", "Email is required");
    } else if (!isValidEmail(form.email.trim())) {
      errors.set("email", "Invalid email address");
    }

    if (!form.subject.trim()) {
      errors.set("subject", "Subject is required");
    }

    if (!form.message.trim()) {
      errors.set("message", "Message is required");
    }

    setFormErrors(errors);

    return errors.size === 0;
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const onSubmit = async () => {

    if (validateForm()) {
      try {
        setIsLoading(true);
        const emailData = {
          subject: form.subject,
          message: `Hi Ketul,\n\n${form.message}\n\nYou can contact me at: ${form.email}\n\nRegards,\n${form.name}`,
        };
  
        const response = await fetch('https://portfolio-b7rr.onrender.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });
        if (response.ok) {
          const data = await response.json();
          showToast('success', 'Congratulations on successfully reaching out to Ketul!.');
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          console.error('Error sending email:', response.statusText);
          showToast('error', 'Error sending email');
        }
      } catch (error: any) {
        console.error('Error sending email:', error.message);
        showToast('error', 'Error sending email');
      } finally {
        setIsLoading(false);
      }
    } 
  };

  return (
    <Flex minHeight="100vh" justifyContent="space-evenly" alignItems="center" flexDirection={["column", "column", "column", "row"]} padding={[10, 20]}>
    {isLoading && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="rgba(255, 255, 255, 0.8)"
          zIndex="9999"
        >
          <Spinner size="xl" color="blue.500" />
        </Box>
      )}
      <Flex flexDirection="column" alignItems="center" padding="7">
      <Heading style={gradientStyle} fontFamily="monospace">
      CONNECT WITH ME
        </Heading>
        <Image src="./Contact.png" width={["400px", "500px"]} height={["400px", "500px"]}></Image>
        <Flex gap={["2", "5"]} alignItems="center" justifyContent="flex-end" >
        <Text
              fontSize={[18, 22]}
              fontFamily="monospace"
              fontStyle="oblique"
              fontWeight="bold"
            >
              Connect
             </Text>
            <Icon as={IoIosArrowForward} boxSize="6"></Icon>
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
      </Flex>
      <Flex
        textAlign="center"
        alignItems="center"
        flexDirection="column"
      >
        <Heading style={gradientStyle} fontFamily="monospace">
          CONTACT ME
        </Heading>
        <Flex marginTop="3" gap={[3, 7]}>
          <Stack spacing={4} width={["auto","400px"]}>
            <FormControl isInvalid={!!formErrors?.get("name")}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={(event: any) =>
                  setForm({ ...form, [event.target.id]: event.target.value })
                }
              />
              <FormErrorMessage>{formErrors?.get("name")}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!formErrors?.get("email")}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                type="text"
                id="email"
                name="email"
                value={form.email}
                onChange={(event: any) =>
                  setForm({ ...form, [event.target.id]: event.target.value })
                }
              />
              <FormErrorMessage>{formErrors?.get("email")}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!formErrors?.get("subject")}>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={(event: any) =>
                  setForm({ ...form, [event.target.id]: event.target.value })
                }
              />
              <FormErrorMessage>{formErrors?.get("subject")}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!formErrors?.get("message")}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(event: any) =>
                  setForm({ ...form, [event.target.id]: event.target.value })
                }
                placeholder="Your Message"
              />
              <FormErrorMessage>{formErrors?.get("message")}</FormErrorMessage>
            </FormControl>
            

            <Button onClick={onSubmit} colorScheme="blue" mt={4}>
              Submit
            </Button>
          </Stack>
          
        </Flex>
      </Flex>
    </Flex>
  );
}
export default Contact;
