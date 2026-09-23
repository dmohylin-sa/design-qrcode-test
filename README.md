# qurl

Dynamic QR codes and short links - print once, re-point forever. Every designed screen, clickable, on sample data.

```bash
npm install
npm run dev
```

Sign in with any email address and the demo password **`qurl-demo`**.

> The sign-in is a demo gate, not access control. The password is a constant in the client
> bundle (`src/lib/auth.jsx`) - it keeps the demo tidy, it protects nothing.

## The screens

| Page | What it shows |
|---|---|
| Subscriber | The primary role - create, manage and track your codes. Opens on My codes; its own sign-in is behind Sign out. |
| Admin | The admin console. Opens on the dashboard; its own sign-in is behind Sign out. |
| Visitor | The marketing site. |
| Scanner | Scan-time surfaces. |
| Empty States | All designed empties, plus the 404 and under-development pages. |

The screens open in dark mode, as the designs do. The Dark mode switch in Subscriber or Admin
flips the whole app, and the other screens follow it.

The main menu lists them all. Every page has a floating way back to it.

## How it is built

Each screen is **one generated file**. `src/pages/<Name>.jsx` carries that screen's whole
markup as JSX and that screen's own logic, both taken from the design prototype it came from.
There are no shared components and no view files, by design: this app exists to make the
designs clickable, not to be extended.

```
src/
  pages/<Name>.jsx   one per screen, generated - do not hand-edit
  pages/registry.js  one entry per screen; the router and the menu both read it
  dc.jsx             the text-interpolation helper the prototype runtime uses
  tooltips.js        the prototypes' shared start-up script (opens in dark mode), lifted once
  styles/vendor/     the prototypes' stylesheet chain, copied verbatim
  components/Icon.jsx inline stroke icons for the app's own chrome, as the pages draw them
  styles/<slug>.css  each page's own stylesheet, scoped to that page
  chrome.css         the only hand-written CSS - sign-in, menu, the way back
```

**To change a screen, change the prototype and re-run the transpiler:**

```bash
python3 ~/.claude/skills/geniusee-ui-prototypes-to-react-app-lite/scripts/dc-to-jsx.py \
        .. .
```

Two things not to do to `src/pages/`: do not hand-edit it, and do not run Prettier over it.
The generated whitespace is load-bearing - reflowing across a text run inserts or drops
meaningful single spaces.

The bundle is large because every page carries its own near-identical stylesheet. It gzips
down well and is the right trade for a demo.

## Scripts

```bash
npm run dev      # vite, with HMR
npm run build    # vite build
npm run lint     # oxlint
npm run preview  # serve the production build
```

## Deploying

`.github/workflows/deploy.yml` publishes to GitHub Pages on a push to `main` (set
**Settings → Pages → Source: GitHub Actions** once). Two things make it work under a project
site's `/<repo>/` prefix, and neither should be "fixed": `base: './'` in `vite.config.js`, and
the `HashRouter` - routes live after the `#`, so none of them reaches the server.
