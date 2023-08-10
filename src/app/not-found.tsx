import { FC } from 'react'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NextJS | Page not found',
  description: 'page Not Found Desc',
}

const PageNotFound: FC = () => {
  return (
    <section>
      <p>404</p>
      <Link href="/">Back to home</Link>
    </section>
  )
}

export default PageNotFound
