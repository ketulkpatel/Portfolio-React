import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import NavOptions from "./NavOptions";

const Navbar = () => {
  return (
    <Flex
      padding="0.5rem"
      height="70px"
      left="0"
      top="0"
      width="100%"
      alignItems="center"
      fontFamily="monospace"
    >
      <Logo></Logo>
      <NavOptions></NavOptions>
    </Flex>
  );
};

export default Navbar;
