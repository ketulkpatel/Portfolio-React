import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Text,
  useColorMode,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  Menu,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

export default function NavOptions() {
  const { toggleColorMode, colorMode } = useColorMode();
  const navLinks = [
    { label: "Home", to: "/", color: "red.500" },
    { label: "Education", to: "/", color: "orange.500" },
    { label: "Certifications", to: "/", color: "yellow.500" },
    { label: "Experience", to: "/", color: "green.500" },
    { label: "Projects", to: "/", color: "cyan.500" },
    { label: "Contact", to: "/", color: "blue.500" },
    { label: "Resume", to: "/", color: "purple.500" },
  ];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      marginLeft="auto"
      textAlign="center"
      alignItems="center"
      padding={3}
    >
      <Box display={{ base: "none", md: "flex" }} flexDirection="row">
        {navLinks.map((link) => (
          <Box
            key={link.label}
            style={{
              display: "block",
              padding: "0.5rem 1.5rem",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "15px",
              transition: "background-color 0.2s, transform 0.2s",
              fontSize: "1.0rem",
              cursor: "pointer",
            }}
            _hover={{
              transform: "translateX(5px)",
              bgColor: `${link.color}`,
              boxShadow: `0 0 10px rgba(0, 0, 0, 0.5)`,
              fontWeight: "bold",
            }}
          >
            <Text>{link.label}</Text>
          </Box>
        ))}
      </Box>

      <Box>
        <Button
          padding={2}
          onClick={toggleColorMode}
          borderRadius={"full"}
          size="md"
          bg={colorMode}
          _hover={{
            transform: "scale(1.30)",
            transition: "transform 0.4s",
          }}
          sx={{
            "&:active, &:focus": {
              bg: "transparent", // Set the background color to 'transparent'
              boxShadow: "none", // Optionally remove the box shadow
            },
          }}
        >
          <Box as={colorMode === "light" ? FaSun : FaMoon} />
        </Button>
      </Box>
    </Box>
  );
}
