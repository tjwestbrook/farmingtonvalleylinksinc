import { Header } from './header'
import { Navbar } from './navbar'
import { Footer } from './footer'
import { ReactElement } from 'react'
export default function Layout ({ children }: {children:ReactElement}): JSX.Element {
  return <>
    <Header />
    <div className='container'>
      <Navbar />
      <main className='main'>
        {children}
      </main>
      <Footer />
    </div>
  </>
}