import { Flex, useColorMode } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import NavOptions from "./NavOptions";

const Navbar = () => {
  const {colorMode} = useColorMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Flex
      padding="0.5rem"
      height="70px" 
      left="0"
      top="0"
      width="100%"
      alignItems="center"
      fontFamily="monospace"
      zIndex={2}
    >
      <Logo></Logo>
      <NavOptions></NavOptions>
    </Flex>
  );
};

export default Navbar;
