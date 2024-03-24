import { Box, CircularProgress } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <Box  display={"flex"} justifyContent={'center'} mt={300}><CircularProgress isIndeterminate color='green.300' /></Box>
  )
}

export default Loading