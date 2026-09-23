import { Icon } from './Icon.jsx'
import { useLocation, useNavigate } from 'react-router-dom'

/** Routes that are already a way out, or are the destination itself. */
const HIDDEN_ON = new Set(['/', '/login'])

/**
 * The floating way back to the menu. A page is a place you land in and need to leave, so
 * it earns a control you can see.
 */
export function BackToMenu() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  if (HIDDEN_ON.has(pathname)) return null
  return (
    <div className="lite-back">
      <button
        className="ss-btn ss-btn--outline"
        onClick={() => navigate('/')}
        aria-label="To the main menu"
      >
        <Icon name="house" />
        <span className="label">To the Main Menu</span>
      </button>
    </div>
  )
}
