import About from '@src/components/organisms/About'
import Banners from '@src/components/organisms/Banners'
import FeedBack from '@src/components/organisms/FeedBack'
import HomeLayout from '@templates/Home'
import React from 'react'

const HomePage = ({}: any) => {
  return (
    <>
      <Banners />
      <About />
      <FeedBack />
    </>
  )
}

HomePage.layout = HomeLayout

export default HomePage
