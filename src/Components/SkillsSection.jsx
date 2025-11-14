import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import clientData from "../data/clientData";
import ProfileCard from "./ProfileCard";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const SkillsSection = () => {
  const gradientBg = useColorModeValue(
    "linear(to-br, brand.50, white)",
    "linear(to-br, gray.900, brand.900)"
  );

  return (
    <Box
      as="section"
      id="skills"
      position="relative"
      py={{ base: 8, md: 18 }}
      px={{ base: 2, md: 12 }}
      w="full"
      minH="70vh"
      bgGradient={gradientBg}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 10, md: 14 }}
        w="full"
        maxW="7xl"
        align="center"
        justify="center"
      >
        {/* Profile Card (was CurvedLoop) */}
        <MotionBox
          flex={{ base: "unset", md: 1.2 }}
          display="flex"
          flexDir="column"
          alignItems="center"
          mb={{ base: 6, md: 0 }}
          minW={{ md: "360px" }}
          initial={{ opacity: 0, y: 64, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.2, 0.8, 0.4, 1] }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <ProfileCard
            name={"exec portfolio"}
            title={clientData.hero.role}
            handle={clientData.hero.handle}
            status="Open To Work"
            contactText="Contact Me"
            avatarUrl={clientData.hero.image}
            miniAvatarUrl={clientData.hero.image}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => window.open("mailto:your@email.com")}
          />
        </MotionBox>

        {/* Cards Grid */}
        <Box flex={2} w="full">
          <Heading
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            mb={{ base: 6, md: 10 }}
            color={useColorModeValue("brand.500", "brand.100")}
            fontWeight="extrabold"
            textAlign={{ base: "center", md: "left" }}
            letterSpacing="tight"
          >
            My Skills & Tech Stack
          </Heading>
          <SimpleGrid minChildWidth="148px" spacing={7} w="100%">
            {clientData.skills.map((skill, i) => (
              <MotionBox
                key={skill.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.44, delay: i * 0.07 }}
              >
                <SkillCard name={skill.name} icon={skill.icon} />
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default SkillsSection;
