import { useState } from "react";
import "./Folder.css";

// Utility for subtle color shade
const darkenColor = (hex, percent) => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const Folder = ({
  color = "#e9c46a", // Your main theme color
  size = 1,
  items = [],
  className = "",
}) => {
  const [open, setOpen] = useState(false);

  // For single card, only use the first item
  const papers = items.slice(0, 1);

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor("#ffffff", 0.1);

  const folderStyle = {
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-1": paper1,
  };

  const folderClassName = `folder${open ? " open" : ""}${
    className ? " " + className : ""
  }`;
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={folderClassName}
        style={folderStyle}
        onClick={() => setOpen((prev) => !prev)}
        tabIndex={0}
        aria-label={open ? "Close folder" : "Open folder"}
        role="button"
      >
        <div className="folder__back">
          {papers.map((item, i) =>
            item ? (
              <div key={i} className="paper">
                {item}
              </div>
            ) : null
          )}
          <div className="folder__front"></div>
          <div className="folder__front right"></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
