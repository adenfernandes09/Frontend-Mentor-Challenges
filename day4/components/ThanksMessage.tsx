"use client"

import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface Props{
    selectRating: number,
}

const ThanksMessage = ({selectRating}: Props) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Image src="/assets/illustration-thank-you.svg" alt='Thank-You Image' width={162} height={108} style={{marginTop: '25px'}}/>
        <Box sx={{backgroundColor: '#262E38', borderRadius: '20px', padding: '0.5rem 1rem', margin: '2rem 0'}}>
            <Typography sx={{color: '#FC7614'}}>You selected {selectRating} out of 5</Typography>
        </Box>
        <Typography sx={{fontSize: '2rem', fontWeight: 600, color: '#fff'}}>Thank You!</Typography>
        <Typography sx={{color: '#969FAD', textAlign: 'center', marginTop: '20px', width: '80%'}}>We appreciate you taking the time to give a rating. If you ever need more support don't hesitate to get in touch</Typography>
    </Box>
  )
}

export default ThanksMessage