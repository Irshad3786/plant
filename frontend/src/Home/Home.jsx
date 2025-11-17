import React from 'react'
import Navbar from './Components/Navbar'
import Content from './Components/Content'

function Home() {
  return (
    <>
    <div>
  <div className="relative">
    <img src="./background.jpg" alt="" className="w-full h-auto" />

    <div className="absolute top-0 left-0 w-full">
      <Navbar />
      <Content/>
    </div>
  </div>
</div>
    </>
  )
}

export default Home