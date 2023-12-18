import {
  Flex,
  Heading,
  Text,
  Image
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {  useInView } from "react-intersection-observer";

export default function FullStack() {
  const imageSrc = "/FullStack.png";
  const [ref, inView] = useInView();
  return (
    <Flex
      minHeight="100vh"
      width="100%"
      justifyContent="space-evenly"
      paddingTop="75"
    >
        <Flex ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2 }}
          key={imageSrc}
        >
          <Image
            src={imageSrc}
            width="400px"
            height="400px"
            alt="Person Image"
          ></Image>
        </motion.div>
      </Flex>
      <Flex direction="column" fontFamily="monospace">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <Heading as="h1">Hello ,</Heading>
          <Text fontSize="xl">
            I'm <span>Ketul Patel</span> Full Stack Developer,
          </Text>
          <Text fontSize="xl">
            Cloud Learner & Machine Learning Enthusiastic.
          </Text>
          <Flex marginTop={10}>
            <Text fontSize="22" fontFamily="monospace" fontStyle="oblique">
              CONNECT WITH ME
            </Text>
          </Flex>
        </motion.div>
      </Flex>

      
    </Flex>
    // <Flex>
    //     <Heading
    //       as="h1"
    //       size="xl"
    //       marginBottom="1rem"
    //       color={colorMode === "light" ? "teal.500" : "cyan.300"}
    //     >
    //       Interests
    //     </Heading>
    //   </Flex>
    //   <HStack width="100%" justifyContent="space-around">
    //     <Flex>
    //       <img
    //         src={`/src/assets/images/Full_Stack.png`}
    //         alt={"FullStack Developer"}
    //         width="500px"
    //         height="500px"
    //       />
    //     </Flex>
    //     <VStack>
    //       <Flex>
    //         <Heading
    //           as="h2"
    //           size="lg"
    //           color={colorMode === "light" ? "teal.500" : "cyan.300"}
    //         >
    //           Full Stack Developement
    //         </Heading>
    //         ⚡ Crafting dynamic and responsive web frontends with expertise in
    //         ReactJS and Angular for an enhanced user experience. ⚡ Building
    //         mobile applications using Flutter for cross-platform development and
    //         native Android technologies to bring innovative ideas to life. ⚡
    //         Driving server-side development with proficiency in NodeJS,
    //         ExpressJS, and Flask to create robust and scalable backend systems
    //         for seamless application functionality.
    //       </Flex>
    //     </VStack>
    //   </HStack>
    //   </div>
  );
}
