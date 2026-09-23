/**
 * One entry per prototype page. The router and the menu both read this, so adding a page
 * later means transpiling it and adding one line here.
 *
 * `dc-to-jsx.py` prints these lines at the end of a run - paste them in, then fill in
 * `title` and `line`. The lines come from the prototype folder's own README.
 */
import Subscriber from './Subscriber.jsx'
import Admin from './Admin.jsx'
import Visitor from './Visitor.jsx'
import Scanner from './Scanner.jsx'
import EmptyStates from './EmptyStates.jsx'

export const PAGES = [
  { slug: 'subscriber', title: 'Subscriber', line: 'The primary role - create, manage and track your codes.', initials: 'SU', component: Subscriber },
  { slug: 'admin', title: 'Admin', line: 'The admin console.', initials: 'AD', component: Admin },
  { slug: 'visitor', title: 'Visitor', line: 'The marketing site.', initials: 'VI', component: Visitor },
  { slug: 'scanner', title: 'Scanner', line: 'Scan-time surfaces.', initials: 'SC', component: Scanner },
  { slug: 'empty-states', title: 'Empty States', line: 'All designed empties, plus the 404 and under-development pages.', initials: 'ES', component: EmptyStates },
]

export const pageBySlug = (slug) => PAGES.find((p) => p.slug === slug)
