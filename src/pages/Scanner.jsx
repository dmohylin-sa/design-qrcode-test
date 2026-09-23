/* Generated from Scanner Prototype.dc.html by scripts/dc-to-jsx.py - do not hand-edit.
 * The markup is the prototype's, converted to JSX. The logic block below is the
 * prototype's own, carried across verbatim apart from the import, the class
 * header and the landing view. Re-run the script to regenerate. */

import React from 'react'
import { I } from '../dc.jsx'
import './../styles/scanner.css'

export default class Scanner extends React.Component {
  constructor(props){ super(props); this.state = { st:'links' };
  }
  componentDidMount(){
    if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const P=[[0,0],[-34,-26],[27,34],[-45,19],[36,-38],[-19,45],[47,22],[-32,36]]; let gi=0;
      this.__grain=setInterval(()=>{ gi=(gi+1)%P.length;
        document.querySelectorAll('.grainfx').forEach(el=>{ el.style.backgroundPosition=P[gi][0]+'px '+P[gi][1]+'px'; });
      }, 112);
    }
  }
  componentWillUnmount(){ if(this.__grain) clearInterval(this.__grain); }
  toast(text){ const t=document.createElement('div'); t.className='ss-toast'; t.style.cssText='position:fixed;right:24px;bottom:76px;z-index:1200'; t.textContent=text; document.body.appendChild(t); setTimeout(()=>t.remove(), 3000); }
  renderVals(){ const s=this.state;
    return {
      onLinks:s.st==='links', onPdf:s.st==='pdf', onPaused:s.st==='paused', onQuar:s.st==='quar', onGone:s.st==='gone',
      stLinks:s.st==='links'?'on':'', stPdf:s.st==='pdf'?'on':'', stPaused:s.st==='paused'?'on':'', stQuar:s.st==='quar'?'on':'', stGone:s.st==='gone'?'on':'',
      pickLinks:()=>this.setState({st:'links'}), pickPdf:()=>this.setState({st:'pdf'}),
      pickPaused:()=>this.setState({st:'paused'}), pickQuar:()=>this.setState({st:'quar'}), pickGone:()=>this.setState({st:'gone'}),
      openDest:()=>this.toast('302 to the destination - the redirect itself has no UI (edge path, p95 under 50 ms).'),
    };
  }

  render() {
    const v = this.renderVals()
    return (
      <div className="dcpage-scanner">
        <div className="app g-codes">
          <div className="grainfx" aria-hidden="true"/>{' '}
          <div className="scanwrap">
            {v.onLinks ? (<>
              <div className="scard" data-component="HostedLinkPage">
                <div className="shead">
                  <h1>Bright Cafe</h1>{' '}
                  <p>Scan complete - pick where to go. This hosted page carries only what the code owner supplied.</p>
                </div>{' '}
                <button className="slink" onClick={v.openDest}>
                  <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                    <path d="M7 2v20"/>
                    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                  </svg>Today's menu</button>{' '}
                <button className="slink" onClick={v.openDest}>
                  <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M11 21a9 9 0 1 1 9-9"/>
                    <path d="M11 3v9l4.5 4.5"/>
                  </svg>Tonight's specials</button>{' '}
                <button className="slink" onClick={v.openDest}>
                  <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 20h.01"/>
                    <path d="M2 8.82a15 15 0 0 1 20 0"/>
                    <path d="M5 12.859a10 10 0 0 1 14 0"/>
                    <path d="M8.5 16.429a5 5 0 0 1 7 0"/>
                  </svg>Guest Wi-Fi</button>
              </div>
            </>) : null}{' '}
            {v.onPdf ? (<>
              <div className="scard" data-component="HostedPdfPage">
                <div className="shead">
                  <h1>Autumn menu</h1>
                  <p>Hosted document - responsive on every phone, threat-scanned before going live.</p>
                </div>{' '}
                <div className="sdoc">
                  <div className="sdoc-h">
                    <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                    </svg>autumn-menu.pdf<span className="mut" style={{marginLeft: 'auto', font: '400 11px/1.2 var(--font-sans)'}}>2 pages</span>
                  </div>{' '}
                  <div className="sdoc-b">
                    <span className="sline" style={{width: '62%'}}/>
                    <span className="sline" style={{width: '88%'}}/>
                    <span className="sline" style={{width: '74%'}}/>
                    <span className="sline" style={{width: '81%'}}/>
                    <span className="sline" style={{width: '56%'}}/>
                    <span className="sline" style={{width: '84%'}}/>
                    <span className="sline" style={{width: '70%'}}/>
                  </div>
                </div>{' '}
                <button className="ss-btn ss-btn--outline" data-component="Button" onClick={v.openDest}>Open full screen</button>
              </div>
            </>) : null}{' '}
            {v.onPaused ? (<>
              <div className="scard" style={{alignItems: 'center', textAlign: 'center'}} data-component="PausedPage">
                <svg className="sbig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="14" y="3" width="5" height="18" rx="1"/>
                  <rect x="5" y="3" width="5" height="18" rx="1"/>
                </svg>{' '}
                <div className="shead">
                  <h1>This code is taking a break</h1>
                  <p>The owner paused it - nothing is wrong with your phone or the print. Check back later or ask the staff.</p>
                </div>
              </div>
            </>) : null}{' '}
            {v.onQuar ? (<>
              <div className="scard" style={{alignItems: 'center', textAlign: 'center'}} data-component="QuarantinePage">
                <svg className="sbig sdanger" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
                  <path d="M12 9v4"/>
                  <path d="M12 17h.01"/>
                </svg>{' '}
                <div className="shead">
                  <h1>Hold on - this link was flagged</h1>
                  <p>Our scans marked the destination as unsafe, so we stopped the redirect to protect you. Do not enter passwords or payment details if you continue elsewhere.</p>
                </div>
              </div>
            </>) : null}{' '}
            {v.onGone ? (<>
              <div className="scard" style={{alignItems: 'center', textAlign: 'center'}} data-component="NotFoundPage">
                <span className="tag" style={{font: '600 10.5px/1 var(--font-sans)', letterSpacing: '1.4px', textTransform: 'uppercase', color: 'var(--muted-foreground)'}}>qurl.to</span>{' '}
                <p style={{font: '700 72px/1 var(--font-sans)', letterSpacing: '-.03em', margin: '0'}}>404</p>{' '}
                <div className="shead">
                  <h1>This link leads nowhere</h1>
                  <p>The code may have been deleted, or the address was mistyped. Nothing to scan here.</p>
                </div>
              </div>
            </>) : null}{' '}
            <span className="sfootnote">Powered by qurl - dynamic QR codes</span>
          </div>{' '}
          <div className="demobar" role="group" aria-label="Demo - code state">
            <span className="lbl">Code state</span>{' '}
            <button className={`segbtn ${v.stLinks ?? ''}`} onClick={v.pickLinks}>Link page</button>{' '}
            <button className={`segbtn ${v.stPdf ?? ''}`} onClick={v.pickPdf}>PDF</button>{' '}
            <button className={`segbtn ${v.stPaused ?? ''}`} onClick={v.pickPaused}>Paused</button>{' '}
            <button className={`segbtn ${v.stQuar ?? ''}`} onClick={v.pickQuar}>Quarantined</button>{' '}
            <button className={`segbtn ${v.stGone ?? ''}`} onClick={v.pickGone}>Not found</button>
          </div>
        </div>
      </div>
    )
  }
}
