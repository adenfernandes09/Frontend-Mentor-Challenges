"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import RatingsButton from "./RatingsButton";
import Button from "@mui/material/Box";
import { useState } from "react";
import ThanksMessage from "./ThanksMessage";

const RatingsComponent = () => {
  const buttons = [1, 2, 3, 4, 5];

  const [selected, setSelected] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "#181E27",
        borderRadius: "2rem",
        padding: "40px",
        width: "400px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >{submitted ? (<ThanksMessage selectRating={selected} />) : 
        (
        <>
              <Box
        sx={{
          backgroundColor: "#585863",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/assets/icon-star.svg"
          alt="Star-icon"
          width={30}
          height={30}
        />
      </Box>
      <Typography sx={{ fontSize: "2rem", fontWeight: "600", color: "#fff", marginTop: '20px' }}>
        How did we do?
      </Typography>
      <Typography sx={{ color: "#969FAD", marginBottom: '35px' }}>
        Please let us know how we did with your support request. All feedback is
        appreciated to improve our offering.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: '25px' }}>
        {buttons.map((button, index) => {
          return (
            <RatingsButton
              label={button}
              key={index}
              selectRating={selected}
              setSelectRating={setSelected}
            />
          );
        })}
      </Box>
      <Button
      onClick={() => {setSubmitted(true)}}
        sx={{
          backgroundColor: "#FC7614",
          color: "#131518",
          fontWeight: "600",
          width: "100%",
          borderRadius: "28px",
          padding: "15px 0",
          textAlign: "center",

          "&:hover": {
            backgroundColor: "#fff",
          },
        }}
      >
        Submit
      </Button>
        </>)
    }
    </Box>
  );
};

export default RatingsComponent;