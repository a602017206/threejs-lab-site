import{aG as Dt,L as le,aH as Oe,aI as se,aJ as Ut,J as ze,ax as mt,V as _,j as $t,aK as Me,a0 as gt,i as kt,a1 as Le,M as Ae,$ as de,aL as Ot,_ as Ht,K as wt,G as oe,f as Ye,ab as Xe,C as ce,al as Fe,a4 as Je,a2 as qt,af as We,n as yt,q as Ft,p as Wt,a7 as Rt,a6 as jt,l as Gt,m as vt,S as Vt,F as Nt,b as Kt,s as Yt,ap as Xt,D as Jt,y as Ze,d as Qe}from"./three.module-D90_RIQy.js";import{O as Zt}from"./OrbitControls-CdVUlVUp.js";import{G as Qt}from"./GLTFLoader-BMcLoZzq.js";import"./BufferGeometryUtils-Cj34ebIR.js";const et=new ze,ye=new _;class bt extends Dt{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new le(t,3)),this.setAttribute("uv",new le(i,2))}applyMatrix4(t){const i=this.attributes.instanceStart,s=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(t),s.applyMatrix4(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const s=new Oe(i,6,1);return this.setAttribute("instanceStart",new se(s,3,0)),this.setAttribute("instanceEnd",new se(s,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const s=new Oe(i,6,1);return this.setAttribute("instanceColorStart",new se(s,3,0)),this.setAttribute("instanceColorEnd",new se(s,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ut(t.geometry)),this}fromLineSegments(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ze);const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;t!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(t),et.setFromBufferAttribute(i),this.boundingBox.union(et))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mt),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(t!==void 0&&i!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let o=0;for(let n=0,l=t.count;n<l;n++)ye.fromBufferAttribute(t,n),o=Math.max(o,s.distanceToSquared(ye)),ye.fromBufferAttribute(i,n),o=Math.max(o,s.distanceToSquared(ye));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Le.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new kt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Me.line={uniforms:gt.merge([Le.common,Le.fog,Le.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class St extends $t{constructor(t){super({type:"LineMaterial",uniforms:gt.clone(Me.line.uniforms),vertexShader:Me.line.vertexShader,fragmentShader:Me.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Pe=new de,tt=new _,nt=new _,C=new de,I=new de,N=new de,Ce=new _,Ie=new Ht,B=new Ot,it=new _,ve=new ze,be=new mt,K=new de;let X,ee;function st(e,t,i){return K.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),K.multiplyScalar(1/K.w),K.x=ee/i.width,K.y=ee/i.height,K.applyMatrix4(e.projectionMatrixInverse),K.multiplyScalar(1/K.w),Math.abs(Math.max(K.x,K.y))}function en(e,t){const i=e.matrixWorld,s=e.geometry,o=s.attributes.instanceStart,n=s.attributes.instanceEnd,l=Math.min(s.instanceCount,o.count);for(let r=0,p=l;r<p;r++){B.start.fromBufferAttribute(o,r),B.end.fromBufferAttribute(n,r),B.applyMatrix4(i);const m=new _,v=new _;X.distanceSqToSegment(B.start,B.end,v,m),v.distanceTo(m)<ee*.5&&t.push({point:v,pointOnLine:m,distance:X.origin.distanceTo(v),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}function tn(e,t,i){const s=t.projectionMatrix,n=e.material.resolution,l=e.matrixWorld,r=e.geometry,p=r.attributes.instanceStart,m=r.attributes.instanceEnd,v=Math.min(r.instanceCount,p.count),y=-t.near;X.at(1,N),N.w=1,N.applyMatrix4(t.matrixWorldInverse),N.applyMatrix4(s),N.multiplyScalar(1/N.w),N.x*=n.x/2,N.y*=n.y/2,N.z=0,Ce.copy(N),Ie.multiplyMatrices(t.matrixWorldInverse,l);for(let L=0,A=v;L<A;L++){if(C.fromBufferAttribute(p,L),I.fromBufferAttribute(m,L),C.w=1,I.w=1,C.applyMatrix4(Ie),I.applyMatrix4(Ie),C.z>y&&I.z>y)continue;if(C.z>y){const D=C.z-I.z,b=(C.z-y)/D;C.lerp(I,b)}else if(I.z>y){const D=I.z-C.z,b=(I.z-y)/D;I.lerp(C,b)}C.applyMatrix4(s),I.applyMatrix4(s),C.multiplyScalar(1/C.w),I.multiplyScalar(1/I.w),C.x*=n.x/2,C.y*=n.y/2,I.x*=n.x/2,I.y*=n.y/2,B.start.copy(C),B.start.z=0,B.end.copy(I),B.end.z=0;const w=B.closestPointToPointParameter(Ce,!0);B.at(w,it);const x=wt.lerp(C.z,I.z,w),P=x>=-1&&x<=1,z=Ce.distanceTo(it)<ee*.5;if(P&&z){B.start.fromBufferAttribute(p,L),B.end.fromBufferAttribute(m,L),B.start.applyMatrix4(l),B.end.applyMatrix4(l);const D=new _,b=new _;X.distanceSqToSegment(B.start,B.end,b,D),i.push({point:b,pointOnLine:D,distance:X.origin.distanceTo(b),object:e,face:null,faceIndex:L,uv:null,uv1:null})}}}class nn extends Ae{constructor(t=new bt,i=new St({color:Math.random()*16777215})){super(t,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,i=t.attributes.instanceStart,s=t.attributes.instanceEnd,o=new Float32Array(2*i.count);for(let l=0,r=0,p=i.count;l<p;l++,r+=2)tt.fromBufferAttribute(i,l),nt.fromBufferAttribute(s,l),o[r]=r===0?0:o[r-1],o[r+1]=o[r]+tt.distanceTo(nt);const n=new Oe(o,2,1);return t.setAttribute("instanceDistanceStart",new se(n,1,0)),t.setAttribute("instanceDistanceEnd",new se(n,1,1)),this}raycast(t,i){const s=this.material.worldUnits,o=t.camera;o===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const n=t.params.Line2!==void 0&&t.params.Line2.threshold||0;X=t.ray;const l=this.matrixWorld,r=this.geometry,p=this.material;ee=p.linewidth+n,r.boundingSphere===null&&r.computeBoundingSphere(),be.copy(r.boundingSphere).applyMatrix4(l);let m;if(s)m=ee*.5;else{const y=Math.max(o.near,be.distanceToPoint(X.origin));m=st(o,y,p.resolution)}if(be.radius+=m,X.intersectsSphere(be)===!1)return;r.boundingBox===null&&r.computeBoundingBox(),ve.copy(r.boundingBox).applyMatrix4(l);let v;if(s)v=ee*.5;else{const y=Math.max(o.near,ve.distanceToPoint(X.origin));v=st(o,y,p.resolution)}ve.expandByScalar(v),X.intersectsBox(ve)!==!1&&(s?en(this,i):tn(this,o,i))}onBeforeRender(t){const i=this.material.uniforms;i&&i.resolution&&(t.getViewport(Pe),this.material.uniforms.resolution.value.set(Pe.z,Pe.w))}}function Re(e){const t=new yt;return t.setAttribute("position",new le(e,3)),t}function Be(e,t,i=.85){const s=Re(e),o=new Fe({color:t,transparent:!0,opacity:i,depthWrite:!1,toneMapped:!1}),n=new We(s,o);return n.renderOrder=2,n}function ot(e,t,{opacity:i=.9,linewidth:s=2.2}={}){const o=new bt;o.setPositions(e instanceof Float32Array?e:Float32Array.from(e));const n=new St({color:t,linewidth:s,transparent:!0,opacity:i,depthWrite:!1,toneMapped:!1});n.resolution.set(innerWidth||1,innerHeight||1);const l=new nn(o,n);return l.renderOrder=3,l.userData.isFatLines=!0,l.userData.resize=(r,p)=>n.resolution.set(r,p),l}function sn(e){const t=new oe;t.name="provinces";const i=new Ye({color:new ce(1323594),transparent:!0,opacity:.55,side:Xe,depthWrite:!1,toneMapped:!1}),s=new Ye({color:new ce(926776),transparent:!0,opacity:.35,side:Xe,depthWrite:!1,toneMapped:!1}),o=new Fe({color:8304340,transparent:!0,opacity:.55,toneMapped:!1}),n=[];for(const r of e){const p=r.adcode==="100000"||r.name==="南海诸岛";for(const m of r.polygons){const v=m[0];if(!v||v.length<3)continue;const y=new Je;y.moveTo(v[0][0],v[0][1]);for(let A=1;A<v.length;A++)y.lineTo(v[A][0],v[A][1]);y.closePath();for(let A=1;A<m.length;A++){const d=m[A];if(!d||d.length<3)continue;const w=new Je;w.moveTo(d[0][0],d[0][1]);for(let x=1;x<d.length;x++)w.lineTo(d[x][0],d[x][1]);w.closePath(),y.holes.push(w)}const L=new Ae(new qt(y),p?s:i);L.rotation.x=Math.PI/2,L.position.y=p?-.02:0,L.renderOrder=0,L.userData.province=r,t.add(L);for(const A of m)for(let d=0;d<A.length;d++){const w=A[d],x=A[(d+1)%A.length];n.push(w[0],.01,w[1],x[0],.01,x[1])}}}const l=new We(Re(n),o);return l.renderOrder=1,l.name="borders",t.add(l),{group:t,borders:l,fillMat:i,seaMat:s,borderMat:o}}function on(e){const t=[],i=[],s=new ce(16765562),o=new ce(9425151);for(const p of e){t.push(p.x,.04,p.z);const m=p.tier==="national-hub"?s:o;i.push(m.r,m.g,m.b)}const n=new yt;n.setAttribute("position",new le(t,3)),n.setAttribute("color",new le(i,3));const l=new Ft({size:.045,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,sizeAttenuation:!0,toneMapped:!1}),r=new Wt(n,l);return r.renderOrder=4,r.userData.stations=e,r}function at(e,t=.05){const i=[];for(let s=0;s<e.length-1;s++){const o=e[s],n=e[s+1];i.push(o[0],t,o[1],n[0],t,n[1])}return Re(i)}function xt(e,t){return Math.hypot(e[0]-t[0],e[1]-t[1])}function an(e,t){const i=[e[0]];for(let s=1;s<e.length;s++)xt(i[i.length-1],e[s])>=t&&i.push(e[s]);return i}function rn(e,t=3){let i=e;for(let s=0;s<t;s++){const o=[i[0]];for(let n=1;n<i.length-1;n++){const l=i[n-1],r=i[n],p=i[n+1],m=r[0]-l[0],v=r[1]-l[1],y=p[0]-r[0],L=p[1]-r[1],A=Math.hypot(m,v)||1e-9,d=Math.hypot(y,L)||1e-9;(m*y+v*L)/(A*d)>=.15&&o.push(r)}o.push(i[i.length-1]),i=o}return i}function ln(e,t){let i=e;for(let s=0;s<t;s++){const o=[i[0]];for(let n=0;n<i.length-1;n++){const l=i[n],r=i[n+1];o.push([l[0]*.75+r[0]*.25,l[1]*.75+r[1]*.25]),o.push([l[0]*.25+r[0]*.75,l[1]*.25+r[1]*.75])}o.push(i[i.length-1]),i=o}return i}function cn(e,t){const i=[e[0]];for(let s=1;s<e.length;s++){const o=i[i.length-1],n=e[s],l=xt(o,n);if(l<t)continue;const r=Math.max(1,Math.floor(l/(t*2.2)));for(let p=1;p<=r;p++){const m=p/r;i.push([o[0]+(n[0]-o[0])*m,o[1]+(n[1]-o[1])*m])}}return i}function He(e,{iterations:t=3,minStep:i=.005}={}){if(!e||e.length<3)return e?.slice?.()??[];let s=e.map(([o,n])=>[o,n]);return s=an(s,i*.35),s=rn(s),s=ln(s,t),cn(s,i)}function rt(e){const i=He(e).map(([n,l])=>new _(n,.06,l)),s=[0];let o=0;for(let n=1;n<i.length;n++)o+=i[n].distanceTo(i[n-1]),s.push(o);return{points:i,lengths:s,total:o}}function lt(e,t,i,s){const o=Math.max(0,Math.min(i,s));let n=1;for(;n<t.length&&t[n]<o;)n+=1;const l=Math.max(1,n)-1,r=Math.min(e.length-1,l+1),p=t[r]-t[l]||1,m=(o-t[l])/p;return e[l].clone().lerp(e[r],m)}function Se(e,t,{lookAhead:i=.04}={}){const{points:s,lengths:o,total:n}=e;if(n<=0||s.length<2)return{position:s[0]?.clone()??new _,tangent:new _(0,0,-1)};const l=Math.max(0,Math.min(.999999,t))*n,r=lt(s,o,n,l),m=lt(s,o,n,l+Math.max(i*n,.02)).sub(r);return m.lengthSq()<1e-10?m.set(0,0,-1):m.normalize(),{position:r,tangent:m}}function dn(e,t){if(!e?.length)return-1;let i=0,s=1/0;for(let o=0;o<e.length;o++){const n=e[o].x-t.x,l=e[o].z-t.z,r=n*n+l*l;r<s&&(s=r,i=o)}return i}function un(e,{fill:t="#d7e8f2",accent:i=!1}={}){const s=document.createElement("canvas");s.width=256,s.height=64;const o=s.getContext("2d");if(o.clearRect(0,0,256,64),o.font=i?'700 28px "PingFang SC","Noto Sans SC",sans-serif':'600 24px "PingFang SC","Noto Sans SC",sans-serif',o.textAlign="center",o.textBaseline="middle",o.shadowColor="rgba(0,0,0,0.9)",o.shadowBlur=10,i){o.fillStyle="rgba(8, 20, 32, 0.78)";const l=Math.min(240,o.measureText(e).width+28);fn(o,128-l/2,14,l,36,6),o.fill()}o.fillStyle=t,o.fillText(e,128,34);const n=new Gt(s);return n.colorSpace=vt,n.needsUpdate=!0,n}function fn(e,t,i,s,o,n){e.beginPath(),e.moveTo(t+n,i),e.arcTo(t+s,i,t+s,i+o,n),e.arcTo(t+s,i+o,t,i+o,n),e.arcTo(t,i+o,t,i,n),e.arcTo(t,i,t+s,i,n),e.closePath()}function pn(e,t={}){const i=un(e,t),s=new Rt({map:i,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1,sizeAttenuation:!0}),o=new jt(s);o.center.set(.5,0);const n=t.accent?.55:.42;return o.scale.set(n,n*.25,1),o.renderOrder=20,o.frustumCulled=!1,o.userData.dispose=()=>{i.dispose(),s.dispose()},o}const hn=[["北京",116.407,39.904],["上海",121.474,31.23],["天津",117.2,39.13],["重庆",106.55,29.56],["广州",113.27,23.13],["深圳",114.06,22.54],["杭州",120.16,30.27],["南京",118.8,32.06],["武汉",114.31,30.59],["成都",104.07,30.57],["西安",108.94,34.26],["郑州",113.63,34.75],["长沙",112.98,28.19],["沈阳",123.43,41.8],["哈尔滨",126.64,45.76],["长春",125.32,43.89],["济南",117,36.67],["青岛",120.38,36.07],["福州",119.3,26.08],["厦门",118.09,24.48],["昆明",102.71,25.04],["贵阳",106.71,26.57],["南宁",108.32,22.82],["海口",110.35,20.02],["兰州",103.83,36.06],["西宁",101.78,36.62],["银川",106.27,38.47],["乌鲁木齐",87.62,43.79],["拉萨",91.11,29.97],["呼和浩特",111.75,40.84],["包头",109.83,40.66],["张家口",114.88,40.82],["乌兰察布",113.13,40.99],["太原",112.55,37.87],["石家庄",114.51,38.04],["合肥",117.28,31.86],["南昌",115.86,28.68],["香港",114.17,22.32],["台北",121.57,25.04]];function mn(e,t,i=105,s=35,o=.12){return[(e-i)*o,(s-t)*o]}function De(e=""){return e.replace(/(东|西|南|北|站)$/g,"")}function gn(e){return e.replace(/(维吾尔|回族|壮族)?自治区|特别行政区|省|市/g,"")||e}function wn(e){for(;e.children.length;){const t=e.children[0];t.userData.dispose?.(),e.remove(t)}}function ct(e,t,i,s,o){const n=Math.min(o,t*i);e.scale.set(n,n*s,1)}function xe(e,t,i,s,o,{fill:n,accent:l=!1,kind:r,name:p,scaleX:m,scaleY:v}={}){const y=pn(t,{fill:n,accent:l});return y.position.set(i,s,o),m!=null&&y.scale.set(m,v,1),y.userData.kind=r,p!=null&&(y.userData.name=p),e.add(y),y}function yn({stations:e=[],provinces:t=[],originLon:i=105,originLat:s=35,scale:o=.12}={}){const n=new oe;n.name="labels";for(const d of t)!d.name||d.adcode==="100000"||d.name==="南海诸岛"||xe(n,gn(d.name),d.center[0],.08,d.center[1],{fill:"rgba(160,190,210,0.78)",kind:"province",scaleX:.5,scaleY:.125});const l=new Set;for(const[d,w,x]of hn){const[P,z]=mn(w,x,i,s,o);xe(n,d,P,.12,z,{fill:"#f0b429",accent:!0,kind:"city",name:d}),l.add(d)}for(const d of e){if(d.tier!=="national-hub")continue;const w=De(d.name);l.has(w)||l.has(d.name)||xe(n,d.name,d.x,.1,d.z,{fill:"#9fd0ff",accent:!0,kind:"hub",name:d.name,scaleX:.48,scaleY:.12})}const r=new oe;r.name="route-labels",n.add(r);const p=new Set;function m(d){if(wn(r),p.clear(),!!d?.length)for(const w of d)p.add(w.name),p.add(De(w.name)),xe(r,w.name,w.x,.18,w.z,{fill:"#7ef0ff",accent:!0,kind:"stop",name:w.name,scaleX:.42,scaleY:.105})}function v(d){return p.has(d)||p.has(De(d))}function y(d,w){const x=Math.max(.15,w.distanceTo(d.position));ct(d,x,.055,.25,.55),d.visible=x<8}function L(d,w,x){const P=d.userData.kind,z=d.userData.name||"",D=Math.max(.2,w.distanceTo(d.position));if(P==="province"?d.visible=!x&&D>1.2:P==="city"||P==="hub"?v(z)?d.visible=!1:x?d.visible=D>.35&&D<3.2:d.visible=!0:d.visible=!0,!d.visible)return;const b=P==="province";ct(d,D,b?.045:.05,b?.22:.25,.7)}function A(d){if(!n.visible||!d)return;const w=d.position,x=Math.hypot(w.x,w.y,w.z)<4.5;for(const P of n.children){if(P===r){for(const z of r.children)y(z,w);continue}P.isSprite&&L(P,w,x)}}return{group:n,setRouteStops:m,setVisible(d){n.visible=d},update:A,dispose(){n.traverse(d=>d.userData.dispose?.())}}}const vn="./rail1/models",bn=new Qt,qe={G:"hsr",D:"bullet",C:"wagon"},Ue=new Map;async function Mt(e){return Ue.has(e)||Ue.set(e,bn.loadAsync(`${vn}/${e}.glb`).then(t=>{const i=t.scene;return i.traverse(s=>{if(!s.isMesh)return;s.castShadow=!1,s.receiveShadow=!1,s.frustumCulled=!1;const o=Array.isArray(s.material)?s.material:[s.material];for(const n of o)n&&(!n.map&&n.emissiveMap&&(n.map=n.emissiveMap),!n.map&&n.aoMap&&(n.map=n.aoMap),n.map&&(n.map.colorSpace=vt,n.map.needsUpdate=!0),n.envMapIntensity=1.2,n.toneMapped=!0,n.isMeshStandardMaterial&&(n.metalness=Math.min(.4,n.metalness??.2),n.roughness=Math.max(.28,Math.min(.65,n.roughness??.4)),n.emissiveIntensity=Math.max(n.emissiveIntensity||0,.25),n.color&&n.color.getHex()===16777215&&!n.map&&n.color.setHex(14214896)))}),i})),Ue.get(e)}function Sn(e,t=.22){const i=new oe,s=e.clone(!0);i.add(s);const o=new ze().setFromObject(s),n=o.getSize(new _),l=o.getCenter(new _);s.position.sub(l);const r=[n.x,n.y,n.z];(r[0]>=r[2]?"x":"z")==="x"&&(s.rotation.y=Math.PI/2,s.updateMatrixWorld(!0),o.setFromObject(s),o.getSize(n),o.getCenter(l),s.position.sub(l));const m=Math.max(n.z,1e-6),v=t/m;return s.scale.setScalar(v),s.updateMatrixWorld(!0),o.setFromObject(s),o.getCenter(l),s.position.sub(l),o.setFromObject(s),s.position.y-=o.min.y,s.position.y+=.01,o.max.z-o.min.z>0,i.userData.modelKey=e.userData?.modelKey,i}async function dt(e="G",{length:t=.22}={}){const i=qe[e]||qe.G;try{const s=await Mt(i);s.userData.modelKey=i;const o=Sn(s,t);return o.visible=!1,o.userData.kind="gltf",o.userData.modelKey=i,console.info("[rail1] train model ready",i,t),o}catch(s){return console.warn("列车模型加载失败，回退几何体",i,s),null}}async function xn(){await Promise.all(Object.values(qe).map(e=>Mt(e).catch(()=>null)))}function Mn(e,t){if(!e)return;const i=.08+.06*Math.sin(t*4);e.traverse(s=>{if(!s.isMesh||!s.material)return;const o=Array.isArray(s.material)?s.material:[s.material];for(const n of o)n?.emissive&&n.isMeshStandardMaterial&&(n.emissiveIntensity=wt.lerp(n.emissiveIntensity||0,i,.1))})}const Ln="./rail1";async function Y(e,t){const i=await fetch(`${Ln}/${e}`);if(!i.ok)throw new Error(`无法加载 ${e}`);const s=await i.json();return t?.(),s}function $e(){const e=new oe,t=new Ae(new Ze(.045,.022,.11),new Qe({color:16762967,emissive:5583616,emissiveIntensity:.7,metalness:.35,roughness:.4}));t.position.y=.03;const i=new Ae(new Ze(.032,.018,.04),new Qe({color:16777215,emissive:2245734,emissiveIntensity:.55,metalness:.2,roughness:.5}));return i.position.set(0,.03,-.065),e.add(t,i),e.visible=!1,e.userData.kind="fallback",e}async function An(e,{onProgress:t}={}){const i=new Vt;i.background=new ce(462872),i.fog=new Nt(462872,20,55);const s=new Kt(42,1,.05,200);s.position.set(.4,10,12);const o=new Yt({canvas:e,antialias:!0,powerPreference:"high-performance"});o.setPixelRatio(Math.min(devicePixelRatio,2)),o.setSize(e.clientWidth||innerWidth,e.clientHeight||innerHeight,!1);const n=new Zt(s,e);n.enableDamping=!0,n.dampingFactor=.08,n.maxPolarAngle=Math.PI*.48,n.minDistance=2.5,n.maxDistance=42,n.target.set(.35,0,-.1),i.add(new Xt(9352392,.7));const l=new Jt(16773336,1.25);l.position.set(8,18,6),i.add(l);const r=()=>t?.(1),[p,m,v,y,L,A,d,w,x,P]=await Promise.all([Y("provinces.json",r),Y("rails-hsr.bin.json",r),Y("rails-conventional.bin.json",r),Y("stations.json",r),Y("trains.json",r),Y("meta.json",r),Y("rails-corridor.bin.json",r).catch(()=>({positions:[]})),Y("roads-expressway.bin.json",r).catch(()=>({positions:[]})),Y("highways.json",r).catch(()=>[]),Y("models/credits.json",r).catch(()=>[])]);xn().catch(()=>{}),r();const z=new oe;z.name="china-map",i.add(z);const D=sn(p.features);z.add(D.group);let b=null;w.positions?.length?(b=ot(w.positions,9109428,{opacity:.95,linewidth:3}),b.name="expressway",b.renderOrder=2,z.add(b),console.info("[rail1] expressway segments",w.count??w.positions.length/6)):console.warn("[rail1] expressway layer empty — check roads-expressway.bin.json");const J=Be(m.positions,16758861,.88);J.name="hsr",z.add(J);const Z=Be(v.positions,7311272,.35);Z.name="conventional",z.add(Z);let W=null;d.positions?.length&&(W=Be(d.positions,5951743,.95),W.name="corridor",W.renderOrder=3,z.add(W));const G=on(y);G.name="stations",z.add(G);const $=yn({stations:y,provinces:p.features,originLon:p.origin?.[0]??105,originLat:p.origin?.[1]??35,scale:p.scale??.12});z.add($.group);const te=new Fe({color:8319231,transparent:!0,opacity:1,toneMapped:!1,depthWrite:!1}),V=new We(at([[0,0],[0,0]]),te);V.renderOrder=5,V.visible=!1,z.add(V);let k=null;function ue(c,h=.09){const g=[];for(let S=0;S<c.length-1;S++){const E=c[S],U=c[S+1];g.push(E[0],h,E[1],U[0],h,U[1])}return g}function ne(c){k&&(z.remove(k),k.geometry?.dispose(),k.material?.dispose(),k=null),c?.length&&(k=ot(c,16773226,{opacity:1,linewidth:5.5}),k.name="highway-highlight",k.renderOrder=6,z.add(k),k.userData.resize?.(e.clientWidth||innerWidth,e.clientHeight||innerHeight))}let O=$e();z.add(O);const ae=new Map;let q=Math.PI;const R={value:0,primed:!1},H=new _(0,0,-1);async function ie(c){if(ae.has(c))return ae.get(c);const g=await dt(c,{length:.28})||$e();return g.visible=!1,ae.set(c,g),z.add(g),g}const u={view:"orbit",speedScale:1.2,progress:0,elapsed:0,active:null,activeHighway:null,metrics:null,layers:{hsr:!0,conventional:!0,stations:!0,borders:!0,corridor:!0,labels:!0,expressway:!0},followLook:new _,followPos:new _,followReady:!1},fe=[],pe=L.filter(c=>["G1","G7","G2472","G1051","D5"].includes(c.code)).slice(0,4);(async()=>{for(let c=0;c<pe.length;c++){const h=pe[c],g=rt(h.path);if(g.total<=0)continue;const S=await dt(h.type,{length:.35})||$e();S.visible=!0,z.add(S),fe.push({metrics:g,mesh:S,progress:c*.17%1,speed:.35+c*.05})}})().catch(()=>{});function a(c,h){switch(u.layers[c]=h,c){case"hsr":J.visible=h;break;case"conventional":Z.visible=h;break;case"expressway":b&&(b.visible=h);break;case"stations":G.visible=h;break;case"borders":D.borders.visible=h;break;case"corridor":W&&(W.visible=h);break;case"labels":$.setVisible(h);break}}function f(){u.followReady=!1,R.primed=!1}function M(){u.active=null,u.metrics=null,u.progress=0,V.visible=!1,O.visible=!1,$.setRouteStops(null),f()}function j(c){if(!c?.length)return;let h=1/0,g=-1/0,S=1/0,E=-1/0;for(const[Ne,Ke]of c)h=Math.min(h,Ne),g=Math.max(g,Ne),S=Math.min(S,Ke),E=Math.max(E,Ke);const U=(h+g)*.5,Ve=(S+E)*.5,Bt=Math.max(g-h,E-S,1.2),Te=Math.min(38,Math.max(6,Bt*1.55));u.view="orbit",n.enabled=!0,n.target.set(U,0,Ve),s.position.set(U+Te*.18,Te*.72,Ve+Te*.85),n.update()}async function F(c){if(u.activeHighway=null,ne(null),!c){M();return}u.active=c,u.progress=0,f();const h=He(c.path);V.geometry.dispose(),V.geometry=at(h,.08),V.visible=!0,u.metrics=rt(c.path),$.setRouteStops(c.stops),O.visible=!0;const{position:g,tangent:S}=Se(u.metrics,0);_e(g,S,O,!0);const E=c.type||"G",U=await ie(E);u.active===c&&O!==U&&(O.visible=!1,O=U,O.visible=!0,_e(g,S,O,!0))}function re(c){if(M(),u.activeHighway=c||null,!c?.path?.length){ne(null);return}const h=He(c.path,{iterations:2,minStep:.01});ne(ue(h,.09)),j(h),!u.layers.expressway&&b&&a("expressway",!0)}function he(c,h){let g=h-c;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;return g}const Q=new _,me=new _,ge=new _;function _e(c,h,g=O,S=!1){S||!R.primed?Q.copy(c):Q.lerp(c,.35),g.position.copy(Q),S||H.lengthSq()<1e-8?H.copy(h):H.dot(h)>=.05&&H.lerp(h,.15).normalize();const E=Math.atan2(H.x,H.z)+q;S||!R.primed?(R.value=E,R.primed=!0):R.value+=he(R.value,E)*.15,g.rotation.set(0,R.value,0)}function Et(c){const h=u.view==="cab",g=h?-.02:-.55,S=h?.07:.22,E=h?.55:.4;if(me.copy(Q).addScaledVector(H,g),me.y+=S,ge.copy(Q).addScaledVector(H,E),ge.y+=h?.04:.06,!u.followReady)u.followPos.copy(me),u.followLook.copy(ge),u.followReady=!0;else{const U=1-Math.exp(-c*(h?7:4.2));u.followPos.lerp(me,U),u.followLook.lerp(ge,U)}s.position.copy(u.followPos),s.lookAt(u.followLook)}function _t(c){const S=(u.view==="orbit"?280:520)/60*u.speedScale,E=c*S/925,U=u.metrics.total>0?E/u.metrics.total:0;u.progress+=U,u.progress>=1&&(u.progress-=1,f())}function Tt(c){const h=u.view==="orbit";for(const g of fe){g.progress=(g.progress+c*.012*g.speed*u.speedScale)%1;const{position:S,tangent:E}=Se(g.metrics,g.progress);g.mesh.position.copy(S);const U=Math.atan2(E.x,E.z)+q;g._yaw==null?g._yaw=U:g._yaw+=he(g._yaw,U)*.15,g.mesh.rotation.set(0,g._yaw,0),g.mesh.visible=h}}function je(c){u.view=c,u.followReady=!1,n.enabled=c==="orbit"}function we(){const c=e.clientWidth||innerWidth,h=e.clientHeight||innerHeight;s.aspect=c/h,s.updateProjectionMatrix(),o.setSize(c,h,!1),b?.userData.resize?.(c,h),k?.userData.resize?.(c,h)}function Ge(c){u.elapsed+=c;const h=Math.min(.05,c);if(u.active&&u.metrics){_t(h);const{position:S,tangent:E}=Se(u.metrics,u.progress);_e(S,E),Mn(O,u.elapsed),(u.view==="follow"||u.view==="cab")&&Et(h)}Tt(h),u.layers.labels&&$.update(s),u.view==="orbit"&&n.update(),o.render(i,s)}function Pt(){if(!u.active||!u.metrics)return null;const{position:c}=Se(u.metrics,u.progress),h=dn(u.active.stops,c);return{train:u.active,progress:u.progress,stopIndex:h,km:(u.active.distanceKm||0)*u.progress}}const Ct=new Set(["hsr","conventional","expressway","borders","stations"]);function It(){je("orbit"),F(null);for(const c of Object.keys(u.layers))a(c,Ct.has(c));n.target.set(1.1,0,.35),s.position.set(1.35,7.2,6.8),s.fov=38,s.updateProjectionMatrix(),n.update();for(let c=0;c<6;c++)Ge(1/60)}return we(),addEventListener("resize",we),A.modelCredits=P,{meta:A,trains:L,highways:Array.isArray(x)?x:[],stations:y,selectTrain:F,selectHighway:re,preparePreviewShot:It,setLayer:a,setView:je,setSpeedScale(c){u.speedScale=c},setYawOffset(c){q=c},getActiveTrainMesh:()=>O,getView:()=>u.view,getStatus:Pt,update:Ge,resize:we,dispose(){removeEventListener("resize",we),$.dispose(),n.dispose(),o.dispose()}}}function zn(e,{trains:t,highways:i=[],onSelect:s,onSelectHighway:o,onView:n,onSpeed:l,onLayer:r}){const p=e.querySelector("#rail-list"),m=e.querySelector("#rail-q"),v=e.querySelector("#rail-modes"),y=e.querySelector("#rail-filters"),L=e.querySelector("#highway-filters"),A=e.querySelector("#rail-info"),d=e.querySelector("#rail-train-code"),w=e.querySelector("#rail-train-meta"),x=e.querySelector("#rail-views"),P=e.querySelector("#rail-speed"),z=e.querySelector("#rail-speed-val"),D=e.querySelector("#rail-toggles");let b="trains",J="all",Z="all",W="",G=null,$=null;const te=a=>a?`${Math.round(a)} km`:"";function V(a,f){for(const M of a.querySelectorAll("button"))M.classList.toggle("active",M===f)}function k(a,f,M){e.querySelector("#info-label-corridor").textContent=a,e.querySelector("#info-label-stops").textContent=f,e.querySelector("#info-label-progress").textContent=M}function ue({title:a,subtitle:f,od:M,corridor:j,km:F,stops:re,progress:he,stopListHtml:Q}){A.hidden=!1,d.textContent=a,w.textContent=f,e.querySelector("#info-code").textContent=a,e.querySelector("#info-od").textContent=M,e.querySelector("#info-corridor").textContent=j,e.querySelector("#info-km").textContent=F,e.querySelector("#info-stops").textContent=re,e.querySelector("#info-progress").textContent=he,e.querySelector("#info-stop-list").innerHTML=Q}function ne(a){A.hidden=!0,d.textContent="—",w.textContent=a}function O(a){return J!=="all"&&a.type!==J?!1:W?`${a.code} ${a.origin} ${a.destination} ${a.corridor}`.toLowerCase().includes(W):!0}function ae(a){return Z!=="all"&&a.kind!==Z?!1:W?`${a.code} ${a.name} ${a.origin} ${a.destination} ${a.kind} ${a.corridor}`.toLowerCase().includes(W):!0}function q(){if(b==="highways"){p.innerHTML=i.filter(ae).map(a=>`<li><button type="button" data-highway="${a.id}" class="${a.id===$?"active":""} is-highway">
          <span class="code hw">${a.code}</span>
          <span class="od">${a.name}<small>${a.kind||""} · ${a.origin} → ${a.destination} · ${te(a.distanceKm)}</small></span>
        </button></li>`).join("");return}p.innerHTML=t.filter(O).slice(0,180).map(a=>`<li><button type="button" data-id="${a.id}" class="${a.id===G?"active":""}">
          <span class="code">${a.code}</span>
          <span class="od">${a.origin} → ${a.destination}<small>${a.corridor||""} · ${te(a.distanceKm)}</small></span>
        </button></li>`).join("")}function R(a){b=a;for(const f of v.querySelectorAll("button"))f.classList.toggle("active",f.dataset.mode===b);y.hidden=b!=="trains",L.hidden=b!=="highways",m.placeholder=b==="highways"?"搜索高速编号 / 名称 / 城市…":"搜索车次 / 起终点 / 走廊…",q()}function H(a){if(!a){ne(b==="highways"?"选择一条高速公路查看走向":"选择一趟列车开始跟随");return}k("走廊","停站","进度"),ue({title:a.code,subtitle:`${a.origin} → ${a.destination}`,od:`${a.origin} → ${a.destination}`,corridor:a.corridor||"—",km:te(a.distanceKm)||"—",stops:`${a.stops?.length||0} 站`,progress:"—",stopListHtml:(a.stops||[]).map((f,M)=>`<li data-i="${M}"><span>${f.name}</span><time>${f.dep||f.arr||""}</time></li>`).join("")})}function ie(a){if(!a){ne("选择一条高速公路查看走向");return}k("类型","途经","走向"),ue({title:a.code,subtitle:a.name,od:`${a.origin} → ${a.destination}`,corridor:a.kind||"—",km:te(a.distanceKm)||"—",stops:`${a.cities?.length||0} 城`,progress:a.corridor||a.name,stopListHtml:(a.cities||[]).map((f,M)=>`<li data-i="${M}"><span>${f.name}</span><time>${f.order||M+1}</time></li>`).join("")})}function u(a,f,{id:M,dataAttr:j,show:F}){a==="highways"?($=f[M],G=null):(G=f[M],$=null),b!==a?R(a):q(),F(f),p.querySelector(`button[${j}="${f[M]}"]`)?.scrollIntoView({block:"nearest"})}function fe(a){for(const f of x.querySelectorAll("button"))f.classList.toggle("active",f.dataset.view===a)}p.addEventListener("click",a=>{const f=a.target.closest("button[data-highway]");if(f){const F=i.find(re=>re.id===f.dataset.highway);if(!F)return;$=F.id,G=null,q(),ie(F),o?.(F);return}const M=a.target.closest("button[data-id]");if(!M)return;const j=t.find(F=>F.id===M.dataset.id);j&&(G=j.id,$=null,q(),H(j),s?.(j))}),v.addEventListener("click",a=>{const f=a.target.closest("button[data-mode]");!f||f.dataset.mode===b||(R(f.dataset.mode),b==="highways"?ie(i.find(M=>M.id===$)||null):H(t.find(M=>M.id===G)||null))}),m.addEventListener("input",()=>{W=m.value.trim().toLowerCase(),q()}),y.addEventListener("click",a=>{const f=a.target.closest("button[data-type]");f&&(J=f.dataset.type,V(y,f),q())}),L.addEventListener("click",a=>{const f=a.target.closest("button[data-kind]");f&&(Z=f.dataset.kind,V(L,f),q())}),x.addEventListener("click",a=>{const f=a.target.closest("button[data-view]");f&&(V(x,f),n?.(f.dataset.view))}),P.addEventListener("input",()=>{const a=Number(P.value)/100;z.textContent=`×${a.toFixed(1)}`,l?.(a)}),D.addEventListener("change",a=>{const f=a.target.closest("input[data-layer]");f&&r?.(f.dataset.layer,f.checked)});function pe(a){if(b==="highways")return;if(!a){e.querySelector("#info-progress").textContent="—";return}const f=Math.round(a.progress*100);e.querySelector("#info-progress").textContent=`${f}% · ${Math.round(a.km)} km`,e.querySelectorAll("#info-stop-list li").forEach((M,j)=>{M.classList.toggle("is-current",j===a.stopIndex)})}return q(),H(null),{renderList:q,showInfo:H,showHighwayInfo:ie,updateStatus:pe,selectTrainInList(a){a&&u("trains",a,{id:"id",dataAttr:"data-id",show:H})},selectHighwayInList(a){a&&u("highways",a,{id:"id",dataAttr:"data-highway",show:ie})},setMode:R,setActiveView:fe,getMode:()=>b,getActiveId:()=>G,getActiveHighwayId:()=>$}}const Lt=document.getElementById("rail-app"),En=document.getElementById("rail-gl"),At=document.getElementById("rail-loader"),ut=document.getElementById("rail-loader-bar"),ft=document.getElementById("rail-loader-pct"),_n=document.getElementById("rail-credit");let pt=0;const Tn=11;function Pn(){pt+=1;const e=Math.min(100,Math.round(pt/Tn*100));ut&&(ut.style.width=`${e}%`),ft&&(ft.textContent=`${e}%`)}const T=await An(En,{onProgress:Pn}),Cn=(T.meta.modelCredits||[]).map(e=>`${e.title} © ${e.author}`).slice(0,2).join(" · ");_n.textContent=[...T.meta.sources.map(e=>e.name),Cn].filter(Boolean).join(" · ");const Ee=zn(Lt,{trains:T.trains,highways:T.highways,onSelect(e){T.selectTrain(e)},onSelectHighway(e){T.selectHighway(e),T.setView("orbit"),Ee.setActiveView("orbit")},onView(e){T.setView(e)},onSpeed(e){T.setSpeedScale(e)},onLayer(e,t){T.setLayer(e,t)}}),ke=T.trains.find(e=>e.code==="G2472")||T.trains.find(e=>e.code==="G1")||T.trains.find(e=>e.type==="G")||T.trains[0];At?.classList.add("is-done");setTimeout(()=>At?.remove(),600);ke&&(Ee.selectTrainInList(ke),T.selectTrain(ke).catch(e=>console.warn("选车失败",e)));window.__rail1={scene:T,ui:Ee,root:Lt};let ht=performance.now();function zt(e){const t=Math.min(.05,(e-ht)/1e3);ht=e,T.update(t),Ee.updateStatus(T.getStatus()),requestAnimationFrame(zt)}requestAnimationFrame(zt);
