'use client'

import { FC } from 'react'
import { Text } from '@chakra-ui/react'

import Buttons from '~/components/button'
import { commonText } from '~/datas/text'

const Home: FC = () => {
  return (
    <>
      <Text>{commonText.thisHome}</Text>
      <Buttons />
    </>
  )
}

export default Home
