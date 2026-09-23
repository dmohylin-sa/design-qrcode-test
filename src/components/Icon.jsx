/**
 * The prototypes draw every icon as an inline stroke SVG rather than from an icon font, so
 * the app's own chrome does the same. Paths are the ones the pages already use.
 */
const PATHS = {
  house: ['M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', 'M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'],
  'arrow-left': ['m12 19-7-7 7-7', 'M19 12H5'],
  'chevron-right': ['m9 18 6-6-6-6'],
}

export function Icon({ name, size = 16 }) {
  return (
    <svg
      className="lite-ico"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name].map((d) => <path key={d} d={d} />)}
    </svg>
  )
}
