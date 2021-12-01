import { api } from '@config/api'
import { currentEnv } from '@config/envs/env'
import { LIMIT_PAGE_NEWS } from '@utils/contants'
export const TinTucCtrl = async (ctx: any) => {
  const {
    query: { page = 1 }
  } = ctx

  const listNewsBanner = await getListNewsBanner()
  const listNewsContent = await getListNewsContent({ page })
  const totalPages = await getCountNewsContent()

  return {
    listNewsBanner,
    listNewsContent,
    totalPages
  }
}

const getListNewsBanner = async () => {
  try {
    const url = `${currentEnv.API_CMS}/posts?_sort=updated_at:DESC&_limit=3`
    const rs = await api(url)
    return rs
  } catch (error) {
    console.error(error)
    return null
  }
}

const getCountNewsContent = async () => {
  try {
    const url = `${currentEnv.API_CMS}/posts?&categories.slug=tin-tuc`
    const rs = await api(url)
    return rs.length
  } catch (error) {
    console.error(error)
    return null
  }
}

const getListNewsContent = async ({ page = 1 }) => {
  try {
    const start = +page === 1 ? 0 : (+page - 1) * LIMIT_PAGE_NEWS || 1
    const url = `${currentEnv.API_CMS}/posts?_sort=updated_at:DESC&_start=${start}&_limit=${LIMIT_PAGE_NEWS}`
    const rs = await api(url)
    return rs
  } catch (error) {
    console.error(error)
    return null
  }
}