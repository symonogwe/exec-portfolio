import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  Image,
  useColorModeValue,
  useTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const articles = [
  {
    id: 1,
    title: "Learning to Code as a Self-Taught African",
    excerpt:
      "I discovered that university programs in Africa often teach theory but not modern tools — so I turned to YouTube, The Odin Project and freeCodeCamp to learn practical skills...",
    content: `When I first decided to learn coding, I quickly realized how disconnected traditional university education in Africa is from the realities of the modern tech industry. My degree program taught me theory, but very little about the tools and workflows companies actually use today. By the time you leave school, the industry has already moved ahead.

That gap is what pushed me to take a self-taught route. I turned to YouTube tutorials, open-source curricula like The Odin Project and freeCodeCamp, and communities that freely share resources. These platforms not only gave me access to high-quality, practical material but also connected me to a global network of learners facing the same struggles.

Being self-taught isn’t easy. It means late nights debugging code, battling imposter syndrome, and constantly comparing yourself to peers with formal CS backgrounds. But it also means you learn resilience and adaptability. I discovered that modern coding is less about memorizing syntax and more about problem-solving, resourcefulness, and continuous learning.

In hindsight, I see that my non-linear journey is my strength. I didn’t just learn to code—I learned how to teach myself, keep pace with industry changes, and stay accountable to my own goals. And in today’s fast-moving tech world, that mindset is more valuable than any degree alone.`,
    image: "/assets/Self-taught.jpg",
  },
  {
    id: 2,
    title: "Learning JavaScript by Building Projects",
    excerpt:
      "You don’t learn JavaScript by reading — you learn it by building real projects. My learning exploded once I started making small apps and iterating...",
    content: `When you first encounter JavaScript, it feels intimidating. The syntax looks unfamiliar, and concepts like closures or async functions can seem impossible to grasp. I remember sitting in front of documentation feeling completely overwhelmed.

What changed everything for me was a simple realization: you don’t learn JavaScript by just reading about it—you learn it by building with it.

My first real project was a to-do list app. It was basic, but it forced me to understand functions, loops, event listeners, and DOM manipulation. Each project after that got a little harder: a weather app using APIs, a calculator, a portfolio website. With every build, I picked up not just new features of the language but also how to think like a developer.

Projects give your learning direction. Instead of memorizing, you’re solving real problems. You Google, you ask questions, you debug endlessly—and that’s where the true learning happens. It’s the process of struggling with an error for hours and finally seeing your code run that teaches you more than any tutorial can.

Today, I still learn JavaScript the same way. Whenever a new concept comes up—whether it’s promises, async/await, or React hooks—I immediately find a way to apply it in a small project. That way, learning never feels abstract. It’s always tied to something tangible that I can build, use, and share.`,
    image: "/assets/Building-Projects.jpg",
  },
  {
    id: 3,
    title: "How to Apply for Jobs as a Self-Taught Developer",
    excerpt:
      "Certificates alone won't open doors — projects do. Build a portfolio that demonstrates what you can solve and how you work.",
    content: `As a self-taught developer, one of the hardest truths I had to accept is that certificates don’t open doors—projects do.

I used to think that if I could complete a bunch of courses online and get shiny certificates, employers would take me seriously. But the reality is different: hiring managers want to see if you can build, solve problems, and contribute to a team.

What really works is a portfolio. Every project you build becomes proof of your skills. A landing page shows you understand HTML and CSS. A weather app proves you can work with APIs. A small e-commerce clone demonstrates problem-solving, data handling, and maybe even some backend skills.

When applying for jobs, I learned to emphasize these projects. Instead of saying “I know JavaScript,” I’d link to a project and explain how I built it. Instead of listing generic skills, I’d point to GitHub commits and show how I approach version control. This makes your application stand out, because you’re not just claiming knowledge—you’re showing it.

The best part? Projects are a story of your growth. They don’t just demonstrate what you know now, but also that you’re always learning. And in tech, where things evolve daily, that mindset is exactly what employers value most.`,
    image: "/assets/work.jpg",
  },
  {
    id: 4,
    title: "Why Coding Should Be Taught in African Schools",
    excerpt:
      "Coding is the new literacy of the digital economy. Teaching kids to code builds problem solving, critical thinking and unlocks economic potential.",
    content: `When I look back at my own schooling in Africa, one thing stands out: technology education was outdated and disconnected from reality. We were taught how to use Microsoft Word and Excel, but not how to create the software behind them. We learned about computers as static tools, not as platforms for creativity, innovation, and problem-solving.

The truth is that Africa can’t afford to treat coding as an optional skill anymore. Coding is the new literacy of the digital economy. It empowers young people to not just consume technology, but to create it. With so much of our population under 25, teaching coding in schools could unlock massive potential for innovation, entrepreneurship, and economic growth.

But it’s not just about jobs. Coding teaches critical thinking, logic, and resilience. It encourages students to break problems into smaller parts, test ideas, and adapt when things go wrong. These are skills that strengthen communities and societies, not just individuals.

To get there, we need to redesign our education systems. That means updating curricula, training teachers, and making resources accessible. It also means moving away from rote learning and embracing project-based, hands-on approaches that mirror how coding is actually practiced in the real world.

If Africa is serious about competing in the digital age, coding in schools isn’t a luxury—it’s a necessity. We need to prepare the next generation not just to use technology, but to shape it.`,
    image: "/assets/School-code.jpg",
  },
];

export default function ArticlesSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeArticle, setActiveArticle] = useState(null);

  const theme = useTheme();
  const brand500 = theme.colors?.brand?.[500] ?? "#EF233C";
  const brand100 = theme.colors?.brand?.[100] ?? "#EDF2F4";
  const headingGradient = useColorModeValue(
    `linear(to-r, ${brand500}, ${brand100})`,
    `linear(to-r, ${brand100}, ${brand500})`
  );

  const cardBg = useColorModeValue("white", "gray.800");
  const cardHoverBg = useColorModeValue("gray.50", "gray.700");
  const excerptColor = useColorModeValue("gray.600", "gray.300");
  const articleText = useColorModeValue("gray.700", "gray.200");

  const openArticle = (article) => {
    setActiveArticle(article);
    onOpen();
  };

  return (
    <Box
      as="section"
      id="articles"
      py={{ base: 10, md: 16 }}
      px={{ base: 4, md: 12 }}
    >
      <Container maxW="7xl">
        <Heading
          as="h2"
          textAlign="center"
          mb={{ base: 8, md: 12 }}
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="extrabold"
          color={useColorModeValue("brand.500", "brand.100")}
        >
          Articles & Insights
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8} w="full">
          {articles.map((article, i) => (
            <MotionBox
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Card
                bg={cardBg}
                borderRadius="2xl"
                boxShadow="md"
                overflow="hidden"
                h="100%"
                transition="all 0.28s ease"
                _hover={{
                  bg: cardHoverBg,
                  transform: "translateY(-6px)",
                  boxShadow: "xl",
                }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  objectFit="cover"
                  w="100%"
                  h="220px"
                />
                <CardBody>
                  <Stack spacing={4}>
                    <CardHeader p={0}>
                      <Heading size="md">{article.title}</Heading>
                    </CardHeader>

                    <Text fontSize="md" color={excerptColor}>
                      {article.excerpt}
                    </Text>

                    <Box>
                      <Button
                        size="sm"
                        mt={2}
                        onClick={() => openArticle(article)}
                        bgGradient={headingGradient}
                        color="white"
                        _hover={{ opacity: 0.92 }}
                      >
                        Read More
                      </Button>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>

      {/* Modal for full article */}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setActiveArticle(null);
          onClose();
        }}
        size="xl"
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent borderRadius="2xl" maxW="4xl">
          <ModalHeader>{activeArticle?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {activeArticle && (
              <>
                <Image
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  borderRadius="md"
                  mb={4}
                />
                <Text whiteSpace="pre-wrap" color={articleText}>
                  {activeArticle.content}
                </Text>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
