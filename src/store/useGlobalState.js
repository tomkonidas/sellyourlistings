import { useReducer } from "react"
import { getTotal } from "../utils/services"

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_BUILD_TYPE":
      const buildType = state.buildType === "condo" ? "house" : "condo"
      return {
        ...state,
        buildType,
        total: getTotal(state.service_codes, buildType),
      }
    case "TOGGLE_SERVICE":
      const service_codes = state.service_codes.includes(action.service_code)
        ? state.service_codes.filter(
            service_code => service_code !== action.service_code
          )
        : state.service_codes.concat(action.service_code)
      const total = getTotal(service_codes, state.buildType)
      return {
        ...state,
        service_codes,
        total,
      }
    case "CHANGE_SERVICE_MULTIPLE":
      const newServiceCodes = state.service_codes
        .filter(service_code => service_code !== action.service_code)
        .concat(Array(action.amount).fill(action.service_code))
      const newTotal = getTotal(newServiceCodes, state.buildType)

      return {
        ...state,
        service_codes: newServiceCodes,
        total: newTotal,
      }
    default: {
      return state
    }
  }
}

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, {
    buildType: "condo",
    total: 0.0,
    service_codes: [],
  })

  return { state, dispatch }
}

export default useGlobalState
