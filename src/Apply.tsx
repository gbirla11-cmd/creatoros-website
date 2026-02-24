import { useEffect } from 'react';

// Embed the full onboarding form HTML directly
const APPLY_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Apply to CreatorOS</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Syne:wght@400;500;600;700&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --ink: #0F0E0C; --ink-2: #2C2A25; --ink-3: #6B6860; --ink-4: #AAA89F;
      --bg: #F5F2EC; --surface: #FDFCFA; --border: #E4E0D8;
      --teal: #0A6B5E; --teal-l: #E4F0EE; --teal-mid: #B8D8D4;
      --red: #B83232; --red-l: #FBEAEA;
    }
    html { scroll-behavior: smooth; }
    body { font-family: 'Syne', sans-serif; background: var(--bg); color: var(--ink); min-height: 100vh; -webkit-font-smoothing: antialiased; }
    .shell { display: grid; grid-template-columns: 1fr 560px 1fr; min-height: 100vh; }
    .left-col { background: var(--ink); position: sticky; top: 0; height: 100vh; display: flex; flex-direction: column; padding: 48px 40px; overflow: hidden; }
    .center-col { padding: 56px 40px 100px; min-height: 100vh; }
    .right-col { background: var(--bg); }
    .logo { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: #fff; letter-spacing: .02em; margin-bottom: 48px; }
    .logo span { color: #6ECFC4; font-style: italic; }
    .lp-headline { font-family: 'Cormorant Garamond', serif; font-size: 36px; line-height: 1.15; color: #fff; font-weight: 400; letter-spacing: -.01em; margin-bottom: 20px; }
    .lp-headline em { color: #6ECFC4; font-style: italic; }
    .lp-sub { font-size: 13px; color: rgba(255,255,255,.45); line-height: 1.7; font-weight: 400; margin-bottom: 40px; }
    .lp-stats { display: flex; flex-direction: column; gap: 16px; margin-bottom: auto; }
    .stat-item { display: flex; align-items: flex-start; gap: 14px; padding: 14px 16px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.08); border-radius: 10px; }
    .stat-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
    .stat-text { font-size: 12px; color: rgba(255,255,255,.5); line-height: 1.55; }
    .stat-text strong { color: #fff; display: block; font-size: 13px; margin-bottom: 2px; }
    .lp-step-track { margin-top: 40px; display: flex; flex-direction: column; gap: 0; }
    .lp-step-item { display: flex; align-items: center; gap: 12px; padding: 10px 0; position: relative; }
    .lp-step-item:not(:last-child)::after { content: ''; position: absolute; left: 14px; top: 36px; width: 1px; height: 20px; background: rgba(255,255,255,.1); }
    .lp-step-dot { width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,.15); display: flex; align-items: center; justify-content: center; font-size: 11px; color: rgba(255,255,255,.3); flex-shrink: 0; transition: all .3s; }
    .lp-step-dot.active { border-color: #6ECFC4; color: #6ECFC4; background: rgba(110,207,196,.1); box-shadow: 0 0 12px rgba(110,207,196,.2); }
    .lp-step-dot.done { background: #6ECFC4; border-color: #6ECFC4; color: var(--ink); font-weight: 700; }
    .lp-step-label { font-size: 12px; color: rgba(255,255,255,.3); transition: color .3s; }
    .lp-step-item.active .lp-step-label { color: #fff; font-weight: 600; }
    .lp-step-item.done .lp-step-label { color: rgba(255,255,255,.5); }
    .progress-wrap { margin-bottom: 40px; }
    .progress-meta { display: flex; justify-content: space-between; font-size: 11px; color: var(--ink-4); font-weight: 600; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 8px; }
    .progress-bar { height: 2px; background: var(--border); border-radius: 2px; overflow: hidden; }
    .progress-fill { height: 100%; background: var(--teal); border-radius: 2px; transition: width .5s cubic-bezier(.4,0,.2,1); }
    .step-body { animation: fadeUp .35s ease; }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
    .step-eyebrow { font-size: 10px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; color: var(--teal); margin-bottom: 12px; }
    .step-title { font-family: 'Cormorant Garamond', serif; font-size: 32px; line-height: 1.15; color: var(--ink); font-weight: 600; letter-spacing: -.02em; margin-bottom: 10px; }
    .step-desc { font-size: 13.5px; color: var(--ink-3); line-height: 1.7; font-weight: 400; margin-bottom: 32px; }
    .field { display: flex; flex-direction: column; gap: 7px; margin-bottom: 20px; }
    .field label { font-size: 12px; font-weight: 600; color: var(--ink-2); letter-spacing: .04em; text-transform: uppercase; }
    .req { color: var(--red); }
    .field input, .field textarea, .field select { font-family: 'Syne', sans-serif; font-size: 14px; padding: 13px 16px; border: 1.5px solid var(--border); border-radius: 10px; background: var(--surface); color: var(--ink); outline: none; transition: border-color .2s, box-shadow .2s; width: 100%; resize: vertical; appearance: none; }
    .field input:focus, .field textarea:focus, .field select:focus { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(10,107,94,.1); }
    .field input.err, .field textarea.err, .field select.err { border-color: var(--red); }
    .field-hint { font-size: 11.5px; color: var(--ink-4); line-height: 1.5; }
    .err-msg { font-size: 12px; color: var(--red); }
    .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .choice-grid { display: grid; gap: 10px; margin-bottom: 20px; }
    .choice-grid.cols-2 { grid-template-columns: 1fr 1fr; }
    .choice-grid.cols-1 { grid-template-columns: 1fr; }
    .choice-card { background: var(--surface); border: 1.5px solid var(--border); border-radius: 10px; padding: 14px 16px; cursor: pointer; transition: all .18s; display: flex; align-items: flex-start; gap: 12px; user-select: none; }
    .choice-card:hover { border-color: var(--teal-mid); background: var(--teal-l); }
    .choice-card.selected { border-color: var(--teal); background: var(--teal-l); box-shadow: 0 0 0 3px rgba(10,107,94,.08); }
    .choice-check { width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid var(--border); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 9px; color: transparent; transition: all .18s; margin-top: 1px; }
    .choice-card.selected .choice-check { background: var(--teal); border-color: var(--teal); color: #fff; }
    .choice-card.multi .choice-check { border-radius: 4px; }
    .choice-icon { font-size: 20px; flex-shrink: 0; }
    .choice-content { flex: 1; }
    .choice-label { font-size: 13px; font-weight: 600; color: var(--ink); margin-bottom: 2px; }
    .choice-desc { font-size: 12px; color: var(--ink-3); line-height: 1.45; }
    .slider-wrap { margin-bottom: 20px; }
    .slider-label-row { display: flex; justify-content: space-between; font-size: 12px; color: var(--ink-3); margin-bottom: 8px; }
    .slider-val { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: var(--teal); }
    input[type=range] { width: 100%; height: 4px; appearance: none; background: var(--border); border-radius: 4px; outline: none; cursor: pointer; }
    input[type=range]::-webkit-slider-thumb { appearance: none; width: 20px; height: 20px; border-radius: 50%; background: var(--teal); border: 3px solid var(--surface); box-shadow: 0 1px 4px rgba(0,0,0,.2); cursor: pointer; }
    .slider-ticks { display: flex; justify-content: space-between; font-size: 10px; color: var(--ink-4); margin-top: 6px; }
    .scale-row { display: flex; gap: 8px; margin-bottom: 6px; }
    .scale-btn { flex: 1; padding: 10px 0; text-align: center; border: 1.5px solid var(--border); border-radius: 8px; background: var(--surface); cursor: pointer; font-size: 13px; font-weight: 600; color: var(--ink-3); transition: all .15s; font-family: 'Syne', sans-serif; }
    .scale-btn:hover { border-color: var(--teal-mid); color: var(--teal); }
    .scale-btn.selected { background: var(--teal); border-color: var(--teal); color: #fff; }
    .scale-labels { display: flex; justify-content: space-between; font-size: 10px; color: var(--ink-4); }
    .divider { border: none; border-top: 1px solid var(--border); margin: 28px 0; }
    .section-label { font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-4); margin-bottom: 16px; }
    .err-banner { background: var(--red-l); border: 1px solid rgba(184,50,50,.2); color: var(--red); padding: 11px 14px; border-radius: 9px; font-size: 13px; margin-bottom: 20px; }
    .form-nav { display: flex; align-items: center; justify-content: space-between; margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--border); }
    .btn-ghost { background: transparent; border: 1.5px solid var(--border); border-radius: 9px; padding: 11px 22px; font-size: 13px; font-weight: 600; color: var(--ink-3); cursor: pointer; transition: all .15s; font-family: 'Syne', sans-serif; }
    .btn-ghost:hover { border-color: var(--ink-4); color: var(--ink); }
    .btn-next { background: var(--ink); color: #fff; border: none; border-radius: 9px; padding: 12px 28px; font-size: 13px; font-weight: 600; cursor: pointer; transition: background .2s; font-family: 'Syne', sans-serif; display: flex; align-items: center; gap: 8px; }
    .btn-next:hover { background: #2a2620; }
    .btn-submit { background: var(--teal); color: #fff; border: none; border-radius: 9px; padding: 13px 32px; font-size: 14px; font-weight: 700; cursor: pointer; transition: background .2s; font-family: 'Syne', sans-serif; display: flex; align-items: center; gap: 8px; }
    .btn-submit:hover:not(:disabled) { background: #085548; }
    .btn-submit:disabled { opacity: .6; cursor: not-allowed; }
    .spinner { width: 14px; height: 14px; border-radius: 50%; border: 2px solid rgba(255,255,255,.3); border-top-color: #fff; animation: spin .7s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .success-screen { animation: fadeUp .4s ease; text-align: center; padding: 40px 0; }
    .success-badge { width: 72px; height: 72px; border-radius: 50%; background: var(--teal-l); border: 2px solid var(--teal-mid); display: flex; align-items: center; justify-content: center; font-size: 32px; margin: 0 auto 24px; animation: pop .5s cubic-bezier(.175,.885,.32,1.275); }
    @keyframes pop { from { transform: scale(0); } to { transform: scale(1); } }
    .success-screen h2 { font-family: 'Cormorant Garamond', serif; font-size: 34px; font-weight: 600; color: var(--ink); letter-spacing: -.02em; margin-bottom: 12px; }
    .success-screen p { font-size: 14px; color: var(--ink-3); line-height: 1.7; max-width: 400px; margin: 0 auto 28px; }
    .success-next { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px 24px; text-align: left; margin-bottom: 24px; }
    .sn-title { font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-4); margin-bottom: 14px; }
    .sn-step { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--border); font-size: 13px; color: var(--ink-2); }
    .sn-step:last-child { border-bottom: none; }
    .sn-num { width: 22px; height: 22px; border-radius: 50%; background: var(--teal-l); border: 1px solid var(--teal-mid); color: var(--teal); font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .back-link { font-size: 13px; color: var(--teal); text-decoration: none; font-weight: 600; cursor: pointer; }
    .back-link:hover { text-decoration: underline; }
    @media (max-width: 900px) { .shell { grid-template-columns: 1fr; } .left-col { display: none; } .right-col { display: none; } .center-col { padding: 32px 20px 80px; } }
    @media (max-width: 520px) { .field-row { grid-template-columns: 1fr; } .choice-grid.cols-2 { grid-template-columns: 1fr; } .scale-row { gap: 5px; } }
  </style>
</head>
<body>
<div class="shell">
  <div class="left-col">
    <div class="logo">Creator<span>OS</span></div>
    <div class="lp-headline">Tell us about<br/>your <em>creative</em><br/>business</div>
    <div class="lp-sub">This isn't a generic form. Every answer shapes how we build your AI manager — so be specific and honest.</div>
    <div class="lp-stats">
      <div class="stat-item"><div class="stat-icon">🎯</div><div class="stat-text"><strong>Selective Onboarding</strong>We take on 10 founding clients. This form helps us find the right fit.</div></div>
      <div class="stat-item"><div class="stat-icon">🤖</div><div class="stat-text"><strong>AI-Personalised</strong>Your answers directly train your AI manager to understand your brand.</div></div>
      <div class="stat-item"><div class="stat-icon">⏱️</div><div class="stat-text"><strong>5–7 minutes</strong>That's all it takes. We'll follow up within 48 hours.</div></div>
    </div>
    <div class="lp-step-track" id="lpStepTrack"></div>
  </div>
  <div class="center-col">
    <div class="progress-wrap">
      <div class="progress-meta"><span id="progressLabel">Step 1 of 6</span><span id="progressPct">0%</span></div>
      <div class="progress-bar"><div class="progress-fill" id="progressFill" style="width:0%"></div></div>
    </div>
    <div id="formContent"></div>
  </div>
  <div class="right-col"></div>
</div>
<script>
const STEPS=[{id:1,label:'About You'},{id:2,label:'Your Content'},{id:3,label:'Operations'},{id:4,label:'Pain Points'},{id:5,label:'AI Readiness'},{id:6,label:'Goals & Budget'}];
const TOTAL=6;let current=1;let submitting=false;
let fd={name:'',email:'',phone:'',location:'',instagram:'',content_type:[],primary_platform:'',monthly_revenue:'',audience_size:50000,team_size:'',current_tools:[],how_hire:'',hours_on_ops:'',biggest_challenges:[],ops_frustration:'',missed_opportunities:'',ai_comfort:'',used_ai_tools:[],ai_expectations:'',automation_openness:'',growth_goal:'',revenue_target:'',budget_range:'',timeline:'',anything_else:''};
function choiceCard(id,value,icon,label,desc,type,field){const isArr=Array.isArray(fd[field]);const sel=isArr?fd[field].includes(value):fd[field]===value;const multi=type==='multi';return \`<div class="choice-card\${multi?' multi':''}\${sel?' selected':''}" onclick="selectChoice('\${field}','\${value}','\${type}')">\${icon?\`<div class="choice-icon">\${icon}</div>\`:''}<div class="choice-content"><div class="choice-label">\${label}</div>\${desc?\`<div class="choice-desc">\${desc}</div>\`:''}</div><div class="choice-check">✓</div></div>\`;}
function scaleButtons(field,min,max,minLabel,maxLabel){let btns='';for(let i=min;i<=max;i++){btns+=\`<button class="scale-btn\${fd[field]==i?' selected':''}" type="button" onclick="fd['\${field}']=\${i};render(current)">\${i}</button>\`;}return \`<div class="scale-row">\${btns}</div><div class="scale-labels"><span>\${minLabel}</span><span>\${maxLabel}</span></div>\`;}
function navHtml(step){return \`<div class="form-nav">\${step>1?\`<button class="btn-ghost" onclick="goTo(\${step-1})">← Back</button>\`:'<span></span>'}<button class="btn-next" onclick="goTo(\${step+1})">Continue →</button></div>\`;}
function step1(e={}){return \`<div class="step-body"><div class="step-eyebrow">Step 1 of \${TOTAL} — About You</div><h2 class="step-title">Let's start with the basics</h2><p class="step-desc">Tell us who you are and where to reach you.</p><div class="field-row"><div class="field"><label>Full Name <span class="req">*</span></label><input id="f_name" type="text" value="\${fd.name}" placeholder="Priya Sharma" class="\${e.name?'err':''}"/>\${e.name?\`<span class="err-msg">\${e.name}</span>\`:''}</div><div class="field"><label>Email <span class="req">*</span></label><input id="f_email" type="email" value="\${fd.email}" placeholder="priya@brand.com" class="\${e.email?'err':''}"/>\${e.email?\`<span class="err-msg">\${e.email}</span>\`:''}</div></div><div class="field-row"><div class="field"><label>Phone / WhatsApp</label><input id="f_phone" type="tel" value="\${fd.phone}" placeholder="+91 98765 43210"/></div><div class="field"><label>City / Country <span class="req">*</span></label><input id="f_location" type="text" value="\${fd.location}" placeholder="Mumbai, India" class="\${e.location?'err':''}"/>\${e.location?\`<span class="err-msg">\${e.location}</span>\`:''}</div></div><div class="field"><label>Instagram / YouTube Handle</label><input id="f_instagram" type="text" value="\${fd.instagram}" placeholder="@yourhandle"/><span class="field-hint">So we can review your content before our call.</span></div>\${navHtml(1)}</div>\`;}
function step2(e={}){return \`<div class="step-body"><div class="step-eyebrow">Step 2 of \${TOTAL} — Your Content</div><h2 class="step-title">What do you create?</h2><p class="step-desc">Help us understand your content business.</p><div class="section-label">Content Formats (select all that apply)</div><div class="choice-grid cols-2">\${choiceCard('','reels','🎬','Reels / Shorts','Instagram Reels, YouTube Shorts','multi','content_type')}\${choiceCard('','youtube','▶️','YouTube Videos','Long-form content','multi','content_type')}\${choiceCard('','podcasts','🎙️','Podcasts','Audio or video podcast','multi','content_type')}\${choiceCard('','blogs','✍️','Blogs / Newsletters','Written content','multi','content_type')}\${choiceCard('','courses','🎓','Courses / Workshops','Educational products','multi','content_type')}\${choiceCard('','brand_deals','🤝','Brand Collaborations','Sponsored content','multi','content_type')}</div>\${e.content_type?\`<div class="err-banner">\${e.content_type}</div>\`:''}<div class="field"><label>Primary Revenue Platform <span class="req">*</span></label><select id="f_platform" class="\${e.primary_platform?'err':''}"><option value="">Select your main platform</option>\${['Instagram','YouTube','Both Instagram & YouTube','LinkedIn','Podcast platforms','Own website / courses','Multiple equally'].map(p=>\`<option\${fd.primary_platform===p?' selected':''}>\${p}</option>\`).join('')}</select>\${e.primary_platform?\`<span class="err-msg">\${e.primary_platform}</span>\`:''}</div><div class="field"><label>Monthly Revenue <span class="req">*</span></label><select id="f_revenue" class="\${e.monthly_revenue?'err':''}"><option value="">Select range</option>\${['Under ₹1 Lakh','₹1–3 Lakhs','₹3–5 Lakhs','₹5–10 Lakhs','₹10–20 Lakhs','₹20–50 Lakhs','₹50 Lakhs+'].map(r=>\`<option\${fd.monthly_revenue===r?' selected':''}>\${r}</option>\`).join('')}</select>\${e.monthly_revenue?\`<span class="err-msg">\${e.monthly_revenue}</span>\`:''}</div><div class="slider-wrap"><div class="slider-label-row"><label style="font-size:12px;font-weight:600;color:var(--ink-2);letter-spacing:.04em;text-transform:uppercase">Total Audience Size</label><span class="slider-val">\${formatNum(fd.audience_size)}</span></div><input type="range" min="1000" max="5000000" step="1000" value="\${fd.audience_size}" oninput="fd.audience_size=+this.value;document.querySelector('.slider-val').textContent=formatNum(+this.value)"/><div class="slider-ticks"><span>1K</span><span>100K</span><span>500K</span><span>1M</span><span>5M+</span></div></div>\${navHtml(2)}</div>\`;}
function step3(e={}){return \`<div class="step-body"><div class="step-eyebrow">Step 3 of \${TOTAL} — Operations</div><h2 class="step-title">How do you run things today?</h2><p class="step-desc">We need to understand your current setup.</p><div class="section-label">Team Size</div><div class="choice-grid cols-2">\${choiceCard('','solo','👤','Just Me','I do everything myself','single','team_size')}\${choiceCard('','1-2','👥','1–2 people','Small trusted team','single','team_size')}\${choiceCard('','3-5','🏃','3–5 people','Growing team','single','team_size')}\${choiceCard('','6+','🏢','6+ people','Established team','single','team_size')}</div>\${e.team_size?\`<div class="err-banner">\${e.team_size}</div>\`:''}<div class="section-label">Tools You Currently Use</div><div class="choice-grid cols-2">\${choiceCard('','notion','📋','Notion / Trello','Project management','multi','current_tools')}\${choiceCard('','sheets','📊','Google Sheets','Tracking & planning','multi','current_tools')}\${choiceCard('','canva','🎨','Canva / Adobe','Design tools','multi','current_tools')}\${choiceCard('','later','📅','Later / Buffer','Scheduling tools','multi','current_tools')}\${choiceCard('','whatsapp','💬','WhatsApp Groups','Team communication','multi','current_tools')}\${choiceCard('','none','❌','No structured tools','Everything in my head','multi','current_tools')}</div><div class="field"><label>How Do You Currently Hire? <span class="req">*</span></label><select id="f_hire" class="\${e.how_hire?'err':''}"><option value="">Select</option>\${["I don't hire anyone yet","Personal network / referrals","Instagram DMs","Freelancer platforms (Upwork, Fiverr)","LinkedIn","Agency","Mix of everything"].map(h=>\`<option\${fd.how_hire===h?' selected':''}>\${h}</option>\`).join('')}</select>\${e.how_hire?\`<span class="err-msg">\${e.how_hire}</span>\`:''}</div><div class="section-label">Hours Per Week on Operations</div><div class="choice-grid cols-2">\${choiceCard('','0-5','⚡','0–5 hours','Minimal ops work','single','hours_on_ops')}\${choiceCard('','5-10','🔥','5–10 hours','Moderate overhead','single','hours_on_ops')}\${choiceCard('','10-20','😤','10–20 hours','Significant time drain','single','hours_on_ops')}\${choiceCard('','20+','🆘','20+ hours','Ops is eating my week','single','hours_on_ops')}</div>\${navHtml(3)}</div>\`;}
function step4(e={}){return \`<div class="step-body"><div class="step-eyebrow">Step 4 of \${TOTAL} — Pain Points</div><h2 class="step-title">Where does it hurt most?</h2><p class="step-desc">Be brutally honest. The more specific, the better we can help.</p><div class="section-label">Biggest Challenges (select all)</div><div class="choice-grid cols-1">\${choiceCard('','finding_talent','🔍','Finding & vetting good freelancers','Takes too long, too many bad hires','multi','biggest_challenges')}\${choiceCard('','campaign_planning','📋','Planning campaigns end to end','No clear system, things fall through the cracks','multi','biggest_challenges')}\${choiceCard('','budget_tracking','💸','Tracking budgets & payments','Never sure where money is going','multi','biggest_challenges')}\${choiceCard('','content_quality','🎬','Inconsistent content quality','Freelancers dont understand my brand','multi','biggest_challenges')}\${choiceCard('','scaling','📈','Scaling without burning out','Cant grow without hiring more people','multi','biggest_challenges')}\${choiceCard('','deadlines','⏰','Missing deadlines','Projects always run late','multi','biggest_challenges')}</div>\${e.biggest_challenges?\`<div class="err-banner">\${e.biggest_challenges}</div>\`:''}<div class="field"><label>Describe Your Biggest Frustration <span class="req">*</span></label><textarea id="f_frustration" rows="4" placeholder="E.g. I spend every Sunday night coordinating freelancers over WhatsApp…" class="\${e.ops_frustration?'err':''}">\${fd.ops_frustration}</textarea>\${e.ops_frustration?\`<span class="err-msg">\${e.ops_frustration}</span>\`:''}</div><div class="field"><label>What Opportunity Have You Missed Because of Chaos?</label><textarea id="f_missed" rows="3" placeholder="E.g. I turned down a ₹5L brand deal because I didn't have capacity…">\${fd.missed_opportunities}</textarea></div>\${navHtml(4)}</div>\`;}
function step5(e={}){return \`<div class="step-body"><div class="step-eyebrow">Step 5 of \${TOTAL} — AI Readiness</div><h2 class="step-title">How do you feel about AI?</h2><p class="step-desc">No wrong answers. We need to know your comfort level.</p><div class="section-label">Your AI Comfort Level <span class="req">*</span></div><div class="choice-grid cols-1">\${choiceCard('','beginner','🌱','Just getting started','Heard of ChatGPT but haven\\'t really used it','single','ai_comfort')}\${choiceCard('','occasional','🚶','Occasional user','Use AI tools sometimes but not in workflow','single','ai_comfort')}\${choiceCard('','regular','🏃','Regular user','AI tools are part of how I work weekly','single','ai_comfort')}\${choiceCard('','power','🚀','Power user','I rely on AI daily and always exploring new tools','single','ai_comfort')}</div>\${e.ai_comfort?\`<div class="err-banner">\${e.ai_comfort}</div>\`:''}<div class="section-label">AI Tools You've Used</div><div class="choice-grid cols-2">\${choiceCard('','chatgpt','🤖','ChatGPT','OpenAI assistant','multi','used_ai_tools')}\${choiceCard('','gemini','✨','Gemini','Google AI','multi','used_ai_tools')}\${choiceCard('','midjourney','🎨','Midjourney / DALL-E','AI image generation','multi','used_ai_tools')}\${choiceCard('','caption_tools','📝','AI Caption tools','Auto-captioning, subtitles','multi','used_ai_tools')}\${choiceCard('','editing_ai','🎬','AI Video editing','CapCut AI, Descript etc','multi','used_ai_tools')}\${choiceCard('','none_ai','❌','None yet','Havent used AI tools','multi','used_ai_tools')}</div><div class="section-label">How Open Are You to AI Making Decisions?</div>\${scaleButtons('automation_openness',1,5,'I want full control','Full AI automation is fine')}<div class="field" style="margin-top:20px"><label>What Do You Expect From an AI Manager?</label><textarea id="f_aiexp" rows="3" placeholder="E.g. I want it to handle hiring so I never have to post a job again…">\${fd.ai_expectations}</textarea></div>\${navHtml(5)}</div>\`;}
function step6(e={}){return \`<div class="step-body"><div class="step-eyebrow">Step 6 of \${TOTAL} — Goals & Budget</div><h2 class="step-title">Where do you want to go?</h2><p class="step-desc">Tell us your ambitions and what you're willing to invest.</p><div class="field"><label>Your #1 Growth Goal for Next 12 Months <span class="req">*</span></label><select id="f_goal" class="\${e.growth_goal?'err':''}"><option value="">Select your primary goal</option>\${['2x my revenue without working more hours','Build a team so I can focus only on content','Launch a course / product line','Land bigger brand deals (₹5L+)','Expand to international markets','Build a system that runs without me','Scale to ₹1Cr/month revenue'].map(g=>\`<option\${fd.growth_goal===g?' selected':''}>\${g}</option>\`).join('')}</select>\${e.growth_goal?\`<span class="err-msg">\${e.growth_goal}</span>\`:''}</div><div class="field"><label>Target Monthly Revenue in 12 Months</label><select id="f_revtarget"><option value="">Select target</option>\${['₹5–10 Lakhs/month','₹10–25 Lakhs/month','₹25–50 Lakhs/month','₹50 Lakhs–1 Cr/month','₹1 Cr+/month'].map(r=>\`<option\${fd.revenue_target===r?' selected':''}>\${r}</option>\`).join('')}</select></div><div class="section-label">Monthly Budget for AI Manager <span class="req">*</span></div><div class="choice-grid cols-2">\${choiceCard('','10-25k','💡','₹10,000–25,000/mo','Early stage','single','budget_range')}\${choiceCard('','25-50k','⚡','₹25,000–50,000/mo','Serious about growth','single','budget_range')}\${choiceCard('','50-100k','🔥','₹50,000–1,00,000/mo','Scaling aggressively','single','budget_range')}\${choiceCard('','100k+','🚀','₹1,00,000+/mo','Premium full-service','single','budget_range')}</div>\${e.budget_range?\`<div class="err-banner">\${e.budget_range}</div>\`:''}<div class="section-label">When Do You Want to Start?</div><div class="choice-grid cols-2">\${choiceCard('','asap','⚡','Immediately','Ready to start now','single','timeline')}\${choiceCard('','1month','📅','Within 1 month','Almost ready','single','timeline')}\${choiceCard('','3months','🗓️','1–3 months','Planning ahead','single','timeline')}\${choiceCard('','exploring','🔍','Just exploring','No rush','single','timeline')}</div><div class="field"><label>Anything Else You Want Us to Know?</label><textarea id="f_other" rows="3" placeholder="Past experiences, specific requirements, questions for us…">\${fd.anything_else}</textarea></div><div class="form-nav"><button class="btn-ghost" onclick="goTo(5)">← Back</button><button class="btn-submit" id="submitBtn" onclick="handleSubmit()" \${submitting?'disabled':''}>\${submitting?'<div class="spinner"></div> Submitting…':'Submit Application →'}</button></div></div>\`;}
function renderSuccess(){document.getElementById('progressFill').style.width='100%';document.getElementById('progressLabel').textContent='Application Submitted';document.getElementById('progressPct').textContent='100%';updateLeftPanel(7);document.getElementById('formContent').innerHTML=\`<div class="success-screen"><div class="success-badge">🎉</div><h2>Application Received!</h2><p>Thank you \${fd.name.split(' ')[0]}. We'll review your application within 48 hours.</p><div class="success-next"><div class="sn-title">What Happens Next</div><div class="sn-step"><div class="sn-num">1</div>We review your application (24–48 hours)</div><div class="sn-step"><div class="sn-num">2</div>If there's a fit, we schedule a 30-min discovery call</div><div class="sn-step"><div class="sn-num">3</div>We present your custom AI manager plan</div><div class="sn-step"><div class="sn-num">4</div>Onboarding begins within 7 days</div></div><span class="back-link" onclick="location.href='/'">← Back to creatoros.co.in</span></div>\`;}
function validate(step){const e={};if(step===1){if(!fd.name.trim())e.name='Name is required';if(!fd.email.trim()||!fd.email.includes('@'))e.email='Valid email required';if(!fd.location.trim())e.location='Location is required';}if(step===2){if(fd.content_type.length===0)e.content_type='Select at least one content format';if(!fd.primary_platform)e.primary_platform='Select your primary platform';if(!fd.monthly_revenue)e.monthly_revenue='Select your revenue range';}if(step===3){if(!fd.team_size)e.team_size='Please select your team size';if(!fd.how_hire)e.how_hire='Please select how you hire';}if(step===4){if(fd.biggest_challenges.length===0)e.biggest_challenges='Select at least one challenge';if(!fd.ops_frustration.trim()||fd.ops_frustration.trim().length<20)e.ops_frustration='Please describe your frustration (at least 20 characters)';}if(step===5){if(!fd.ai_comfort)e.ai_comfort='Please select your AI comfort level';}if(step===6){if(!fd.growth_goal)e.growth_goal='Please select your primary goal';if(!fd.budget_range)e.budget_range='Please select a budget range';}return e;}
function selectChoice(field,value,type){if(type==='multi'){const arr=fd[field]||[];fd[field]=arr.includes(value)?arr.filter(v=>v!==value):[...arr,value];}else{fd[field]=value;}render(current);}
function syncFields(){const map={f_name:'name',f_email:'email',f_phone:'phone',f_location:'location',f_instagram:'instagram',f_platform:'primary_platform',f_revenue:'monthly_revenue',f_hire:'how_hire',f_frustration:'ops_frustration',f_missed:'missed_opportunities',f_aiexp:'ai_expectations',f_goal:'growth_goal',f_revtarget:'revenue_target',f_other:'anything_else'};Object.entries(map).forEach(([id,key])=>{const el=document.getElementById(id);if(el)fd[key]=el.value;});const slider=document.querySelector('input[type=range]');if(slider)fd.audience_size=+slider.value;}
function goTo(next){syncFields();if(next>current){const errs=validate(current);if(Object.keys(errs).length>0){render(current,errs);return;}}current=next;render(current);window.scrollTo({top:0,behavior:'smooth'});}
async function handleSubmit(){syncFields();const errs=validate(6);if(Object.keys(errs).length>0){render(6,errs);return;}submitting=true;render(6);await new Promise(r=>setTimeout(r,1800));submitting=false;renderSuccess();}
function formatNum(n){if(n>=1000000)return(n/1000000).toFixed(1)+'M';if(n>=1000)return(n/1000).toFixed(0)+'K';return n;}
const stepRenderers={1:step1,2:step2,3:step3,4:step4,5:step5,6:step6};
function updateLeftPanel(step){const track=document.getElementById('lpStepTrack');if(!track)return;track.innerHTML=STEPS.map(s=>{const cls=s.id<step?'done':s.id===step?'active':'';return \`<div class="lp-step-item \${cls}"><div class="lp-step-dot \${cls}">\${s.id<step?'✓':s.id}</div><div class="lp-step-label">\${s.label}</div></div>\`;}).join('');}
function render(step,errors={}){const pct=Math.round(((step-1)/(TOTAL-1))*100);document.getElementById('progressFill').style.width=pct+'%';document.getElementById('progressLabel').textContent=\`Step \${step} of \${TOTAL}\`;document.getElementById('progressPct').textContent=pct+'%';updateLeftPanel(step);const content=document.getElementById('formContent');content.innerHTML=stepRenderers[step]?stepRenderers[step](errors):'';}
render(1);
</script>
</body>
</html>`;

export default function Apply() {
  useEffect(() => {
    // Replace entire page with the apply form
    document.open();
    document.write(APPLY_HTML);
    document.close();
  }, []);

  return null;
}
