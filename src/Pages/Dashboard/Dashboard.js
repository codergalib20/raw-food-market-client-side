import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import useAuth from '../../hooks/useAuth'
import banner from '../../Images/dashboardBanner.png'
import fireImage from '../../Images/fire.gif'
export default function Dashboard() {
  const useStyle = makeStyles({
     dashboardMainPage :{
       display: 'flex',
       alignItems: 'center',
        justifyContent: 'center',
        minHeight: '90vh',
        width: '100%',
        textAlign: 'center !important',
     },
     bannerImage:{
        width: '100% !important',
        maxWidth: '600px !important',
        margin: '0 auto !important',
     },
     titleText:{
      width: '100%',
      backgroundImage: `url(${fireImage})`,
      backgroundRepeat: `repeat`,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      fontSize: '5rem',
      fontWeight: 'bold',
      "@media (max-width: 600px)": {
        fontSize: '3rem',
      },
     }
  })
  const {dashboardMainPage,titleText,bannerImage} = useStyle()
  const {user} = useAuth()
  return (
     <Box className={dashboardMainPage}>
        <Box>
          <Typography className={titleText} textAlign="center" variant="h4">``{user.displayName}`` <br /> Welcome to our online market</Typography>
           <img className={bannerImage} src={banner} alt="" />
        </Box>
     </Box>
  )
}
