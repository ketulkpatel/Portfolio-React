import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaHeart } from "react-icons/fa6";

export default function MadeWith() {
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
