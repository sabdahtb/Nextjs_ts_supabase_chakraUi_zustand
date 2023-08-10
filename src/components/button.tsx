'use client'

import { Box, Button } from '@chakra-ui/react'
import useThemeState from '~/stores/theme'

export default function Buttons() {
  const { mode, changeMode } = useThemeState()
  const login = async () => {
    const res = await fetch(`/api/home`)

    // const res = await fetch('/api/product', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: 'sabda',
    //   }),
    // })

    const response = await res.json()

    console.log({ response })
  }

  return (
    <Box>
      <Button onClick={login} colorScheme="gray">
        Login
      </Button>
      <Button onClick={changeMode} colorScheme="gray">
        {mode}
      </Button>
    </Box>
  )
}
