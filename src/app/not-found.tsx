import { FC } from 'react'
import type { Metadata } from 'next'

import NotFound from './404'

export const metadata: Metadata = {
  title: 'NextJS | Page not found',
  description: 'page Not Found Desc',
}

const PageNotFound: FC = () => {
  return (
    <>
      <NotFound />
    </>
  )
}

export default PageNotFound
