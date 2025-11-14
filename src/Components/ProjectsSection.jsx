// src/Components/ProjectsSection.jsx
import { Box, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import clientData from "../data/clientData";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProjectsSection = () => {
  return (
    <Box
      as="section"
      id="projects"
      w="full"
      px={{ base: 2, md: 10 }}
      py={{ base: 10, md: 18 }}
      bgGradient={useColorModeValue(
        "linear(to-br, brand.50, white)",
        "linear(to-br, gray.900, brand.900)"
      )}
    >
      <MotionBox
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        mb={{ base: 10, md: 16 }}
      >
        <Heading
          textAlign="center"
          fontWeight="extrabold"
          fontSize={{ base: "2xl", md: "4xl" }}
          color={useColorModeValue("brand.500", "brand.100")}
        >
          Web Development Projects
        </Heading>
      </MotionBox>
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        spacing={10}
        align="stretch"
        w="full"
        maxW="7xl"
        mx="auto"
      >
        {clientData.projects.map((project, i) => (
          <MotionBox
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <ProjectCard {...project} />
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsSection;
