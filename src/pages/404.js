import React from "react"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="min-h-screen h-100 flex flex-col items-center">
      <div className="mt-1/6 flex items-center">
        <h1 className="px-4 cursive text-5xl font-semibold border-brand border-r-4">
          404
        </h1>
        <p className="px-4 text-xl font-medium">
          This page could not be found.
        </p>
      </div>
    </div>
  </>
)

export default NotFoundPage
