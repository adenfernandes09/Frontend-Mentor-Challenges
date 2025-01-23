import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CardHeader = () => {
  return (
    <Box sx={{ padding: "2.5rem", backgroundColor: "#ffffff",  borderRadius: "0.5rem 0.5rem 0 0" }}>
      <Typography sx={{ fontSize: "1.5rem", color: "#2ABB3B1" }}>
        Join our community
      </Typography>
      <Typography sx={{ fontSize: "1.125rem", color: "#C0DF33", margin: '0.5rem 0 0.75rem 0' }}>
        30-day, hassle free money back guarantee.
      </Typography>
      <Typography sx={{ color: "#9AA7BE" }}>
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for any developers who are serious about honing their
        skills
      </Typography>
    </Box>
  );
};

export default CardHeader;
