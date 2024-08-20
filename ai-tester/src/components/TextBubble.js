import React from "react";
import Box from "@mui/material/Box";

function TextBubble({ text }) {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "10px",
        backgroundColor: "#e0e0e0",
        borderRadius: "10px",
        maxWidth: "200px",
        "&::after": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "-10px",
          width: "0",
          height: "0",
          border: "10px solid transparent",
          borderRightColor: "#e0e0e0",
          borderLeft: "0",
          borderTop: "0",
          marginTop: "-5px",
        },
      }}
    >
      {text}
    </Box>
  );
}

export default TextBubble;
