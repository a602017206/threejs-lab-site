import{C as E,y as Se,j,a0 as he,a1 as ge,a3 as We,_ as be,V as w,Q as le,ac as pe,G as k,M as x,e as $,f as V,n as fe,L as _e,r as de,p as st,ab as we,z as xe,ad as oe,ae as rt,l as Te,m as Oe,B as Ve,k as N,o as ae,af as lt,d as U,a6 as ct,a7 as ft,g as dt,ag as mt,ah as ut,X as pt,s as vt,t as ht,S as Ge,a8 as gt,b as wt,H as xt,D as yt,i as Mt,K as He,P as St,w as bt}from"./three.module-cZ7pRlNf.js";import{E as Tt,R as Pt,U as Ct,O as zt}from"./OutputPass-BKpt9uxj.js";import{R as At}from"./Reflector-C1OFnHGW.js";import{f as kt}from"./fit-BSHkNBCw.js";const Ue=[{name:"天穹核心区",color:6613759,x:0,z:0,towers:13},{name:"霓虹商业区",color:16736203,x:-4.2,z:-1.7,towers:9},{name:"云港空域",color:10451967,x:4,z:-1.5,towers:8},{name:"下城区",color:4579251,x:.5,z:4,towers:10}],Et=e=>{const t=e*Math.PI*2;return[10.5*Math.cos(t)+2*Math.cos(3*t),15+2.2*Math.sin(2*t)+Math.sin(5*t),9*Math.sin(t)+2*Math.sin(2*t)]};function _t(e){let t=e|0;return()=>{t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}const Rt=`
attribute vec3 aSize;
attribute vec3 aTint;
attribute float aSeed;
varying vec3 vLocal, vN, vWorld, vTint, vSize;
varying float vSeed;
#include <fog_pars_vertex>
void main() {
  vLocal = position;
  vN = normal;
  vTint = aTint;
  vSize = aSize;
  vSeed = aSeed;
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  vec4 mvPosition = viewMatrix * w;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,Ft=`
uniform float uTime;
varying vec3 vLocal, vN, vWorld, vTint, vSize;
varying float vSeed;
#include <fog_pars_fragment>
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  vec3 n = normalize(vN);
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 col;
  if (n.y > 0.5) {
    col = vec3(0.012, 0.014, 0.02) + vTint * 0.01;
  } else {
    float u = (abs(n.x) > 0.5 ? vLocal.z * vSize.z : vLocal.x * vSize.x) + (n.x * 3.0 + n.z * 7.0);
    float v = vLocal.y * vSize.y;
    vec2 cell = vec2(floor(u / 0.16), floor(v / 0.2));
    vec2 f = vec2(fract(u / 0.16), fract(v / 0.2));
    float win = smoothstep(0.2, 0.28, f.x) * smoothstep(0.8, 0.72, f.x) * smoothstep(0.28, 0.36, f.y) * smoothstep(0.8, 0.72, f.y);
    float r = h21(cell + vSeed * 91.7);
    float rate = mix(0.05, 0.3, fract(vSeed * 7.31));
    float lit = step(1.0 - rate, r);
    float band = step(0.94, h21(vec2(cell.y, vSeed * 13.1)));
    lit = max(lit, band * step(0.35, r));
    float off = step(0.995, h21(cell + floor(uTime * 0.3 + vSeed * 10.0)));
    lit *= 1.0 - off;
    float pick = h21(cell * 1.7 + 3.1);
    vec3 wc = pick < 0.55 ? vec3(1.0, 0.7, 0.4) : pick < 0.86 ? vec3(0.62, 0.82, 1.0) : vTint;
    vec3 base = vec3(0.016, 0.02, 0.03);
    base += vTint * 0.07 * exp(-v * 0.45);
    float fres = pow(1.0 - max(dot(n, V), 0.0), 4.0);
    base += vec3(0.07, 0.05, 0.12) * fres;
    // 远处窗格小于像素时改用平均亮度，避免闪烁的白噪点被 Bloom 放大成一片
    float aa = smoothstep(0.25, 0.9, max(fwidth(u / 0.16), fwidth(v / 0.2)));
    vec3 lamp = mix(wc * lit * win * (0.35 + 0.75 * r), wc * (rate + 0.03) * 0.22, aa);
    col = base * (1.0 - win * 0.4) + lamp * 1.25;
    float crown = step(vSize.y - 0.08, v) * step(0.72, fract(vSeed * 3.1));
    float pillar = step(0.82, fract(vSeed * 5.7)) * smoothstep(0.03, 0.0, abs(abs(vLocal.x) - 0.5) * vSize.x) * step(0.5, abs(n.z));
    col += vTint * (crown * 3.0 + pillar * 1.5);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <fog_fragment>
}`,Dt=`
attribute float aSeed;
uniform float uTime, uDpr;
varying float vOn;
#include <fog_pars_vertex>
void main() {
  vOn = step(0.72, fract(uTime * 0.5 + aSeed));
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = uDpr * clamp(140.0 / -mvPosition.z, 2.0, 9.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,It=`
varying float vOn;
#include <fog_pars_fragment>
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d);
  gl_FragColor = vec4(vec3(3.0, 0.15, 0.08) * a * (0.15 + vOn), a);
  #include <fog_fragment>
}`;function Bt({districts:e,scale:t=4,seed:o=7}){const n=_t(o),l=e.map(m=>({c:new E(m.color),x:m.x*t,z:m.z*t})),a=[],s=3.6,i=1.3,u=24;for(let m=-u;m<u;m+=s+i)for(let M=-u;M<u;M+=s+i){const D=m+s/2,_=M+s/2,G=Math.hypot(D,_);if(G<4.2||G>u+2)continue;const H=n()<.5?1:2,O=n()<.5?1:2;for(let X=0;X<H;X++)for(let I=0;I<O;I++){const ot=s/H-.25,nt=s/O-.25,Ce=m+(X+.5)*s/H,ze=M+(I+.5)*s/O,at=Math.exp(-G/11),it=1.2+n()*3+at*(6+n()*12)+(n()<.06?8:0);let Ae=l[0].c,ke=1/0;for(const ue of l){const Ee=Math.hypot(ue.x-Ce,ue.z-ze);Ee<ke&&(ke=Ee,Ae=ue.c)}a.push({x:Ce,z:ze,w:ot*(.8+n()*.2),d:nt*(.8+n()*.2),h:it,tint:Ae,seed:n()})}}const c=[];for(const m of a)if(c.push([m.x,0,m.z,m.w,m.h,m.d,m.tint,m.seed]),m.h>7&&m.seed>.45){const M=.62+m.seed*.15;c.push([m.x,m.h,m.z,m.w*M,m.h*.35,m.d*M,m.tint,m.seed*.73+.11]),m.top=m.h*1.35}else m.top=m.h;const r=l[0].c;[[0,3.2,9],[9,2.5,7],[16,1.8,6],[22,1.1,4]].forEach(([m,M,D],_)=>c.push([0,m,0,M,D,M,r,.93+_*.01]));const f=new Se(1,1,1).translate(0,.5,0),d=c.length,h=new Float32Array(d*3),p=new Float32Array(d*3),g=new Float32Array(d),v=new j({vertexShader:Rt,fragmentShader:Ft,fog:!0,uniforms:he.merge([ge.fog,{uTime:{value:0}}])}),S=new We(f,v,d),P=new be;c.forEach(([m,M,D,_,G,H,O,X],I)=>{P.compose(new w(m,M,D),new le,new w(_,G,H)),S.setMatrixAt(I,P),h.set([_,G,H],I*3),p.set([O.r,O.g,O.b],I*3),g[I]=X}),f.setAttribute("aSize",new pe(h,3)),f.setAttribute("aTint",new pe(p,3)),f.setAttribute("aSeed",new pe(g,1));const C=new k;C.add(S);const z=new x(new $(.03,.22,5,8),new V({color:new E(10482943).multiplyScalar(2)}));z.position.y=28.5,C.add(z);const F=[],T=[];for(const m of a)m.top>6&&(F.push(m.x+m.w*.3,m.top+.05,m.z+m.d*.3),T.push(m.seed));F.push(0,31,0),T.push(.5);const A=new fe;A.setAttribute("position",new _e(F,3)),A.setAttribute("aSeed",new _e(T,1));const te=new j({vertexShader:Dt,fragmentShader:It,fog:!0,transparent:!0,depthWrite:!1,blending:de,uniforms:he.merge([ge.fog,{uTime:{value:0},uDpr:{value:Math.min(devicePixelRatio,2)}}])});return C.add(new st(A,te)),{group:C,towers:a,coreHeight:31,update(m){v.uniforms.uTime.value+=m,te.uniforms.uTime.value+=m}}}const Re=["拉面","酒店","电子","夜市","药局","网吧","龙门","寿司","义体","典当","天穹","茶馆","赛博","霓虹","云港","诊所","当铺","烧烤","书店","按摩"],ne=["#ff3fb4","#37e6ff","#ffb547","#7dff8a","#b67bff","#ff5a4f"];function Nt(e,t,o){const n=e.length,l=112,a=o?144:l*n+64,s=o?l*n+64:144,i=document.createElement("canvas");i.width=a,i.height=s;const u=i.getContext("2d");u.fillStyle="rgba(8,4,16,0.92)",u.fillRect(0,0,a,s),u.strokeStyle=t,u.lineWidth=5,u.shadowColor=t,u.shadowBlur=14,u.strokeRect(10,10,a-20,s-20),u.font='900 92px "PingFang SC","Microsoft YaHei",sans-serif',u.textAlign="center",u.textBaseline="middle",u.fillStyle="#fff";for(let r=0;r<2;r++)u.shadowBlur=r?6:26,u.fillStyle=r?"#fff":t,[...e].forEach((f,d)=>u.fillText(f,o?a/2:32+l*(d+.5),o?32+l*(d+.5):s/2));const c=new Te(i);return c.colorSpace=Oe,c.anisotropy=8,{t:c,aspect:a/s}}const Lt=`
uniform float uTime;
uniform vec3 uA, uB;
uniform sampler2D uText;
varying vec2 vUv;
float h11(float x) { return fract(sin(x * 91.3) * 43758.5); }
void main() {
  vec2 uv = vUv;
  float glitch = step(0.96, h11(floor(uTime * 6.0))) * (h11(floor(uv.y * 30.0) + uTime) - 0.5) * 0.08;
  uv.x += glitch;
  float wave = sin(uv.x * 9.0 + uTime * 1.6) * 0.5 + 0.5;
  float rings = sin(length(uv - vec2(0.5, 0.45)) * 30.0 - uTime * 3.0) * 0.5 + 0.5;
  vec3 col = mix(uA, uB, wave) * (0.35 + 0.4 * rings);
  vec4 txt = texture2D(uText, uv);
  col = mix(col, vec3(1.0) * 1.6, txt.a);
  float scan = 0.75 + 0.25 * sin(vUv.y * 420.0);
  float edge = smoothstep(0.0, 0.03, vUv.x) * smoothstep(1.0, 0.97, vUv.x) * smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.96, vUv.y);
  float flick = 0.85 + 0.15 * sin(uTime * 37.0) * sin(uTime * 13.0);
  col *= scan * edge * flick * 1.5;
  gl_FragColor = vec4(col, max(col.r, max(col.g, col.b)) * 0.9);
}`;function Wt(e){const t=document.createElement("canvas");t.width=512,t.height=300;const o=t.getContext("2d");o.textAlign="center",o.fillStyle="#fff",o.font='900 96px "PingFang SC",sans-serif',o.fillText(e[0],256,150),o.font="600 30px ui-monospace,monospace",o.fillText(e[1],256,215);const n=new Te(t);return n.colorSpace=Oe,n}function Ot({towers:e,seed:t=3}){let o=t;const n=()=>(o=o*16807%2147483647)/2147483647,l=new k,a=[],s=e.filter(r=>Math.hypot(r.x,r.z)<22&&r.h>4);for(let r=0;r<150;r++){const f=s[Math.floor(n()*s.length)],d=Re[Math.floor(n()*Re.length)],h=ne[Math.floor(n()*ne.length)],p=n()<.72,{t:g,aspect:v}=Nt(d,h,p),S=p?1.3+n()*1.3:.5+n()*.3,P=S*v;if(P>(f.w+f.d)*.45)continue;const C=new V({map:g,transparent:!0,side:we,toneMapped:!1,depthWrite:!1});C.color.setScalar(2.1);const z=new x(new xe(P,S),C),F=Math.floor(n()*4),T=[1,-1,0,0][F],A=[0,0,1,-1][F],te=(T?f.d:f.w)/2-P/2-.05,m=(n()*2-1)*Math.max(0,te),M=Math.min(f.h-S/2-.2,f.h*(.3+n()*.55)),D=p&&n()<.55,_=D?P/2+.04:.03;z.position.set(f.x+T*(f.w/2+_)+(A?m:0),M,f.z+A*(f.d/2+_)+(T?m:0)),z.rotation.y=D?T?0:Math.PI/2:Math.atan2(T,A),z.renderOrder=2,l.add(z),n()<.18&&a.push({mat:C,phase:n()*10})}const i=[],u=[...e].filter(r=>Math.hypot(r.x,r.z)<18).sort((r,f)=>f.h-r.h).slice(0,5),c=[["苍穹","SKY DRAGON · PATROL"],["天穹","DOME CITY 09"],["义体","CYBERNETICS"],["云港","SKYPORT LINE 7"],["龙门","DRAGON GATE"]];return u.forEach((r,f)=>{const d=new j({transparent:!0,depthWrite:!1,side:we,blending:rt,blendSrc:oe,blendDst:oe,blendSrcAlpha:oe,blendDstAlpha:oe,uniforms:{uTime:{value:f*3},uA:{value:new E(ne[f%6])},uB:{value:new E(ne[(f+2)%6])},uText:{value:Wt(c[f])}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:Lt}),h=Math.abs(r.x)>Math.abs(r.z)?[Math.sign(r.x),0]:[0,Math.sign(r.z)||1],p=Math.min(2.6,(h[0]?r.d:r.w)*.95),g=p*.58,v=new x(new xe(p,g),d);v.position.set(r.x+h[0]*(r.w/2+.06),r.h*.62,r.z+h[1]*(r.d/2+.06)),v.rotation.y=Math.atan2(h[0],h[1]),v.renderOrder=3,l.add(v),i.push(d)}),{group:l,update(r,f){for(const d of i)d.uniforms.uTime.value+=r;for(const d of a){const h=Math.sin(f*9+d.phase)*Math.sin(f*23+d.phase*3);d.mat.color.setScalar(h>.55?.2:2.1)}}}}function Vt(){const e=new j({side:Ve,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime;
      varying vec3 vDir;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
      float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * n(p); p *= 2.03; a *= 0.5; } return s; }
      void main() {
        float y = max(vDir.y, 0.0);
        vec3 zenith = vec3(0.006, 0.007, 0.02), horizon = vec3(0.13, 0.04, 0.1), glow = vec3(0.6, 0.22, 0.16);
        vec3 col = mix(horizon, zenith, pow(y, 0.4));
        col += glow * exp(-y * 16.0) * 0.25;
        vec2 uv = vDir.xz / (vDir.y + 0.25) * 1.6 + vec2(uTime * 0.01, 0.0);
        float c = smoothstep(0.45, 0.85, fbm(uv));
        col += vec3(0.3, 0.1, 0.22) * c * exp(-y * 3.5) * 0.4;
        gl_FragColor = vec4(col, 1.0);
      }`});return{mesh:new x(new N(90,48,24),e),update(o){e.uniforms.uTime.value+=o}}}function Gt({width:e,height:t,fogColor:o}){const n={name:"WetGround",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uFog:{value:new E(o)}},vertexShader:`
      uniform mat4 textureMatrix;
      varying vec4 vUv;
      varying vec3 vWorld;
      void main() {
        vUv = textureMatrix * vec4(position, 1.0);
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWorld = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float uTime;
      uniform vec3 uFog;
      varying vec4 vUv;
      varying vec3 vWorld;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
      vec2 ripple(vec2 p) {
        vec2 cell = floor(p * 2.0), f = fract(p * 2.0) - 0.5;
        float t = fract(uTime * 0.9 + h(cell) * 7.0);
        float r = length(f);
        float wave = sin((r - t * 0.6) * 60.0) * smoothstep(0.0, 0.1, t) * (1.0 - t) * smoothstep(t * 0.6 + 0.08, t * 0.6, r);
        return f / max(r, 1e-3) * wave;
      }
      void main() {
        float puddle = smoothstep(0.35, 0.65, n(vWorld.xz * 0.35));
        vec2 d = ripple(vWorld.xz) * 0.012 + (vec2(n(vWorld.xz * 3.0), n(vWorld.xz * 3.0 + 7.0)) - 0.5) * mix(0.03, 0.006, puddle);
        vec4 uv = vUv;
        uv.xy += d * uv.w;
        vec3 refl = texture2DProj(tDiffuse, uv).rgb;
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = mix(0.25, 1.0, pow(1.0 - max(V.y, 0.0), 3.0));
        vec3 asphalt = vec3(0.012, 0.012, 0.016) * (0.7 + 0.6 * n(vWorld.xz * 8.0));
        vec3 col = asphalt + refl * fres * mix(0.35, 0.85, puddle);
        float dist = length(vWorld - cameraPosition);
        col = mix(col, uFog, 1.0 - exp(-pow(dist * 0.022, 2.0)));
        gl_FragColor = vec4(col, 1.0);
      }`},l=Math.min(devicePixelRatio,2),a=new At(new xe(e,t),{clipBias:.003,textureWidth:innerWidth*l*.5,textureHeight:innerHeight*l*.5,shader:n});return a.rotation.x=-Math.PI/2,{mesh:a,update(s){a.material.uniforms.uTime.value+=s}}}function Ht(e=7e3){const t=new Float32Array(e*6),o=new Float32Array(e*2),n=new Float32Array(e*2);for(let i=0;i<e;i++){const u=(Math.random()-.5)*50,c=Math.random()*34,r=(Math.random()-.5)*50,f=Math.random();t.set([u,c,r,u,c,r],i*6),o.set([0,1],i*2),n.set([f,f],i*2)}const l=new fe;l.setAttribute("position",new ae(t,3)),l.setAttribute("aEnd",new ae(o,1)),l.setAttribute("aSeed",new ae(n,1));const a=new j({transparent:!0,depthWrite:!1,blending:de,fog:!0,uniforms:he.merge([ge.fog,{uTime:{value:0},uCenter:{value:new w}}]),vertexShader:`
      attribute float aEnd, aSeed;
      uniform float uTime;
      uniform vec3 uCenter;
      varying float vA;
      #include <fog_pars_vertex>
      void main() {
        vec3 p = position;
        float speed = 18.0 + aSeed * 8.0;
        p.y = mod(p.y - uTime * speed, 34.0) - 1.0;
        p.xz = uCenter.xz + mod(p.xz - uCenter.xz + 25.0, 50.0) - 25.0;
        p += vec3(0.12, 0.55, 0.05) * aEnd;
        vA = aEnd;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      varying float vA;
      #include <fog_pars_fragment>
      void main() {
        gl_FragColor = vec4(vec3(0.55, 0.65, 0.85) * (0.05 + 0.15 * vA), 1.0);
        #include <fog_fragment>
      }`}),s=new lt(l,a);return s.frustumCulled=!1,{mesh:s,update(i,u){a.uniforms.uTime.value+=i,a.uniforms.uCenter.value.copy(u)}}}function Ut({lanes:e=26,perLane:t=26}={}){const o=e*t,n=new We(new Se(.4,.07,.12),new V({toneMapped:!1}),o);n.frustumCulled=!1;const l=[];for(let d=0;d<e;d++){const h=d%2===0,p=(Math.floor(d/2)-e/4)*4.9+1.8,g=3+d%5*1.25;l.push({alongX:h,offset:p,y:g,dir:d%4<2?1:-1,speed:4+d%3*1.6})}const a=new E;for(let d=0;d<o;d++){const h=l[Math.floor(d/t)];a.setHex(h.dir>0?16773848:16722474).multiplyScalar(h.dir>0?2.2:2.6),n.setColorAt(d,a)}const s=new be,i=new le,u=new le().setFromAxisAngle(new w(0,1,0),Math.PI/2),c=new w,r=new w(1,1,1);let f=0;return{mesh:n,update(d){f+=d;for(let h=0;h<o;h++){const p=l[Math.floor(h/t)],g=h%t,v=((f*p.speed*p.dir+g*(52/t)+Math.sin(g*12.9)*1.2)%52+52)%52-26;c.set(p.alongX?v:p.offset,p.y,p.alongX?p.offset:v),s.compose(c,p.alongX?i:u,r),n.setMatrixAt(h,s)}n.instanceMatrix.needsUpdate=!0}}}function jt(e){const t=new k,o=[],n=new $(.05,3.2,40,32,1,!0).translate(0,20,0);for(let a=0;a<3;a++){const s=new j({transparent:!0,depthWrite:!1,side:we,blending:de,uniforms:{uColor:{value:new E([10476799,16743129,12578815][a])}},vertexShader:"varying float vY; varying vec3 vN, vV; void main(){ vY = position.y / 40.0; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 uColor; varying float vY; varying vec3 vN, vV; void main(){ float edge = pow(abs(dot(vN, vV)), 2.0); float a = edge * pow(1.0 - vY, 1.5) * 0.3; gl_FragColor = vec4(uColor * a, 1.0); }"}),i=new x(n,s);i.position.copy(e),t.add(i),o.push({beam:i,phase:a*2.1})}let l=0;return{group:t,update(a){l+=a;for(const{beam:s,phase:i}of o)s.rotation.set(.45+Math.sin(l*.3+i)*.25,l*.25+i,Math.cos(l*.21+i)*.3,"YXZ")}}}const je=.2,$t=.02,Yt=`
uniform float uPhase, uTime;
vec3 dragonPath(float t) {
  float a = 6.28318530718 * t;
  return vec3(10.5 * cos(a) + 2.0 * cos(3.0 * a), 15.0 + 2.2 * sin(2.0 * a) + sin(5.0 * a), 9.0 * sin(a) + 2.0 * sin(2.0 * a));
}
float dragonRadius(float u) { return mix(0.24, 0.42, smoothstep(0.0, 0.06, u)) * (1.0 - 0.88 * pow(u, 1.3)); }
void dragonFrame(float u, out vec3 C, out vec3 T, out vec3 N, out vec3 B) {
  float t = uPhase - u * ${je.toFixed(3)};
  T = normalize(dragonPath(t + 0.002) - dragonPath(t - 0.002));
  B = normalize(cross(T, vec3(0.0, 1.0, 0.0)));
  N = cross(B, T);
  float amp = 0.15 + 0.85 * smoothstep(0.0, 0.4, u);
  C = dragonPath(t) + B * sin(u * 16.0 - uTime * 3.2) * 0.42 * amp + N * sin(u * 11.0 - uTime * 2.4 + 1.0) * 0.3 * amp;
}`,$e=(e,t,o)=>{const n=Math.min(1,Math.max(0,(o-e)/(t-e)));return n*n*(3-2*n)},Kt=e=>(.24+(.42-.24)*$e(0,.06,e))*(1-.88*Math.pow(e,1.3)),Pe=new w(0,1,0),ye=new w,Xt=new w,ie=(e,t)=>t.fromArray(Et(e));function Fe(e,t,o,n){const l=t-e*je;n.T.subVectors(ie(l+.002,ye),ie(l-.002,Xt)).normalize(),n.B.crossVectors(n.T,Pe).normalize(),n.N.crossVectors(n.B,n.T);const a=.15+.85*$e(0,.4,e);return ie(l,n.C).addScaledVector(n.B,Math.sin(e*16-o*3.2)*.42*a).addScaledVector(n.N,Math.sin(e*11-o*2.4+1)*.3*a),n.r=Kt(e),n.m.makeBasis(ye.copy(n.B).negate(),n.N,n.T),n}const qt=()=>({C:new w,T:new w,N:new w,B:new w,r:0,m:new be});function Qt(e=640,t=36){const o=new Float32Array((e+1)*(t+1)*3),n=[];for(let a=0;a<=e;a++)for(let s=0;s<=t;s++)o.set([a/e,s/t*Math.PI*2,0],(a*(t+1)+s)*3);for(let a=0;a<e;a++)for(let s=0;s<t;s++){const i=a*(t+1)+s,u=i+t+1;n.push(i,u,i+1,u,u+1,i+1)}const l=new fe;return l.setAttribute("position",new ae(o,3)),l.setIndex(n),l}function Zt(e){const t=new U({color:16777215,metalness:.8,roughness:.4,envMapIntensity:.9});return t.onBeforeCompile=o=>{Object.assign(o.uniforms,e),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
${Yt}
varying vec3 vDragon;`).replace("#include <beginnormal_vertex>",`
        float du = position.x, th = position.y;
        vec3 dC, dT, dN, dB;
        dragonFrame(du, dC, dT, dN, dB);
        float rad = dragonRadius(du);
        float ridge = pow(max(cos(th), 0.0), 30.0);
        float tooth = 1.0 - fract(du * 90.0);
        float spike = ridge * tooth * (0.16 + 0.2 * (1.0 - smoothstep(0.0, 0.15, du))) * (1.0 - du * 0.6);
        vDragon = vec3(du, th, spike / 0.36);
        vec3 objectNormal = normalize(dN * cos(th) / 0.9 + dB * sin(th));`).replace("#include <begin_vertex>","vec3 transformed = dC + (dN * cos(th) * 0.9 + dB * sin(th)) * rad + dN * spike;"),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vDragon;`).replace("#include <color_fragment>",`#include <color_fragment>
        float du = vDragon.x, th = vDragon.y;
        vec2 sc = vec2(du * 150.0, th / 6.28318 * 24.0);
        sc.y += mod(floor(sc.x), 2.0) * 0.5;
        vec2 sf = fract(sc);
        float scaleH = 1.0 - smoothstep(0.5, 1.0, length((sf - vec2(0.0, 0.5)) * vec2(0.95, 1.25)));
        float belly = 1.0 - smoothstep(-0.8, -0.45, cos(th));
        float plate = smoothstep(0.0, 0.15, fract(du * 70.0));
        float spikeK = smoothstep(0.05, 0.3, vDragon.z);
        vec3 gold = mix(vec3(0.5, 0.27, 0.05), vec3(1.0, 0.76, 0.32), scaleH);
        vec3 cream = vec3(0.95, 0.8, 0.5) * mix(0.55, 1.0, plate);
        vec3 spikeC = vec3(0.85, 0.12, 0.05);
        diffuseColor.rgb = mix(mix(gold, cream, belly), spikeC, spikeK);
        float dragonH = mix(scaleH, plate, belly);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(0.6, 0.32, dragonH) + belly * 0.15;`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor = mix(0.9, 0.25, max(belly, spikeK));`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          vec3 dpx = dFdx(-vViewPosition), dpy = dFdy(-vViewPosition);
          vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
          float det = dot(dpx, r1);
          vec3 grad = sign(det) * (dFdx(dragonH) * r1 + dFdy(dragonH) * r2);
          normal = normalize(abs(det) * normal - grad * 0.25);
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += spikeC * spikeK * 0.35 + vec3(0.25, 0.12, 0.02) * scaleH * (1.0 - belly) * 0.05;`)},t.customProgramCacheKey=()=>"dragon-body",t}const B=(e,t,o=6)=>new pt(e,t,o).translate(0,t/2,0),Jt=new le,eo=new w;function R(e,t,o){return e.position.copy(t),e.quaternion.copy(Jt.setFromUnitVectors(Pe,eo.copy(o).normalize())),e}function to(e){const t=new k,o=(a,s,i)=>new w(a,s,i),n=(a,s,i,u)=>{const c=new x(a,s);return c.position.copy(i),u&&c.scale.copy(u),t.add(c),c};n(new N(.3,28,20),e.gold,o(0,.04,.1),o(.88,.72,1.15)),n(new $(.15,.23,.62,20).rotateX(Math.PI/2),e.gold,o(0,0,.55),o(1,.72,1)),n(new N(.15,20,14),e.gold,o(0,.02,.86),o(1.15,.72,.8));for(const a of[-1,1])n(new N(.045,10,8),e.dark,o(a*.07,.07,.95));const l=n(new $(.06,.13,.55,14).rotateX(Math.PI/2).translate(0,0,.27),e.gold,o(0,-.12,.22),o(1,.45,1));l.rotation.x=.22;for(let a=0;a<5;a++)for(const s of[-1,1])t.add(R(new x(B(.016,.07,4),e.ivory),o(s*.1,-.08,.52+a*.07),o(0,-1,0)));for(const a of[-1,1]){t.add(R(new x(new N(.04,14,10),e.eye),o(a*.17,.12,.33),Pe)),t.add(R(new x(B(.06,.22,5),e.gold),o(a*.15,.18,.34),o(a*.6,.5,-1)));const s=R(new x(B(.045,.75,7),e.ivory),o(a*.12,.22,.02),o(a*.35,.55,-1));t.add(s),t.add(R(new x(B(.025,.28,6),e.ivory),o(a*.21,.42,-.25),o(a*.6,1,-.2)));for(let i=0;i<3;i++)t.add(R(new x(B(.03,.26,5),e.mane),o(a*.06,-.16,.25-i*.1),o(a*.3,-1,-.6)))}for(let a=0;a<15;a++){const s=-Math.PI*.8+a/14*Math.PI*1.6,i=o(Math.sin(s),Math.cos(s),0),u=.38+.18*Math.cos(s);t.add(R(new x(B(.065,u,5),e.mane),i.clone().multiplyScalar(.18).add(o(0,.02,-.1)),i.multiplyScalar(.7).add(o(0,0,-1))))}return t.scale.setScalar(1.45),t}function oo(e,t){const o=new k,n=new k;o.add(n),n.add(new x(new $(.07,.095,.36,10).translate(0,-.18,0),e.gold));const l=new k;l.position.y=-.36,n.add(l),l.add(new x(new $(.045,.065,.3,10).translate(0,-.15,0),e.gold)),l.add(R(new x(B(.04,.22,5),e.mane),new w(0,0,-.03),new w(t*.3,.2,-1)));const a=new k;a.position.y=-.3,l.add(a);const s=new x(new N(.075,12,8),e.gold);s.scale.set(1.1,.6,1.3),a.add(s);for(let i=0;i<4;i++)a.add(R(new x(B(.018,.12,5),e.ivory),new w((i-1.5)*.04,-.02,.07),new w((i-1.5)*.3,-.6,1)));return{hip:o,thigh:n,knee:l,side:t}}function no(){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),o=t.createRadialGradient(64,64,0,64,64,64);return o.addColorStop(0,"rgba(255,240,200,1)"),o.addColorStop(.25,"rgba(255,190,90,0.55)"),o.addColorStop(1,"rgba(255,120,40,0)"),t.fillStyle=o,t.fillRect(0,0,128,128),new Te(e)}function ao(){const e={uPhase:{value:.1},uTime:{value:0}},t=new k,o=new x(Qt(),Zt(e));o.frustumCulled=!1,t.add(o);const n={gold:new U({color:14262332,metalness:.85,roughness:.38,envMapIntensity:1}),ivory:new U({color:15655620,metalness:.1,roughness:.4}),mane:new U({color:13116954,roughness:.55,emissive:5900288,emissiveIntensity:.6}),dark:new U({color:1707269,roughness:.6}),eye:new V({color:new E(1.8,.9,.15),toneMapped:!1}),whisker:new U({color:16765562,metalness:.6,roughness:.35,emissive:6961664,emissiveIntensity:.8})},l=to(n);t.add(l);const a=[-1,1].map(p=>{const g=new x(new fe,n.whisker);return l.add(g),{mesh:g,side:p,pts:Array.from({length:14},()=>new w)}}),s=[.15,.15,.52,.52].map((p,g)=>{const v=oo(n,g%2?1:-1);return v.u=p,v.phase=g*1.3,t.add(v.hip),v}),i=new k;i.add(new x(new N(.26,24,16),new V({color:new E(2.4,1.9,1.2),toneMapped:!1})));const u=new ct(new ft({map:no(),blending:de,depthWrite:!1,toneMapped:!1}));u.scale.setScalar(2.4),i.add(u);const c=new dt(16761466,6,10,1.6);i.add(c),t.add(i);const r=qt(),f=new w;let d=0;function h(p){for(let g=0;g<p.pts.length;g++){const v=g/(p.pts.length-1);p.pts[g].set(p.side*(.1+.35*v+.12*Math.sin(v*3)),-.02-.12*v+Math.sin(v*6-d*4+p.side)*.09*v,.82-1.9*v+.35*Math.sin(v*2.5))}p.mesh.geometry.dispose(),p.mesh.geometry=new mt(new ut(p.pts),24,.011,5,!1)}return{group:t,headPosition:f,get altitude(){return f.y*32},update(p){d+=p,e.uTime.value=d;const g=e.uPhase.value+=p*$t;Fe(0,g,d,r),l.position.copy(r.C).addScaledVector(r.T,.08),l.quaternion.setFromRotationMatrix(r.m),f.copy(l.position),a.forEach(h);for(const v of s){Fe(v.u,g,d,r),v.hip.quaternion.setFromRotationMatrix(r.m),v.hip.position.copy(r.C).addScaledVector(ye.set(-r.B.x,-r.B.y,-r.B.z),v.side*r.r*.7).addScaledVector(r.N,-r.r*.4);const S=Math.sin(d*2.6+v.phase);v.thigh.rotation.set(-.7+S*.35,0,v.side*.45),v.knee.rotation.x=1+S*.25}ie(g+.035,i.position),i.position.y+=Math.sin(d*1.7)*.25+.15,u.material.rotation=d*.3,c.intensity=6+Math.sin(d*5)*1.2}}}const io=[{name:"夜间航线 A",alt:"480 m",y:.28,color:"#62eaff",points:[[.12,.62],[.28,.38],[.48,.3],[.68,.42],[.86,.28]]},{name:"云港进近",alt:"320 m",y:.48,color:"#9d78ff",points:[[.08,.55],[.32,.58],[.55,.5],[.82,.46]]},{name:"下城绕行",alt:"510 m",y:.68,color:"#45dfb3",points:[[.16,.72],[.4,.78],[.62,.66],[.88,.7]]}],De=[{name:"天穹核心区",index:9.4,neon:.92,color:"#64eaff"},{name:"霓虹商业区",index:9.8,neon:1,color:"#ff67ce"},{name:"云港空域",index:8.6,neon:.74,color:"#9d78ff"},{name:"下城区",index:7.2,neon:.58,color:"#45dfb3"}];function so({ctx:e,w:t,h:o,time:n,mode:l}){if(e.clearRect(0,0,t,o),e.fillStyle="#090614",e.fillRect(0,0,t,o),l==="airspace"){e.strokeStyle="rgba(98,234,255,.08)";for(let c=1;c<5;c++)e.beginPath(),e.arc(t*.42,o*.52,Math.min(t,o)*.12*c,0,Math.PI*2),e.stroke();return e.setLineDash([5,5]),e.strokeStyle="rgba(255,103,206,.7)",e.beginPath(),e.arc(t*.3,o*.42,54,0,Math.PI*2),e.stroke(),e.setLineDash([]),e.fillStyle="#ff67ce",e.font='11px "PingFang SC", sans-serif',e.textAlign="center",e.fillText("商业区禁飞圈 · 220 m",t*.3,o*.42-64),io.forEach((c,r)=>{e.beginPath(),c.points.forEach((z,F)=>{const T=z[0]*t,A=z[1]*o;F===0?e.moveTo(T,A):e.lineTo(T,A)}),e.strokeStyle=c.color,e.lineWidth=2,e.globalAlpha=.85,e.stroke(),e.globalAlpha=1;const f=c.points.length-1,h=(n*.12+r*.2)%1*f,p=c.points[Math.floor(h)],g=c.points[Math.min(f,Math.floor(h)+1)],v=h-Math.floor(h),S=(p[0]+(g[0]-p[0])*v)*t,P=(p[1]+(g[1]-p[1])*v)*o;e.beginPath(),e.moveTo(S,P-7),e.lineTo(S+8,P),e.lineTo(S,P+7),e.closePath(),e.fillStyle=c.color,e.fill();const C=c.points[0];e.fillStyle=c.color,e.textAlign="left",e.font='600 12px "PingFang SC", sans-serif',e.fillText(`${c.name}  ${c.alt}`,C[0]*t+8,C[1]*o-10)}),e.fillStyle="#aaa2cf",e.font='11px "PingFang SC", sans-serif',e.textAlign="left",e.fillText("高度层 200 / 400 / 600 m",20,o-22),[]}const a=[["霓虹在线",.86],["招牌亮度",.94],["雨幕可见",.68],["空域安全",.92],["人流脉冲",.74]],s=t*.34,i=o*.52,u=Math.min(t,o)*.28;return e.beginPath(),a.forEach(([,c],r)=>{const f=-Math.PI/2+r/a.length*Math.PI*2,d=s+Math.cos(f)*u*c,h=i+Math.sin(f)*u*c;r===0?e.moveTo(d,h):e.lineTo(d,h)}),e.closePath(),e.fillStyle="rgba(255,103,206,.18)",e.strokeStyle="#ff67ce",e.lineWidth=1.5,e.fill(),e.stroke(),a.forEach(([c],r)=>{const f=-Math.PI/2+r/a.length*Math.PI*2;e.fillStyle="#f1edff",e.font='11px "PingFang SC", sans-serif',e.textAlign="center",e.fillText(c,s+Math.cos(f)*(u+22),i+Math.sin(f)*(u+22))}),e.fillStyle="#f1edff",e.font="700 28px ui-monospace, monospace",e.textAlign="center",e.fillText("9.4",s,i+6),e.font='11px "PingFang SC", sans-serif',e.fillStyle="#aaa2cf",e.fillText("夜景指数",s,i+24),De.forEach((c,r)=>{const f=t*.62,d=48+r*((o-90)/De.length),h=(t-f-36)*c.neon;e.fillStyle="rgba(255,255,255,.06)",e.fillRect(f,d,t-f-36,28),e.shadowColor=c.color,e.shadowBlur=16*c.neon,e.fillStyle=c.color,e.globalAlpha=.35+c.neon*.55,e.fillRect(f,d,h,28),e.globalAlpha=1,e.shadowBlur=0,e.fillStyle="#f1edff",e.font='600 12px "PingFang SC", sans-serif',e.textAlign="left",e.fillText(c.name,f+8,d+18),e.textAlign="right",e.fillText(c.index.toFixed(1),t-28,d+18)}),[]}const b=e=>document.querySelector(e);b("#districts").innerHTML=Ue.map((e,t)=>`<li><i style="background:#${e.color.toString(16).padStart(6,"0")}"></i><span>${e.name}</span><b>${88+t*3}%</b></li>`).join("");function Ye(){b("time").textContent=`系统时间 · ${new Intl.DateTimeFormat("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date)}`}Ye();setInterval(Ye,1e3);const Ke=1707046,W=b("#city-canvas"),Y=new vt({canvas:W,antialias:!0});Y.setPixelRatio(Math.min(devicePixelRatio,2));Y.toneMapping=ht;Y.toneMappingExposure=1.05;const K=new Ge;K.fog=new gt(Ke,.022);const Z=new wt(42,1,.1,200);function ro(){const e=new Ge;e.add(new x(new N(20,16,8),new V({color:787988,side:Ve})));const t=(l,a,s)=>{const i=new x(new Se(...s),new V({color:new E(...l)}));i.position.set(...a),e.add(i)};t([4,.5,2.4],[-8,1,-4],[1,5,6]),t([.5,2.4,4],[8,2,3],[1,4,7]),t([3.5,1.4,.35],[0,-9,0],[16,1,16]),t([.5,.4,1.2],[0,9,0],[10,1,10]),t([2.5,2.2,2],[3,3,-8],[3,2,1]);const o=new St(Y),n=o.fromScene(e,.04).texture;return o.dispose(),n}K.environment=ro();K.add(new xt(5926143,16726650,.6));const Xe=new yt(10475775,.9);Xe.position.set(-10,20,8);K.add(Xe);const qe=Vt(),Qe=Gt({width:140,height:140,fogColor:Ke}),me=Bt({districts:Ue}),Ze=Ot({towers:me.towers}),Je=Ht(),et=Ut(),tt=jt(new w(0,me.coreHeight-2,0)),se=ao();K.add(qe.mesh,Qe.mesh,me.group,Ze.group,Je.mesh,et.mesh,tt.group,se.group);const J=new Tt(Y);J.addPass(new Pt(K,Z));const lo=new Ct(new Mt(1,1),.75,.5,.9);J.addPass(lo);J.addPass(new zt);const y={az:.65,el:.17,dist:38,target:new w(0,9,0)};let ee=!1,re=null,ce=0;b("#airspace-list").innerHTML=[["DR-07 苍穹巡航","480 m","夜间航线 A"],["云港进近廊道","320 m","已清空"],["商业区禁飞圈","220 m","警戒中"],["下城雨幕绕行","510 m","临时调整"]].map(([e,t,o])=>`<li><span>${e}<small>${o}</small></span><b>${t}</b></li>`).join("");b("#night-list").innerHTML=[["霓虹节点在线","2.8M","+18.6%"],["招牌峰值亮度","9.4","/10"],["雨幕可见度","68%","中等"],["空域安全指数","92","稳定"],["街区人流脉冲","1.4×","高峰"]].map(([e,t,o])=>`<li><span>${e}<small>${o}</small></span><b>${t}</b></li>`).join("");const Ie={panorama:{kicker:"THREE.JS / RAIN NIGHT CITY",heading:"天穹城市实时景观",location:"SECTOR 09 · NIGHT RAIN<br/><span>龙影活动区域</span>",hint:"拖拽旋转城市 · 观看飞龙盘旋",view:{az:.65,el:.17,dist:38,target:new w(0,9,0)},follow:!1},airspace:{kicker:"AIRSPACE / DRAGON CORRIDOR",heading:"空域航线实时监控",location:"CORRIDOR A · DR-07<br/><span>三层高度航路</span>",hint:"夜间航线、云港进近与下城绕行",view:{az:.2,el:.28,dist:28,target:new w(0,15,0)},follow:!0},night:{kicker:"NIGHT INDEX / CITY PULSE",heading:"夜景指数全城扫描",location:"NEON PEAK · UTC+8<br/><span>四区夜景指数</span>",hint:"霓虹、雨幕、空域与人流合成指数",view:{az:1.1,el:.55,dist:42,target:new w(0,6,0)},follow:!1}};let L="panorama";function co(e){L=Ie[e]?e:"panorama";const t=Ie[L];b(".city-shell").dataset.page=L,document.querySelectorAll(".city-shell nav [data-page]").forEach(o=>o.classList.toggle("active",o.dataset.page===L)),b("#city-kicker").textContent=t.kicker,b("#city-heading").textContent=t.heading,b("#city-location").innerHTML=t.location,b("#city-hint").textContent=t.hint,y.az=t.view.az,y.el=t.view.el,y.dist=t.view.dist,y.target.copy(t.view.target),ce=0}document.querySelectorAll(".city-shell nav [data-page]").forEach(e=>e.addEventListener("click",()=>co(e.dataset.page)));W.addEventListener("pointerdown",e=>{ee=!0,re=e,W.setPointerCapture(e.pointerId)});W.addEventListener("pointermove",e=>{ee&&(y.az-=(e.clientX-re.clientX)*.005,y.el=He.clamp(y.el+(e.clientY-re.clientY)*.004,.06,.95),re=e,ce=0)});W.addEventListener("pointerup",()=>{ee=!1});W.addEventListener("wheel",e=>{e.preventDefault(),y.dist=He.clamp(y.dist*(1+e.deltaY*.001),16,50)},{passive:!1});const Be=b("#dragon-alt"),Ne=b("#radar-alt");let Le=0,ve=0,q=0,Q=0;const fo=new bt,mo=b("#city-alt");function Me(){const e=Math.min(fo.getDelta(),.05);if(ve+=e,L!=="panorama"){so({...kt(mo),time:ve,mode:L}),requestAnimationFrame(Me);return}const t=W.clientWidth,o=W.clientHeight;if((t!==q||o!==Q)&&(q=t,Q=o,Y.setSize(q,Q,!1),J.setSize(q,Q),Z.aspect=q/Q,Z.updateProjectionMatrix()),ce+=e,!ee&&ce>2&&(y.az+=e*(L==="airspace"?.02:.04)),se.update(e),L==="airspace"&&!ee){const n=se.headPosition;y.target.lerp(new w(n.x,n.y*.7,n.z),1-Math.exp(-e*2.2))}if(Z.position.set(Math.sin(y.az)*Math.cos(y.el),Math.sin(y.el),Math.cos(y.az)*Math.cos(y.el)).multiplyScalar(y.dist).add(y.target),Z.lookAt(y.target),qe.update(e),Qe.update(e),me.update(e),Ze.update(e,ve),Je.update(e,y.target),et.update(e),tt.update(e),(Le-=e)<0){Le=.25;const n=`${Math.round(se.altitude)} m`;Be&&(Be.textContent=n),Ne&&(Ne.textContent=n)}J.render(e),requestAnimationFrame(Me)}Me();
