import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo.jsx'
import { Icon } from '../components/Icon.jsx'
import { useAuth } from '../lib/auth.jsx'
import { PAGES } from './registry.js'

const PRODUCT = 'qurl'
const TAGLINE = 'Print once. Re-point forever.'

export function Hub() {
  const navigate = useNavigate()
  const { session, signOut } = useAuth()

  return (
    <div className="lite-entry">
      <div className="lite-col">
        <div className="lite-brand">
          <Logo />
          <div className="word">{PRODUCT}</div>
          <div className="tag">{TAGLINE}</div>
        </div>

        <div className="lite-stack" aria-label="Screens">
          {PAGES.map((p) => (
            <button
              className="lite-card"
              key={p.slug}
              onClick={() => navigate(`/${p.slug}`)}
              aria-label={`Open ${p.title}`}
            >
              <span className="av">{p.initials}</span>
              <span className="txt">
                <b>{p.title}</b>
                <span>{p.line}</span>
              </span>
              <Icon name="chevron-right" />
            </button>
          ))}
        </div>

        <div className="lite-note">
          Signed in as {session?.email}.{' '}
          <button className="lite-link" onClick={signOut}>Sign out</button>
        </div>
      </div>
    </div>
  )
}
