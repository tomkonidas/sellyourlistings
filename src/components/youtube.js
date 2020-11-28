import React from "react"

const Youtube = ({ url }) => {
  return (
    <div className="flex flex-column w-100 h-100">
      <iframe
        title="youtube"
        width="auto"
        height="auto"
        src={url}
        frameBorder="0"
        className="flex-grow"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Youtube
