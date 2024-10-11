import{B as X,V as O,M as H,F as R,u as Z,b as F,T as L,r as c,c as I,d as v,E as C,e as G,O as q,_ as J,f as K,g as Q,j as x,C as Y,L as V,h as tt,P as et,t as ot}from"./index-CHcXVIU2.js";import{S as rt}from"./SectionWrapper-Dlg8Hir4.js";class st extends X{constructor(m,y,f,T){super();const i=[],w=[],A=[],l=new O,M=new H;M.makeRotationFromEuler(f),M.setPosition(y);const k=new H;k.copy(M).invert(),B(),this.setAttribute("position",new R(i,3)),this.setAttribute("normal",new R(w,3)),this.setAttribute("uv",new R(A,2));function B(){let t,e=[];const r=new O,n=new O;if(m.geometry.isGeometry===!0){console.error("THREE.DecalGeometry no longer supports THREE.Geometry. Use BufferGeometry instead.");return}const s=m.geometry,E=s.attributes.position,b=s.attributes.normal;if(s.index!==null){const p=s.index;for(t=0;t<p.count;t++)r.fromBufferAttribute(E,p.getX(t)),n.fromBufferAttribute(b,p.getX(t)),j(e,r,n)}else for(t=0;t<E.count;t++)r.fromBufferAttribute(E,t),n.fromBufferAttribute(b,t),j(e,r,n);for(e=h(e,l.set(1,0,0)),e=h(e,l.set(-1,0,0)),e=h(e,l.set(0,1,0)),e=h(e,l.set(0,-1,0)),e=h(e,l.set(0,0,1)),e=h(e,l.set(0,0,-1)),t=0;t<e.length;t++){const p=e[t];A.push(.5+p.position.x/T.x,.5+p.position.y/T.y),p.position.applyMatrix4(M),i.push(p.position.x,p.position.y,p.position.z),w.push(p.normal.x,p.normal.y,p.normal.z)}}function j(t,e,r){e.applyMatrix4(m.matrixWorld),e.applyMatrix4(k),r.transformDirection(m.matrixWorld),t.push(new U(e.clone(),r.clone()))}function h(t,e){const r=[],n=.5*Math.abs(T.dot(e));for(let s=0;s<t.length;s+=3){let E,b,p,P=0,u,d,g,D;const _=t[s+0].position.dot(e)-n,N=t[s+1].position.dot(e)-n,$=t[s+2].position.dot(e)-n;switch(E=_>0,b=N>0,p=$>0,P=(E?1:0)+(b?1:0)+(p?1:0),P){case 0:{r.push(t[s]),r.push(t[s+1]),r.push(t[s+2]);break}case 1:{if(E&&(u=t[s+1],d=t[s+2],g=a(t[s],u,e,n),D=a(t[s],d,e,n)),b){u=t[s],d=t[s+2],g=a(t[s+1],u,e,n),D=a(t[s+1],d,e,n),r.push(g),r.push(d.clone()),r.push(u.clone()),r.push(d.clone()),r.push(g.clone()),r.push(D);break}p&&(u=t[s],d=t[s+1],g=a(t[s+2],u,e,n),D=a(t[s+2],d,e,n)),r.push(u.clone()),r.push(d.clone()),r.push(g),r.push(D),r.push(g.clone()),r.push(d.clone());break}case 2:{E||(u=t[s].clone(),d=a(u,t[s+1],e,n),g=a(u,t[s+2],e,n),r.push(u),r.push(d),r.push(g)),b||(u=t[s+1].clone(),d=a(u,t[s+2],e,n),g=a(u,t[s],e,n),r.push(u),r.push(d),r.push(g)),p||(u=t[s+2].clone(),d=a(u,t[s],e,n),g=a(u,t[s+1],e,n),r.push(u),r.push(d),r.push(g));break}}}return r}function a(t,e,r,n){const s=t.position.dot(r)-n,E=e.position.dot(r)-n,b=s/(s-E);return new U(new O(t.position.x+b*(e.position.x-t.position.x),t.position.y+b*(e.position.y-t.position.y),t.position.z+b*(e.position.z-t.position.z)),new O(t.normal.x+b*(e.normal.x-t.normal.x),t.normal.y+b*(e.normal.y-t.normal.y),t.normal.z+b*(e.normal.z-t.normal.z)))}}}class U{constructor(m,y){this.position=m,this.normal=y}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}const z=o=>o===Object(o)&&!Array.isArray(o)&&typeof o!="function";function W(o,m){const y=Z(i=>i.gl),f=F(L,z(o)?Object.values(o):o);return c.useLayoutEffect(()=>{m==null||m(f)},[m]),c.useEffect(()=>{if("initTexture"in y){let i=[];Array.isArray(f)?i=f:f instanceof I?i=[f]:z(f)&&(i=Object.values(f)),i.forEach(w=>{w instanceof I&&y.initTexture(w)})}},[y,f]),c.useMemo(()=>{if(z(o)){const i={};let w=0;for(const A in o)i[A]=f[w++];return i}else return f},[o,f])}W.preload=o=>F.preload(L,o);W.clear=o=>F.clear(L,o);function nt(o){return Array.isArray(o)}function S(o=[0,0,0]){return nt(o)?o:o instanceof O||o instanceof C?[o.x,o.y,o.z]:[o,o,o]}const at=c.forwardRef(function({debug:m,depthTest:y=!1,polygonOffsetFactor:f=-10,map:T,mesh:i,children:w,position:A,rotation:l,scale:M,...k},B){const j=c.useRef(null);c.useImperativeHandle(B,()=>j.current);const h=c.useRef(null);return c.useLayoutEffect(()=>{const a=(i==null?void 0:i.current)||j.current.parent,t=j.current;if(!(a instanceof v))throw new Error('Decal must have a Mesh as parent or specify its "mesh" prop');const e={position:new O,rotation:new C,scale:new O(1,1,1)};if(a){G(e,{position:A,scale:M});const r=a.matrixWorld.clone();if(a.matrixWorld.identity(),!l||typeof l=="number"){const n=new q;n.position.copy(e.position),n.lookAt(a.position),typeof l=="number"&&n.rotateZ(l),G(e,{rotation:n.rotation})}else G(e,{rotation:l});return t.geometry=new st(a,e.position,e.rotation,e.scale),h.current&&(G(h.current,e),h.current.traverse(n=>n.raycast=()=>null)),a.matrixWorld=r,()=>{t.geometry.dispose()}}},[i,...S(A),...S(M),...S(l)]),c.createElement("mesh",J({ref:j,"material-transparent":!0,"material-polygonOffset":!0,"material-polygonOffsetFactor":f,"material-depthTest":y,"material-map":T},k),w,m&&c.createElement("mesh",{ref:h},c.createElement("boxGeometry",null),c.createElement("meshNormalMaterial",{wireframe:!0}),c.createElement("axesHelper",null)))}),it=c.forwardRef(({children:o,enabled:m=!0,speed:y=1,rotationIntensity:f=1,floatIntensity:T=1,floatingRange:i=[-.1,.1],...w},A)=>{const l=c.useRef(null);c.useImperativeHandle(A,()=>l.current,[]);const M=c.useRef(Math.random()*1e4);return K(k=>{var B,j;if(!m||y===0)return;const h=M.current+k.clock.getElapsedTime();l.current.rotation.x=Math.cos(h/4*y)/8*f,l.current.rotation.y=Math.sin(h/4*y)/8*f,l.current.rotation.z=Math.sin(h/4*y)/20*f;let a=Math.sin(h/4*y)/10;a=Q.mapLinear(a,-.1,.1,(B=i==null?void 0:i[0])!==null&&B!==void 0?B:-.1,(j=i==null?void 0:i[1])!==null&&j!==void 0?j:.1),l.current.position.y=a*T,l.current.updateMatrix()}),c.createElement("group",w,c.createElement("group",{ref:l,matrixAutoUpdate:!1},o))}),lt=o=>{const[m]=W([o.imgUrl]);return x.jsxs(it,{speed:1.75,rotationIntensity:1,floatIntensity:2,children:[x.jsx("ambientLight",{intensity:.5}),x.jsx("directionalLight",{position:[0,0,.05]}),x.jsxs("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75,children:[x.jsx("icosahedronGeometry",{args:[1,1]}),x.jsx("meshStandardMaterial",{color:"#fff8eb",polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),x.jsx(at,{position:[0,0,1],flatShading:!0,rotation:[2*Math.PI,0,6.25],map:m})]})]})},ut=({icon:o})=>x.jsxs(Y,{frameloop:"demand",gl:{preserveDrawingBuffer:!0},children:[x.jsxs(c.Suspense,{fallback:x.jsx(V,{}),children:[x.jsx(tt,{enableZoom:!1}),x.jsx(lt,{imgUrl:o})]}),x.jsx(et,{all:!0})]}),ct=()=>x.jsx("div",{className:"flex flex-row flex-wrap justify-center gap-10",children:ot.map(o=>x.jsx("div",{className:"w-28 h-28",children:x.jsx(ut,{icon:o.icon})},o.name))}),mt=rt(ct,"");export{mt as default};
