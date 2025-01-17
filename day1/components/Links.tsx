import Box from "@mui/material/Box";
import Link from "next/link";
import React from "react";

interface LinkProps{
    linkInfo: {
        link: string,
        linkTitle: string
    }
}

const Links = ({linkInfo} : LinkProps) => {
  return <Box component="div" className="link-bg" sx={{margin: "0.5rem 0", padding: "12px 60px", display: 'flex', justifyContent: 'center', alignItems: "center", width: "14rem", borderRadius: "0.25rem"}}>
    <Link className="link" href={linkInfo.link}>{linkInfo.linkTitle}</Link>
  </Box>;
};

export default Links;
