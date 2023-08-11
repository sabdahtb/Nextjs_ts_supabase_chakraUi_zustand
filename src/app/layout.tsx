import { Inter } from 'next/font/google'

import { Providers } from './provider'
import Navbar from '~/components/navbar'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
