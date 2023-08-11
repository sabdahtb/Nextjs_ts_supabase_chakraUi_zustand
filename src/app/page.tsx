import { FC } from 'react'
import { Metadata } from 'next'

import Home from './home'

export const metadata: Metadata = {
  title: 'NextJS | Home',
  description: 'NExt Js Home Desc',
}

const Main: FC = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default Main
