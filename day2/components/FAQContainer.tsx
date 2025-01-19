"use client"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import QuestionAccordion from "./QuestionAccordion"
import Image from "next/image"

const FAQContainer = () => {
const accordionData = [
    {question: "What is the importance of Front-end Mentor", answer: "Frontend Mentor sites are very important for one to practice their coding skills and try and learn new technologiies and get themselves well acquainted with industry leaders who are looking to hire."}, 
    {question: "What is the importance of Front-end Mentor", answer: "Frontend Mentor sites are very important for one to practice their coding skills and try and learn new technologiies and get themselves well acquainted with industry leaders who are looking to hire."},
    {question: "What is the importance of Front-end Mentor", answer: "Frontend Mentor sites are very important for one to practice their coding skills and try and learn new technologiies and get themselves well acquainted with industry leaders who are looking to hire."},
    {question: "What is the importance of Front-end Mentor", answer: "Frontend Mentor sites are very important for one to practice their coding skills and try and learn new technologiies and get themselves well acquainted with industry leaders who are looking to hire."},

]
  return (
    <Box component="div" sx={{borderRadius: "2rem",p:'2rem', backgroundColor: "#fff", width: '34.5rem', minHeight:"10rem", zIndex: '5'}}>
        <Typography variant="h1" sx={{}}><Image src="/assets/images/icon-star.svg" width={40} height={40} alt="star-icon" style={{marginRight: '25px'}}/>FAQ</Typography>
            {accordionData.map((item, index) => {
                return (
                    <QuestionAccordion key={index} data={item} />
                )
            })}
    </Box>
  )
}

export default FAQContainer