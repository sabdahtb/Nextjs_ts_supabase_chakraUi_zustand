import { Metadata } from 'next'

import Button from '~/components/button'

export const metadata: Metadata = {
  title: 'NextJS | Home',
  description: 'NExt Js Home Desc',
}

export default function Home() {
  return (
    <>
      <p>Makan</p>
      <Button />
    </>
  )
}
