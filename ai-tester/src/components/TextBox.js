import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ResultBox from "./ResultBox"; // Import the ResultBox component

function TextBox() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleCheck = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.gptzero.me/v2/predict/text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          document: inputText,
        }),
      });

      const data = await response.json();
      setResult(data); // Store the result
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          margin: "auto",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            boxShadow: 3,
            padding: 2,
            borderRadius: 2,
            maxWidth: 400,
            width: "100%",
          }}
        >
          <TextField
            fullWidth
            id="filled-multiline-flexible"
            placeholder="Paste content here ..."
            multiline
            minRows={10}
            maxRows={10}
            variant="standard"
            value={inputText}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            sx={{ marginTop: 2 }}
            onClick={handleCheck}
            disabled={loading}
          >
            {loading ? "Checking..." : "Check"}
          </Button>
        </Box>

        {result && (
          <ResultBox
            result={result} // Pass the result to the ResultBox component
          />
        )}
      </Box>
    </div>
  );
}

export default TextBox;
