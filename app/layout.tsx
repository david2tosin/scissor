import Nav from './components/Nav'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className='max-w-[1440] mx-auto relative z-10 flex flex-col items-center justify-center px-4 sm:px-8'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
