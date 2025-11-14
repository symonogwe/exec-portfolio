import {
  Box,
  Button,
  Text,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const fallbackImg = "/assets/project-fallback.jpg"; // Put this in public/assets

const ProjectCard = ({ title, description, liveUrl, image }) => {
  const border = useColorModeValue("1.5px solid #E5E7EB", "1.5px solid #333");
  const bg = useColorModeValue("white", "gray.900");
  const shadow = useColorModeValue("lg", "xl");
  const btnBg = useColorModeValue("brand.500", "brand.100");
  const btnColor = useColorModeValue("white", "gray.900");

  return (
    <MotionBox
      bg={bg}
      borderRadius="2xl"
      border={border}
      boxShadow={shadow}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      transition="all 0.23s"
      whileHover={{
        y: -7,
        scale: 1.04,
        boxShadow: "0px 10px 32px rgba(70,130,180,0.09)",
      }}
      minH={{ base: "440px", md: "470px" }}
    >
      <Image
        src={image || fallbackImg}
        alt={title}
        objectFit="cover"
        w="100%"
        h={{ base: "160px", md: "180px" }}
        borderTopRadius="2xl"
        fallbackSrc={fallbackImg}
      />
      <Box flex="1" p={6} display="flex" flexDirection="column">
        <Heading
          as="h3"
          fontSize="xl"
          color={useColorModeValue("brand.900", "brand.100")}
          mb={2}
        >
          {title}
        </Heading>
        <Text
          color={useColorModeValue("gray.700", "gray.300")}
          fontSize="md"
          mb={4}
          flex="1"
        >
          {description}
        </Text>
        {/* Center the button and keep it pinned at the bottom */}
        <Box mt="auto" display="flex" justifyContent="center">
          <Button
            as="a"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            bg={btnBg}
            color={btnColor}
            borderRadius="xl"
            minW="130px" // sets a minimum width for button
            px={6}
            fontWeight="bold"
            _hover={{
              bg: useColorModeValue("brand.900", "brand.300"),
              color: useColorModeValue("white", "brand.900"),
              boxShadow: "xl",
              transform: "scale(1.04)",
            }}
            transition="all 0.2s"
          >
            View Live
          </Button>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default ProjectCard;
