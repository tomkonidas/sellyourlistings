import React, { useContext } from "react"
import Context from "../store/context"

const BuildTypeToggle = () => {
  const { state, dispatch } = useContext(Context)
  return (
    <div>
      <span className="mt-2 relative z-0 inline-flex shadow-sm rounded-md">
        <button
          onClick={() => dispatch({ type: "TOGGLE_BUILD_TYPE" })}
          type="button"
          className={`relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-blue-300 focus:ring-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 ${
            state.buildType === "condo"
              ? "bg-brand text-gray-100 hover:text-white"
              : "text-gray-700 hover:text-gray-500"
          }`}
        >
          Condo
        </button>
        <button
          onClick={() => dispatch({ type: "TOGGLE_BUILD_TYPE" })}
          type="button"
          className={`-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-blue-300 focus:ring-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 ${
            state.buildType === "house"
              ? "bg-brand text-gray-100 hover:text-white"
              : "text-gray-700 hover:text-gray-500"
          }`}
        >
          House
        </button>
      </span>
    </div>
  )
}

export default BuildTypeToggle
