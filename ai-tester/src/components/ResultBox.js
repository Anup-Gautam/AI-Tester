import React from "react";
import Box from "@mui/material/Box";
import TextBubble from "./TextBubble";
import RobotImage from "../images/robot.png";
import HumanImage from "../images/human.png";

function ResultBox({ result }) {
  const predictedClass = result.documents[0].predicted_class;
  const imageSrc = predictedClass === "human" ? HumanImage : RobotImage;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        boxShadow: 3,
        padding: 2,
        borderRadius: 2,
        maxWidth: 400,
        margin: "auto",
      }}
    >
      <img
        src={imageSrc}
        alt={predictedClass === "human" ? "Human" : "Robot"}
        style={{
          width: "80px",
          height: "80px",
          marginRight: "10px",
        }}
      />
      <TextBubble text={`This is ${predictedClass}`} />
    </Box>
  );
}

export default ResultBox;
