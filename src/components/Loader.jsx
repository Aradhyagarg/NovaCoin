import { Box, CircularProgress, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
        <CircularProgress isIndeterminate color='black' />
    </VStack>
  )
}

export default Loader