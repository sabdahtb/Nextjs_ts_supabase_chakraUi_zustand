import { FC } from 'react'
import type { Metadata } from 'next'

import NotFound from './404'

export const metadata: Metadata = {
  title: '404 | Page not found',
  description: 'Page not Found',
}

const PageNotFound: FC = () => {
  return (
    <>
      <NotFound />
    </>
  )
}

export default PageNotFound
