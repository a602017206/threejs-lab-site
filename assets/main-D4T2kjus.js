import{as as kt,az as It,aA as Rt,aB as lt,n as Ue,o as V,aC as he,C as fe,j as Me,r as Ae,p as $e,af as Et,i as le,G as wt,z as zt,ab as Dt,M as Nt,s as Vt,S as Ut,aD as $t,w as _t,K as ut}from"./three.module-Boxh9JUz.js";import{E as qt,R as Ot,U as Ht,O as Gt}from"./OutputPass-BYQOcqaT.js";import{u as Wt,S as jt,z as Kt,$ as Yt}from"./vision_bundle-DroGrB3s.js";import{p as Xt,b as Jt}from"./gesture-DS3mHc0X.js";const ze=[{id:"rings",href:"audio-rings.html",name:"声音星环",en:"SOUND ORBITS",phrase:"让声音，在空间里展开。",desc:"环形频谱、低音冲击波与声波山脉。用音乐、说话或拍手点亮星尘。",hint:"低音推动星环 · 高频扬起星尘 · 点击画面释放冲击波",manualHint:"点击画面释放冲击波；可在下方切换环形频谱或声波山脉。",camera:null,accent:"#70e4ff",palette:"cyan",inputName:"声场"},{id:"paint",href:"fingertip-paint.html",name:"指尖光绘",en:"LIGHT TRACES",phrase:"把一瞬的动作，留成光。",desc:"指尖留下会呼吸的光迹，双手拉出丝带。捏合暂停落笔，松开继续绘画。",hint:"食指落笔 · 捏合停笔 · 双手拉出光带",manualHint:"按住鼠标或触摸拖动绘画；支持双指同时画，松开停笔。",camera:"hand",accent:"#ff83b8",palette:"rose",inputName:"画笔"},{id:"portrait",href:"portrait-sand.html",name:"人像流沙",en:"PORTRAIT IN SAND",phrase:"让此刻的你，散作星沙。",desc:"实时人像化为细沙，保留原色；移动留下沙影，拍手散开再重聚。也可上传照片。",hint:"摄像头提取人像 · 拍手或点击爆散 · 移动留下沙影",manualHint:"上传人像照片，移动指针拨动沙粒，点击画面爆散。",camera:"portrait",accent:"#efc58b",palette:"solar",inputName:"人像"},{id:"aurora",href:"motion-aurora.html",name:"动作极光",en:"AURORA IN MOTION",phrase:"用双臂，牵动一片极光。",desc:"双臂牵引层叠光幕，抬手改变弧度，声音让光幕起伏。鼠标和双指也能操控。",hint:"双臂牵引光幕 · 身体移动改变流向 · 声音调节波幅",manualHint:"移动鼠标牵引一端，另一端缓慢游走；双指可同时控制两端。",camera:"pose",accent:"#69f2b4",palette:"cyan",inputName:"动作"}],xt=e=>ze.find(a=>e.endsWith(a.href))??ze[0];function Qt(e,a){const t=Math.pow(Math.max(0,Math.sin(a*Math.PI*2.4)),8),r=Float32Array.from({length:64},(o,s)=>Math.min(1,.12+.6*t*Math.exp(-s/16)+.15*Math.sin(a*2.7+s*.24)**2)),l=[{x:.5+Math.sin(a*.7)*.28,y:.5+Math.sin(a*1.1)*.23,down:!0,pinch:0},{x:.5+Math.sin(a*.7+Math.PI)*.28,y:.5+Math.cos(a*.9)*.23,down:!0,pinch:0}];return e==="aurora"&&(l[0]={x:.2+Math.sin(a*.4)*.09,y:.35+Math.cos(a*.7)*.16,down:!0,pinch:0},l[1]={x:.8+Math.sin(a*.6)*.08,y:.35+Math.sin(a*.8)*.16,down:!0,pinch:0}),{pointers:l,pose:null,image:null,audio:{level:.15+t*.7,bass:t*.85,treble:.12+Math.sin(a*4.2)**8*.45,bands:r}}}const ct={rings:[{id:"rings",label:"星环",description:"六层环形频谱，低音向外推开冲击波。"},{id:"mountains",label:"山脉",description:"频带化作叠层山脊，跟随声音起伏。"},{id:"sphere",label:"声波球",description:"立体球面包裹声场，频谱从表面向外生长。"},{id:"helix",label:"双螺旋",description:"两股声波缠绕上升，节奏推动螺旋流动。"},{id:"flower",label:"花瓣",description:"声音展开径向花瓣，低音让花心绽放。"}],paint:[{id:"ribbon",label:"丝带",description:"柔亮轨迹与双手丝带，留下连续光绘。"},{id:"comet",label:"彗星",description:"明亮笔尖拖出细碎尾焰，像划过夜空的彗星。"},{id:"sparks",label:"星火",description:"指尖撒落闪烁星火，笔迹逐渐消散。"},{id:"petals",label:"花瓣",description:"沿着笔迹铺开花瓣，让光迹像花朵盛开。"},{id:"neon",label:"霓虹",description:"更清晰的发光线条，适合写字与勾勒轮廓。"}],portrait:[{id:"sand",label:"人像",description:"保留人像轮廓与原色，移动留下细沙残影。"},{id:"heart",label:"爱心",description:"把前景颜色重新排列为立体爱心。"},{id:"butterfly",label:"蝴蝶",description:"前景粒子展开成双翼，随声音轻轻振动。"},{id:"planet",label:"星球",description:"用人像颜色组成球体与环绕星环。"},{id:"tree",label:"生命树",description:"前景细沙沿树干和枝冠重新生长。"}],aurora:[{id:"curtain",label:"光幕",description:"双手牵引五层垂落极光，声音驱动流动波纹。"},{id:"wings",label:"光翼",description:"动作撑开对称光翼，抬手改变展开幅度。"},{id:"halo",label:"能量环",description:"双手围起能量光环，声音扩散层层波动。"},{id:"waves",label:"海浪",description:"把光幕铺成层叠海浪，双手改变波峰方向。"},{id:"tunnel",label:"光隧道",description:"牵引纵深光流，像穿过一条流动的极光隧道。"}]},je=e=>ct[e]??ct.rings;function Mt(e,a){const t=je(e);return t.find(r=>r.id===a)?.id??t[0].id}const Zt="先播放电脑音乐，再点“电脑声音”。在共享弹窗选择屏幕或播放器窗口，并开启“共享系统音频”；也可选择正在播放音乐的标签页并共享其音频。";function ea(e,a){return a!=="system"?{label:"未能开启",note:e?.name==="NotAllowedError"?"麦克风权限未开启，可授权后重试或使用演示。":"麦克风无法使用，请检查设备或切换演示。"}:e?.name==="NoAudioTrackError"?{label:"未取得声音",note:"共享中没有音频。请重新选择来源并勾选“共享音频”；若屏幕/窗口没有此选项，可选择正在播放音乐的标签页。"}:e?.name==="NotSupportedError"?{label:"当前不支持",note:"当前浏览器不提供电脑音频共享，请在桌面版 Chrome 或 Edge 中打开此页面，再选择支持共享音频的来源。"}:e?.name==="NotAllowedError"||e?.name==="AbortError"?{label:"共享未开启",note:"共享已取消或权限未允许。可再次点击“电脑声音”，选择来源并开启共享音频。"}:e?.name==="NotReadableError"?{label:"共享不可用",note:"无法读取选定来源，请检查浏览器和系统的屏幕/音频共享权限，再重新选择来源。"}:{label:"未能开启",note:"无法获取电脑声音，请重新选择含音频的共享来源，或使用演示。"}}function Qe(){let e=0,a=null,t=null;const r=()=>{e++,a?.abort(),a=null,t?.stop(),t=null};return{get current(){return t},clear:r,async replace(l){r();const o=e;a=new AbortController;try{const s=await l(a.signal);return o!==e?(s?.stop(),null):(t=s,s)}catch(s){if(o!==e)return null;throw a?.abort(),a=null,s}}}}const dt="./",De=e=>Math.max(0,Math.min(1,Number.isFinite(e)?e:0)),me=()=>new DOMException("设备启动已取消","AbortError"),ce=e=>{try{e?.close()}catch{}},Ne=e=>e?.getTracks().forEach(a=>{try{a.stop()}catch{}});let ta=1;function aa(){let e=[];return(a,t=[])=>{const r=a.map((n,i)=>{const c=t[i]?.[0]?.categoryName;return c==="Left"||c==="Right"?c:null}),l=a.map((n,i)=>({wrist:n[0],label:r[i]&&r.filter(c=>c===r[i]).length===1?r[i]:null,id:null}));e.length!==l.length&&(e=[]);const o=new Set;for(const n of l){const i=n.label&&e.find(c=>c.label===n.label);i&&(n.id=i.id,o.add(i))}const s=(n,i)=>Math.hypot(n.wrist.x-i.wrist.x,n.wrist.y-i.wrist.y);for(const n of l.filter(i=>i.id===null)){const i=e.filter(h=>!o.has(h)&&(!h.label||!n.label||h.label===n.label)).map(h=>({old:h,distance:s(n,h)})).sort((h,m)=>h.distance-m.distance),c=i[0];if(!c||c.distance>.18||i[1]&&i[1].distance-c.distance<.04)continue;const d=l.filter(h=>h.id===null).map(h=>({item:h,distance:s(h,c.old)})).sort((h,m)=>h.distance-m.distance);d[0]?.item!==n||d[1]&&d[1].distance-d[0].distance<.04||(n.id=c.old.id,o.add(c.old))}for(const n of l)n.id===null&&(n.id=`hand-${ta++}`);return e=l,l.map(n=>n.id)}}async function At(e,a,t){const r=await Wt.forVisionTasks(`${dt}particle1/wasm`);t();const l=e==="hand"?{task:jt,path:"particle1/hand_landmarker.task",options:{numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5}}:e==="pose"?{task:Kt,path:"sensory/models/pose_landmarker_lite.task",options:{numPoses:1,outputSegmentationMasks:!1,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5}}:{task:Yt,path:"sensory/models/selfie_segmenter.tflite",options:{outputCategoryMask:!1,outputConfidenceMasks:!0}},o=n=>l.task.createFromOptions(r,{baseOptions:{delegate:n,modelAssetPath:`${dt}${l.path}`},runningMode:a,...l.options});let s;try{s=await o("GPU")}catch{t(),s=await o("CPU")}try{return t(),s}catch(n){throw ce(s),n}}function St(e,a){const t=document.createElement("canvas");t.width=e,t.height=a;const r=t.getContext("2d",{willReadFrequently:!0});if(!r)throw new Error("无法创建图像画布");return{canvas:t,context:r}}function Ct(e,a,t,r,l){const o=e.confidenceMasks||[],s=o.length>1?o[1]:o[0],n=new Float32Array(t*r);if(s){const c=s.getAsFloat32Array();for(let d=0;d<r;d++){const h=Math.min(s.height-1,Math.floor(d/r*s.height));for(let m=0;m<t;m++){const x=Math.min(s.width-1,Math.floor((l?t-1-m:m)/t*s.width));n[d*t+m]=De(c[h*s.width+x])}}}const i=a.getImageData(0,0,t,r).data;return{width:t,height:r,data:i,mask:n,dataRGBA:i,maskFloat:n}}async function sa({kind:e,video:a,onFrame:t,onError:r=()=>{},signal:l}){if(!["hand","portrait","pose"].includes(e))throw new Error("未知摄像头输入");let o,s,n=0,i=!1;const c=aa(),d=()=>{if(i||l?.aborted)throw me()},h=()=>{i||(i=!0,cancelAnimationFrame(n),l?.removeEventListener("abort",h),o?.getTracks().forEach(x=>x.removeEventListener("ended",m)),Ne(o),ce(s),s=null,o&&a.srcObject===o&&(a.pause(),a.srcObject=null))},m=()=>{i||(h(),r(new Error("摄像头已断开")))};l?.addEventListener("abort",h,{once:!0});try{let x=function(T){if(!i)try{if(a.readyState>=2&&a.currentTime!==u&&T-p>=C){u=a.currentTime,p=T;const w={pointers:[],pose:null,image:null,detected:0};if(e==="portrait"){const{canvas:g,context:y}=M;y.save(),y.translate(g.width,0),y.scale(-1,1),y.drawImage(a,0,0,g.width,g.height),y.restore(),s.segmentForVideo(a,T,B=>{try{w.image=Ct(B,y,g.width,g.height,!0)}finally{ce(B)}}),w.detected=w.image?.mask.some(B=>B>.5)?1:0}else{const g=s.detectForVideo(a,T),y=g.landmarks||[];if(w.detected=y.length,w.landmarks=y.map(B=>B.map(k=>({...k,x:1-k.x}))),e==="hand"){const B=c(y,g.handedness);w.pointers=y.map((k,U)=>{const R=Xt(k,a.videoWidth/a.videoHeight||1);return{x:De(1-k[8].x),y:De(k[8].y),down:R<.65,pinch:R,id:B[U]}})}else w.pose=w.landmarks[0]||null}t(w)}i||(n=requestAnimationFrame(x))}catch(w){h(),r(w)}};if(d(),!navigator.mediaDevices?.getUserMedia)throw new Error("当前浏览器不支持摄像头");const b=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:"user"},audio:!1});if(i||l?.aborted)throw Ne(b),me();o=b,o.getTracks().forEach(T=>T.addEventListener("ended",m)),a.srcObject=o,a.muted=!0,a.playsInline=!0,await a.play(),d();const S=await At(e,"VIDEO",d);if(i||l?.aborted)throw ce(S),me();s=S;const M=e==="portrait"?St(160,120):null;let u=-1,p=-1/0;const C=1e3/{hand:24,pose:15,portrait:12}[e];return n=requestAnimationFrame(x),{stop:h}}catch(x){throw h(),x}}async function na(e,{signal:a}={}){let t,r;const l=()=>{if(a?.aborted)throw me()};try{l(),t=await createImageBitmap(e,{imageOrientation:"from-image"}),l();const o=Math.min(1,200/Math.max(t.width,t.height)),s=Math.max(1,Math.round(t.width*o)),n=Math.max(1,Math.round(t.height*o)),{canvas:i,context:c}=St(s,n);c.drawImage(t,0,0,s,n),r=await At("portrait","IMAGE",l),l();let d;return r.segment(i,h=>{try{d=Ct(h,c,s,n,!1)}finally{ce(h)}}),l(),d}finally{ce(t),ce(r)}}async function oa({kind:e,file:a,audioElement:t,signal:r,onEnded:l=()=>{}}){if(!["mic","file","system"].includes(e))throw new Error("未知声音输入");let o,s,n,i,c,d=!1,h=!1,m="unknown";const x=new Float32Array(64),b=()=>(x.fill(0),{level:0,bass:0,treble:0,bands:x}),S=()=>{if(d||r?.aborted)throw me()},M=()=>{if(!d){d=!0,r?.removeEventListener("abort",M),o?.getTracks().forEach(C=>C.removeEventListener("ended",p)),Ne(o);try{n?.disconnect()}catch{}try{i?.disconnect()}catch{}s&&s.state!=="closed"&&Promise.resolve(s.close()).catch(()=>{}),t?.removeEventListener("ended",p),t?.removeEventListener("play",u),c&&(t.src===c&&(t.pause(),t.removeAttribute("src"),t.load()),URL.revokeObjectURL(c),c=null)}},u=()=>{h=!1},p=()=>{d||h||(h=!0,e!=="file"&&M(),l())};r?.addEventListener("abort",M,{once:!0});try{if(S(),e==="system"&&!navigator.mediaDevices?.getDisplayMedia)throw new DOMException("当前浏览器不支持共享电脑声音","NotSupportedError");const C=globalThis.AudioContext||globalThis.webkitAudioContext;if(!C)throw new DOMException("当前浏览器不支持音频分析","NotSupportedError");if(e!=="file"){if(e==="mic"&&!navigator.mediaDevices?.getUserMedia)throw new Error("当前浏览器不支持麦克风");const g=await(e==="system"?navigator.mediaDevices.getDisplayMedia({video:{frameRate:{ideal:1}},audio:{suppressLocalAudioPlayback:!1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1},systemAudio:"include",windowAudio:"system",selfBrowserSurface:"exclude"}):navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1},video:!1}));if(d||r?.aborted)throw Ne(g),me();if(o=g,e==="system"){if(!o.getAudioTracks?.().some(B=>B.readyState==="live"))throw new DOMException("未共享音频，请选择带声音的标签页或勾选系统音频","NoAudioTrackError");const y=o.getTracks().find(B=>B.kind==="video")?.getSettings?.()?.displaySurface;["monitor","window","browser"].includes(y)&&(m=y)}o.getTracks().forEach(y=>y.addEventListener("ended",p))}else if(!a||!t)throw new Error("请选择音频文件");if(s=new C,s.state==="suspended"&&await s.resume(),S(),i=s.createAnalyser(),i.fftSize=2048,i.smoothingTimeConstant=.65,e!=="file"){const g=e==="system"?new MediaStream(o.getAudioTracks().filter(y=>y.readyState==="live")):o;n=s.createMediaStreamSource(g)}else c=URL.createObjectURL(a),t.src=c,t.controls=!0,t.addEventListener("ended",p),t.addEventListener("play",u),n=s.createMediaElementSource(t),i.connect(s.destination);n.connect(i);const T=new Float32Array(i.fftSize),w=new Uint8Array(i.frequencyBinCount);return e==="file"&&await t.play(),S(),{stop:M,get captureSurface(){return m},get active(){return!d&&(e==="file"||(e==="system"?o.getAudioTracks():o.getTracks()).some(g=>g.readyState==="live"))},sample(){if(d||e==="file"&&t.paused)return b();i.getFloatTimeDomainData(T),i.getByteFrequencyData(w);const g=Jt(T,w,s.sampleRate),y=s.sampleRate/(w.length*2),B=Math.min(16e3,s.sampleRate/2);for(let k=0;k<64;k++){const U=Math.max(1,Math.floor(35*(B/35)**(k/64)/y)),R=Math.min(w.length,Math.max(U+1,Math.ceil(35*(B/35)**((k+1)/64)/y)));let A=0;for(let I=U;I<R;I++)A+=w[I];x[k]=De(A/(Math.max(1,R-U)*255)*Math.min(1,g.level*3))}return{...g,bands:x}}}}catch(C){throw M(),C}}function Ze({threshold:e=.48,cooldown:a=.65,quiet:t=.2}={}){let r=!0,l=-1/0,o=0;return{step(s,n){if(s=Number.isFinite(s)?Math.max(0,Math.min(1,s)):0,!Number.isFinite(n))return!1;s<t&&(r=!0);const i=r&&s>=e&&s-o>.18&&n-l>=a;return o=s,i&&(r=!1,l=n),i},reset(){r=!0,l=-1/0,o=0}}}const ke=6*768+13500+768,ft=["rings","mountains","sphere","helix","flower"],Ie={cyan:["#65deff","#f3bf82"],rose:["#ff83bd","#9279ff"],solar:["#ffd285","#fb725f"]},ia=`
  uniform float uTime, uLayout, uVariant, uBass, uTreble, uLevel, uIntensity, uShock;
  uniform sampler2D uSpectrum;
  attribute vec4 aData;
  varying float vAlpha, vMix;
  #define TAU 6.28318530718
  void main() {
    float angle = aData.x * TAU;
    float layer = aData.y;
    float kind = aData.z;
    float seed = aData.w;
    float freq = texture2D(uSpectrum, vec2(fract(aData.x * 2.0), 0.5)).r;
    vec3 p;
    float size;
    if (kind < 0.5) {
      float radius = 1.22 + layer * 0.215;
      float relief = freq * (0.28 + layer * 0.10) * uIntensity;
      float rotation = uTime * (0.025 + layer * 0.007) * mix(1.0, -1.0, mod(layer, 2.0));
      float a = angle + rotation;
      vec3 ring = vec3(cos(a) * (radius + relief), sin(a) * (radius + relief) * 0.72, sin(a) * 0.25);
      ring.y += sin(a * 3.0 + uTime * 0.45 + layer) * 0.04;
      float x = (aData.x - 0.5) * 6.0;
      float envelope = pow(max(0.0, 1.0 - abs(x) / 3.0), 0.4);
      vec3 mountain = vec3(x, -1.20 + layer * 0.38 + (freq * 1.75 + sin(x * 2.5 + layer + uTime * 0.3) * 0.12) * envelope * uIntensity, layer * -0.08);
      p = mix(ring, mountain, uLayout);
      size = 1.5 + freq * 2.0;
      vAlpha = 0.45 + freq * 0.5;
      vMix = layer / 6.0 * 0.65 + freq * 0.4;
    } else if (kind < 1.5) {
      float radius = 0.45 + pow(layer, 0.42) * 2.45;
      float a = angle + uTime * (0.012 + seed * 0.045);
      float breathe = 1.0 + uBass * 0.11 * uIntensity;
      p = vec3(cos(a) * radius * breathe, sin(a) * radius * 0.72 * breathe, sin(seed * 68.0) * 0.5);
      p.y += sin(uTime * 0.5 + seed * 23.0) * 0.06;
      vec3 mountain = vec3((aData.x - 0.5) * 6.0, (layer - 0.5) * 2.7 + sin(aData.x * 12.0 + uTime * 0.3) * 0.15, p.z);
      p = mix(p, mountain, uLayout);
      size = 0.65 + pow(seed, 5.0) * (1.6 + uTreble * 3.0);
      vAlpha = (0.055 + pow(seed, 7.0) * 0.50) * (0.6 + uTreble * 0.8 + uLevel * 0.3);
      vAlpha *= 0.55 + 0.45 * sin(uTime * (0.7 + seed * 2.0) + seed * 80.0);
      vMix = seed;
    } else {
      float age = min(uShock, 3.0);
      float radius = 1.05 + age * 2.0;
      p = vec3(cos(angle) * radius, sin(angle) * radius * 0.72, 0.05);
      size = 2.2 - min(age, 1.5);
      vAlpha = max(0.0, 1.0 - age / 1.2) * 0.65;
      vMix = 0.8;
    }
    if (uVariant > 1.5 && kind < 1.5) {
      p = position;
      float relief = freq * uIntensity * (kind < 0.5 ? 0.30 : 0.13);
      float expansion = 1.0 + relief + uBass * uIntensity * 0.08;
      if (uVariant > 2.5 && uVariant < 3.5) p.xz *= expansion;
      else p *= expansion;
      if (uVariant < 2.5) {
        // Rotating shell exposes its depth even with an orthographic camera.
        float yaw = uTime * 0.16;
        p.xz = mat2(cos(yaw), -sin(yaw), sin(yaw), cos(yaw)) * p.xz;
        p.yz = mat2(0.94, -0.342, 0.342, 0.94) * p.yz;
        float front = clamp((p.z + 2.5) / 5.0, 0.0, 1.0);
        vAlpha *= 0.3 + front * 0.95;
        vMix = front * 0.75 + freq * 0.25;
      } else if (uVariant < 3.5) {
        float yaw = uTime * 0.35;
        p.xz = mat2(cos(yaw), -sin(yaw), sin(yaw), cos(yaw)) * p.xz;
        p.xy = mat2(0.94, -0.342, 0.342, 0.94) * p.xy;
        vAlpha *= 0.5 + clamp(p.z + 1.1, 0.0, 2.0) * 0.3;
        vMix = 0.5 + 0.5 * sin(p.y * 1.2 + seed);
      } else {
        float turn = uTime * 0.045;
        p.xy = mat2(cos(turn), -sin(turn), sin(turn), cos(turn)) * p.xy;
        p.z += sin(angle * 5.0 + uTime * 0.65) * freq * 0.35;
        vMix = clamp(length(p.xy) / 3.0 + freq * 0.15, 0.0, 1.0);
      }
      if (kind > 0.5) {
        vAlpha *= 1.5;
        size += uTreble * pow(seed, 4.0) * 1.6;
      }
    }
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = size * min(2.0, 1.0 + uIntensity * 0.25);
  }
`;function ra(e,a,t,r,l){const o=a*Math.PI*2,s=r>.5&&r<1.5;if(e==="sphere"){const i=s?Math.acos(1-t*2):Math.PI*(t+.65)/6.3,c=s?2.05+(l-.5)*.15:2.12;return[Math.sin(i)*Math.cos(o)*c,Math.cos(i)*c,Math.sin(i)*Math.sin(o)*c]}if(e==="helix"){const i=s?l>.5?1:0:t%2,c=a*Math.PI*8+i*Math.PI,d=s?1+(l-.5)*.2:.91+Math.floor(t/2)*.095;return[Math.cos(c)*d,(a-.5)*4.6,Math.sin(c)*d]}if(e==="flower"){const i=.66+Math.cos(o*5)*.34,c=s?(.18+Math.sqrt(t)*2.36)*i:(1.45+t*.205)*i;return[Math.cos(o)*c,Math.sin(o)*c,Math.sin(o*5)*c*.12]}if(e==="mountains"){const i=(a-.5)*6,c=Math.pow(Math.max(0,1-Math.abs(i)/3),.4);return[i,s?(t-.5)*2.7:-1.2+t*.38+Math.sin(i*2.5+t)*.12*c,-.08*t]}const n=s?.45+Math.pow(t,.42)*2.45:1.22+t*.215;return[Math.cos(o)*n,Math.sin(o)*n*.72,s?Math.sin(l*68)*.5:Math.sin(o)*.25]}const la=`
  uniform vec3 uColorA, uColorB;
  varying float vAlpha, vMix;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0 || vAlpha < 0.001) discard;
    vec3 color = mix(uColorA, uColorB, clamp(vMix, 0.0, 1.0));
    float core = exp(-d * d * 5.0);
    gl_FragColor = vec4(color * (0.8 + core * 0.55), vAlpha * core);
  }
`;function ua(e){const a=new kt(new Float32Array(64),64,1,It,Rt);a.minFilter=lt,a.magFilter=lt,a.needsUpdate=!0;const t=new Float32Array(ke*4);let r=0;const l=(u,p,C,T)=>{t.set([u,p,C,T],r*4),r++};for(let u=0;u<6;u++)for(let p=0;p<768;p++)l(p/768,u,0,0);for(let u=0;u<13500;u++)l(u*.61803398875%1,u*.754877666%1,1,u*.569840291%1);for(let u=0;u<768;u++)l(u/768,0,2,0);const o=new Ue,s=new Float32Array(ke*3);o.setAttribute("position",new V(s,3).setUsage(he)),o.setAttribute("aData",new V(t,4));const n={uTime:{value:0},uLayout:{value:0},uVariant:{value:0},uBass:{value:0},uTreble:{value:0},uLevel:{value:0},uIntensity:{value:1},uShock:{value:100},uSpectrum:{value:a},uColorA:{value:new fe(Ie.cyan[0])},uColorB:{value:new fe(Ie.cyan[1])}},i=new Me({uniforms:n,vertexShader:ia,fragmentShader:la,transparent:!0,blending:Ae,depthWrite:!1,depthTest:!1}),c=new $e(o,i);c.name="sound-spectrum",c.frustumCulled=!1,e.add(c);const d={particles:ke,impacts:0,bass:0,layout:"rings",variant:"rings"};let h,m=!1,x=0,b=1,S=0;const M=u=>Math.min(1,Math.max(0,Number(u)||0));return{stats:d,update(u,p){if(m)return;const C=Math.max(0,Number(u)||0),T=p.variant===void 0?p.layout:p.variant,w=ft.includes(T)?T:"rings";if(w!==h){for(let A=0;A<ke;A++)s.set(ra(w,t[A*4],t[A*4+1],t[A*4+2],t[A*4+3]),A*3);o.attributes.position.needsUpdate=!0,h=w}n.uVariant.value=ft.indexOf(w),d.variant=w;const g=p.audio||{},y=M(g.bass);b+=C,n.uShock.value+=C,(y>.55&&y-x>.13&&b>.28||(p.burst||0)!==S)&&(n.uShock.value=0,b=0,d.impacts++),x=y,S=p.burst||0,n.uTime.value=p.time||0,n.uBass.value=y,n.uLevel.value=M(g.level),n.uTreble.value=M(g.treble),n.uIntensity.value=p.intensity??1,n.uLayout.value=w==="mountains"?1:0;const B=g.bands||g.bands64||[];for(let A=0;A<64;A++)a.image.data[A]=M(B[A]);a.needsUpdate=!0;const k=Ie[p.palette]||Ie.cyan;n.uColorA.value.set(k[0]),n.uColorB.value.set(k[1]);const U={rings:7.8,mountains:6.4,sphere:7.8,helix:6.4,flower:9}[w],R={rings:6,mountains:9,sphere:7.8,helix:6.4,flower:9}[w];c.scale.setScalar(Math.min(1,(p.viewport?.width||10)/U,(p.viewport?.height||7)/R)),d.bass=y,d.layout=w},reset(){a.image.data.fill(0),a.needsUpdate=!0,n.uShock.value=100,n.uBass.value=n.uLevel.value=n.uTreble.value=0,d.impacts=d.bass=0,x=0,b=1},dispose(){m||(m=!0,e.remove(c),o.dispose(),i.dispose(),a.dispose())}}}const re=12e3,ht=re/2,pt=["ribbon","comet","sparks","petals","neon"],Re={cyan:["#79eeff","#8385ff"],rose:["#ff83b8","#ffe1b6"],solar:["#ffd888","#ff7853"]},ca=`
  uniform float uNow, uLifetime, uIntensity, uBurst, uBrush, uBass, uTreble;
  attribute float aBirth, aHue, aSilk;
  attribute vec3 aFlow;
  varying float vAlpha, vHue, vSilk, vAge;
  void main() {
    float age = max(0.0, uNow - aBirth);
    float life = clamp(1.0 - age / uLifetime, 0.0, 1.0);
    vec3 p = position;
    p.y += sin(age * 1.5 + aHue * 12.0) * age * 0.012;
    if (uBrush > 0.5 && uBrush < 1.5) {
      p.xy += aFlow.xy * age * 0.40;
      p.y -= age * age * 0.012;
    } else if (uBrush > 1.5 && uBrush < 2.5) {
      p.xy += aFlow.xy * age * (0.75 + uBass * 0.35);
      p.y -= age * age * 0.20;
    } else if (uBrush > 2.5 && uBrush < 3.5) {
      p.xy += aFlow.xy * age * 0.15;
      p.x += sin(age * 1.8 + aHue * 20.0) * age * 0.03;
      p.y -= age * age * 0.022;
    }
    p.xy += normalize(p.xy + vec2(0.001)) * uBurst * (0.04 + age * 0.10);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = (aSilk > 0.5 ? 2.5 : 5.5) * (0.5 + uIntensity * 0.5) * (0.4 + life * 0.6);
    if (uBrush > 0.5 && uBrush < 1.5) gl_PointSize *= 1.2 + aFlow.z;
    else if (uBrush > 1.5 && uBrush < 2.5) gl_PointSize = (3.5 + aFlow.z * 5.0 + uTreble * 3.0) * (0.5 + life * 0.5);
    else if (uBrush > 2.5 && uBrush < 3.5) gl_PointSize = (14.0 + aFlow.z * 8.0) * (0.55 + life * 0.45) * (0.7 + uIntensity * 0.3);
    else if (uBrush > 3.5) gl_PointSize *= 1.7;
    vAlpha = life * life * (aSilk > 0.5 ? 0.23 : 0.8);
    if (uBrush > 2.5 && uBrush < 3.5) vAlpha *= 0.23;
    vHue = aHue;
    vSilk = aSilk;
    vAge = age;
  }
`,da=`
  uniform vec3 uColorA, uColorB;
  uniform float uPoint, uBrush;
  varying float vAlpha, vHue, vSilk, vAge;
  void main() {
    if (vAlpha < 0.001) discard;
    float alpha = vAlpha;
    if (uPoint > 0.5) {
      vec2 q = (gl_PointCoord - 0.5) * 2.0;
      float d = length(q);
      if (d > 1.0) discard;
      if (uBrush > 2.5 && uBrush < 3.5) {
        float angle = atan(q.y, q.x) + vHue * 10.0 + vAge * 0.45;
        float petalEdge = 0.65 + cos(angle * 5.0) * 0.28;
        alpha *= (1.0 - smoothstep(petalEdge - 0.12, petalEdge, d)) * (0.35 + d * 0.65);
      } else if (uBrush > 1.5 && uBrush < 2.5) {
        float crossGlow = exp(-min(abs(q.x), abs(q.y)) * 24.0) * (1.0 - d);
        alpha *= max(exp(-d * d * 8.0), crossGlow);
      } else if (uBrush > 3.5) {
        alpha *= exp(-d * d * 5.0);
      } else alpha *= exp(-d * d * 4.0);
    }
    vec3 color = mix(uColorA, uColorB, 0.5 + 0.5 * sin(vHue * 6.2831853));
    if (uBrush > 3.5 && uPoint > 0.5) color = mix(color, vec3(1.0), exp(-length(gl_PointCoord - 0.5) * 12.0) * 0.8);
    gl_FragColor = vec4(color * (uPoint > 0.5 ? 1.2 : 0.8), alpha);
  }
`;function fa(e){const a=new Float32Array(re*3),t=new Float32Array(re).fill(-1e3),r=new Float32Array(re),l=new Float32Array(re),o=new Float32Array(re*3),s=new Ue;s.setAttribute("position",new V(a,3).setUsage(he)),s.setAttribute("aBirth",new V(t,1).setUsage(he)),s.setAttribute("aHue",new V(r,1).setUsage(he)),s.setAttribute("aSilk",new V(l,1).setUsage(he)),s.setAttribute("aFlow",new V(o,3).setUsage(he)),s.setDrawRange(0,0);const n={uNow:{value:0},uLifetime:{value:4},uIntensity:{value:1},uBurst:{value:0},uBrush:{value:0},uBass:{value:0},uTreble:{value:0},uColorA:{value:new fe(Re.rose[0])},uColorB:{value:new fe(Re.rose[1])}},i=R=>new Me({uniforms:{...n,uPoint:{value:R}},vertexShader:ca,fragmentShader:da,transparent:!0,blending:Ae,depthWrite:!1,depthTest:!1}),c=i(0),d=i(1),h=new Et(s,c),m=new $e(s,d);h.name="finger-silk",m.name="finger-light",h.frustumCulled=m.frustumCulled=!1,e.add(h,m);let x=!1,b=0,S=0,M=0,u=new Map,p=0,C=0,T=0,w=1,g="ribbon";const y={particles:re,activePoints:0,segments:0,ribbonSegments:0,variant:"ribbon"};function B(R,A,I,J=!1,G=[0,0,0]){const z=S*2;a.set(R,z*3),a.set(A,(z+1)*3),t[z]=t[z+1]=b,r[z]=I,r[z+1]=I+.005,l[z]=l[z+1]=J?1:0,o.set(G,z*3),o.set(G,(z+1)*3),S=(S+1)%ht,M=Math.min(ht,M+1)}function k(R,A,I){const J=A[0]-R[0],G=A[1]-R[1],z=Math.hypot(J,G),Q=z>0?J/z:0,j=z>0?G/z:1;if(g==="sparks"||g==="petals"){const D=g==="sparks"?7:1;for(let q=0;q<D;q++){const N=S*.61803398875%1,$=N*Math.PI*2,ge=.25+S*.754877666%1*.85,P=g==="petals"?.015:.012,O=[A[0]+Math.cos($)*P,A[1]+Math.sin($)*P,A[2]];B(O,O,I+N*.2,!1,[Math.cos($)*ge,Math.sin($)*ge,N])}}else if(g==="comet"){B(R,A,I,!1,[-Q,-j,.7]);for(let D=1;D<4;D++){const q=(D%2?1:-1)*.025*D,N=$=>[$[0]-j*q-Q*D*.018,$[1]+Q*q-j*D*.018,$[2]];B(N(R),N(A),I+D*.04,!1,[-Q*(1+D*.3),-j*(1+D*.3),.1])}}else if(g==="neon"){B(R,A,I);for(const D of[-1,1]){const q=N=>[N[0]-j*D*.045,N[1]+Q*D*.045,N[2]];B(q(R),q(A),I+D*.18)}}else B(R,A,I)}function U(){S=M=0,t.fill(-1e3),u.clear(),p=0,s.setDrawRange(0,0),s.attributes.aBirth.needsUpdate=!0,y.activePoints=y.segments=y.ribbonSegments=0,n.uBurst.value=0}return{stats:y,reset:U,update(R,A){if(x)return;const I=pt.includes(A.variant)?A.variant:"ribbon";I!==g&&(U(),g=I),y.variant=I,n.uBrush.value=pt.indexOf(I),n.uBass.value=Math.min(1,Math.max(0,A.audio?.bass||0)),n.uTreble.value=Math.min(1,Math.max(0,A.audio?.treble||0)),h.visible=I!=="sparks"&&I!=="petals";const J=Math.max(0,Number(R)||0);b+=J,w+=J;const G=A.viewport?.width||10,z=A.viewport?.height||7;G!==C&&u.clear(),C=G,n.uNow.value=b,n.uLifetime.value=4*(A.trail??1),n.uIntensity.value=A.intensity??1,n.uBurst.value*=Math.exp(-J*3),(A.burst||0)!==T&&(n.uBurst.value=1.5),T=A.burst||0;const Q=Re[A.palette]||Re.rose;n.uColorA.value.set(Q[0]),n.uColorB.value.set(Q[1]);const j=(A.pointers||[]).slice(0,2),D=j.length!==p,q=new Map,N=j.map((P,O)=>{if(!P.down||P.pinch>.6||!Number.isFinite(P.x)||!Number.isFinite(P.y))return null;const Pe=P.id!==void 0&&P.id!==null,ye=Pe?`id:${typeof P.id}:${P.id}`:`index:${O}`,Z=!Pe&&D?null:u.get(ye),F=[(Math.min(1,Math.max(0,P.x))-.5)*G,(.5-Math.min(1,Math.max(0,P.y)))*z,Z?Z.point[2]:.15+O*.04],oe=Z?.point,Oe=oe?Math.hypot(F[0]-oe[0],F[1]-oe[1]):0,it=Z?.hueBase??O*.45,He=it+b*.035;let Le=Z?.stampPoint;if(!oe||Oe>Math.max(1.5,G*.35))k(F,F,He),Le=F;else if(I==="petals"){const ie=Le||oe,ee=Math.hypot(F[0]-ie[0],F[1]-ie[1]),Fe=.16,Ge=Math.min(32,Math.floor(ee/Fe));for(let W=0;W<Ge;W++){const be=(W+1)*Fe/ee,We=ie.map((rt,Ft)=>rt+(F[Ft]-rt)*be);k(We,We,He+W*.012),Le=We}}else if(Oe>.006){const ie=Math.min(64,Math.ceil(Oe/.035));for(let ee=0;ee<ie;ee++){const Fe=oe.map((W,be)=>W+(F[be]-W)*ee/ie),Ge=oe.map((W,be)=>W+(F[be]-W)*(ee+1)/ie);k(Fe,Ge,He+ee*.002)}}return q.set(ye,{point:F,hueBase:it,stampPoint:Le}),F});if(I==="ribbon"&&N[0]&&N[1]&&w>=1/30){w=0;const P=N[0],O=N[1],Pe=Math.hypot(O[0]-P[0],O[1]-P[1]),ye=Math.min(.32,Pe*.12)*Math.sin(b*1.8),Z=F=>[P[0]+(O[0]-P[0])*F+Math.sin(F*Math.PI)*ye*.35,P[1]+(O[1]-P[1])*F+Math.sin(F*Math.PI)*ye,.05+Math.sin(F*Math.PI)*.08];for(let F=0;F<24;F++)B(Z(F/24),Z((F+1)/24),b*.06+F/80,!0)}u=q,p=j.length;let $=0,ge=0;for(let P=0;P<M;P++)b-t[P*2]<n.uLifetime.value&&($++,l[P*2]>0&&ge++);y.segments=$,y.activePoints=$*2,y.ribbonSegments=ge,s.setDrawRange(0,M*2);for(const P of Object.values(s.attributes))P.needsUpdate=!0},dispose(){x||(x=!0,e.remove(h,m),s.dispose(),c.dispose(),d.dispose(),u.clear())}}}const E=12e3,K=6e3,te=(e,a,t)=>Math.max(a,Math.min(t,e)),ha=e=>e-Math.floor(e),H=e=>ha(Math.sin(e*127.1+311.7)*43758.5453),pa=["sand","heart","butterfly","planet","tree"];function ma(e,a=E){const t=Number.isFinite(a)?te(Math.floor(a),0,3e4):E,r=new Float32Array(t*3),l=[],o=[];if(e==="tree"){const s=(n,i,c,d,h)=>{const m=[n+Math.sin(c)*d,i+Math.cos(c)*d];l.push([n,i,...m,h]),h?(s(...m,c-.48,d*.69,h-1),s(...m,c+.48,d*.69,h-1)):o.push(m)};s(0,-2.35,0,1.6,4)}for(let s=0;s<t;s++){const n=H(s+101),i=H(s+909),c=H(s+1701),d=n*Math.PI*2;let h=0,m=0,x=(c-.5)*.18;if(e==="heart"){const b=Math.sqrt(i);h=Math.sin(d)**3*2.1*b,m=(13*Math.cos(d)-5*Math.cos(2*d)-2*Math.cos(3*d)-Math.cos(4*d))/8*b+.05,x*=1.5+(1-b)*2}else if(e==="butterfly"){const b=s%2?1:-1;if(s%13===0)h=(i-.5)*.18,m=(n-.5)*3.1;else{const S=s%5<3,M=Math.sqrt(i);h=b*((S?.96:.7)+Math.cos(d)*(S?1.05:.76)*M),m=(S?.75:-.95)+Math.sin(d)*(S?1.2:.85)*M,x+=Math.abs(h)*.12}}else if(e==="planet")if(s%5<2){const b=1.8+i*.6;h=Math.cos(d)*b,m=Math.sin(d)*b*.33+h*.18,x=Math.sin(d)*b*.72}else{const b=i*2-1,S=1.38*Math.sqrt(1-b*b);h=Math.cos(d)*S,m=b*1.38,x=Math.sin(d)*S}else if(e==="tree")if(s%5<3){const b=o[Math.floor(n*o.length)],S=Math.sqrt(i)*.3;h=b[0]+Math.cos(d*17.7)*S,m=b[1]+Math.sin(d*17.7)*S,x+=(c-.5)*.3}else{const b=l[Math.floor(n*l.length)],S=.018+b[4]*.022;h=b[0]+(b[2]-b[0])*i+(c-.5)*S,m=b[1]+(b[3]-b[1])*i}r.set([h,m,x],s*3)}return r}function va(e,a=E){const t=Number.isFinite(a)?te(Math.floor(a),0,3e4):E,r=new Float32Array(t*3),l=new Float32Array(t*3),o={positions:r,colors:l,count:0,sourceCount:0},{width:s,height:n,data:i,mask:c}=e||{};if(!Number.isInteger(s)||!Number.isInteger(n)||s<1||n<1||!i||!c||i.length<s*n*4||c.length<s*n)return o;const d=[];for(let m=0;m<s*n;m++)c[m]>=.45&&i[m*4+3]>0&&d.push(m);if(!d.length)return o;const h=Math.min(4.6/s,4.9/n);for(let m=0;m<t;m++){const x=d[Math.min(d.length-1,Math.floor(m*d.length/t))],b=Math.min(.72,Math.sqrt(d.length/Math.max(1,t)));r[m*3]=(x%s+.5-s/2+(H(m+5)-.5)*b)*h,r[m*3+1]=(n/2-Math.floor(x/s)-.5+(H(m+35)-.5)*b)*h,r[m*3+2]=(H(m+82)-.5)*.12;for(let S=0;S<3;S++)l[m*3+S]=i[x*4+S]/255}return{positions:r,colors:l,count:t,sourceCount:d.length}}function ga(e=E,a="cyan"){const t=te(Math.floor(e),0,3e4),r=new Float32Array(t*3),l=new Float32Array(t*3),o=(n,i,c,d,h,m)=>((n-c)/h)**2+((i-d)/m)**2<1;let s=0;for(let n=0;n<t;){const i=(H(s*2+1)-.5)*3.5,c=(H(s*2+2)-.5)*4.8;if(s++,!(o(i,c,0,1.55,.48,.65)||o(i,c,0,.05,.74,1.08)||o(i,c,-.88,.05,.28,.95)||o(i,c,.88,.05,.28,.95)||o(i,c,-.36,-1.48,.3,.9)||o(i,c,.36,-1.48,.3,.9)))continue;const h=.58+H(n+900)*.42;r.set([i,c,(H(n+42)-.5)*.3],n*3);const m=a==="rose"?[1,.47+(c+2.5)*.045,.73]:a==="solar"?[1,.62+(c+2.5)*.045,.26]:[1,.57+(c+2.5)*.06,.38];l.set(m.map(x=>x*h),n*3),n++}return{positions:r,colors:l,count:t,sourceCount:t}}const ya=`
attribute vec3 aColor;
attribute float aSeed;
attribute float aGhost;
attribute vec3 aPattern;
uniform float uTime, uIntensity, uTrail, uBass, uBurstAge, uGhostAge, uScale, uPointerCount, uShape;
uniform vec2 uPointer0, uPointer1;
varying vec3 vColor;
varying float vAlpha;
vec2 sandRepulsion(vec2 position, vec2 pointer) {
  vec2 delta = (position - pointer) * uScale;
  float distance = length(delta);
  float influence = 1.0 - smoothstep(0.05, 0.72, distance);
  vec2 direction = distance > 0.001 ? delta / distance : vec2(cos(aSeed * 6.28), sin(aSeed * 6.28));
  return direction * influence * 0.26 * uIntensity / max(uScale, 0.01);
}
void main() {
  float t = uTime - aGhost * 0.28 * uTrail;
  float phase = aSeed * 6.2831853;
  float edge = smoothstep(0.28, 0.95, aSeed);
  vec3 p = mix(position, aPattern, uShape);
  float pour = pow(fract(aSeed * 4.77 + t * 0.095), 5.0) * edge;
  p.x += sin(t * 0.65 + p.y * 2.4 + phase) * (0.028 + pour * 0.3) * uIntensity * mix(1.0, 0.38, uShape);
  p.y -= pour * (0.46 + aGhost * 0.65) * uIntensity * uTrail * mix(1.0, 0.35, uShape);
  p.z += sin(phase + t * 0.5) * 0.04;
  float blast = uBurstAge * exp(-uBurstAge * 1.25) * 3.0;
  p += vec3(cos(phase) * (0.8 + aSeed), sin(phase * 1.7) * 1.4, sin(phase)) * blast;
  p.xy *= 1.0 + uBass * 0.035;
  if (uPointerCount > 0.5) p.xy += sandRepulsion(p.xy, uPointer0);
  if (uPointerCount > 1.5) p.xy += sandRepulsion(p.xy, uPointer1);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = (1.3 + aSeed * 1.2 + uBass * 0.8) * (1.0 - aGhost * 0.22);
  vColor = aColor;
  float ghostFade = exp(-uGhostAge / max(0.1, uTrail * 0.45));
  vAlpha = mix(0.78, 0.23 * ghostFade, aGhost) * (0.6 + aSeed * 0.4);
}`,ba=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  float radius = length(gl_PointCoord - 0.5) * 2.0;
  if (radius > 1.0) discard;
  float glow = exp(-radius * radius * 3.8);
  gl_FragColor = vec4(vColor * (1.05 + glow * 0.4), vAlpha * glow);
}`;function wa(e){const a=new Ue;a.setAttribute("position",new V(new Float32Array((E+K)*3),3)),a.setAttribute("aColor",new V(new Float32Array((E+K)*3),3)),a.setAttribute("aPattern",new V(new Float32Array((E+K)*3),3)),a.setAttribute("aSeed",new V(Float32Array.from({length:E+K},(M,u)=>H(u%E+13)),1)),a.setAttribute("aGhost",new V(Float32Array.from({length:E+K},(M,u)=>u<E?0:1),1));const t={uTime:{value:0},uIntensity:{value:1},uTrail:{value:1},uBass:{value:0},uBurstAge:{value:99},uGhostAge:{value:0},uScale:{value:1},uPointerCount:{value:0},uPointer0:{value:new le},uPointer1:{value:new le},uShape:{value:0}},r=new Me({uniforms:t,vertexShader:ya,fragmentShader:ba,transparent:!0,depthWrite:!1,blending:Ae}),l=new $e(a,r);l.frustumCulled=!1,e.add(l);let o=!1,s,n,i,c=0,d=null,h="empty",m="sand";const x=new Map;let b={count:0,source:"empty",variant:"sand"};function S(M,u){const p=a.attributes.position.array,C=a.attributes.aColor.array;if(p.fill(0),C.fill(0),p.set(M.positions.subarray(0,M.count*3)),C.set(M.colors.subarray(0,M.count*3)),M.count){const T=u==="image"&&h==="image"&&d?.count?d:M;for(let w=0;w<K;w++){const g=w*2%T.count*3;p.set(T.positions.subarray(g,g+3),(E+w)*3),C.set(T.colors.subarray(g,g+3),(E+w)*3)}}d=M.count?M:null,h=M.count?u:"empty",t.uGhostAge.value=0,a.attributes.position.needsUpdate=!0,a.attributes.aColor.needsUpdate=!0,a.setDrawRange(0,M.count?E+K:0),b={count:M.count?E+K:0,source:M.count?u:"empty",variant:m}}return a.setDrawRange(0,0),{get stats(){return b},update(M,u){if(o)return;const p=pa.includes(u.variant)?u.variant:"sand";if(p!==m&&(m=p,p!=="sand")){x.has(p)||x.set(p,ma(p));const g=x.get(p),y=a.attributes.aPattern;y.array.set(g);for(let B=0;B<K;B++)y.array.set(g.subarray(B*6,B*6+3),(E+B)*3);y.needsUpdate=!0}t.uShape.value=p==="sand"?0:1,b.variant=p;const C=!!u.demo;(u.image!==s||C!==n||C&&!u.image&&u.palette!==i)&&(s=u.image,n=C,i=u.palette,S(u.image?va(u.image):C?ga(E,u.palette):{positions:new Float32Array,colors:new Float32Array,count:0},u.image?"image":"demo"));const T=Math.min(1,Math.max(.05,u.viewport?.width||7)/5.2);l.scale.setScalar(T),t.uScale.value=T;const w=(u.pointers||[]).filter(g=>Number.isFinite(g?.x)&&Number.isFinite(g?.y)).slice(0,2);t.uPointerCount.value=w.length;for(let g=0;g<w.length;g++)t[`uPointer${g}`].value.set((te(w[g].x,0,1)-.5)*(u.viewport?.width||7)/T,(.5-te(w[g].y,0,1))*(u.viewport?.height||7)/T);t.uTime.value=Number.isFinite(u.time)?u.time:0,t.uIntensity.value=te(u.intensity||1,.3,2),t.uTrail.value=te(u.trail||1,.3,2),t.uBass.value=te(u.audio?.bass||0,0,1),t.uBurstAge.value+=Math.max(0,Math.min(M||0,.1)),t.uGhostAge.value+=Math.max(0,Math.min(M||0,.1)),u.burst!==void 0&&u.burst!==c&&(c=u.burst,t.uBurstAge.value=0)},reset(){s=void 0,n=void 0,i=void 0,c=0,d=null,h="empty",t.uPointerCount.value=0,t.uGhostAge.value=0,t.uBurstAge.value=99,a.setDrawRange(0,0),b={count:0,source:"empty",variant:m}},dispose(){o||(o=!0,d=null,s=void 0,x.clear(),e.remove(l),a.dispose(),r.dispose())}}}const X=(e,a,t)=>Math.max(a,Math.min(t,e)),mt=e=>e&&Number.isFinite(e.x)&&Number.isFinite(e.y),Ee=e=>({x:X(e.x,.03,.97),y:X(e.y,.08,.9)}),vt=["curtain","wings","halo","waves","tunnel"];function gt(e,a,t){const r=X(Number.isFinite(a)?a:0,0,1),l=1-X(Number.isFinite(t)?t:0,0,1),o=r*Math.PI*2;if(e==="wings"){const s=Math.abs(r-.5)*2;return[(r<.5?-1:1)*s*2.55,Math.sin(s*Math.PI*.83)*1.65+s*.35-l*(.3+Math.sin(s*Math.PI)*1.8),l*.2+s*.35]}if(e==="halo"){const s=1.95-l*.55;return[Math.cos(o)*s,Math.sin(o)*s*.68+.2,Math.sin(o)*s*.44]}if(e==="waves")return[(r-.5)*5.2,Math.sin(o*1.5)*.45+Math.sin(o*.5)*.3-l*.55,l*-.3];if(e==="tunnel"){const s=2.35*(1-l*.84),n=o+l*1.7;return[Math.cos(n)*s,Math.sin(n)*s,-l*8]}return[(r-.5)*5.2,1+Math.sin(r*Math.PI)*.4-l*3.8,0]}function xa(e,a=[],t=0){const r=n=>mt(n)&&(n.visibility??1)>=.45;let l,o,s;if(r(e?.[15])&&r(e?.[16]))l=Ee(e[15]),o=Ee(e[16]),s="pose";else{const n=a.filter(mt);l=n[0]?Ee(n[0]):{x:.22,y:.38};const i=Number.isFinite(t)?t:0;o=n[1]?Ee(n[1]):{x:.78+(n[0]?Math.sin(i*.27)*.09:0),y:n[0]?X(l.y+.1+Math.sin(i*.34)*.06,.08,.9):.32},s=n.length?"pointers":"idle"}return l.x>o.x&&([l,o]=[o,l]),{left:l,right:o,source:s}}const Ma=`
uniform float uTime, uIntensity, uTrail, uBass, uTreble, uLayer, uWidth, uBurstAge, uVariant;
uniform vec2 uLeft, uRight;
varying vec2 vUv;
varying float vFlow;
void main() {
  vUv = uv;
  float s = uv.x;
  float down = 1.0 - uv.y;
  float phase = s * 10.0 + uLayer * 1.8;
  float wave = sin(phase + uTime * 0.7) * 0.22 + sin(s * 23.0 - uTime * 0.5 + uLayer) * 0.1;
  vec2 anchor = mix(uLeft, uRight, s);
  float width = max(abs(uRight.x - uLeft.x), uWidth * 0.4);
  float x = (uLeft.x + uRight.x) * 0.5 + (s - 0.5) * width;
  float crest = min(2.8, anchor.y + sin(s * 3.14159265) * (0.4 + uBass * 0.6) + wave * uIntensity);
  float y = mix(crest, -2.85, pow(down, 0.85));
  x += sin(down * 4.0 + uTime * 0.42 + phase) * down * 0.14 * uIntensity;
  y += sin(s * 17.0 + uTime + down * 5.0 + uLayer) * down * (0.08 + uTreble * 0.18);
  float blast = uBurstAge * exp(-uBurstAge * 1.4);
  x += (s - 0.5) * blast * 1.8;
  y += sin(phase) * blast * 0.5;
  float z = uLayer * -0.22 + sin(phase * 0.6 + down * 2.0 + uTime * 0.2) * 0.2;
  if (uVariant > 0.5) {
    vec3 shape = position;
    float span = clamp(abs(uRight.x - uLeft.x) / max(0.1, uWidth), 0.2, 1.0);
    float fit = min(1.0, uWidth / 5.8);
    shape.x *= fit * (0.8 + span * 0.2);
    shape.y += (uLeft.y + uRight.y) * 0.09 + (uRight.y - uLeft.y) * (s - 0.5) * 0.12;
    if (uVariant < 1.5) {
      shape.y -= uLayer * 0.085;
      shape.z += sin(s * 6.28 + uTime * 0.5) * abs(shape.x) * (0.1 + uBass * 0.2);
    } else if (uVariant < 2.5) {
      shape.xy *= 1.0 + uLayer * 0.032 + uBass * 0.04;
      shape.y += sin(s * 6.28 + uTime * 0.4) * 0.08;
    } else if (uVariant < 3.5) {
      shape.y += (uLayer - 2.0) * 0.44 + sin(s * 16.0 - uTime * 0.6 + uLayer * 0.6) * (0.14 + uBass * 0.22);
    } else {
      float rotation = uLayer * 0.08 + uTime * 0.055;
      // Rotate before fitting x, so the cone keeps its circular depth cues on mobile.
      vec2 circular = vec2(position.x, position.y);
      circular = mat2(cos(rotation), sin(rotation), -sin(rotation), cos(rotation)) * circular;
      shape.xy = vec2(circular.x * fit, circular.y) * (1.0 + uLayer * 0.025 + uBass * 0.04);
      shape.y += (uLeft.y + uRight.y) * 0.08;
      shape.z -= uLayer * 0.32;
    }
    shape.y += sin(phase + down * 4.0 + uTime * 0.65) * 0.035 * uIntensity * (1.0 + uTreble);
    shape.z -= uLayer * 0.12;
    x = shape.x + (uLeft.x + uRight.x) * 0.035 + (s - 0.5) * blast * 0.35 * fit;
    y = clamp(shape.y + sin(phase) * blast * 0.2, -3.1, 3.1);
    z = shape.z;
  }
  vFlow = sin(s * 42.0 + sin(s * 12.0 + uTime * 0.3) * 3.0 + uLayer * 0.6);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(x, y, z, 1.0);
}`,Aa=`
uniform vec3 uColorA, uColorB;
uniform float uBass, uTreble, uLayer, uTrail, uVariant, uTime;
varying vec2 vUv;
varying float vFlow;
void main() {
  float down = 1.0 - vUv.y;
  float rim = exp(-down * 19.0);
  float rays = pow(0.5 + 0.5 * vFlow, 5.0);
  float side = pow(max(0.0, sin(vUv.x * 3.14159265)), 0.45);
  float fade = pow(1.0 - down, 1.8 / max(0.4, uTrail));
  if (uVariant > 3.5) {
    float rings = pow(0.5 + 0.5 * cos(down * 62.83 - uTime * 0.7 - uLayer * 0.3), 12.0);
    rays = rays * 0.4 + rings * 1.9;
    fade = (1.0 - down * 0.55) * (0.65 + uTrail * 0.35);
  }
  vec3 color = mix(uColorA, uColorB, clamp(down * 1.35 + uLayer * 0.08, 0.0, 1.0));
  float alpha = (0.025 + rays * 0.065 + rim * 0.28) * side * fade * (1.0 + uBass * 0.7);
  gl_FragColor = vec4(color * (1.0 + rim * 0.65 + uTreble * 0.15), alpha);
}`,Sa=`
attribute float aSeed;
uniform float uTime, uWidth, uIntensity, uBass, uVariant;
uniform vec2 uLeft, uRight;
varying float vAlpha;
void main() {
  float t = fract(aSeed * 19.91 + uTime * (0.025 + aSeed * 0.035));
  float s = position.x;
  float width = max(abs(uRight.x - uLeft.x), uWidth * 0.4);
  vec3 p = vec3((uLeft.x + uRight.x) * 0.5 + (s - 0.5) * width,
    mix(-2.8, mix(uLeft.y, uRight.y, s) + 0.4, t), position.z);
  p.x += sin(t * 7.0 + aSeed * 20.0 + uTime * 0.3) * 0.12 * uIntensity;
  if (uVariant > 0.5) {
    float fit = min(1.0, uWidth / 5.8);
    p = position;
    p.x *= fit;
    p.y += (uLeft.y + uRight.y) * 0.08 + sin(uTime * 0.4 + aSeed * 20.0) * 0.055;
    p.xy *= 1.0 + uBass * 0.04;
    if (uVariant > 2.5 && uVariant < 3.5) p.y += (fract(aSeed * 173.7) - 0.5) * 1.9;
  }
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = 1.0 + aSeed * 1.3 + uBass;
  vAlpha = sin(t * 3.14159265) * 0.42;
}`,Ca=`
uniform vec3 uColorA;
varying float vAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  if(d > 1.0) discard;
  gl_FragColor = vec4(uColorA, exp(-d*d*4.0) * vAlpha);
}`;function Ta(e){const a=new wt;e.add(a);const t={uTime:{value:0},uIntensity:{value:1},uTrail:{value:1},uBass:{value:0},uTreble:{value:0},uWidth:{value:7},uBurstAge:{value:99},uVariant:{value:0},uLeft:{value:new le(-1.8,.8)},uRight:{value:new le(1.8,1.1)},uColorA:{value:new fe("#69f2b4")},uColorB:{value:new fe("#6878ff")}},r=new zt(1,1,128,20),l=[];for(let u=0;u<5;u++){const p=new Me({uniforms:{...t,uLayer:{value:u}},vertexShader:Ma,fragmentShader:Aa,transparent:!0,depthWrite:!1,side:Dt,blending:Ae});l.push(p);const C=new Nt(r,p);C.frustumCulled=!1,a.add(C)}const o=new Ue,s=Float32Array.from({length:6e3},(u,p)=>p*.61803398875%1),n=new Float32Array(6e3*3);for(let u=0;u<6e3;u++)n.set([u*.754877666%1,0,-(u*.56984029%1)],u*3);o.setAttribute("position",new V(n.slice(),3)),o.setAttribute("aSeed",new V(s,1));const i=new Map;function c(u){if(!i.has(u)){const T=new Float32Array(r.attributes.position.array.length),w=r.attributes.uv;for(let y=0;y<w.count;y++)T.set(gt(u,w.getX(y),w.getY(y)),y*3);const g=new Float32Array(n.length);for(let y=0;y<6e3;y++)g.set(u==="curtain"?n.subarray(y*3,y*3+3):gt(u,y*.754877666%1,s[y]),y*3);i.set(u,{surface:T,motes:g})}const{surface:p,motes:C}=i.get(u);r.attributes.position.array.set(p),r.attributes.position.needsUpdate=!0,o.attributes.position.array.set(C),o.attributes.position.needsUpdate=!0,t.uVariant.value=vt.indexOf(u)}const d=new Me({uniforms:t,vertexShader:Sa,fragmentShader:Ca,transparent:!0,depthWrite:!1,blending:Ae}),h=new $e(o,d);h.frustumCulled=!1,a.add(h);let m=!1,x=0,b=!1,S,M={count:r.attributes.position.count*5+6e3,source:"idle",variant:"curtain"};return{get stats(){return M},update(u,p){if(m)return;const C=vt.includes(p.variant)?p.variant:"curtain";C!==S&&(c(C),S=C);const T=xa(p.pose,p.pointers,p.time),w=Math.max(.1,p.viewport?.width||7),g=Math.min(w*.88,8.5),y=new le((T.left.x-.5)*g,(.5-T.left.y)*5.5),B=new le((T.right.x-.5)*g,(.5-T.right.y)*5.5),k=b?1-Math.exp(-Math.max(0,u||0)*9):1;t.uLeft.value.lerp(y,k),t.uRight.value.lerp(B,k),b=!0,t.uTime.value=Number.isFinite(p.time)?p.time:0,t.uWidth.value=g,t.uIntensity.value=X(p.intensity||1,.3,2),t.uTrail.value=X(p.trail||1,.3,2),t.uBass.value=X(p.audio?.bass||0,0,1),t.uTreble.value=X(p.audio?.treble||0,0,1);const U=p.palette==="rose"?["#ff83b8","#7776ff"]:p.palette==="solar"?["#ffd086","#f57084"]:["#69f2b4","#6878ff"];t.uColorA.value.set(U[0]),t.uColorB.value.set(U[1]),t.uBurstAge.value+=Math.max(0,Math.min(u||0,.1)),p.burst!==void 0&&p.burst!==x&&(x=p.burst,t.uBurstAge.value=0),M={...M,source:p.demo?"demo":T.source,variant:C}},reset(){b=!1,x=0,t.uBurstAge.value=99},dispose(){m||(m=!0,i.clear(),e.remove(a),r.dispose(),l.forEach(u=>u.dispose()),o.dispose(),d.dispose())}}}const f=e=>document.querySelector(e),Ba={rings:ua,paint:fa,portrait:wa,aurora:Ta},_=f("#sl-stage"),ne=new Vt({antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});ne.setPixelRatio(Math.min(devicePixelRatio,1.5));ne.setClearColor(330258);ne.domElement.setAttribute("aria-label","交互粒子画布，可使用鼠标或触摸操作");_.appendChild(ne.domElement);const et=new Ut;et.background=new fe(330258);const Ke=new wt;et.add(Ke);const de=new $t(-5,5,3.5,-3.5,.1,100);de.position.z=14;const Be=new qt(ne);Be.addPass(new Ot(et,de));Be.addPass(new Ht(new le(1,1),.55,.35,.4));Be.addPass(new Gt);const Ye=Qe(),ue=Qe(),tt=Qe(),ae=new Map,Pa={level:0,bass:0,treble:0,bands:new Float32Array(64)},v={visual:"demo",sound:"demo",visionLoading:!1,soundLoading:!1,intensity:1,trail:1,palette:"cyan",layout:"rings",variant:"rings",burst:0,paused:!1};let L,ve,Se=null,Ce=null,Y=0,at=0,pe=0,we=0,xe=0,Tt=0,yt=0,st=Ze(),bt;function se(e){f("#sl-message").textContent=e,f("#sl-message").classList.add("on"),clearTimeout(bt),bt=setTimeout(()=>f("#sl-message").classList.remove("on"),4200)}function _e(e,a,t){for(const r of document.querySelectorAll(`${e} button`)){const l=r.dataset[a]===t;r.classList.toggle("active",l),r.setAttribute("aria-pressed",String(l))}}function qe(){const{width:e,height:a}=_.getBoundingClientRect();ne.setSize(Math.max(1,e),Math.max(1,a)),Be.setSize(Math.max(1,e),Math.max(1,a));const t=e/Math.max(1,a);de.left=-3.5*t,de.right=3.5*t,de.updateProjectionMatrix()}function Xe(){_e("#sl-visual-source","visual",v.visual==="photo"?"manual":v.visual),f("#sl-visual-source [data-visual=camera]").hidden=!L.camera,f("#sl-visual-source [data-visual=camera]").disabled=v.visionLoading,f("#sl-preview").hidden=v.visual!=="camera",f("#sl-input-hint").textContent=v.visual==="demo"?L.id==="portrait"?"示例粒子演示，尚未开启摄像头。":"自动演示中；切换手动或开启设备，立即接管画面。":L.manualHint}function Je(){_e("#sl-sound-source","sound",v.sound);for(const e of f("#sl-sound-source").querySelectorAll("button"))e.disabled=v.soundLoading&&e.dataset.sound===v.sound}function Bt(){f("#sl-variants").innerHTML=je(L.id).map(e=>`<button data-variant="${e.id}" aria-pressed="${e.id===v.variant}" class="${e.id===v.variant?"active":""}">${e.label}</button>`).join(""),f("#sl-variant-note").textContent=je(L.id).find(e=>e.id===v.variant).description,L.id==="portrait"&&v.visual==="demo"&&(f("#sl-input-hint").textContent="示例粒子演示，尚未开启摄像头。真实输入会保留前景原色重组造型。")}function Pt(){pe++,we++,xe++,Ye.clear(),ue.clear(),tt.clear(),ae.clear(),Se=null,Ce=null,v.visionLoading=v.soundLoading=!1}function nt(e,a=!0){Pt(),ve?.dispose(),Ke.clear(),L=e,Object.assign(v,{visual:"demo",sound:"demo",intensity:1,trail:1,palette:e.palette,layout:"rings",variant:Mt(e.id),burst:0}),Y=0,at=0,st=Ze(),ve=Ba[e.id](Ke),document.title=`${e.name} · 感官粒子实验室`,document.documentElement.style.setProperty("--accent",e.accent),document.body.dataset.module=e.id,f("#sl-title").textContent=e.name,f("#sl-kicker").textContent=e.en,f("#sl-phrase").textContent=e.phrase,f("#sl-hint").textContent=e.hint,f("#sl-input-label").textContent=`${e.inputName}输入`,f("#sl-vision-state").textContent="演示中",f("#sl-sound-state").textContent="节奏演示",f("#sl-intensity").value=f("#sl-trail").value=1,f("#sl-intensity-value").textContent=f("#sl-trail-value").textContent="1.0",f("#sl-photo-note").textContent="照片在本机提取人像；建议主体清楚、光线充足。",f("#sl-sound-note").textContent="选择“电脑声音”，可直接跟随电脑音乐播放器或播放音乐的标签页。",f("#sl-burst").textContent=e.id==="portrait"?"爆散再重聚":"释放冲击波",f("#sl-reset").textContent=e.id==="paint"?"清空画布":"重新开始";for(const t of document.querySelectorAll("[data-modules]"))t.hidden=!t.dataset.modules.split(" ").includes(e.id);for(const t of f("#sl-nav").querySelectorAll("a"))t.dataset.module===e.id?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");_e("#sl-palette","palette",v.palette),Bt(),Xe(),Je(),qe(),a&&history.pushState({},"",e.href)}f("#sl-nav").innerHTML=ze.map(e=>`<a href="${e.href}" data-module="${e.id}">${e.name}</a>`).join("");f("#sl-nav").onclick=e=>{const a=e.target.closest("[data-module]");!a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||(e.preventDefault(),nt(ze.find(t=>t.id===a.dataset.module)))};addEventListener("popstate",()=>nt(xt(location.pathname),!1));async function Te(e){const a=++pe;if(++xe,Ye.clear(),tt.clear(),Se=null,Ce=null,v.visual=e,v.visionLoading=e==="camera",f("#sl-vision-state").textContent=e==="camera"?"正在开启":e==="demo"?"演示中":"手动控制",Xe(),e==="camera"){f("#sl-input-hint").textContent="正在开启摄像头并载入本地模型，点击手动可取消。",f("#sl-detected").textContent="正在载入";try{if(!await Ye.replace(r=>sa({kind:L.camera,video:f("#sl-video"),signal:r,onFrame(l){a===pe&&(Se=l,Tt=performance.now())},onError(){a===pe&&(Te("manual"),se("摄像头已断开，请重新开启；也可使用手动操作。"))}}))||a!==pe)return;v.visionLoading=!1,Xe(),f("#sl-input-hint").textContent=L.id==="paint"?"让手进入画面：食指移动落笔，拇指与食指捏合停笔。":L.id==="aurora"?"后退一些，让上半身和双手进入画面；双臂牵动光幕。":"让脸和上半身进入画面；开启话筒后可拍手爆散。"}catch(t){if(a!==pe)return;Te("manual"),f("#sl-vision-state").textContent="未能开启",se(t.name==="NotAllowedError"?"摄像头权限未开启。可使用手动操作，或授权后重试。":"摄像头或识别模型无法启动，请重试或使用手动操作。")}}}f("#sl-visual-source").onclick=e=>{const a=e.target.dataset.visual;a&&!e.target.disabled&&Te(a)};async function Ve(e){const a=++we;if(ue.clear(),v.sound=e,v.soundLoading=e==="mic"||e==="system",st=Ze(),f("#sl-sound-state").textContent=v.soundLoading?e==="system"?"等待共享":"正在开启":e==="demo"?"节奏演示":"已关闭",f("#sl-sound-note").textContent=e==="demo"?"合成节奏演示；选择“电脑声音”可直接跟随电脑正在播放的音乐。":e==="off"?"声音输入已关闭。":e==="system"?Zt:"等待麦克风授权；点击关闭可取消。",Je(),!!v.soundLoading)try{const t=await ue.replace(l=>oa({kind:e,signal:l,onEnded(){a===we&&(Ve("off"),f("#sl-sound-state").textContent=e==="system"?"共享已结束":"设备已断开",f("#sl-sound-note").textContent=e==="system"?"电脑声音共享已停止，点击“电脑声音”可重新选择来源。":"麦克风已断开，可以重新开启。")}}));if(!t||a!==we)return;v.soundLoading=!1,Je();const r=e==="system"&&t.captureSurface==="browser";f("#sl-sound-state").textContent=e==="mic"?"正在聆听":r?"标签页声音":"电脑声音",f("#sl-sound-note").textContent=e==="mic"?"跟随说话或拍手；要直接读取音乐播放器，请选择“电脑声音”。":r?"正在分析所选标签页的声音。在该标签页播放音乐；点击关闭即可停止共享。":"正在分析共享来源的声音。可在电脑音乐播放器中播放音乐；点击关闭即可停止共享。"}catch(t){if(a!==we)return;Ve("off");const r=ea(t,e);f("#sl-sound-state").textContent=r.label,f("#sl-sound-note").textContent=r.note,se(r.note)}}f("#sl-sound-source").onclick=e=>{e.target.dataset.sound&&!e.target.disabled&&Ve(e.target.dataset.sound)};f("#sl-photo").onchange=async e=>{const a=e.target.files[0];if(e.target.value="",!a)return;if(!a.type.startsWith("image/"))return se("请选择图片文件。");Te("manual");const t=++xe;v.visual="photo",f("#sl-vision-state").textContent="正在提取",f("#sl-photo-note").textContent="正在从照片中提取人像…";try{const r=await tt.replace(async o=>({image:await na(a,{signal:o}),stop(){}}));if(!r||t!==xe)return;Ce=r.image;const l=Ce.mask.some(o=>o>.5);f("#sl-vision-state").textContent=l?"照片人像":"未识别人像",f("#sl-photo-note").textContent=l?`已载入 ${a.name}；照片保留原色。点击画面可爆散。`:"这张照片中未检测到清晰人像，请换一张主体更清楚的照片。"}catch{if(t!==xe)return;f("#sl-vision-state").textContent="提取失败",f("#sl-photo-note").textContent="照片无法处理，请换一张照片或使用示例演示。",se("照片处理失败，请重试或切换演示。")}};for(const e of["intensity","trail"])f(`#sl-${e}`).oninput=a=>{v[e]=+a.target.value,f(`#sl-${e}-value`).textContent=v[e].toFixed(1)};f("#sl-variants").onclick=e=>{const a=e.target.dataset.variant;if(!a)return;const t=Mt(L.id,a);t!==v.variant&&(v.variant=t,v.layout=L.id==="rings"&&t==="mountains"?"mountains":"rings",L.id==="paint"&&ve.reset(),Bt())};f("#sl-palette").onclick=e=>{e.target.dataset.palette&&(v.palette=e.target.dataset.palette,_e("#sl-palette","palette",v.palette))};f("#sl-burst").onclick=()=>v.burst++;f("#sl-reset").onclick=()=>{ve.reset(),at=Y+.7,se(L.id==="paint"?"画布已清空。":"画面已重新开始。")};function ot(e,a){const t=_.getBoundingClientRect();return{id:`pointer-${e.pointerId}`,x:ut.clamp((e.clientX-t.left)/t.width,0,1),y:ut.clamp((e.clientY-t.top)/t.height,0,1),down:a,pinch:0}}_.onpointerdown=e=>{v.visual==="demo"&&L.id!=="portrait"&&Te("manual"),_.setPointerCapture(e.pointerId),ae.set(e.pointerId,ot(e,!0)),(L.id==="portrait"||L.id==="rings")&&v.burst++};_.onpointermove=e=>{v.visual==="demo"&&L.id!=="portrait"||ae.set(e.pointerId,ot(e,e.buttons>0||e.pointerType==="touch"))};function La(e){e.pointerType==="mouse"&&e.type!=="pointerleave"?ae.set(e.pointerId,ot(e,!1)):ae.delete(e.pointerId)}_.onpointerup=_.onpointercancel=_.onlostpointercapture=La;_.onpointerleave=e=>{_.hasPointerCapture(e.pointerId)||ae.delete(e.pointerId)};function Lt(e){f("#sl-panel").classList.toggle("collapsed",!e),document.body.classList.toggle("panel-open",e),f("#sl-panel-toggle").setAttribute("aria-expanded",String(e)),f("#sl-toggle-icon").textContent=e?"−":"+",qe()}f("#sl-panel-toggle").onclick=()=>Lt(f("#sl-panel").classList.contains("collapsed"));f("#sl-capture").onclick=()=>{const e=document.createElement("a");e.download=`${L.id}-${Date.now()}.png`,e.href=ne.domElement.toDataURL("image/png"),e.click()};f("#sl-fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{se("当前浏览器不支持全屏，可直接使用画布。")}};addEventListener("resize",qe);new ResizeObserver(qe).observe(_);document.addEventListener("visibilitychange",()=>{v.paused=document.hidden,document.hidden&&(ae.clear(),Se=null)});addEventListener("pagehide",Pt);nt(xt(location.pathname),!1);Lt(!matchMedia("(max-width:760px)").matches);window.__sensory={get module(){return L.id},get stats(){return ve.stats},get source(){return{visual:v.visual,sound:v.sound}}};const Fa=new _t;ne.setAnimationLoop(()=>{const e=Math.min(Fa.getDelta(),.05);if(v.paused)return;Y+=e;const a=Qt(L.id,Y),t=v.visual==="camera"&&performance.now()-Tt<800?Se:null,r=[...ae.values()].slice(0,2);let l=v.visual==="demo"?L.id==="portrait"&&r.length?r:a.pointers:t?.pointers?.length?t.pointers:r;Y<at&&(l=[]);let o=v.sound==="demo"?a.audio:Pa;ue.current&&(ue.current.active?o=ue.current.sample():(Ve("off"),se("声音设备已断开，可重新开启。"))),L.id==="portrait"&&f("#sl-clap").checked&&["mic","system"].includes(v.sound)&&st.step(o.level,Y)&&v.burst++;const s={time:Y,viewport:{width:de.right-de.left,height:7},audio:o,pointers:l,pose:t?.pose??null,image:v.visual==="photo"?Ce:t?.image??null,demo:v.visual==="demo",intensity:v.intensity,trail:v.trail,palette:v.palette,burst:v.burst,layout:v.layout,variant:v.variant};if(ve.update(e,s),f("#sl-level").style.width=`${Math.min(1,o.level)*100}%`,Y-yt>.2){if(yt=Y,v.visual==="camera"&&!v.visionLoading){const c=t?.detected??0;f("#sl-vision-state").textContent=c?"正在跟随":"等待识别",f("#sl-detected").textContent=c?L.id==="paint"?`${c} 只手 · 食指绘画`:"已检测到人像":L.id==="paint"?"未检测到手，可用鼠标绘画":"未检测到人，请进入画面"}const n={demo:"演示",manual:"手动",camera:v.visionLoading?"摄像头载入中":"摄像头",photo:"照片"}[v.visual],i={demo:"节奏演示",off:"声音关闭",mic:"麦克风",system:ue.current?.captureSurface==="browser"?"标签页声音":"电脑声音"}[v.sound];f("#sl-source").textContent=`${n} · ${i}`}Be.render()});
