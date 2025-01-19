import FAQContainer from "@/components/FAQContainer";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <Box sx={{height: "100vh", backgroundColor: "#F8EEFF", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Image src="/assets/images/background-pattern-desktop.svg" alt="Background-Image" width={0} height={0} style={{position: 'absolute', top: '0', zIndex: 2, width: '100%', height: 'auto'}} />
      <FAQContainer />
    </Box>
  );
};

export default Home;
