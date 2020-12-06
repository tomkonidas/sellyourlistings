import React from "react"

const Youtube = ({ url }) => {
  return (
    <div className="videoWrapper mb-6">
      <iframe
        title="youtube"
        width="1920"
        height="1080"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Youtube
