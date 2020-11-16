import React from "react"
import Flag from "react-world-flags"

const CountrySelector = () => {
  return (
    <nav id="select-country">
      <a href="#" title="Select a Country (Sierra Leone)">
        <Flag code="sl" width="25" height="auto" />
        <i className="ddarrow"></i>
      </a>
    </nav>
  )
}

export default CountrySelector
