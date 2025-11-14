// src/Components/DesignsSection.jsx
import React, {
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  AspectRatio,
  Image,
  Badge,
  Icon,
  Stack,
  Wrap,
  WrapItem,
  Button,
  ButtonGroup,
  useColorModeValue,
  useTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import designs from "../data/designsData";

const MotionBox = motion(Box);

export default function DesignsSection() {
  // ===== Theme-aware tokens =====
  const theme = useTheme();
  const brand100 = theme.colors?.brand?.[100] ?? "#EDF2F4";

  const cardBg = useColorModeValue("white", "gray.800");
  const cardHoverBg = useColorModeValue("gray.50", "gray.700");
  const textMuted = useColorModeValue("gray.600", "gray.300");
  const badgeBg = useColorModeValue("brand.100", "gray.700");
  const modalBg = useColorModeValue("white", "gray.900");
  const badgeColor = useColorModeValue("brand.900", "brand.100");
  const badgeBorderColor = useColorModeValue("gray.200", "whiteAlpha.300");

  const kindBtnBgActive = useColorModeValue("brand.500", "brand.100");
  const kindBtnColorActive = useColorModeValue("white", "brand.900");
  const kindBtnBorder = useColorModeValue("gray.200", "whiteAlpha.300");

  const tagOnBg = useColorModeValue("brand.500", "gray.700");
  const tagOnColor = useColorModeValue("brand.900", "brand.100");
  const tagOffBg = useColorModeValue("white", "gray.800");

  // ===== Lightbox state =====
  const [active, setActive] = useState(null);
  const isOpen = Boolean(active);
  const onClose = useCallback(() => setActive(null), []);

  // Keep a ref for the video element inside the modal for controlling playback
  const videoRef = useRef(null);

  // ===== Filters state =====
  const [kind, setKind] = useState("all"); // "all" | "image" | "video"
  const [selectedTag, setSelectedTag] = useState(null); // single tag or null

  // Unique tag list from the data
  const allTags = useMemo(() => {
    const set = new Set();
    designs.forEach((d) => (d.tags || []).forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  // Try to autoplay when opening a video (muted)
  useEffect(() => {
    if (!active || active.kind !== "video") return;
    const el = videoRef.current;
    if (!el) return;

    if (active.autoplay) {
      el.muted = true;
      el.play().catch(() => {});
    } else {
      el.pause();
      el.currentTime = 0;
    }
  }, [active]);

  // Sort newest first (stable)
  const sortedDesigns = useMemo(
    () => [...designs].sort((a, b) => (b.year || 0) - (a.year || 0)),
    []
  );

  // Apply filters (kind + single tag)
  const filteredDesigns = useMemo(() => {
    return sortedDesigns.filter((item) => {
      if (kind !== "all" && item.kind !== kind) return false;
      if (selectedTag) {
        const itemTags = item.tags || [];
        if (!itemTags.includes(selectedTag)) return false;
      }
      return true;
    });
  }, [sortedDesigns, kind, selectedTag]);

  // Toggle a tag chip (single selection)
  const toggleTag = (tag) => {
    setSelectedTag((prev) => (prev === tag ? null : tag));
  };

  // Reset filters
  const clearFilters = () => {
    setKind("all");
    setSelectedTag(null);
  };

  return (
    <Box
      as="section"
      id="designs"
      py={{ base: 12, md: 16 }}
      px={{ base: 4, md: 12 }}
      maxW="7xl"
      mx="auto"
    >
      <Heading
        as="h2"
        textAlign="center"
        mb={{ base: 6, md: 8 }}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="extrabold"
        color={useColorModeValue("brand.500", "brand.100")}
      >
        Graphic Design Projects
      </Heading>

      {/* ===== Filters Bar ===== */}
      <Stack
        spacing={{ base: 4, md: 5 }}
        mb={{ base: 8, md: 10 }}
        align="stretch"
      >
        {/* Kind selector */}
        <Stack
          direction={{ base: "column", sm: "row" }}
          align={{ base: "stretch", sm: "center" }}
          justify="space-between"
          spacing={3}
        >
          <Stack spacing={2}>
            <Text
              fontSize="sm"
              color={textMuted}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="0.08em"
            >
              Kind
            </Text>
            <ButtonGroup
              variant="outline"
              isAttached
              size="sm"
              overflow="hidden"
              borderRadius="full"
            >
              {[
                { label: "All", value: "all" },
                { label: "Images", value: "image" },
                { label: "Videos", value: "video" },
              ].map((opt) => {
                const isActive = kind === opt.value;
                return (
                  <Button
                    key={opt.value}
                    onClick={() => setKind(opt.value)}
                    borderColor={kindBtnBorder}
                    _hover={{ bg: isActive ? kindBtnBgActive : cardHoverBg }}
                    bg={isActive ? kindBtnBgActive : "transparent"}
                    color={isActive ? kindBtnColorActive : undefined}
                    borderRadius="full"
                    fontWeight="semibold"
                  >
                    {opt.label}
                  </Button>
                );
              })}
            </ButtonGroup>
          </Stack>

          {(kind !== "all" || selectedTag) && (
            <Button
              onClick={clearFilters}
              alignSelf={{ base: "flex-start", sm: "center" }}
              size="sm"
              variant="ghost"
              color={kindBtnBgActive}
            >
              Clear filters
            </Button>
          )}
        </Stack>

        {/* Tags chips (single select) */}
        <Stack spacing={2}>
          <Text
            fontSize="sm"
            color={textMuted}
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="0.08em"
          >
            Tags
          </Text>
          <Wrap spacing={3}>
            {allTags.map((tag) => {
              const on = selectedTag === tag;
              return (
                <WrapItem key={tag}>
                  <Button
                    size="sm"
                    onClick={() => toggleTag(tag)}
                    borderRadius="full"
                    variant="outline"
                    borderColor={kindBtnBorder}
                    bg={on ? tagOnBg : tagOffBg}
                    color={on ? tagOnColor : undefined}
                    fontWeight="semibold"
                    _hover={{ bg: on ? tagOnBg : cardHoverBg }}
                  >
                    {tag}
                  </Button>
                </WrapItem>
              );
            })}
          </Wrap>
        </Stack>
      </Stack>
      {/* ===== End Filters Bar ===== */}

      {/* Grid */}
      {filteredDesigns.length === 0 ? (
        <Box py={16} textAlign="center" color={textMuted} fontWeight="medium">
          No designs match the selected filters.
        </Box>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
          {filteredDesigns.map((item, i) => {
            const ratio = item.aspect || 1;

            return (
              <MotionBox
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                role="group"
              >
                <Box
                  bg={cardBg}
                  borderRadius="2xl"
                  overflow="hidden"
                  shadow="md"
                  transition="all 0.28s ease"
                  _hover={{
                    bg: cardHoverBg,
                    transform: "translateY(-6px)",
                    shadow: "xl",
                  }}
                  cursor="pointer"
                  onClick={() => setActive(item)}
                >
                  <AspectRatio ratio={ratio}>
                    <Box position="relative">
                      <Image
                        src={item.thumb}
                        alt={item.title}
                        objectFit="cover"
                        w="100%"
                        h="100%"
                        loading="lazy"
                        transition="transform 0.35s ease"
                        _groupHover={{ transform: "scale(1.045)" }}
                      />

                      {item.kind === "video" && (
                        <Box
                          position="absolute"
                          inset="0"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          bg="blackAlpha.400"
                          opacity={{ base: 1, md: 0.0 }}
                          _groupHover={{ opacity: 1 }}
                          transition="opacity 0.25s ease"
                        >
                          <Icon as={FaPlay} boxSize={10} color={brand100} />
                        </Box>
                      )}
                    </Box>
                  </AspectRatio>

                  {/* Meta */}
                  <Stack spacing={2} p={4}>
                    <Heading as="h3" fontSize="lg">
                      {item.title}
                    </Heading>
                    <Stack direction="row" spacing={2} flexWrap="wrap">
                      {item.tags?.map((t) => (
                        <Badge
                          key={t}
                          bg={badgeBg}
                          color={badgeColor}
                          borderRadius="full"
                          px={3}
                          py={1}
                          fontSize="0.72rem"
                        >
                          {t}
                        </Badge>
                      ))}
                      {item.year && (
                        <Badge
                          bg="transparent"
                          borderWidth="1px"
                          borderColor={badgeBorderColor}
                          color={textMuted}
                          borderRadius="full"
                          px={3}
                          py={1}
                          fontSize="0.72rem"
                        >
                          {item.year}
                        </Badge>
                      )}
                    </Stack>
                  </Stack>
                </Box>
              </MotionBox>
            );
          })}
        </SimpleGrid>
      )}

      {/* Lightbox Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="5xl"
        isCentered
        scrollBehavior="inside"
        motionPreset="scale"
      >
        <ModalOverlay />
        <ModalContent borderRadius="2xl" overflow="hidden" bg={modalBg}>
          <ModalCloseButton />

          <ModalBody p={0}>
            {active && (
              <Box>
                {/* Title & meta */}
                <Box px={5} pt={5} pb={3}>
                  <Heading as="h4" fontSize={{ base: "lg", md: "xl" }}>
                    {active.title}
                  </Heading>
                  <Text mt={1} color={textMuted}>
                    {active.tags?.join(" • ")}{" "}
                    {active.year ? `• ${active.year}` : ""}
                  </Text>
                </Box>

                {/* Media */}
                <AspectRatio ratio={active.aspect || 1}>
                  <Box
                    bg="black"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                  >
                    {active.kind === "image" ? (
                      <Image
                        src={active.src}
                        alt={active.title}
                        objectFit="contain"
                        w="100%"
                        h="100%"
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <video
                          ref={videoRef}
                          src={active.src}
                          controls
                          playsInline
                          preload="metadata"
                          poster={active.thumb}
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "block",
                          }}
                        />
                        <InlinePlayControl videoRef={videoRef} />
                      </>
                    )}
                  </Box>
                </AspectRatio>

                <Box h={4} />
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

/**
 * A branded inline play/pause button overlay for the modal video.
 * Appears on hover (desktop) and always visible on mobile for discoverability.
 */
function InlinePlayControl({ videoRef }) {
  const isMobileAlwaysVisible = { base: 1, md: 0 }; // opacity
  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.600");
  const color = useColorModeValue("brand.500", "brand.100");

  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);

    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
    };
  }, [videoRef]);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) el.play();
    else el.pause();
  };

  return (
    <Box
      position="absolute"
      inset="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      opacity={isMobileAlwaysVisible}
      _hover={{ opacity: 1 }}
      transition="opacity 0.25s ease"
      pointerEvents="none"
    >
      <ButtonLike onClick={toggle} bg={bg} color={color} playing={playing} />
    </Box>
  );
}

/** Small helper to render a clickable pill-styled control */
function ButtonLike({ onClick, bg, color, playing }) {
  return (
    <Box
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick?.();
      }}
      as="button"
      pointerEvents="auto"
      display="inline-flex"
      alignItems="center"
      gap={2}
      px={4}
      py={2}
      borderRadius="full"
      bg={bg}
      color={color}
      backdropFilter="blur(6px)"
      borderWidth="1px"
      borderColor="whiteAlpha.400"
      fontWeight={700}
      boxShadow="md"
      transition="transform 0.15s ease"
      _active={{ transform: "scale(0.98)" }}
      aria-label={playing ? "Pause video" : "Play video"}
    >
      <Icon as={playing ? FaPause : FaPlay} />
      <Text fontSize="sm">{playing ? "Pause" : "Play"}</Text>
    </Box>
  );
}
