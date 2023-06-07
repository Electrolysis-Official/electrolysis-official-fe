import "./NavBar.css"
import Link  from 'next/link'
import logo from "./assets/logo.jpeg"
import Image from "next/image"

const NavBar =() => {
  const options = ["Home", "Electrolysis", "Services", "AboutMe", "ClientHistoryandConsentForm", "Before/AfterCare"]
  return (
    <nav>
      <Image src={logo} alt="logo" width={500} height={500}/>
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
          } else if(option === "AboutMe") {
            return (
              <Link 
              className="navLinks"
              href={`/${option}`}
              key={index}
              >
                <option key={index} value={option}>About Me</option> 
              </Link>
            )
          } else if(option === "ClientHistoryandConsentForm") {
            return (
              <Link 
              className="navLinks"
              href={`/${option}`}
              key={index}
              >
                <option key={index} value={option}>Client History and Consent Form</option> 
              </Link>
            )
          } else if(option === "Before/AfterCare") {
            return (
              <Link 
              className="navLinks"
              href={`/${option}`}
              key={index}
              >
                <option key={index} value={option}>Before/After Care</option> 
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
    </nav>
  )
}

export default NavBar