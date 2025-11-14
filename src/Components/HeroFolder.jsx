import Folder from "./Folder";
import { useColorModeValue, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

// 1. Animated Text using Framer Motion
const MotionText = motion(Text);

const HeroFolder = () => {
  const folderColor = useColorModeValue("#EF233C", "#8D99AE");

  const resumeUrl = "/resume.pdf";

  const ResumeCard = (
    <Box
      as="button"
      bg={useColorModeValue("brand.100", "gray.900")}
      borderRadius="lg"
      boxShadow="md"
      color={useColorModeValue("brand.900", "brand.100")}
      fontWeight="bold"
      textAlign="center"
      p={4}
      cursor="pointer"
      transition="all 0.18s"
      _hover={{
        bg: "brand.700",
        boxShadow: "xl",
        color: "brand.500",
        transform: "scale(1.03)",
      }}
      tabIndex={0}
      aria-label="Open Resume PDF"
      onClick={(e) => {
        e.stopPropagation();
        window.open(resumeUrl, "_blank", "noopener,noreferrer");
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.open(resumeUrl, "_blank", "noopener,noreferrer");
        }
      }}
    >
      View CV / Resume
    </Box>
  );

  return (
    <Box
      mt={4}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent={{ base: "center", md: "flex-start" }}
      gap={4}
    >
      {/* Folder */}
      <Folder
        color={folderColor}
        size={1.15}
        items={[ResumeCard]}
        className="hero-folder"
      />

      {/* Animated cue: 
            - On mobile, below (column layout), emoji points UP.
            - On desktop, to the right (row layout), emoji points LEFT.
      */}
      <MotionText
        mt={{ base: 2, md: 0 }}
        ml={{ base: 0, md: 2 }}
        color={useColorModeValue("brand.500", "brand.100")}
        fontSize={{ base: "md", md: "lg" }}
        fontWeight="bold"
        display="flex"
        alignItems="center"
        justifyContent={{ base: "center", md: "flex-start" }}
        initial={{ y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        userSelect="none"
        letterSpacing="0.02em"
      >
        {/* Mobile: Upwards emoji, below the folder */}
        <Box
          as="span"
          fontSize="1.7em"
          mr={{ base: 0, md: "0.3em" }}
          mb={{ base: "0.15em", md: 0 }}
          display={{ base: "inline", md: "none" }}
        >
          👆
        </Box>
        {/* Desktop: Leftwards emoji, right of folder */}
        <Box
          as="span"
          fontSize="1.7em"
          mr="0.3em"
          display={{ base: "none", md: "inline" }}
        >
          👈
        </Box>
        Click to view resume
      </MotionText>
    </Box>
  );
};

export default HeroFolder;
