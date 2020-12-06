import React from "react"

const Matterport = ({ url }) => {
  return (
    <div className="videoWrapper mb-6">
      <iframe
        title="matterport"
        width="1920"
        height="1080"
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
