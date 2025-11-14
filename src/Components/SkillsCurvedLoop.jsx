// src/Components/SkillsCurvedLoop.jsx
import CurvedLoop from "./CurvedLoop";
import clientData from "../data/clientData";
import { useColorModeValue } from "@chakra-ui/react";

// Custom theme classes for coloring (see below)
const SkillsCurvedLoop = () => {
  const skillNames = clientData.skills.map((s) => s.name).join(" ✦ ");
  const marqueeText = `${skillNames} ✦ `;

  const loopClass = useColorModeValue("curved-loop-light", "curved-loop-dark");
  return (
    <CurvedLoop
      marqueeText={marqueeText}
      speed={2.5}
      curveAmount={440}
      interactive={true}
      className={loopClass}
    />
  );
};

export default SkillsCurvedLoop;
