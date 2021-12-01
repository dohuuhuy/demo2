import '@assets/styles/app.less'
import { OnTop } from '@components/atoms/OnTop'
import SEO from '@components/SEO/next-seo.config'
import Loading from '@src/components/atoms/Loading'
import DefaultLayout from '@src/components/templates/Default'
import { wrapper } from '@src/store/rootStore'
import 'antd/dist/antd.css'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import React, { Fragment } from 'react'
import { Provider, useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const MyApp = ({ Component, pageProps }: any) => {
  const store: any = useStore()
  const router = useRouter()
  const Layout = Component?.layout || DefaultLayout || Fragment

  const [loading, setloading] = React.useState<boolean>(false)
  React.useEffect(() => {
    const handleStart = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setloading(true)
    }
    const handleComplete = () => {
      setloading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])

  const components = (
    <Layout>
      <DefaultSeo {...SEO} />
      <NextNProgress color='#00b5f1' height={1} />
      {loading ? <Loading component /> : <Component {...pageProps} />}
      <OnTop />
    </Layout>
  )

  const isServer =
    typeof window !== 'undefined' ? (
      <Provider store={store}>
        <PersistGate persistor={store.persistor} loading={null}>
          {components}
        </PersistGate>
      </Provider>
    ) : (
      components
    )

  return isServer
}

export default wrapper.withRedux(MyApp)
