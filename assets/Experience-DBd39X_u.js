import{r as y,i as G,j as d,m as J,s as $,k as Q}from"./index-CHcXVIU2.js";import{S as X,t as Z}from"./SectionWrapper-Dlg8Hir4.js";var F={exports:{}},ee="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",te=ee,ne=te;function D(){}function U(){}U.resetWarningCache=D;var re=function(){function e(a,t,r,s,o,c){if(c!==ne){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:U,resetWarningCache:D};return i.PropTypes=i,i};F.exports=re();var q=F.exports,T={},B={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function i(){for(var r="",s=0;s<arguments.length;s++){var o=arguments[s];o&&(r=t(r,a(o)))}return r}function a(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return i.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var s="";for(var o in r)n.call(r,o)&&r[o]&&(s=t(s,o));return s}function t(r,s){return s?r?r+" "+s:r+s:r}e.exports?(i.default=i,e.exports=i):window.classNames=i})()})(B);var L=B.exports;T.__esModule=!0;T.default=void 0;var ie=R(y),m=R(q),ae=R(L);function R(e){return e&&e.__esModule?e:{default:e}}const z=({animate:e=!0,className:n="",layout:i="2-columns",lineColor:a="#FFF",children:t})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",a),ie.default.createElement("div",{className:(0,ae.default)(n,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":i==="2-columns","vertical-timeline--one-column-left":i==="1-column"||i==="1-column-left","vertical-timeline--one-column-right":i==="1-column-right"})},t));z.propTypes={children:m.default.oneOfType([m.default.arrayOf(m.default.node),m.default.node]).isRequired,className:m.default.string,animate:m.default.bool,layout:m.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:m.default.string};var oe=z;T.default=oe;var N={};function k(){return k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},k.apply(this,arguments)}function se(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,I(e,n)}function I(e,n){return I=Object.setPrototypeOf||function(a,t){return a.__proto__=t,a},I(e,n)}function le(e,n){if(e==null)return{};var i={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&(i[t]=e[t]);return i}var j=new Map,O=new WeakMap,W=0,H=void 0;function ce(e){H=e}function ue(e){return e?(O.has(e)||(W+=1,O.set(e,W.toString())),O.get(e)):"0"}function de(e){return Object.keys(e).sort().filter(function(n){return e[n]!==void 0}).map(function(n){return n+"_"+(n==="root"?ue(e.root):e[n])}).toString()}function fe(e){var n=de(e),i=j.get(n);if(!i){var a=new Map,t,r=new IntersectionObserver(function(s){s.forEach(function(o){var c,u=o.isIntersecting&&t.some(function(f){return o.intersectionRatio>=f});e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=u),(c=a.get(o.target))==null||c.forEach(function(f){f(u,o)})})},e);t=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:n,observer:r,elements:a},j.set(n,i)}return i}function C(e,n,i,a){if(i===void 0&&(i={}),a===void 0&&(a=H),typeof window.IntersectionObserver>"u"&&a!==void 0){var t=e.getBoundingClientRect();return n(a,{isIntersecting:a,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:t,intersectionRect:t,rootBounds:t}),function(){}}var r=fe(i),s=r.id,o=r.observer,c=r.elements,u=c.get(e)||[];return c.has(e)||c.set(e,u),u.push(n),o.observe(e),function(){u.splice(u.indexOf(n),1),u.length===0&&(c.delete(e),o.unobserve(e)),c.size===0&&(o.disconnect(),j.delete(s))}}var pe=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function A(e){return typeof e.children!="function"}var V=function(e){se(n,e);function n(a){var t;return t=e.call(this,a)||this,t.node=null,t._unobserveCb=null,t.handleNode=function(r){t.node&&(t.unobserve(),!r&&!t.props.triggerOnce&&!t.props.skip&&t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=r||null,t.observeNode()},t.handleChange=function(r,s){r&&t.props.triggerOnce&&t.unobserve(),A(t.props)||t.setState({inView:r,entry:s}),t.props.onChange&&t.props.onChange(r,s)},t.state={inView:!!a.initialInView,entry:void 0},t}var i=n.prototype;return i.componentDidUpdate=function(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(!(!this.node||this.props.skip)){var t=this.props,r=t.threshold,s=t.root,o=t.rootMargin,c=t.trackVisibility,u=t.delay,f=t.fallbackInView;this._unobserveCb=C(this.node,this.handleChange,{threshold:r,root:s,rootMargin:o,trackVisibility:c,delay:u},f)}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!A(this.props)){var t=this.state,r=t.inView,s=t.entry;return this.props.children({inView:r,entry:s,ref:this.handleNode})}var o=this.props,c=o.children,u=o.as,f=le(o,pe);return y.createElement(u||"div",k({ref:this.handleNode},f),c)},n}(y.Component);V.displayName="InView";V.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function he(e){var n=e===void 0?{}:e,i=n.threshold,a=n.delay,t=n.trackVisibility,r=n.rootMargin,s=n.root,o=n.triggerOnce,c=n.skip,u=n.initialInView,f=n.fallbackInView,h=y.useRef(),b=y.useState({inView:!!u}),_=b[0],x=b[1],S=y.useCallback(function(g){h.current!==void 0&&(h.current(),h.current=void 0),!c&&g&&(h.current=C(g,function(E,P){x({inView:E,entry:P}),P.isIntersecting&&o&&h.current&&(h.current(),h.current=void 0)},{root:s,rootMargin:r,threshold:i,trackVisibility:t,delay:a},f))},[Array.isArray(i)?i.toString():i,s,r,o,c,t,f,a]);y.useEffect(function(){!h.current&&_.entry&&!o&&!c&&x({inView:!!u})});var p=[S,_.inView,_.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const me=Object.freeze(Object.defineProperty({__proto__:null,InView:V,default:V,defaultFallbackInView:ce,observe:C,useInView:he},Symbol.toStringTag,{value:"Module"})),ve=G(me);N.__esModule=!0;N.default=void 0;var v=M(y),l=M(q),w=M(L),ye=ve;function M(e){return e&&e.__esModule?e:{default:e}}const K=({children:e="",className:n="",contentArrowStyle:i=null,contentStyle:a=null,date:t="",dateClassName:r="",icon:s=null,iconClassName:o="",iconOnClick:c=null,onTimelineElementClick:u=null,iconStyle:f=null,id:h="",position:b="",style:_=null,textClassName:x="",intersectionObserverProps:S={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:p=!1})=>v.default.createElement(ye.InView,S,({inView:g,ref:E})=>v.default.createElement("div",{ref:E,id:h,className:(0,w.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":b==="left","vertical-timeline-element--right":b==="right","vertical-timeline-element--no-children":e===""}),style:_},v.default.createElement(v.default.Fragment,null,v.default.createElement("span",{style:f,onClick:c,className:(0,w.default)(o,"vertical-timeline-element-icon",{"bounce-in":g||p,"is-hidden":!(g||p)})},s),v.default.createElement("div",{style:a,onClick:u,className:(0,w.default)(x,"vertical-timeline-element-content",{"bounce-in":g||p,"is-hidden":!(g||p)})},v.default.createElement("div",{style:i,className:"vertical-timeline-element-content-arrow"}),e,v.default.createElement("span",{className:(0,w.default)(r,"vertical-timeline-element-date")},t)))));K.propTypes={children:l.default.oneOfType([l.default.arrayOf(l.default.node),l.default.node]),className:l.default.string,contentArrowStyle:l.default.shape({}),contentStyle:l.default.shape({}),date:l.default.node,dateClassName:l.default.string,icon:l.default.element,iconClassName:l.default.string,iconStyle:l.default.shape({}),iconOnClick:l.default.func,onTimelineElementClick:l.default.func,id:l.default.string,position:l.default.string,style:l.default.shape({}),textClassName:l.default.string,visible:l.default.bool,intersectionObserverProps:l.default.shape({root:l.default.object,rootMargin:l.default.string,threshold:l.default.number,triggerOnce:l.default.bool})};var ge=K;N.default=ge;var Y={VerticalTimeline:T.default,VerticalTimelineElement:N.default};const be=({experience:e})=>d.jsxs(Y.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #232631"},date:e.date,iconStyle:{background:e.iconBg},icon:d.jsx("div",{className:"flex justify-center items-center w-full h-full",children:d.jsx("img",{src:e.icon,alt:e.company_name,className:"w-[60%] h-[60%] object-contain"})}),children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-white text-[24px] font-bold",children:e.title}),d.jsx("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:e.company_name})]}),d.jsx("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:e.points.map((n,i)=>d.jsx("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:n},`experience-point-${i}`))})]}),_e=()=>d.jsxs(d.Fragment,{children:[d.jsxs(J.div,{variants:Z(),children:[d.jsx("p",{className:$.sectionSubText,children:"What I have done so far"}),d.jsx("h2",{className:$.sectionHeadText,children:"Work Experience"})]}),d.jsx("div",{className:"mt-20 flex flex-col",children:d.jsx(Y.VerticalTimeline,{children:Q.map((e,n)=>d.jsx(be,{experience:e},n))})})]}),we=X(_e,"work");export{we as default};
