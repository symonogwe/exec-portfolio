import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import clientData from "../data/clientData";
import MagnetLines from "./MagnetLines"; // import MagnetLines component

const MotionBox = motion(Box);

const ContactSection = () => {
  // All hooks at the top!
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("brand.500", "brand.100");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const hoverBg = useColorModeValue("brand.50", "gray.700");
  const hoverIconColor = useColorModeValue("brand.500", "brand.100");
  const showMagnetLines = useBreakpointValue({ base: false, md: true });

  // MagnetLines: theme-aware and responsive!
  const lineColor = useColorModeValue("#118ab2", "#EDF2F4");

  return (
    <Box
      id="contact"
      py={{ base: 16, md: 28 }}
      px={{ base: 4, md: 0 }}
      bg={bg}
      minH="70vh"
      w="full"
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* MagnetLines Background */}
      {showMagnetLines && (
        <Box
          position="absolute"
          inset={0}
          zIndex={0}
          pointerEvents="none"
          w="100vw"
          minH="100%"
          h="100%"
          overflow="hidden"
          left="50%"
          top="0"
          style={{ transform: "translateX(-50%)" }} // ensures true center, covers edge-to-edge
          opacity={0.3} // or tweak for your taste
          filter="blur(0.3px)"
        >
          <MagnetLines
            rows={15} // Increase for more density!
            columns={32} // This fills ultra-wide screens
            containerSize="100vw"
            lineColor={lineColor}
            lineWidth="0.3vmin" // thickness
            lineHeight="3vmin" // length
            baseAngle={0}
            style={{ width: "100vw", height: "100%" }}
          />
        </Box>
      )}

      {/* Foreground content */}
      <Box position="relative" zIndex={1} w="full">
        <Heading
          as="h2"
          mb={12}
          textAlign="center"
          fontWeight="extrabold"
          color={headingColor}
          fontSize={{ base: "2xl", md: "4xl" }}
          letterSpacing="tight"
        >
          Contact Me
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 6, md: 10 }}
          maxW="6xl"
          mx="auto"
          w="full"
        >
          {clientData.contact.map((method, i) => {
            const IconComponent = FaIcons[method.icon];
            const href =
              method.type === "LinkedIn" && !method.link.startsWith("http")
                ? `https://${method.link}`
                : method.link;

            return (
              <MotionBox
                key={method.type}
                as={Link}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.13 }}
                bg={cardBg}
                borderRadius="2xl"
                boxShadow="lg"
                p={8}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                _hover={{
                  boxShadow: "2xl",
                  transform: "translateY(-8px) scale(1.03)",
                  textDecoration: "none",
                  bg: hoverBg,
                }}
                role="group"
              >
                <Icon
                  as={IconComponent}
                  boxSize={12}
                  color={method.color}
                  mb={6}
                  _groupHover={{
                    color: hoverIconColor,
                  }}
                />
                <Text
                  fontWeight="bold"
                  fontSize="xl"
                  color={headingColor}
                  mb={2}
                >
                  {method.type}
                </Text>
                <Text
                  color={textColor}
                  fontSize="md"
                  wordBreak="break-all"
                  noOfLines={2}
                >
                  {method.value}
                </Text>
              </MotionBox>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ContactSection;
