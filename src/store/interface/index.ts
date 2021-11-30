// demo
export * from '@store/componentStore/demo/interface/action'
export * from '@store/componentStore/demo/interface/types'
export * from '@store/componentStore/demo/interface/initialState'
export * from '@store/componentStore/demo/interface/params'

// user
export * from '@store/componentStore/user/interface/action'
export * from '@store/componentStore/user/interface/types'
export * from '@store/componentStore/user/interface/initialState'
export * from '@store/componentStore/user/interface/params'
// hospital
export * from '@store/componentStore/hospital/interface/action'
export * from '@store/componentStore/hospital/interface/types'
export * from '@store/componentStore/hospital/interface/initialState'
export * from '@store/componentStore/hospital/interface/params'
// news
export * from '@store/componentStore/news/interface/action'
export * from '@store/componentStore/news/interface/types'
export * from '@store/componentStore/news/interface/initialState'
export * from '@store/componentStore/news/interface/params'
// totalData
export * from '@store/componentStore/totalData/interface/action'
export * from '@store/componentStore/totalData/interface/types'
export * from '@store/componentStore/totalData/interface/initialState'
export * from '@store/componentStore/totalData/interface/params'

import {
  HospitalState,
  NewsState,
  TotalDataState,
  UserState
} from '@store/interface'
import { combinedReducers } from '@store/rootReducer'

export interface AppState {
  [T: string]: any
  total: TotalDataState
  hospital: HospitalState
  newsReducer: NewsState
  user: UserState
}

export type AppStates = ReturnType<typeof combinedReducers>
