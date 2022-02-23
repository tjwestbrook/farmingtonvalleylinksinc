import { Header } from './header'
import { Navbar } from './navbar'
import { Footer } from './footer'
import { ReactElement } from 'react'
export default function Layout ({ children }: {children:ReactElement}): JSX.Element {
  return (
    <>
      <Header />
      <Navbar />
      <div className='container'>
        <main className='main'>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}