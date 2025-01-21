import Email from "@/components/Email";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
      <Image src="/assets/logo.svg" width={86} height={26} alt="Logo" style={{marginTop: '30px'}} />
      <Typography variant="h1" sx={{color: '#969696', fontWeight: 400, mt: '25px', mb: '5px'}}>We are launching{" "}<span style={{color: "#15202A", fontWeight: 600}}></span></Typography>
      <Typography sx={{color: '#15202A', fontSize: '1.25rem'}}>Subscribe and get notified</Typography>
      <Email />
      <Image src="/assets/illustration-dashboard.png" width={600} height={353} alt="dashboard-image" style={{marginBottom: '20px'}} />
    </Box>
  );
};

export default Home;
