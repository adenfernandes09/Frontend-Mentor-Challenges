import { Box, List, ListItem, Typography, useMediaQuery } from "@mui/material";

const Info = () => {
    const mobile = useMediaQuery("(max-width: 600px)")
  return (
    <Box
      sx={{ padding: "2.5rem", backgroundColor: "#4abdbd", minWidth: "50px", borderRadius: mobile? '0 0 0.5rem 0.5rem': '0 0 0.5rem 0'}}
    >
        <Typography sx={{fontSize: '1.125rem', fontWeight: '600', color: '#FFF'}}>Why Us</Typography>
        <List sx={{color: '#fff'}}>
            <ListItem sx={{padding: '8px 0 8px 0'}}>Tutorials by industry experts</ListItem>
            <ListItem sx={{padding: '8px 0 8px 0'}}>Peer and expert code reviews</ListItem>
            <ListItem sx={{padding: '8px 0 8px 0'}}>Coding exercises</ListItem>
            <ListItem sx={{padding: '8px 0 8px 0'}}>Access to our Github repos</ListItem>
            <ListItem sx={{padding: '8px 0 8px 0'}}>Community forum</ListItem>
            <ListItem sx={{padding: '8px 0 8px 0'}}>Flascard decks</ListItem>

        </List>
    </Box>
  );
};

export default Info;
