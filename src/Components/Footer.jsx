import { Box, Flex, Text, useColorModeValue, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { useState, useEffect } from "react";

// Local live time hook (24-hour format)
function useLocalTime() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

const MotionBox = motion(Box);

const Footer = () => {
  const year = new Date().getFullYear();
  //   const bg = useColorModeValue("gray.50", "gray.900");
  const bg = useColorModeValue("brand.300", "gray.900");

  const textColor = useColorModeValue("gray.600", "gray.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const timeColor = useColorModeValue("brand.500", "brand.100");
  const localTime = useLocalTime();

  return (
    <MotionBox
      as="footer"
      w="full"
      py={{ base: 8, md: 5 }}
      px={{ base: 4, md: 12 }}
      bg={bg}
      color={textColor}
      borderTop="1px solid"
      borderColor={borderColor}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      fontSize={{ base: "sm", md: "md" }}
      zIndex={10}
      position="relative"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={4}
      >
        <HStack spacing={2} mb={{ base: 3, md: 0 }}>
          <Text fontWeight="semibold">
            &copy; {year} Symon Opondi. All Rights Reserved.
          </Text>
        </HStack>

        <Box>
          <SocialIcons />
        </Box>

        <Text
          fontWeight="bold"
          color={timeColor}
          fontFamily="monospace"
          letterSpacing="tight"
          minW="82px"
          textAlign="right"
          userSelect="none"
          aria-label="Your local time"
        >
          {localTime}
        </Text>
      </Flex>
    </MotionBox>
  );
};

export default Footer;
