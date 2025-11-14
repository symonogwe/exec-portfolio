// src/data/clientData.js

const clientData = {
  hero: {
    name: "Symon Opondi",
    role: "Frontend Developer",
    tagline:
      "I build fast, modern websites with beautiful design & performance in mind.",
    ctaText: "Let’s Work Together",
    image: "/assets/profile-pic.jpeg",
    handle: "symonopo",
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/symon-opondi-61448b18b/",
    },
    {
      label: "GitHub",
      href: "https://github.com/symonogwe",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/your-username",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/your-username",
    },
    {
      label: "Medium",
      href: "https://medium.com/",
    },
  ],
  skills: [
    { name: "React", icon: "SiReact" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "Chakra UI", icon: "SiChakraui" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Framer Motion", icon: "SiFramer" },
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "CSS3", icon: "SiCss3" },
    { name: "Project Management", icon: "FaRegLightbulb" }, // Generic "idea" icon
    { name: "IT Business Analysis", icon: "BsFillPeopleFill" }, // User/people icon
    { name: "Figma", icon: "SiFigma" },
    { name: "Git & Github", icon: "SiGithub" },
    { name: "Business Process Modelling", icon: "FaProjectDiagram" },
    // Add more skills, set icon: null or leave undefined for text-only!
  ],
  projects: [
    {
      title: "Kudos Rides",
      description:
        "A ride-hailing app that connects passengers with drivers for quick and convenient transportation. Book rides, track drivers, and pay seamlessly.",
      liveUrl: "https://kudosrides.com/",
      image: "/assets/kudos.png",
    },
    {
      title: "Nia Energies",
      description:
        "A clean energy solutions company providing solar power systems and sustainable energy products to homes and businesses. Empowering a greener future.",
      liveUrl: "https://symon-nia-sample.vercel.app/",
      image: "/assets/nia.png",
    },
    {
      title: "Marcelo Consultancy",
      description:
        "A smart staffing platform connecting hospitals, care homes, and schools with qualified professionals. Effortlessly manage placements, shifts, and compliance—all in one place.",
      liveUrl: "https://marceloconsultancy.co.uk/",
      image: "/assets/Marcelo.png",
    },
    {
      title: "Game Hub",
      description:
        "Discover, filter, and search video games by genre, platform, or popularity. Find your next favorite game quickly with advanced search and intuitive categories.",
      liveUrl: "https://symon-game-hub.vercel.app/",
      image: "/assets/GameHub.png",
    },
    {
      title: "To-do List",
      description:
        "Organize your life with project-based to-do lists. Create projects, add tasks, and view your work by day or week for maximum productivity and clarity.",
      liveUrl: "https://symonogwe.github.io/To-Do-List/",
      image: "/assets/To-Do.png",
    },
    {
      title: "BattleShips Game",
      description:
        "A web-based twist on the classic Battleships board game. Build your fleet and challenge the computer in a battle of strategy and luck!",
      liveUrl: "https://symonogwe.github.io/Battleship-game/",
      image: "/assets/Battleships.png",
    },

    {
      title: "Weather App",
      description:
        "Get live weather updates for any city. Instantly view temperature, wind, sunrise, sunset, and moon data with a clean, intuitive interface.",
      liveUrl: "https://symonogwe.github.io/Weather-App/",
      image: "/assets/Weather-App.png",
    },
    {
      title: "Tic Tac Toe",
      description:
        "A modern web version of the classic two-player TicTacToe game—simple, interactive, and perfect for quick fun.",
      liveUrl: "https://symonogwe.github.io/Tic-Tac-Toe/",
      image: "/assets/Tic-Tac-Toe.png",
    },
  ],
  contact: [
    {
      type: "Email",
      value: "symonogwe@gmail.com",
      icon: "FaEnvelope",
      link: "mailto:symonogwe@gmail.com",
      color: "brand.500",
    },
    {
      type: "WhatsApp",
      value: "+254701567843",
      icon: "FaWhatsapp",
      link: "https://wa.me/254701567843",
      color: "green.500",
    },
    {
      type: "Phone",
      value: "+254701567843",
      icon: "FaPhone",
      link: "tel:+254701567843",
      color: "brand.900",
    },
    {
      type: "LinkedIn",
      value: "https://www.linkedin.com/in/symon-opondi-61448b18b/",
      icon: "FaLinkedin",
      link: "https://www.linkedin.com/in/symon-opondi-61448b18b/",
      color: "blue.500",
    },
  ],
};

export default clientData;
