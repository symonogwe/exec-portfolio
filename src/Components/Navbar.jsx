import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  useColorMode,
  useColorModeValue,
  Link as ChakraLink,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const MotionBox = motion.create(Box);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  // Use theme.js for all colors
  const bgColor = useColorModeValue("navbar.light", "navbar.dark");
  const navColor = useColorModeValue("brand.900", "brand.100");

  const links = ["home", "skills", "projects", "contact"];

  const NavLink = ({ to }) => (
    <ChakraLink
      as={ScrollLink}
      to={to}
      smooth={true}
      duration={600}
      offset={-80}
      px={4}
      py={2}
      fontWeight="medium"
      fontSize="md"
      cursor="pointer"
      color={navColor}
      _hover={{ color: "brand.500" }}
      transition="color 0.2s"
    >
      {to.charAt(0).toUpperCase() + to.slice(1)}
    </ChakraLink>
  );

  return (
    <MotionBox
      position="fixed"
      top={0}
      width="100%"
      zIndex="999"
      bg={bgColor}
      backdropFilter="saturate(180%) blur(8px)"
      boxShadow="sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition="0.4s ease"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 16 }}
      >
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="brand.500"
          cursor="pointer"
        >
          Symon.dev
        </Text>

        {/* Desktop Links */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <NavLink key={link} to={link} />
          ))}
        </HStack>

        <Spacer />

        {/* Theme Toggle */}
        <IconButton
          aria-label="Toggle Color Mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          color={navColor}
          mr={{ base: 0, md: 2 }}
        />

        {/* Mobile Menu Button */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          ml={2}
        />
      </Flex>

      {/* Mobile Drawer Menu */}
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={bgColor}>
          <DrawerCloseButton mt={2} />
          <DrawerBody>
            <Stack spacing={4} mt={12}>
              {links.map((link) => (
                <NavLink key={link} to={link} />
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  );
};

export default Navbar;
