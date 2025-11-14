import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import clientData from "../data/clientData";
import Particles from "./Particles";
import HeroFolder from "./HeroFolder";
import CircularTextButton from "./CircularTextButton";
import SocialIcons from "./SocialIcons";

const HERO_HEIGHT = { base: "100vh", md: "100vh" };

const HeroSection = () => {
  const { name, role, tagline } = clientData.hero;

  // Theme tokens
  const headingColor = useColorModeValue("brand.500", "brand.100");
  const textColor = useColorModeValue("brand.700", "whiteAlpha.900");

  const theme = useTheme();
  const gradientRole = useColorModeValue(
    theme.colors.gradient.primary,
    theme.colors.gradient.secondary
  );

  const heroText = `Welcome to ${name}`;

  return (
    <Box position="relative" width="100%" minH={HERO_HEIGHT} overflow="hidden">
      {/* Silk/Particles Background (replace Silk with Particles in the next step) */}
      <Box
        id="home"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={0}
      >
        <Particles
          particleColors={[
            "#14213d",
            "#fca311",
            "#118ab2",
            "#8D99AE",
            "#0077b6",
            "#EDF2F4",
          ]}
          particleCount={1000}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          // You can adjust these props for your style
        />
      </Box>

      {/* Foreground Content */}
      <Flex
        position="relative"
        zIndex={1}
        minH={HERO_HEIGHT}
        align="center"
        justify="center"
        direction="column"
        px={{ base: 6, md: 24 }}
        py={{ base: 20, md: 0 }}
        gap={12}
      >
        <Stack
          spacing={8}
          maxW={{ base: "100%", md: "700px" }}
          textAlign="center"
          align="center"
          minH="320px"
          justify="center"
        >
          {/* Ghost Heading for layout stability */}
          <Box
            position="relative"
            w="100%"
            minH={{ base: "3.5em", md: "5.5em" }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "2.2rem", md: "4rem", lg: "5rem" }}
              fontWeight="bold"
              color="transparent"
              visibility="hidden"
              userSelect="none"
              letterSpacing="tight"
              lineHeight={1.1}
              width="100%"
              m={0}
              p={0}
              whiteSpace="normal"
              overflowWrap="break-word"
              wordBreak="break-word"
            >
              {heroText}
            </Heading>
            {/* Typewriter heading absolutely on top */}
            <Heading
              as="h1"
              fontSize={{ base: "2.2rem", md: "4rem", lg: "5rem" }}
              fontWeight="extrabold"
              color={headingColor}
              position="absolute"
              top={0}
              left={0}
              width="100%"
              letterSpacing="tight"
              lineHeight={1.1}
              m={0}
              p={0}
              textAlign="center"
              whiteSpace="normal"
              overflowWrap="break-word"
              wordBreak="break-word"
            >
              <Typewriter
                words={[heroText]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </Heading>
          </Box>

          {/* Role with gradient effect */}
          <Text
            fontSize={{ base: "1.5rem", md: "2.1rem", lg: "2.5rem" }}
            fontWeight="extrabold"
            bgGradient={gradientRole}
            bgClip="text"
            mb={1}
          >
            {role}
          </Text>

          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            color={textColor}
            maxW="500px"
            fontWeight="medium"
          >
            {tagline}
          </Text>

          {/* <HeroFolder /> */}

          <Flex
            w="100%"
            justify="center"
            align="center"
            mt={8}
            gap={{ base: 6, md: 16 }}
            direction={{ base: "column", sm: "row" }}
          >
            <CircularTextButton text="GET IN TOUCH" scrollTo="contact" />
            <SocialIcons />
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default HeroSection;
