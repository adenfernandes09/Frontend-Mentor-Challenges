import RatingsComponent from "@/components/RatingsComponent";
import Box from "@mui/material/Box";
import React from "react";

const Home = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 'inherit'}}>
      <RatingsComponent />
    </Box>
  );
};

export default Home;
