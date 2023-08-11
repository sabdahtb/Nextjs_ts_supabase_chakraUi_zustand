'use client'

import { useRouter } from 'next/navigation'
import { Box, Button } from '@chakra-ui/react'

import useThemeState from '~/stores/theme'

export default function Buttons() {
  const router = useRouter()

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

  function toAdmin() {
    router.push('/admin')
  }

  return (
    <Box>
      <Button onClick={login} colorScheme="gray">
        Login
      </Button>
      <Button onClick={toAdmin} colorScheme="gray">
        Admin Page
      </Button>
      <Button onClick={changeMode} colorScheme="gray">
        {mode}
      </Button>
    </Box>
  )
}
