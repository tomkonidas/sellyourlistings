import { useReducer } from "react"
import { storage } from "local-storage-fallback"

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_BUILD_TYPE":
      storage.setItem(
        "buildType",
        state.buildType === "condo" ? "house" : "condo"
      )
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
    buildType: storage.getItem("buildType")
      ? storage.getItem("buildType")
      : "condo",
  })

  return { state, dispatch }
}

export default useGlobalState
