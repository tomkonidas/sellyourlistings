import React from "react"

const PropertyImage = ({ url }) => {
  const parseImgUrl = url => {
    const new_url = url.split("/")
    new_url.splice(6, 0, "c_fit,h_300,w_400")
    return new_url.join("/")
  }

  return (
    <img src={parseImgUrl(url)} width="400" height="300" alt={`showcase`} />
  )
}

export default PropertyImage
