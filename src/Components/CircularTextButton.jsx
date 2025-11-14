import React, { useEffect } from "react";
import { useColorModeValue, useToken } from "@chakra-ui/react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const CircularTextButton = ({
  text = "GET IN TOUCH",
  scrollTo = "contact",
  spinDuration = 18,
  size = 120,
  separator = " • ",
}) => {
  // Resolve actual color code for whiteAlpha.900 and brand.100
  // const [whiteAlpha900] = useToken("colors", ["whiteAlpha.900"]);
  // const [brand100] = useToken("colors", ["brand.100"]);
  const [brand500] = useToken("colors", ["brand.500"]);
  const [brand100] = useToken("colors", ["brand.100"]);
  const isLight = useColorModeValue(true, false);

  const mainColor = isLight ? brand500 : brand100;

  const controls = useAnimation();
  const rotation = useMotionValue(0);

  const words = text.toUpperCase().split(" ").filter(Boolean);
  let displayArr = [];
  words.forEach((word) => {
    word
      .split("")
      .forEach((letter) =>
        displayArr.push({ char: letter, isSeparator: false })
      );
    displayArr.push({ char: separator, isSeparator: true });
  });

  const spin = (duration) => ({
    rotate: rotation.get() + 360,
    transition: { duration, ease: "linear", repeat: Infinity },
  });

  useEffect(() => {
    controls.start(spin(spinDuration));
    // eslint-disable-next-line
  }, [spinDuration]);

  const handleHoverStart = () => controls.start(spin(spinDuration * 0.5));
  const handleHoverEnd = () => controls.start(spin(spinDuration));

  const radius = size / 2.1;

  return (
    <ScrollLink to={scrollTo} smooth duration={800} offset={-80}>
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          color: mainColor,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontWeight: 700,
          userSelect: "none",
        }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        tabIndex={0}
        aria-label={text}
        whileTap={{ scale: 0.95 }}
      >
        {displayArr.map(({ char }, i) => {
          const angle = (360 / displayArr.length) * i - 90;
          const rad = (angle * Math.PI) / 180;
          const x = radius + radius * Math.cos(rad);
          const y = radius + radius * Math.sin(rad);
          return (
            <span
              key={i}
              style={{
                position: "absolute",
                left: x,
                top: y,
                transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                fontSize: 18,
                color: mainColor,
                opacity: 1,
                letterSpacing: "0.13em",
                fontWeight: "900",
                pointerEvents: "none",
                fontFamily: "inherit",
              }}
            >
              {char}
            </span>
          );
        })}
        {/* Center dot */}
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: size * 0.15,
            height: size * 0.15,
            background: mainColor,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 2px 12px 0 #0002",
            border: `2.5px solid ${mainColor}`,
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </ScrollLink>
  );
};

export default CircularTextButton;
