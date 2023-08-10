'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { LazyMotion, domAnimation } from 'framer-motion'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </ChakraProvider>
    </CacheProvider>
  )
}
