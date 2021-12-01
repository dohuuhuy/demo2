import HomeLayout from '@components/templates/Home'
import React from 'react'

const HomePage = ({ data }: any) => {
  return (
    <HomeLayout>
      <button className='btn btn-primary m-3'>KindaCode.com</button>
      <button className='btn btn-warning m-3'>Hello</button>

      {data}
    </HomeLayout>
  )
}

export default HomePage
