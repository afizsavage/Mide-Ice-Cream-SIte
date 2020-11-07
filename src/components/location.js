import React from "react"
import { Link } from "gatsby"
import { ImLocation } from "react-icons/im"

const Location = () => {
  return (
    <div className="location">
      <Link to="/page-2" className="ml-3">
        <ImLocation size={22} />
      </Link>
    </div>
  )
}

export default Location
