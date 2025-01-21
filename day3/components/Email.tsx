"use client";

import { validEmail } from "@/utils/validationCheck";
import { Box , Input, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

const Email = () => {
    const [authenticEmail, setAuthenticEmail] = useState(true);

    const isValidEmail = (email: string) => {
        const validatedEmail = validEmail(email);
        if(validatedEmail){
            setAuthenticEmail(true);
        }else{
            setAuthenticEmail(false);
        }
    }
  return (
    <Box sx={{my:"40px", display: 'flex', flexDirection: 'row', alignItems: 'start'}}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Input
      onChange={(e) => isValidEmail(e.target.value)}
        sx={{
          border: `1px solid ${authenticEmail? '#BBC7ED': '#FF5466'}`,
          borderRadius: "2rem",
          color: "#BBC7ED",
          width: "26.3125rem",
          p: "0.5rem 1rem",
          marginRight: '15px',
          '&:after': {
            borderBottom: 'none',
          },
        }}
        placeholder="Your email address..."
      />
      <Typography sx={{color: '#FF5466', fontSize: '12px', marginLeft: '10px', marginTop: '5px'}}>{authenticEmail? null: "Please enter valid email address"}</Typography>
        </Box>
      
      <Button
        sx={{
          backgroundColor: "#4C7BF3",
          color: "#fff",
          borderRadius: "2rem",
          padding: "0.5rem 1rem",
          width: "200px",
          height: "50px",
        }}
      >
        Notify me
      </Button>
    </Box>
  );
};

export default Email;
