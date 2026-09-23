import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

/**
 * A demo gate, not security. The password ships in the client bundle by design: this app
 * exists to show the screens, and the sign-in is part of that story rather than real
 * access control. Say so; never imply otherwise.
 */
const DEMO_PASSWORD = 'qurl-demo'
const STORAGE_KEY = 'qurl.session'

const AuthContext = createContext(null)

function readSession() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(readSession)

  const signIn = useCallback((email, password) => {
    const trimmed = email.trim()
    if (!trimmed) return { ok: false, reason: 'Enter your email address to continue.' }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return { ok: false, reason: 'That is not an email address. Use the form name@example.com.' }
    }
    if (password !== DEMO_PASSWORD) {
      return { ok: false, reason: 'That password is not the demo password. Nothing has been changed.' }
    }
    const next = { email: trimmed }
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // An unavailable sessionStorage costs the reload, not the sign-in.
    }
    setSession(next)
    return { ok: true }
  }, [])

  const signOut = useCallback(() => {
    try {
      sessionStorage.removeItem(STORAGE_KEY)
    } catch {
      // Nothing to clean up.
    }
    setSession(null)
  }, [])

  const value = useMemo(() => ({ session, signIn, signOut }), [session, signIn, signOut])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}

/** Sends a signed-out visitor to the sign-in screen, remembering where they were headed. */
export function RequireAuth({ children }) {
  const { session } = useAuth()
  const location = useLocation()
  if (!session) return <Navigate to="/login" state={{ from: location }} replace />
  return children
}
