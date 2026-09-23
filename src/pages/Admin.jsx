/* Generated from Admin Prototype.dc.html by scripts/dc-to-jsx.py - do not hand-edit.
 * The markup is the prototype's, converted to JSX. The logic block below is the
 * prototype's own, carried across verbatim apart from the import, the class
 * header and the landing view. Re-run the script to regenerate. */

import React from 'react'
import { I } from '../dc.jsx'
import './../styles/admin.css'

export default class Admin extends React.Component {
  constructor(props){ super(props);
    this.state = {
      view:'dash', dark: document.documentElement.classList.contains('dark'), rail:false, mopen:false, profileOpen:false, q:'',
      outage:false, profName:'Riya Mehta', profOpen:false, profClosing:false,
      uq:'', ufilt:'all',
      users:[
        {id:'u1', name:'Maya Petrova', email:'maya@brightcafe.co', state:'active', plan:'Starter', codes:5, joined:'12 Mar 2026', reason:''},
        {id:'u2', name:'Jonas Keller', email:'jonas@nordicexpo.eu', state:'active', plan:'Advanced', codes:18, joined:'02 Feb 2026', reason:''},
        {id:'u3', name:'Sofia Ramos', email:'sofia@casaverde.pt', state:'trial', plan:'Trial', codes:2, joined:'26 Aug 2026', reason:''},
        {id:'u4', name:'Dmitri Volkov', email:'d.volkov@metroretail.de', state:'suspended', plan:'Starter', codes:4, joined:'19 Jun 2026', reason:'Repeat malicious destinations'},
        {id:'u5', name:'Amelie Laurent', email:'amelie@festivale.fr', state:'trial', plan:'Trial', codes:1, joined:'29 Aug 2026', reason:''},
        {id:'u6', name:'Tomas Berg', email:'tomas@bergkiosk.se', state:'active', plan:'Starter', codes:3, joined:'11 Aug 2026', reason:''},
      ],
      userOpen:false, userClosing:false, curUser:null,
      suspendOpen:false, suspendClosing:false, susMode:'suspend', susReason:'',
      deleteOpen:false, deleteClosing:false,
      sfilt:'all',
      subs:[
        {id:'s1', name:'Bright Cafe', plan:'Starter', kind:'sub', status:'active', ends:'renews 12 Oct', conv:false, endingSoon:false},
        {id:'s2', name:'Nordic Expo', plan:'Advanced', kind:'sub', status:'active', ends:'renews 02 Oct', conv:false, endingSoon:false},
        {id:'s3', name:'Casa Verde', plan:'Trial', kind:'trial', status:'day 5 of 7', ends:'ends 04 Sep', conv:false, endingSoon:true},
        {id:'s4', name:'Berg Kiosk', plan:'Starter', kind:'trial', status:'converted', ends:'converted 18 Aug', conv:true, endingSoon:false},
        {id:'s5', name:'Festivale', plan:'Trial', kind:'trial', status:'day 2 of 7', ends:'ends 07 Sep', conv:false, endingSoon:false},
      ],
      plans:{starter:{name:'Starter', price:'9', qr:'5', scans:'10,000', seats:'1', features:'All exports, hosted pages, scan analytics'},
             advanced:{name:'Advanced', price:'29', qr:'25', scans:'100,000', seats:'5', features:'Everything in Starter, API access'}},
      planOpen:false, planClosing:false, curPlan:null,
      pays:[
        {id:'PAY-3041', name:'Bright Cafe', amount:'€9.00', status:'paid'},
        {id:'PAY-3040', name:'Nordic Expo', amount:'€29.00', status:'paid'},
        {id:'PAY-3039', name:'Metro Retail', amount:'€9.00', status:'failed'},
        {id:'PAY-3036', name:'Festivale', amount:'€9.00', status:'chargeback'},
        {id:'PAY-3031', name:'Casa Verde', amount:'€9.00', status:'refunded'},
      ],
      refundOpen:false, refundClosing:false, curPay:null,
      alerts:[
        {id:'a1', sev:'critical', title:'Threat scan flagged a destination', body:'Code autumn-fest now redirects to a domain on the blocklist - it was quarantined automatically.', time:'12 min ago', acked:false},
        {id:'a2', sev:'critical', title:'Chargeback received', body:'PAY-3036 (Festivale, EUR 9.00) was charged back at the processor. The account is flagged for review.', time:'28 min ago', acked:false},
        {id:'a3', sev:'warning', title:'Payment failed', body:'PAY-3039 (Metro Retail) failed. Dunning retries continue for 14 days; codes keep working.', time:'41 min ago', acked:false},
        {id:'a4', sev:'warning', title:'Scan spike on /bright-cafe', body:'Scans are 8x the 7-day average. Usually a campaign launch - worth a look if unexpected.', time:'2 h ago', acked:false},
        {id:'a5', sev:'info', title:'Weekly digest sent', body:'The platform summary for last week went out to the operations list.', time:'1 day ago', acked:true},
      ],
      curPage:'landing', cmsAcc:0,
      pages:{
        landing:{name:'Landing page', slug:'/', status:'published', edited:'2 days ago', blocks:[
          {label:'Hero', kind:'hero', title:'Print once. Re-point forever.', body:'The printed code never changes - where it leads is up to you. Re-point destinations any time, host menus and pages, and watch scans live. No reprints, no dev work.', cta:'Start free trial'},
          {label:'Feature - Re-point', kind:'section', title:'Re-point after print', body:'The code on your menus, posters and packaging stays identical - only where it leads changes. Fix a wrong link, swap a campaign or pause a code in one click.'},
          {label:'Feature - Analytics', kind:'section', title:'Scan analytics without code', body:'Hour-by-hour scans, unique visitors, devices and countries for every code - no tags, no snippets, no analytics setup.'},
          {label:'Feature - Hosted pages', kind:'section', title:'Hosted pages included', body:'No website needed. qurl hosts your PDF menus and link pages - responsive on every phone and threat-scanned before going live.'},
          {label:'How it works', kind:'section', title:'From design to dinner service in minutes', body:'Create, print, re-point - three steps, no reprints.'},
          {label:'CTA band', kind:'hero', title:'Ready to print smarter?', body:'Create your first dynamic code in under a minute. Print it once - re-point it forever.', cta:'Start free trial'},
        ]},
        faq:{name:'FAQ page', slug:'/faq', status:'published', edited:'6 days ago', blocks:[
          {label:'Intro', kind:'section', fixed:true, title:'Questions, by topic', body:'Open a question to read the details. Still stuck? Contact in the footer reaches a person.'},
          {label:'General', kind:'faq', title:'General', body:'The basics of dynamic codes', items:[
            {h:'What is a dynamic QR code?', b:'The printed pattern encodes a short qurl.to address that resolves to whatever destination you set.'},
            {h:'Do printed codes break when I change the destination?', b:'Never. The printed code stays identical and only the destination changes, instantly.'}]},
          {label:'Codes and printing', kind:'faq', title:'Codes and printing', body:'Exports, materials and scannability', items:[
            {h:'Which export formats do I get?', b:'Print-ready PNG, PDF and SVG on every plan.'},
            {h:'Will my styled code still scan?', b:'The style step checks contrast and quiet-zone live while you customize.'}]},
          {label:'Billing and plans', kind:'faq', title:'Billing and plans', body:'Trials, limits and payments', items:[
            {h:'Is there a free trial?', b:'Yes - 7 days with every feature, no card needed.'}]},
        ]},
        legal:{name:'Legal page', slug:'/legal', status:'draft', edited:'1 hour ago', blocks:[
          {label:'Intro', kind:'section', fixed:true, title:'The fine print, findable', body:'Every agreement that governs a qurl account, split by document.'},
          {label:'Terms of service', kind:'doc', title:'Terms of service', body:'The agreement for every account', items:[
            {h:'The agreement', b:'What the service promises, acceptable use, and how accounts close. Updated with 30 days notice.'},
            {h:'Acceptable use', b:'Codes must not lead to malware, phishing or deceptive destinations - flagged codes are quarantined.'}]},
          {label:'Privacy policy', kind:'doc', title:'Privacy policy', body:'What we collect and why', items:[
            {h:'What we collect', b:'Account details, billing records and scan analytics. Never sold, never used for advertising.'}]},
          {label:'Refund policy', kind:'doc', title:'Refund policy', body:'When and how charges come back', items:[
            {h:'Refunds', b:'Charges refund at the processor with a credit document against the original invoice.'}]},
        ]},
      },
      enqs:[
        {id:'e1', from:'anna@vinowine.it', subject:'Volume pricing for 40 locations', msg:'We run 40 wine shops and want table QR codes in every one - is there a volume tier?', status:'new', time:'26 min ago'},
        {id:'e2', from:'mark@printworks.co.uk', subject:'Invoicing with PO numbers', msg:'Our accounts team needs PO numbers on invoices before we can subscribe.', status:'new', time:'3 h ago'},
        {id:'e3', from:'lea@stadtfest.de', subject:'Trial extension for a festival', msg:'Our event is in 3 weeks - can the trial stretch until then?', status:'answered', time:'1 day ago'},
      ],
      toasts:[],
    };
  }
  componentDidMount(){
    if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const P=[[0,0],[-34,-26],[27,34],[-45,19],[36,-38],[-19,45],[47,22],[-32,36]]; let gi=0;
      this.__grain=setInterval(()=>{ gi=(gi+1)%P.length;
        document.querySelectorAll('.grainfx').forEach(el=>{ el.style.backgroundPosition=P[gi][0]+'px '+P[gi][1]+'px'; });
      }, 112);
    }
    this.__esc=(e)=>{ if(e.key!=='Escape') return; const s=this.state;
      for (const k of ['suspend','delete','refund','plan','prof','user']) {
        if (s[k+'Open']) { this.closeOv(k); return; }
      }
      if(s.profileOpen) return this.setState({profileOpen:false});
      if(s.mopen) return this.setState({mopen:false}); };
    document.addEventListener('keydown', this.__esc);
  }
  componentWillUnmount(){ document.removeEventListener('keydown', this.__esc); if(this.__grain) clearInterval(this.__grain); }
  toast(text, undo){
    const id=Math.random().toString(36).slice(2);
    const t={id, text}; if(undo) t.undoFn=undo;
    this.setState({toasts:[...this.state.toasts, t]});
    setTimeout(()=>{ this.setState({toasts:this.state.toasts.filter(x=>x.id!==id)}); }, 4200);
  }
  closeOv(which){
    this.setState({[which+'Closing']:true});
    setTimeout(()=>this.setState({[which+'Open']:false,[which+'Closing']:false}), 210);
  }
  setUser(id, patch){ this.setState({users:this.state.users.map(u=>u.id===id?{...u,...patch}:u)}); }
  patchBlock(patch){
    const s=this.state; const pg={...s.pages};
    const page={...pg[s.curPage]}; const blocks=page.blocks.slice();
    blocks[s.cmsAcc]={...blocks[s.cmsAcc], ...patch};
    page.blocks=blocks; pg[s.curPage]=page;
    this.setState({pages:pg});
  }
  patchItem(ix, patch){
    const blk=this.state.pages[this.state.curPage].blocks[this.state.cmsAcc];
    const items=blk.items.slice(); items[ix]={...items[ix], ...patch};
    this.patchBlock({items});
  }
  renderVals(){
    const s=this.state;
    const dark=s.dark;
    const STATES={active:{lbl:'Active', chip:'ok'}, trial:{lbl:'Trial', chip:'mut'}, suspended:{lbl:'Suspended', chip:'quar'}};
    const uq=s.uq.toLowerCase();
    const userRows=s.users
      .filter(u=>s.ufilt==='all'||u.state===s.ufilt)
      .filter(u=>!uq||(u.name+' '+u.email).toLowerCase().includes(uq))
      .map(u=>({ ...u, stateLbl:STATES[u.state].lbl, chipCls:STATES[u.state].chip,
        open:()=>this.setState({userOpen:true, userClosing:false, curUser:u.id}) }));
    const cu=s.users.find(u=>u.id===s.curUser)||s.users[0];
    const subRows=s.subs
      .filter(x=>s.sfilt==='all'||(s.sfilt==='sub'&&x.kind==='sub')||(s.sfilt==='trial'&&x.kind==='trial')||(s.sfilt==='ending'&&x.endingSoon))
      .map(x=>({ ...x, kindLbl:x.kind==='sub'?'Subscription':'Trial', kindCls:x.kind==='sub'?'ok':'paused',
        notConv:!x.conv, statusLbl:x.status }));
    const planRows=Object.entries(s.plans).map(([id,p])=>({ id, name:p.name, price:'€'+p.price+'/mo',
      qr:p.qr, scans:p.scans, seats:p.seats, features:p.features,
      edit:()=>this.setState({planOpen:true, planClosing:false, curPlan:id}) }));
    const cp=s.plans[s.curPlan]||s.plans.starter;
    const PSTAT={paid:{lbl:'Paid', chip:'ok'}, failed:{lbl:'Failed', chip:'paused'}, chargeback:{lbl:'Chargeback', chip:'quar'}, refunded:{lbl:'Refunded', chip:'mut'}};
    const payRows=s.pays.map(p=>({ ...p, statusLbl:PSTAT[p.status].lbl, chipCls:PSTAT[p.status].chip,
      canRefund:p.status==='paid',
      askRefund:()=>this.setState({refundOpen:true, refundClosing:false, curPay:p.id}) }));
    const cpay=s.pays.find(p=>p.id===s.curPay)||s.pays[0];
    const SEVS={critical:{lbl:'Critical', chip:'quar', col:'var(--hard-block)'},
                warning:{lbl:'Warning', chip:'paused', col:'var(--warning)'},
                info:{lbl:'Info', chip:'mut', col:'var(--muted-foreground)'}};
    const alertRows=s.alerts.map(a=>({ ...a,
      sevLbl:SEVS[a.sev].lbl, chipCls:SEVS[a.sev].chip, icColor:SEVS[a.sev].col,
      ackedCls:a.acked?'acked':'', notAcked:!a.acked,
      ack:()=>{ this.setState({alerts:s.alerts.map(x=>x.id===a.id?{...x, acked:true}:x)});
        this.toast('Alert acknowledged.', ()=>{ this.setState({alerts:this.state.alerts.map(x=>x.id===a.id?{...x, acked:false}:x)}); this.toast('Alert restored to the open list.'); }); },
    }));
    const order=['landing','faq','legal'];
    const pageRows=order.map(id=>({id, ...s.pages[id]}))
      .map(p=>({ id:p.id, name:p.name, slug:p.slug, edited:p.edited, blocks:p.blocks.length,
        statusLbl:p.status==='published'?'Published':'Draft', chipCls:p.status==='published'?'ok':'paused',
        open:()=>this.setState({view:'editor', curPage:p.id, cmsAcc:0}) }));
    const curPg=s.pages[s.curPage];
    const KINDL={hero:'Title, body and call to action', section:'Title and body', faq:'Category with questions', doc:'Document with sections'};
    const structOk=s.curPage!=='landing'; /* designer ruling 02.09.2026: landing blocks are hard-coded - text-only editing */
    const blockRows=curPg.blocks.map((b,ix)=>({ label:b.label||'Untitled block',
      kindLbl:(structOk && b.fixed) ? KINDL[b.kind]+' - fixed' : KINDL[b.kind],
      canDel:structOk && !b.fixed, /* designer ruling 02.09.2026: intro blocks are fixed on FAQ/legal too */
      cls:ix===s.cmsAcc?'on':'', pick:()=>this.setState({cmsAcc:ix}),
      del:()=>{ const pg={...this.state.pages}; const page={...pg[this.state.curPage]};
        if(page.blocks.length<=1){ this.toast('A page keeps at least one block.'); return; }
        const blocks=page.blocks.slice(); const removed=blocks.splice(ix,1)[0];
        page.blocks=blocks; pg[this.state.curPage]=page;
        this.setState({pages:pg, cmsAcc:Math.max(0, Math.min(this.state.cmsAcc, blocks.length-1))});
        this.toast('Block "'+(removed.label||'Untitled')+'" removed.', ()=>{ const p2={...this.state.pages}; const pa={...p2[this.state.curPage]}; const arr=pa.blocks.slice(); arr.splice(ix,0,removed); pa.blocks=arr; p2[this.state.curPage]=pa; this.setState({pages:p2}); this.toast('Block restored.'); }); } }));
    const blk=curPg.blocks[Math.min(s.cmsAcc, curPg.blocks.length-1)];
    const isFaq=blk.kind==='faq';
    const itemRows=(blk.items||[]).map((it,ix)=>({ h:it.h, b:it.b,
      hLbl:isFaq?'Question':'Section heading', bLbl:isFaq?'Answer':'Section text',
      setH:(e)=>this.patchItem(ix,{h:e.target.value}), setB:(e)=>this.patchItem(ix,{b:e.target.value}),
      del:()=>{ const items=blk.items.slice(); const removed=items.splice(ix,1)[0]; this.patchBlock({items});
        this.toast('Item removed.', ()=>{ const cur=this.state.pages[this.state.curPage].blocks[this.state.cmsAcc]; const arr=cur.items.slice(); arr.splice(ix,0,removed); this.patchBlock({items:arr}); this.toast('Item restored.'); }); } }));
    const titles={dash:'Dashboard', users:'Users', subs:'Subscriptions', pay:'Payments', pages:'Pages', alerts:'Alerts', editor:curPg.name};
    const seg=(v,c)=>v===c?'on':'';
    return {
      isLogin:s.view==='login', isApp:s.view!=='login',
      onDash:s.view==='dash', onUsers:s.view==='users', onSubs:s.view==='subs', onPay:s.view==='pay',
      onPages:s.view==='pages', onEditor:s.view==='editor', onAlerts:s.view==='alerts',
      pageTitle:titles[s.view]||'',
      groundCls:s.view==='login'?'':'g-codes',
      railCls:s.rail?'rail':'', mopenCls:s.mopen?'mnav':'',
      isDark:dark, isLight:!dark, darkAria:dark?'true':'false', modeState:dark?'checked':'unchecked',
      railOn:s.rail, railOff:!s.rail, mopen:s.mopen, profileOpen:s.profileOpen,
      email:'riya@qurl.to',
      navDash:seg(s.view,'dash'), navUsers:seg(s.view,'users'), navSubs:seg(s.view,'subs'),
      navPay:seg(s.view,'pay'), navPages:(s.view==='pages'||s.view==='editor')?'on':'', navAlerts:seg(s.view,'alerts'),
      goDash:()=>this.setState({view:'dash', mopen:false}), goUsers:()=>this.setState({view:'users', mopen:false}),
      goSubs:()=>this.setState({view:'subs', mopen:false}), goPay:()=>this.setState({view:'pay', mopen:false}),
      goPages:()=>this.setState({view:'pages', mopen:false}), goAlerts:()=>this.setState({view:'alerts', mopen:false}),
      doLogin:()=>this.setState({view:'dash'}),
      doReset:()=>this.toast('Password reset link sent to your work email.'),
      doLogout:()=>this.setState({view:'login', profileOpen:false}),
      toggleMode:()=>{ const d=!dark; document.documentElement.classList.toggle('dark', d); this.setState({dark:d}); },
      toggleSidebar:()=>{ if(window.innerWidth<=1200){ this.setState({mopen:!s.mopen}); } else { this.setState({rail:!s.rail}); } },
      closeMobileNav:()=>this.setState({mopen:false}),
      toggleProfile:()=>this.setState({profileOpen:!s.profileOpen}),
      search:(e)=>this.setState({q:e.target.value}),
      noop:()=>{},
      kpiOk:!s.outage, kpiDown:s.outage, outageOn:s.outage,
      toggleOutage:()=>this.setState({outage:!s.outage}),
      userSearch:(e)=>this.setState({uq:e.target.value}),
      ufAll:seg(s.ufilt,'all'), ufAct:seg(s.ufilt,'active'), ufTri:seg(s.ufilt,'trial'), ufSus:seg(s.ufilt,'suspended'),
      ufiltAll:()=>this.setState({ufilt:'all'}), ufiltAct:()=>this.setState({ufilt:'active'}),
      ufiltTri:()=>this.setState({ufilt:'trial'}), ufiltSus:()=>this.setState({ufilt:'suspended'}),
      userRows,
      userOpen:s.userOpen, userClosingCls:s.userClosing?'closing':'',
      closeUser:()=>this.closeOv('user'),
      duName:cu.name, duEmail:cu.email, duPlan:cu.plan, duCodes:cu.codes, duJoined:cu.joined,
      duStateLbl:STATES[cu.state].lbl, duChipCls:STATES[cu.state].chip,
      duHasReason:cu.state==='suspended'&&!!cu.reason, duReason:cu.reason,
      duCanSuspend:cu.state!=='suspended', duCanReactivate:cu.state==='suspended',
      openSuspend:()=>this.setState({suspendOpen:true, suspendClosing:false, susMode:'suspend', susReason:''}),
      openReactivate:()=>this.setState({suspendOpen:true, suspendClosing:false, susMode:'reactivate', susReason:''}),
      suspendOpen:s.suspendOpen, suspendClosingCls:s.suspendClosing?'closing':'',
      closeSuspend:()=>this.closeOv('suspend'),
      susTitle:(s.susMode==='suspend'?'Suspend ':'Reactivate ')+cu.name,
      susNote:s.susMode==='suspend'
        ? 'The account can no longer sign in. Its codes keep their own state - printed media is unaffected by the suspension alone.'
        : 'The account can sign in again. The reason is recorded beside the original suspension.',
      susCta:s.susMode==='suspend'?'Suspend account':'Reactivate account',
      susReason:s.susReason, setSusReason:(e)=>this.setState({susReason:e.target.value}),
      confirmSuspend:()=>{ if(!s.susReason.trim()){ this.toast('A reason is required - it is recorded with the action.'); return; }
        const to=s.susMode==='suspend'?'suspended':'active';
        this.setUser(cu.id,{state:to, reason:s.susMode==='suspend'?s.susReason:''});
        this.closeOv('suspend');
        this.toast(cu.name+(to==='suspended'?' suspended - sessions ended, reason recorded.':' reactivated - reason recorded.')); },
      deleteOpen:s.deleteOpen, deleteClosingCls:s.deleteClosing?'closing':'',
      openDelete:()=>this.setState({deleteOpen:true, deleteClosing:false}),
      closeDelete:()=>this.closeOv('delete'),
      confirmDelete:()=>{ this.setState({users:s.users.filter(u=>u.id!==cu.id)});
        this.closeOv('delete'); this.closeOv('user');
        this.toast(cu.name+' deleted with cascade - account, subscription, invoices, codes and scans removed.'); },
      sfAll:seg(s.sfilt,'all'), sfSub:seg(s.sfilt,'sub'), sfTri:seg(s.sfilt,'trial'), sfEnd:seg(s.sfilt,'ending'),
      sfiltAll:()=>this.setState({sfilt:'all'}), sfiltSub:()=>this.setState({sfilt:'sub'}),
      sfiltTri:()=>this.setState({sfilt:'trial'}), sfiltEnd:()=>this.setState({sfilt:'ending'}),
      subRows, planRows,
      planOpen:s.planOpen, planClosingCls:s.planClosing?'closing':'',
      closePlan:()=>this.closeOv('plan'),
      plName:cp.name, plPrice:cp.price, plQr:cp.qr, plScans:cp.scans, plSeats:cp.seats, plFeatures:cp.features,
      setPlName:(e)=>this.patchPlan({name:e.target.value}), setPlPrice:(e)=>this.patchPlan({price:e.target.value}),
      setPlQr:(e)=>this.patchPlan({qr:e.target.value}), setPlScans:(e)=>this.patchPlan({scans:e.target.value}),
      setPlSeats:(e)=>this.patchPlan({seats:e.target.value}), setPlFeatures:(e)=>this.patchPlan({features:e.target.value}),
      savePlan:()=>{ this.closeOv('plan'); this.toast(cp.name+' saved - the change applies from each account’s next billing period.'); },
      payRows,
      refundOpen:s.refundOpen, refundClosingCls:s.refundClosing?'closing':'',
      closeRefund:()=>this.closeOv('refund'),
      refId:cpay.id, refAmount:cpay.amount,
      confirmRefund:()=>{ this.setState({pays:s.pays.map(p=>p.id===cpay.id?{...p, status:'refunded'}:p)});
        this.closeOv('refund');
        this.toast(cpay.amount+' refund requested at the processor - credit document issued, recorded for '+s.profName+'.'); },
      enqRows:s.enqs.map(e=>({ ...e, statusLbl:e.status==='new'?'New':'Answered', chipCls:e.status==='new'?'paused':'ok',
        ackedCls:e.status==='answered'?'acked':'', isNew:e.status==='new',
        answer:()=>{ this.setState({enqs:s.enqs.map(x=>x.id===e.id?{...x, status:'answered'}:x)});
          this.toast('Enquiry marked answered.', ()=>{ this.setState({enqs:this.state.enqs.map(x=>x.id===e.id?{...x, status:'new'}:x)}); this.toast('Enquiry reopened.'); }); } })),
      pageRows, blockRows,
      edTitle:blk.title, edBody:blk.body, edCta:blk.cta||'',
      edHasCta:blk.kind==='hero', edHasItems:!!blk.items,
      edItemsLbl:isFaq?'Questions in this category':'Sections in this document',
      setTitle:(e)=>this.patchBlock({title:e.target.value}),
      setBody:(e)=>this.patchBlock({body:e.target.value}),
      setCta:(e)=>this.patchBlock({cta:e.target.value}),
      itemRows,
      addItem:()=>{ const items=(blk.items||[]).slice(); items.push({h:'', b:''}); this.patchBlock({items}); },
      edLabel:blk.label,
      canStruct:structOk, structLocked:!structOk,
      canRename:structOk && !blk.fixed,
      setLabel:(e)=>this.patchBlock({label:e.target.value}),
      addBlock:()=>{ const kind=this.state.curPage==='faq'?'faq':(this.state.curPage==='legal'?'doc':'section');
        const nb={label:'New block', kind, title:'', body:''}; if(kind!=='section') nb.items=[];
        const pg={...this.state.pages}; const page={...pg[this.state.curPage]};
        page.blocks=page.blocks.concat([nb]); pg[this.state.curPage]=page;
        this.setState({pages:pg, cmsAcc:page.blocks.length-1});
        this.toast('Block added - name it and fill it in.'); },
      edStatusLbl:curPg.status==='published'?'Published':'Draft',
      edChipCls:curPg.status==='published'?'ok':'paused',
      saveDraft:()=>{ const pg={...s.pages}; pg[s.curPage]={...pg[s.curPage], status:'draft', edited:'just now'}; this.setState({pages:pg});
        this.toast('Draft saved - the live page is unchanged.'); },
      publishPage:()=>{ const prev={status:curPg.status, edited:curPg.edited};
        const pg={...s.pages}; pg[s.curPage]={...pg[s.curPage], status:'published', edited:'just now'}; this.setState({pages:pg});
        this.toast(curPg.name+' is live.', ()=>{ const p2={...this.state.pages}; p2[this.state.curPage]={...p2[this.state.curPage], ...prev}; this.setState({pages:p2}); this.toast('Publish undone - previous version restored.'); }); },
      alertRows,
      profOpen:s.profOpen, profClosingCls:s.profClosing?'closing':'',
      openProfile:()=>this.setState({profOpen:true, profClosing:false, profileOpen:false}),
      closeProfile:()=>this.closeOv('prof'),
      profName:s.profName, setProfName:(e)=>this.setState({profName:e.target.value}),
      saveProfile:()=>{ this.closeOv('prof'); this.toast('Profile saved.'); },
      toasts:s.toasts.map(t=>({...t, hasUndo:!!t.undoFn, undo:()=>{ if(t.undoFn) t.undoFn(); this.setState({toasts:this.state.toasts.filter(x=>x.id!==t.id)}); }})),
    };
  }
  patchPlan(patch){ const p={...this.state.plans}; p[this.state.curPlan]={...p[this.state.curPlan], ...patch}; this.setState({plans:p}); }

  render() {
    const v = this.renderVals()
    return (
      <div className="dcpage-admin">
        {/* ============ PROVISIONED SIGN-IN (Admin: no self-serve sign-up) ============ */}{' '}
        {v.isLogin ? (<>
          <div className="login">
            <div className="grainfx" aria-hidden="true"/>{' '}
            <div className="lhero">
              <img src="assets/logo-white.svg" alt="qurl"/>{' '}
              <div className="word">qurl</div>{' '}
              <div className="tag">Admin console - content, alerts and operations for the qurl platform.</div>
            </div>{' '}
            <div className="lpane">
              <div>
                <h2>Sign in <button className="infoic" data-tt="Access is provisioned by the qurl team. There is no self-serve sign-up for admins." data-ttp="b" aria-label="Access is provisioned by the qurl team. There is no self-serve sign-up for admins.">
                    <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16v-4"/>
                      <path d="M12 8h.01"/>
                    </svg>
                  </button>
                </h2>{' '}
                <p className="mut" style={{margin: '6px 0 0'}}>Demo prototype - the Admin operator role.</p>
              </div>{' '}
              <div className="ss-field">
                <div className="ss-label" data-component="Label">Work email</div>{' '}
                <input className="ss-input" data-component="Input" value={v.email ?? ''} onChange={v.noop} aria-label="Work email"/>
              </div>{' '}
              <div className="ss-field">
                <div className="ss-label" data-component="Label">Password</div>{' '}
                <input className="ss-input" data-component="Input" type="password" value="demo-2026" onChange={v.noop} aria-label="Password"/>
              </div>{' '}
              <button className="ss-btn ss-btn--lg" data-component="Button" onClick={v.doLogin}>Sign in</button>{' '}
              <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                <button className="linkbtn" onClick={v.doReset}>Forgot password?</button>
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {/* ============ APP SHELL (console v2, BA P1 scope) ============ */}{' '}
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
              <button className={`nitem ${v.navDash ?? ''}`} data-tip="Dashboard" onClick={v.goDash}>
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="7" height="9" x="3" y="3" rx="1"/>
                  <rect width="7" height="5" x="14" y="3" rx="1"/>
                  <rect width="7" height="9" x="14" y="12" rx="1"/>
                  <rect width="7" height="5" x="3" y="16" rx="1"/>
                </svg>{' '}
                <span className="nlab">Dashboard</span>
              </button>{' '}
              <button className={`nitem ${v.navUsers ?? ''}`} data-tip="Users" onClick={v.goUsers}>
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>{' '}
                <span className="nlab">Users</span>
              </button>{' '}
              <button className={`nitem ${v.navSubs ?? ''}`} data-tip="Subscriptions" onClick={v.goSubs}>
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
                  <path d="M7 16h8"/>
                  <path d="M7 11h12"/>
                  <path d="M7 6h3"/>
                </svg>{' '}
                <span className="nlab">Subscriptions</span>
              </button>{' '}
              <button className={`nitem ${v.navPay ?? ''}`} data-tip="Payments" onClick={v.goPay}>
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="14" x="2" y="5" rx="2"/>
                  <line x1="2" x2="22" y1="10" y2="10"/>
                </svg>{' '}
                <span className="nlab">Payments</span>
              </button>{' '}
              <button className={`nitem ${v.navPages ?? ''}`} data-tip="Pages" onClick={v.goPages}>
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                  <path d="M10 9H8"/>
                  <path d="M16 13H8"/>
                  <path d="M16 17H8"/>
                </svg>{' '}
                <span className="nlab">Pages</span>
              </button>{' '}
              <button className={`nitem ${v.navAlerts ?? ''}`} data-tip="Alerts" onClick={v.goAlerts}>
                <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                  <path d="M12 9v4"/>
                  <path d="M12 17h.01"/>
                </svg>{' '}
                <span className="nlab">Alerts</span>
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
                  <input className="ss-input" placeholder="Search the console" onChange={v.search} aria-label="Search the console"/>
                </div>{' '}
                <div className="tsp"/>{' '}
                <div className="profwrap">
                  <button className="avbtn" data-component="Avatar" onClick={v.toggleProfile} aria-label="Profile menu" data-tt="Profile" data-ttp="b" aria-haspopup="menu">RM</button>{' '}
                  {v.profileOpen ? (<>
                    <div className="hmenu" role="menu" aria-label="Profile">
                      <div className="mitem" style={{cursor: 'default'}}>
                        <span>
                          <b><I v={v.profName}/></b>riya@qurl.to - Admin (provisioned)</span>
                      </div>{' '}
                      <button className="mitem" onClick={v.openProfile}>
                        <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                        <span>Edit profile</span>
                      </button>{' '}
                      <button className="mitem" onClick={v.doLogout}>
                        <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                          <path d="m16 17 5-5-5-5"/>
                          <path d="M21 12H9"/>
                        </svg>
                        <span>Sign out</span>
                      </button>
                    </div>
                  </>) : null}
                </div>
              </header>{' '}
              <div className="content">
                <div className="ptitle" data-component="PageTitle">
                  {v.onEditor ? (<>
                    <button className="icbtn" onClick={v.goPages} aria-label="Back to pages" data-tt="Back to pages" data-ttp="b">
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m12 19-7-7 7-7"/>
                        <path d="M19 12H5"/>
                      </svg>
                    </button>
                  </>) : null}{' '}
                  <h1><I v={v.pageTitle}/></h1>{' '}
                  {v.onEditor ? (<>
                    <span className={`chip ${v.edChipCls ?? ''}`}><I v={v.edStatusLbl}/></span>
                  </>) : null}{' '}
                  {v.onDash ? (<>
                    <button className="infoic" data-tt="The takedown queue and business analytics arrive in Phase 2 per the delivery estimate." data-ttp="b" aria-label="The takedown queue and business analytics arrive in Phase 2 per the delivery estimate.">
                      <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 16v-4"/>
                        <path d="M12 8h.01"/>
                      </svg>
                    </button>
                  </>) : null}{' '}
                  <div className="tsp"/>{' '}
                  {v.onEditor ? (<>
                    <span className="sactions">
                      <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.saveDraft}>Save draft</button>
                      <button className="ss-btn ss-btn--sm" data-component="Button" onClick={v.publishPage}>Publish</button>
                    </span>
                  </>) : null}
                </div>{' '}
                {/* ============ DASHBOARD (023 FR-006/007) ============ */}{' '}
                {v.onDash ? (<>
                  <section className="sect">
                    <div className="grid4" style={{gridTemplateColumns: 'repeat(3,1fr)'}}>
                      <div className="ocard kpi" data-component="Card">
                        <span className="klbl">Total users</span>
                        <span className="kval">2,412</span>
                        <span className="kdelta up">
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 7h6v6"/>
                            <path d="m22 7-8.5 8.5-5-5L2 17"/>
                          </svg> +124 this month</span>
                      </div>{' '}
                      <div className="ocard kpi" data-component="Card">
                        <span className="klbl">Active subscriptions</span>
                        <span className="kval">1,310</span>
                        <span className="kdelta up">
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 7h6v6"/>
                            <path d="m22 7-8.5 8.5-5-5L2 17"/>
                          </svg> +38 this month</span>
                      </div>{' '}
                      <div className="ocard kpi" data-component="Card">
                        <span className="klbl">Active trials</span>
                        <span className="kval">184</span>
                        <span className="kdelta flat">31 ending within 7 days</span>
                      </div>{' '}
                      <div className="ocard kpi" data-component="Card">
                        <span className="klbl">MRR</span>
                        <span className="kval">€14,280</span>
                        <span className="kdelta up">
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 7h6v6"/>
                            <path d="m22 7-8.5 8.5-5-5L2 17"/>
                          </svg> +6.2% vs last month</span>{' '}
                        <span className="spark">
                          <i style={{height: '40%'}}/>
                          <i style={{height: '46%'}}/>
                          <i style={{height: '44%'}}/>
                          <i style={{height: '58%'}}/>
                          <i style={{height: '66%'}}/>
                          <i style={{height: '78%'}}/>
                          <i className="hot" style={{height: '100%'}}/>
                        </span>
                      </div>{' '}
                      <div className="ocard kpi" data-component="Card">
                        <span className="klbl">Total codes</span>
                        <span className="kval">6,930</span>
                        <span className="kdelta up">
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 7h6v6"/>
                            <path d="m22 7-8.5 8.5-5-5L2 17"/>
                          </svg> +212 this month</span>
                      </div>{' '}
                      <div className="ocard kpi" data-component="Card">
                        <span className="klbl">Scans this month</span>{' '}
                        {v.kpiOk ? (<>
                          <span className="kval">1.2M</span>
                          <span className="kdelta up">
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M16 7h6v6"/>
                              <path d="m22 7-8.5 8.5-5-5L2 17"/>
                            </svg> +9% vs last month</span>
                        </>) : null}{' '}
                        {v.kpiDown ? (<>
                          <span className="kna">Source unavailable - the other figures are live (FR-007)</span>
                        </>) : null}
                      </div>
                    </div>{' '}
                    <label style={{display: 'flex', alignItems: 'center', gap: '8px', font: '400 12.5px/1.4 var(--font-sans)', color: 'var(--muted-foreground)', cursor: 'pointer'}}>
                      <input type="checkbox" checked={v.outageOn ?? false} onChange={v.toggleOutage} data-component="Checkbox"/> Demo: a KPI source outage</label>
                  </section>
                </>) : null}{' '}
                {/* ============ USERS (024 US1-US3) ============ */}{' '}
                {v.onUsers ? (<>
                  <section className="sect">
                    <div className="consbar">
                      <div className="gsearch" data-component="Input">
                        <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"/>
                          <circle cx="11" cy="11" r="8"/>
                        </svg>
                        <input className="ss-input" placeholder="Search by name or email" onChange={v.userSearch} aria-label="Search users"/>
                      </div>{' '}
                      <div className="chipgroup" data-component="ChipGroup" role="group" aria-label="State filter">
                        <button className={`segbtn ${v.ufAll ?? ''}`} onClick={v.ufiltAll}>All</button>{' '}
                        <button className={`segbtn ${v.ufAct ?? ''}`} onClick={v.ufiltAct}>Active</button>{' '}
                        <button className={`segbtn ${v.ufTri ?? ''}`} onClick={v.ufiltTri}>Trial</button>{' '}
                        <button className={`segbtn ${v.ufSus ?? ''}`} onClick={v.ufiltSus}>Suspended</button>
                      </div>
                    </div>{' '}
                    <div className="tblwrap">
                      <table className="atable" data-component="Table">
                        <thead>
                          <tr>
                            <th>Account</th>
                            <th>State</th>
                            <th className="num">Codes</th>
                            <th>Joined</th>
                            <th className="act"/>
                          </tr>
                        </thead>
                        <tbody>
                          {(v.userRows || []).map((u, i0) => (<React.Fragment key={i0}>
                            <tr>
                              <td>
                                <b style={{fontWeight: '600'}}><I v={u.name}/></b>
                                <span className="mono" style={{display: 'block', color: 'var(--muted-foreground)'}}><I v={u.email}/></span>
                              </td>
                              <td>
                                <span className={`chip ${u.chipCls ?? ''}`}><I v={u.stateLbl}/></span>
                              </td>
                              <td className="num"><I v={u.codes}/></td>
                              <td><I v={u.joined}/></td>
                              <td className="act">
                                <button className="iact" onClick={u.open} aria-label="Open account" data-tt="Open account" data-ttp="tl">
                                  <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M15 3h6v6"/>
                                    <path d="M10 14 21 3"/>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          </React.Fragment>))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                </>) : null}{' '}
                {/* ============ SUBSCRIPTIONS & PLANS (024 US4/US5) ============ */}{' '}
                {v.onSubs ? (<>
                  <section className="sect">
                    <h2>Active subscriptions and trials</h2>{' '}
                    <div className="consbar">
                      <div className="chipgroup" data-component="ChipGroup" role="group" aria-label="Subscription filter">
                        <button className={`segbtn ${v.sfAll ?? ''}`} onClick={v.sfiltAll}>All</button>{' '}
                        <button className={`segbtn ${v.sfSub ?? ''}`} onClick={v.sfiltSub}>Subscriptions</button>{' '}
                        <button className={`segbtn ${v.sfTri ?? ''}`} onClick={v.sfiltTri}>Trials</button>{' '}
                        <button className={`segbtn ${v.sfEnd ?? ''}`} onClick={v.sfiltEnd}>Ending soon</button>
                      </div>
                    </div>{' '}
                    <div className="tblwrap">
                      <table className="atable" data-component="Table">
                        <thead>
                          <tr>
                            <th>Account</th>
                            <th>Plan</th>
                            <th>Kind</th>
                            <th>Status</th>
                            <th>Renews / ends</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(v.subRows || []).map((s, i0) => (<React.Fragment key={i0}>
                            <tr>
                              <td>
                                <b style={{fontWeight: '600'}}><I v={s.name}/></b>
                              </td>
                              <td><I v={s.plan}/></td>
                              <td>
                                <span className={`chip ${s.kindCls ?? ''}`}><I v={s.kindLbl}/></span>
                              </td>
                              <td>
                                {s.conv ? (<>
                                  <span className="chip ok">Converted</span>
                                </>) : null}
                                {s.notConv ? (<>
                                  <span className="chip mut"><I v={s.statusLbl}/></span>
                                </>) : null}
                              </td>
                              <td><I v={s.ends}/></td>
                            </tr>
                          </React.Fragment>))}
                        </tbody>
                      </table>
                    </div>
                  </section>{' '}
                  <section className="sect">
                    <h2>Plans <button className="infoic" data-tt="Plan changes apply to existing accounts from their next billing period, never immediately." data-ttp="b" aria-label="Plan changes apply to existing accounts from their next billing period, never immediately.">
                        <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 16v-4"/>
                          <path d="M12 8h.01"/>
                        </svg>
                      </button>
                    </h2>{' '}
                    <div className="vgrid v2" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
                      {(v.planRows || []).map((p, i0) => (<React.Fragment key={i0}>
                        <div className="ocard planrow2" data-component="Card">
                          <b><I v={p.name}/> - <I v={p.price}/></b>{' '}
                          <span className="pfeat"><I v={p.qr}/> dynamic codes · <I v={p.scans}/> scans/mo · <I v={p.seats}/> seats</span>{' '}
                          <span className="pfeat"><I v={p.features}/></span>{' '}
                          <span className="hca">
                            <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={p.edit}>Edit</button>
                          </span>
                        </div>
                      </React.Fragment>))}
                    </div>
                  </section>
                </>) : null}{' '}
                {/* ============ PAYMENTS (025 US1-US3) ============ */}{' '}
                {v.onPay ? (<>
                  <section className="sect">
                    <div className="tblwrap">
                      <table className="atable" data-component="Table">
                        <thead>
                          <tr>
                            <th>Payment</th>
                            <th>Account</th>
                            <th className="num">Amount</th>
                            <th>Status</th>
                            <th className="act"/>
                          </tr>
                        </thead>
                        <tbody>
                          {(v.payRows || []).map((p, i0) => (<React.Fragment key={i0}>
                            <tr>
                              <td className="mono"><I v={p.id}/></td>
                              <td><I v={p.name}/></td>
                              <td className="num"><I v={p.amount}/></td>
                              <td>
                                <span className={`chip ${p.chipCls ?? ''}`}><I v={p.statusLbl}/></span>
                              </td>
                              <td className="act">
                                {p.canRefund ? (<>
                                  <button className="iact" onClick={p.askRefund} aria-label="Issue refund" data-tt="Issue refund" data-ttp="tl">
                                    <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                                      <path d="M3 3v5h5"/>
                                    </svg>
                                  </button>
                                </>) : null}
                              </td>
                            </tr>
                          </React.Fragment>))}
                        </tbody>
                      </table>
                    </div>{' '}
                    <p className="mut" style={{margin: '0', font: '400 12.5px/1.5 var(--font-sans)'}}>Chargebacks and failed payments also raise alerts - see the Alerts page.</p>
                  </section>
                </>) : null}{' '}
                {/* ============ CMS PAGES LIST (T9 cards) ============ */}{' '}
                {v.onPages ? (<>
                  <div className="pgrows">
                    {(v.pageRows || []).map((p, i0) => (<React.Fragment key={i0}>
                      <div className="hcard" data-component="Card">
                        <b className="hct"><I v={p.name}/></b>{' '}
                        <span className="hcs"><I v={p.slug}/> · <I v={p.blocks}/> content blocks</span>{' '}
                        <div className="hcm">
                          <span className={`chip ${p.chipCls ?? ''}`}><I v={p.statusLbl}/></span>
                          <span className="hctime">Edited <I v={p.edited}/></span>
                        </div>{' '}
                        <span className="hca">
                          <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={p.open}>Edit</button>
                        </span>
                      </div>
                    </React.Fragment>))}
                  </div>{' '}
                  <section className="sect" style={{marginTop: '24px'}}>
                    <h2>Contact enquiries</h2>{' '}
                    <div className="arows">
                      {(v.enqRows || []).map((e, i0) => (<React.Fragment key={i0}>
                        <div className={`hcard ${e.ackedCls ?? ''}`} data-component="Card">
                          <b className="hct"><I v={e.subject}/></b>{' '}
                          <span className="hcs"><I v={e.from}/> · <I v={e.msg}/></span>{' '}
                          <div className="hcm">
                            <span className={`chip ${e.chipCls ?? ''}`}><I v={e.statusLbl}/></span>
                            <span className="hctime"><I v={e.time}/></span>
                          </div>{' '}
                          {e.isNew ? (<>
                            <span className="hca">
                              <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={e.answer}>Mark answered</button>
                            </span>
                          </>) : null}
                        </div>
                      </React.Fragment>))}
                    </div>
                  </section>
                </>) : null}{' '}
                {/* ============ STRUCTURED PAGE EDITOR (block rail + fields) ============ */}{' '}
                {v.onEditor ? (<>
                  <div className="edgrid">
                    <div className="blkrail" role="listbox" aria-label="Content blocks">
                      {(v.blockRows || []).map((b, i0) => (<React.Fragment key={i0}>
                        <div className="blkrow">
                          <button className={`blkbtn ${b.cls ?? ''}`} onClick={b.pick}>
                            <b><I v={b.label}/></b>
                            <span><I v={b.kindLbl}/></span>
                          </button>{' '}
                          {b.canDel ? (<>
                            <button className="iact bdel" onClick={b.del} aria-label="Delete block" data-tt="Delete block" data-ttp="tl">
                              <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                                <path d="M3 6h18"/>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                              </svg>
                            </button>
                          </>) : null}
                        </div>
                      </React.Fragment>))}{' '}
                      {v.canStruct ? (<>
                        <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.addBlock} style={{alignSelf: 'flex-start'}}>
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width: '15px', height: '15px'}}>
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                          </svg> Add block</button>
                      </>) : null}{' '}
                      {v.structLocked ? (<>
                        <div style={{font: '400 11.5px/1.5 var(--font-sans)', color: 'var(--muted-foreground)'}}>Blocks on this page are fixed - only their text can be edited.</div>
                      </>) : null}
                    </div>{' '}
                    <div className="edfields">
                      {v.canRename ? (<>
                        <div className="ss-field">
                          <div className="ss-label" data-component="Label">Block name</div>{' '}
                          <input className="ss-input" data-component="Input" value={v.edLabel ?? ''} onChange={v.setLabel} aria-label="Block name"/>
                        </div>
                      </>) : null}{' '}
                      <div className="ss-field">
                        <div className="ss-label" data-component="Label">Title</div>{' '}
                        <input className="ss-input" data-component="Input" value={v.edTitle ?? ''} onChange={v.setTitle} aria-label="Title"/>
                      </div>{' '}
                      <div className="ss-field">
                        <div className="ss-label" data-component="Label">Body</div>{' '}
                        <textarea className="ss-input" data-component="Input" value={v.edBody ?? ''} onChange={v.setBody} aria-label="Body"/>
                      </div>{' '}
                      {v.edHasCta ? (<>
                        <div className="ss-field">
                          <div className="ss-label" data-component="Label">Call to action label</div>{' '}
                          <input className="ss-input" data-component="Input" value={v.edCta ?? ''} onChange={v.setCta} aria-label="Call to action label"/>
                        </div>
                      </>) : null}{' '}
                      {v.edHasItems ? (<>
                        <div className="ss-label" data-component="Label" style={{marginTop: '6px'}}><I v={v.edItemsLbl}/></div>{' '}
                        {(v.itemRows || []).map((it, i0) => (<React.Fragment key={i0}>
                          <div className="itemrow">
                            <button className="iact idel" onClick={it.del} aria-label="Remove item" data-tt="Remove" data-ttp="tl">
                              <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M3 6h18"/>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                              </svg>
                            </button>{' '}
                            <div className="ss-field">
                              <div className="ss-label" data-component="Label"><I v={it.hLbl}/></div>{' '}
                              <input className="ss-input" data-component="Input" value={it.h ?? ''} onChange={it.setH} aria-label={it.hLbl}/>
                            </div>{' '}
                            <div className="ss-field">
                              <div className="ss-label" data-component="Label"><I v={it.bLbl}/></div>{' '}
                              <textarea className="ss-input" data-component="Input" value={it.b ?? ''} onChange={it.setB} aria-label={it.bLbl}/>
                            </div>
                          </div>
                        </React.Fragment>))}{' '}
                        <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.addItem} style={{alignSelf: 'flex-start'}}>
                          <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                          </svg> Add item</button>
                      </>) : null}{' '}
                      <p className="mut" style={{margin: '0', font: '400 12.5px/1.5 var(--font-sans)', color: 'var(--muted-foreground)'}}>Saving keeps a draft only operators see. Publishing replaces the live page for every visitor.</p>
                    </div>
                  </div>
                </>) : null}{' '}
                {/* ============ ALERTS (T9 cards) ============ */}{' '}
                {v.onAlerts ? (<>
                  <div className="arows">
                    {(v.alertRows || []).map((a, i0) => (<React.Fragment key={i0}>
                      <div className={`hcard ${a.ackedCls ?? ''}`} data-component="Card">
                        <b className="hct">
                          <span style={{color: a.icColor, display: 'inline-flex'}}>
                            <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                              <path d="M12 9v4"/>
                              <path d="M12 17h.01"/>
                            </svg>
                          </span><I v={a.title}/></b>{' '}
                        <span className="hcs"><I v={a.body}/></span>{' '}
                        <div className="hcm">
                          <span className={`chip ${a.chipCls ?? ''}`}><I v={a.sevLbl}/></span>
                          <span className="hctime"><I v={a.time}/></span>
                        </div>{' '}
                        {a.notAcked ? (<>
                          <span className="hca">
                            <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={a.ack}>
                              <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"/>
                              </svg> Acknowledge</button>
                          </span>
                        </>) : null}
                      </div>
                    </React.Fragment>))}
                  </div>
                </>) : null}
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {/* ============ DIALOGS (O7 solid) ============ */}{' '}
        {v.userOpen ? (<>
          <div className={`dlgwrap ${v.userClosingCls ?? ''}`} role="dialog" aria-modal="true" aria-label="Account detail">
            <div className="scrim" onClick={v.closeUser}/>{' '}
            <div className="dlg" style={{width: 'min(560px,94vw)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <h3><I v={v.duName}/></h3>
                <span className={`chip ${v.duChipCls ?? ''}`}><I v={v.duStateLbl}/></span>
                <div className="tsp"/>{' '}
                <button className="icbtn" onClick={v.closeUser} aria-label="Close" data-tt="Close" data-ttp="b">
                  <svg className="lic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>{' '}
              <div>
                <div className="kvd">
                  <b>Email</b>
                  <span className="v"><I v={v.duEmail}/></span>
                </div>{' '}
                <div className="kvd">
                  <b>Plan</b>
                  <span className="v"><I v={v.duPlan}/></span>
                </div>{' '}
                <div className="kvd">
                  <b>Codes</b>
                  <span className="v"><I v={v.duCodes}/></span>
                </div>{' '}
                <div className="kvd">
                  <b>Joined</b>
                  <span className="v"><I v={v.duJoined}/></span>
                </div>{' '}
                {v.duHasReason ? (<>
                  <div className="kvd">
                    <b>Suspension reason</b>
                    <span className="v"><I v={v.duReason}/></span>
                  </div>
                </>) : null}
              </div>{' '}
              <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                {v.duCanSuspend ? (<>
                  <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.openSuspend}>Suspend</button>
                </>) : null}{' '}
                {v.duCanReactivate ? (<>
                  <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.openReactivate}>Reactivate</button>
                </>) : null}{' '}
                <div className="tsp"/>{' '}
                <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.openDelete} style={{color: 'var(--hard-block)'}}>Delete account</button>
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {v.suspendOpen ? (<>
          <div className={`dlgwrap ${v.suspendClosingCls ?? ''}`} role="dialog" aria-modal="true" aria-label={v.susTitle}>
            <div className="scrim" onClick={v.closeSuspend}/>{' '}
            <div className="dlg">
              <h3><I v={v.susTitle}/></h3>{' '}
              <p className="mut" style={{margin: '0'}}><I v={v.susNote}/></p>{' '}
              <div className="ss-field">
                <div className="ss-label" data-component="Label">Reason (recorded with your name)</div>{' '}
                <input className="ss-input" data-component="Input" value={v.susReason ?? ''} onChange={v.setSusReason} placeholder="e.g. repeat malicious destinations" aria-label="Reason"/>
              </div>{' '}
              <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end'}}>
                <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.closeSuspend}>Cancel</button>{' '}
                <button className="ss-btn ss-btn--sm" data-component="Button" onClick={v.confirmSuspend}><I v={v.susCta}/></button>
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {v.deleteOpen ? (<>
          <div className={`dlgwrap ${v.deleteClosingCls ?? ''}`} role="dialog" aria-modal="true" aria-label="Delete account">
            <div className="scrim" onClick={v.closeDelete}/>{' '}
            <div className="dlg">
              <h3>Delete <I v={v.duName}/>?</h3>{' '}
              <p className="mut" style={{margin: '0'}}>The cascade removes the account, its subscription, invoices, codes and scan history. Printed codes stop resolving. This cannot be undone (FR-006).</p>{' '}
              <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end'}}>
                <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.closeDelete}>Cancel</button>{' '}
                <button className="ss-btn ss-btn--sm" data-component="Button" onClick={v.confirmDelete} style={{background: 'var(--hard-block)'}}>Delete with cascade</button>
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {v.refundOpen ? (<>
          <div className={`dlgwrap ${v.refundClosingCls ?? ''}`} role="dialog" aria-modal="true" aria-label="Issue refund">
            <div className="scrim" onClick={v.closeRefund}/>{' '}
            <div className="dlg">
              <h3>Refund <I v={v.refId}/>?</h3>{' '}
              <p className="mut" style={{margin: '0'}}><I v={v.refAmount}/> is refunded at the processor and a credit document is issued against the original invoice. The action is recorded with your name.</p>{' '}
              <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end'}}>
                <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.closeRefund}>Cancel</button>{' '}
                <button className="ss-btn ss-btn--sm" data-component="Button" onClick={v.confirmRefund}>Issue refund</button>
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {v.planOpen ? (<>
          <div className={`dlgwrap ${v.planClosingCls ?? ''}`} role="dialog" aria-modal="true" aria-label="Edit plan">
            <div className="scrim" onClick={v.closePlan}/>{' '}
            <div className="dlg" style={{width: 'min(560px,94vw)'}}>
              <h3>Edit <I v={v.plName}/></h3>{' '}
              <div className="ss-field">
                <div className="ss-label" data-component="Label">Name</div>{' '}
                <input className="ss-input" data-component="Input" value={v.plName ?? ''} onChange={v.setPlName} aria-label="Plan name"/>
              </div>{' '}
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px'}}>
                <div className="ss-field">
                  <div className="ss-label" data-component="Label">Price (EUR/mo)</div>{' '}
                  <input className="ss-input" data-component="Input" value={v.plPrice ?? ''} onChange={v.setPlPrice} aria-label="Price"/>
                </div>{' '}
                <div className="ss-field">
                  <div className="ss-label" data-component="Label">Seats</div>{' '}
                  <input className="ss-input" data-component="Input" value={v.plSeats ?? ''} onChange={v.setPlSeats} aria-label="Seats"/>
                </div>{' '}
                <div className="ss-field">
                  <div className="ss-label" data-component="Label">Dynamic-QR limit</div>{' '}
                  <input className="ss-input" data-component="Input" value={v.plQr ?? ''} onChange={v.setPlQr} aria-label="Dynamic QR limit"/>
                </div>{' '}
                <div className="ss-field">
                  <div className="ss-label" data-component="Label">Monthly scan limit</div>{' '}
                  <input className="ss-input" data-component="Input" value={v.plScans ?? ''} onChange={v.setPlScans} aria-label="Monthly scan limit"/>
                </div>
              </div>{' '}
              <div className="ss-field">
                <div className="ss-label" data-component="Label">Feature list</div>{' '}
                <textarea className="ss-input" data-component="Input" value={v.plFeatures ?? ''} onChange={v.setPlFeatures} aria-label="Feature list"/>
              </div>{' '}
              <p className="mut" style={{margin: '0', font: '400 12px/1.5 var(--font-sans)'}}>Changes apply to existing accounts from their next billing period (FR-009).</p>{' '}
              <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end'}}>
                <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.closePlan}>Cancel</button>{' '}
                <button className="ss-btn ss-btn--sm" data-component="Button" onClick={v.savePlan}>Save plan</button>
              </div>
            </div>
          </div>
        </>) : null}{' '}
        {v.profOpen ? (<>
          <div className={`dlgwrap ${v.profClosingCls ?? ''}`} role="dialog" aria-modal="true" aria-label="Edit profile">
            <div className="scrim" onClick={v.closeProfile}/>{' '}
            <div className="dlg">
              <h3>Edit profile</h3>{' '}
              <div className="ss-field">
                <div className="ss-label" data-component="Label">Name</div>{' '}
                <input className="ss-input" data-component="Input" value={v.profName ?? ''} onChange={v.setProfName} aria-label="Name"/>
              </div>{' '}
              <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end'}}>
                <button className="ss-btn ss-btn--outline ss-btn--sm" data-component="Button" onClick={v.closeProfile}>Cancel</button>{' '}
                <button className="ss-btn ss-btn--sm" data-component="Button" onClick={v.saveProfile}>Save</button>
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
