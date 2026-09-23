import logo from '../assets/logo.svg'
import logoWhite from '../assets/logo-white.svg'

/** Both marks, one shown - the mode lives on <html>, which the pages' own switch toggles. */
export function Logo() {
  return (
    <>
      <img className="lite-logo-light" src={logo} alt="" />
      <img className="lite-logo-dark" src={logoWhite} alt="" />
    </>
  )
}
