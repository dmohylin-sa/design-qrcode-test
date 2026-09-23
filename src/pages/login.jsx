import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Logo } from '../components/Logo.jsx'
import { Icon } from '../components/Icon.jsx'
import { useAuth } from '../lib/auth.jsx'

const PRODUCT = 'qurl'
const TAGLINE = 'Print once. Re-point forever.'

export function Login() {
  const { session, signIn } = useAuth()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [refused, setRefused] = useState(null)

  /* Where the guard bounced them from, so signing in resumes the page they asked for. */
  const from = location.state?.from?.pathname ?? '/'

  /* The redirect lives in the render, not in the submit handler: signing in and navigating
     land in the same React batch, and a render-time redirect would otherwise overrule an
     imperative one and send everyone to the menu. */
  if (session) return <Navigate to={from} replace />

  const submit = (e) => {
    e.preventDefault()
    const result = signIn(email, password)
    if (!result.ok) setRefused(result.reason)
  }

  return (
    <div className="lite-entry">
      <div className="lite-col">
        <div className="lite-brand">
          <Logo />
          <div className="word">{PRODUCT}</div>
          <div className="tag">{TAGLINE}</div>
        </div>

        {refused ? (
          <div className="lite-refusal" role="alert">
            <h2>Not signed in</h2>
            <p>{refused}</p>
            <button
              className="ss-btn ss-btn--outline"
              onClick={() => {
                setRefused(null)
                setPassword('')
              }}
            >
              <Icon name="arrow-left" /> Back
            </button>
          </div>
        ) : (
          <form className="lite-stack" onSubmit={submit}>
            <div className="ss-field">
              <label className="ss-label" htmlFor="signin-email">Email</label>
              <input
                id="signin-email"
                className="ss-input"
                type="email"
                autoComplete="username"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="ss-field">
              <label className="ss-label" htmlFor="signin-password">Password</label>
              <input
                id="signin-password"
                className="ss-input"
                type="password"
                autoComplete="current-password"
                placeholder="Your demo password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="ss-btn ss-btn--lg" type="submit">Sign in</button>
            <div className="lite-note">
              A demo on sample data. Nothing here is a real record.
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
