import { HashRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { AuthProvider, RequireAuth } from './lib/auth.jsx'
import { Icon } from './components/Icon.jsx'
import { BackToMenu } from './components/BackToMenu.jsx'
import { Login } from './pages/login.jsx'
import { Hub } from './pages/hub.jsx'
import { PAGES } from './pages/registry.js'

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="lite-entry">
      <div className="lite-col">
        <div className="lite-refusal" role="alert">
          <p className="big">404</p>
          <h2>This page does not exist</h2>
          <p>The address may have been mistyped. Nothing else has changed.</p>
          <button className="ss-btn" onClick={() => navigate('/')}>
            <Icon name="house" /> Go home
          </button>
        </div>
      </div>
    </div>
  )
}

function Shell() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RequireAuth><Hub /></RequireAuth>} />
        {PAGES.map(({ slug, component: Page }) => (
          <Route
            key={slug}
            path={`/${slug}`}
            /* Keyed by slug: each page owns its own state, so moving between them starts
               the new one fresh instead of inheriting the previous one's. */
            element={<RequireAuth><Page key={slug} /></RequireAuth>}
          />
        ))}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToMenu />
    </>
  )
}

/**
 * HashRouter on purpose: routes live after the `#`, so none of them ever reaches the
 * server and the build works on a static host at any depth (see vite.config.js `base`).
 */
export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Shell />
      </HashRouter>
    </AuthProvider>
  )
}
