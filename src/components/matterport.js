import React from "react"

const Matterport = ({ url }) => {
  return (
    <div className="flex flex-column w-100 h-100">
      <iframe
        title="matterport"
        width="auto"
        height="auto"
        src={url}
        className="flex-grow"
        frameBorder="0"
        allowFullScreen
        allow="xr-spatial-tracking"
      ></iframe>
    </div>
  )
}

export default Matterport
