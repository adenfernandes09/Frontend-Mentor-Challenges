import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image"
import Links from "./Links";

const links = [
    { linkTitle: "Github", link: "www.https//github.com" },
    { linkTitle: "Linkedin", link: "www.https//linkedin.com" },
    { linkTitle: "Frontend Mentor", link: "www.https//frontendmentor.com" },
    { linkTitle: "Instagram", link: "www.https//instagram.com" },
    { linkTitle: "X", link: "www.https//x.com" },
  ];

const Card = () => {
  return (
    <Box component="section" className="card-bg" sx={{ p: '2rem', borderRadius: '0.75rem', display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Image src="/assets/images/avatar-jessica.jpeg" alt="Profile image" height={88} width={88} style={{borderRadius: "50%", margin: "20px 0 20px 0"}} />
        <Typography variant="h1" sx={{fontSize: "2.25rem", marginBottom: "5px"}}>Jessica Randall</Typography>
        <Typography className="neon" variant="h2" sx={{fontSize: "1.3125rem", fontWeight: "600", marginBottom: "15px"}}>London, United Kingdom</Typography>
        <Typography sx={{fontSize: "1.3125rem", marginBottom: "15px"}}>"Front-end developer and avid reader"</Typography>
        {links.map((link, index) => {
            return <Links key={index} linkInfo={link} />
        })}
    </Box>  )
}

export default Card