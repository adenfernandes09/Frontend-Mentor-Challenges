import CardHeader from "./CardHeader";
import Box from "@mui/material/Box";
import CTA from "./CTA";
import Info from "./Info";
import { useMediaQuery } from "@mui/material";

const CardContainer = () => {
  const mobile = useMediaQuery("(max-width: 600px)")

  return (
    <Box sx={{maxHeight: '29rem', maxWidth: '39rem', borderRadius: '25px'}}>
        <CardHeader />
        <Box sx={{display: "grid", gridTemplateColumns: mobile ?'1fr': '1fr 1fr'}}>
          <CTA />
          <Info />
        </Box>
    </Box>
  )
}

export default CardContainer