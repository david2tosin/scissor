import Footer from './components/Footer'
import Nav from './components/Nav'
import './globals.css'
import { gilroy } from './styles/fonts'

export const metadata = {
  title: 'Scissor',
  description: 'URL shortner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gilroy.className}>
        <main className='relative min-h-screen '>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
