/* Generated from Visitor Prototype.dc.html by scripts/dc-to-jsx.py - do not hand-edit.
 * The markup is the prototype's, converted to JSX. The logic block below is the
 * prototype's own, carried across verbatim apart from the import, the class
 * header and the landing view. Re-run the script to regenerate. */

import React from 'react'
import { I } from '../dc.jsx'
import './../styles/visitor.css'

export default class Visitor extends React.Component {
  constructor(props){ super(props); this.state = { view:'landing', wFg:'#131316', per:'monthly', cms:null, intgOpen:null, faq:1, cmsAcc:null, pricingOpen:false, pricingClosing:false, contactOpen:false, contactClosing:false };
  }
  componentDidMount(){
    if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const P=[[0,0],[-34,-26],[27,34],[-45,19],[36,-38],[-19,45],[47,22],[-32,36]]; let gi=0;
      this.__grain=setInterval(()=>{ gi=(gi+1)%P.length;
        document.querySelectorAll('.grainfx').forEach(el=>{ el.style.backgroundPosition=P[gi][0]+'px '+P[gi][1]+'px'; });
      }, 112);
    }
    this.__esc=(e)=>{ if(e.key!=='Escape') return;
      if(this.state.pricingOpen){ this.setState({pricingClosing:true}); setTimeout(()=>this.setState({pricingOpen:false, pricingClosing:false}), 210); return; }
      if(this.state.contactOpen){ this.setState({contactClosing:true}); setTimeout(()=>this.setState({contactOpen:false, contactClosing:false}), 210); } };
    document.addEventListener('keydown', this.__esc);
  }
  componentWillUnmount(){ document.removeEventListener('keydown', this.__esc); if(this.__grain) clearInterval(this.__grain); }
  toast(text){ /* minimal toast reuse */ const t=document.createElement('div'); t.className='ss-toast'; t.style.cssText='position:fixed;right:24px;bottom:24px;z-index:1200'; t.textContent=text; document.body.appendChild(t); setTimeout(()=>t.remove(), 3200); }
  renderVals(){ const s=this.state;
    const CMS={help:{t:'Help'}, faq:{t:'FAQ',b:'Do printed codes break when I change the destination? Never - the printed code stays identical and only the destination changes. Is there a free trial? Yes, 7 days with no card. What happens if I pause a code? Scanners see a friendly unavailable page and nothing is deleted.'},
               legal:{t:'Legal',b:'Terms of service, privacy policy and the data-processing agreement live here as CMS-managed pages. Scan analytics honor GDPR: IP anonymization options, configurable retention and consent where required.'}};
    const FAQD={
      faqGeneral:[
        ['What is a dynamic QR code?','The printed pattern encodes a short qurl.to address. That address resolves to whatever destination you set - so the print never changes, and the destination always can.'],
        ['Do printed codes break when I change the destination?','Never. The printed code stays identical and only the destination it resolves to changes, instantly at the edge.'],
        ['What happens if I pause a code?','Scanners see a friendly unavailable page and nothing is deleted. Resume whenever you like - the print keeps working.'],
      ],
      faqCodes:[
        ['Which export formats do I get?','Print-ready PNG, PDF and SVG on every plan, sized for menus, posters and packaging.'],
        ['Will my styled code still scan?','The style step checks contrast and quiet-zone live while you customize, so anything you can export has passed scannability.'],
        ['Can I put my logo in the code?','Yes - upload it in the style step. The scannability meter re-checks the code with the logo in place.'],
      ],
      faqBilling:[
        ['Is there a free trial?','Yes - 7 days with every feature, no card needed. Cancel anytime and keep your exported codes.'],
        ['What does Starter include?','5 dynamic codes, 10k scans a month, all exports, hosted pages and scan analytics.'],
        ['What if a payment fails?','We retry automatically for 14 days and your codes keep working the whole time.'],
      ],
      faqPrivacy:[
        ['What do you store about scanners?','Scan time, device class and coarse location for analytics. IP anonymization options and configurable retention are built in.'],
        ['Are destinations checked?','Every destination is threat-scanned before going live and re-scanned when you change it.'],
        ['Is qurl GDPR-aligned?','Yes - anonymization, retention controls and consent where required. The data-processing agreement is on the legal page.'],
      ],
      legalTerms:[
        ['The agreement','The terms govern every qurl account: what the service promises, acceptable use, and how accounts close. Updated with 30 days notice.'],
        ['Acceptable use','Codes must not lead to malware, phishing or deceptive destinations. Threat scanning enforces this automatically - flagged codes are quarantined.'],
        ['Service levels','Redirects are served at the edge with a 99.9% availability target; hosted pages carry the same target.'],
      ],
      legalPrivacy:[
        ['What we collect','Account details, billing records and scan analytics. We never sell data and never use scan data for advertising.'],
        ['Retention','Scan analytics keep the retention you configure; closed-account data is deleted within 30 days.'],
      ],
      legalDpa:[
        ['Who needs it','Customers processing EU personal data through scan analytics. The DPA incorporates the standard contractual clauses.'],
        ['Sub-processors','Edge hosting and payment providers, listed with their roles - notice goes out before any change.'],
      ],
      helpStart:[
        ['Create your first code','Pick a content type, paste the destination, style it with your brand and watch the scannability meter stay green.'],
        ['Print it right','Export PNG for screens, PDF or SVG for print. Keep the quiet zone - the meter warns if styling risks it.'],
        ['Host a menu or link page','Choose the PDF or link-page type and we host it - responsive, threat-scanned, no website needed.'],
      ],
      helpManage:[
        ['Re-point a code','Open the code, paste the new destination, save. The print never changes; the redirect switches in under a minute.'],
        ['Pause and resume','Paused codes show scanners a friendly unavailable page. Nothing is deleted and resume is one click.'],
        ['Organize with folders','Group codes by venue or campaign and move them in bulk from the list view.'],
      ],
      helpBilling:[
        ['Change your plan','Billing shows both plans - switching applies immediately and the invoice prorates.'],
        ['Download invoices','Every charge has a PDF invoice with your market\'s tax treatment on it.'],
        ['Fix a failed payment','Update the card in Billing; we retry automatically for 14 days and codes keep working.'],
      ],
      legalRefund:[
        ['Refunds','Charges refund at the processor with a credit document against the original invoice. Contact reaches a person within one business day.'],
        ['Trials','Trials never charge - no card is taken, so there is nothing to refund.'],
      ],
      legalCookies:[
        ['On this site','Only what sign-in and language choice need. Analytics cookies are off until you opt in.'],
        ['On hosted pages','None - your guests get the page with no trackers from us.'],
      ],
    };
    const accList=(key)=>FAQD[key].map((it,ix)=>{ const id=key+'-'+ix; const open=s.cmsAcc===id;
      return {q:it[0], a:it[1], open, cls:open?'open':'', aria:open?'true':'false',
              toggle:()=>this.setState({cmsAcc:this.state.cmsAcc===id?null:id})}; });
    return {
      cmsCls:'', onLanding:s.view==='landing', onCms:s.view==='cms',
      viewFaq:s.view==='cms'&&s.cms==='faq', viewLegal:s.view==='cms'&&s.cms==='legal',
      viewHelp:s.view==='cms'&&s.cms==='help',
      onTpl:s.view==='templates', onInd:s.view==='industry', navTpl:s.view==='templates'?'on':'',
      goTpl:()=>this.setState({view:'templates'}),
      cmsHelp:()=>this.setState({view:'cms', cms:'help'}),
      tplRows:[
        {name:'Restaurant menu', desc:'A table-tent code pointing at a hosted PDF menu - with its own industry landing page.', ind:true},
        {name:'Retail promo', desc:'A shelf or window code pointing at this week\'s offer page.'},
        {name:'Event poster', desc:'Posters go up early - decide the destination the morning of.'},
        {name:'Business card', desc:'A vCard code that always has your current details.'},
        {name:'Guest Wi-Fi', desc:'One scan joins the network - no password reading over the counter.'},
        {name:'Link in bio', desc:'A hosted link page for everything you do, one code on everything you print.'},
      ].map(t=>({...t, open:()=>{ if(t.ind){ this.setState({view:'industry'}); } else { this.toast('Opens the generator with the '+t.name+' preset - sign up to continue.'); } }})),
      helpStart:accList('helpStart'), helpManage:accList('helpManage'), helpBilling:accList('helpBilling'),
      legalRefund:accList('legalRefund'),
      faqGeneral:accList('faqGeneral'), faqCodes:accList('faqCodes'), faqBilling:accList('faqBilling'), faqPrivacy:accList('faqPrivacy'),
      legalTerms:accList('legalTerms'), legalPrivacy:accList('legalPrivacy'), legalDpa:accList('legalDpa'), legalCookies:accList('legalCookies'),
      navHow:s.view==='landing'?'on':'',
      goLanding:()=>this.setState({view:'landing'}),
      goHow:()=>{ this.setState({view:'landing'}); setTimeout(()=>{ const h=document.getElementById('how'); if(h) h.scrollIntoView({behavior:'smooth'}); }, 60); },
      goFaq:()=>{ this.setState({view:'landing'}); setTimeout(()=>{ const h=document.getElementById('faq'); if(h) h.scrollIntoView({behavior:'smooth'}); }, 60); },
      faqOpen1:s.faq===1, faqCls1:s.faq===1?'open':'', faqAria1:s.faq===1?'true':'false', faqT1:()=>this.setState({faq:this.state.faq===1?null:1}),
      faqOpen2:s.faq===2, faqCls2:s.faq===2?'open':'', faqAria2:s.faq===2?'true':'false', faqT2:()=>this.setState({faq:this.state.faq===2?null:2}),
      faqOpen3:s.faq===3, faqCls3:s.faq===3?'open':'', faqAria3:s.faq===3?'true':'false', faqT3:()=>this.setState({faq:this.state.faq===3?null:3}),
      faqOpen4:s.faq===4, faqCls4:s.faq===4?'open':'', faqAria4:s.faq===4?'true':'false', faqT4:()=>this.setState({faq:this.state.faq===4?null:4}),
      contactOpen:s.contactOpen, contactClosingCls:s.contactClosing?'closing':'',
      openContact:()=>this.setState({contactOpen:true, contactClosing:false}),
      closeContact:()=>{ this.setState({contactClosing:true}); setTimeout(()=>this.setState({contactOpen:false, contactClosing:false}), 210); },
      pricingOpen:s.pricingOpen, pricingClosingCls:s.pricingClosing?'closing':'',
      openPricing:()=>this.setState({pricingOpen:true, pricingClosing:false}),
      closePricing:()=>{ this.setState({pricingClosing:true}); setTimeout(()=>this.setState({pricingOpen:false, pricingClosing:false}), 210); },
      goSignup:()=>this.toast('The trial signup flow lives in the Subscriber prototype - this page hands over exactly there (chart: End - Subscriber).'),
      signInNote:()=>this.toast('Sign-in is the Subscriber prototype\u2019s first screen.'),
      wFg:s.wFg, wInk:s.wFg==='#131316'?'on':'', wOrange:s.wFg==='#FE6800'?'on':'', wPurple:s.wFg==='#7A2BD9'?'on':'',
      wPickInk:()=>this.setState({wFg:'#131316'}), wPickOrange:()=>this.setState({wFg:'#FE6800'}), wPickPurple:()=>this.setState({wFg:'#7A2BD9'}),
      pStarter: s.per==='yearly' ? '\u20ac90' : '\u20ac9', pAdvanced: s.per==='yearly' ? '\u20ac290' : '\u20ac29',
      perLbl: s.per==='yearly' ? '/yr' : '/mo',
      perMonthly:s.per==='monthly'?'on':'', perYearly:s.per==='yearly'?'on':'',
      pickMonthly:()=>this.setState({per:'monthly'}), pickYearly:()=>this.setState({per:'yearly'}),
      sendContact:()=>{ this.setState({contactClosing:true}); setTimeout(()=>this.setState({contactOpen:false, contactClosing:false}), 210); this.toast('Sent - we reply within one business day.'); },
      cmsTitle:(CMS[s.cms]||{}).t||'', cmsBody:(CMS[s.cms]||{}).b||'',
      cmsFaq:()=>this.setState({view:'cms', cms:'faq'}), cmsLegal:()=>this.setState({view:'cms', cms:'legal'}),
    };
  }

  render() {
    const v = this.renderVals()
    return (
      <div className="dcpage-visitor">
        <div className={`app g-codes ${v.cmsCls ?? ''}`}>
          <div className="grainfx" aria-hidden="true"/>{' '}
          <div className="main">
            <header className="topbar">
              <div className="grainfx grainfx--in" aria-hidden="true"/>{' '}
              <div className="lpnav">
                <span style={{display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer'}} onClick={v.goLanding}>
                  <img className="mark" src="assets/logo-white.svg" alt="" style={{width: '28px', height: '28px'}}/>
                  <span className="word" style={{font: '700 19px/1 var(--font-sans)', letterSpacing: '-.01em'}}>qurl</span>
                </span>{' '}
                <nav className="vnav" aria-label="Site">
                  <button className={`vlink ${v.navHow ?? ''}`} onClick={v.goHow}>How it works</button>{' '}
                  <button className="vlink" onClick={v.openPricing}>Pricing</button>{' '}
                  <button className="vlink" onClick={v.goFaq}>FAQ</button>
                  <button className={`vlink ${v.navTpl ?? ''}`} onClick={v.goTpl}>Templates</button>
                </nav>{' '}
                <div className="tsp"/>{' '}
                <button className="vlink" onClick={v.signInNote}>Sign in</button>{' '}
                <button className="ss-btn" data-component="Button" onClick={v.goSignup}>Start free</button>
              </div>
            </header>{' '}
            <div className="content">
              {v.onLanding ? (<>
                <div className="lpwrap">
                  <section className="vhero" data-component="Hero">
                    <div className="vhero-l">
                      <span className="vebrow">
                        <i/> Dynamic QR platform</span>{' '}
                      <h1>Print once.<br/>Re-point forever.</h1>{' '}
                      <p className="mut vsub">The printed code never changes - where it leads is up to you. Re-point destinations any time, host menus and pages, and watch scans live. No reprints, no dev work.</p>{' '}
                      <div className="vcta">
                        <button className="ss-btn ss-btn--lg" data-component="Button" onClick={v.goSignup}>Start free trial</button>
                        <button className="ss-btn ss-btn--outline ss-btn--lg" data-component="Button" onClick={v.goHow}>See how it works</button>
                      </div>{' '}
                      <p className="vfrict">7-day free trial - no card needed. Cancel anytime.</p>{' '}
                      <div className="vstats">
                        <div>
                          <b>2,400+</b>
                          <span>places that print with qurl</span>
                        </div>{' '}
                        <div>
                          <b>1.2M</b>
                          <span>scans resolved monthly</span>
                        </div>{' '}
                        <div>
                          <b>{'<50ms'}</b>
                          <span>redirect at the edge</span>
                        </div>
                      </div>
                    </div>{' '}
                    <div className="ocard vwidget" data-component="Card">
                      <span className="ctlk" style={{font: '600 11px/1.2 var(--font-sans)', letterSpacing: '1.1px', textTransform: 'uppercase', color: 'var(--muted-foreground)'}}>Try one now</span>{' '}
                      <div className="prevqr" style={{width: '190px', height: '190px', background: '#FFFFFF', color: v.wFg}}>
                        <svg viewBox="0 0 21 21" aria-hidden="true">
                          <path fill="currentColor" d="M0 0h1v1H0zM1 0h1v1H1zM2 0h1v1H2zM3 0h1v1H3zM4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM8 0h1v1H8zM9 0h1v1H9zM11 0h1v1H11zM14 0h1v1H14zM15 0h1v1H15zM16 0h1v1H16zM17 0h1v1H17zM18 0h1v1H18zM19 0h1v1H19zM20 0h1v1H20zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM9 1h1v1H9zM11 1h1v1H11zM12 1h1v1H12zM14 1h1v1H14zM20 1h1v1H20zM0 2h1v1H0zM2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM6 2h1v1H6zM8 2h1v1H8zM9 2h1v1H9zM10 2h1v1H10zM12 2h1v1H12zM14 2h1v1H14zM16 2h1v1H16zM17 2h1v1H17zM18 2h1v1H18zM20 2h1v1H20zM0 3h1v1H0zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM6 3h1v1H6zM8 3h1v1H8zM12 3h1v1H12zM14 3h1v1H14zM16 3h1v1H16zM17 3h1v1H17zM18 3h1v1H18zM20 3h1v1H20zM0 4h1v1H0zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM6 4h1v1H6zM9 4h1v1H9zM11 4h1v1H11zM12 4h1v1H12zM14 4h1v1H14zM16 4h1v1H16zM17 4h1v1H17zM18 4h1v1H18zM20 4h1v1H20zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM9 5h1v1H9zM11 5h1v1H11zM14 5h1v1H14zM20 5h1v1H20zM0 6h1v1H0zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM15 6h1v1H15zM16 6h1v1H16zM17 6h1v1H17zM18 6h1v1H18zM19 6h1v1H19zM20 6h1v1H20zM9 7h1v1H9zM11 7h1v1H11zM12 7h1v1H12zM0 8h1v1H0zM2 8h1v1H2zM3 8h1v1H3zM6 8h1v1H6zM7 8h1v1H7zM10 8h1v1H10zM15 8h1v1H15zM17 8h1v1H17zM18 8h1v1H18zM20 8h1v1H20zM1 9h1v1H1zM7 9h1v1H7zM16 9h1v1H16zM0 10h1v1H0zM1 10h1v1H1zM3 10h1v1H3zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM10 10h1v1H10zM11 10h1v1H11zM12 10h1v1H12zM14 10h1v1H14zM15 10h1v1H15zM20 10h1v1H20zM0 11h1v1H0zM1 11h1v1H1zM4 11h1v1H4zM5 11h1v1H5zM7 11h1v1H7zM8 11h1v1H8zM11 11h1v1H11zM12 11h1v1H12zM13 11h1v1H13zM14 11h1v1H14zM0 12h1v1H0zM5 12h1v1H5zM6 12h1v1H6zM7 12h1v1H7zM8 12h1v1H8zM10 12h1v1H10zM11 12h1v1H11zM12 12h1v1H12zM13 12h1v1H13zM14 12h1v1H14zM15 12h1v1H15zM16 12h1v1H16zM17 12h1v1H17zM18 12h1v1H18zM19 12h1v1H19zM20 12h1v1H20zM10 13h1v1H10zM11 13h1v1H11zM12 13h1v1H12zM13 13h1v1H13zM14 13h1v1H14zM19 13h1v1H19zM20 13h1v1H20zM0 14h1v1H0zM1 14h1v1H1zM2 14h1v1H2zM3 14h1v1H3zM4 14h1v1H4zM5 14h1v1H5zM6 14h1v1H6zM8 14h1v1H8zM9 14h1v1H9zM11 14h1v1H11zM12 14h1v1H12zM15 14h1v1H15zM17 14h1v1H17zM0 15h1v1H0zM6 15h1v1H6zM9 15h1v1H9zM10 15h1v1H10zM11 15h1v1H11zM15 15h1v1H15zM16 15h1v1H16zM0 16h1v1H0zM2 16h1v1H2zM3 16h1v1H3zM4 16h1v1H4zM6 16h1v1H6zM10 16h1v1H10zM12 16h1v1H12zM13 16h1v1H13zM14 16h1v1H14zM15 16h1v1H15zM16 16h1v1H16zM19 16h1v1H19zM0 17h1v1H0zM2 17h1v1H2zM3 17h1v1H3zM4 17h1v1H4zM6 17h1v1H6zM10 17h1v1H10zM11 17h1v1H11zM12 17h1v1H12zM13 17h1v1H13zM14 17h1v1H14zM0 18h1v1H0zM2 18h1v1H2zM3 18h1v1H3zM4 18h1v1H4zM6 18h1v1H6zM8 18h1v1H8zM14 18h1v1H14zM16 18h1v1H16zM19 18h1v1H19zM20 18h1v1H20zM0 19h1v1H0zM6 19h1v1H6zM10 19h1v1H10zM11 19h1v1H11zM12 19h1v1H12zM15 19h1v1H15zM19 19h1v1H19zM0 20h1v1H0zM1 20h1v1H1zM2 20h1v1H2zM3 20h1v1H3zM4 20h1v1H4zM5 20h1v1H5zM6 20h1v1H6zM8 20h1v1H8zM9 20h1v1H9zM14 20h1v1H14zM17 20h1v1H17zM18 20h1v1H18zM19 20h1v1H19zM20 20h1v1H20z"/>
                        </svg>
                      </div>{' '}
                      <div className="swatches" role="radiogroup" aria-label="Try a color">
                        <button className={`sw ${v.wInk ?? ''}`} style={{background: '#131316'}} onClick={v.wPickInk} aria-label="Ink"/>{' '}
                        <button className={`sw ${v.wOrange ?? ''}`} style={{background: '#FE6800'}} onClick={v.wPickOrange} aria-label="Orange"/>{' '}
                        <button className={`sw ${v.wPurple ?? ''}`} style={{background: '#7A2BD9'}} onClick={v.wPickPurple} aria-label="Purple"/>
                      </div>{' '}
                      <span className="mut" style={{font: '400 11.5px/1.5 var(--font-sans)', textAlign: 'center'}}>Scans open qurl.to - re-point it whenever you like.</span>
                    </div>
                  </section>{' '}
                  <div className="vlogos" aria-label="Customers">
                    <span className="lbl">Trusted by places that print</span>{' '}
                    <div className="vlogorow">
                      <span className="vlogo" aria-label="BRIGHT CAFE">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 2v2"/>
                          <path d="M14 2v2"/>
                          <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>
                        </svg>BRIGHT CAFE</span>
                      <span className="vlogo" aria-label="NORDIC EXPO">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                        </svg>NORDIC EXPO</span>
                      <span className="vlogo" aria-label="CASA VERDE">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                        </svg>CASA VERDE</span>
                      <span className="vlogo" aria-label="METRO RETAIL">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                          <path d="M3 6h18"/>
                          <path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>METRO RETAIL</span>
                      <span className="vlogo" aria-label="FESTIVALE">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                          <line x1="4" x2="4" y1="22" y2="15"/>
                        </svg>FESTIVALE</span>
                    </div>
                  </div>{' '}
                  <section className="lpsect">
                    <div className="lph center">
                      <span className="lpk">The console</span>{' '}
                      <h2>Every printed code, live in one place</h2>{' '}
                      <p>Scans, destinations and code health - the console shows what your print is doing right now.</p>
                    </div>{' '}
                    <div className="lpwin" role="img" aria-label="Preview of the qurl console">
                      <div className="lpwin-bar">
                        <i/>
                        <i/>
                        <i/>
                        <span>app.qurl.to</span>
                      </div>{' '}
                      <div className="lpwin-body">
                        <div className="lptile">
                          <span>Scans today</span>
                          <b>1,284</b>
                          <em>+18% vs yesterday</em>
                        </div>{' '}
                        <div className="lptile">
                          <span>Active codes</span>
                          <b>4 of 5</b>
                          <em>Starter plan</em>
                        </div>{' '}
                        <div className="lptile">
                          <span>Unique visitors</span>
                          <b>931</b>
                          <em>+9% vs yesterday</em>
                        </div>{' '}
                        <div className="lpchart">
                          <span>Scans this week</span>{' '}
                          <div className="lpbars">
                            <i style={{height: '34%'}}/>
                            <i style={{height: '48%'}}/>
                            <i style={{height: '41%'}}/>
                            <i style={{height: '62%'}}/>
                            <i style={{height: '55%'}}/>
                            <i style={{height: '78%'}}/>
                            <i style={{height: '96%'}}/>
                            <i style={{height: '70%'}}/>
                            <i style={{height: '58%'}}/>
                            <i style={{height: '82%'}}/>
                            <i style={{height: '66%'}}/>
                            <i style={{height: '90%'}}/>
                          </div>
                        </div>{' '}
                        <div className="lprow">
                          <div>Autumn menu <span className="chip ok" style={{marginLeft: 'auto'}}>Active</span>
                          </div>{' '}
                          <div className="mut">brightcafe.co/autumn</div>{' '}
                          <div>Event poster <span className="chip paused" style={{marginLeft: 'auto'}}>Paused</span>
                          </div>{' '}
                          <div className="mut">nordicexpo.eu/hall-b</div>
                        </div>
                      </div>
                    </div>
                  </section>{' '}
                  <section className="lpsect" id="how">
                    <div className="lph">
                      <span className="lpk">Why dynamic</span>{' '}
                      <h2>The ink dries. The destination doesn't.</h2>
                    </div>{' '}
                    <div className="frow" style={{paddingTop: '0'}}>
                      <div className="ftxt">
                        <h3>Re-point after print</h3>{' '}
                        <p>The code on your menus, posters and packaging stays identical - only where it leads changes. Fix a wrong link, swap a campaign or pause a code in one click.</p>{' '}
                        <div className="flist">
                          <div>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                              <path d="M20 6 9 17l-5-5"/>
                            </svg>
                            <span>Change the destination in seconds - the print never changes</span>
                          </div>{' '}
                          <div>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                              <path d="M20 6 9 17l-5-5"/>
                            </svg>
                            <span>Pause a code and scanners see a friendly page, not an error</span>
                          </div>{' '}
                          <div>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                              <path d="M20 6 9 17l-5-5"/>
                            </svg>
                            <span>Every change is instant at the edge</span>
                          </div>
                        </div>
                      </div>{' '}
                      <div className="fviz" aria-label="Destination swap example">
                        <div className="fswap">
                          <div className="fitem old">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                            </svg> brightcafe.co/summer-menu</div>{' '}
                          <span className="farr">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 5v14"/>
                              <path d="m19 12-7 7-7-7"/>
                            </svg>
                          </span>{' '}
                          <div className="fitem new">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                            </svg> brightcafe.co/autumn-menu</div>
                        </div>{' '}
                        <span className="mut" style={{font: '400 11.5px/1.5 var(--font-sans)', textAlign: 'center'}}>Same printed code - new destination, live in under a minute.</span>
                      </div>
                    </div>{' '}
                    <div className="frow rev">
                      <div className="ftxt">
                        <h3>Scan analytics without code</h3>{' '}
                        <p>Hour-by-hour scans, unique visitors, devices and countries for every code - no tags, no snippets, no analytics setup.</p>{' '}
                        <div className="flist">
                          <div>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                              <path d="M20 6 9 17l-5-5"/>
                            </svg>
                            <span>Live scan feed per code and per campaign</span>
                          </div>{' '}
                          <div>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                              <path d="M20 6 9 17l-5-5"/>
                            </svg>
                            <span>Compare table tents, posters and packaging</span>
                          </div>{' '}
                          <div>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                              <path d="M20 6 9 17l-5-5"/>
                            </svg>
                            <span>GDPR-aligned - IP anonymization built in</span>
                          </div>
                        </div>
                      </div>{' '}
                      <div className="fviz" aria-label="Analytics example">
                        <div className="lpchart" style={{border: '0', padding: '0'}}>
                          <span>Scans by hour - Autumn menu</span>{' '}
                          <div className="lpbars" style={{height: '96px'}}>
                            <i style={{height: '18%'}}/>
                            <i style={{height: '26%'}}/>
                            <i style={{height: '22%'}}/>
                            <i style={{height: '45%'}}/>
                            <i style={{height: '88%'}}/>
                            <i style={{height: '100%'}}/>
                            <i style={{height: '72%'}}/>
                            <i style={{height: '38%'}}/>
                            <i style={{height: '52%'}}/>
                            <i style={{height: '81%'}}/>
                            <i style={{height: '64%'}}/>
                            <i style={{height: '30%'}}/>
                          </div>
                        </div>{' '}
                        <span className="mut" style={{font: '400 11.5px/1.5 var(--font-sans)'}}>Lunch rush, 12:00-14:00 - 388 scans, 92% mobile.</span>
                      </div>
                    </div>{' '}
                    <div className="frow">
                      <div className="ftxt">
                        <h3>Hosted pages included</h3>{' '}
                        <p>No website needed. qurl hosts your PDF menus and link pages - responsive on every phone and threat-scanned before going live.</p>{' '}
                        <div className="flist">
                          <div>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                              <path d="M20 6 9 17l-5-5"/>
                            </svg>
                            <span>PDF menus rendered beautifully on mobile</span>
                          </div>{' '}
                          <div>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                              <path d="M20 6 9 17l-5-5"/>
                            </svg>
                            <span>Link pages for menus, Wi-Fi and specials</span>
                          </div>{' '}
                          <div>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                              <path d="M20 6 9 17l-5-5"/>
                            </svg>
                            <span>Every destination threat-scanned automatically</span>
                          </div>
                        </div>
                      </div>{' '}
                      <div className="fviz" aria-label="Hosted page example">
                        <div className="fphone">
                          <div className="fnotch"/>{' '}
                          <b>Bright Cafe</b>{' '}
                          <div className="fbtnrow">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                              <path d="M7 2v20"/>
                              <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                            </svg> Today's menu</div>{' '}
                          <div className="fbtnrow">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                              <path d="M7 2v20"/>
                              <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                            </svg> Tonight's specials</div>{' '}
                          <div className="fbtnrow">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 20h.01"/>
                              <path d="M2 8.82a15 15 0 0 1 20 0"/>
                              <path d="M5 12.859a10 10 0 0 1 14 0"/>
                              <path d="M8.5 16.429a5 5 0 0 1 7 0"/>
                            </svg> Guest Wi-Fi</div>{' '}
                          <span className="fmut">Powered by qurl</span>
                        </div>
                      </div>
                    </div>
                  </section>{' '}
                  <section className="lpsect">
                    <div className="lph center">
                      <span className="lpk">How it works</span>{' '}
                      <h2>From design to dinner service in minutes</h2>
                    </div>{' '}
                    <div className="steps">
                      <div className="ocard step" data-component="Card">
                        <span className="snum">1</span>
                        <b>Create</b>
                        <p>Pick a content type, style the code with your brand and check scannability live.</p>
                      </div>{' '}
                      <div className="ocard step" data-component="Card">
                        <span className="snum">2</span>
                        <b>Print</b>
                        <p>Export print-ready PNG, PDF or SVG and put it on menus, posters and packaging.</p>
                      </div>{' '}
                      <div className="ocard step" data-component="Card">
                        <span className="snum">3</span>
                        <b>Re-point</b>
                        <p>Yesterday's lunch menu becomes today's specials - the print never changes.</p>
                      </div>
                    </div>
                  </section>{' '}
                  <section className="lpsect">
                    <div className="lph center">
                      <span className="lpk">Customers</span>{' '}
                      <h2>Loved by places that print</h2>
                    </div>{' '}
                    <div className="vgrid v2">
                      <div className="ocard vquote" data-component="Card">
                        <p>"We reprint nothing since qurl - the table tents point wherever tonight needs them to."</p>{' '}
                        <div className="qwho">
                          <span className="qav">MP</span>
                          <div>
                            <b>Maya P.</b>
                            <span>Owner, Bright Cafe - Dublin</span>
                          </div>
                        </div>
                      </div>{' '}
                      <div className="ocard vquote" data-component="Card">
                        <p>"Event posters go up weeks early and the destination is decided the morning of."</p>{' '}
                        <div className="qwho">
                          <span className="qav">JK</span>
                          <div>
                            <b>Jonas K.</b>
                            <span>Marketing lead, Nordic Expo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>{' '}
                  <section className="lpsect">
                    <div className="lph center">
                      <span className="lpk">Pricing</span>{' '}
                      <h2>Start free, upgrade when you print more</h2>{' '}
                      <p>Prices in EUR for Ireland - VAT included. Your market's currency and tax treatment show at checkout.</p>
                    </div>{' '}
                    <div className="vgrid v2">
                      <div className="ocard vplan" data-component="Card">
                        <b>Starter</b>
                        <span className="vprice"><I v={v.pStarter}/><i>/mo</i>
                        </span>
                        <span className="mut">5 dynamic codes · 10k scans/mo · all exports · hosted pages · scan analytics</span>
                        <button className="ss-btn ss-btn--outline" data-component="Button" onClick={v.goSignup}>Start free</button>
                      </div>{' '}
                      <div className="ocard vplan vplan--hot" data-component="Card">
                        <span className="chip brand vpop">Popular</span>
                        <b>Advanced</b>
                        <span className="vprice"><I v={v.pAdvanced}/><i>/mo</i>
                        </span>
                        <span className="mut">25 dynamic codes · 100k scans/mo · everything in Starter · API access</span>
                        <button className="ss-btn" data-component="Button" onClick={v.goSignup}>Start free</button>
                      </div>
                    </div>{' '}
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                      <button className="linkbtn" onClick={v.openPricing}>Compare plans in detail</button>
                    </div>
                  </section>{' '}
                  <section className="lpsect" id="faq">
                    <div className="lph center">
                      <span className="lpk">FAQ</span>{' '}
                      <h2>Questions, answered</h2>
                    </div>{' '}
                    <div className="faq">
                      <div className="faqi">
                        <button className={`faqq ${v.faqCls1 ?? ''}`} onClick={v.faqT1} aria-expanded={v.faqAria1}>Do printed codes break when I change the destination?<svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                          </svg>
                        </button>{' '}
                        {v.faqOpen1 ? (<>
                          <div className="faqa">Never. The printed code stays identical - only the destination it resolves to changes, instantly.</div>
                        </>) : null}
                      </div>{' '}
                      <div className="faqi">
                        <button className={`faqq ${v.faqCls2 ?? ''}`} onClick={v.faqT2} aria-expanded={v.faqAria2}>Is there a free trial?<svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                          </svg>
                        </button>{' '}
                        {v.faqOpen2 ? (<>
                          <div className="faqa">Yes - 7 days with every feature, no card needed. Cancel anytime and keep your exported codes.</div>
                        </>) : null}
                      </div>{' '}
                      <div className="faqi">
                        <button className={`faqq ${v.faqCls3 ?? ''}`} onClick={v.faqT3} aria-expanded={v.faqAria3}>What happens if I pause a code?<svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                          </svg>
                        </button>{' '}
                        {v.faqOpen3 ? (<>
                          <div className="faqa">Scanners see a friendly unavailable page and nothing is deleted. Resume whenever you like - the print keeps working.</div>
                        </>) : null}
                      </div>{' '}
                      <div className="faqi">
                        <button className={`faqq ${v.faqCls4 ?? ''}`} onClick={v.faqT4} aria-expanded={v.faqAria4}>Do I need a website for hosted pages?<svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                          </svg>
                        </button>{' '}
                        {v.faqOpen4 ? (<>
                          <div className="faqa">No. qurl hosts PDF menus and link pages for you - responsive on every phone and threat-scanned before going live.</div>
                        </>) : null}
                      </div>
                    </div>
                  </section>{' '}
                  <div className="ctaband">
                    <h2>Ready to print smarter?</h2>{' '}
                    <p>Create your first dynamic code in under a minute. Print it once - re-point it forever.</p>{' '}
                    <button className="ss-btn ss-btn--lg" data-component="Button" onClick={v.goSignup}>Start free trial</button>{' '}
                    <p style={{font: '400 12px/1.5 var(--font-sans)'}}>7-day free trial - no card needed.</p>
                  </div>
                </div>
              </>) : null}{' '}
              {/* ============ CONTACT MODAL (talk to us; F6: 2 fields) ============ */}{' '}
              {v.contactOpen ? (<>
                <div className={`dlgwrap ${v.contactClosingCls ?? ''}`} role="dialog" aria-modal="true" aria-label="Talk to us">
                  <div className="scrim" onClick={v.closeContact}/>{' '}
                  <div className="dlg" style={{width: 'min(520px,94vw)'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <h3>Talk to us</h3>{' '}
                      <div className="tsp"/>{' '}
                      <button className="icbtn" onClick={v.closeContact} aria-label="Close" data-tt="Close" data-ttp="b">
                        <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                      </button>
                    </div>{' '}
                    <p className="mut" style={{margin: '0'}}>Volume pricing, invoicing or anything else - a person replies within one business day.</p>{' '}
                    <label className="ss-label ss-field" data-component="Label">Email<input className="ss-input" data-component="Input" value="you@company.com" aria-label="Your email"/>
                    </label>{' '}
                    <label className="ss-label ss-field" data-component="Label">What do you need?<input className="ss-input" data-component="Input" placeholder="Volume pricing, invoicing, questions" aria-label="What do you need"/>
                    </label>{' '}
                    <button className="ss-btn" data-component="Button" onClick={v.sendContact}>Send</button>
                  </div>
                </div>
              </>) : null}{' '}
              {/* ============ PRICING COMPARISON MODAL (O7 solid, F6 short content) ============ */}{' '}
              {v.pricingOpen ? (<>
                <div className={`dlgwrap ${v.pricingClosingCls ?? ''}`} role="dialog" aria-modal="true" aria-label="Compare plans">
                  <div className="scrim" onClick={v.closePricing}/>{' '}
                  <div className="dlg" style={{width: 'min(760px,94vw)'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <h3>Compare plans</h3>{' '}
                      <div className="tsp"/>{' '}
                      <button className="icbtn" onClick={v.closePricing} aria-label="Close" data-tt="Close" data-ttp="b">
                        <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                      </button>
                    </div>{' '}
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <div className="chipgroup" data-component="ChipGroup" role="group" aria-label="Billing period">
                        <button className={`segbtn ${v.perMonthly ?? ''}`} onClick={v.pickMonthly}>Monthly</button>{' '}
                        <button className={`segbtn ${v.perYearly ?? ''}`} onClick={v.pickYearly}>Yearly</button>
                      </div>{' '}
                      <span className="chip ok">2 months free yearly</span>
                    </div>{' '}
                    <div className="vgrid v2">
                      <div className="ocard vplan" data-component="Card">
                        <b>Starter</b>
                        <span className="vprice"><I v={v.pStarter}/><i><I v={v.perLbl}/></i>
                        </span>{' '}
                        <span className="mut">5 dynamic codes · 10k scans/mo · PNG, PDF and SVG export · hosted PDF and link pages · scan analytics</span>{' '}
                        <button className="ss-btn ss-btn--outline" data-component="Button" onClick={v.goSignup}>Start free</button>
                      </div>{' '}
                      <div className="ocard vplan vplan--hot" data-component="Card">
                        <span className="chip brand vpop">Popular</span>
                        <b>Advanced</b>
                        <span className="vprice"><I v={v.pAdvanced}/><i><I v={v.perLbl}/></i>
                        </span>{' '}
                        <span className="mut">25 dynamic codes · 100k scans/mo · everything in Starter · API access</span>{' '}
                        <button className="ss-btn" data-component="Button" onClick={v.goSignup}>Start free</button>
                      </div>
                    </div>{' '}
                    <p className="mut" style={{margin: '0', font: '400 12px/1.5 var(--font-sans)'}}>Prices in EUR for Ireland - VAT 23% included. Your market's currency and tax treatment show at checkout.</p>
                  </div>
                </div>
              </>) : null}{' '}
              {v.onTpl ? (<>
                <div className="lpwrap">
                  <div className="lph" style={{marginBottom: '28px', paddingTop: '8px'}}>
                    <h2>Start from a template</h2>{' '}
                    <p>Every template opens the generator with the content type, style and hosted page preset for the job. SEO landing pages exist for each industry - open one below.</p>
                  </div>{' '}
                  <div className="tgrid">
                    {(v.tplRows || []).map((t, i0) => (<React.Fragment key={i0}>
                      <button className="ocard tcard" data-component="Card" onClick={t.open}>
                        <span className="tth"/>{' '}
                        <b><I v={t.name}/></b>{' '}
                        <span><I v={t.desc}/></span>
                      </button>
                    </React.Fragment>))}
                  </div>
                </div>
              </>) : null}{' '}
              {v.onInd ? (<>
                <div className="lpwrap">
                  <div className="ptitle" data-component="PageTitle" style={{paddingTop: '8px', marginBottom: '26px'}}>
                    <button className="icbtn" onClick={v.goTpl} aria-label="Back to templates" data-tt="Back" data-ttp="b">
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m12 19-7-7 7-7"/>
                        <path d="M19 12H5"/>
                      </svg>
                    </button>{' '}
                    <h1>QR codes for restaurants</h1>
                  </div>{' '}
                  <div className="lph" style={{marginBottom: '28px'}}>
                    <h2>Menus that never need reprinting</h2>{' '}
                    <p>One printed code on every table. Change tonight's menu from your phone, host the PDF with us, and see the lunch rush in your scan analytics. This page is one of the programmatic industry landings - each industry gets its own, SEO fields managed in the CMS.</p>
                  </div>{' '}
                  <div className="frow" style={{paddingTop: '0'}}>
                    <div className="ftxt">
                      <h3>Built for the pass, not the office</h3>{' '}
                      <div className="flist">
                        <div>
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                            <path d="M20 6 9 17l-5-5"/>
                          </svg>
                          <span>Table tents point to today's menu - re-point them for brunch, lunch and dinner</span>
                        </div>{' '}
                        <div>
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                            <path d="M20 6 9 17l-5-5"/>
                          </svg>
                          <span>Host the PDF with us - no website needed, responsive on every phone</span>
                        </div>{' '}
                        <div>
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                            <path d="M20 6 9 17l-5-5"/>
                          </svg>
                          <span>See scans by hour and catch the rush before it hits the kitchen</span>
                        </div>
                      </div>
                    </div>{' '}
                    <div className="fviz" aria-label="Restaurant example">
                      <div className="fphone">
                        <div className="fnotch"/>{' '}
                        <b>Bright Cafe</b>{' '}
                        <div className="fbtnrow">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                            <path d="M7 2v20"/>
                            <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                          </svg> Today's menu</div>{' '}
                        <div className="fbtnrow">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                            <path d="M7 2v20"/>
                            <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                          </svg> Tonight's specials</div>{' '}
                        <span className="fmut">Powered by qurl</span>
                      </div>
                    </div>
                  </div>{' '}
                  <div className="ctaband" style={{marginTop: '72px'}}>
                    <h2>Print the last menu you'll ever print</h2>{' '}
                    <button className="ss-btn ss-btn--lg" data-component="Button" onClick={v.goSignup}>Start free trial</button>{' '}
                    <p style={{font: '400 12px/1.5 var(--font-sans)'}}>7-day free trial - no card needed.</p>
                  </div>
                </div>
              </>) : null}{' '}
              {v.onCms ? (<>
                <div className="lpwrap">
                  <div className="ptitle" data-component="PageTitle" style={{paddingTop: '8px', marginBottom: '26px'}}>
                    <button className="icbtn" onClick={v.goLanding} aria-label="Back to the landing page" data-tt="Back" data-ttp="b">
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m12 19-7-7 7-7"/>
                        <path d="M19 12H5"/>
                      </svg>
                    </button>{' '}
                    <h1><I v={v.cmsTitle}/></h1>
                  </div>{' '}
                  {v.viewFaq ? (<>
                    <div className="lph" style={{marginBottom: '28px'}}>
                      <h2>Questions, by topic</h2>{' '}
                      <p>Open a question to read the details. Still stuck? Contact in the footer reaches a person.</p>
                    </div>{' '}
                    <div className="qcats">
                      <div className="ocard qcat" data-component="Card">
                        <div className="qcat-h">
                          <b>General</b>
                          <span className="mut">The basics of dynamic codes</span>
                        </div>{' '}
                        <div className="faq qfaq">
                          {(v.faqGeneral || []).map((q, i0) => (<React.Fragment key={i0}>
                            <div className="faqi">
                              <button className={`faqq ${q.cls ?? ''}`} onClick={q.toggle} aria-expanded={q.aria}><I v={q.q}/><svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                                  <path d="M5 12h14"/>
                                  <path d="M12 5v14"/>
                                </svg>
                              </button>{' '}
                              {q.open ? (<>
                                <div className="faqa"><I v={q.a}/></div>
                              </>) : null}
                            </div>
                          </React.Fragment>))}
                        </div>
                      </div>{' '}
                      <div className="ocard qcat" data-component="Card">
                        <div className="qcat-h">
                          <b>Codes and printing</b>
                          <span className="mut">Exports, materials and scannability</span>
                        </div>{' '}
                        <div className="faq qfaq">
                          {(v.faqCodes || []).map((q, i0) => (<React.Fragment key={i0}>
                            <div className="faqi">
                              <button className={`faqq ${q.cls ?? ''}`} onClick={q.toggle} aria-expanded={q.aria}><I v={q.q}/><svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                                  <path d="M5 12h14"/>
                                  <path d="M12 5v14"/>
                                </svg>
                              </button>{' '}
                              {q.open ? (<>
                                <div className="faqa"><I v={q.a}/></div>
                              </>) : null}
                            </div>
                          </React.Fragment>))}
                        </div>
                      </div>{' '}
                      <div className="ocard qcat" data-component="Card">
                        <div className="qcat-h">
                          <b>Billing and plans</b>
                          <span className="mut">Trials, limits and payments</span>
                        </div>{' '}
                        <div className="faq qfaq">
                          {(v.faqBilling || []).map((q, i0) => (<React.Fragment key={i0}>
                            <div className="faqi">
                              <button className={`faqq ${q.cls ?? ''}`} onClick={q.toggle} aria-expanded={q.aria}><I v={q.q}/><svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                                  <path d="M5 12h14"/>
                                  <path d="M12 5v14"/>
                                </svg>
                              </button>{' '}
                              {q.open ? (<>
                                <div className="faqa"><I v={q.a}/></div>
                              </>) : null}
                            </div>
                          </React.Fragment>))}
                        </div>
                      </div>{' '}
                      <div className="ocard qcat" data-component="Card">
                        <div className="qcat-h">
                          <b>Privacy and data</b>
                          <span className="mut">What we store and for how long</span>
                        </div>{' '}
                        <div className="faq qfaq">
                          {(v.faqPrivacy || []).map((q, i0) => (<React.Fragment key={i0}>
                            <div className="faqi">
                              <button className={`faqq ${q.cls ?? ''}`} onClick={q.toggle} aria-expanded={q.aria}><I v={q.q}/><svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                                  <path d="M5 12h14"/>
                                  <path d="M12 5v14"/>
                                </svg>
                              </button>{' '}
                              {q.open ? (<>
                                <div className="faqa"><I v={q.a}/></div>
                              </>) : null}
                            </div>
                          </React.Fragment>))}
                        </div>
                      </div>
                    </div>
                  </>) : null}{' '}
                  {v.viewHelp ? (<>
                    <div className="lph" style={{marginBottom: '28px'}}>
                      <h2>Help, step by step</h2>{' '}
                      <p>How-to guides for the everyday jobs. For questions about what qurl is, see the FAQ.</p>
                    </div>{' '}
                    <div className="qcats">
                      <div className="ocard qcat" data-component="Card">
                        <div className="qcat-h">
                          <b>Getting started</b>
                          <span className="mut">Your first code, styled and printed</span>
                        </div>{' '}
                        <div className="faq qfaq">
                          {(v.helpStart || []).map((q, i0) => (<React.Fragment key={i0}>
                            <div className="faqi">
                              <button className={`faqq ${q.cls ?? ''}`} onClick={q.toggle} aria-expanded={q.aria}><I v={q.q}/><svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                                  <path d="M5 12h14"/>
                                  <path d="M12 5v14"/>
                                </svg>
                              </button>{' '}
                              {q.open ? (<>
                                <div className="faqa"><I v={q.a}/></div>
                              </>) : null}
                            </div>
                          </React.Fragment>))}
                        </div>
                      </div>{' '}
                      <div className="ocard qcat" data-component="Card">
                        <div className="qcat-h">
                          <b>Managing codes</b>
                          <span className="mut">Re-pointing, pausing and organizing</span>
                        </div>{' '}
                        <div className="faq qfaq">
                          {(v.helpManage || []).map((q, i0) => (<React.Fragment key={i0}>
                            <div className="faqi">
                              <button className={`faqq ${q.cls ?? ''}`} onClick={q.toggle} aria-expanded={q.aria}><I v={q.q}/><svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                                  <path d="M5 12h14"/>
                                  <path d="M12 5v14"/>
                                </svg>
                              </button>{' '}
                              {q.open ? (<>
                                <div className="faqa"><I v={q.a}/></div>
                              </>) : null}
                            </div>
                          </React.Fragment>))}
                        </div>
                      </div>{' '}
                      <div className="ocard qcat" data-component="Card">
                        <div className="qcat-h">
                          <b>Billing</b>
                          <span className="mut">Plans, invoices and payment methods</span>
                        </div>{' '}
                        <div className="faq qfaq">
                          {(v.helpBilling || []).map((q, i0) => (<React.Fragment key={i0}>
                            <div className="faqi">
                              <button className={`faqq ${q.cls ?? ''}`} onClick={q.toggle} aria-expanded={q.aria}><I v={q.q}/><svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                                  <path d="M5 12h14"/>
                                  <path d="M12 5v14"/>
                                </svg>
                              </button>{' '}
                              {q.open ? (<>
                                <div className="faqa"><I v={q.a}/></div>
                              </>) : null}
                            </div>
                          </React.Fragment>))}
                        </div>
                      </div>
                    </div>
                  </>) : null}{' '}
                  {v.viewLegal ? (<>
                    <div className="lph" style={{marginBottom: '28px'}}>
                      <h2>The fine print, findable</h2>{' '}
                      <p>Every agreement that governs a qurl account, split by document. Open a section for the summary; the full text lives behind each document at checkout and in the console.</p>
                    </div>{' '}
                    <div className="qcats">
                      <div className="ocard qcat" data-component="Card">
                        <div className="qcat-h">
                          <b>Terms of service</b>
                          <span className="mut">The agreement for every account</span>
                        </div>{' '}
                        <div className="faq qfaq">
                          {(v.legalTerms || []).map((q, i0) => (<React.Fragment key={i0}>
                            <div className="faqi">
                              <button className={`faqq ${q.cls ?? ''}`} onClick={q.toggle} aria-expanded={q.aria}><I v={q.q}/><svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                                  <path d="M5 12h14"/>
                                  <path d="M12 5v14"/>
                                </svg>
                              </button>{' '}
                              {q.open ? (<>
                                <div className="faqa"><I v={q.a}/></div>
                              </>) : null}
                            </div>
                          </React.Fragment>))}
                        </div>
                      </div>{' '}
                      <div className="ocard qcat" data-component="Card">
                        <div className="qcat-h">
                          <b>Privacy policy</b>
                          <span className="mut">What we collect and why</span>
                        </div>{' '}
                        <div className="faq qfaq">
                          {(v.legalPrivacy || []).map((q, i0) => (<React.Fragment key={i0}>
                            <div className="faqi">
                              <button className={`faqq ${q.cls ?? ''}`} onClick={q.toggle} aria-expanded={q.aria}><I v={q.q}/><svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                                  <path d="M5 12h14"/>
                                  <path d="M12 5v14"/>
                                </svg>
                              </button>{' '}
                              {q.open ? (<>
                                <div className="faqa"><I v={q.a}/></div>
                              </>) : null}
                            </div>
                          </React.Fragment>))}
                        </div>
                      </div>{' '}
                      <div className="ocard qcat" data-component="Card">
                        <div className="qcat-h">
                          <b>Data processing</b>
                          <span className="mut">For customers with GDPR duties</span>
                        </div>{' '}
                        <div className="faq qfaq">
                          {(v.legalDpa || []).map((q, i0) => (<React.Fragment key={i0}>
                            <div className="faqi">
                              <button className={`faqq ${q.cls ?? ''}`} onClick={q.toggle} aria-expanded={q.aria}><I v={q.q}/><svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                                  <path d="M5 12h14"/>
                                  <path d="M12 5v14"/>
                                </svg>
                              </button>{' '}
                              {q.open ? (<>
                                <div className="faqa"><I v={q.a}/></div>
                              </>) : null}
                            </div>
                          </React.Fragment>))}
                        </div>
                      </div>{' '}
                      <div className="ocard qcat" data-component="Card">
                        <div className="qcat-h">
                          <b>Cookies</b>
                          <span className="mut">What the site sets and when</span>
                        </div>{' '}
                        <div className="ocard qcat" data-component="Card">
                          <div className="qcat-h">
                            <b>Refund policy</b>
                            <span className="mut">When and how charges come back</span>
                          </div>{' '}
                          <div className="faq qfaq">
                            {(v.legalRefund || []).map((q, i0) => (<React.Fragment key={i0}>
                              <div className="faqi">
                                <button className={`faqq ${q.cls ?? ''}`} onClick={q.toggle} aria-expanded={q.aria}><I v={q.q}/><svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                                    <path d="M5 12h14"/>
                                    <path d="M12 5v14"/>
                                  </svg>
                                </button>{' '}
                                {q.open ? (<>
                                  <div className="faqa"><I v={q.a}/></div>
                                </>) : null}
                              </div>
                            </React.Fragment>))}
                          </div>
                        </div>{' '}
                        <div className="faq qfaq">
                          {(v.legalCookies || []).map((q, i0) => (<React.Fragment key={i0}>
                            <div className="faqi">
                              <button className={`faqq ${q.cls ?? ''}`} onClick={q.toggle} aria-expanded={q.aria}><I v={q.q}/><svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '16px', height: '16px'}}>
                                  <path d="M5 12h14"/>
                                  <path d="M12 5v14"/>
                                </svg>
                              </button>{' '}
                              {q.open ? (<>
                                <div className="faqa"><I v={q.a}/></div>
                              </>) : null}
                            </div>
                          </React.Fragment>))}
                        </div>
                      </div>
                    </div>
                  </>) : null}
                </div>
              </>) : null}{' '}
              <footer className="vfoot lpwrap">
                <div className="fcol">
                  <span className="fbrand">
                    <img className="mark" src="assets/logo-white.svg" alt="" style={{width: '24px', height: '24px'}}/>
                    <span className="word">qurl</span>
                  </span>{' '}
                  <span className="mut">Dynamic QR codes with hosted pages, scan analytics and print-ready exports - for places that print.</span>
                </div>{' '}
                <div className="fcol">
                  <span className="fttl">Product</span>{' '}
                  <button className="vlink" onClick={v.goHow}>How it works</button>{' '}
                  <button className="vlink" onClick={v.openPricing}>Pricing</button>{' '}
                  <button className="vlink" onClick={v.goTpl}>Templates</button>{' '}
                  <button className="vlink" onClick={v.goSignup}>Start free</button>
                </div>{' '}
                <div className="fcol">
                  <span className="fttl">Company</span>{' '}
                  <button className="vlink" onClick={v.cmsFaq}>FAQ</button>{' '}
                  <button className="vlink" onClick={v.cmsHelp}>Help</button>{' '}
                  <button className="vlink" onClick={v.cmsLegal}>Legal</button>{' '}
                  <button className="vlink" onClick={v.openContact}>Contact</button>
                </div>
              </footer>{' '}
              <div className="vfootbase lpwrap">
                <span>qurl - dynamic QR codes</span>
                <span>Made for menus, posters and packaging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
