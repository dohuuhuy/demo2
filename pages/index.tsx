import HomeLayout from '@templates/Home'
import React from 'react'
import { HomeCtl } from 'src/containers/home'

const HomePage = ({}: any) => {
  return <>hello home</>
}

HomePage.layout = HomeLayout

export default HomePage

export const getServerSideProps = async (ctx: any) => {
  const data = await HomeCtl(ctx)
  return { props: { data } }
}
