import "./NavBar.css"
import  Link  from 'next/link'
import logo from "./assets/logo.jpeg"

const NavBar =() => {
  const options = ["Home", "Electrolysis", "Services", "About Me", "Client History and Consent Form", "Before/After Care"]
  return (
    <nav>
      <img src={logo} alt="logo" />
      <datalist className="navBarOptions">
        {options.map((option, index) => {
          if (index=== 0) {
            return (
              <Link 
              className="navLinks"
              href={`/`}
              key={index}
              >
                <option key={index} value={option}>{option}</option> 
              </Link>
            )
          } else {
            return (
              <Link 
              className="navLinks"
              href={`/${option}`}
              key={index}
              >
                <option key={index} value={option}>{option}</option> 
              </Link>
            )
          }
        })}
      </datalist>
      {/* <h2>Drew Electrolysis Site</h2> */}
    </nav>
  )
}

export default NavBar