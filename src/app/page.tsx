import { FC } from 'react'
import { Metadata } from 'next'

import Home from './home'

export const metadata: Metadata = {
  title: 'Kedai Abdi | Home',
  description: 'Home Pahe Kedai Abdi',
}

const Main: FC = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default Main
