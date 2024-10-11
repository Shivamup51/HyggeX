import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Trusted from './components/Trustedby/Trusted'
import Video from './components/Videos/Video'

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Trusted/>
      <Video/>
    </main>
  )
}

export default App
