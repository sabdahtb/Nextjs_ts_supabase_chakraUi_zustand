'use client'

import { FC } from 'react'
import { Center, Link, Text } from '@chakra-ui/react'

import { commonText } from '~/datas/text'

const NotFound: FC = () => {
  return (
    <>
      <Center display="flex" flexDir="column" w="100%" h="100vh">
        <Text fontSize="6xl" fontWeight="bold">
          {commonText.notFoundCode}
        </Text>
        <Text fontSize="xl">{commonText.notFoundText}</Text>
        <Link mt="16px" color="blue.300" href="/">
          {commonText.backToHome}
        </Link>
      </Center>
    </>
  )
}

export default NotFound
