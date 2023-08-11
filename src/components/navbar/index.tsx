'use client'

import { FC } from 'react'
import { Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react'

import { useNavbar } from './hooks'

const Navbar: FC = () => {
  const {
    datas: { navList, pathName },
    methods: { gotoPage },
  } = useNavbar()
  return (
    <>
      <Flex as="nav" py="16px" px="40px" alignItems="center">
        <Heading>Kedai Abdi</Heading>
        <Spacer />
        <HStack spacing="16px">
          {navList &&
            navList.map((item, idx) => (
              <Text
                key={idx}
                cursor="pointer"
                onClick={() => gotoPage(item.path)}
                color={pathName === item.path ? 'blue.300' : 'black'}
              >
                {item.title}
              </Text>
            ))}
        </HStack>
      </Flex>
    </>
  )
}

export default Navbar
