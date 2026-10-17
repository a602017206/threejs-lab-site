import{R as Ae,d as W,n as Te,L as j,i as oe,U as Qt,e as fe,V as L,Q as Ye,k as Ee,X as Zt,y as ee,M as te,C as $,Y as Jt,Z as en,_ as ce,$ as ct,b as Ct,W as Et,a0 as Ge,a1 as lt,j as Re,G as Qe,z as tn,a2 as ut,a3 as ne,a4 as nn,a5 as on,f as ke,B as kt,S as Ze,P as an,l as sn,m as Je,a6 as rn,a7 as cn,r as ln,D as dt,H as un,a8 as dn,o as ft,p as fn,K as pe,s as hn,t as pn,u as mn,a9 as gn,aa as vn,ab as wn,h as yn,v as xn,w as Mn,N as bn}from"./three.module-Boxh9JUz.js";import{O as Sn}from"./OrbitControls-3A4OAO9m.js";import{C as Cn,a as En}from"./CSS2DRenderer-BPPJiERP.js";import{E as kn,R as Pn,U as _n,O as Ln}from"./OutputPass-BYQOcqaT.js";const ue={lat:31.2368,lon:121.5},Y=Math.PI/180,Pt=110574,_t=111320*Math.cos(ue.lat*Y);function $e(e,t){return[(t-ue.lon)*_t,-(e-ue.lat)*Pt]}function An(e,t){return{lat:ue.lat-t/Pt,lon:ue.lon+e/_t}}function Tn(e,t,n){let o=!1;for(let a=0,s=n.length-1;a<n.length;s=a++){const[r,l]=n[a],[c,u]=n[s];l>t!=u>t&&e<(c-r)*(t-l)/(u-l)+r&&(o=!o)}return o}function re(e){const t=Math.sin(e*12.9898+78.233)*43758.5453;return t-Math.floor(t)}function He(e,t=ue.lat,n=ue.lon){const o=e/864e5+24405875e-1-2451545,a=(280.46+.9856474*o)%360,s=(357.528+.9856003*o)%360*Y,r=(a+1.915*Math.sin(s)+.02*Math.sin(2*s))*Y,l=(23.439-4e-7*o)*Y,c=Math.atan2(Math.cos(l)*Math.sin(r),Math.cos(r)),u=Math.asin(Math.sin(l)*Math.sin(r)),m=(280.46061837+360.98564736629*o)%360*Y+n*Y-c,g=t*Y,p=Math.asin(Math.sin(g)*Math.sin(u)+Math.cos(g)*Math.cos(u)*Math.cos(m)),d=Math.atan2(-Math.sin(m),Math.tan(u)*Math.cos(g)-Math.sin(g)*Math.cos(m));return{x:Math.cos(p)*Math.sin(d),y:Math.sin(p),z:-Math.cos(p)*Math.cos(d),altitude:p/Y,azimuth:(d/Y+360)%360}}function Rn(e){let t=6,n=18,o=He(e).altitude;for(let a=1;a<=1440;a++){const s=He(e+a*6e4).altitude;o<-.83&&s>=-.83&&(t=a/60),o>=-.83&&s<-.83&&(n=a/60),o=s}return{rise:t,set:n}}const Pe={glassA:{tex:"facade001",tile:28,cells:[8,8],margin:[.05,.07],tint:[.8,.9,1.12],env:1.3,lit:.42},glassB:{tex:"facade005",tile:24.5,cells:[7,7],margin:[.04,.06],tint:[.86,.92,1.06],env:1.15,lit:.4},office:{tex:"facade006",tile:28,cells:[10,8],margin:[.06,.22],tint:[1,1,1],env:.9,lit:.5},brick:{tex:"facade018a",tile:17.5,cells:[5,5],margin:[.2,.18],tint:[1,1,1],env:.5,lit:.55},mixed:{tex:"facade020a",tile:17.5,cells:[6,5],margin:[.16,.2],tint:[1,1,1],env:.6,lit:.5}};function $n(e,t){const n=re(e.id*1.7);return t?"brick":e.h>=120?n<.55?"glassA":"glassB":e.h>=50?n<.4?"office":n<.7?"glassB":"mixed":n<.4?"brick":n<.75?"mixed":"office"}function zn(e){const[t,n]=[e[0],e[1]],o=n[0]-t[0],a=n[1]-t[1],s=Math.hypot(o,a)||1,r=(t[0]+n[0])/2+a/s*.05,l=(t[1]+n[1])/2+-o/s*.05;return Tn(r,l,e)?-1:1}const Ue=e=>{const t=[];for(const n of e){const o=t[t.length-1];(!o||Math.hypot(n[0]-o[0],n[1]-o[1])>.05)&&t.push(n)}if(t.length>1){const n=t[0],o=t[t.length-1];Math.hypot(n[0]-o[0],n[1]-o[1])<.05&&t.pop()}return t};class ht{constructor(){this.pos=[],this.nor=[],this.uv=[],this.col=[],this.seed=[],this.bid=[],this.idx=[]}vert(t,n,o,a,s,r,l,c,u,h,m){return this.pos.push(t,n,o),this.nor.push(a,s,r),this.uv.push(l,c),this.col.push(u[0],u[1],u[2]),this.seed.push(h),this.bid.push(m),this.pos.length/3-1}build(){const t=new Te;return t.setAttribute("position",new j(this.pos,3)),t.setAttribute("normal",new j(this.nor,3)),t.setAttribute("uv",new j(this.uv,2)),t.setAttribute("color",new j(this.col,3)),t.setAttribute("aSeed",new j(this.seed,1)),t.setAttribute("aBid",new j(this.bid,1)),t.setIndex(this.idx),t.computeBoundingSphere(),t}}function pt(e,t,n,o,a,s,r,l=!1){const c=zn(t)*(l?-1:1);let u=0;for(let h=0;h<t.length;h++){const m=t[h],g=t[(h+1)%t.length],p=g[0]-m[0],d=g[1]-m[1],i=Math.hypot(p,d);if(i<.05)continue;const w=c*d/i,f=-c*p/i,v=e.vert(m[0],n,m[1],w,0,f,u,n,a,s,r),C=e.vert(g[0],n,g[1],w,0,f,u+i,n,a,s,r),x=e.vert(g[0],o,g[1],w,0,f,u+i,o,a,s,r),M=e.vert(m[0],o,m[1],w,0,f,u,o,a,s,r);c>0?e.idx.push(v,x,C,v,M,x):e.idx.push(v,C,x,v,x,M),u+=i}}function Dn(e,t,n,o,a,s,r){const l=t.map(g=>new oe(g[0],g[1])),c=(n??[]).map(g=>Ue(g).map(p=>new oe(p[0],p[1]))).filter(g=>g.length>2);let u;try{u=Qt.triangulateShape(l,c)}catch{return}const h=l.concat(...c),m=h.map(g=>e.vert(g.x,o,g.y,0,1,0,g.x,g.y,a,s,r));for(const[g,p,d]of u){const i=h[g],w=h[p],f=h[d];(w.x-i.x)*(f.y-i.y)-(w.y-i.y)*(f.x-i.x)<0?e.idx.push(m[g],m[p],m[d]):e.idx.push(m[g],m[d],m[p])}}function In(e,t){const n=Object.fromEntries(Object.keys(Pe).map(s=>[s,new ht])),o=new ht,a=[];return e.forEach((s,r)=>{const l=Ue(s.o);if(l.length<3)return;const c=l.reduce((f,v)=>[f[0]+v[0]/l.length,f[1]+v[1]/l.length],[0,0]),u=t(c[0],c[1]),h=$n(s,u),m=re(s.id),g=Pe[h].tint,p=.88+m*.22,d=u?[1.05*p,.92*p,.78*p]:[g[0]*p,g[1]*p,g[2]*p],i=s.mh??0;pt(n[h],l,i,s.h,d,m,r);for(const f of s.hl??[]){const v=Ue(f);v.length>2&&pt(n[h],v,i,s.h,d,m,r,!0)}const w=.75+m*.25;Dn(o,l,s.hl,s.h,[w,w,w*.98],m,r),a.push({index:r,b:s,c,facade:h,bund:u})}),{walls:Object.fromEntries(Object.entries(n).map(([s,r])=>[s,r.build()])),roof:o.build(),meta:a}}const Bn=`
  uniform float uNight, uTime, uHighlight, uLit;
  uniform vec2 uCell, uMargin;
  varying vec2 vCityUv;
  varying float vSeed, vBid, vUp;
  float c3hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
`;function et(e,{cell:t=[3.5,3.5],margin:n=[.1,.15],lit:o=.45,windows:a=!0}={}){const s={uNight:{value:0},uTime:{value:0},uHighlight:{value:-1},uLit:{value:o},uCell:{value:new oe(...t)},uMargin:{value:new oe(...n)}};return e.userData.uniforms=s,e.onBeforeCompile=r=>{Object.assign(r.uniforms,s),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
        attribute float aSeed;
        attribute float aBid;
        varying vec2 vCityUv;
        varying float vSeed, vBid, vUp;`).replace("#include <uv_vertex>",`#include <uv_vertex>
        vCityUv = uv; vSeed = aSeed; vBid = aBid; vUp = normal.y;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${Bn}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        ${a?`
        if (vUp < 0.5) {
          vec2 g = vCityUv / uCell;
          vec2 cellId = floor(g);
          vec2 f = fract(g);
          vec2 fw = max(fwidth(g), vec2(1e-4));
          vec2 wm = smoothstep(uMargin - fw, uMargin + fw, f) * (1.0 - smoothstep(1.0 - uMargin - fw, 1.0 - uMargin + fw, f));
          float win = wm.x * wm.y;
          float h = c3hash(cellId + vSeed * 91.7);
          float busy = uLit * (0.3 + 1.0 * fract(vSeed * 13.17));
          float floorLit = step(0.9, c3hash(vec2(cellId.y, vSeed * 17.0))) * step(0.3, h);
          float lit = max(step(1.0 - busy, h), floorLit);
          lit = max(lit, step(cellId.y, 0.5) * step(0.3, h));
          float cool = step(0.62, c3hash(cellId.yx + vSeed * 3.1));
          vec3 lc = mix(vec3(1.0, 0.7, 0.38), vec3(0.75, 0.88, 1.0), cool);
          float bright = 0.45 + 0.8 * c3hash(cellId * 1.37 + 4.1);
          vec3 near = lc * lit * win * bright;
          // 窗格小于像素时改用统计平均，避免远景闪烁噪点
          float block = c3hash(floor(g / vec2(3.0, 2.0)) + vSeed * 7.3);
          vec3 far = vec3(0.92, 0.76, 0.52) * (busy + 0.05) * (1.0 - 2.0 * uMargin.x) * (1.0 - 2.0 * uMargin.y) * (0.15 + 1.5 * block * block) * 0.6;
          float detail = 1.0 - smoothstep(0.3, 0.8, max(fw.x, fw.y));
          totalEmissiveRadiance += mix(far, near, detail) * uNight * 1.15;
        }`:""}
        if (abs(vBid - uHighlight) < 0.5) totalEmissiveRadiance += vec3(0.25, 0.55, 1.0) * 0.2;`)},e.customProgramCacheKey=()=>`city3-${a}`,s}function Fn(e,t){const n=Pe[t],o=1/n.tile,a=["color","normal","rough","metal"].map(r=>{const l=e(`${n.tex}_${r}`,r==="color").clone();return l.repeat.set(o,o),l.wrapS=l.wrapT=Ae,l.needsUpdate=!0,l}),s=new W({map:a[0],normalMap:a[1],roughnessMap:a[2],metalnessMap:a[3],vertexColors:!0,roughness:1,metalness:1,envMapIntensity:n.env});return s.normalScale.set(.8,.8),et(s,{cell:[n.tile/n.cells[0],n.tile/n.cells[1]],margin:n.margin,lit:n.lit}),s}function On(e){const t=["color","normal","rough"].map(o=>{const a=e(`asphalt033_${o}`,o==="color").clone();return a.repeat.set(.1111111111111111,.1111111111111111),a.wrapS=a.wrapT=Ae,a.needsUpdate=!0,a}),n=new W({map:t[0],normalMap:t[1],roughnessMap:t[2],vertexColors:!0,color:13223616,roughness:1,metalness:0,envMapIntensity:.4});return et(n,{windows:!1}),n}const Nn={shanghaiTower:{name:"上海中心大厦",en:"Shanghai Tower",height:632,floors:"地上 127 层",year:"2015",desc:"中国第一、世界第三高楼。外幕墙自下而上旋转约 120° 并逐渐收分，可减少约 24% 的风荷载；顶部 546 米处设有世界最高的观光厅之一。"},swfc:{name:"上海环球金融中心",en:"Shanghai World Financial Center",height:492,floors:"地上 101 层",year:"2008",desc:"方形塔身被两道弧面逐渐切削，到顶部收为一条线；顶端的倒梯形风洞用于释放风压，因外形被称作“开瓶器”。"},jinmao:{name:"金茂大厦",en:"Jin Mao Tower",height:420.5,floors:"地上 88 层",year:"1999",desc:"以中国古塔为原型，塔身分为 13 段、每段逐级收进，数字“8”贯穿设计；内部酒店中庭高达 152 米。"},pearl:{name:"东方明珠广播电视塔",en:"Oriental Pearl Tower",height:468,floors:"—",year:"1994",desc:"由三根直径 9 米的擎天立柱与 11 个大小不一的球体组成，取意“大珠小珠落玉盘”，是上海最具代表性的城市地标。"}};function le(e,{cap:t=!0,bid:n,seed:o=.5}={}){const a=e[0].pts.length,s=[],r=[],l=[];e.forEach((i,w)=>{let f=0;for(let v=0;v<=a;v++){const C=i.pts[v%a];if(v>0){const x=i.pts[v-1];f+=Math.hypot(C[0]-x[0],C[1]-x[1])}s.push(C[0],i.y,C[1]),r.push(f,i.y)}if(w>0){const v=(w-1)*(a+1),C=w*(a+1);for(let x=0;x<a;x++)l.push(v+x,C+x,v+x+1,v+x+1,C+x,C+x+1)}});const c=e[0].pts,u=c[1][0]-c[0][0],h=c[1][1]-c[0][1],m=c.reduce((i,w)=>i+w[0],0)/a,g=c.reduce((i,w)=>i+w[1],0)/a;if(!(h*(c[0][0]-m)-u*(c[0][1]-g)>0))for(let i=0;i<l.length;i+=3)[l[i+1],l[i+2]]=[l[i+2],l[i+1]];if(t){const i=e[e.length-1],w=i.pts.reduce((x,M)=>x+M[0],0)/a,f=i.pts.reduce((x,M)=>x+M[1],0)/a,v=s.length/3;s.push(w,i.y,f),r.push(0,0);const C=(e.length-1)*(a+1);for(let x=0;x<a;x++){const M=i.pts[x],P=i.pts[(x+1)%a];(M[0]-w)*(P[1]-f)-(M[1]-f)*(P[0]-w)<0?l.push(v,C+x,C+x+1):l.push(v,C+x+1,C+x)}}const d=new Te;return d.setAttribute("position",new j(s,3)),d.setAttribute("uv",new j(r,2)),d.setIndex(l),d.computeVertexNormals(),ze(d,n,o)}function ze(e,t,n){const o=e.attributes.position.count;return e.setAttribute("color",new j(new Float32Array(o*3).fill(1),3)),e.setAttribute("aSeed",new j(new Float32Array(o).fill(n),1)),e.setAttribute("aBid",new j(new Float32Array(o).fill(t),1)),e}const _e=(e,t)=>[e[0]*Math.cos(t)-e[1]*Math.sin(t),e[0]*Math.sin(t)+e[1]*Math.cos(t)];function tt(e,t){let n=0,o=0;for(let s=0;s<e.length-1;s++){const r=e[s+1][0]-e[s][0],l=e[s+1][1]-e[s][1],c=Math.hypot(r,l);c>n&&(n=c,o=Math.atan2(l,r))}const a=Math.max(...e.map(s=>Math.hypot(s[0]-t[0],s[1]-t[1])));return{ang:o,radius:a}}function jn(e,t){const{radius:n}=tt(e.o,e.c),o=n*.9,a=96,s=585,r=(u,h=1)=>{const m=o*(1-.47*Math.pow(u,1.15))*h,g=-u*(2*Math.PI/3);return Array.from({length:a},(p,d)=>{const i=d/a*Math.PI*2;let w=m*(.9+.1*Math.cos(3*i));const f=Math.atan2(Math.sin(i-.15),Math.cos(i-.15));w*=1-.1*Math.exp(-((f/.09)**2));const v=_e([Math.cos(i)*w,Math.sin(i)*w],g);return[e.c[0]+v[0],e.c[1]+v[1]]})},l=[];for(let u=0;u<=80;u++){const h=u/80;l.push({y:h*s,pts:r(h*s/632)})}const c=[];for(let u=0;u<=12;u++){const h=570+u/12*62;c.push({y:h,pts:r(h/632,1.06-.12*(u/12))})}return[{geo:le(l,{bid:t,seed:.31}),mat:"glassA"},{geo:le(c,{cap:!1,bid:t,seed:.31}),mat:"glassA",double:!0}]}function Wn(e,t){const{ang:n,radius:o}=tt(e.o,e.c),a=o*.68,s=492,r=d=>{const i=2*a*Math.max(.1,1-.92*d);return[[-a,-a],[i-a,-a],[a,a-i],[a,a],[a-i,a],[-a,i-a]].map(f=>{const v=_e(f,n);return[e.c[0]+v[0],e.c[1]+v[1]]})},l=[],c=s*.885,u=s*.972;for(let d=0;d<=40;d++){const i=d/40*c;l.push({y:i,pts:r(i/s)})}const h=[{y:u,pts:r(u/s)},{y:s,pts:r(1)}],m=[{geo:le(l,{bid:t,seed:.62}),mat:"glassB"},{geo:le(h,{bid:t,seed:.62}),mat:"glassB"}],g=Math.SQRT2*a,p=2*a*(1-.92*(c/s))/Math.SQRT2;for(const d of[-1,1]){const i=g*.34,w=new ee(i,u-c,p).toNonIndexed(),f=d*(g-i/2),v=_e([1,1],n).map(C=>C/Math.SQRT2);w.rotateY(-(n+Math.PI/4)),w.translate(e.c[0]+v[0]*f,(c+u)/2,e.c[1]+v[1]*f),m.push({geo:ze(w,t,.62),mat:"glassB"})}return m}function Gn(e,t){const{ang:n,radius:o}=tt(e.o,e.c),a=o*.62,s=(p,d)=>{const i=p*.32,w=[[-p+i,-p],[p-i,-p],[p,-p+i],[p,p-i],[p-i,p],[-p+i,p],[-p,p-i],[-p,-p+i]];return{y:d,pts:w.map(f=>{const v=_e(f,n);return[e.c[0]+v[0],e.c[1]+v[1]]})}},r=[],l=13;let c=0;const u=Array.from({length:l},(p,d)=>Math.pow(.86,d)),h=u.reduce((p,d)=>p+d,0);for(let p=0;p<l;p++){const d=u[p]/h*330,i=a*(1-p*.052);r.push({geo:le([s(i,c),s(i*.975,c+d)],{bid:t,seed:.77}),mat:"office"}),r.push({geo:le([s(i*1.05,c+d-1.2),s(i*1.05,c+d)],{bid:t,seed:.77}),mat:"roof"}),c+=d}const m=[s(a*.34,c),s(a*.3,c+18),s(a*.2,c+34),s(a*.12,c+44)];r.push({geo:le(m,{bid:t,seed:.77}),mat:"office"});const g=new Zt(2.2,420.5-(c+44),12,1).toNonIndexed();return g.translate(e.c[0],c+44+(420.5-(c+44))/2,e.c[1]),r.push({geo:ze(g,t,.77),mat:"metal"}),r}function Hn(e,t){const n=[],[o,a]=e.c,s=(h,m)=>n.push({geo:ze(h.index?h.toNonIndexed():h,t,.13),mat:m});for(let h=0;h<3;h++){const m=h/3*Math.PI*2+.3,g=new fe(4.5,4.8,290,20);g.translate(o+Math.cos(m)*11,145,a+Math.sin(m)*11),s(g,"concrete");const p=new L(o+Math.cos(m)*11,92,a+Math.sin(m)*11),d=new L(o+Math.cos(m+Math.PI/3)*52,0,a+Math.sin(m+Math.PI/3)*52),i=p.distanceTo(d),w=new fe(3.2,3.6,i,16);w.translate(0,i/2,0);const f=new Ye().setFromUnitVectors(new L(0,1,0),p.clone().sub(d).normalize());w.applyQuaternion(f),w.translate(d.x,d.y,d.z),s(w,"concrete")}const r=(h,m,g=28)=>{const p=new Ee(h,g,Math.round(g*.66));return p.translate(o,m,a),p};s(r(25,93),"pearl"),s(r(22.5,263),"pearl"),s(r(7.5,342,20),"pearl"),[128,158,188,218].forEach(h=>s(r(5.4,h,16),"pearl"));for(let h=0;h<3;h++){const m=h/3*Math.PI*2+.3+Math.PI/3,g=new Ee(5,16,10);g.translate(o+Math.cos(m)*44,14,a+Math.sin(m)*44),s(g,"pearl")}const l=new fe(4.2,5,60,16);l.translate(o,315,a),s(l,"concrete");const c=new fe(9,9,6,24);c.translate(o,290,a),s(c,"concrete");const u=new fe(.6,2.8,118,12);return u.translate(o,409,a),s(u,"metal"),n}const Un={shanghaiTower:jn,swfc:Wn,jinmao:Gn,pearl:Hn};function Vn(e,t){return e.map((n,o)=>{const a=t+o;return{l:n,bid:a,info:Nn[n.k],parts:Un[n.k](n,a)}})}function qn(e){const t=new W({color:12729720,metalness:.65,roughness:.22,flatShading:!0,emissive:16723338,emissiveIntensity:0,envMapIntensity:1.5}),n=new W({color:14736338,roughness:.55,metalness:.1,emissive:11061503,emissiveIntensity:0}),o=new W({color:14278115,roughness:.3,metalness:.9,emissive:16777215,emissiveIntensity:0});for(const a of[t,n,o])e(a,{windows:!1});return{pearl:t,concrete:n,metal:o}}class Xn extends te{constructor(t,n={}){super(t),this.isWater=!0;const o=this,a=n.textureWidth!==void 0?n.textureWidth:512,s=n.textureHeight!==void 0?n.textureHeight:512,r=n.clipBias!==void 0?n.clipBias:0,l=n.alpha!==void 0?n.alpha:1,c=n.time!==void 0?n.time:0,u=n.waterNormals!==void 0?n.waterNormals:null,h=n.sunDirection!==void 0?n.sunDirection:new L(.70707,.70707,0),m=new $(n.sunColor!==void 0?n.sunColor:16777215),g=new $(n.waterColor!==void 0?n.waterColor:8355711),p=n.eye!==void 0?n.eye:new L(0,0,0),d=n.distortionScale!==void 0?n.distortionScale:20,i=n.side!==void 0?n.side:Jt,w=n.fog!==void 0?n.fog:!1,f=new en,v=new L,C=new L,x=new L,M=new ce,P=new L(0,0,-1),_=new ct,b=new L,E=new L,S=new ct,y=new ce,k=new Ct,D=new Et(a,s),V={name:"MirrorShader",uniforms:Ge.merge([lt.fog,lt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ce},sunColor:{value:new $(8355711)},sunDirection:{value:new L(.70707,.70707,0)},eye:{value:new L},waterColor:{value:new $(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},R=new Re({name:V.name,uniforms:Ge.clone(V.uniforms),vertexShader:V.vertexShader,fragmentShader:V.fragmentShader,lights:!0,side:i,fog:w});R.uniforms.mirrorSampler.value=D.texture,R.uniforms.textureMatrix.value=y,R.uniforms.alpha.value=l,R.uniforms.time.value=c,R.uniforms.normalSampler.value=u,R.uniforms.sunColor.value=m,R.uniforms.waterColor.value=g,R.uniforms.sunDirection.value=h,R.uniforms.distortionScale.value=d,R.uniforms.eye.value=p,o.material=R,o.onBeforeRender=function(A,Z,q){if(C.setFromMatrixPosition(o.matrixWorld),x.setFromMatrixPosition(q.matrixWorld),M.extractRotation(o.matrixWorld),v.set(0,0,1),v.applyMatrix4(M),b.subVectors(C,x),b.dot(v)>0)return;b.reflect(v).negate(),b.add(C),M.extractRotation(q.matrixWorld),P.set(0,0,-1),P.applyMatrix4(M),P.add(x),E.subVectors(C,P),E.reflect(v).negate(),E.add(C),k.position.copy(b),k.up.set(0,1,0),k.up.applyMatrix4(M),k.up.reflect(v),k.lookAt(E),k.far=q.far,k.updateMatrixWorld(),k.projectionMatrix.copy(q.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(k.projectionMatrix),y.multiply(k.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(v,C),f.applyMatrix4(k.matrixWorldInverse),_.set(f.normal.x,f.normal.y,f.normal.z,f.constant);const N=k.projectionMatrix;S.x=(Math.sign(_.x)+N.elements[8])/N.elements[0],S.y=(Math.sign(_.y)+N.elements[9])/N.elements[5],S.z=-1,S.w=(1+N.elements[10])/N.elements[14],_.multiplyScalar(2/_.dot(S)),N.elements[2]=_.x,N.elements[6]=_.y,N.elements[10]=_.z+1-r,N.elements[14]=_.w,p.setFromMatrixPosition(q.matrixWorld);const be=A.getRenderTarget(),Kt=A.xr.enabled,Yt=A.shadowMap.autoUpdate;o.visible=!1,A.xr.enabled=!1,A.shadowMap.autoUpdate=!1,A.setRenderTarget(D),A.state.buffers.depth.setMask(!0),A.autoClear===!1&&A.clear(),A.render(Z,k),o.visible=!0,A.xr.enabled=Kt,A.shadowMap.autoUpdate=Yt,A.setRenderTarget(be);const it=q.viewport;it!==void 0&&A.state.viewport(it)}}}const Kn=new Set(["motorway","trunk","primary","secondary","tertiary","motorway_link","trunk_link","primary_link","secondary_link","unclassified","residential"]),Yn=new Set(["footway","pedestrian"]);function Lt(e){if(!e.br)return 0;const t=e.p.reduce((o,a,s)=>s?o+Math.hypot(a[0]-e.p[s-1][0],a[1]-e.p[s-1][1]):0,0);return["motorway","trunk","primary","motorway_link","trunk_link"].includes(e.k)&&t>120?8*Math.max(1,e.ly||1):1.2}const Fe=(e,t)=>{const n=t[0]-e[0],o=t[1]-e[1],a=Math.hypot(n,o)||1;return[n/a,o/a]};function Oe(e,t,n,o,a){const s=e.length;if(s<2)return;const r=t/2;let l=0;const c=o.pos.length/3;for(let u=0;u<s;u++){const h=e[u],m=e[Math.max(0,u-1)],g=e[Math.min(s-1,u+1)],p=u>0?Fe(m,h):Fe(h,g),d=u<s-1?Fe(h,g):p,i=[-p[1],p[0]],w=[-d[1],d[0]];let f=i[0]+w[0],v=i[1]+w[1];const C=Math.hypot(f,v)||1;f/=C,v/=C;const x=Math.max(.35,f*i[0]+v*i[1]),M=r/x;u>0&&(l+=Math.hypot(h[0]-m[0],h[1]-m[1]));const P=typeof n=="function"?n(u):n;o.pos.push(h[0]+f*M,P,h[1]+v*M,h[0]-f*M,P,h[1]-v*M);const _=Math.max(1,Math.round(t/7));if(o.uv.push(0,l/a,_,l/a),o.nor.push(0,1,0,0,1,0),u>0){const b=c+(u-1)*2;o.idx.push(b,b+2,b+1,b+1,b+2,b+3)}}}function mt(e){const t=new Te;return t.setAttribute("position",new j(e.pos,3)),t.setAttribute("normal",new j(e.nor,3)),t.setAttribute("uv",new j(e.uv,2)),t.setIndex(e.idx),t}function gt(e){return e.map(t=>{const n=new nn(t.o.map(([o,a])=>new oe(o,-a)));for(const o of t.hl??[])n.holes.push(new on(o.map(([a,s])=>new oe(a,-s))));return n})}function Ne(e,t,n,o=["color","normal","rough"]){return o.map(a=>{const s=e(`${t}_${a}`,a==="color").clone();return s.wrapS=s.wrapT=Ae,s.repeat.set(n[0],n[1]),s.needsUpdate=!0,s})}function Qn({data:e,tex:t,scene:n,sunDir:o}){const a=new Qe,[s,r,l]=Ne(t,"asphalt033",[900,900]),c=new te(new tn(14e3,14e3).rotateX(-Math.PI/2),new W({map:s,normalMap:r,roughnessMap:l,color:10131600,roughness:1,envMapIntensity:.35}));c.receiveShadow=!0,a.add(c);const u=new ut(gt(e.green));u.rotateX(-Math.PI/2),u.translate(0,.12,0);const h=u.attributes.uv;for(let y=0;y<h.count;y++)h.setXY(y,h.getX(y)/6,h.getY(y)/6);const[m,g,p]=Ne(t,"grass004",[1,1]),d=new te(u,new W({map:m,normalMap:g,roughnessMap:p,color:12175778,roughness:1,envMapIntensity:.3}));d.receiveShadow=!0,a.add(d);const i=t("waternormals",!1);i.wrapS=i.wrapT=Ae;const w=new ut(gt(e.water)),f=new Xn(w,{textureWidth:1024,textureHeight:1024,waterNormals:i,sunDirection:o.clone(),sunColor:16777215,waterColor:1714728,distortionScale:5,fog:!0});f.material.fragmentShader=f.material.fragmentShader.replace("( 0.001 + 1.0 / distance )","( 0.004 + 1.0 / distance )").replace("vec3( 0.1 ) + reflectionSample * 0.9","vec3( 0.04 ) + reflectionSample * 0.6"),f.rotation.x=-Math.PI/2,f.position.y=.2,f.material.uniforms.size.value=3.5,a.add(f);const v={pos:[],nor:[],uv:[],idx:[]},C={pos:[],nor:[],uv:[],idx:[]},x=[],M=[...e.roads].sort((y,k)=>y.w-k.w);for(const y of M){if(y.k==="service"&&y.w<5){Oe(y.p,y.w,.28,C,12);continue}const k=Lt(y);if(Yn.has(y.k)){Oe(y.p,y.w,.26,C,12);continue}if(!Kn.has(y.k)&&y.k!=="service")continue;const D=.34+k+(y.w>15?.04:0);if(Oe(y.p,y.w,D,v,14),k>4){let V=0;for(let R=1;R<y.p.length;R++){const A=y.p[R-1],Z=y.p[R],q=Math.hypot(Z[0]-A[0],Z[1]-A[1]);for(let N=(35-V)%35;N<q;N+=35){const be=N/q;x.push([A[0]+(Z[0]-A[0])*be,A[1]+(Z[1]-A[1])*be,k])}V=(V+q)%35}}}const[P,_,b]=Ne(t,"road007",[1,1]),E=new te(mt(v),new W({map:P,normalMap:_,roughnessMap:b,color:14211288,roughness:1,envMapIntensity:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));E.receiveShadow=!0,a.add(E);const S=new te(mt(C),new W({map:s,normalMap:r,color:13616820,roughness:.95,envMapIntensity:.3,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));if(S.receiveShadow=!0,a.add(S),x.length){const y=new ee(2.2,1,2.2).translate(0,.5,0),k=new ne(y,new W({color:12104876,roughness:.8}),x.length),D=new ce;x.forEach(([V,R,A],Z)=>{D.makeScale(1,A,1).setPosition(V,0,R),k.setMatrixAt(Z,D)}),k.castShadow=k.receiveShadow=!0,a.add(k)}return n.add(a),{group:a,water:f,ground:c}}const Zn=new Set(["motorway","trunk","primary","secondary","tertiary","motorway_link","trunk_link","primary_link","secondary_link"]),Jn=new Set(["trunk","primary","secondary","tertiary"]),vt=[15921906,1776670,12172481,7040885,2373210,9313308,3126696,14267466,15921906,1776670,12172481];function wt(e,t,n){const o=[];for(let s=0;s<e.length;s++){const r=e[s],l=e[Math.max(0,s-1)],c=e[Math.min(e.length-1,s+1)],u=c[0]-l[0],h=c[1]-l[1],m=Math.hypot(u,h)||1;o.push([r[0]+-h/m*t,r[1]+u/m*t])}const a=[0];for(let s=1;s<o.length;s++)a.push(a[s-1]+Math.hypot(o[s][0]-o[s-1][0],o[s][1]-o[s-1][1]));return{pts:o,cum:a,len:a[a.length-1],y:n}}function eo(e){const t=[];for(const n of e){if(!Zn.has(n.k)||n.p.length<2)continue;const o=.34+Lt(n)+.75,a=Math.max(1.8,n.w/4),s=wt(n.p,a,o);s.len<25||(t.push(s),n.ow||t.push(wt([...n.p].reverse(),a,o)))}return t}function to(e,t,n=1400){const o=eo(t),a=o.reduce((M,P)=>M+P.len,0),s=M=>{let P=M*a;for(let _=0;_<o.length;_++)if(P-=o[_].len,P<=0)return _;return o.length-1},r=new ne(new ee(4.4,1.45,1.85),new W({roughness:.35,metalness:.6,envMapIntensity:1}),n),l=new ne(new ee(2.3,.6,1.6).translate(-.3,1,0),new W({color:1119256,roughness:.1,metalness:.9}),n),c=new ke({color:new $(0,0,0)}),u=new ke({color:new $(0,0,0)});c.toneMapped=u.toneMapped=!1;const h=new ne(new ee(.15,.3,1.5).translate(2.23,.05,0),c,n),m=new ne(new ee(.15,.25,1.6).translate(-2.23,.15,0),u,n);for(const M of[l,h,m])M.instanceMatrix=r.instanceMatrix;r.castShadow=!0,r.frustumCulled=l.frustumCulled=h.frustumCulled=m.frustumCulled=!1;const g=[],p=new $;for(let M=0;M<n;M++){const P=s(re(M+.5));g.push({lane:P,s:re(M*3.1)*o[P].len,seg:0,v:9+re(M*7.7)*8}),r.setColorAt(M,p.setHex(vt[Math.floor(re(M*5.3)*vt.length)]))}const d=new Qe;d.add(r,l,h,m),e.add(d);const i=new ce,w=new Ye,f=new L(0,1,0),v=new L,C=new L(1,1,1);function x(M,P){if(d.visible){for(let _=0;_<g.length;_++){const b=g[_];let E=o[b.lane];for(b.s+=b.v*M,b.s>=E.len&&(b.lane=s(re(_*1.37+b.s*.01+performance.now()*1e-7)),E=o[b.lane],b.s=0,b.seg=0);b.seg<E.cum.length-2&&E.cum[b.seg+1]<b.s;)b.seg++;const S=E.pts[b.seg],y=E.pts[b.seg+1],k=E.cum[b.seg+1]-E.cum[b.seg]||1,D=(b.s-E.cum[b.seg])/k;v.set(S[0]+(y[0]-S[0])*D,E.y,S[1]+(y[1]-S[1])*D),w.setFromAxisAngle(f,Math.atan2(-(y[1]-S[1]),y[0]-S[0])),i.compose(v,w,C),r.setMatrixAt(_,i)}r.instanceMatrix.needsUpdate=!0,c.color.setRGB(3.2,3,2.6).multiplyScalar(P),u.color.setRGB(2.6,.08,.05).multiplyScalar(.25+P)}}return{group:d,update:x,lanes:o}}function no(e,t,n=5e3){const o=[];for(const d of t){if(!Jn.has(d.k)||d.br)continue;const i=d.w/2+1.2;let w=0;for(let f=1;f<d.p.length&&o.length<n;f++){const v=d.p[f-1],C=d.p[f],x=C[0]-v[0],M=C[1]-v[1],P=Math.hypot(x,M);if(P<1)continue;const _=-M/P,b=x/P;for(let E=(34-w)%34;E<P;E+=34){const S=E/P,y=v[0]+x*S,k=v[1]+M*S;o.push([y+_*i,k+b*i,-_,-b],[y-_*i,k-b*i,_,b])}w=(w+P)%34}}const a=o.length,s=new ne(new fe(.1,.14,9,6).translate(0,4.5,0),new W({color:5988456,metalness:.7,roughness:.4}),a),r=new ke({color:new $(0,0,0)});r.toneMapped=!1;const l=new ne(new ee(1.4,.22,.5).translate(.7,9,0),r,a),c=new ce,u=new Ye,h=new L(0,1,0),m=new L,g=new L(1,1,1);o.forEach(([d,i,w,f],v)=>{u.setFromAxisAngle(h,Math.atan2(-f,w)),c.compose(m.set(d,.3,i),u,g),s.setMatrixAt(v,c),l.setMatrixAt(v,c)}),s.castShadow=!0;const p=new Qe;return p.add(s,l),e.add(p),{group:p,update(d){r.color.setRGB(4,2.7,1.3).multiplyScalar(d)}}}function oo(e,t){const n=new ke({color:new $(0,0,0)});n.toneMapped=!1;const o=new ne(new Ee(.9,8,6),n,t.length),a=new ce;return t.forEach(([s,r,l],c)=>{a.makeTranslation(s,r+1,l),o.setMatrixAt(c,a)}),e.add(o),{mesh:o,update(s,r){const l=Math.pow(Math.max(0,Math.sin(s*2.4)),6);n.color.setRGB(6,.25,.15).multiplyScalar((.15+.85*l)*(.25+r))}}}class ge extends te{constructor(){const t=ge.SkyShader,n=new Re({name:t.name,uniforms:Ge.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:kt,depthWrite:!1});super(new ee(1,1,1),n),this.isSky=!0}}ge.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},up:{value:new L(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const se=(e,t,n)=>{const o=pe.clamp((n-e)/(t-e),0,1);return o*o*(3-2*o)},J=[[-18,new $("#0b0f1a")],[-6,new $("#2a3350")],[-1,new $("#7a6f86")],[3,new $("#e0a985")],[12,new $("#c9cdd2")],[35,new $("#b9cadb")]];function ao(e,t){if(e<=J[0][0])return t.copy(J[0][1]);for(let n=1;n<J.length;n++)if(e<=J[n][0]){const[o,a]=J[n-1],[s,r]=J[n];return t.copy(a).lerp(r,(e-o)/(s-o))}return t.copy(J[J.length-1][1])}function so(){const e=new Ze,t=new Re({side:kt,vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; void main(){
      float h = normalize(vP).y;
      vec3 top = vec3(0.012, 0.018, 0.045);
      vec3 glow = vec3(0.16, 0.085, 0.045);
      vec3 ground = vec3(0.05, 0.035, 0.03);
      vec3 c = h > 0.0 ? mix(glow, top, pow(h, 0.45)) : mix(glow, ground, pow(-h, 0.5));
      gl_FragColor = vec4(c, 1.0);
    }`});return e.add(new te(new Ee(10,32,16),t)),e}function ro(){const t=new Float32Array(12e3),n=new Float32Array(4e3);let o=3;const a=()=>(o=o*16807%2147483647)/2147483647;for(let c=0;c<4e3;c++){const u=a(),h=a()*Math.PI*2,m=.03+u*.97,g=Math.sqrt(1-m*m);t.set([Math.cos(h)*g*18e3,m*18e3,Math.sin(h)*g*18e3],c*3),n[c]=.6+Math.pow(a(),5)*2.4}const s=new Te;s.setAttribute("position",new ft(t,3)),s.setAttribute("size",new ft(n,1));const r=new Re({uniforms:{opacity:{value:0},pr:{value:Math.min(devicePixelRatio,2)}},transparent:!0,depthWrite:!1,vertexShader:`#include <common>
      #include <logdepthbuf_pars_vertex>
      attribute float size; uniform float pr;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * pr;
      #include <logdepthbuf_vertex>
      }`,fragmentShader:`#include <common>
      #include <logdepthbuf_pars_fragment>
      uniform float opacity;
      void main(){
      #include <logdepthbuf_fragment>
      float d = length(gl_PointCoord - 0.5); gl_FragColor = vec4(vec3(1.0, 0.97, 0.92), smoothstep(0.5, 0.0, d) * opacity); }`}),l=new fn(s,r);return l.frustumCulled=!1,l}function io({renderer:e,scene:t}){const n=new ge;n.scale.setScalar(3e4);const o=n.material.uniforms;o.turbidity.value=5.5,o.rayleigh.value=1.4,o.mieCoefficient.value=.004,o.mieDirectionalG.value=.82,t.add(n);const a=new Ze,s=new ge;s.scale.setScalar(1e3),a.add(s);const r=new an(e),l=r.fromScene(so(),0,.1,100);let c=null,u=999,h=999;const m=ro();t.add(m);const g=(()=>{const E=document.createElement("canvas");E.width=E.height=128;const S=E.getContext("2d"),y=S.createRadialGradient(64,64,0,64,64,64);y.addColorStop(0,"rgba(255,250,235,1)"),y.addColorStop(.18,"rgba(240,238,225,1)"),y.addColorStop(.22,"rgba(200,210,240,0.35)"),y.addColorStop(1,"rgba(0,0,0,0)"),S.fillStyle=y,S.fillRect(0,0,128,128);const k=new sn(E);return k.colorSpace=Je,k})(),p=new rn(new cn({map:g,transparent:!0,depthWrite:!1,blending:ln}));p.material.toneMapped=!1,p.scale.setScalar(1400),t.add(p);const d=new dt(16777215,3);d.castShadow=!0,d.shadow.mapSize.set(4096,4096),d.shadow.bias=-4e-4,d.shadow.normalBias=.6,d.shadow.camera.near=10,d.shadow.camera.far=9e3,t.add(d,d.target);const i=new dt(10466559,0);i.position.set(-2e3,3e3,1500),t.add(i);const w=new un(12571903,4866102,.5);t.add(w),t.fog=new dn(12176091,18e-5);const f={dir:new L,altitude:0,azimuth:0,night:0,fogBase:18e-5},v=new $,C=new $(1,.56,.3),x=new $(1,.97,.92);function M(){if(f.altitude<-5){t.environment=l.texture;return}if(Math.abs(f.altitude-u)<.6&&Math.abs(f.azimuth-h)<3)return;u=f.altitude,h=f.azimuth,s.material.uniforms.sunPosition.value.copy(f.dir);for(const S of["turbidity","rayleigh","mieCoefficient","mieDirectionalG"])s.material.uniforms[S].value=o[S].value;const E=r.fromScene(a,0,.1,2e3);c?.dispose(),c=E,t.environment=E.texture}function P(E){const S=He(E);f.dir.set(S.x,S.y,S.z).normalize(),f.altitude=S.altitude,f.azimuth=S.azimuth,f.night=se(3,-7,S.altitude),o.sunPosition.value.copy(f.dir),o.rayleigh.value=1.2+1.6*se(25,0,S.altitude),o.turbidity.value=4.5+4*se(20,0,S.altitude);const y=se(-3,8,S.altitude);d.intensity=3.4*y,d.color.copy(C).lerp(x,se(2,35,S.altitude)),d.castShadow=y>.02,w.intensity=.08+.55*se(-10,20,S.altitude),w.color.setHSL(.6,.35,.55+.2*y),w.groundColor.setRGB(.29+.15*f.night,.24,.2),i.intensity=.35*f.night,t.environmentIntensity=pe.lerp(1,.9,f.night),e.toneMappingExposure=pe.lerp(.55,1.05,f.night),m.material.uniforms.opacity.value=se(-4,-14,S.altitude),p.material.opacity=f.night,ao(S.altitude,v),t.fog.color.copy(v),t.fog.density=f.fogBase*(1+f.night*.4),M()}function _(E,S,y){const k=pe.clamp(S*1.1,350,2600),D=d.shadow.camera;D.right!==k&&(D.left=-k,D.right=k,D.top=k,D.bottom=-k,D.updateProjectionMatrix()),d.target.position.copy(E),d.position.copy(E).addScaledVector(f.dir,4e3),m.position.copy(y),p.position.copy(y).add(new L(-.45,.55,.7).normalize().multiplyScalar(16e3))}function b(E){f.fogBase=[12e-5,32e-5,9e-4][E],o.mieCoefficient.value=[.003,.008,.02][E],u=999}return{state:f,sun:d,setTime:P,follow:_,setWeather:b,sky:n}}const T=e=>document.querySelector(e),H=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),B=new hn({antialias:!1,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});B.setPixelRatio(Math.min(devicePixelRatio,2));B.setSize(innerWidth,innerHeight);B.toneMapping=pn;B.outputColorSpace=Je;B.shadowMap.enabled=!0;B.shadowMap.type=mn;T("#c3-gl").appendChild(B.domElement);const U=new Ze,O=new Ct(48,innerWidth/innerHeight,1,6e4),z=new Sn(O,B.domElement);z.enableDamping=!0;z.dampingFactor=.07;z.maxPolarAngle=Math.PI*.495;z.minDistance=25;z.maxDistance=9e3;z.screenSpacePanning=!1;z.autoRotateSpeed=.35;const De=new Cn;De.domElement.className="c3-labels";T("#c3-labels").appendChild(De.domElement);const nt=new gn;nt.onProgress=(e,t,n)=>{T("#c3-loader-bar").style.width=`${20+t/n*80}%`};const co=new vn(nt),je=new Map,lo=B.capabilities.getMaxAnisotropy();function ot(e,t){if(!je.has(e)){const n=co.load(`./city3/tex/${e}.jpg`);n.colorSpace=t?Je:bn,n.anisotropy=lo,je.set(e,n)}return je.get(e)}const Q=io({renderer:B,scene:U}),K=await fetch("./city3/lujiazui.json").then(e=>e.json());T("#c3-loader-text").textContent=`正在生成 ${K.buildings.length.toLocaleString()} 栋建筑…`;T("#c3-loader-bar").style.width="20%";const uo=$e(0,121.4855)[0],fo=$e(0,121.4915)[0],ho=$e(31.2445,0)[1],po=$e(31.2295,0)[1],mo=(e,t)=>e>uo&&e<fo&&t<po&&t>ho,de=In(K.buildings,mo),X=Object.fromEntries(Object.keys(Pe).map(e=>[e,Fn(ot,e)]));X.roof=On(ot);Object.assign(X,qn(et));const At=Object.values(X),Tt=[];X.glassA.side=wn;const at=(e,t)=>{const n=new te(e,t);return n.castShadow=!0,n.receiveShadow=!0,U.add(n),Tt.push(n),n};for(const[e,t]of Object.entries(de.walls))t.index.count&&at(t,X[e]);at(de.roof,X.roof);const ae=Vn(K.landmarks,K.buildings.length);for(const e of ae)for(const t of e.parts)at(t.geo,X[t.mat]);const Ce=Qn({data:K,tex:ot,scene:U,sunDir:Q.state.dir}),Rt=to(U,K.roads,1600),$t=no(U,K.roads),zt=de.meta.filter(e=>e.b.h>100).map(e=>[e.c[0],e.b.h,e.c[1]]);for(const e of ae)zt.push([e.l.c[0],e.info.height,e.l.c[1]]);const go=oo(U,zt),Dt=[];function It(e,t,n,o,a,s,r){const l=document.createElement("button");l.className=`c3-label ${s}`,l.innerHTML=`<b>${H(e)}</b><small>${H(t)}</small>`,l.addEventListener("pointerdown",u=>u.stopPropagation()),l.addEventListener("click",u=>{u.stopPropagation(),r()});const c=new En(l);c.position.set(n,o,a),c.center.set(.5,1),U.add(c),Dt.push({o:c,el:l,y:o})}ae.forEach(e=>It(e.info.name,`${e.info.height} m`,e.l.c[0],e.info.height+10,e.l.c[1],"major",()=>rt(e)));const yt=new Set,Bt=de.meta.filter(e=>e.b.n&&e.b.real&&e.b.h>=190).sort((e,t)=>t.b.h-e.b.h).filter(e=>!yt.has(e.b.n)&&yt.add(e.b.n));Bt.forEach(e=>It(e.b.n,`${e.b.h} m`,e.c[0],e.b.h+6,e.c[1],"minor",()=>Be(e.index)));const vo=new Et(innerWidth,innerHeight,{type:yn,samples:4}),ye=new kn(B,vo);ye.addPass(new Pn(U,O));const Ve=new _n(new oe(innerWidth,innerHeight),.2,.55,.9);ye.addPass(Ve);ye.addPass(new Ln);const st={bund:{label:"外滩观景",pos:[-1420,120,-40],target:[-200,105,-170]},aerial:{label:"陆家嘴俯瞰",pos:[-1450,1050,950],target:[-60,60,-160]},river:{label:"黄浦江上空",pos:[-780,150,1350],target:[-150,140,-250]},top:{label:"上海中心顶端",pos:null},city:{label:"鸟瞰全城",pos:[-2600,2900,2400],target:[0,0,0]}};O.position.set(...st.bund.pos);z.target.set(...st.bund.target);let F=null;function ve(e,t,n=2.4){z.autoRotate=!1,Co("autoRotate",!1),F={p0:O.position.clone(),t0:z.target.clone(),p1:new L(...e),t1:new L(...t),k:0,dur:n}}const wo=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;function Ft(e,t,n,o=40){const a=new L(e,n*.55,t),s=O.position.clone().sub(a).setY(0).normalize(),r=Math.max(n*1.5,o*4,160);return{pos:[e+s.x*r,n*.75+r*.25,t+s.z*r],target:a.toArray()}}const he=T("#c3-info"),G=(e,t)=>t?`<div class="c3-fact"><span>${H(e)}</span><b>${H(t)}</b></div>`:"";function Ot(e){T("#c3-info-body").innerHTML=e,he.hidden=!1,he.classList.remove("pop"),he.offsetWidth,he.classList.add("pop")}const yo={office:"办公",commercial:"商业",retail:"零售",residential:"住宅",apartments:"公寓",hotel:"酒店",skyscraper:"摩天楼",yes:"—",industrial:"工业",school:"学校",hospital:"医院",church:"教堂",civic:"公共建筑",public:"公共建筑",government:"政府",train_station:"车站",house:"住宅",university:"大学",warehouse:"仓库"},xo={glass:"玻璃幕墙",mirror:"镜面玻璃",concrete:"混凝土",stone:"石材",brick:"砖",steel:"钢",metal:"金属",granite:"花岗岩",plaster:"灰泥"};let Ie=-1;function xe(e){for(const t of At)t.userData.uniforms&&(t.userData.uniforms.uHighlight.value=e)}function Be(e){const t=de.meta.find(c=>c.index===e);if(!t)return;Ie=e,xe(e);const n=t.b,o=n.t??{},a=An(t.c[0],t.c[1]),s=[o["addr:street"],o["addr:housenumber"]&&`${o["addr:housenumber"]} 号`].filter(Boolean).join(" ");Ot(`
    <div class="c3-kicker">${t.bund?"外滩历史建筑群":n.h>=150?"超高层建筑":n.h>=50?"高层建筑":"建筑"}</div>
    <h2>${H(n.n??"未命名建筑")}${n.en?`<small>${H(n.en)}</small>`:""}</h2>
    <div class="c3-facts">
      ${G("高度",`${n.h} m${n.real?"（OSM 实测）":"（按楼层/面积推算）"}`)}
      ${G("楼层",n.lv?`${n.lv} 层`:"")}
      ${G("用途",yo[o["building:use"]??o.building]??o["building:use"]??o.building)}
      ${G("外立面",xo[o["building:material"]]??o["building:material"])}
      ${G("地址",s)}
      ${G("建成",o.start_date)}
      ${G("坐标",`${a.lat.toFixed(5)}°N, ${a.lon.toFixed(5)}°E`)}
      ${G("OSM ID",`way/${n.id}`)}
    </div>
    <a class="c3-link" href="https://www.openstreetmap.org/way/${n.id}" target="_blank" rel="noopener">在 OpenStreetMap 中查看 ↗</a>`);const r=Math.max(...n.o.map(c=>Math.hypot(c[0]-t.c[0],c[1]-t.c[1]))),l=Ft(t.c[0],t.c[1],n.h,r);ve(l.pos,l.target)}function rt(e){Ie=e.bid,xe(e.bid);const t=e.info;Ot(`
    <div class="c3-kicker gold">城市地标</div>
    <h2>${H(t.name)}<small>${H(t.en)}</small></h2>
    <p>${H(t.desc)}</p>
    <div class="c3-facts">${G("高度",`${t.height} m`)}${G("楼层",t.floors)}${G("建成",`${t.year} 年`)}${G("OSM ID",`way/${e.l.id}`)}</div>`);const n=Ft(e.l.c[0],e.l.c[1],t.height,60);ve(n.pos,n.target,2.8)}T("#c3-info-close").addEventListener("click",()=>{he.hidden=!0,Ie=-1,xe(-1)});const xt=new xn,Nt=new oe;let qe=!1,ie=null,Mt=-1;const Le=T("#c3-tip");function jt(){xt.setFromCamera(Nt,O);const e=xt.intersectObjects(Tt,!1)[0];if(!e)return-1;const t=e.object.geometry,n=t.index?t.index.getX(e.faceIndex*3):e.faceIndex*3;return t.attributes.aBid.getX(n)}function Mo(e){const t=ae.find(o=>o.bid===e);if(t)return`${t.info.name}<small>${t.info.height} m</small>`;const n=de.meta.find(o=>o.index===e);return n?`${H(n.b.n??"建筑")}<small>${n.b.h} m${n.b.real?"":" · 推算"}</small>`:null}const Me=B.domElement;Me.addEventListener("pointermove",e=>{Nt.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1),Le.style.transform=`translate(${e.clientX+16}px, ${e.clientY+14}px)`,qe=!0});Me.addEventListener("pointerdown",e=>{ie=[e.clientX,e.clientY]});Me.addEventListener("pointerup",e=>{if(!ie||Math.hypot(e.clientX-ie[0],e.clientY-ie[1])>5){ie=null;return}ie=null;const t=jt(),n=ae.find(o=>o.bid===t);n?rt(n):t>=0&&Be(t)});Me.addEventListener("pointerleave",()=>{Le.hidden=!0});const Wt=T("#c3-landmarks"),Gt=[...ae.map(e=>({name:e.info.name,h:e.info.height,go:()=>rt(e),major:!0})),...Bt.slice(0,9).map(e=>({name:e.b.n,h:e.b.h,go:()=>Be(e.index)}))].sort((e,t)=>t.h-e.h);Wt.innerHTML=Gt.map((e,t)=>`<li><button data-i="${t}" class="${e.major?"major":""}"><span>${H(e.name)}</span><i style="--w:${e.h/632*100}%"></i><b>${e.h}</b></button></li>`).join("");Wt.querySelectorAll("button").forEach(e=>e.addEventListener("click",()=>Gt[+e.dataset.i].go()));const bo=T("#c3-views");for(const[e,t]of Object.entries(st)){const n=document.createElement("button");n.textContent=t.label,n.addEventListener("click",()=>{if(e==="top"){const o=ae.find(a=>a.l.k==="shanghaiTower");ve([o.l.c[0]-160,700,o.l.c[1]+220],[o.l.c[0]+300,250,o.l.c[1]-400],3)}else ve(t.pos,t.target,3)}),bo.appendChild(n)}const So=T("#c3-layers");function me(e,t,n,o){const a=document.createElement("label");a.className="c3-toggle",a.dataset.layer=e,a.innerHTML=`<input type="checkbox" ${n?"checked":""}/><span class="c3-sw"></span><span>${t}</span>`,a.querySelector("input").addEventListener("change",s=>o(s.target.checked)),So.appendChild(a)}function Co(e,t){const n=document.querySelector(`[data-layer="${e}"] input`);n&&(n.checked=t)}let Ht=!0;me("labels","地标标签",!0,e=>{Ht=e});me("traffic","车流",!0,e=>{Rt.group.visible=e});me("lights","路灯",!0,e=>{$t.group.visible=e});me("shadows","实时阴影",!0,e=>{B.shadowMap.enabled=e,U.traverse(t=>{t.material&&(t.material.needsUpdate=!0)})});me("water","江面反射",!0,e=>{Ce.water.visible=e});me("autoRotate","自动环绕",!1,e=>{z.autoRotate=e});const Eo=K.buildings.filter(e=>e.real).length,ko=K.roads.reduce((e,t)=>e+t.p.reduce((n,o,a)=>a?n+Math.hypot(o[0]-t.p[a-1][0],o[1]-t.p[a-1][1]):0,0),0)/1e3;T("#c3-stats").innerHTML=`
  <div><b>${K.buildings.length.toLocaleString()}</b><span>建筑</span></div>
  <div><b>${Eo}</b><span>实测高度</span></div>
  <div><b>${Math.round(ko)}</b><span>道路 km</span></div>
  <p>数据 © OpenStreetMap 贡献者（ODbL）· 贴图 ambientCG（CC0）</p>`;const Xe=8*36e5,Ut=new Date,Vt=Math.floor((Ut.getTime()+Xe)/864e5)*864e5-Xe,I={hour:(Ut.getTime()+Xe)/36e5%24,playing:!1},we=T("#c3-hour");we.value=I.hour;we.addEventListener("input",()=>{I.hour=+we.value});const{rise:Po,set:bt}=Rn(Vt),_o=[["日出",Po+.2],["上午",9.5],["正午",12],["黄昏",bt-.45],["蓝调",bt+.4],["夜景",21]].map(([e,t])=>[e,t.toFixed(2)]);T("#c3-presets").innerHTML=_o.map(([e,t])=>`<button data-h="${t}">${e}</button>`).join("");T("#c3-presets").querySelectorAll("button").forEach(e=>e.addEventListener("click",()=>{I.hour=+e.dataset.h,we.value=I.hour}));const Ke=T("#c3-play"),qt=e=>{I.playing=e,Ke.textContent=e?"❚❚":"▶",Ke.classList.toggle("on",e)};Ke.addEventListener("click",()=>qt(!I.playing));const Lo=["晴朗","薄雾","浓雾"];T("#c3-weather").innerHTML=Lo.map((e,t)=>`<button data-w="${t}" class="${t===0?"active":""}">${e}</button>`).join("");T("#c3-weather").querySelectorAll("button").forEach(e=>e.addEventListener("click",()=>{Q.setWeather(+e.dataset.w),T("#c3-weather").querySelectorAll("button").forEach(t=>t.classList.toggle("active",t===e))}));Q.setWeather(0);addEventListener("keydown",e=>{e.target.tagName==="INPUT"&&e.target.type!=="range"||(e.code==="Space"&&(e.preventDefault(),qt(!I.playing)),e.key==="Escape"&&(he.hidden=!0,xe(-1)))});const Ao=e=>`${String(Math.floor(e)).padStart(2,"0")}:${String(Math.floor(e%1*60)).padStart(2,"0")}`;function Xt(){const e=innerWidth,t=innerHeight;O.aspect=e/t,O.updateProjectionMatrix(),B.setSize(e,t),ye.setSize(e,t),De.setSize(e,t)}addEventListener("resize",Xt);Xt();const To=new Mn;let Se=0,St=-1,We=0;B.setAnimationLoop(()=>{const e=Math.min(To.getDelta(),.05);Se+=e,I.playing&&(I.hour=(I.hour+e*.2)%24,we.value=I.hour),Math.abs(I.hour-St)>1e-4&&(St=I.hour,Q.setTime(Vt+I.hour*36e5),Ce.water.material.uniforms.sunDirection.value.copy(Q.state.dir));const t=Q.state.night;if(F){F.k=Math.min(1,F.k+e/F.dur);const o=wo(F.k);z.target.lerpVectors(F.t0,F.t1,o),O.position.lerpVectors(F.p0,F.p1,o),O.position.y+=Math.sin(Math.PI*o)*F.p0.distanceTo(F.p1)*.12,F.k>=1&&(F=null)}z.update(),z.target.y<0&&(z.target.y=0);const n=O.position.distanceTo(z.target);Q.follow(z.target,n,O.position);for(const o of At){const a=o.userData.uniforms;a&&(a.uNight.value=t,a.uTime.value=Se)}X.pearl.emissiveIntensity=t*(.9+.35*Math.sin(Se*1.3)),X.concrete.emissiveIntensity=t*.18,X.metal.emissiveIntensity=t*.6,Ce.water.material.uniforms.time.value+=e*.35,Ce.water.material.uniforms.sunColor.value.setScalar(.25+.75*(1-t)),Rt.update(e,t),$t.update(t),go.update(Se,t),Ve.strength=.12+.5*t,Ve.threshold=.92-.04*t;for(const o of Dt){const a=O.position.distanceTo(o.o.position),r=o.el.classList.contains("major")?pe.clamp(1.6-a/3500,.7,1):pe.clamp((1500-a)/600,0,1);o.o.visible=Ht&&r>.02,o.o.visible&&(o.el.style.opacity=String(r))}if(qe&&!ie&&!F){qe=!1;const o=jt();if(o!==Mt){Mt=o,Ie<0&&xe(o);const a=o>=0?Mo(o):null;Le.hidden=!a,a&&(Le.innerHTML=a),Me.style.cursor=o>=0?"pointer":"grab"}}if(We+=e,We>.15){We=0,T("#c3-time").textContent=Ao(I.hour);const o=Q.state;T("#c3-sun").textContent=`太阳高度 ${o.altitude.toFixed(1)}° · 方位 ${o.azimuth.toFixed(0)}°`}ye.render(),De.render(U,O)});nt.onLoad=()=>{const e=T("#c3-loader");e.classList.add("done"),setTimeout(()=>e.remove(),900)};window.__city3={scene:U,camera:O,controls:z,renderer:B,env:Q,time:I,city:de,landmarks:ae,flyTo:ve,selectBuilding:Be};
