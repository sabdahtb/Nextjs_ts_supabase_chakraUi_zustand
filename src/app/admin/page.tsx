import { FC } from 'react'
import { Metadata } from 'next'

import Avatar from '~/components/avatar'

export const metadata: Metadata = {
  title: 'Kedai Abdi | Admin',
  description: 'Admin Page For Kedai Abdi',
}

const Admin: FC = () => {
  return (
    <>
      <Avatar />
    </>
  )
}

export default Admin
