import React from 'react'

/* The interpolation the prototype runtime emits.

   `{{ x }}` in a text position renders as <span class="sc-interp">, and the page CSS
   leans on it - `.chip .sc-interp{...text-overflow:ellipsis}` is why a long chip label
   truncates instead of overflowing. Rendering a bare value would silently break that.

   null, undefined and booleans render nothing; elements and arrays pass through. */
export function I({ v }) {
  if (v === null || v === undefined || typeof v === 'boolean') return null
  if (React.isValidElement(v) || Array.isArray(v)) return <>{v}</>
  return <span className="sc-interp">{String(v)}</span>
}
