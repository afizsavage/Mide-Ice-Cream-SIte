import React from "react"
import { Link } from "gatsby"
import { Form, FormControl, Button } from "react-bootstrap"
import { ImSearch } from "react-icons/im"

function myFunction(e) {
  e.preventDefault()
  document.getElementById("mySearchdown").classList.toggle("show")
}

/*window.onclick = function (event) {
  if (!event.target.matches(".searchbtn")) {
    var dropdowns = document.getElementsByClassName("searchdown-content")
    var i
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show")
      }
    }
  }
}*/

const CustomSearchbar = () => {
  return (
    <div className="searchdown">
      <Link
        to="#"
        onClick={myFunction}
        className="text-decoration-none searchbtn"
      >
        <ImSearch size={22} />
      </Link>
      <div id="mySearchdown" className="search-content col-md-1">
        <Form inline onSubmit={e => e.preventDefault()}>
          <Form.Group className="col-md-7 p-0 mr-2 col-md-7">
            <FormControl
              id="search-input"
              type="text"
              placeholder="Fake Search"
              className="ml-2 mr-2"
            />
          </Form.Group>
          <Button type="submit" className="btn btn-default bg-white">
            <small>SEARCH</small>
            <ImSearch size={14} />
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default CustomSearchbar
