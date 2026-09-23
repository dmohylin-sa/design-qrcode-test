import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* The prototype's own stylesheet chain, copied across and imported once. Order matters -
   it is the order the prototypes' styles.css uses, and its own trailing rules come last. */
import './styles/vendor/fonts.css'
import './styles/vendor/colors.css'
import './styles/vendor/typography.css'
import './styles/vendor/layout.css'
import './styles/vendor/base.css'
import './styles/vendor/components.css'
import './styles/vendor/styles-tail.css'  // the rules styles.css adds after its imports

/* No styles/global.css here: these prototypes draw icons as inline SVG, so the
   transpiler finds no shared icon-set rules to lift. See components/Icon.jsx. */

/* The few rules this app adds for the screens the prototypes do not have.
   Named chrome.css, not app.css: a Vite scaffold ships src/App.css, and on a
   case-insensitive filesystem the two are the same file. */
import './chrome.css'

import './tooltips.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
