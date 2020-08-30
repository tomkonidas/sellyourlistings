import { useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_BUILD_TYPE":
      return {
        ...state,
        buildType: state.buildType === "condo" ? "house" : "condo",
      }
    default: {
      return state
    }
  }
}

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, {
    buildType: "condo",
  })

  return { state, dispatch }
}

export default useGlobalState
