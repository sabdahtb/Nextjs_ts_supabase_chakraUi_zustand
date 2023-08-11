import { FC } from 'react'
import { Metadata } from 'next'

import Hero from './components/hero'

export const metadata: Metadata = {
  title: 'Kedai Abdi | Admin',
  description: 'Admin Page For Kedai Abdi',
}

const Admin: FC = () => {
  return (
    <>
      <Hero />
    </>
  )
}

export default Admin
