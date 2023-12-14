import { Box, useColorMode } from "@chakra-ui/react";

export default function Logo() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box
      fontSize={{ base: "1.5rem", md: "1.7rem" }}
      fontWeight="bold"
      borderRadius="full"
      width={{ base: "40px", md: "60px" }}
      height={{ base: "40px", md: "60px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.2s",
      }}
    >
      <Box
        bgGradient={
          colorMode === "light"
            ? "linear(to-r, #2196F3, #FF5722)"
            : "linear(to-r, #FF5722, #2196F3)"
        }
        bgClip="text"
      >
        KP
      </Box>
    </Box>
  );
}
