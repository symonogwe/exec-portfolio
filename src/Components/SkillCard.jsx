import { Box, Text, useColorModeValue, Flex, Center } from "@chakra-ui/react";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

function getIconComponent(icon) {
  if (!icon) return null;
  if (icon.startsWith("Si")) return SiIcons[icon] || null;
  if (icon.startsWith("Fa")) return FaIcons[icon] || null;
  if (icon.startsWith("Bs")) return BsIcons[icon] || null;
  return null;
}

const ICON_SIZE = {
  base: "2rem",
  sm: "2.4rem",
  md: "3rem",
  lg: "3.4rem",
};

const SkillCard = ({ name, icon }) => {
  // All hooks are called at the top level (good practice!)
  const iconColor = useColorModeValue("brand.500", "brand.100");
  const bg = useColorModeValue("white", "gray.900");
  const hoverBg = useColorModeValue("brand.50", "brand.800");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const iconHoverColor = useColorModeValue("brand.700", "brand.500");
  const iconBg = useColorModeValue("gray.50", "gray.800");

  const Icon = getIconComponent(icon);

  return (
    <Flex
      aspectRatio={1}
      direction="column"
      align="center"
      justify="center"
      borderRadius="xl"
      bg={bg}
      textAlign="center"
      transition="all 0.18s"
      cursor="pointer"
      boxShadow="md"
      _hover={{
        transform: "translateY(-7px) scale(1.04)",
        boxShadow: "2xl",
        bg: hoverBg,
      }}
      position="relative"
      overflow="hidden"
      role="group"
    >
      {/* Icon section */}
      <Center w="full" h="57%">
        {Icon ? (
          <Box
            as={Icon}
            fontSize={ICON_SIZE}
            color={iconColor}
            aria-label={name}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={1}
            transition="color 0.18s"
            _groupHover={{ color: iconHoverColor }}
          />
        ) : (
          <Center
            fontSize={ICON_SIZE}
            color={iconColor}
            borderRadius="full"
            fontWeight="bold"
            mb={1}
            bg={iconBg}
            boxSize={{
              base: "2.2rem",
              sm: "2.6rem",
              md: "2.9rem",
              lg: "3.2rem",
            }}
          >
            {name.charAt(0)}
          </Center>
        )}
      </Center>

      {/* Name text section */}
      <Flex align="center" justify="center" w="full" h="43%" px={2}>
        <Text
          fontWeight="bold"
          fontSize={{ base: "sm", md: "md" }}
          color={textColor}
          whiteSpace="normal"
          textAlign="center"
          wordBreak="break-word"
          lineHeight="1.18"
          noOfLines={2}
        >
          {name}
        </Text>
      </Flex>
    </Flex>
  );
};

export default SkillCard;
