import { Box, Button, Typography, useMediaQuery } from "@mui/material";

const CTA = () => {
    const mobile = useMediaQuery("(max-width: 600px)")
  return (
    <Box
      sx={{ padding: "2.5rem", backgroundColor: "#2AB3B1", minWidth: "310px", borderRadius: mobile? '0': '0 0 0 0.5rem'}}
    >
      <Typography
        sx={{ color: "#fff", fontSize: "1.125rem", fontWeight: 600 }}
      >
        Monthly Subscription
      </Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center',fontWeight: 800, fontSize: "2rem", color: "#fff" }}>
        $29 {"   "}<span style={{color: "rgba(255, 255, 255, 0.5)", fontSize: '1rem', fontWeight: '400', marginLeft: '0.5rem'}}>per month</span>
      </Typography>
      <Typography sx={{color:'#fff'}}>Full access for less than $1 a day</Typography>
      <Button sx={{color: '#fff', backgroundColor: '#C0DF33', width: '100%', textTransform: 'none', fontWeight: '800', padding: '0.5rem 1rem', marginTop: '1.5rem'}}>Sign Up</Button>
    </Box>
  );
};

export default CTA;
