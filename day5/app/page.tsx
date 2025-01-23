
'use client'
import CardContainer from "@/components/CardContainer";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const Home = () => {
  const mobile = useMediaQuery("(max-width: 600px)")

  return (
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '98vh', padding: mobile? '0 20px 20px': '0'}}>
      <CardContainer />
    </Box>
  );
};

export default Home;
