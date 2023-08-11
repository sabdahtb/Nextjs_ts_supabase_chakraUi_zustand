'use client'

import { FC } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'

import { useHome } from '../../hooks'
import { commonText } from '~/datas/text'

const Hero: FC = () => {
  const {
    datas: { mode },
    methods: { changeMode, login },
  } = useHome()

  return (
    <Box display="flex" gap="20px" alignItems="center">
      <Text>{commonText.thisHome}</Text>
      <Button onClick={login} colorScheme="gray">
        Login
      </Button>
      <Button onClick={changeMode} colorScheme="gray">
        {mode}
      </Button>
    </Box>
  )
}

export default Hero
