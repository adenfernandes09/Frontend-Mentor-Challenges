import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
// import iconPlus = PlusIcon from "/assets/images/icon-plus.svg"

interface QuestionProps {
  data: {
    question: string;
    answer: string;
  };
}

const QuestionAccordion = ({ data }: QuestionProps) => {
  const { question, answer } = data;
  const [showAccordion, setShowAccordion] = useState(false);
  return (
    <Box sx={{ width: "100%", display: "block", marginBottom: '20px', borderBottom: '1px solid #ccc', padding: '1.5rem 0'}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: '1rem'
        }}
      >
        <Typography sx={{ fontWeight: "600",color: '#000', "&hover": { color: "#ccc" } }}>
          {question}
        </Typography>
        <Button
          sx={{
            backgroundColor: showAccordion? '#301524': "#AD28EB",
            color: "white",
            borderRadius: "50%",
            minWidth: "25px",
            minHeight: "25px",
            fontWeight: '500',
            padding: '0',
            "&:hover": { backgroundColor: "#301524" },
          }}
          onClick={() => setShowAccordion(!showAccordion)}
        >
          {showAccordion ? "-" : "+"}
        </Button>
      </Box>
      <Box sx={{ width: "85%", display: showAccordion ? "flex" : "none" }}>
        <Typography sx={{ color: "#8B69990" }}>{answer}</Typography>
      </Box>
    </Box>
  );
};

export default QuestionAccordion;
