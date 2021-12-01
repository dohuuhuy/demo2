import { HYDRATE } from 'next-redux-wrapper'
import {
  HospitalActions,
  HospitalState,
  HosptailTypes
} from '@store/interface'

const init: HospitalState = {
  partnerId: '',
  listHospital: [],
  bookingTree: [],
  bookingTreeCurrent: [],
  listFeatureByApp: [],
  listFeatureByPartner: [],
  information: {},
  schedule: {},
  steps: []
}

export default function hospital(
  state = init,
  action: HospitalActions | { type: typeof HYDRATE; payload: HospitalState }
) {
  switch (action.type) {
    case HosptailTypes.Information.SET_PARTNERID_HOSPITAL:
      return {
        ...state,
        partnerId: action.partnerId
      }
    case HosptailTypes.Stepper.SAVE_SCHEDULE:
      return {
        ...state,
        schedule: { ...action.schedule }
      }
    case HosptailTypes.Stepper.SAVE_INFO_STEP:
      return {
        ...state,
        steps: action.steps
      }

    case HosptailTypes.BookingTree.BOOKING_TREE_REQUEST_SUCCESS:
      return {
        ...state,
        bookingTree: action.bookingTree
      }

    case HosptailTypes.BookingTree.BOOKING_TREE_CURRENT_NODE_REQUEST_SUCCESS:
      return {
        ...state,
        bookingTreeCurrent: action.bookingTreeCurrent
      }

    case HosptailTypes.Feature.FEATURE_BY_PARTNER_REQUEST_SUCCESS:
      return {
        ...state,
        listFeatureByPartner: action.listFeatureByPartner
      }

    case HosptailTypes.Feature.FEATURE_BY_APP_REQUEST_SUCCESS:
      return {
        ...state,
        listFeatureByApp: action.listFeatureByApp
      }

    case HosptailTypes.ListHospital.LIST_HOSPITAL_REQUEST_SUCCESS:
      return {
        ...state,
        listHospital: action.listHospital
      }

    case HosptailTypes.Header.Header_REQUEST_SUCCESS:
      return {
        ...state,
        information: { ...state.information, header: action.header }
      }

    case HosptailTypes.Banners.Banners_REQUEST_SUCCESS:
      return {
        ...state,
        information: { ...state.information, banners: action.banners }
      }

    case HosptailTypes.Footer.Footer_REQUEST_SUCCESS:
      return {
        ...state,
        information: { ...state.information, footer: action.footer }
      }

    default:
      return state
  }
}