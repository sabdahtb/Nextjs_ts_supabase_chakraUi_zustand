'use client'

import { FC } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'

import { useAdmin } from '../../hooks'
import { commonText } from '~/datas/text'

const Hero: FC = () => {
  const {
    datas: { mode },
    methods: { changeMode },
  } = useAdmin()
  return (
    <Box display="flex" gap="20px" alignItems="center">
      <Text>{commonText.thisAdmin}</Text>
      <Button onClick={changeMode} colorScheme="gray">
        {mode}
      </Button>
    </Box>
  )
}

export default Hero
