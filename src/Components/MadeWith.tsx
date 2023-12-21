import { Box, Center, Flex, Icon, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { FaHeart } from "react-icons/fa6";

export default function MadeWith() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e : any) => {
    e.preventDefault();
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };

  return (
    <Flex flexDirection="column" alignItems="center" padding="5">
      <Text
        fontFamily="monospace"
        fontSize="18"
        textAlign="center"
        alignContent="center"
        justifyContent="center"
      >
        Made with <Icon as={FaHeart} boxSize={4} color="red" /> by Ketul
      </Text>
      </Flex>
  );
}
