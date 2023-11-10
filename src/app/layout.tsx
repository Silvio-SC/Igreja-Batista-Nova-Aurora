import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'
import './globals.css'
import './fontStyles.css'
import { Header } from '@/components/hearder'
import { Footer } from '@/components/footer'

const roboto = Roboto_Slab({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900']})

export const metadata: Metadata = {
  title: 'Igreja Batista Nova Aurora',
  description: 'Igreja Batista Nova Aurora',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
