/* Generated from Empty States.dc.html by scripts/dc-to-jsx.py - do not hand-edit.
 * The markup is the prototype's, converted to JSX. The logic block below is the
 * prototype's own, carried across verbatim apart from the import, the class
 * header and the landing view. Re-run the script to regenerate. */

import React from 'react'
import './../styles/empty-states.css'

export default function EmptyStates() {
  return (
    <div className="dcpage-empty-states">
        {/* 404 - not found (project-unique full page) */}{' '}
        <section className="board" data-component="EmptyState404">
          <div className="grainfx" aria-hidden="true"/>{' '}
          <span className="tag">qurl.to</span>{' '}
          <p className="big">404</p>{' '}
          <h2>This link leads nowhere</h2>{' '}
          <p>The code may have been deleted, or the address was mistyped. Nothing to scan here.</p>{' '}
          <div className="acts">
            <button className="ss-btn" data-component="Button">Go home</button>
          </div>
        </section>{' '}
        {/* Under development (project-unique full page) */}{' '}
        <section className="board" data-component="EmptyStateWip">
          <div className="grainfx" aria-hidden="true"/>{' '}
          <svg className="bigicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="6" width="20" height="8" rx="1"/>
            <path d="M17 14v7"/>
            <path d="M7 14v7"/>
            <path d="M9 6V3h6v3"/>
            <path d="m2 11 4-5"/>
            <path d="m10 6-8 8"/>
            <path d="m18 6-8 8"/>
            <path d="m22 8.5-5.5 5.5"/>
          </svg>{' '}
          <h2>Under development</h2>{' '}
          <p>This part of qurl ships in a later phase. Everything else is ready to use - your codes keep working meanwhile.</p>{' '}
          <div className="acts">
            <button className="ss-btn" data-component="Button">Go home</button>
          </div>
        </section>{' '}
        {/* In-app empty states already shipped in the Subscriber prototype */}{' '}
        <div className="emlbl">In-app empty states (as shipped in the Subscriber prototype)</div>{' '}
        <div className="inapp">
          <div className="ocard empty" data-component="Empty">
            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '28px', height: '28px', color: 'var(--muted-foreground)'}}>
              <rect width="5" height="5" x="3" y="3" rx="1"/>
              <rect width="5" height="5" x="16" y="3" rx="1"/>
              <rect width="5" height="5" x="3" y="16" rx="1"/>
              <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
              <path d="M21 21v.01"/>
              <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
              <path d="M3 12h.01"/>
              <path d="M12 3h.01"/>
              <path d="M12 16v.01"/>
              <path d="M16 12h1"/>
              <path d="M21 12v.01"/>
              <path d="M12 21v-1"/>
            </svg>{' '}
            <h3>No codes yet</h3>{' '}
            <p>Create your first dynamic QR code - it takes under a minute and stays editable after printing.</p>{' '}
            <button className="ss-btn" data-component="Button">Create</button>
          </div>{' '}
          <div className="ocard empty" data-component="Empty">
            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '28px', height: '28px', color: 'var(--muted-foreground)'}}>
              <path d="m21 21-4.34-4.34"/>
              <circle cx="11" cy="11" r="8"/>
            </svg>{' '}
            <h3>No results</h3>{' '}
            <p>Nothing matches the current search and filters.</p>{' '}
            <button className="ss-btn ss-btn--outline" data-component="Button">Clear filters</button>
          </div>{' '}
          <div className="ocard empty" data-component="Empty">
            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '28px', height: '28px', color: 'var(--muted-foreground)'}}>
              <path d="M10.268 21a2 2 0 0 0 3.464 0"/>
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>
            </svg>{' '}
            <h3>You're all caught up</h3>{' '}
            <p>Nothing needs your attention. Payment and plan alerts land here the moment they happen.</p>
          </div>{' '}
          <div className="ocard empty" data-component="Empty">
            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '28px', height: '28px', color: 'var(--muted-foreground)'}}>
              <path d="M12 15V3"/>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <path d="m7 10 5 5 5-5"/>
            </svg>{' '}
            <h3>No exports yet</h3>{' '}
            <p>Files you export - PNG, PDF or SVG - appear here so you can re-download them any time.</p>{' '}
            <button className="ss-btn ss-btn--outline" data-component="Button">Export this code</button>
          </div>
        </div>
      </div>
  )
}
