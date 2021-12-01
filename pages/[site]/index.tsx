import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import { SEOHead } from '@components/SEO/SEOHead/Index'
import BannersPublic from '@src/components/organisms/BannersPublic'
const DefaultLayout = dynamic(() => import('@templates/Default'))
import { urlContent, urlSEOPage } from '@utils/contants'
import { fetcher } from '@utils/func'
import { find } from 'lodash'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Site = ({ data, meta }: any) => {
  const router = useRouter()
  const findMeta = find(meta, { key: router.asPath.replace('/', '') })

  useEffect(() => {
    if (router.asPath.includes('phong-mach')) {
      window.open('https://medpro.vn/clinic', '_blank')
    }
  }, [router.asPath])

  if (!data) return null
  return (
    <>
      <SEOHead meta={findMeta} />
      <BannersPublic />
      <HandlerGetContentPage dataContent={data} />
    </>
  )
}

Site.layout = DefaultLayout

export default Site

export const getServerSideProps = async () => {
  const data = await fetcher(urlContent)
  const meta = await fetcher(urlSEOPage)

  return { props: { data, meta } }
}