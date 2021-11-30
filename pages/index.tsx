import HomeLayout from '@components/templates/Home'
import React from 'react'

const HomePage = ({ data }: any) => {
  return (
    <HomeLayout>
      hello
      {data}
    </HomeLayout>
  )
}

export default HomePage
