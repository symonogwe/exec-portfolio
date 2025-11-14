import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

// Blended brand colors using your palette
const colors = {
  brand: {
    900: "#2B2D42", // Deep charcoal/navy, for dark backgrounds
    700: "#8D99AE", // Slate gray-blue, for sections/cards
    500: "#EF233C", // Vivid red-pink, for accents/buttons
    100: "#EDF2F4", // Very light gray, backgrounds/cards
  },
  gradient: {
    primary: "linear(to-r, #EF233C, #8D99AE, #EDF2F4)",
    secondary: "linear(to-r, #EDF2F4,#8D99AE,#EF233C)",
  },
  // Add commonly used grays for backgrounds/borders if needed
  gray: {
    900: "#2B2D42",
    700: "#8D99AE",
    100: "#EDF2F4",
  },
  // NavBar
  navbar: {
    light: "rgba(237,242,244,0.92)", // brand.100 + alpha
    dark: "rgba(43,45,66,0.9)", // brand.900 + alpha
  },
};

const fonts = {
  heading: `'Sora', sans-serif`,
  body: `'Sora', sans-serif`,
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "brand.900" : "brand.100", // deep navy for dark, light gray for light
        color: props.colorMode === "dark" ? "brand.100" : "brand.900", // light text on dark, dark text on light
      },
    }),
  },
});

export default theme;
