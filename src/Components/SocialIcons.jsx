import { HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";
import clientData from "../data/clientData";

// Icon mapping (label: icon)
const iconMap = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  Twitter: FaTwitter,
  Medium: FaMedium,
};

const SocialIcons = () => {
  const iconColor = useColorModeValue("brand.500", "brand.100");
  const iconHover = useColorModeValue("brand.900", "brand.500");
  return (
    <HStack spacing={5}>
      {clientData.socials.map(({ label, href }) => {
        const Icon = iconMap[label];
        if (!Icon) return null; // Defensive: skip unknown labels
        return (
          <IconButton
            key={label}
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            icon={<Icon size={26} />}
            color={iconColor}
            variant="ghost"
            _hover={{
              color: iconHover,
              bg: "brand.100",
              transform: "scale(1.12)",
              boxShadow: "0 4px 18px 0px #8D99AE",
              transition: "all 0.23s cubic-bezier(.43,1.34,.55,.99)",
            }}
            transition="all 0.2s"
            fontSize="2xl"
          />
        );
      })}
    </HStack>
  );
};

export default SocialIcons;
