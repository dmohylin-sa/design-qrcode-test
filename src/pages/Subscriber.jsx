/* Generated from Subscriber Prototype.dc.html by scripts/dc-to-jsx.py - do not hand-edit.
 * The markup is the prototype's, converted to JSX. The logic block below is the
 * prototype's own, carried across verbatim apart from the import, the class
 * header and the landing view. Re-run the script to regenerate. */

import React from 'react'
import { I } from '../dc.jsx'
import './../styles/subscriber.css'

const SEED_CODES = [
  {id:'c1', name:'Lunch menu', slug:'x7Kp2', dest:'brightcafe.co/menu', type:'Website URL', status:'active', scans:'612', unique:'447', created:'22 Aug 2026', fg:'#131316'},
  {id:'c2', name:'Table tent - specials', slug:'m3Rw8', dest:'brightcafe.co/specials', type:'Website URL', status:'active', scans:'318', unique:'251', created:'23 Aug 2026', fg:'#7A2BD9'},
  {id:'c3', name:'Wi-Fi for guests', slug:'g9Qt4', dest:'WPA2 - BrightCafe-Guest', type:'Wi-Fi', status:'active', scans:'204', unique:'188', created:'24 Aug 2026', fg:'#FE6800'},
  {id:'c4', name:'Loyalty signup', slug:'k2Vn6', dest:'brightcafe.co/loyalty', type:'Website URL', status:'paused', scans:'96', unique:'82', created:'25 Aug 2026', fg:'#131316'},
  {id:'c5', name:'Window poster', slug:'p5Zd1', dest:'win-a-prize.example/offer', type:'Website URL', status:'quarantined', scans:'54', unique:'49', created:'26 Aug 2026', fg:'#E9445A'},
];
const BARS = {
  hour:[{lbl:'12:00',t:30,u:22},{lbl:'12:10',t:44,u:31},{lbl:'12:20',t:58,u:40},{lbl:'12:30',t:92,u:66},{lbl:'12:40',t:76,u:52},{lbl:'12:50',t:64,u:47}],
  day:[{lbl:'06',t:8,u:6},{lbl:'09',t:34,u:26},{lbl:'12',t:96,u:70},{lbl:'15',t:52,u:38},{lbl:'18',t:88,u:61},{lbl:'21',t:40,u:28}],
  week:[{lbl:'Mon',t:52,u:40},{lbl:'Tue',t:60,u:44},{lbl:'Wed',t:48,u:36},{lbl:'Thu',t:72,u:51},{lbl:'Fri',t:96,u:68},{lbl:'Sat',t:84,u:60},{lbl:'Sun',t:38,u:29}],
  month:[{lbl:'W1',t:60,u:44},{lbl:'W2',t:72,u:52},{lbl:'W3',t:88,u:63},{lbl:'W4',t:96,u:70}],
};
export default class Subscriber extends React.Component {
  constructor(props){ super(props);
    this.state = {
      view:'codes', dark: document.documentElement.classList.contains('dark'), rail:false, mopen:false, remember:true, cta:true,
      plan:'starter', planOpen:false, planClosing:false, planPick:null,
      cardLast4:'4242', walletOn:false, intgOpen:null, intgClosing:false,
      notifOpen:false, profileOpen:false, notifUnread:true,
      authTab:'in', signupStep:1, useCase:'',
      codes:SEED_CODES.map((c,i)=>({...c, folder:['Menus','Menus','Events','Unfiled','Events'][i%5]||'Unfiled'})), hasCodes:true,
      folders:['Menus','Events','Unfiled'], folderFilt:'all', sel:{}, nfOpen:false, nfClosing:false, nfName:'', folderMenuOpen:false,
      q:'', filt:'all',
      wizStep:1, newType:'url', newTmpl:'', newName:'Autumn promo', newDest:'https://brightcafe.co/autumn',
      threatState:'idle',
      fg:'#131316', bg:'#FFFFFF', shape:'sq', logoOn:false, logoSrc:'assets/logo.svg',
      fgHexRaw:'#131316', bgHexRaw:'#FFFFFF',
      curId:'c1', range:'week', dunning:false,
      exportOpen:false, exportFor:null, exportClosing:false,
      deleteOpen:false, deleteFor:null, deleteClosing:false,
      lockoutOpen:false, lockoutClosing:false,
      quarOpen:false, quarClosing:false,
      toasts:[],
    };
  }
  componentDidMount(){
    /* S9 living grain: JS-stepped jitter (CSS background animation does not repaint here) */
    if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const P=[[0,0],[-34,-26],[27,34],[-45,19],[36,-38],[-19,45],[47,22],[-32,36]]; let gi=0;
      this.__grain=setInterval(()=>{ gi=(gi+1)%P.length;
        document.querySelectorAll('.grainfx').forEach(el=>{ el.style.backgroundPosition=P[gi][0]+'px '+P[gi][1]+'px'; });
      }, 112);
    }
    this.__esc=(e)=>{ if(e.key!=='Escape') return; const s=this.state;
      if(s.folderMenuOpen) return this.setState({folderMenuOpen:false});
      if(s.notifOpen) return this.setState({notifOpen:false});
      if(s.profileOpen) return this.setState({profileOpen:false});
      if(s.intgOpen) return this.setState({intgOpen:null, intgClosing:false});
      if(s.planOpen) return this.setState({planOpen:false, planClosing:false, planPick:null});
      if(s.exportOpen) return this.closeOv('export');
      if(s.deleteOpen) return this.closeOv('delete');
      if(s.lockoutOpen) return this.closeOv('lockout');
      if(s.quarOpen) return this.closeOv('quar');
      if(s.mopen) return this.setState({mopen:false}); };
    document.addEventListener('keydown', this.__esc);
  }
  componentWillUnmount(){ document.removeEventListener('keydown', this.__esc); if(this.__grain) clearInterval(this.__grain); }
  toast(text, undo){
    const id = Math.random().toString(36).slice(2);
    const t = {id, text}; if (undo) t.undoFn = undo;
    this.setState({toasts:[...this.state.toasts, t]});
    setTimeout(()=>{ this.setState({toasts:this.state.toasts.filter(x=>x.id!==id)}); }, 4200);
  }
  closeOv(which){
    this.setState({[which+'Closing']:true});
    setTimeout(()=>this.setState({[which+'Open']:false,[which+'Closing']:false,[which+'For']:null}), 210);
  }
  setCode(id, patch){ this.setState({codes:this.state.codes.map(c=>c.id===id?{...c,...patch}:c)}); }
  pauseCode(id){
    const prev = this.state.codes.find(c=>c.id===id).status;
    this.setCode(id,{status:'paused'});
    this.toast('Code paused - scanners see the unavailable page.', ()=>{ this.setCode(id,{status:prev}); this.toast('Code is active again.'); });
  }
  renderVals(){
    const s = this.state;
    const cur = s.codes.find(c=>c.id===s.curId) || s.codes[0];
    const qq = s.q.toLowerCase();
    const filtered = s.codes.filter(c=>(s.filt==='all'||c.status===s.filt))
      .filter(c=>s.folderFilt==='all'||c.folder===s.folderFilt)
      .filter(c=>!qq || (c.name+' '+c.slug+' '+c.dest).toLowerCase().includes(qq));
    const rows = filtered.map(c=>({
      ...c,
      selOn:!!s.sel[c.id], toggleSel:()=>{ const sel={...this.state.sel}; if(sel[c.id]) delete sel[c.id]; else sel[c.id]=true; this.setState({sel}); },
      statusLbl: c.status==='active'?'Active':(c.status==='paused'?'Paused':'Quarantined'),
      chipCls: c.status==='active'?'ok':(c.status==='paused'?'paused':'quar'),
      isActive:c.status==='active', isPaused:c.status==='paused', isQuar:c.status==='quarantined',
      open:()=>this.setState({view:'detail', curId:c.id}),
      openExport:()=>this.setState({exportOpen:true, exportFor:c.id}),
      pause:()=>this.pauseCode(c.id),
      resume:()=>{ this.setCode(c.id,{status:'active'}); this.toast('Code resumed - redirect is live.'); },
      showQuar:()=>this.setState({quarOpen:true, curId:c.id}),
      askDelete:()=>this.setState({deleteOpen:true, deleteFor:c.id}),
    }));
    const hex2rgb = h => [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
    const lum = c => { const f = v => { v/=255; return v<=0.04045 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); };
      const [r,g,bb] = c; return 0.2126*f(r)+0.7152*f(g)+0.0722*f(bb); };
    const [l1, l2] = [lum(hex2rgb(s.fg)), lum(hex2rgb(s.bg))].sort((a,z)=>z-a);
    const cratio = (l1+0.05)/(l2+0.05);
    const score = cratio >= 6 ? 92 : (cratio >= 3 ? 55 : 18);
    const exCode = s.codes.find(c=>c.id===s.exportFor) || cur;
    const delCode = s.codes.find(c=>c.id===s.deleteFor) || cur;
    const seg=(v,cur)=>v===cur?'on':'';
    const lvl2 = s.view==='billing' || s.view==='account'; /* N11: views owned by the two-level tab */
    const ground = s.view==='create'?'g-create':(s.view==='detail'?'g-detail':(lvl2?'g-billing':'g-codes'));
    const PLANS = {starter:{name:'Starter', price:'$9/mo', limit:5}, advanced:{name:'Advanced', price:'$29/mo', limit:25}};
    const titles = {codes:'My codes', create:'Create code', detail:cur.name, billing:'Billing', account:'Account'};
    const destLabels = {url:'Destination URL', card:'Contact details link', wifi:'Network name and password', text:'Text to show', pdf:'Document to host (PDF)', links:'Your links, one per line'};
    return {
      /* shell */
      isLogin:s.view==='login', isApp:s.view!=='login',
      railCls:s.rail?'rail':'', mopenCls:s.mopen?'mopen':'', mopen:s.mopen,
      closeMobileNav:()=>this.setState({mopen:false}),
      toggleSidebar:()=>{ if(window.innerWidth<=1200) this.setState({mopen:!s.mopen}); else this.setState({rail:!s.rail}); },
      logoSrc: s.dark ? 'assets/logo-white.svg' : 'assets/logo.svg',
      railOn:s.rail, railOff:!s.rail,
      isDark:s.dark, isLight:!s.dark,
      darkAria:s.dark?'true':'false', modeState:s.dark?'checked':'unchecked',
      toggleMode:()=>{ const d=!s.dark; document.documentElement.classList.toggle('dark', d); this.setState({dark:d}); },
      groundCls:ground, pageTitle:titles[s.view]||'qurl',
      contentCls: (s.view==='account' || (s.view==='create' && s.wizStep!==3)) ? 'focuscol' : (s.view==='create' ? 'stylefit' : ''),
      showStyleActions: s.view==='create' && s.wizStep===3,
      wizBack: ()=>{ if(s.view!=='create') return; if(s.wizStep===1) this.setState({view:'codes'}); else this.setState({wizStep:s.wizStep-1, threatState:'idle'}); },
      wizBackTt: s.wizStep===1 ? 'Back to codes' : (s.wizStep===2 ? 'Back to content' : 'Back to destination'),
      navCodes:(s.view==='codes'||s.view==='detail')?'on':'', navCreate:s.view==='create'?'on':'', navBilling:lvl2?'on':'',
      navBillingSub:s.view==='billing'?'on':'', navAccountSub:s.view==='account'?'on':'',
      goAccount:()=>this.setState({view:'account', mopen:false}),
      goCodes:()=>this.setState({view:'codes', mopen:false}),
      goCreate:()=>this.setState({view:'create', mopen:false, wizStep:1, threatState:'idle'}),
      goBilling:()=>this.setState({view:'billing', mopen:false}),
      lockedInfo:()=>this.toast('This ships in a later phase.'),
      bellDot: s.notifUnread ? 'belldot' : '',
      notifOpen:s.notifOpen, profileOpen:s.profileOpen,
      toggleNotif:()=>this.setState({notifOpen:!s.notifOpen, profileOpen:false, notifUnread:false}),
      toggleProfile:()=>this.setState({profileOpen:!s.profileOpen, notifOpen:false}),
      notifPay:()=>{ this.setState({notifOpen:false, view:'billing', dunning:true}); },
      notifLimit:()=>{ this.setState({notifOpen:false, view:'billing'}); },
      goBillingFromMenu:()=>this.setState({profileOpen:false, view:'billing'}),
      showCreateAction: s.view==='codes' && s.hasCodes,
      doLogout:()=>this.setState({view:'login', authTab:'in', signupStep:1}),
      folderOpts:[{name:'All folders', id:'all'}].concat(s.folders.map(f=>({name:f, id:f}))).map(o=>({
        name:o.name, sel:s.folderFilt===o.id, selAria:s.folderFilt===o.id?'true':'false',
        pick:()=>this.setState({folderFilt:o.id, folderMenuOpen:false}) })),
      folderLbl:s.folderFilt==='all'?'All folders':s.folderFilt,
      folderMenuOpen:s.folderMenuOpen, folderMenuAria:s.folderMenuOpen?'true':'false',
      toggleFolderMenu:()=>this.setState({folderMenuOpen:!s.folderMenuOpen, notifOpen:false, profileOpen:false}),
      openNewFolder:()=>this.setState({nfOpen:true, nfClosing:false, nfName:''}),
      closeNewFolder:()=>{ this.setState({nfClosing:true}); setTimeout(()=>this.setState({nfOpen:false, nfClosing:false}), 210); },
      nfOpen:s.nfOpen, nfClosingCls:s.nfClosing?'closing':'', nfName:s.nfName,
      setNfName:(e)=>this.setState({nfName:e.target.value}),
      createFolder:()=>{ const n=s.nfName.trim(); if(!n){ this.toast('Give the folder a name.'); return; }
        if(s.folders.includes(n)){ this.toast('A folder with that name already exists.'); return; }
        this.setState({folders:[...s.folders.filter(f=>f!=='Unfiled'), n, 'Unfiled'], nfClosing:true});
        setTimeout(()=>this.setState({nfOpen:false, nfClosing:false}), 210);
        this.toast('Folder "'+n+'" created.'); },
      bulkOn:Object.keys(s.sel).length>0, bulkCount:Object.keys(s.sel).length,
      clearSel:()=>this.setState({sel:{}}),
      moveChips:s.folders.map(f=>({name:f, move:()=>{ const ids=Object.keys(this.state.sel); const prev=this.state.codes.map(c=>({id:c.id, folder:c.folder}));
        this.setState({codes:this.state.codes.map(c=>this.state.sel[c.id]?{...c, folder:f}:c), sel:{}});
        this.toast(ids.length+' code'+(ids.length>1?'s':'')+' moved to '+f+'.', ()=>{ this.setState({codes:this.state.codes.map(c=>{ const p=prev.find(x=>x.id===c.id); return p?{...c, folder:p.folder}:c; })}); this.toast('Move undone.'); }); } })),
      exportCsv:()=>this.toast('CSV export started - the scan log for this code downloads when ready.'),
      exEps:()=>this.toast('EPS exported - vector for legacy print workflows.'),
      geoRows:[{name:'Ireland', pct:'44%'},{name:'Germany', pct:'27%'},{name:'Portugal', pct:'14%'},{name:'France', pct:'9%'},{name:'Other', pct:'6%'}],
      noop:()=>{},
      /* login */
      authTitle: s.authTab==='in' ? 'Welcome back' : 'Start your free trial',
      tabInCls:s.authTab==='in'?'on':'', tabUpCls:s.authTab==='up'?'on':'',
      isSignIn:s.authTab==='in', isSignUp:s.authTab==='up',
      pickSignIn:()=>this.setState({authTab:'in'}), pickSignUp:()=>this.setState({authTab:'up', signupStep:1}),
      email:'maya@brightcafe.co',
      rememberOn:s.remember, toggleRemember:()=>this.setState({remember:!s.remember}),
      ctaOn:s.cta, ctaFlag:s.cta, toggleCta:()=>this.setState({cta:!s.cta}),
      doLogin:()=>{ this.setState({view:'codes', hasCodes:true}); this.toast('Signed in - session remembered on this device.'); },
      doGoogle:()=>this.setState({intgOpen:'google', intgClosing:false}),
      doGoogleUp:()=>this.setState({intgOpen:'googleUp', intgClosing:false}),
      doReset:()=>this.toast('Reset link sent - check your email.'),
      showLockout:()=>this.setState({lockoutOpen:true}),
      signupStep1:s.signupStep===1, signupStep2:s.signupStep===2, signupStep3:s.signupStep===3,
      sendOtp:()=>{ this.setState({signupStep:2}); this.toast('We emailed you a 6-digit code.'); },
      verifyOtp:()=>this.setState({signupStep:3}),
      resendOtp:()=>this.toast('New code sent.'),
      uMenu:seg('menu',s.useCase), uRetail:seg('retail',s.useCase), uEvents:seg('events',s.useCase), uCard:seg('card',s.useCase),
      pickUseMenu:()=>this.setState({useCase:'menu'}), pickUseRetail:()=>this.setState({useCase:'retail'}),
      pickUseEvents:()=>this.setState({useCase:'events'}), pickUseCard:()=>this.setState({useCase:'card'}),
      finishSignup:()=>{ this.setState({view:'codes', hasCodes:false}); this.toast('Trial started - 7 days, no card on file.'); },
      skipSignupExtras:()=>{ this.setState({view:'codes', hasCodes:false}); this.toast('Skipped - you can finish setting up any time from Billing and account.'); },
      /* codes list */
      onCodes:s.view==='codes', hasCodes:s.hasCodes, noCodesYet:!s.hasCodes,
      search:(e)=>{ const v=e.target.value; this.setState(s.view==='codes'?{q:v}:{view:'codes', q:v}); },
      fAll:seg('all',s.filt), fAct:seg('active',s.filt), fPau:seg('paused',s.filt), fQua:seg('quarantined',s.filt),
      filtAll:()=>this.setState({filt:'all'}), filtAct:()=>this.setState({filt:'active'}),
      filtPau:()=>this.setState({filt:'paused'}), filtQua:()=>this.setState({filt:'quarantined'}),
      rows, noResults:rows.length===0, totalCodes:String(s.codes.length),
      codeCount: rows.length + ' of ' + s.codes.length,
      clearFilters:()=>this.setState({q:'', filt:'all'}),
      /* wizard */
      onCreate:s.view==='create',
      st1:s.wizStep===1?'on':'done', st2:s.wizStep===2?'on':(s.wizStep>2?'done':''), st3:s.wizStep===3?'on':'',
      wiz1:s.wizStep===1, wiz2:s.wizStep===2, wiz3:s.wizStep===3,
      tUrl:seg('url',s.newType), tCard:seg('card',s.newType), tWifi:seg('wifi',s.newType), tText:seg('text',s.newType),
      tPdf:seg('pdf',s.newType), tLinks:seg('links',s.newType),
      pickPdf:()=>this.setState({newType:'pdf'}), pickLinks:()=>this.setState({newType:'links'}),
      pickUrl:()=>this.setState({newType:'url'}), pickCard:()=>this.setState({newType:'card'}),
      pickWifi:()=>this.setState({newType:'wifi'}), pickText:()=>this.setState({newType:'text'}),
      tmMenu:seg('menu',s.newTmpl), tmRetail:seg('retail',s.newTmpl), tmEvent:seg('event',s.newTmpl), tmRe:seg('re',s.newTmpl), tmBiz:seg('biz',s.newTmpl),
      pickTmplMenu:()=>this.setState({newTmpl:'menu', fg:'#131316', bg:'#F7F3EA'}),
      pickTmplRetail:()=>this.setState({newTmpl:'retail', fg:'#FE6800', bg:'#FFFFFF'}),
      pickTmplEvent:()=>this.setState({newTmpl:'event', fg:'#7A2BD9', bg:'#FFFFFF'}),
      pickTmplRe:()=>this.setState({newTmpl:'re', fg:'#131316', bg:'#FFFFFF'}),
      pickTmplBiz:()=>this.setState({newTmpl:'biz', fg:'#E9445A', bg:'#F7F3EA'}),
      toStep1:()=>this.setState({wizStep:1}),
      toStep2:()=>this.setState({wizStep:2, threatState:'idle'}),
      toStep3:()=>this.setState({wizStep:3}),
      destLabel: destLabels[s.newType],
      isHostedType: s.newType==='pdf' || s.newType==='links' || s.newType==='card',
      destInfo: (s.newType==='pdf' || s.newType==='links' || s.newType==='card')
        ? 'Threat-scanned before going live. This type resolves to a hosted page carrying only what you supply.'
        : 'Destinations are threat-scanned before going live, and re-scanned on a schedule after.',
      newName:s.newName, setNewName:(e)=>this.setState({newName:e.target.value}),
      newDest:s.newDest, setNewDest:(e)=>this.setState({newDest:e.target.value, threatState:'idle'}),
      newSlug:'a1Xc9',
      scanIdle:s.threatState==='idle', scanRunning:s.threatState==='running',
      scanSafe:s.threatState==='safe', scanBad:s.threatState==='bad',
      scanNotSafe:s.threatState!=='safe' && s.threatState!=='running',
      runScan:()=>{ this.setState({threatState:'running'});
        setTimeout(()=>{ const bad = /win-a-prize|phish|malware/.test(this.state.newDest);
          this.setState({threatState: bad?'bad':'safe'});
          if (bad) this.setState({quarOpen:true});
        }, 1100); },
      tryBadDest:()=>this.setState({newDest:'https://win-a-prize.example/offer', threatState:'idle'}),
      fgInk:seg('#131316',s.fg), fgOrange:seg('#FE6800',s.fg), fgPurple:seg('#7A2BD9',s.fg), fgRed:seg('#E9445A',s.fg), fgLight:seg('#C9CBD6',s.fg),
      pickFgInk:()=>this.setState({fg:'#131316', fgHexRaw:'#131316'}), pickFgOrange:()=>this.setState({fg:'#FE6800', fgHexRaw:'#FE6800'}),
      pickFgPurple:()=>this.setState({fg:'#7A2BD9', fgHexRaw:'#7A2BD9'}), pickFgRed:()=>this.setState({fg:'#E9445A', fgHexRaw:'#E9445A'}),
      pickFgLight:()=>this.setState({fg:'#C9CBD6', fgHexRaw:'#C9CBD6'}),
      bgWhite:seg('#FFFFFF',s.bg), bgCream:seg('#F7F3EA',s.bg), bgDark:seg('#1D1D24',s.bg),
      pickBgWhite:()=>this.setState({bg:'#FFFFFF', bgHexRaw:'#FFFFFF'}), pickBgCream:()=>this.setState({bg:'#F7F3EA', bgHexRaw:'#F7F3EA'}), pickBgDark:()=>this.setState({bg:'#1D1D24', bgHexRaw:'#1D1D24'}),
      shSq:seg('sq',s.shape), shRd:seg('rd',s.shape), shDt:seg('dt',s.shape),
      isShSq:s.shape==='sq', isShRd:s.shape==='rd', isShDt:s.shape==='dt',
      pickShSq:()=>this.setState({shape:'sq'}), pickShRd:()=>this.setState({shape:'rd'}), pickShDt:()=>this.setState({shape:'dt'}),
      toggleLogo:()=>this.setState({logoOn:!s.logoOn}),
      logoOnFlag:s.logoOn, qrLogoSrc:s.logoSrc,
      uploadLogo:(e)=>{ const f = e.target.files && e.target.files[0]; if (!f) return;
        const r = new FileReader(); r.onload = () => { this.setState({logoSrc:r.result}); this.toast('Logo uploaded - auto-centered with the quiet zone kept.'); };
        r.readAsDataURL(f); },
      fgHexRaw:s.fgHexRaw, bgHexRaw:s.bgHexRaw,
      setFgHex:(e)=>{ const v = e.target.value; const m = /^#?([0-9a-fA-F]{6})$/.exec(v.trim());
        this.setState(m ? {fgHexRaw:v, fg:'#'+m[1].toUpperCase()} : {fgHexRaw:v}); },
      setBgHex:(e)=>{ const v = e.target.value; const m = /^#?([0-9a-fA-F]{6})$/.exec(v.trim());
        this.setState(m ? {bgHexRaw:v, bg:'#'+m[1].toUpperCase()} : {bgHexRaw:v}); },
      prevFg:s.fg, prevBg:s.bg,
      scanScore: score>=70?'Good':(score>=40?'Risky':'Poor'),
      scanPct: score+'%',
      scanColor: score>=70?'var(--success)':(score>=40?'var(--warning)':'var(--hard-block)'),
      scanRisky: score<70,
      finishCreate:()=>{
        const c = {id:'c'+Date.now(), name:s.newName, slug:'a1Xc9', dest:s.newDest.replace(/^https?:\/\//,''),
          type:({url:'Website URL',card:'vCard',wifi:'Wi-Fi',text:'Plain text',pdf:'PDF page',links:'Link page'})[s.newType],
          status:'active', scans:'0', unique:'0', created:'1 Sep 2026', fg:s.fg};
        this.setState({codes:[c,...s.codes], hasCodes:true, view:'codes', wizStep:1, threatState:'idle'});
        this.toast('Code created - it is live at qurl.to/a1Xc9.');
      },
      /* detail */
      onDetail:s.view==='detail',
      dStatusLbl: cur.status==='active'?'Active':(cur.status==='paused'?'Paused':'Quarantined'),
      dChipCls: cur.status==='active'?'ok':(cur.status==='paused'?'paused':'quar'),
      dIsActive:s.view==='detail' && cur.status==='active', dIsPaused:cur.status==='paused', dIsQuar:cur.status==='quarantined',
      dIsPausedOnDetail:s.view==='detail' && cur.status==='paused',
      dSlug:cur.slug, dDest:'https://'+cur.dest, dScans:cur.scans, dUnique:cur.unique, dCreated:cur.created, dType:cur.type,
      dSetDest:(e)=>this.setCode(cur.id,{dest:e.target.value.replace(/^https?:\/\//,'')}),
      dScanRunning:s.threatState==='running' && s.view==='detail',
      dRepoint:()=>{ this.setState({threatState:'running'});
        setTimeout(()=>{ this.setState({threatState:'idle'});
          if (this.state.codes.find(c=>c.id===cur.id).status==='quarantined') this.setCode(cur.id,{status:'active'});
          this.toast('Destination saved - scan passed, redirect updated.');
        }, 1100); },
      dPause:()=>this.pauseCode(cur.id),
      dResume:()=>{ this.setCode(cur.id,{status:'active'}); this.toast('Code resumed - redirect is live.'); },
      dAskDelete:()=>this.setState({deleteOpen:true, deleteFor:cur.id}),
      openExportCur:()=>this.setState({exportOpen:true, exportFor:cur.id}),
      showQuarCur:()=>this.setState({quarOpen:true}),
      copyLink:()=>this.toast('Link copied: qurl.to/'+cur.slug),
      redownload:()=>this.toast('Download started.'),
      rHour:seg('hour',s.range), rDay:seg('day',s.range), rWeek:seg('week',s.range), rMonth:seg('month',s.range),
      pickHour:()=>this.setState({range:'hour'}), pickDay:()=>this.setState({range:'day'}),
      pickWeek:()=>this.setState({range:'week'}), pickMonth:()=>this.setState({range:'month'}),
      bars: BARS[s.range].map(b=>({lbl:b.lbl, t:b.t+'%', u:Math.round(b.u*0.9)+'%', tTip:b.lbl+': '+b.t+' scans', uTip:b.lbl+': '+b.u+' unique'})),
      /* billing */
      onBilling:s.view==='billing', onAccount:s.view==='account',
      dunningOn:s.dunning,
      toggleDunning:()=>this.setState({dunning:!s.dunning}),
      fixPayment:()=>{ this.setState({dunning:false}); this.toast('Payment method updated - the retry succeeded.'); },
      /* plan-change flow (spec 015 US2 / FR-004 / FR-005: proration, entitlements apply on confirm) */
      planName:PLANS[s.plan].name, planPrice:PLANS[s.plan].price, planLimit:String(PLANS[s.plan].limit),
      usagePct:Math.min(100, Math.round(5/PLANS[s.plan].limit*100))+'%',
      planOpen:s.planOpen, planClosing:s.planClosing?'closing':'',
      openPlanDlg:()=>this.setState({planOpen:true, planClosing:false, planPick:null}),
      closePlanDlg:()=>{ this.setState({planClosing:true}); setTimeout(()=>this.setState({planOpen:false, planClosing:false, planPick:null}), 180); },
      pickStarter:(s.planPick||s.plan)==='starter'?'on':'', pickAdvanced:(s.planPick||s.plan)==='advanced'?'on':'',
      pickStarterAria:(s.planPick||s.plan)==='starter'?'true':'false', pickAdvancedAria:(s.planPick||s.plan)==='advanced'?'true':'false',
      curStarter:s.plan==='starter', curAdvanced:s.plan==='advanced',
      pickPlanStarter:()=>this.setState({planPick:'starter'}), pickPlanAdvanced:()=>this.setState({planPick:'advanced'}),
      planPicked:!!s.planPick && s.planPick!==s.plan,
      planProration:!!s.planPick && s.planPick!==s.plan,
      prorationCopy: s.planPick==='advanced'
        ? 'Upgrade applies immediately - you are charged the prorated difference for the rest of the period, and the new limits unlock right away.'
        : 'Downgrade applies immediately - the unused difference is credited via proration. Codes over the new limit keep working; you cannot create new ones past it.',
      confirmLbl: s.planPick==='advanced' ? 'Upgrade' : 'Downgrade',
      confirmPlan:()=>{ const to=s.planPick; this.setState({plan:to, planOpen:false, planClosing:false, planPick:null});
        this.toast(PLANS[to].name+' plan is active - entitlements applied.'); },
      cancelPlan:()=>this.toast('Plan set to cancel at period end - your codes pause then, nothing is deleted.', ()=>this.toast('Cancellation undone - your plan continues.')),
      changeCard:()=>this.setState({intgOpen:'card', intgClosing:false}),
      addWallet:()=>this.setState({intgOpen:'wallet', intgClosing:false}),
      /* INT law: third-party screens are placeholders - Next continues the flow as completed */
      cardLast4:s.cardLast4, walletFlag:s.walletOn, noWalletYet:!s.walletOn,
      intgOpenFlag:!!s.intgOpen, intgClosing:s.intgClosing?'closing':'',
      intgService: ({card:'Adyen - secure card form (SCA / 3DS2)', wallet:'Wallet sheet - Apple Pay / Google Pay', google:'Google - account chooser', googleUp:'Google - account chooser'})[s.intgOpen] || '',
      intgNote: ({card:'The processor-hosted card form opens here - qurl never touches raw card data (tokenized via Adyen, webhooks are the source of truth).',
                  wallet:'The device wallet sheet opens here and confirms with the platform authentication.',
                  google:'The Google account chooser and consent screen open here.',
                  googleUp:'The Google account chooser opens here - the email arrives already verified.'})[s.intgOpen] || '',
      closeIntg:()=>{ this.setState({intgClosing:true}); setTimeout(()=>this.setState({intgOpen:null, intgClosing:false}), 180); },
      intgNext:()=>{ const w=s.intgOpen; this.setState({intgOpen:null, intgClosing:false});
        if (w==='card') { this.setState({cardLast4:'8210'}); this.toast('Payment method updated - Visa ending 8210.'); }
        else if (w==='wallet') { this.setState({walletOn:true}); this.toast('Apple Pay added to your payment methods.'); }
        else if (w==='google') { this.setState({view:'codes', hasCodes:true}); this.toast('Signed in with Google.'); }
        else if (w==='googleUp') { this.setState({authTab:'up', signupStep:3}); this.toast('Google account connected - email already verified.'); } },
      signOutAll:()=>this.toast('Signed out on every other device.'),
      askDeleteAccount:()=>this.toast('Account deletion needs an email confirmation - check your inbox.'),
      /* overlays */
      exportOpen:s.exportOpen, exportClosing:s.exportClosing?'closing':'', exName:exCode.name,
      closeExport:()=>this.closeOv('export'),
      exPng:()=>this.toast('PNG exported - added to download history.'),
      exPdf:()=>this.toast('PDF exported with bleed marks.'),
      exSvg:()=>this.toast('SVG exported.'),
      deleteOpen:s.deleteOpen, deleteClosing:s.deleteClosing?'closing':'', delName:delCode.name,
      closeDelete:()=>this.closeOv('delete'),
      pauseInstead:()=>{ this.pauseCode(delCode.id); this.closeOv('delete'); },
      confirmDelete:()=>{ this.setState({codes:s.codes.filter(c=>c.id!==delCode.id), view:'codes'}); this.closeOv('delete'); this.toast('Code deleted - qurl.to/'+delCode.slug+' now returns not-found.'); },
      lockoutOpen:s.lockoutOpen, lockoutClosing:s.lockoutClosing?'closing':'',
      closeLockout:()=>this.closeOv('lockout'),
      resetFromLockout:()=>{ this.closeOv('lockout'); this.toast('Reset link sent - it ends the lockout immediately.'); },
      quarOpen:s.quarOpen, quarClosing:s.quarClosing?'closing':'',
      closeQuar:()=>this.closeOv('quar'),
      fixQuar:()=>{ this.closeOv('quar');
        if (s.view==='create') { this.setState({newDest:'https://brightcafe.co/autumn', threatState:'idle'}); }
        else { this.setState({view:'detail'}); }
      },
      /* toasts */
      toasts:s.toasts.map(t=>({...t, hasUndo:!!t.undoFn, undo:()=>{ if(t.undoFn) t.undoFn(); this.setState({toasts:this.state.toasts.filter(x=>x.id!==t.id)}); }})),
    };
  }

  render() {
    const v = this.renderVals()
    return (
      <div className="dcpage-subscriber">
        {/* ============ LOGIN / SIGNUP ============ */}{' '}
        {v.isLogin ? (<>
          <div className="login">
            <div className="grainfx" aria-hidden="true"/>{' '}
            <div className="lhero">
              <img src="assets/logo-white.svg" alt="qurl"/>{' '}
              <div className="word">qurl</div>{' '}
              <div className="tag">Dynamic QR codes with hosted pages, scan analytics and print-ready exports.</div>
            </div>{' '}
            <div className="lpane">
              <div>
                <h2><I v={v.authTitle}/> {v.isSignUp ? (<>
                    <button className="infoic" data-tt="7-day free trial, no card needed. You verify your email with a 6-digit code." data-ttp="b" aria-label="7-day free trial, no card needed. You verify your email with a 6-digit code.">
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 16v-4"/>
                        <path d="M12 8h.01"/>
                      </svg>
                    </button>
                  </>) : null}
                </h2>{' '}
                <p className="mut" style={{margin: '6px 0 0'}}>Demo prototype - the Subscriber role, the primary user of qurl.</p>
              </div>{' '}
              <div className="authtabs" data-component="Tabs" role="tablist">
                <button className={v.tabInCls} role="tab" onClick={v.pickSignIn}>Sign in</button>{' '}
                <button className={v.tabUpCls} role="tab" onClick={v.pickSignUp}>Sign up</button>
              </div>{' '}
              {v.isSignIn ? (<>
                <button className="gbtn" data-component="Button" onClick={v.doGoogle}>
                  <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v8"/>
                    <path d="M8 12h8"/>
                  </svg> Continue with Google</button>{' '}
                <div className="ordiv">or with email</div>{' '}
                <div className="ss-field">
                  <div className="ss-label" data-component="Label">Email</div>{' '}
                  <input className="ss-input" data-component="Input" value={v.email ?? ''} onChange={v.noop} aria-label="Email"/>
                </div>{' '}
                <div className="ss-field">
                  <div className="ss-label" data-component="Label">Password</div>{' '}
                  <input className="ss-input" data-component="Input" type="password" value="demo-2026" onChange={v.noop} aria-label="Password"/>
                </div>{' '}
                <label style={{display: 'flex', alignItems: 'center', gap: '8px', font: '400 12.5px/1.4 var(--font-sans)', color: 'var(--muted-foreground)', cursor: 'pointer'}}>
                  <input type="checkbox" checked={v.rememberOn ?? false} onChange={v.toggleRemember} data-component="Checkbox"/> Remember me on this device</label>{' '}
                <button className="ss-btn ss-btn--lg" data-component="Button" onClick={v.doLogin}>Sign in</button>{' '}
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <button className="linkbtn" onClick={v.doReset}>Forgot password?</button>{' '}
                  <button className="linkbtn" onClick={v.showLockout}>Locked out?</button>
                </div>
              </>) : null}{' '}
              {v.isSignUp ? (<>
                {v.signupStep1 ? (<>
                  <button className="gbtn" data-component="Button" onClick={v.doGoogleUp}>
                    <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 8v8"/>
                      <path d="M8 12h8"/>
                    </svg> Sign up with Google</button>{' '}
                  <div className="ordiv">or with email</div>{' '}
                  <div className="ss-field">
                    <div className="ss-label" data-component="Label">Email</div>{' '}
                    <input className="ss-input" data-component="Input" placeholder="you@company.com" onChange={v.noop} aria-label="Email"/>
                  </div>{' '}
                  <div className="ss-field">
                    <div className="ss-label" data-component="Label">Password</div>{' '}
                    <input className="ss-input" data-component="Input" type="password" placeholder="8+ characters" onChange={v.noop} aria-label="Password"/>
                  </div>{' '}
                  <button className="ss-btn ss-btn--lg" data-component="Button" onClick={v.sendOtp}>Continue</button>
                </>) : null}{' '}
                {v.signupStep2 ? (<>
                  <div className="ss-field">
                    <div className="ss-label" data-component="Label">Enter the 6-digit code we sent you</div>{' '}
                    <div className="otprow" data-component="InputOTP">
                      <input maxLength={1} value="4" onChange={v.noop} aria-label="Digit 1"/>
                      <input maxLength={1} value="8" onChange={v.noop} aria-label="Digit 2"/>
                      <input maxLength={1} value="1" onChange={v.noop} aria-label="Digit 3"/>
                      <input maxLength={1} value="9" onChange={v.noop} aria-label="Digit 4"/>
                      <input maxLength={1} value="0" onChange={v.noop} aria-label="Digit 5"/>
                      <input maxLength={1} value="6" onChange={v.noop} aria-label="Digit 6"/>
                    </div>
                  </div>{' '}
                  <button className="ss-btn ss-btn--lg" data-component="Button" onClick={v.verifyOtp}>Verify</button>{' '}
                  <button className="linkbtn" onClick={v.resendOtp}>Resend code</button>
                </>) : null}{' '}
                {v.signupStep3 ? (<>
                  <div className="ss-label" data-component="Label">What will you use QR codes for? (optional)</div>{' '}
                  <div className="tmplrow">
                    <button className={`tmpl ${v.uMenu ?? ''}`} onClick={v.pickUseMenu}>Restaurant menus</button>{' '}
                    <button className={`tmpl ${v.uRetail ?? ''}`} onClick={v.pickUseRetail}>Retail</button>{' '}
                    <button className={`tmpl ${v.uEvents ?? ''}`} onClick={v.pickUseEvents}>Events</button>{' '}
                    <button className={`tmpl ${v.uCard ?? ''}`} onClick={v.pickUseCard}>Business cards</button>
                  </div>{' '}
                  <button className="ss-btn ss-btn--lg" data-component="Button" onClick={v.finishSignup}>Start trial</button>{' '}
                  <button className="linkbtn" onClick={v.skipSignupExtras}>Skip for now</button>
                </>) : null}
              </>) : null}
            </div>
          </div>
        </>) : null}{' '}
        {/* ============ APP SHELL ============ */}{' '}
        {v.isApp ? (<>
          <div className={`app ${v.groundCls ?? ''} ${v.railCls ?? ''} ${v.mopenCls ?? ''}`}>
            <div className="grainfx" aria-hidden="true"/>{' '}
            {v.mopen ? (<>
              <div className="mscrim" onClick={v.closeMobileNav}/>
            </>) : null}{' '}
            <nav className="side" data-component="SidebarNav" aria-label="Main navigation">
              <div className="grainfx grainfx--in" aria-hidden="true"/>{' '}
              <div className="logo">
                {v.isDark ? (<>
                  <img className="mark" src="assets/logo-white.svg" alt=""/>
                </>) : null}
                {v.isLight ? (<>
                  <img className="mark" src="assets/logo.svg" alt=""/>
                </>) : null}
                <span className="word">qurl</span>
              </div>{' '}
              <button className={`nitem ${v.navCodes ?? ''}`} data-tip="My codes" onClick={v.goCodes}>
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                <span className="nlab">My codes</span>
              </button>{' '}
              <button className={`nitem ${v.navCreate ?? ''}`} data-tip="Create code" onClick={v.goCreate}>
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14"/>
                  <path d="M12 5v14"/>
                </svg>{' '}
                <span className="nlab">Create code</span>
              </button>{' '}
              <button className={`nitem ${v.navBillingSub ?? ''}`} data-tip="Billing" onClick={v.goBilling}>
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="14" x="2" y="5" rx="2"/>
                  <line x1="2" x2="22" y1="10" y2="10"/>
                </svg>{' '}
                <span className="nlab">Billing</span>
              </button>{' '}
              <button className={`nitem ${v.navAccountSub ?? ''}`} data-tip="Account" onClick={v.goAccount}>
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>{' '}
                <span className="nlab">Account</span>
              </button>{' '}
              <div className="sfoot">
                <button className="moderow" data-tip="Dark mode" onClick={v.toggleMode} role="switch" aria-checked={v.darkAria} aria-label="Dark mode">
                  {v.isDark ? (<>
                    <span>
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
                      </svg>
                    </span>
                  </>) : null}{' '}
                  {v.isLight ? (<>
                    <span>
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="4"/>
                        <path d="M12 2v2"/>
                        <path d="M12 20v2"/>
                        <path d="m4.93 4.93 1.41 1.41"/>
                        <path d="m17.66 17.66 1.41 1.41"/>
                        <path d="M2 12h2"/>
                        <path d="M20 12h2"/>
                        <path d="m6.34 17.66-1.41 1.41"/>
                        <path d="m19.07 4.93-1.41 1.41"/>
                      </svg>
                    </span>
                  </>) : null}{' '}
                  <span className="nlab">Dark mode</span>{' '}
                  <span className="ss-switch" data-component="Switch" data-state={v.modeState}>
                    <span className="ss-switch__thumb"/>
                  </span>
                </button>
              </div>
            </nav>{' '}
            <button className="edgetgl" onClick={v.toggleSidebar} aria-label="Toggle sidebar" data-tt="Collapse or expand" data-ttp="r" data-component="Button">
              {v.railOff ? (<>
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m11 17-5-5 5-5"/>
                  <path d="m18 17-5-5 5-5"/>
                </svg>
              </>) : null}{' '}
              {v.railOn ? (<>
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m6 17 5-5-5-5"/>
                  <path d="m13 17 5-5-5-5"/>
                </svg>
              </>) : null}
            </button>{' '}
            <div className="main">
              <header className="topbar">
                <div className="grainfx grainfx--in" aria-hidden="true"/>{' '}
                <button className="icbtn mnavbtn" onClick={v.toggleSidebar} aria-label="Open navigation" data-tt="Open navigation" data-ttp="b">
                  <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="4" x2="20" y1="6" y2="6"/>
                    <line x1="4" x2="20" y1="12" y2="12"/>
                    <line x1="4" x2="20" y1="18" y2="18"/>
                  </svg>
                </button>{' '}
                <div className="gsearch" data-component="Input">
                  <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"/>
                    <circle cx="11" cy="11" r="8"/>
                  </svg>
                  <input className="ss-input" placeholder="Search codes" onChange={v.search} aria-label="Search codes"/>
                </div>{' '}
                <div className="tsp"/>{' '}
                <div className="bellwrap">
                  <button className={`icbtn ${v.bellDot ?? ''}`} onClick={v.toggleNotif} aria-label="Notifications" data-tt="Notifications" data-ttp="b" aria-haspopup="menu">
                    <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M10.268 21a2 2 0 0 0 3.464 0"/>
                      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>
                    </svg>
                  </button>{' '}
                  {v.notifOpen ? (<>
                    <div className="hmenu" role="menu" aria-label="Notifications">
                      <div className="mhd">Notifications</div>{' '}
                      <button className="mitem" onClick={v.notifPay}>
                        <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{color: 'var(--warning)'}}>
                          <rect width="20" height="14" x="2" y="5" rx="2"/>
                          <line x1="2" x2="22" y1="10" y2="10"/>
                        </svg>
                        <span>
                          <b>Payment failed</b>We retry automatically for 14 days - your codes keep working.</span>
                      </button>{' '}
                      <button className="mitem" onClick={v.notifLimit}>
                        <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{color: 'var(--hard-block)'}}>
                          <path d="M16 7h6v6"/>
                          <path d="m22 7-8.5 8.5-5-5L2 17"/>
                        </svg>
                        <span>
                          <b>Plan limit reached</b>5 of 5 dynamic codes in use - upgrade to add more.</span>
                      </button>
                    </div>
                  </>) : null}
                </div>{' '}
                <div className="profwrap">
                  <button className="avbtn" data-component="Avatar" onClick={v.toggleProfile} aria-label="Profile menu" data-tt="Profile" data-ttp="b" aria-haspopup="menu">MP</button>{' '}
                  {v.profileOpen ? (<>
                    <div className="hmenu" role="menu" aria-label="Profile">
                      <div className="mitem" style={{cursor: 'default'}}>
                        <span>
                          <b>Maya Petrova</b>maya@brightcafe.co</span>
                      </div>{' '}
                      <button className="tcard" onClick={v.goBillingFromMenu} aria-label="Plan status - open billing">
                        <span className="trow">
                          <span><I v={v.planName}/> plan</span>
                          <span className="mut">5 of <I v={v.planLimit}/> codes</span>
                        </span>{' '}
                        <span className="tr">
                          <span className="fl" style={{width: v.usagePct}}/>
                        </span>
                      </button>{' '}
                      <button className="mitem" onClick={v.doLogout}>
                        <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m16 17 5-5-5-5"/>
                          <path d="M21 12H9"/>
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                        </svg>
                        <span>Sign out</span>
                      </button>
                    </div>
                  </>) : null}
                </div>
              </header>{' '}
              <div className={`content ${v.contentCls ?? ''}`}>
                <div className="ptitle" data-component="PageTitle">
                  {v.onDetail ? (<>
                    <button className="icbtn" onClick={v.goCodes} aria-label="Back to codes" data-tt="Back to codes" data-ttp="b">
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m12 19-7-7 7-7"/>
                        <path d="M19 12H5"/>
                      </svg>
                    </button>
                  </>) : null}{' '}
                  {v.onCreate ? (<>
                    <button className="icbtn" onClick={v.wizBack} aria-label={v.wizBackTt} data-tt={v.wizBackTt} data-ttp="b">
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m12 19-7-7 7-7"/>
                        <path d="M19 12H5"/>
                      </svg>
                    </button>
                  </>) : null}{' '}
                  <h1><I v={v.pageTitle}/></h1>{' '}
                  {v.onDetail ? (<>
                    <span className={`chip ${v.dChipCls ?? ''}`}><I v={v.dStatusLbl}/></span>
                  </>) : null}{' '}
                  {v.onBilling ? (<>
                    <button className="infoic" data-tt="PDF report export and the near-real-time live scan view arrive in Phase 2." data-ttp="b" aria-label="PDF report export and the near-real-time live scan view arrive in Phase 2.">
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 16v-4"/>
                        <path d="M12 8h.01"/>
                      </svg>
                    </button>
                  </>) : null}{' '}
                  <div className="tsp"/>{' '}
                  {v.showStyleActions ? (<>
                    <span className="sactions">
                      <button className="ss-btn" data-component="Button" onClick={v.finishCreate}>Create</button>
                    </span>
                  </>) : null}{' '}
                  {v.showCreateAction ? (<>
                    <button className="ss-btn" data-component="Button" onClick={v.goCreate}>
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14"/>
                        <path d="M12 5v14"/>
                      </svg> Create</button>
                  </>) : null}{' '}
                  {v.onDetail ? (<>
                    <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.openExportCur}>
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 15V3"/>
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <path d="m7 10 5 5 5-5"/>
                      </svg> Export</button>
                  </>) : null}{' '}
                  {v.dIsActive ? (<>
                    <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.dPause}>Pause</button>
                  </>) : null}{' '}
                  {v.dIsPausedOnDetail ? (<>
                    <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.dResume}>Resume</button>
                  </>) : null}{' '}
                  {v.onDetail ? (<>
                    <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.dAskDelete} style={{color: 'var(--hard-block)'}}>Delete</button>
                  </>) : null}
                </div>{' '}
                {/* ============ MY CODES ============ */}{' '}
                {v.onCodes ? (<>
                  {v.hasCodes ? (<>
                    <section className="sect">
                      <div className="grid4">
                        <div className="ocard kpi" data-component="Card">
                          <span className="klbl">Scans</span>
                          <span className="kval">1,284</span>
                          <span className="kdelta up">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '13px', height: '13px'}}>
                              <path d="M16 7h6v6"/>
                              <path d="m22 7-8.5 8.5-5-5L2 17"/>
                            </svg> +18% vs last week</span>{' '}
                          <span className="spark">
                            <i style={{height: '30%'}} data-tt="Mon: 94 scans"/>
                            <i style={{height: '45%'}} data-tt="Tue: 142 scans"/>
                            <i style={{height: '38%'}} data-tt="Wed: 120 scans"/>
                            <i style={{height: '62%'}} data-tt="Thu: 195 scans"/>
                            <i style={{height: '55%'}} data-tt="Fri: 173 scans"/>
                            <i style={{height: '78%'}} data-tt="Sat: 245 scans"/>
                            <i className="hot" style={{height: '100%'}} data-tt="Sun: 315 scans"/>
                          </span>
                        </div>{' '}
                        <div className="ocard kpi" data-component="Card">
                          <span className="klbl">Unique visitors</span>
                          <span className="kval">947</span>
                          <span className="kdelta up">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '13px', height: '13px'}}>
                              <path d="M16 7h6v6"/>
                              <path d="m22 7-8.5 8.5-5-5L2 17"/>
                            </svg> +11%</span>{' '}
                          <span className="spark">
                            <i style={{height: '40%'}} data-tt="Mon: 97 unique"/>
                            <i style={{height: '35%'}} data-tt="Tue: 85 unique"/>
                            <i style={{height: '52%'}} data-tt="Wed: 127 unique"/>
                            <i style={{height: '48%'}} data-tt="Thu: 117 unique"/>
                            <i style={{height: '66%'}} data-tt="Fri: 161 unique"/>
                            <i style={{height: '60%'}} data-tt="Sat: 146 unique"/>
                            <i className="hot" style={{height: '88%'}} data-tt="Sun: 214 unique"/>
                          </span>
                        </div>{' '}
                        <div className="ocard kpi" data-component="Card">
                          <span className="klbl">Active codes</span>
                          <span className="kval">4 of 5</span>
                          <span className="kdelta flat">1 paused - plan limit <I v={v.planLimit}/></span>{' '}
                          <span className="spark">
                            <i style={{height: '80%'}} data-tt="Mon: 4 of 5 active"/>
                            <i style={{height: '80%'}} data-tt="Tue: 4 of 5 active"/>
                            <i style={{height: '80%'}} data-tt="Wed: 4 of 5 active"/>
                            <i style={{height: '80%'}} data-tt="Thu: 4 of 5 active"/>
                            <i className="hot" style={{height: '80%'}} data-tt="Fri: 5 of 5 active"/>
                            <i className="hot" style={{height: '80%'}} data-tt="Sat: 5 of 5 active"/>
                            <i className="hot" style={{height: '80%'}} data-tt="Sun: 5 of 5 active"/>
                          </span>
                        </div>{' '}
                        <div className="ocard kpi" data-component="Card">
                          <span className="klbl">Top code</span>
                          <span className="kval" style={{fontSize: '19px', lineHeight: '1.3'}}>Lunch menu</span>
                          <span className="kdelta up">612 scans this week</span>{' '}
                          <span className="spark">
                            <i style={{height: '25%'}} data-tt="Mon: 34 scans"/>
                            <i style={{height: '60%'}} data-tt="Tue: 82 scans"/>
                            <i style={{height: '45%'}} data-tt="Wed: 62 scans"/>
                            <i style={{height: '82%'}} data-tt="Thu: 112 scans"/>
                            <i style={{height: '70%'}} data-tt="Fri: 96 scans"/>
                            <i className="hot" style={{height: '100%'}} data-tt="Sat: 137 scans"/>
                            <i style={{height: '64%'}} data-tt="Sun: 89 scans"/>
                          </span>
                        </div>
                      </div>
                    </section>{' '}
                    <section className="sect">
                      <h2>Codes <span style={{color: 'var(--muted-foreground)', opacity: '.7', padding: '0 2px'}}>|</span> <I v={v.codeCount}/></h2>{' '}
                      <div className="filters" style={{display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap'}}>
                        <span className="selwrap">
                          <button className="ss-select-trigger" onClick={v.toggleFolderMenu} aria-haspopup="listbox" aria-expanded={v.folderMenuAria} aria-label="Folder"><I v={v.folderLbl}/> <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                              <path d="m6 9 6 6 6-6"/>
                            </svg>
                          </button>{' '}
                          {v.folderMenuOpen ? (<>
                            <div className="hmenu selmenu" role="listbox" aria-label="Folder">
                              {(v.folderOpts || []).map((o, i0) => (<React.Fragment key={i0}>
                                <button className="mitem" role="option" aria-selected={o.selAria} onClick={o.pick}>
                                  <span style={{width: '16px', flex: 'none', display: 'inline-flex'}}>
                                    {o.sel ? (<>
                                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '14px', height: '14px'}}>
                                        <path d="M20 6 9 17l-5-5"/>
                                      </svg>
                                    </>) : null}
                                  </span>
                                  <span><I v={o.name}/></span>
                                </button>
                              </React.Fragment>))}
                            </div>
                          </>) : null}
                        </span>{' '}
                        <button className="icbtn" onClick={v.openNewFolder} aria-label="New folder" data-tt="New folder" data-ttp="b">
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                          </svg>
                        </button>{' '}
                        <div className="chipgroup" data-component="ChipGroup" role="group" aria-label="Status filter">
                          <button className={`segbtn ${v.fAll ?? ''}`} onClick={v.filtAll}>All</button>{' '}
                          <button className={`segbtn ${v.fAct ?? ''}`} onClick={v.filtAct}>Active</button>{' '}
                          <button className={`segbtn ${v.fPau ?? ''}`} onClick={v.filtPau}>Paused</button>{' '}
                          <button className={`segbtn ${v.fQua ?? ''}`} onClick={v.filtQua}>Quarantined</button>
                        </div>
                      </div>{' '}
                      {v.bulkOn ? (<>
                        <div className="bulkbar" data-component="Toolbar">
                          <span><I v={v.bulkCount}/> selected</span>{' '}
                          <span className="mut" style={{fontWeight: '400'}}>Move to:</span>{' '}
                          <div className="chipgroup" data-component="ChipGroup" role="group" aria-label="Move to folder">
                            {(v.moveChips || []).map((m, i0) => (<React.Fragment key={i0}>
                              <button className="segbtn" onClick={m.move}><I v={m.name}/></button>
                            </React.Fragment>))}
                          </div>{' '}
                          <div className="tsp"/>{' '}
                          <button className="linkbtn" onClick={v.clearSel}>Clear</button>
                        </div>
                      </>) : null}{' '}
                      <div>
                        {(v.rows || []).map((r, i0) => (<React.Fragment key={i0}>
                          <div className="ocard coderow" data-component="Item">
                            <span className="csel">
                              <input type="checkbox" checked={r.selOn ?? false} onChange={r.toggleSel} data-component="Checkbox" aria-label="Select code"/>
                            </span>
                            <span className="cmedia">
                              <span className="qthumb" style={{color: r.fg}}>
                                <svg viewBox="0 0 21 21" aria-hidden="true">
                                  <path fill="currentColor" d="M0 0h1v1H0zM1 0h1v1H1zM2 0h1v1H2zM3 0h1v1H3zM4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM8 0h1v1H8zM9 0h1v1H9zM11 0h1v1H11zM14 0h1v1H14zM15 0h1v1H15zM16 0h1v1H16zM17 0h1v1H17zM18 0h1v1H18zM19 0h1v1H19zM20 0h1v1H20zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM9 1h1v1H9zM11 1h1v1H11zM12 1h1v1H12zM14 1h1v1H14zM20 1h1v1H20zM0 2h1v1H0zM2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM6 2h1v1H6zM8 2h1v1H8zM9 2h1v1H9zM10 2h1v1H10zM12 2h1v1H12zM14 2h1v1H14zM16 2h1v1H16zM17 2h1v1H17zM18 2h1v1H18zM20 2h1v1H20zM0 3h1v1H0zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM6 3h1v1H6zM8 3h1v1H8zM12 3h1v1H12zM14 3h1v1H14zM16 3h1v1H16zM17 3h1v1H17zM18 3h1v1H18zM20 3h1v1H20zM0 4h1v1H0zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM6 4h1v1H6zM9 4h1v1H9zM11 4h1v1H11zM12 4h1v1H12zM14 4h1v1H14zM16 4h1v1H16zM17 4h1v1H17zM18 4h1v1H18zM20 4h1v1H20zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM9 5h1v1H9zM11 5h1v1H11zM14 5h1v1H14zM20 5h1v1H20zM0 6h1v1H0zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM15 6h1v1H15zM16 6h1v1H16zM17 6h1v1H17zM18 6h1v1H18zM19 6h1v1H19zM20 6h1v1H20zM9 7h1v1H9zM11 7h1v1H11zM12 7h1v1H12zM0 8h1v1H0zM2 8h1v1H2zM3 8h1v1H3zM6 8h1v1H6zM7 8h1v1H7zM10 8h1v1H10zM15 8h1v1H15zM17 8h1v1H17zM18 8h1v1H18zM20 8h1v1H20zM1 9h1v1H1zM7 9h1v1H7zM16 9h1v1H16zM0 10h1v1H0zM1 10h1v1H1zM3 10h1v1H3zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM10 10h1v1H10zM11 10h1v1H11zM12 10h1v1H12zM14 10h1v1H14zM15 10h1v1H15zM20 10h1v1H20zM0 11h1v1H0zM1 11h1v1H1zM4 11h1v1H4zM5 11h1v1H5zM7 11h1v1H7zM8 11h1v1H8zM11 11h1v1H11zM12 11h1v1H12zM13 11h1v1H13zM14 11h1v1H14zM0 12h1v1H0zM5 12h1v1H5zM6 12h1v1H6zM7 12h1v1H7zM8 12h1v1H8zM10 12h1v1H10zM11 12h1v1H11zM12 12h1v1H12zM13 12h1v1H13zM14 12h1v1H14zM15 12h1v1H15zM16 12h1v1H16zM17 12h1v1H17zM18 12h1v1H18zM19 12h1v1H19zM20 12h1v1H20zM10 13h1v1H10zM11 13h1v1H11zM12 13h1v1H12zM13 13h1v1H13zM14 13h1v1H14zM19 13h1v1H19zM20 13h1v1H20zM0 14h1v1H0zM1 14h1v1H1zM2 14h1v1H2zM3 14h1v1H3zM4 14h1v1H4zM5 14h1v1H5zM6 14h1v1H6zM8 14h1v1H8zM9 14h1v1H9zM11 14h1v1H11zM12 14h1v1H12zM15 14h1v1H15zM17 14h1v1H17zM0 15h1v1H0zM6 15h1v1H6zM9 15h1v1H9zM10 15h1v1H10zM11 15h1v1H11zM15 15h1v1H15zM16 15h1v1H16zM0 16h1v1H0zM2 16h1v1H2zM3 16h1v1H3zM4 16h1v1H4zM6 16h1v1H6zM10 16h1v1H10zM12 16h1v1H12zM13 16h1v1H13zM14 16h1v1H14zM15 16h1v1H15zM16 16h1v1H16zM19 16h1v1H19zM0 17h1v1H0zM2 17h1v1H2zM3 17h1v1H3zM4 17h1v1H4zM6 17h1v1H6zM10 17h1v1H10zM11 17h1v1H11zM12 17h1v1H12zM13 17h1v1H13zM14 17h1v1H14zM0 18h1v1H0zM2 18h1v1H2zM3 18h1v1H3zM4 18h1v1H4zM6 18h1v1H6zM8 18h1v1H8zM14 18h1v1H14zM16 18h1v1H16zM19 18h1v1H19zM20 18h1v1H20zM0 19h1v1H0zM6 19h1v1H6zM10 19h1v1H10zM11 19h1v1H11zM12 19h1v1H12zM15 19h1v1H15zM19 19h1v1H19zM0 20h1v1H0zM1 20h1v1H1zM2 20h1v1H2zM3 20h1v1H3zM4 20h1v1H4zM5 20h1v1H5zM6 20h1v1H6zM8 20h1v1H8zM9 20h1v1H9zM14 20h1v1H14zM17 20h1v1H17zM18 20h1v1H18zM19 20h1v1H19zM20 20h1v1H20z"/>
                                </svg>
                              </span>{' '}
                              <span className={`chip cchip-ov ${r.chipCls ?? ''}`} aria-hidden="true"><I v={r.statusLbl}/></span>
                            </span>{' '}
                            <span className="cmain" onClick={r.open} role="link" aria-label="Open code details">
                              <span className="cname"><I v={r.name}/></span>{' '}
                              <span className="cdest">qurl.to/<I v={r.slug}/><svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '11px', height: '11px', verticalAlign: '-1px', margin: '0 5px'}}>
                                  <path d="M5 12h14"/>
                                  <path d="m12 5 7 7-7 7"/>
                                </svg><I v={r.dest}/></span>{' '}
                              <span className="cmeta">
                                <span className={`chip ${r.chipCls ?? ''}`}><I v={r.statusLbl}/></span>
                                <span className="cscanx"><I v={r.scans}/> scans</span>
                                <span className="cfold"><I v={r.folder}/></span>
                              </span>
                            </span>{' '}
                            <span className="rowact">
                              <button className="iact" onClick={r.openExport} aria-label="Export" data-tt="Export" data-ttp="tl">
                                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M12 15V3"/>
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                  <path d="m7 10 5 5 5-5"/>
                                </svg>
                              </button>{' '}
                              {r.isActive ? (<>
                                <button className="iact" onClick={r.pause} aria-label="Pause code" data-tt="Pause - printed codes stay safe" data-ttp="tl">
                                  <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <rect x="14" y="3" width="5" height="18" rx="1"/>
                                    <rect x="5" y="3" width="5" height="18" rx="1"/>
                                  </svg>
                                </button>
                              </>) : null}{' '}
                              {r.isPaused ? (<>
                                <button className="iact" onClick={r.resume} aria-label="Resume code" data-tt="Resume" data-ttp="tl">
                                  <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <polygon points="6 3 20 12 6 21 6 3"/>
                                  </svg>
                                </button>
                              </>) : null}{' '}
                              {r.isQuar ? (<>
                                <button className="iact" onClick={r.showQuar} aria-label="Why quarantined" data-tt="Why quarantined" data-ttp="tl">
                                  <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                                    <path d="M12 8v4"/>
                                    <path d="M12 16h.01"/>
                                  </svg>
                                </button>
                              </>) : null}{' '}
                              <button className="iact" onClick={r.askDelete} aria-label="Delete code" data-tt="Delete" data-ttp="tl">
                                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M10 11v6"/>
                                  <path d="M14 11v6"/>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
                                  <path d="M3 6h18"/>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                </svg>
                              </button>
                            </span>{' '}
                            <span className="rowact-b">
                              <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={r.openExport}>Export</button>{' '}
                              {r.isActive ? (<>
                                <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={r.pause}>Pause</button>
                              </>) : null}{' '}
                              {r.isPaused ? (<>
                                <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={r.resume}>Resume</button>
                              </>) : null}{' '}
                              {r.isQuar ? (<>
                                <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={r.showQuar}>Why?</button>
                              </>) : null}{' '}
                              <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={r.askDelete} style={{color: 'var(--hard-block)'}}>Delete</button>
                            </span>
                          </div>
                        </React.Fragment>))}{' '}
                        {v.noResults ? (<>
                          <div className="ocard empty">
                            <span className="eqr">
                              <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '28px', height: '28px'}} aria-hidden="true">
                                <path d="m21 21-4.34-4.34"/>
                                <circle cx="11" cy="11" r="8"/>
                              </svg>
                            </span>{' '}
                            <h3>Nothing matches</h3>
                            <p>No codes match this search and filter. Clear them to see all <I v={v.totalCodes}/> codes.</p>{' '}
                            <button className="ss-btn ss-btn--outline" data-component="Button" onClick={v.clearFilters}>Clear</button>
                          </div>
                        </>) : null}
                      </div>
                    </section>
                  </>) : null}{' '}
                  {v.noCodesYet ? (<>
                    <section className="sect">
                      <div className="ocard empty" data-component="Empty">
                        <span className="eqr">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '32px', height: '32px'}} aria-hidden="true">
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
                          </svg>
                        </span>{' '}
                        <h3>Create your first code</h3>{' '}
                        <p>Pick a content type, style it with a live preview, and download or host it. Printed codes stay editable - you can re-point the destination any time.</p>{' '}
                        <button className="ss-btn ss-btn--lg" data-component="Button" onClick={v.goCreate}>Create</button>
                      </div>
                    </section>
                  </>) : null}
                </>) : null}{' '}
                {/* ============ CREATE WIZARD ============ */}{' '}
                {v.onCreate ? (<>
                  <section className="sect">
                    <div className="steps" aria-label="Wizard progress">
                      <span className={`st ${v.st1 ?? ''}`}>
                        <span className="dot">1</span> Content</span>
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '14px', height: '14px', color: 'var(--muted-foreground)'}}>
                        <path d="m9 18 6-6-6-6"/>
                      </svg>{' '}
                      <span className={`st ${v.st2 ?? ''}`}>
                        <span className="dot">2</span> Destination</span>
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '14px', height: '14px', color: 'var(--muted-foreground)'}}>
                        <path d="m9 18 6-6-6-6"/>
                      </svg>{' '}
                      <span className={`st ${v.st3 ?? ''}`}>
                        <span className="dot">3</span> Style</span>
                    </div>
                  </section>{' '}
                  {v.wiz1 ? (<>
                    <section className="sect">
                      <h2>What should the code open?</h2>{' '}
                      <div className="typegrid" role="radiogroup" aria-label="Content type">
                        <button className={`typebtn ${v.tUrl ?? ''}`} onClick={v.pickUrl}>
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                          </svg>Website URL<span>Dynamic - re-point after print</span>
                        </button>{' '}
                        <button className={`typebtn ${v.tCard ?? ''}`} onClick={v.pickCard}>
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 2v2"/>
                            <path d="M17.915 22a6 6 0 0 0-12 0"/>
                            <path d="M8 2v2"/>
                            <circle cx="12" cy="10" r="4"/>
                            <rect x="3" y="4" width="18" height="16" rx="2"/>
                          </svg>vCard<span>Contact card saved on scan</span>
                        </button>{' '}
                        <button className={`typebtn ${v.tWifi ?? ''}`} onClick={v.pickWifi}>
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 20h.01"/>
                            <path d="M2 8.82a15 15 0 0 1 20 0"/>
                            <path d="M5 12.859a10 10 0 0 1 14 0"/>
                            <path d="M8.5 16.429a5 5 0 0 1 7 0"/>
                          </svg>Wi-Fi<span>Joins the network on scan</span>
                        </button>{' '}
                        <button className={`typebtn ${v.tText ?? ''}`} onClick={v.pickText}>
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="4 7 4 4 20 4 20 7"/>
                            <line x1="9" x2="15" y1="20" y2="20"/>
                            <line x1="12" x2="12" y1="4" y2="20"/>
                          </svg>Plain text<span>Shows a text snippet</span>
                        </button>{' '}
                        <button className={`typebtn ${v.tPdf ?? ''}`} onClick={v.pickPdf}>
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                          </svg>PDF document<span>Hosted page - read without downloading</span>
                        </button>{' '}
                        <button className={`typebtn ${v.tLinks ?? ''}`} onClick={v.pickLinks}>
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 12h.01"/>
                            <path d="M3 18h.01"/>
                            <path d="M3 6h.01"/>
                            <path d="M8 12h13"/>
                            <path d="M8 18h13"/>
                            <path d="M8 6h13"/>
                          </svg>Link page<span>One hosted page holding all your links</span>
                        </button>
                      </div>
                    </section>{' '}
                    <section className="sect">
                      <h2>Or start from a template <button className="infoic" data-tt="Templates prefill industry styling. Every field stays editable." aria-label="Templates prefill industry styling. Every field stays editable.">
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 16v-4"/>
                            <path d="M12 8h.01"/>
                          </svg>
                        </button>
                      </h2>{' '}
                      <div className="tmplrow">
                        <button className={`tmpl ${v.tmMenu ?? ''}`} onClick={v.pickTmplMenu}>Restaurant menu</button>{' '}
                        <button className={`tmpl ${v.tmRetail ?? ''}`} onClick={v.pickTmplRetail}>Retail promo</button>{' '}
                        <button className={`tmpl ${v.tmEvent ?? ''}`} onClick={v.pickTmplEvent}>Event ticket</button>{' '}
                        <button className={`tmpl ${v.tmRe ?? ''}`} onClick={v.pickTmplRe}>Real estate</button>{' '}
                        <button className={`tmpl ${v.tmBiz ?? ''}`} onClick={v.pickTmplBiz}>Business card</button>
                      </div>{' '}
                      <div className="fcact">
                        <button className="ss-btn" data-component="Button" onClick={v.toStep2}>Next</button>
                      </div>
                    </section>
                  </>) : null}{' '}
                  {v.wiz2 ? (<>
                    <section className="sect">
                      <h2>Where should it point?</h2>{' '}
                      <div className="ocard" style={{padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px'}}>
                        <div className="ss-field">
                          <div className="ss-label" data-component="Label">Code name</div>{' '}
                          <input className="ss-input" data-component="Input" value={v.newName ?? ''} onChange={v.setNewName} aria-label="Code name"/>
                        </div>{' '}
                        <div className="ss-field">
                          <div className="ss-label" data-component="Label"><I v={v.destLabel}/> <button className="infoic" data-tt={v.destInfo} aria-label={v.destInfo}>
                              <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 16v-4"/>
                                <path d="M12 8h.01"/>
                              </svg>
                            </button>
                          </div>{' '}
                          <input className="ss-input" data-component="Input" value={v.newDest ?? ''} onChange={v.setNewDest} placeholder="https://" aria-label="Destination"/>
                        </div>{' '}
                        {v.scanRunning ? (<>
                          <div className="scanline">
                            <span className="ss-spinner" data-component="Spinner"/> Scanning destination for threats...</div>
                        </>) : null}{' '}
                        {v.scanSafe ? (<>
                          <div className="scanline" style={{color: 'var(--success)'}}>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                              <path d="m9 12 2 2 4-4"/>
                            </svg> Destination is safe</div>
                        </>) : null}{' '}
                        {v.scanBad ? (<>
                          <div className="scanline" style={{color: 'var(--hard-block)'}}>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                              <path d="M12 8v4"/>
                              <path d="M12 16h.01"/>
                            </svg> Flagged as unsafe - fix the destination to continue</div>
                        </>) : null}{' '}
                        <div className="fcact">
                          {v.scanNotSafe ? (<>
                            <button className="ss-btn" data-component="Button" onClick={v.runScan}>Check</button>
                          </>) : null}{' '}
                          {v.scanSafe ? (<>
                            <button className="ss-btn" data-component="Button" onClick={v.toStep3}>Next</button>
                          </>) : null}
                        </div>{' '}
                        <button className="linkbtn" onClick={v.tryBadDest}>Demo: try an unsafe destination</button>
                      </div>
                    </section>
                  </>) : null}{' '}
                  {v.wiz3 ? (<>
                    <section className="sect grow">
                      <h2>Style it - the preview updates live</h2>{' '}
                      <div className="stylegrid">
                        <div className="ocard ctlcard" style={{padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                          <div className="ctl">
                            <span className="ctlk">Foreground</span>{' '}
                            <div className="swatches" role="radiogroup" aria-label="Foreground color">
                              <button className={`sw ${v.fgInk ?? ''}`} style={{background: '#131316'}} onClick={v.pickFgInk} aria-label="Ink"/>{' '}
                              <button className={`sw ${v.fgOrange ?? ''}`} style={{background: '#FE6800'}} onClick={v.pickFgOrange} aria-label="Orange"/>{' '}
                              <button className={`sw ${v.fgPurple ?? ''}`} style={{background: '#7A2BD9'}} onClick={v.pickFgPurple} aria-label="Purple"/>{' '}
                              <button className={`sw ${v.fgRed ?? ''}`} style={{background: '#E9445A'}} onClick={v.pickFgRed} aria-label="Red"/>{' '}
                              <button className={`sw ${v.fgLight ?? ''}`} style={{background: '#C9CBD6'}} onClick={v.pickFgLight} aria-label="Light gray"/>
                            </div>
                          </div>{' '}
                          <div className="hexrow">
                            <span className="swprev" style={{background: v.prevFg}}/>
                            <input className="ss-input" value={v.fgHexRaw ?? ''} onChange={v.setFgHex} maxLength={7} placeholder="#131316" aria-label="Custom foreground hex"/>
                            <span className="mut" style={{font: '400 11.5px/1.3 var(--font-sans)'}}>custom hex</span>
                          </div>{' '}
                          <div className="ctl">
                            <span className="ctlk">Background</span>{' '}
                            <div className="swatches" role="radiogroup" aria-label="Background color">
                              <button className={`sw ${v.bgWhite ?? ''}`} style={{background: '#FFFFFF'}} onClick={v.pickBgWhite} aria-label="White"/>{' '}
                              <button className={`sw ${v.bgCream ?? ''}`} style={{background: '#F7F3EA'}} onClick={v.pickBgCream} aria-label="Cream"/>{' '}
                              <button className={`sw ${v.bgDark ?? ''}`} style={{background: '#1D1D24'}} onClick={v.pickBgDark} aria-label="Dark"/>
                            </div>
                          </div>{' '}
                          <div className="hexrow">
                            <span className="swprev" style={{background: v.prevBg}}/>
                            <input className="ss-input" value={v.bgHexRaw ?? ''} onChange={v.setBgHex} maxLength={7} placeholder="#FFFFFF" aria-label="Custom background hex"/>
                            <span className="mut" style={{font: '400 11.5px/1.3 var(--font-sans)'}}>custom hex</span>
                          </div>{' '}
                          <div className="ctl">
                            <span className="ctlk">Module shape</span>{' '}
                            <div className="chipgroup" data-component="ChipGroup" role="group" aria-label="Module shape">
                              <button className={`segbtn ${v.shSq ?? ''}`} onClick={v.pickShSq}>Square</button>{' '}
                              <button className={`segbtn ${v.shRd ?? ''}`} onClick={v.pickShRd}>Rounded</button>{' '}
                              <button className={`segbtn ${v.shDt ?? ''}`} onClick={v.pickShDt}>Dots</button>
                            </div>
                          </div>{' '}
                          <div className="ctl">
                            <span className="ctlk">Extras</span>{' '}
                            <label style={{display: 'flex', alignItems: 'center', gap: '8px', font: '400 13px/1.4 var(--font-sans)', cursor: 'pointer'}}>
                              <input type="checkbox" onChange={v.toggleLogo} data-component="Checkbox"/> Center logo (auto-centered, quiet zone kept)</label>{' '}
                            {v.logoOnFlag ? (<>
                              <div className="uplrow">
                                <input type="file" accept="image/png,image/jpeg,image/svg+xml" onChange={v.uploadLogo} aria-label="Upload logo file"/>{' '}
                                <span className="mut" style={{font: '400 11.5px/1.4 var(--font-sans)'}}>PNG, JPG or SVG - auto-centered with the quiet zone kept. Your brand mark is used until you upload one.</span>
                              </div>
                            </>) : null}{' '}
                            <label style={{display: 'flex', alignItems: 'center', gap: '8px', font: '400 13px/1.4 var(--font-sans)', cursor: 'pointer'}}>
                              <input type="checkbox" checked={v.ctaOn ?? false} onChange={v.toggleCta} data-component="Checkbox"/> CTA frame: "Scan me"</label>
                          </div>
                        </div>{' '}
                        <div className="ocard prevwrap" data-component="Card">
                          <div className="qrstack">
                            <div className="prevqr" style={{background: v.prevBg, color: v.prevFg}}>
                              {v.isShSq ? (<>
                                <svg viewBox="0 0 21 21" aria-hidden="true">
                                  <path fill="currentColor" d="M0 0h1v1H0zM1 0h1v1H1zM2 0h1v1H2zM3 0h1v1H3zM4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM8 0h1v1H8zM9 0h1v1H9zM11 0h1v1H11zM14 0h1v1H14zM15 0h1v1H15zM16 0h1v1H16zM17 0h1v1H17zM18 0h1v1H18zM19 0h1v1H19zM20 0h1v1H20zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM9 1h1v1H9zM11 1h1v1H11zM12 1h1v1H12zM14 1h1v1H14zM20 1h1v1H20zM0 2h1v1H0zM2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM6 2h1v1H6zM8 2h1v1H8zM9 2h1v1H9zM10 2h1v1H10zM12 2h1v1H12zM14 2h1v1H14zM16 2h1v1H16zM17 2h1v1H17zM18 2h1v1H18zM20 2h1v1H20zM0 3h1v1H0zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM6 3h1v1H6zM8 3h1v1H8zM12 3h1v1H12zM14 3h1v1H14zM16 3h1v1H16zM17 3h1v1H17zM18 3h1v1H18zM20 3h1v1H20zM0 4h1v1H0zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM6 4h1v1H6zM9 4h1v1H9zM11 4h1v1H11zM12 4h1v1H12zM14 4h1v1H14zM16 4h1v1H16zM17 4h1v1H17zM18 4h1v1H18zM20 4h1v1H20zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM9 5h1v1H9zM11 5h1v1H11zM14 5h1v1H14zM20 5h1v1H20zM0 6h1v1H0zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM15 6h1v1H15zM16 6h1v1H16zM17 6h1v1H17zM18 6h1v1H18zM19 6h1v1H19zM20 6h1v1H20zM9 7h1v1H9zM11 7h1v1H11zM12 7h1v1H12zM0 8h1v1H0zM2 8h1v1H2zM3 8h1v1H3zM6 8h1v1H6zM7 8h1v1H7zM10 8h1v1H10zM15 8h1v1H15zM17 8h1v1H17zM18 8h1v1H18zM20 8h1v1H20zM1 9h1v1H1zM7 9h1v1H7zM16 9h1v1H16zM0 10h1v1H0zM1 10h1v1H1zM3 10h1v1H3zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM10 10h1v1H10zM11 10h1v1H11zM12 10h1v1H12zM14 10h1v1H14zM15 10h1v1H15zM20 10h1v1H20zM0 11h1v1H0zM1 11h1v1H1zM4 11h1v1H4zM5 11h1v1H5zM7 11h1v1H7zM8 11h1v1H8zM11 11h1v1H11zM12 11h1v1H12zM13 11h1v1H13zM14 11h1v1H14zM0 12h1v1H0zM5 12h1v1H5zM6 12h1v1H6zM7 12h1v1H7zM8 12h1v1H8zM10 12h1v1H10zM11 12h1v1H11zM12 12h1v1H12zM13 12h1v1H13zM14 12h1v1H14zM15 12h1v1H15zM16 12h1v1H16zM17 12h1v1H17zM18 12h1v1H18zM19 12h1v1H19zM20 12h1v1H20zM10 13h1v1H10zM11 13h1v1H11zM12 13h1v1H12zM13 13h1v1H13zM14 13h1v1H14zM19 13h1v1H19zM20 13h1v1H20zM0 14h1v1H0zM1 14h1v1H1zM2 14h1v1H2zM3 14h1v1H3zM4 14h1v1H4zM5 14h1v1H5zM6 14h1v1H6zM8 14h1v1H8zM9 14h1v1H9zM11 14h1v1H11zM12 14h1v1H12zM15 14h1v1H15zM17 14h1v1H17zM0 15h1v1H0zM6 15h1v1H6zM9 15h1v1H9zM10 15h1v1H10zM11 15h1v1H11zM15 15h1v1H15zM16 15h1v1H16zM0 16h1v1H0zM2 16h1v1H2zM3 16h1v1H3zM4 16h1v1H4zM6 16h1v1H6zM10 16h1v1H10zM12 16h1v1H12zM13 16h1v1H13zM14 16h1v1H14zM15 16h1v1H15zM16 16h1v1H16zM19 16h1v1H19zM0 17h1v1H0zM2 17h1v1H2zM3 17h1v1H3zM4 17h1v1H4zM6 17h1v1H6zM10 17h1v1H10zM11 17h1v1H11zM12 17h1v1H12zM13 17h1v1H13zM14 17h1v1H14zM0 18h1v1H0zM2 18h1v1H2zM3 18h1v1H3zM4 18h1v1H4zM6 18h1v1H6zM8 18h1v1H8zM14 18h1v1H14zM16 18h1v1H16zM19 18h1v1H19zM20 18h1v1H20zM0 19h1v1H0zM6 19h1v1H6zM10 19h1v1H10zM11 19h1v1H11zM12 19h1v1H12zM15 19h1v1H15zM19 19h1v1H19zM0 20h1v1H0zM1 20h1v1H1zM2 20h1v1H2zM3 20h1v1H3zM4 20h1v1H4zM5 20h1v1H5zM6 20h1v1H6zM8 20h1v1H8zM9 20h1v1H9zM14 20h1v1H14zM17 20h1v1H17zM18 20h1v1H18zM19 20h1v1H19zM20 20h1v1H20z"/>
                                </svg>
                              </>) : null}{' '}
                              {v.isShRd ? (<>
                                <svg viewBox="0 0 21 21" aria-hidden="true">
                                  <rect x="0.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="1.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="2.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="3.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="4.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="5.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="8.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="9.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="11.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="15.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="16.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="17.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="18.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="19.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="20.08" y="0.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="1.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="1.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="8.08" y="1.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="9.08" y="1.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="11.08" y="1.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="1.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="1.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="20.08" y="1.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="2.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="3.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="4.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="8.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="9.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="10.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="16.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="17.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="18.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="20.08" y="2.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="3.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="2.08" y="3.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="3.08" y="3.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="4.08" y="3.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="3.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="8.08" y="3.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="3.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="3.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="16.08" y="3.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="17.08" y="3.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="18.08" y="3.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="20.08" y="3.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="4.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="2.08" y="4.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="3.08" y="4.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="4.08" y="4.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="4.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="9.08" y="4.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="11.08" y="4.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="4.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="4.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="16.08" y="4.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="17.08" y="4.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="18.08" y="4.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="20.08" y="4.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="5.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="5.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="8.08" y="5.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="9.08" y="5.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="11.08" y="5.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="5.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="20.08" y="5.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="1.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="2.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="3.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="4.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="5.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="8.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="10.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="15.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="16.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="17.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="18.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="19.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="20.08" y="6.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="9.08" y="7.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="11.08" y="7.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="7.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="8.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="2.08" y="8.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="3.08" y="8.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="8.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="7.08" y="8.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="10.08" y="8.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="15.08" y="8.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="17.08" y="8.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="18.08" y="8.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="20.08" y="8.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="1.08" y="9.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="7.08" y="9.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="16.08" y="9.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="10.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="1.08" y="10.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="3.08" y="10.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="5.08" y="10.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="10.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="7.08" y="10.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="8.08" y="10.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="10.08" y="10.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="11.08" y="10.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="10.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="10.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="15.08" y="10.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="20.08" y="10.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="11.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="1.08" y="11.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="4.08" y="11.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="5.08" y="11.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="7.08" y="11.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="8.08" y="11.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="11.08" y="11.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="11.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="13.08" y="11.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="11.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="5.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="7.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="8.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="10.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="11.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="13.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="15.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="16.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="17.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="18.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="19.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="20.08" y="12.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="10.08" y="13.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="11.08" y="13.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="13.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="13.08" y="13.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="13.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="19.08" y="13.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="20.08" y="13.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="14.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="1.08" y="14.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="2.08" y="14.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="3.08" y="14.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="4.08" y="14.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="5.08" y="14.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="14.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="8.08" y="14.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="9.08" y="14.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="11.08" y="14.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="14.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="15.08" y="14.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="17.08" y="14.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="15.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="15.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="9.08" y="15.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="10.08" y="15.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="11.08" y="15.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="15.08" y="15.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="16.08" y="15.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="16.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="2.08" y="16.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="3.08" y="16.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="4.08" y="16.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="16.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="10.08" y="16.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="16.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="13.08" y="16.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="16.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="15.08" y="16.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="16.08" y="16.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="19.08" y="16.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="17.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="2.08" y="17.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="3.08" y="17.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="4.08" y="17.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="17.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="10.08" y="17.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="11.08" y="17.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="17.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="13.08" y="17.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="17.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="18.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="2.08" y="18.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="3.08" y="18.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="4.08" y="18.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="18.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="8.08" y="18.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="18.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="16.08" y="18.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="19.08" y="18.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="20.08" y="18.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="19.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="19.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="10.08" y="19.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="11.08" y="19.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="12.08" y="19.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="15.08" y="19.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="19.08" y="19.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="0.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="1.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="2.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="3.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="4.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="5.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="6.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="8.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="9.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="14.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="17.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="18.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="19.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                  <rect x="20.08" y="20.08" width=".84" height=".84" rx=".28" fill="currentColor"/>
                                </svg>
                              </>) : null}{' '}
                              {v.isShDt ? (<>
                                <svg viewBox="0 0 21 21" aria-hidden="true">
                                  <circle cx="0.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="1.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="2.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="3.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="4.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="5.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="8.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="9.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="11.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="15.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="16.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="17.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="18.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="19.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="20.5" cy="0.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="1.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="1.5" r=".42" fill="currentColor"/>
                                  <circle cx="8.5" cy="1.5" r=".42" fill="currentColor"/>
                                  <circle cx="9.5" cy="1.5" r=".42" fill="currentColor"/>
                                  <circle cx="11.5" cy="1.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="1.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="1.5" r=".42" fill="currentColor"/>
                                  <circle cx="20.5" cy="1.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="2.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="3.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="4.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="8.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="9.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="10.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="16.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="17.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="18.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="20.5" cy="2.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="3.5" r=".42" fill="currentColor"/>
                                  <circle cx="2.5" cy="3.5" r=".42" fill="currentColor"/>
                                  <circle cx="3.5" cy="3.5" r=".42" fill="currentColor"/>
                                  <circle cx="4.5" cy="3.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="3.5" r=".42" fill="currentColor"/>
                                  <circle cx="8.5" cy="3.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="3.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="3.5" r=".42" fill="currentColor"/>
                                  <circle cx="16.5" cy="3.5" r=".42" fill="currentColor"/>
                                  <circle cx="17.5" cy="3.5" r=".42" fill="currentColor"/>
                                  <circle cx="18.5" cy="3.5" r=".42" fill="currentColor"/>
                                  <circle cx="20.5" cy="3.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="4.5" r=".42" fill="currentColor"/>
                                  <circle cx="2.5" cy="4.5" r=".42" fill="currentColor"/>
                                  <circle cx="3.5" cy="4.5" r=".42" fill="currentColor"/>
                                  <circle cx="4.5" cy="4.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="4.5" r=".42" fill="currentColor"/>
                                  <circle cx="9.5" cy="4.5" r=".42" fill="currentColor"/>
                                  <circle cx="11.5" cy="4.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="4.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="4.5" r=".42" fill="currentColor"/>
                                  <circle cx="16.5" cy="4.5" r=".42" fill="currentColor"/>
                                  <circle cx="17.5" cy="4.5" r=".42" fill="currentColor"/>
                                  <circle cx="18.5" cy="4.5" r=".42" fill="currentColor"/>
                                  <circle cx="20.5" cy="4.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="5.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="5.5" r=".42" fill="currentColor"/>
                                  <circle cx="8.5" cy="5.5" r=".42" fill="currentColor"/>
                                  <circle cx="9.5" cy="5.5" r=".42" fill="currentColor"/>
                                  <circle cx="11.5" cy="5.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="5.5" r=".42" fill="currentColor"/>
                                  <circle cx="20.5" cy="5.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="1.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="2.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="3.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="4.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="5.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="8.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="10.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="15.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="16.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="17.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="18.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="19.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="20.5" cy="6.5" r=".42" fill="currentColor"/>
                                  <circle cx="9.5" cy="7.5" r=".42" fill="currentColor"/>
                                  <circle cx="11.5" cy="7.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="7.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="8.5" r=".42" fill="currentColor"/>
                                  <circle cx="2.5" cy="8.5" r=".42" fill="currentColor"/>
                                  <circle cx="3.5" cy="8.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="8.5" r=".42" fill="currentColor"/>
                                  <circle cx="7.5" cy="8.5" r=".42" fill="currentColor"/>
                                  <circle cx="10.5" cy="8.5" r=".42" fill="currentColor"/>
                                  <circle cx="15.5" cy="8.5" r=".42" fill="currentColor"/>
                                  <circle cx="17.5" cy="8.5" r=".42" fill="currentColor"/>
                                  <circle cx="18.5" cy="8.5" r=".42" fill="currentColor"/>
                                  <circle cx="20.5" cy="8.5" r=".42" fill="currentColor"/>
                                  <circle cx="1.5" cy="9.5" r=".42" fill="currentColor"/>
                                  <circle cx="7.5" cy="9.5" r=".42" fill="currentColor"/>
                                  <circle cx="16.5" cy="9.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="10.5" r=".42" fill="currentColor"/>
                                  <circle cx="1.5" cy="10.5" r=".42" fill="currentColor"/>
                                  <circle cx="3.5" cy="10.5" r=".42" fill="currentColor"/>
                                  <circle cx="5.5" cy="10.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="10.5" r=".42" fill="currentColor"/>
                                  <circle cx="7.5" cy="10.5" r=".42" fill="currentColor"/>
                                  <circle cx="8.5" cy="10.5" r=".42" fill="currentColor"/>
                                  <circle cx="10.5" cy="10.5" r=".42" fill="currentColor"/>
                                  <circle cx="11.5" cy="10.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="10.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="10.5" r=".42" fill="currentColor"/>
                                  <circle cx="15.5" cy="10.5" r=".42" fill="currentColor"/>
                                  <circle cx="20.5" cy="10.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="11.5" r=".42" fill="currentColor"/>
                                  <circle cx="1.5" cy="11.5" r=".42" fill="currentColor"/>
                                  <circle cx="4.5" cy="11.5" r=".42" fill="currentColor"/>
                                  <circle cx="5.5" cy="11.5" r=".42" fill="currentColor"/>
                                  <circle cx="7.5" cy="11.5" r=".42" fill="currentColor"/>
                                  <circle cx="8.5" cy="11.5" r=".42" fill="currentColor"/>
                                  <circle cx="11.5" cy="11.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="11.5" r=".42" fill="currentColor"/>
                                  <circle cx="13.5" cy="11.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="11.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="5.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="7.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="8.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="10.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="11.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="13.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="15.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="16.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="17.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="18.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="19.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="20.5" cy="12.5" r=".42" fill="currentColor"/>
                                  <circle cx="10.5" cy="13.5" r=".42" fill="currentColor"/>
                                  <circle cx="11.5" cy="13.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="13.5" r=".42" fill="currentColor"/>
                                  <circle cx="13.5" cy="13.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="13.5" r=".42" fill="currentColor"/>
                                  <circle cx="19.5" cy="13.5" r=".42" fill="currentColor"/>
                                  <circle cx="20.5" cy="13.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="14.5" r=".42" fill="currentColor"/>
                                  <circle cx="1.5" cy="14.5" r=".42" fill="currentColor"/>
                                  <circle cx="2.5" cy="14.5" r=".42" fill="currentColor"/>
                                  <circle cx="3.5" cy="14.5" r=".42" fill="currentColor"/>
                                  <circle cx="4.5" cy="14.5" r=".42" fill="currentColor"/>
                                  <circle cx="5.5" cy="14.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="14.5" r=".42" fill="currentColor"/>
                                  <circle cx="8.5" cy="14.5" r=".42" fill="currentColor"/>
                                  <circle cx="9.5" cy="14.5" r=".42" fill="currentColor"/>
                                  <circle cx="11.5" cy="14.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="14.5" r=".42" fill="currentColor"/>
                                  <circle cx="15.5" cy="14.5" r=".42" fill="currentColor"/>
                                  <circle cx="17.5" cy="14.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="15.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="15.5" r=".42" fill="currentColor"/>
                                  <circle cx="9.5" cy="15.5" r=".42" fill="currentColor"/>
                                  <circle cx="10.5" cy="15.5" r=".42" fill="currentColor"/>
                                  <circle cx="11.5" cy="15.5" r=".42" fill="currentColor"/>
                                  <circle cx="15.5" cy="15.5" r=".42" fill="currentColor"/>
                                  <circle cx="16.5" cy="15.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="16.5" r=".42" fill="currentColor"/>
                                  <circle cx="2.5" cy="16.5" r=".42" fill="currentColor"/>
                                  <circle cx="3.5" cy="16.5" r=".42" fill="currentColor"/>
                                  <circle cx="4.5" cy="16.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="16.5" r=".42" fill="currentColor"/>
                                  <circle cx="10.5" cy="16.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="16.5" r=".42" fill="currentColor"/>
                                  <circle cx="13.5" cy="16.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="16.5" r=".42" fill="currentColor"/>
                                  <circle cx="15.5" cy="16.5" r=".42" fill="currentColor"/>
                                  <circle cx="16.5" cy="16.5" r=".42" fill="currentColor"/>
                                  <circle cx="19.5" cy="16.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="17.5" r=".42" fill="currentColor"/>
                                  <circle cx="2.5" cy="17.5" r=".42" fill="currentColor"/>
                                  <circle cx="3.5" cy="17.5" r=".42" fill="currentColor"/>
                                  <circle cx="4.5" cy="17.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="17.5" r=".42" fill="currentColor"/>
                                  <circle cx="10.5" cy="17.5" r=".42" fill="currentColor"/>
                                  <circle cx="11.5" cy="17.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="17.5" r=".42" fill="currentColor"/>
                                  <circle cx="13.5" cy="17.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="17.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="18.5" r=".42" fill="currentColor"/>
                                  <circle cx="2.5" cy="18.5" r=".42" fill="currentColor"/>
                                  <circle cx="3.5" cy="18.5" r=".42" fill="currentColor"/>
                                  <circle cx="4.5" cy="18.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="18.5" r=".42" fill="currentColor"/>
                                  <circle cx="8.5" cy="18.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="18.5" r=".42" fill="currentColor"/>
                                  <circle cx="16.5" cy="18.5" r=".42" fill="currentColor"/>
                                  <circle cx="19.5" cy="18.5" r=".42" fill="currentColor"/>
                                  <circle cx="20.5" cy="18.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="19.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="19.5" r=".42" fill="currentColor"/>
                                  <circle cx="10.5" cy="19.5" r=".42" fill="currentColor"/>
                                  <circle cx="11.5" cy="19.5" r=".42" fill="currentColor"/>
                                  <circle cx="12.5" cy="19.5" r=".42" fill="currentColor"/>
                                  <circle cx="15.5" cy="19.5" r=".42" fill="currentColor"/>
                                  <circle cx="19.5" cy="19.5" r=".42" fill="currentColor"/>
                                  <circle cx="0.5" cy="20.5" r=".42" fill="currentColor"/>
                                  <circle cx="1.5" cy="20.5" r=".42" fill="currentColor"/>
                                  <circle cx="2.5" cy="20.5" r=".42" fill="currentColor"/>
                                  <circle cx="3.5" cy="20.5" r=".42" fill="currentColor"/>
                                  <circle cx="4.5" cy="20.5" r=".42" fill="currentColor"/>
                                  <circle cx="5.5" cy="20.5" r=".42" fill="currentColor"/>
                                  <circle cx="6.5" cy="20.5" r=".42" fill="currentColor"/>
                                  <circle cx="8.5" cy="20.5" r=".42" fill="currentColor"/>
                                  <circle cx="9.5" cy="20.5" r=".42" fill="currentColor"/>
                                  <circle cx="14.5" cy="20.5" r=".42" fill="currentColor"/>
                                  <circle cx="17.5" cy="20.5" r=".42" fill="currentColor"/>
                                  <circle cx="18.5" cy="20.5" r=".42" fill="currentColor"/>
                                  <circle cx="19.5" cy="20.5" r=".42" fill="currentColor"/>
                                  <circle cx="20.5" cy="20.5" r=".42" fill="currentColor"/>
                                </svg>
                              </>) : null}{' '}
                              {v.logoOnFlag ? (<>
                                <img className="qlogo" src={v.qrLogoSrc} alt=""/>
                              </>) : null}
                            </div>{' '}
                            {v.ctaFlag ? (<>
                              <div className="qcta" style={{background: v.prevFg, color: v.prevBg}}>Scan me</div>
                            </>) : null}
                          </div>{' '}
                          <div className="meter">
                            <div className="mrow">
                              <span>Scannability</span>
                              <span><I v={v.scanScore}/></span>
                            </div>{' '}
                            <div className="tr">
                              <span className="fl" style={{width: v.scanPct, background: v.scanColor}}/>
                            </div>
                          </div>{' '}
                          {v.scanRisky ? (<>
                            <div className="scanwarn">
                              <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
                                <path d="M12 9v4"/>
                                <path d="M12 17h.01"/>
                              </svg>
                              <span>Low contrast between foreground and background - some phone cameras will struggle. You can still create it.</span>
                            </div>
                          </>) : null}{' '}
                          <div className="mut" style={{font: '400 11.5px/1.5 var(--font-sans)', textAlign: 'center'}}>qurl.to/<I v={v.newSlug}/> - live preview</div>
                        </div>
                      </div>{' '}
                      <div className="fcact sactions-b">
                        <button className="ss-btn" data-component="Button" onClick={v.finishCreate}>Create</button>
                      </div>
                    </section>
                  </>) : null}
                </>) : null}{' '}
                {/* ============ CODE DETAIL & ANALYTICS ============ */}{' '}
                {v.onDetail ? (<>
                  <div className="grid48">
                    <div style={{display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '0'}}>
                      <div className="ocard" style={{padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px'}} data-component="Card">
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
                          <span className="qthumb" style={{width: '132px', height: '132px', color: '#131316', borderRadius: '12px'}}>
                            <svg viewBox="0 0 21 21" style={{width: '108px', height: '108px'}} aria-hidden="true">
                              <path fill="currentColor" d="M0 0h1v1H0zM1 0h1v1H1zM2 0h1v1H2zM3 0h1v1H3zM4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM8 0h1v1H8zM9 0h1v1H9zM11 0h1v1H11zM14 0h1v1H14zM15 0h1v1H15zM16 0h1v1H16zM17 0h1v1H17zM18 0h1v1H18zM19 0h1v1H19zM20 0h1v1H20zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM9 1h1v1H9zM11 1h1v1H11zM12 1h1v1H12zM14 1h1v1H14zM20 1h1v1H20zM0 2h1v1H0zM2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM6 2h1v1H6zM8 2h1v1H8zM9 2h1v1H9zM10 2h1v1H10zM12 2h1v1H12zM14 2h1v1H14zM16 2h1v1H16zM17 2h1v1H17zM18 2h1v1H18zM20 2h1v1H20zM0 3h1v1H0zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM6 3h1v1H6zM8 3h1v1H8zM12 3h1v1H12zM14 3h1v1H14zM16 3h1v1H16zM17 3h1v1H17zM18 3h1v1H18zM20 3h1v1H20zM0 4h1v1H0zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM6 4h1v1H6zM9 4h1v1H9zM11 4h1v1H11zM12 4h1v1H12zM14 4h1v1H14zM16 4h1v1H16zM17 4h1v1H17zM18 4h1v1H18zM20 4h1v1H20zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM9 5h1v1H9zM11 5h1v1H11zM14 5h1v1H14zM20 5h1v1H20zM0 6h1v1H0zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM15 6h1v1H15zM16 6h1v1H16zM17 6h1v1H17zM18 6h1v1H18zM19 6h1v1H19zM20 6h1v1H20zM9 7h1v1H9zM11 7h1v1H11zM12 7h1v1H12zM0 8h1v1H0zM2 8h1v1H2zM3 8h1v1H3zM6 8h1v1H6zM7 8h1v1H7zM10 8h1v1H10zM15 8h1v1H15zM17 8h1v1H17zM18 8h1v1H18zM20 8h1v1H20zM1 9h1v1H1zM7 9h1v1H7zM16 9h1v1H16zM0 10h1v1H0zM1 10h1v1H1zM3 10h1v1H3zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM10 10h1v1H10zM11 10h1v1H11zM12 10h1v1H12zM14 10h1v1H14zM15 10h1v1H15zM20 10h1v1H20zM0 11h1v1H0zM1 11h1v1H1zM4 11h1v1H4zM5 11h1v1H5zM7 11h1v1H7zM8 11h1v1H8zM11 11h1v1H11zM12 11h1v1H12zM13 11h1v1H13zM14 11h1v1H14zM0 12h1v1H0zM5 12h1v1H5zM6 12h1v1H6zM7 12h1v1H7zM8 12h1v1H8zM10 12h1v1H10zM11 12h1v1H11zM12 12h1v1H12zM13 12h1v1H13zM14 12h1v1H14zM15 12h1v1H15zM16 12h1v1H16zM17 12h1v1H17zM18 12h1v1H18zM19 12h1v1H19zM20 12h1v1H20zM10 13h1v1H10zM11 13h1v1H11zM12 13h1v1H12zM13 13h1v1H13zM14 13h1v1H14zM19 13h1v1H19zM20 13h1v1H20zM0 14h1v1H0zM1 14h1v1H1zM2 14h1v1H2zM3 14h1v1H3zM4 14h1v1H4zM5 14h1v1H5zM6 14h1v1H6zM8 14h1v1H8zM9 14h1v1H9zM11 14h1v1H11zM12 14h1v1H12zM15 14h1v1H15zM17 14h1v1H17zM0 15h1v1H0zM6 15h1v1H6zM9 15h1v1H9zM10 15h1v1H10zM11 15h1v1H11zM15 15h1v1H15zM16 15h1v1H16zM0 16h1v1H0zM2 16h1v1H2zM3 16h1v1H3zM4 16h1v1H4zM6 16h1v1H6zM10 16h1v1H10zM12 16h1v1H12zM13 16h1v1H13zM14 16h1v1H14zM15 16h1v1H15zM16 16h1v1H16zM19 16h1v1H19zM0 17h1v1H0zM2 17h1v1H2zM3 17h1v1H3zM4 17h1v1H4zM6 17h1v1H6zM10 17h1v1H10zM11 17h1v1H11zM12 17h1v1H12zM13 17h1v1H13zM14 17h1v1H14zM0 18h1v1H0zM2 18h1v1H2zM3 18h1v1H3zM4 18h1v1H4zM6 18h1v1H6zM8 18h1v1H8zM14 18h1v1H14zM16 18h1v1H16zM19 18h1v1H19zM20 18h1v1H20zM0 19h1v1H0zM6 19h1v1H6zM10 19h1v1H10zM11 19h1v1H11zM12 19h1v1H12zM15 19h1v1H15zM19 19h1v1H19zM0 20h1v1H0zM1 20h1v1H1zM2 20h1v1H2zM3 20h1v1H3zM4 20h1v1H4zM5 20h1v1H5zM6 20h1v1H6zM8 20h1v1H8zM9 20h1v1H9zM14 20h1v1H14zM17 20h1v1H17zM18 20h1v1H18zM19 20h1v1H19zM20 20h1v1H20z"/>
                            </svg>
                          </span>{' '}
                          <div style={{font: '500 12.5px/1.4 var(--font-mono)'}}>qurl.to/<I v={v.dSlug}/></div>{' '}
                          <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.copyLink}>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                            </svg> Copy link</button>
                        </div>{' '}
                        <div style={{borderTop: '1px solid var(--border)', paddingTop: '6px'}}>
                          <div className="kv">
                            <b>Total scans</b>
                            <span className="v"><I v={v.dScans}/></span>
                          </div>{' '}
                          <div className="kv">
                            <b>Unique visitors</b>
                            <span className="v"><I v={v.dUnique}/></span>
                          </div>{' '}
                          <div className="kv">
                            <b>Created</b>
                            <span className="v"><I v={v.dCreated}/></span>
                          </div>{' '}
                          <div className="kv">
                            <b>Type</b>
                            <span className="v"><I v={v.dType}/></span>
                          </div>{' '}
                          <div className="kv">
                            <b>Top source</b>
                            <span className="v">Print - table tents</span>
                          </div>
                        </div>
                      </div>{' '}
                      {v.dIsPaused ? (<>
                        <section className="sect">
                          <h2>Paused</h2>{' '}
                          <div className="ocard" style={{padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '8px'}} data-component="Alert">
                            <div style={{font: '500 13px/1.5 var(--font-sans)'}}>Scanners see a friendly "unavailable" page - the printed code is safe and resumes instantly.</div>
                          </div>
                        </section>
                      </>) : null}{' '}
                      {v.dIsQuar ? (<>
                        <section className="sect">
                          <h2>Quarantined</h2>{' '}
                          <div className="ocard" style={{padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '10px'}} data-component="Alert">
                            <div style={{font: '500 13px/1.5 var(--font-sans)', color: 'var(--hard-block)'}}>The destination was flagged on a scheduled re-scan. Scanners see a warning page.</div>{' '}
                            <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.showQuarCur} style={{alignSelf: 'flex-start'}}>Details</button>
                          </div>
                        </section>
                      </>) : null}
                    </div>{' '}
                    <div style={{display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '0'}}>
                      <section className="sect">
                        <div className="ocard" style={{padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '12px'}} data-component="Card">
                          <div style={{display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap'}}>
                            <span style={{font: '600 13.5px/1.2 var(--font-sans)'}}>Scans</span>{' '}
                            <div className="seggroup" data-component="ButtonGroup" role="group" aria-label="Range">
                              <button className={`segbtn ${v.rHour ?? ''}`} onClick={v.pickHour}>Hour</button>{' '}
                              <button className={`segbtn ${v.rDay ?? ''}`} onClick={v.pickDay}>Day</button>{' '}
                              <button className={`segbtn ${v.rWeek ?? ''}`} onClick={v.pickWeek}>Week</button>{' '}
                              <button className={`segbtn ${v.rMonth ?? ''}`} onClick={v.pickMonth}>Month</button>
                            </div>{' '}
                            <div className="tsp"/>{' '}
                            <div className="legend">
                              <span>
                                <i style={{background: 'var(--primary)'}}/>Total</span>
                              <span>
                                <i style={{background: 'var(--purple-600)'}}/>Unique</span>
                            </div>{' '}
                            <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.exportCsv}>Export CSV</button>
                          </div>{' '}
                          <div className="chart" role="img" aria-label="Scan volume, total versus unique">
                            {(v.bars || []).map((b, i0) => (<React.Fragment key={i0}>
                              <div className="cb">
                                <span className="bp">
                                  <i style={{height: b.t}} data-tt={b.tTip}/>
                                  <i className="uq" style={{height: b.u}} data-tt={b.uTip}/>
                                </span>
                                <span><I v={b.lbl}/></span>
                              </div>
                            </React.Fragment>))}
                          </div>{' '}
                          <div className="mut" style={{font: '400 12px/1.5 var(--font-sans)'}}>Counters are cached at the edge - totals can lag a few seconds behind live scans.</div>
                        </div>
                      </section>{' '}
                      <section className="sect">
                        <h2>Where scans come from <button className="infoic" data-tt="Geo comes from edge enrichment - city-level, never precise location. IP anonymization options live in privacy controls." aria-label="Geo comes from edge enrichment - city-level, never precise location. IP anonymization options live in privacy controls.">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"/>
                              <path d="M12 16v-4"/>
                              <path d="M12 8h.01"/>
                            </svg>
                          </button>
                        </h2>{' '}
                        <div className="ocard" style={{padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '10px'}} data-component="Card">
                          {(v.geoRows || []).map((g, i0) => (<React.Fragment key={i0}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                              <span style={{width: '96px', flex: 'none', font: '500 12.5px/1.3 var(--font-sans)'}}><I v={g.name}/></span>{' '}
                              <span style={{flex: '1', height: '8px', borderRadius: '4px', background: 'color-mix(in srgb, var(--foreground) 8%, transparent)', overflow: 'hidden', display: 'block'}}>
                                <i style={{display: 'block', height: '100%', borderRadius: '4px', background: 'var(--primary)', width: g.pct}}/>
                              </span>{' '}
                              <span style={{width: '52px', flex: 'none', textAlign: 'right', font: '500 12px/1.3 var(--font-sans)', fontVariantNumeric: 'tabular-nums', color: 'var(--muted-foreground)'}}><I v={g.pct}/></span>
                            </div>
                          </React.Fragment>))}{' '}
                          <div className="mut" style={{font: '400 12px/1.5 var(--font-sans)'}}>Devices: 92% phones · 6% tablets · 2% desktop</div>
                        </div>
                      </section>{' '}
                      <section className="sect">
                        <h2>Destination</h2>{' '}
                        <div className="ocard" style={{padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '12px'}} data-component="Card">
                          <div className="ss-label" data-component="Label">The printed code never changes - only where it points <button className="infoic" data-tt="Saving re-runs the threat scan before the redirect switches. Old scans stay in history." aria-label="Saving re-runs the threat scan before the redirect switches. Old scans stay in history.">
                              <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 16v-4"/>
                                <path d="M12 8h.01"/>
                              </svg>
                            </button>
                          </div>{' '}
                          <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                            <input className="ss-input" data-component="Input" value={v.dDest ?? ''} onChange={v.dSetDest} style={{flex: '1', minWidth: '240px', fontFamily: 'var(--font-mono)', fontSize: '12.5px'}} aria-label="Destination URL"/>{' '}
                            <button className="ss-btn" data-component="Button" onClick={v.dRepoint}>Save</button>
                          </div>{' '}
                          {v.dScanRunning ? (<>
                            <div className="scanline">
                              <span className="ss-spinner" data-component="Spinner"/> Re-scanning new destination...</div>
                          </>) : null}
                        </div>
                      </section>{' '}
                      <section className="sect">
                        <h2>Download history</h2>{' '}
                        <div>
                          <div className="ocard invrow">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 15V3"/>
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                              <path d="m7 10 5 5 5-5"/>
                            </svg>
                            <span>SVG - vector, large format</span>
                            <span className="inum mut">28 Aug 2026</span>
                            <button className="linkbtn isum" onClick={v.redownload}>Download</button>
                          </div>{' '}
                          <div className="ocard invrow">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 15V3"/>
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                              <path d="m7 10 5 5 5-5"/>
                            </svg>
                            <span>PNG - transparent, 1024 px</span>
                            <span className="inum mut">25 Aug 2026</span>
                            <button className="linkbtn isum" onClick={v.redownload}>Download</button>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </>) : null}{' '}
                {/* ============ BILLING & ACCOUNT ============ */}{' '}
                {v.onBilling ? (<>
                  {v.dunningOn ? (<>
                    <section className="sect">
                      <div className="dunning">
                        <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
                          <path d="M12 9v4"/>
                          <path d="M12 17h.01"/>
                        </svg>{' '}
                        <span style={{flex: '1'}}>Your last payment failed. We retry automatically for 14 days - your codes keep working during the grace period.</span>{' '}
                        <button className="ss-btn ss-btn--sm" data-component="Button" onClick={v.fixPayment}>Fix payment</button>
                      </div>
                    </section>
                  </>) : null}{' '}
                  <div className="bgrid">
                    <div className="bleft">
                      <section className="sect">
                        <div className="ocard" style={{padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '14px'}} data-component="Card">
                          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                            <div style={{flex: '1'}}>
                              <div style={{font: '600 16px/1.3 var(--font-sans)'}}><I v={v.planName}/></div>
                              <div className="mut" style={{font: '400 12.5px/1.5 var(--font-sans)'}}><I v={v.planPrice}/>, renews 1 Oct 2026. Proration applies on plan changes.</div>
                            </div>{' '}
                            <span className="chip ok">Active</span>
                          </div>{' '}
                          <div className="usagebar" style={{padding: '0', border: '0'}}>
                            <div style={{flex: '1', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                              <div style={{display: 'flex', justifyContent: 'space-between', font: '500 12px/1.3 var(--font-sans)'}}>
                                <span>Dynamic codes</span>
                                <span className="mut">5 of <I v={v.planLimit}/></span>
                              </div>{' '}
                              <span className="tr">
                                <span className="fl" style={{width: v.usagePct}}/>
                              </span>
                            </div>
                          </div>{' '}
                          <div className="fcact">
                            <button className="ss-btn" data-component="Button" onClick={v.openPlanDlg}>Change plan</button>{' '}
                            <button className="ss-btn ss-btn--outline ttwrap" data-component="Button" onClick={v.cancelPlan} data-tt="Canceling stops renewal - codes pause at period end. Printed codes show the unavailable page, nothing is deleted.">Cancel plan <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '14px', height: '14px', opacity: '.75'}}>
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 16v-4"/>
                                <path d="M12 8h.01"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </section>{' '}
                      <section className="sect">
                        <h2>Payment method</h2>{' '}
                        <div className="ocard payrow" data-component="Card">
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '20px', height: '20px'}}>
                            <rect width="20" height="14" x="2" y="5" rx="2"/>
                            <line x1="2" x2="22" y1="10" y2="10"/>
                          </svg>{' '}
                          <div style={{flex: '1'}}>
                            <div style={{font: '500 13px/1.3 var(--font-sans)'}}>Visa ending <I v={v.cardLast4}/></div>
                            <div className="mut" style={{font: '400 11.5px/1.4 var(--font-sans)'}}>SCA / 3DS2 verified</div>
                          </div>{' '}
                          <button className="linkbtn" onClick={v.changeCard}>Change</button>
                        </div>{' '}
                        {v.walletFlag ? (<>
                          <div className="ocard payrow" data-component="Card">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '20px', height: '20px'}}>
                              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/>
                              <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>
                            </svg>{' '}
                            <div style={{flex: '1'}}>
                              <div style={{font: '500 13px/1.3 var(--font-sans)'}}>Apple Pay</div>
                              <div className="mut" style={{font: '400 11.5px/1.4 var(--font-sans)'}}>Wallet - added just now</div>
                            </div>{' '}
                            <span className="chip ok">Added</span>
                          </div>
                        </>) : null}{' '}
                        {v.noWalletYet ? (<>
                          <div className="ocard payrow" style={{borderStyle: 'dashed', color: 'var(--muted-foreground)'}}>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M5 12h14"/>
                              <path d="M12 5v14"/>
                            </svg>{' '}
                            <button className="linkbtn" style={{color: 'inherit'}} onClick={v.addWallet}>Add a wallet (Apple Pay, Google Pay)</button>
                          </div>
                        </>) : null}{' '}
                        <label style={{display: 'flex', alignItems: 'center', gap: '10px', font: '400 12.5px/1.4 var(--font-sans)', color: 'var(--muted-foreground)', padding: '2px 4px', cursor: 'pointer'}}>
                          <input type="checkbox" onChange={v.toggleDunning} data-component="Checkbox"/> Demo: show the failed-payment state</label>
                      </section>
                    </div>{' '}
                    <div className="bright">
                      <section className="sect">
                        <h2>Invoices <button className="infoic" data-tt="Taxes resolve by country: VAT, GST or sales tax, inclusive or exclusive per region. B2B can add a VAT number for reverse charge." aria-label="Taxes resolve by country: VAT, GST or sales tax, inclusive or exclusive per region. B2B can add a VAT number for reverse charge.">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"/>
                              <path d="M12 16v-4"/>
                              <path d="M12 8h.01"/>
                            </svg>
                          </button>
                        </h2>{' '}
                        <div>
                          <div className="ocard invrow" data-component="Item">
                            <span className="inum">INV-2026-0031</span>
                            <span className="invdesc">Aug 2026 - Starter</span>
                            <span className="invmeta">
                              <span className="chip ok">Paid</span>
                              <span className="isum">$9.00</span>
                            </span>
                            <span className="invact">
                              <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.redownload}>Download</button>
                            </span>
                          </div>{' '}
                          <div className="ocard invrow" data-component="Item">
                            <span className="inum">INV-2026-0018</span>
                            <span className="invdesc">VAT invoice sample - B2B reverse charge</span>
                            <span className="invmeta">
                              <span className="chip mut">Sample</span>
                              <span className="isum">$9.00</span>
                            </span>
                            <span className="invact">
                              <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.redownload}>Download</button>
                            </span>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </>) : null}{' '}
                {/* ============ ACCOUNT (N11 subtab) ============ */}{' '}
                {v.onAccount ? (<>
                  <section className="sect">
                    <h2>Profile</h2>{' '}
                    <div className="ocard" style={{padding: '8px 20px'}} data-component="Card">
                      <div className="kv">
                        <b>Name</b>
                        <span className="v">Maya Petrova</span>
                      </div>{' '}
                      <div className="kv">
                        <b>Email</b>
                        <span className="v">maya@brightcafe.co</span>
                      </div>{' '}
                      <div className="kv">
                        <b>Country</b>
                        <span className="v">Ireland - VAT 23%</span>
                      </div>
                    </div>{' '}
                    <button className="ss-btn ss-btn--outline fcwide" data-component="Button" onClick={v.signOutAll}>Sign out everywhere</button>{' '}
                    <button className="ss-btn ss-btn--outline fcwide" data-component="Button" onClick={v.askDeleteAccount} style={{color: 'var(--hard-block)'}}>Delete account and data</button>
                  </section>
                </>) : null}
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {/* ============ OVERLAYS (solid surfaces, O7) ============ */}{' '}
        {v.intgOpenFlag ? (<>
          <div className={`dlgwrap ${v.intgClosing ?? ''}`} role="dialog" aria-modal="true" aria-label="Third-party integration">
            <div className="scrim" onClick={v.closeIntg}/>{' '}
            <div className="dlg" data-component="IntegrationPlaceholder">
              <h3><I v={v.intgService}/></h3>{' '}
              <div className="intgph">
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '30px', height: '30px', color: 'var(--muted-foreground)'}}>
                  <path d="M12 22v-5"/>
                  <path d="M9 8V2"/>
                  <path d="M15 8V2"/>
                  <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>
                </svg>{' '}
                <b>The integration screen will be here</b>{' '}
                <span className="mut" style={{font: '400 12px/1.5 var(--font-sans)'}}><I v={v.intgNote}/></span>
              </div>{' '}
              <div style={{display: 'flex', justifyContent: 'flex-end', gap: '10px'}}>
                <button className="ss-btn ss-btn--outline" data-component="Button" onClick={v.closeIntg}>Close</button>{' '}
                <button className="ss-btn" data-component="Button" onClick={v.intgNext}>Next</button>
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {v.planOpen ? (<>
          <div className={`dlgwrap ${v.planClosing ?? ''}`} role="dialog" aria-modal="true" aria-label="Change plan">
            <div className="scrim" onClick={v.closePlanDlg}/>{' '}
            <div className="dlg" data-component="Dialog">
              <h3>Change plan</h3>{' '}
              <button className={`planrow ${v.pickStarter ?? ''}`} onClick={v.pickPlanStarter} role="radio" aria-checked={v.pickStarterAria}>
                <span className="pl">
                  <b>Starter</b>
                  <span>5 dynamic codes · 10k scans/mo</span>
                </span>{' '}
                <span className="pr">
                  <b>$9/mo</b>
                  {v.curStarter ? (<>
                    <span className="chip mut">Current</span>
                  </>) : null}
                </span>
              </button>{' '}
              <button className={`planrow ${v.pickAdvanced ?? ''}`} onClick={v.pickPlanAdvanced} role="radio" aria-checked={v.pickAdvancedAria}>
                <span className="pl">
                  <b>Advanced</b>
                  <span>25 dynamic codes · 100k scans/mo · API access</span>
                </span>{' '}
                <span className="pr">
                  <b>$29/mo</b>
                  {v.curAdvanced ? (<>
                    <span className="chip mut">Current</span>
                  </>) : null}
                </span>
              </button>{' '}
              {v.planProration ? (<>
                <div className="mut" style={{font: '400 12px/1.5 var(--font-sans)'}}><I v={v.prorationCopy}/></div>
              </>) : null}{' '}
              <div style={{display: 'flex', justifyContent: 'flex-end', gap: '10px'}}>
                <button className="ss-btn ss-btn--outline" data-component="Button" onClick={v.closePlanDlg}>Close</button>{' '}
                {v.planPicked ? (<>
                  <button className="ss-btn" data-component="Button" onClick={v.confirmPlan}><I v={v.confirmLbl}/></button>
                </>) : null}
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {v.exportOpen ? (<>
          <div className={`dlgwrap ${v.exportClosing ?? ''}`} role="dialog" aria-modal="true" aria-label="Export code">
            <div className="scrim" onClick={v.closeExport}/>{' '}
            <div className="dlg" data-component="Dialog">
              <h3>Export "<I v={v.exName}/>"</h3>{' '}
              <div className="exrow">
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
                <span className="xt">
                  <b>PNG</b>
                  <span>1024 px, transparent background option</span>
                </span>
                <button className="ss-btn ss-btn--sm" data-component="Button" onClick={v.exPng}>Download</button>
              </div>{' '}
              <div className="exrow">
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                </svg>
                <span className="xt">
                  <b>PDF</b>
                  <span>Print-ready with bleed marks</span>
                </span>
                <button className="ss-btn ss-btn--sm" data-component="Button" onClick={v.exPdf}>Download</button>
              </div>{' '}
              <div className="exrow">
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m18 16 4-4-4-4"/>
                  <path d="m6 8-4 4 4 4"/>
                  <path d="m14.5 4-5 16"/>
                </svg>
                <span className="xt">
                  <b>SVG</b>
                  <span>Vector - large-format print</span>
                </span>
                <button className="ss-btn ss-btn--sm" data-component="Button" onClick={v.exSvg}>Download</button>
              </div>{' '}
              <div className="exrow">
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span className="xt">
                  <b>EPS</b>
                  <span>Vector - legacy print workflows</span>
                </span>
                <button className="ss-btn ss-btn--sm" data-component="Button" onClick={v.exEps}>Download</button>
              </div>{' '}
              <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button className="ss-btn ss-btn--outline" data-component="Button" onClick={v.closeExport}>Close</button>
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {v.deleteOpen ? (<>
          <div className={`dlgwrap ${v.deleteClosing ?? ''}`} role="dialog" aria-modal="true" aria-label="Delete code">
            <div className="scrim" onClick={v.closeDelete}/>{' '}
            <div className="dlg" data-component="Dialog">
              <h3>Delete "<I v={v.delName}/>"?</h3>{' '}
              <p className="mut" style={{margin: '0'}}>This code has been exported - printed copies are probably out in the world. A deleted code stops resolving immediately and scanners see a not-found page. Pausing keeps the print alive instead.</p>{' '}
              <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end'}}>
                <button className="ss-btn ss-btn--outline" data-component="Button" onClick={v.closeDelete}>Keep</button>{' '}
                <button className="ss-btn ss-btn--outline" data-component="Button" onClick={v.pauseInstead}>Pause instead</button>{' '}
                <button className="ss-btn" data-component="Button" onClick={v.confirmDelete} style={{background: 'var(--hard-block)'}}>Delete</button>
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {v.lockoutOpen ? (<>
          <div className={`dlgwrap ${v.lockoutClosing ?? ''}`} role="dialog" aria-modal="true" aria-label="Account locked">
            <div className="scrim" onClick={v.closeLockout}/>{' '}
            <div className="dlg" data-component="Dialog">
              <h3>Account temporarily locked</h3>{' '}
              <p className="mut" style={{margin: '0'}}>Too many failed sign-in attempts. You can try again in 15 minutes, or reset your password by email now - the reset link ends the lockout immediately.</p>{' '}
              <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end'}}>
                <button className="ss-btn ss-btn--outline" data-component="Button" onClick={v.closeLockout}>Wait</button>{' '}
                <button className="ss-btn" data-component="Button" onClick={v.resetFromLockout}>Reset password</button>
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {v.quarOpen ? (<>
          <div className={`dlgwrap ${v.quarClosing ?? ''}`} role="dialog" aria-modal="true" aria-label="Code quarantined">
            <div className="scrim" onClick={v.closeQuar}/>{' '}
            <div className="dlg" data-component="Dialog">
              <h3>Why this code is quarantined</h3>{' '}
              <p className="mut" style={{margin: '0'}}>The scheduled re-scan flagged the destination <span style={{fontFamily: 'var(--font-mono)', fontSize: '12px'}}>win-a-prize.example</span> for phishing. Scanners currently see a warning page instead of the redirect.</p>{' '}
              <p className="mut" style={{margin: '0', font: '400 12.5px/1.5 var(--font-sans)'}}>Fix it by pointing the code at a safe destination - the new URL is scanned before the redirect switches back. Only a platform operator can lift a quarantine without a destination change.</p>{' '}
              <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end'}}>
                <button className="ss-btn ss-btn--outline" data-component="Button" onClick={v.closeQuar}>Close</button>{' '}
                <button className="ss-btn" data-component="Button" onClick={v.fixQuar}>Fix destination</button>
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {v.nfOpen ? (<>
          <div className={`dlgwrap ${v.nfClosingCls ?? ''}`} role="dialog" aria-modal="true" aria-label="New folder">
            <div className="scrim" onClick={v.closeNewFolder}/>{' '}
            <div className="dlg">
              <h3>New folder</h3>{' '}
              <div className="ss-field">
                <div className="ss-label" data-component="Label">Folder name</div>{' '}
                <input className="ss-input" data-component="Input" value={v.nfName ?? ''} onChange={v.setNfName} placeholder="e.g. Winter campaign" aria-label="Folder name"/>
              </div>{' '}
              <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end'}}>
                <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.closeNewFolder}>Cancel</button>{' '}
                <button className="ss-btn ss-btn--sm" data-component="Button" onClick={v.createFolder}>Create folder</button>
              </div>
            </div>
          </div>
        </>) : null}{' '}
        <div className="toasts" aria-live="polite">
          {(v.toasts || []).map((t, i0) => (<React.Fragment key={i0}>
            <div className="ss-toast" data-component="Toast"><I v={t.text}/>{t.hasUndo ? (<>
                <button className="undo" onClick={t.undo}>Undo</button>
              </>) : null}
            </div>
          </React.Fragment>))}
        </div>
      </div>
    )
  }
}
