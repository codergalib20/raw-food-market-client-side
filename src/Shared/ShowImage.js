import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

export default function ShowImage({showImg}) {
  const useStyle = makeStyles({
      cartImage : {
        width: '100%',
      }
  })
  const { cartImage } = useStyle()
  return (
    <Box>
       <img className={cartImage} src={showImg} alt="" />
    </Box>
  )
}
