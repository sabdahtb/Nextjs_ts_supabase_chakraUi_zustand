'use client'

import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Button, Text } from '@chakra-ui/react'

import { commonText } from '~/datas/text'
import useThemeState from '~/stores/theme'

const Avatar: FC = () => {
  const router = useRouter()

  const { mode, changeMode } = useThemeState()

  function backToHome() {
    router.push('/')
  }

  return (
    <Box>
      <Text>{commonText.thisAdmin}</Text>
      <Button onClick={backToHome} colorScheme="gray">
        To Home
      </Button>
      <Button onClick={changeMode} colorScheme="gray">
        {mode}
      </Button>
    </Box>
  )
}

export default Avatar
