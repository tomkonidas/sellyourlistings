import React from "react"

const PropertyImage = ({ url, alt }) => {
  const parseImgUrl = url => {
    const new_url = url.split("/")
    new_url.splice(4, 0, "f_auto,q_auto,dpr_auto,c_fit,h_300,w_400")
    return new_url.join("/")
  }

  return (
    <img
      className="rounded col-span-1"
      src={parseImgUrl(url)}
      width="400"
      height="300"
      alt={alt}
    />
  )
}

export default PropertyImage
