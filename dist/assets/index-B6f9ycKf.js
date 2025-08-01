(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function oA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lw={exports:{}},Qu={},Ow={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),aA=Symbol.for("react.portal"),lA=Symbol.for("react.fragment"),uA=Symbol.for("react.strict_mode"),cA=Symbol.for("react.profiler"),hA=Symbol.for("react.provider"),dA=Symbol.for("react.context"),fA=Symbol.for("react.forward_ref"),pA=Symbol.for("react.suspense"),mA=Symbol.for("react.memo"),gA=Symbol.for("react.lazy"),wy=Symbol.iterator;function yA(t){return t===null||typeof t!="object"?null:(t=wy&&t[wy]||t["@@iterator"],typeof t=="function"?t:null)}var jw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fw=Object.assign,zw={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=zw,this.updater=n||jw}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bw(){}Bw.prototype=Vs.prototype;function lp(t,e,n){this.props=t,this.context=e,this.refs=zw,this.updater=n||jw}var up=lp.prototype=new Bw;up.constructor=lp;Fw(up,Vs.prototype);up.isPureReactComponent=!0;var _y=Array.isArray,Uw=Object.prototype.hasOwnProperty,cp={current:null},Hw={key:!0,ref:!0,__self:!0,__source:!0};function Ww(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Uw.call(e,r)&&!Hw.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:xa,type:t,key:s,ref:o,props:i,_owner:cp.current}}function vA(t,e){return{$$typeof:xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hp(t){return typeof t=="object"&&t!==null&&t.$$typeof===xa}function wA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ey=/\/+/g;function nh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wA(""+t.key):e.toString(36)}function Cl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xa:case aA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nh(o,0):r,_y(i)?(n="",t!=null&&(n=t.replace(Ey,"$&/")+"/"),Cl(i,e,n,"",function(c){return c})):i!=null&&(hp(i)&&(i=vA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ey,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_y(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+nh(s,l);o+=Cl(s,e,n,u,i)}else if(u=yA(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+nh(s,l++),o+=Cl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ja(t,e,n){if(t==null)return t;var r=[],i=0;return Cl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _A(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},Pl={transition:null},EA={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:cp};function qw(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!hp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Vs;te.Fragment=lA;te.Profiler=cA;te.PureComponent=lp;te.StrictMode=uA;te.Suspense=pA;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EA;te.act=qw;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Fw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Uw.call(e,u)&&!Hw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:xa,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:dA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hA,_context:t},t.Consumer=t};te.createElement=Ww;te.createFactory=function(t){var e=Ww.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:fA,render:t}};te.isValidElement=hp;te.lazy=function(t){return{$$typeof:gA,_payload:{_status:-1,_result:t},_init:_A}};te.memo=function(t,e){return{$$typeof:mA,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Pl.transition;Pl.transition={};try{t()}finally{Pl.transition=e}};te.unstable_act=qw;te.useCallback=function(t,e){return At.current.useCallback(t,e)};te.useContext=function(t){return At.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return At.current.useDeferredValue(t)};te.useEffect=function(t,e){return At.current.useEffect(t,e)};te.useId=function(){return At.current.useId()};te.useImperativeHandle=function(t,e,n){return At.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return At.current.useMemo(t,e)};te.useReducer=function(t,e,n){return At.current.useReducer(t,e,n)};te.useRef=function(t){return At.current.useRef(t)};te.useState=function(t){return At.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return At.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return At.current.useTransition()};te.version="18.3.1";Ow.exports=te;var U=Ow.exports;const hn=oA(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xA=U,TA=Symbol.for("react.element"),SA=Symbol.for("react.fragment"),AA=Object.prototype.hasOwnProperty,IA=xA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CA={key:!0,ref:!0,__self:!0,__source:!0};function Gw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)AA.call(e,r)&&!CA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:TA,type:t,key:s,ref:o,props:i,_owner:IA.current}}Qu.Fragment=SA;Qu.jsx=Gw;Qu.jsxs=Gw;Lw.exports=Qu;var A=Lw.exports,Kw={exports:{}},Ut={},Qw={exports:{}},Yw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var Q=B.length;B.push(K);e:for(;0<Q;){var de=Q-1>>>1,ne=B[de];if(0<i(ne,K))B[de]=K,B[Q]=ne,Q=de;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],Q=B.pop();if(Q!==K){B[0]=Q;e:for(var de=0,ne=B.length,Ee=ne>>>1;de<Ee;){var $t=2*(de+1)-1,Ct=B[$t],vt=$t+1,Pt=B[vt];if(0>i(Ct,Q))vt<ne&&0>i(Pt,Ct)?(B[de]=Pt,B[vt]=Q,de=vt):(B[de]=Ct,B[$t]=Q,de=$t);else if(vt<ne&&0>i(Pt,Q))B[de]=Pt,B[vt]=Q,de=vt;else break e}}return K}function i(B,K){var Q=B.sortIndex-K.sortIndex;return Q!==0?Q:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],h=1,f=null,p=3,w=!1,I=!1,P=!1,V=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=B)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function b(B){if(P=!1,T(B),!I)if(n(u)!==null)I=!0,Jn(M);else{var K=n(c);K!==null&&he(b,K.startTime-B)}}function M(B,K){I=!1,P&&(P=!1,x(y),y=-1),w=!0;var Q=p;try{for(T(K),f=n(u);f!==null&&(!(f.expirationTime>K)||B&&!k());){var de=f.callback;if(typeof de=="function"){f.callback=null,p=f.priorityLevel;var ne=de(f.expirationTime<=K);K=t.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(u)&&r(u),T(K)}else r(u);f=n(u)}if(f!==null)var Ee=!0;else{var $t=n(c);$t!==null&&he(b,$t.startTime-K),Ee=!1}return Ee}finally{f=null,p=Q,w=!1}}var $=!1,E=null,y=-1,S=5,C=-1;function k(){return!(t.unstable_now()-C<S)}function D(){if(E!==null){var B=t.unstable_now();C=B;var K=!0;try{K=E(!0,B)}finally{K?R():($=!1,E=null)}}else $=!1}var R;if(typeof v=="function")R=function(){v(D)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,Wt=Je.port2;Je.port1.onmessage=D,R=function(){Wt.postMessage(null)}}else R=function(){V(D,0)};function Jn(B){E=B,$||($=!0,R())}function he(B,K){y=V(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){I||w||(I=!0,Jn(M))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(p){case 1:case 2:case 3:var K=3;break;default:K=p}var Q=p;p=K;try{return B()}finally{p=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=p;p=B;try{return K()}finally{p=Q}},t.unstable_scheduleCallback=function(B,K,Q){var de=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?de+Q:de):Q=de,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Q+ne,B={id:h++,callback:K,priorityLevel:B,startTime:Q,expirationTime:ne,sortIndex:-1},Q>de?(B.sortIndex=Q,e(c,B),n(u)===null&&B===n(c)&&(P?(x(y),y=-1):P=!0,he(b,Q-de))):(B.sortIndex=ne,e(u,B),I||w||(I=!0,Jn(M))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var K=p;return function(){var Q=p;p=K;try{return B.apply(this,arguments)}finally{p=Q}}}})(Yw);Qw.exports=Yw;var PA=Qw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RA=U,Bt=PA;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xw=new Set,Ho={};function Ei(t,e){hs(t,e),hs(t+"Capture",e)}function hs(t,e){for(Ho[t]=e,t=0;t<e.length;t++)Xw.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),md=Object.prototype.hasOwnProperty,kA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xy={},Ty={};function bA(t){return md.call(Ty,t)?!0:md.call(xy,t)?!1:kA.test(t)?Ty[t]=!0:(xy[t]=!0,!1)}function VA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DA(t,e,n,r){if(e===null||typeof e>"u"||VA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var dp=/[\-:]([a-z])/g;function fp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dp,fp);it[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dp,fp);it[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dp,fp);it[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function pp(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DA(e,n,i,r)&&(n=null),r||i===null?bA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=RA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),Ni=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),gd=Symbol.for("react.profiler"),Jw=Symbol.for("react.provider"),Zw=Symbol.for("react.context"),gp=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),yp=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),e_=Symbol.for("react.offscreen"),Sy=Symbol.iterator;function io(t){return t===null||typeof t!="object"?null:(t=Sy&&t[Sy]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,rh;function mo(t){if(rh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rh=e&&e[1]||""}return`
`+rh+t}var ih=!1;function sh(t,e){if(!t||ih)return"";ih=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ih=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mo(t):""}function NA(t){switch(t.tag){case 5:return mo(t.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return t=sh(t.type,!1),t;case 11:return t=sh(t.type.render,!1),t;case 1:return t=sh(t.type,!0),t;default:return""}}function wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mi:return"Fragment";case Ni:return"Portal";case gd:return"Profiler";case mp:return"StrictMode";case yd:return"Suspense";case vd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zw:return(t.displayName||"Context")+".Consumer";case Jw:return(t._context.displayName||"Context")+".Provider";case gp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yp:return e=t.displayName||null,e!==null?e:wd(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return wd(t(e))}catch{}}return null}function MA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wd(e);case 8:return e===mp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function t_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $A(t){var e=t_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function el(t){t._valueTracker||(t._valueTracker=$A(t))}function n_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=t_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _d(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ay(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r_(t,e){e=e.checked,e!=null&&pp(t,"checked",e,!1)}function Ed(t,e){r_(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&xd(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Iy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xd(t,e,n){(e!=="number"||Zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var go=Array.isArray;function Ji(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Td(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(go(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function i_(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Py(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function s_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?s_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tl,o_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},LA=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){LA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function a_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function l_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=a_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var OA=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ad(t,e){if(e){if(OA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Id(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cd=null;function vp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pd=null,Zi=null,es=null;function Ry(t){if(t=Aa(t)){if(typeof Pd!="function")throw Error(F(280));var e=t.stateNode;e&&(e=ec(e),Pd(t.stateNode,t.type,e))}}function u_(t){Zi?es?es.push(t):es=[t]:Zi=t}function c_(){if(Zi){var t=Zi,e=es;if(es=Zi=null,Ry(t),e)for(t=0;t<e.length;t++)Ry(e[t])}}function h_(t,e){return t(e)}function d_(){}var oh=!1;function f_(t,e,n){if(oh)return t(e,n);oh=!0;try{return h_(t,e,n)}finally{oh=!1,(Zi!==null||es!==null)&&(d_(),c_())}}function qo(t,e){var n=t.stateNode;if(n===null)return null;var r=ec(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Rd=!1;if(Un)try{var so={};Object.defineProperty(so,"passive",{get:function(){Rd=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Rd=!1}function jA(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ao=!1,eu=null,tu=!1,kd=null,FA={onError:function(t){Ao=!0,eu=t}};function zA(t,e,n,r,i,s,o,l,u){Ao=!1,eu=null,jA.apply(FA,arguments)}function BA(t,e,n,r,i,s,o,l,u){if(zA.apply(this,arguments),Ao){if(Ao){var c=eu;Ao=!1,eu=null}else throw Error(F(198));tu||(tu=!0,kd=c)}}function xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function p_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ky(t){if(xi(t)!==t)throw Error(F(188))}function UA(t){var e=t.alternate;if(!e){if(e=xi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ky(i),t;if(s===r)return ky(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function m_(t){return t=UA(t),t!==null?g_(t):null}function g_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=g_(t);if(e!==null)return e;t=t.sibling}return null}var y_=Bt.unstable_scheduleCallback,by=Bt.unstable_cancelCallback,HA=Bt.unstable_shouldYield,WA=Bt.unstable_requestPaint,$e=Bt.unstable_now,qA=Bt.unstable_getCurrentPriorityLevel,wp=Bt.unstable_ImmediatePriority,v_=Bt.unstable_UserBlockingPriority,nu=Bt.unstable_NormalPriority,GA=Bt.unstable_LowPriority,w_=Bt.unstable_IdlePriority,Yu=null,Tn=null;function KA(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(Yu,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:XA,QA=Math.log,YA=Math.LN2;function XA(t){return t>>>=0,t===0?32:31-(QA(t)/YA|0)|0}var nl=64,rl=4194304;function yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ru(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=yo(l):(s&=o,s!==0&&(r=yo(s)))}else o=n&~i,o!==0?r=yo(o):s!==0&&(r=yo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),i=1<<n,r|=t[n],e&=~i;return r}function JA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=JA(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function bd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function __(){var t=nl;return nl<<=1,!(nl&4194240)&&(nl=64),t}function ah(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function eI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function _p(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function E_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var x_,Ep,T_,S_,A_,Vd=!1,il=[],pr=null,mr=null,gr=null,Go=new Map,Ko=new Map,lr=[],tI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vy(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function oo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Aa(e),e!==null&&Ep(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nI(t,e,n,r,i){switch(e){case"focusin":return pr=oo(pr,t,e,n,r,i),!0;case"dragenter":return mr=oo(mr,t,e,n,r,i),!0;case"mouseover":return gr=oo(gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Go.set(s,oo(Go.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ko.set(s,oo(Ko.get(s)||null,t,e,n,r,i)),!0}return!1}function I_(t){var e=Xr(t.target);if(e!==null){var n=xi(e);if(n!==null){if(e=n.tag,e===13){if(e=p_(n),e!==null){t.blockedOn=e,A_(t.priority,function(){T_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cd=r,n.target.dispatchEvent(r),Cd=null}else return e=Aa(n),e!==null&&Ep(e),t.blockedOn=n,!1;e.shift()}return!0}function Dy(t,e,n){Rl(t)&&n.delete(e)}function rI(){Vd=!1,pr!==null&&Rl(pr)&&(pr=null),mr!==null&&Rl(mr)&&(mr=null),gr!==null&&Rl(gr)&&(gr=null),Go.forEach(Dy),Ko.forEach(Dy)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,Vd||(Vd=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,rI)))}function Qo(t){function e(i){return ao(i,t)}if(0<il.length){ao(il[0],t);for(var n=1;n<il.length;n++){var r=il[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pr!==null&&ao(pr,t),mr!==null&&ao(mr,t),gr!==null&&ao(gr,t),Go.forEach(e),Ko.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)I_(n),n.blockedOn===null&&lr.shift()}var ts=Xn.ReactCurrentBatchConfig,iu=!0;function iI(t,e,n,r){var i=pe,s=ts.transition;ts.transition=null;try{pe=1,xp(t,e,n,r)}finally{pe=i,ts.transition=s}}function sI(t,e,n,r){var i=pe,s=ts.transition;ts.transition=null;try{pe=4,xp(t,e,n,r)}finally{pe=i,ts.transition=s}}function xp(t,e,n,r){if(iu){var i=Dd(t,e,n,r);if(i===null)yh(t,e,r,su,n),Vy(t,r);else if(nI(i,t,e,n,r))r.stopPropagation();else if(Vy(t,r),e&4&&-1<tI.indexOf(t)){for(;i!==null;){var s=Aa(i);if(s!==null&&x_(s),s=Dd(t,e,n,r),s===null&&yh(t,e,r,su,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yh(t,e,r,null,n)}}var su=null;function Dd(t,e,n,r){if(su=null,t=vp(r),t=Xr(t),t!==null)if(e=xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=p_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return su=t,null}function C_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qA()){case wp:return 1;case v_:return 4;case nu:case GA:return 16;case w_:return 536870912;default:return 16}default:return 16}}var cr=null,Tp=null,kl=null;function P_(){if(kl)return kl;var t,e=Tp,n=e.length,r,i="value"in cr?cr.value:cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return kl=i.slice(t,1<r?1-r:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function Ny(){return!1}function Ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sl:Ny,this.isPropagationStopped=Ny,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sp=Ht(Ds),Sa=ke({},Ds,{view:0,detail:0}),oI=Ht(Sa),lh,uh,lo,Xu=ke({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(lh=t.screenX-lo.screenX,uh=t.screenY-lo.screenY):uh=lh=0,lo=t),lh)},movementY:function(t){return"movementY"in t?t.movementY:uh}}),My=Ht(Xu),aI=ke({},Xu,{dataTransfer:0}),lI=Ht(aI),uI=ke({},Sa,{relatedTarget:0}),ch=Ht(uI),cI=ke({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),hI=Ht(cI),dI=ke({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fI=Ht(dI),pI=ke({},Ds,{data:0}),$y=Ht(pI),mI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yI[t])?!!e[t]:!1}function Ap(){return vI}var wI=ke({},Sa,{key:function(t){if(t.key){var e=mI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ap,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_I=Ht(wI),EI=ke({},Xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ly=Ht(EI),xI=ke({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ap}),TI=Ht(xI),SI=ke({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),AI=Ht(SI),II=ke({},Xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CI=Ht(II),PI=[9,13,27,32],Ip=Un&&"CompositionEvent"in window,Io=null;Un&&"documentMode"in document&&(Io=document.documentMode);var RI=Un&&"TextEvent"in window&&!Io,R_=Un&&(!Ip||Io&&8<Io&&11>=Io),Oy=" ",jy=!1;function k_(t,e){switch(t){case"keyup":return PI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $i=!1;function kI(t,e){switch(t){case"compositionend":return b_(e);case"keypress":return e.which!==32?null:(jy=!0,Oy);case"textInput":return t=e.data,t===Oy&&jy?null:t;default:return null}}function bI(t,e){if($i)return t==="compositionend"||!Ip&&k_(t,e)?(t=P_(),kl=Tp=cr=null,$i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R_&&e.locale!=="ko"?null:e.data;default:return null}}var VI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!VI[t.type]:e==="textarea"}function V_(t,e,n,r){u_(r),e=ou(e,"onChange"),0<e.length&&(n=new Sp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Co=null,Yo=null;function DI(t){U_(t,0)}function Ju(t){var e=ji(t);if(n_(e))return t}function NI(t,e){if(t==="change")return e}var D_=!1;if(Un){var hh;if(Un){var dh="oninput"in document;if(!dh){var zy=document.createElement("div");zy.setAttribute("oninput","return;"),dh=typeof zy.oninput=="function"}hh=dh}else hh=!1;D_=hh&&(!document.documentMode||9<document.documentMode)}function By(){Co&&(Co.detachEvent("onpropertychange",N_),Yo=Co=null)}function N_(t){if(t.propertyName==="value"&&Ju(Yo)){var e=[];V_(e,Yo,t,vp(t)),f_(DI,e)}}function MI(t,e,n){t==="focusin"?(By(),Co=e,Yo=n,Co.attachEvent("onpropertychange",N_)):t==="focusout"&&By()}function $I(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ju(Yo)}function LI(t,e){if(t==="click")return Ju(e)}function OI(t,e){if(t==="input"||t==="change")return Ju(e)}function jI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mn=typeof Object.is=="function"?Object.is:jI;function Xo(t,e){if(mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!md.call(e,i)||!mn(t[i],e[i]))return!1}return!0}function Uy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hy(t,e){var n=Uy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uy(n)}}function M_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?M_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $_(){for(var t=window,e=Zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zl(t.document)}return e}function Cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FI(t){var e=$_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&M_(n.ownerDocument.documentElement,n)){if(r!==null&&Cp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hy(n,s);var o=Hy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zI=Un&&"documentMode"in document&&11>=document.documentMode,Li=null,Nd=null,Po=null,Md=!1;function Wy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Md||Li==null||Li!==Zl(r)||(r=Li,"selectionStart"in r&&Cp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Xo(Po,r)||(Po=r,r=ou(Nd,"onSelect"),0<r.length&&(e=new Sp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Li)))}function ol(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Oi={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},fh={},L_={};Un&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function Zu(t){if(fh[t])return fh[t];if(!Oi[t])return t;var e=Oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in L_)return fh[t]=e[n];return t}var O_=Zu("animationend"),j_=Zu("animationiteration"),F_=Zu("animationstart"),z_=Zu("transitionend"),B_=new Map,qy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,e){B_.set(t,e),Ei(e,[t])}for(var ph=0;ph<qy.length;ph++){var mh=qy[ph],BI=mh.toLowerCase(),UI=mh[0].toUpperCase()+mh.slice(1);$r(BI,"on"+UI)}$r(O_,"onAnimationEnd");$r(j_,"onAnimationIteration");$r(F_,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(z_,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HI=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function Gy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,BA(r,e,void 0,t),t.currentTarget=null}function U_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Gy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Gy(i,l,c),s=u}}}if(tu)throw t=kd,tu=!1,kd=null,t}function ve(t,e){var n=e[Fd];n===void 0&&(n=e[Fd]=new Set);var r=t+"__bubble";n.has(r)||(H_(e,t,2,!1),n.add(r))}function gh(t,e,n){var r=0;e&&(r|=4),H_(n,t,r,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function Jo(t){if(!t[al]){t[al]=!0,Xw.forEach(function(n){n!=="selectionchange"&&(HI.has(n)||gh(n,!1,t),gh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,gh("selectionchange",!1,e))}}function H_(t,e,n,r){switch(C_(e)){case 1:var i=iI;break;case 4:i=sI;break;default:i=xp}n=i.bind(null,e,n,t),i=void 0,!Rd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function yh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Xr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}f_(function(){var c=s,h=vp(n),f=[];e:{var p=B_.get(t);if(p!==void 0){var w=Sp,I=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":w=_I;break;case"focusin":I="focus",w=ch;break;case"focusout":I="blur",w=ch;break;case"beforeblur":case"afterblur":w=ch;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=My;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=lI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=TI;break;case O_:case j_:case F_:w=hI;break;case z_:w=AI;break;case"scroll":w=oI;break;case"wheel":w=CI;break;case"copy":case"cut":case"paste":w=fI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ly}var P=(e&4)!==0,V=!P&&t==="scroll",x=P?p!==null?p+"Capture":null:p;P=[];for(var v=c,T;v!==null;){T=v;var b=T.stateNode;if(T.tag===5&&b!==null&&(T=b,x!==null&&(b=qo(v,x),b!=null&&P.push(Zo(v,b,T)))),V)break;v=v.return}0<P.length&&(p=new w(p,I,null,n,h),f.push({event:p,listeners:P}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",p&&n!==Cd&&(I=n.relatedTarget||n.fromElement)&&(Xr(I)||I[Hn]))break e;if((w||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,w?(I=n.relatedTarget||n.toElement,w=c,I=I?Xr(I):null,I!==null&&(V=xi(I),I!==V||I.tag!==5&&I.tag!==6)&&(I=null)):(w=null,I=c),w!==I)){if(P=My,b="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=Ly,b="onPointerLeave",x="onPointerEnter",v="pointer"),V=w==null?p:ji(w),T=I==null?p:ji(I),p=new P(b,v+"leave",w,n,h),p.target=V,p.relatedTarget=T,b=null,Xr(h)===c&&(P=new P(x,v+"enter",I,n,h),P.target=T,P.relatedTarget=V,b=P),V=b,w&&I)t:{for(P=w,x=I,v=0,T=P;T;T=Pi(T))v++;for(T=0,b=x;b;b=Pi(b))T++;for(;0<v-T;)P=Pi(P),v--;for(;0<T-v;)x=Pi(x),T--;for(;v--;){if(P===x||x!==null&&P===x.alternate)break t;P=Pi(P),x=Pi(x)}P=null}else P=null;w!==null&&Ky(f,p,w,P,!1),I!==null&&V!==null&&Ky(f,V,I,P,!0)}}e:{if(p=c?ji(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var M=NI;else if(Fy(p))if(D_)M=OI;else{M=$I;var $=MI}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(M=LI);if(M&&(M=M(t,c))){V_(f,M,n,h);break e}$&&$(t,p,c),t==="focusout"&&($=p._wrapperState)&&$.controlled&&p.type==="number"&&xd(p,"number",p.value)}switch($=c?ji(c):window,t){case"focusin":(Fy($)||$.contentEditable==="true")&&(Li=$,Nd=c,Po=null);break;case"focusout":Po=Nd=Li=null;break;case"mousedown":Md=!0;break;case"contextmenu":case"mouseup":case"dragend":Md=!1,Wy(f,n,h);break;case"selectionchange":if(zI)break;case"keydown":case"keyup":Wy(f,n,h)}var E;if(Ip)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else $i?k_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(R_&&n.locale!=="ko"&&($i||y!=="onCompositionStart"?y==="onCompositionEnd"&&$i&&(E=P_()):(cr=h,Tp="value"in cr?cr.value:cr.textContent,$i=!0)),$=ou(c,y),0<$.length&&(y=new $y(y,t,null,n,h),f.push({event:y,listeners:$}),E?y.data=E:(E=b_(n),E!==null&&(y.data=E)))),(E=RI?kI(t,n):bI(t,n))&&(c=ou(c,"onBeforeInput"),0<c.length&&(h=new $y("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=E))}U_(f,e)})}function Zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ou(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qo(t,n),s!=null&&r.unshift(Zo(t,s,i)),s=qo(t,e),s!=null&&r.push(Zo(t,s,i))),t=t.return}return r}function Pi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ky(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=qo(n,s),u!=null&&o.unshift(Zo(n,u,l))):i||(u=qo(n,s),u!=null&&o.push(Zo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var WI=/\r\n?/g,qI=/\u0000|\uFFFD/g;function Qy(t){return(typeof t=="string"?t:""+t).replace(WI,`
`).replace(qI,"")}function ll(t,e,n){if(e=Qy(e),Qy(t)!==e&&n)throw Error(F(425))}function au(){}var $d=null,Ld=null;function Od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jd=typeof setTimeout=="function"?setTimeout:void 0,GI=typeof clearTimeout=="function"?clearTimeout:void 0,Yy=typeof Promise=="function"?Promise:void 0,KI=typeof queueMicrotask=="function"?queueMicrotask:typeof Yy<"u"?function(t){return Yy.resolve(null).then(t).catch(QI)}:jd;function QI(t){setTimeout(function(){throw t})}function vh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qo(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),En="__reactFiber$"+Ns,ea="__reactProps$"+Ns,Hn="__reactContainer$"+Ns,Fd="__reactEvents$"+Ns,YI="__reactListeners$"+Ns,XI="__reactHandles$"+Ns;function Xr(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xy(t);t!==null;){if(n=t[En])return n;t=Xy(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[En]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ji(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function ec(t){return t[ea]||null}var zd=[],Fi=-1;function Lr(t){return{current:t}}function _e(t){0>Fi||(t.current=zd[Fi],zd[Fi]=null,Fi--)}function ge(t,e){Fi++,zd[Fi]=t.current,t.current=e}var Cr={},yt=Lr(Cr),Dt=Lr(!1),hi=Cr;function ds(t,e){var n=t.type.contextTypes;if(!n)return Cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function lu(){_e(Dt),_e(yt)}function Jy(t,e,n){if(yt.current!==Cr)throw Error(F(168));ge(yt,e),ge(Dt,n)}function W_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,MA(t)||"Unknown",i));return ke({},n,r)}function uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,hi=yt.current,ge(yt,t),ge(Dt,Dt.current),!0}function Zy(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=W_(t,e,hi),r.__reactInternalMemoizedMergedChildContext=t,_e(Dt),_e(yt),ge(yt,t)):_e(Dt),ge(Dt,n)}var jn=null,tc=!1,wh=!1;function q_(t){jn===null?jn=[t]:jn.push(t)}function JI(t){tc=!0,q_(t)}function Or(){if(!wh&&jn!==null){wh=!0;var t=0,e=pe;try{var n=jn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jn=null,tc=!1}catch(i){throw jn!==null&&(jn=jn.slice(t+1)),y_(wp,Or),i}finally{pe=e,wh=!1}}return null}var zi=[],Bi=0,cu=null,hu=0,Qt=[],Yt=0,di=null,Fn=1,zn="";function qr(t,e){zi[Bi++]=hu,zi[Bi++]=cu,cu=t,hu=e}function G_(t,e,n){Qt[Yt++]=Fn,Qt[Yt++]=zn,Qt[Yt++]=di,di=t;var r=Fn;t=zn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var s=32-dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fn=1<<32-dn(e)+i|n<<i|r,zn=s+t}else Fn=1<<s|n<<i|r,zn=t}function Pp(t){t.return!==null&&(qr(t,1),G_(t,1,0))}function Rp(t){for(;t===cu;)cu=zi[--Bi],zi[Bi]=null,hu=zi[--Bi],zi[Bi]=null;for(;t===di;)di=Qt[--Yt],Qt[Yt]=null,zn=Qt[--Yt],Qt[Yt]=null,Fn=Qt[--Yt],Qt[Yt]=null}var zt=null,Ft=null,xe=!1,cn=null;function K_(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function e0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,Ft=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=di!==null?{id:Fn,overflow:zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,Ft=null,!0):!1;default:return!1}}function Bd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ud(t){if(xe){var e=Ft;if(e){var n=e;if(!e0(t,e)){if(Bd(t))throw Error(F(418));e=yr(n.nextSibling);var r=zt;e&&e0(t,e)?K_(r,n):(t.flags=t.flags&-4097|2,xe=!1,zt=t)}}else{if(Bd(t))throw Error(F(418));t.flags=t.flags&-4097|2,xe=!1,zt=t}}}function t0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function ul(t){if(t!==zt)return!1;if(!xe)return t0(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Od(t.type,t.memoizedProps)),e&&(e=Ft)){if(Bd(t))throw Q_(),Error(F(418));for(;e;)K_(t,e),e=yr(e.nextSibling)}if(t0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=zt?yr(t.stateNode.nextSibling):null;return!0}function Q_(){for(var t=Ft;t;)t=yr(t.nextSibling)}function fs(){Ft=zt=null,xe=!1}function kp(t){cn===null?cn=[t]:cn.push(t)}var ZI=Xn.ReactCurrentBatchConfig;function uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function cl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function n0(t){var e=t._init;return e(t._payload)}function Y_(t){function e(x,v){if(t){var T=x.deletions;T===null?(x.deletions=[v],x.flags|=16):T.push(v)}}function n(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function r(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(x,v){return x=Er(x,v),x.index=0,x.sibling=null,x}function s(x,v,T){return x.index=T,t?(T=x.alternate,T!==null?(T=T.index,T<v?(x.flags|=2,v):T):(x.flags|=2,v)):(x.flags|=1048576,v)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,v,T,b){return v===null||v.tag!==6?(v=Ih(T,x.mode,b),v.return=x,v):(v=i(v,T),v.return=x,v)}function u(x,v,T,b){var M=T.type;return M===Mi?h(x,v,T.props.children,b,T.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===or&&n0(M)===v.type)?(b=i(v,T.props),b.ref=uo(x,v,T),b.return=x,b):(b=Ol(T.type,T.key,T.props,null,x.mode,b),b.ref=uo(x,v,T),b.return=x,b)}function c(x,v,T,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=Ch(T,x.mode,b),v.return=x,v):(v=i(v,T.children||[]),v.return=x,v)}function h(x,v,T,b,M){return v===null||v.tag!==7?(v=si(T,x.mode,b,M),v.return=x,v):(v=i(v,T),v.return=x,v)}function f(x,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ih(""+v,x.mode,T),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Za:return T=Ol(v.type,v.key,v.props,null,x.mode,T),T.ref=uo(x,null,v),T.return=x,T;case Ni:return v=Ch(v,x.mode,T),v.return=x,v;case or:var b=v._init;return f(x,b(v._payload),T)}if(go(v)||io(v))return v=si(v,x.mode,T,null),v.return=x,v;cl(x,v)}return null}function p(x,v,T,b){var M=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return M!==null?null:l(x,v,""+T,b);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Za:return T.key===M?u(x,v,T,b):null;case Ni:return T.key===M?c(x,v,T,b):null;case or:return M=T._init,p(x,v,M(T._payload),b)}if(go(T)||io(T))return M!==null?null:h(x,v,T,b,null);cl(x,T)}return null}function w(x,v,T,b,M){if(typeof b=="string"&&b!==""||typeof b=="number")return x=x.get(T)||null,l(v,x,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Za:return x=x.get(b.key===null?T:b.key)||null,u(v,x,b,M);case Ni:return x=x.get(b.key===null?T:b.key)||null,c(v,x,b,M);case or:var $=b._init;return w(x,v,T,$(b._payload),M)}if(go(b)||io(b))return x=x.get(T)||null,h(v,x,b,M,null);cl(v,b)}return null}function I(x,v,T,b){for(var M=null,$=null,E=v,y=v=0,S=null;E!==null&&y<T.length;y++){E.index>y?(S=E,E=null):S=E.sibling;var C=p(x,E,T[y],b);if(C===null){E===null&&(E=S);break}t&&E&&C.alternate===null&&e(x,E),v=s(C,v,y),$===null?M=C:$.sibling=C,$=C,E=S}if(y===T.length)return n(x,E),xe&&qr(x,y),M;if(E===null){for(;y<T.length;y++)E=f(x,T[y],b),E!==null&&(v=s(E,v,y),$===null?M=E:$.sibling=E,$=E);return xe&&qr(x,y),M}for(E=r(x,E);y<T.length;y++)S=w(E,x,y,T[y],b),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?y:S.key),v=s(S,v,y),$===null?M=S:$.sibling=S,$=S);return t&&E.forEach(function(k){return e(x,k)}),xe&&qr(x,y),M}function P(x,v,T,b){var M=io(T);if(typeof M!="function")throw Error(F(150));if(T=M.call(T),T==null)throw Error(F(151));for(var $=M=null,E=v,y=v=0,S=null,C=T.next();E!==null&&!C.done;y++,C=T.next()){E.index>y?(S=E,E=null):S=E.sibling;var k=p(x,E,C.value,b);if(k===null){E===null&&(E=S);break}t&&E&&k.alternate===null&&e(x,E),v=s(k,v,y),$===null?M=k:$.sibling=k,$=k,E=S}if(C.done)return n(x,E),xe&&qr(x,y),M;if(E===null){for(;!C.done;y++,C=T.next())C=f(x,C.value,b),C!==null&&(v=s(C,v,y),$===null?M=C:$.sibling=C,$=C);return xe&&qr(x,y),M}for(E=r(x,E);!C.done;y++,C=T.next())C=w(E,x,y,C.value,b),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?y:C.key),v=s(C,v,y),$===null?M=C:$.sibling=C,$=C);return t&&E.forEach(function(D){return e(x,D)}),xe&&qr(x,y),M}function V(x,v,T,b){if(typeof T=="object"&&T!==null&&T.type===Mi&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Za:e:{for(var M=T.key,$=v;$!==null;){if($.key===M){if(M=T.type,M===Mi){if($.tag===7){n(x,$.sibling),v=i($,T.props.children),v.return=x,x=v;break e}}else if($.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===or&&n0(M)===$.type){n(x,$.sibling),v=i($,T.props),v.ref=uo(x,$,T),v.return=x,x=v;break e}n(x,$);break}else e(x,$);$=$.sibling}T.type===Mi?(v=si(T.props.children,x.mode,b,T.key),v.return=x,x=v):(b=Ol(T.type,T.key,T.props,null,x.mode,b),b.ref=uo(x,v,T),b.return=x,x=b)}return o(x);case Ni:e:{for($=T.key;v!==null;){if(v.key===$)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){n(x,v.sibling),v=i(v,T.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else e(x,v);v=v.sibling}v=Ch(T,x.mode,b),v.return=x,x=v}return o(x);case or:return $=T._init,V(x,v,$(T._payload),b)}if(go(T))return I(x,v,T,b);if(io(T))return P(x,v,T,b);cl(x,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,v!==null&&v.tag===6?(n(x,v.sibling),v=i(v,T),v.return=x,x=v):(n(x,v),v=Ih(T,x.mode,b),v.return=x,x=v),o(x)):n(x,v)}return V}var ps=Y_(!0),X_=Y_(!1),du=Lr(null),fu=null,Ui=null,bp=null;function Vp(){bp=Ui=fu=null}function Dp(t){var e=du.current;_e(du),t._currentValue=e}function Hd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ns(t,e){fu=t,bp=Ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(bp!==t)if(t={context:t,memoizedValue:e,next:null},Ui===null){if(fu===null)throw Error(F(308));Ui=t,fu.dependencies={lanes:0,firstContext:t}}else Ui=Ui.next=t;return e}var Jr=null;function Np(t){Jr===null?Jr=[t]:Jr.push(t)}function J_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Np(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Mp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Z_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,Np(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function Vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_p(t,n)}}function r0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pu(t,e,n,r){var i=t.updateQueue;ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,l=s;do{var p=l.lane,w=l.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var I=t,P=l;switch(p=e,w=n,P.tag){case 1:if(I=P.payload,typeof I=="function"){f=I.call(w,f,p);break e}f=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=P.payload,p=typeof I=="function"?I.call(w,f,p):I,p==null)break e;f=ke({},f,p);break e;case 2:ar=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else w={eventTime:w,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=w,u=f):h=h.next=w,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);pi|=o,t.lanes=o,t.memoizedState=f}}function i0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Ia={},Sn=Lr(Ia),ta=Lr(Ia),na=Lr(Ia);function Zr(t){if(t===Ia)throw Error(F(174));return t}function $p(t,e){switch(ge(na,e),ge(ta,t),ge(Sn,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sd(e,t)}_e(Sn),ge(Sn,e)}function ms(){_e(Sn),_e(ta),_e(na)}function eE(t){Zr(na.current);var e=Zr(Sn.current),n=Sd(e,t.type);e!==n&&(ge(ta,t),ge(Sn,n))}function Lp(t){ta.current===t&&(_e(Sn),_e(ta))}var Ie=Lr(0);function mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _h=[];function Op(){for(var t=0;t<_h.length;t++)_h[t]._workInProgressVersionPrimary=null;_h.length=0}var Dl=Xn.ReactCurrentDispatcher,Eh=Xn.ReactCurrentBatchConfig,fi=0,Pe=null,He=null,Ke=null,gu=!1,Ro=!1,ra=0,eC=0;function ut(){throw Error(F(321))}function jp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mn(t[n],e[n]))return!1;return!0}function Fp(t,e,n,r,i,s){if(fi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?iC:sC,t=n(r,i),Ro){s=0;do{if(Ro=!1,ra=0,25<=s)throw Error(F(301));s+=1,Ke=He=null,e.updateQueue=null,Dl.current=oC,t=n(r,i)}while(Ro)}if(Dl.current=yu,e=He!==null&&He.next!==null,fi=0,Ke=He=Pe=null,gu=!1,e)throw Error(F(300));return t}function zp(){var t=ra!==0;return ra=0,t}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Pe.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function nn(){if(He===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Ke===null?Pe.memoizedState:Ke.next;if(e!==null)Ke=e,He=t;else{if(t===null)throw Error(F(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ke===null?Pe.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function ia(t,e){return typeof e=="function"?e(t):e}function xh(t){var e=nn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var h=c.lane;if((fi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Pe.lanes|=h,pi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,mn(r,e.memoizedState)||(bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,pi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Th(t){var e=nn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);mn(s,e.memoizedState)||(bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function tE(){}function nE(t,e){var n=Pe,r=nn(),i=e(),s=!mn(r.memoizedState,i);if(s&&(r.memoizedState=i,bt=!0),r=r.queue,Bp(sE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,sa(9,iE.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(F(349));fi&30||rE(n,e,i)}return i}function rE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function iE(t,e,n,r){e.value=n,e.getSnapshot=r,oE(e)&&aE(t)}function sE(t,e,n){return n(function(){oE(e)&&aE(t)})}function oE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mn(t,n)}catch{return!0}}function aE(t){var e=Wn(t,1);e!==null&&fn(e,t,1,-1)}function s0(t){var e=vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=rC.bind(null,Pe,t),[e.memoizedState,t]}function sa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function lE(){return nn().memoizedState}function Nl(t,e,n,r){var i=vn();Pe.flags|=t,i.memoizedState=sa(1|e,n,void 0,r===void 0?null:r)}function nc(t,e,n,r){var i=nn();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&jp(r,o.deps)){i.memoizedState=sa(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=sa(1|e,n,s,r)}function o0(t,e){return Nl(8390656,8,t,e)}function Bp(t,e){return nc(2048,8,t,e)}function uE(t,e){return nc(4,2,t,e)}function cE(t,e){return nc(4,4,t,e)}function hE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dE(t,e,n){return n=n!=null?n.concat([t]):null,nc(4,4,hE.bind(null,e,t),n)}function Up(){}function fE(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function pE(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mE(t,e,n){return fi&21?(mn(n,e)||(n=__(),Pe.lanes|=n,pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bt=!0),t.memoizedState=n)}function tC(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Eh.transition;Eh.transition={};try{t(!1),e()}finally{pe=n,Eh.transition=r}}function gE(){return nn().memoizedState}function nC(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yE(t))vE(e,n);else if(n=J_(t,e,n,r),n!==null){var i=St();fn(n,t,r,i),wE(n,e,r)}}function rC(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yE(t))vE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,mn(l,o)){var u=e.interleaved;u===null?(i.next=i,Np(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=J_(t,e,i,r),n!==null&&(i=St(),fn(n,t,r,i),wE(n,e,r))}}function yE(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function vE(t,e){Ro=gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_p(t,n)}}var yu={readContext:tn,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},iC={readContext:tn,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:o0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,hE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nC.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:s0,useDebugValue:Up,useDeferredValue:function(t){return vn().memoizedState=t},useTransition:function(){var t=s0(!1),e=t[0];return t=tC.bind(null,t[1]),vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=vn();if(xe){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Xe===null)throw Error(F(349));fi&30||rE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,o0(sE.bind(null,r,s,t),[t]),r.flags|=2048,sa(9,iE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vn(),e=Xe.identifierPrefix;if(xe){var n=zn,r=Fn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sC={readContext:tn,useCallback:fE,useContext:tn,useEffect:Bp,useImperativeHandle:dE,useInsertionEffect:uE,useLayoutEffect:cE,useMemo:pE,useReducer:xh,useRef:lE,useState:function(){return xh(ia)},useDebugValue:Up,useDeferredValue:function(t){var e=nn();return mE(e,He.memoizedState,t)},useTransition:function(){var t=xh(ia)[0],e=nn().memoizedState;return[t,e]},useMutableSource:tE,useSyncExternalStore:nE,useId:gE,unstable_isNewReconciler:!1},oC={readContext:tn,useCallback:fE,useContext:tn,useEffect:Bp,useImperativeHandle:dE,useInsertionEffect:uE,useLayoutEffect:cE,useMemo:pE,useReducer:Th,useRef:lE,useState:function(){return Th(ia)},useDebugValue:Up,useDeferredValue:function(t){var e=nn();return He===null?e.memoizedState=t:mE(e,He.memoizedState,t)},useTransition:function(){var t=Th(ia)[0],e=nn().memoizedState;return[t,e]},useMutableSource:tE,useSyncExternalStore:nE,useId:gE,unstable_isNewReconciler:!1};function ln(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rc={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=_r(t),s=Bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(fn(e,t,i,r),Vl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=_r(t),s=Bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(fn(e,t,i,r),Vl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=_r(t),i=Bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=vr(t,i,r),e!==null&&(fn(e,t,r,n),Vl(e,t,r))}};function a0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xo(n,r)||!Xo(i,s):!0}function _E(t,e,n){var r=!1,i=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=tn(s):(i=Nt(e)?hi:yt.current,r=e.contextTypes,s=(r=r!=null)?ds(t,i):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function l0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&rc.enqueueReplaceState(e,e.state,null)}function qd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Mp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tn(s):(s=Nt(e)?hi:yt.current,i.context=ds(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&rc.enqueueReplaceState(i,i.state,null),pu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,e){try{var n="",r=e;do n+=NA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Sh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aC=typeof WeakMap=="function"?WeakMap:Map;function EE(t,e,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wu||(wu=!0,rf=r),Gd(t,e)},n}function xE(t,e,n){n=Bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gd(t,e),typeof r!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function u0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=EC.bind(null,t,e,n),e.then(t,t))}function c0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function h0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bn(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var lC=Xn.ReactCurrentOwner,bt=!1;function Et(t,e,n,r){e.child=t===null?X_(e,null,n,r):ps(e,t.child,n,r)}function d0(t,e,n,r,i){n=n.render;var s=e.ref;return ns(e,i),r=Fp(t,e,n,r,s,i),n=zp(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(xe&&n&&Pp(e),e.flags|=1,Et(t,e,r,i),e.child)}function f0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Xp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,TE(t,e,s,r,i)):(t=Ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xo,n(o,r)&&t.ref===e.ref)return qn(t,e,i)}return e.flags|=1,t=Er(s,r),t.ref=e.ref,t.return=e,e.child=t}function TE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xo(s,r)&&t.ref===e.ref)if(bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(bt=!0);else return e.lanes=t.lanes,qn(t,e,i)}return Kd(t,e,n,r,i)}function SE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Wi,jt),jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Wi,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Wi,jt),jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Wi,jt),jt|=r;return Et(t,e,i,n),e.child}function AE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kd(t,e,n,r,i){var s=Nt(n)?hi:yt.current;return s=ds(e,s),ns(e,i),n=Fp(t,e,n,r,s,i),r=zp(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(xe&&r&&Pp(e),e.flags|=1,Et(t,e,n,i),e.child)}function p0(t,e,n,r,i){if(Nt(n)){var s=!0;uu(e)}else s=!1;if(ns(e,i),e.stateNode===null)Ml(t,e),_E(e,n,r),qd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=tn(c):(c=Nt(n)?hi:yt.current,c=ds(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&l0(e,o,r,c),ar=!1;var p=e.memoizedState;o.state=p,pu(e,r,o,i),u=e.memoizedState,l!==r||p!==u||Dt.current||ar?(typeof h=="function"&&(Wd(e,n,h,r),u=e.memoizedState),(l=ar||a0(e,n,l,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Z_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:ln(e.type,l),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=tn(u):(u=Nt(n)?hi:yt.current,u=ds(e,u));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||p!==u)&&l0(e,o,r,u),ar=!1,p=e.memoizedState,o.state=p,pu(e,r,o,i);var I=e.memoizedState;l!==f||p!==I||Dt.current||ar?(typeof w=="function"&&(Wd(e,n,w,r),I=e.memoizedState),(c=ar||a0(e,n,c,r,p,I,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Qd(t,e,n,r,s,i)}function Qd(t,e,n,r,i,s){AE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Zy(e,n,!1),qn(t,e,s);r=e.stateNode,lC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ps(e,t.child,null,s),e.child=ps(e,null,l,s)):Et(t,e,l,s),e.memoizedState=r.state,i&&Zy(e,n,!0),e.child}function IE(t){var e=t.stateNode;e.pendingContext?Jy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jy(t,e.context,!1),$p(t,e.containerInfo)}function m0(t,e,n,r,i){return fs(),kp(i),e.flags|=256,Et(t,e,n,r),e.child}var Yd={dehydrated:null,treeContext:null,retryLane:0};function Xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function CE(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ie,i&1),t===null)return Ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=oc(o,r,0,null),t=si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xd(n),e.memoizedState=Yd,t):Hp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return uC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Er(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Er(l,s):(s=si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yd,r}return s=t.child,t=s.sibling,r=Er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hp(t,e){return e=oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,r){return r!==null&&kp(r),ps(e,t.child,null,n),t=Hp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Sh(Error(F(422))),hl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=oc({mode:"visible",children:r.children},i,0,null),s=si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ps(e,t.child,null,o),e.child.memoizedState=Xd(o),e.memoizedState=Yd,s);if(!(e.mode&1))return hl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Sh(s,r,void 0),hl(t,e,o,r)}if(l=(o&t.childLanes)!==0,bt||l){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(t,i),fn(r,t,i,-1))}return Yp(),r=Sh(Error(F(421))),hl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ft=yr(i.nextSibling),zt=e,xe=!0,cn=null,t!==null&&(Qt[Yt++]=Fn,Qt[Yt++]=zn,Qt[Yt++]=di,Fn=t.id,zn=t.overflow,di=e),e=Hp(e,r.children),e.flags|=4096,e)}function g0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hd(t.return,e,n)}function Ah(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function PE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Et(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&g0(t,n,e);else if(t.tag===19)g0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ah(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ah(e,!0,n,null,s);break;case"together":Ah(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cC(t,e,n){switch(e.tag){case 3:IE(e),fs();break;case 5:eE(e);break;case 1:Nt(e.type)&&uu(e);break;case 4:$p(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(du,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?CE(t,e,n):(ge(Ie,Ie.current&1),t=qn(t,e,n),t!==null?t.sibling:null);ge(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return PE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,SE(t,e,n)}return qn(t,e,n)}var RE,Jd,kE,bE;RE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jd=function(){};kE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(Sn.current);var s=null;switch(n){case"input":i=_d(t,i),r=_d(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=Td(t,i),r=Td(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=au)}Ad(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};bE=function(t,e,n,r){n!==r&&(e.flags|=4)};function co(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hC(t,e,n){var r=e.pendingProps;switch(Rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return Nt(e.type)&&lu(),ct(e),null;case 3:return r=e.stateNode,ms(),_e(Dt),_e(yt),Op(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(af(cn),cn=null))),Jd(t,e),ct(e),null;case 5:Lp(e);var i=Zr(na.current);if(n=e.type,t!==null&&e.stateNode!=null)kE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return ct(e),null}if(t=Zr(Sn.current),ul(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[En]=e,r[ea]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<vo.length;i++)ve(vo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Ay(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":Cy(r,s),ve("invalid",r)}Ad(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ll(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ll(r.textContent,l,t),i=["children",""+l]):Ho.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":el(r),Iy(r,s,!0);break;case"textarea":el(r),Py(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=au)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=s_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[En]=e,t[ea]=r,RE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Id(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<vo.length;i++)ve(vo[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":Ay(t,r),i=_d(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Cy(t,r),i=Td(t,r),ve("invalid",t);break;default:i=r}Ad(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?l_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&o_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wo(t,u):typeof u=="number"&&Wo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ho.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&pp(t,s,u,o))}switch(n){case"input":el(t),Iy(t,r,!1);break;case"textarea":el(t),Py(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ji(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ji(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=au)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)bE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Zr(na.current),Zr(Sn.current),ul(e)){if(r=e.stateNode,n=e.memoizedProps,r[En]=e,(s=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:ll(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ll(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return ct(e),null;case 13:if(_e(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Ft!==null&&e.mode&1&&!(e.flags&128))Q_(),fs(),e.flags|=98560,s=!1;else if(s=ul(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[En]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),s=!1}else cn!==null&&(af(cn),cn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?We===0&&(We=3):Yp())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return ms(),Jd(t,e),t===null&&Jo(e.stateNode.containerInfo),ct(e),null;case 10:return Dp(e.type._context),ct(e),null;case 17:return Nt(e.type)&&lu(),ct(e),null;case 19:if(_e(Ie),s=e.memoizedState,s===null)return ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)co(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mu(t),o!==null){for(e.flags|=128,co(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&$e()>ys&&(e.flags|=128,r=!0,co(s,!1),e.lanes=4194304)}else{if(!r)if(t=mu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return ct(e),null}else 2*$e()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,r=!0,co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$e(),e.sibling=null,n=Ie.current,ge(Ie,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return Qp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function dC(t,e){switch(Rp(e),e.tag){case 1:return Nt(e.type)&&lu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ms(),_e(Dt),_e(yt),Op(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lp(e),null;case 13:if(_e(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ie),null;case 4:return ms(),null;case 10:return Dp(e.type._context),null;case 22:case 23:return Qp(),null;case 24:return null;default:return null}}var dl=!1,ft=!1,fC=typeof WeakSet=="function"?WeakSet:Set,q=null;function Hi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function Zd(t,e,n){try{n()}catch(r){De(t,e,r)}}var y0=!1;function pC(t,e){if($d=iu,t=$_(),Cp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)p=f,f=w;for(;;){if(f===t)break t;if(p===n&&++c===i&&(l=o),p===s&&++h===r&&(u=o),(w=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ld={focusedElem:t,selectionRange:n},iu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var P=I.memoizedProps,V=I.memoizedState,x=e.stateNode,v=x.getSnapshotBeforeUpdate(e.elementType===e.type?P:ln(e.type,P),V);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){De(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return I=y0,y0=!1,I}function ko(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zd(e,n,s)}i=i.next}while(i!==r)}}function ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ef(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function VE(t){var e=t.alternate;e!==null&&(t.alternate=null,VE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[En],delete e[ea],delete e[Fd],delete e[YI],delete e[XI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function DE(t){return t.tag===5||t.tag===3||t.tag===4}function v0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||DE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=au));else if(r!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}function nf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}var et=null,un=!1;function rr(t,e,n){for(n=n.child;n!==null;)NE(t,e,n),n=n.sibling}function NE(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(Yu,n)}catch{}switch(n.tag){case 5:ft||Hi(n,e);case 6:var r=et,i=un;et=null,rr(t,e,n),et=r,un=i,et!==null&&(un?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(un?(t=et,n=n.stateNode,t.nodeType===8?vh(t.parentNode,n):t.nodeType===1&&vh(t,n),Qo(t)):vh(et,n.stateNode));break;case 4:r=et,i=un,et=n.stateNode.containerInfo,un=!0,rr(t,e,n),et=r,un=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zd(n,e,o),i=i.next}while(i!==r)}rr(t,e,n);break;case 1:if(!ft&&(Hi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,rr(t,e,n),ft=r):rr(t,e,n);break;default:rr(t,e,n)}}function w0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fC),e.forEach(function(r){var i=TC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:et=l.stateNode,un=!1;break e;case 3:et=l.stateNode.containerInfo,un=!0;break e;case 4:et=l.stateNode.containerInfo,un=!0;break e}l=l.return}if(et===null)throw Error(F(160));NE(s,o,i),et=null,un=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){De(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ME(e,t),e=e.sibling}function ME(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(on(e,t),yn(t),r&4){try{ko(3,t,t.return),ic(3,t)}catch(P){De(t,t.return,P)}try{ko(5,t,t.return)}catch(P){De(t,t.return,P)}}break;case 1:on(e,t),yn(t),r&512&&n!==null&&Hi(n,n.return);break;case 5:if(on(e,t),yn(t),r&512&&n!==null&&Hi(n,n.return),t.flags&32){var i=t.stateNode;try{Wo(i,"")}catch(P){De(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&r_(i,s),Id(l,o);var c=Id(l,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?l_(i,f):h==="dangerouslySetInnerHTML"?o_(i,f):h==="children"?Wo(i,f):pp(i,h,f,c)}switch(l){case"input":Ed(i,s);break;case"textarea":i_(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Ji(i,!!s.multiple,w,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ji(i,!!s.multiple,s.defaultValue,!0):Ji(i,!!s.multiple,s.multiple?[]:"",!1))}i[ea]=s}catch(P){De(t,t.return,P)}}break;case 6:if(on(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){De(t,t.return,P)}}break;case 3:if(on(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(P){De(t,t.return,P)}break;case 4:on(e,t),yn(t);break;case 13:on(e,t),yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gp=$e())),r&4&&w0(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(c=ft)||h,on(e,t),ft=c):on(e,t),yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(f=q=h;q!==null;){switch(p=q,w=p.child,p.tag){case 0:case 11:case 14:case 15:ko(4,p,p.return);break;case 1:Hi(p,p.return);var I=p.stateNode;if(typeof I.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(P){De(r,n,P)}}break;case 5:Hi(p,p.return);break;case 22:if(p.memoizedState!==null){E0(f);continue}}w!==null?(w.return=p,q=w):E0(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=a_("display",o))}catch(P){De(t,t.return,P)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){De(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:on(e,t),yn(t),r&4&&w0(t);break;case 21:break;default:on(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(DE(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wo(i,""),r.flags&=-33);var s=v0(t);nf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=v0(t);tf(t,l,o);break;default:throw Error(F(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mC(t,e,n){q=t,$E(t)}function $E(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||dl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ft;l=dl;var c=ft;if(dl=o,(ft=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?x0(i):u!==null?(u.return=o,q=u):x0(i);for(;s!==null;)q=s,$E(s),s=s.sibling;q=i,dl=l,ft=c}_0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):_0(t)}}function _0(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||ic(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&i0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}i0(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Qo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ft||e.flags&512&&ef(e)}catch(p){De(e,e.return,p)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function E0(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function x0(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ic(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{ef(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{ef(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var gC=Math.ceil,vu=Xn.ReactCurrentDispatcher,Wp=Xn.ReactCurrentOwner,Zt=Xn.ReactCurrentBatchConfig,ue=0,Xe=null,ze=null,rt=0,jt=0,Wi=Lr(0),We=0,oa=null,pi=0,sc=0,qp=0,bo=null,kt=null,Gp=0,ys=1/0,Ln=null,wu=!1,rf=null,wr=null,fl=!1,hr=null,_u=0,Vo=0,sf=null,$l=-1,Ll=0;function St(){return ue&6?$e():$l!==-1?$l:$l=$e()}function _r(t){return t.mode&1?ue&2&&rt!==0?rt&-rt:ZI.transition!==null?(Ll===0&&(Ll=__()),Ll):(t=pe,t!==0||(t=window.event,t=t===void 0?16:C_(t.type)),t):1}function fn(t,e,n,r){if(50<Vo)throw Vo=0,sf=null,Error(F(185));Ta(t,n,r),(!(ue&2)||t!==Xe)&&(t===Xe&&(!(ue&2)&&(sc|=n),We===4&&ur(t,rt)),Mt(t,r),n===1&&ue===0&&!(e.mode&1)&&(ys=$e()+500,tc&&Or()))}function Mt(t,e){var n=t.callbackNode;ZA(t,e);var r=ru(t,t===Xe?rt:0);if(r===0)n!==null&&by(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&by(n),e===1)t.tag===0?JI(T0.bind(null,t)):q_(T0.bind(null,t)),KI(function(){!(ue&6)&&Or()}),n=null;else{switch(E_(r)){case 1:n=wp;break;case 4:n=v_;break;case 16:n=nu;break;case 536870912:n=w_;break;default:n=nu}n=HE(n,LE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function LE(t,e){if($l=-1,Ll=0,ue&6)throw Error(F(327));var n=t.callbackNode;if(rs()&&t.callbackNode!==n)return null;var r=ru(t,t===Xe?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Eu(t,r);else{e=r;var i=ue;ue|=2;var s=jE();(Xe!==t||rt!==e)&&(Ln=null,ys=$e()+500,ii(t,e));do try{wC();break}catch(l){OE(t,l)}while(!0);Vp(),vu.current=s,ue=i,ze!==null?e=0:(Xe=null,rt=0,e=We)}if(e!==0){if(e===2&&(i=bd(t),i!==0&&(r=i,e=of(t,i))),e===1)throw n=oa,ii(t,0),ur(t,r),Mt(t,$e()),n;if(e===6)ur(t,r);else{if(i=t.current.alternate,!(r&30)&&!yC(i)&&(e=Eu(t,r),e===2&&(s=bd(t),s!==0&&(r=s,e=of(t,s))),e===1))throw n=oa,ii(t,0),ur(t,r),Mt(t,$e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Gr(t,kt,Ln);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=Gp+500-$e(),10<e)){if(ru(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jd(Gr.bind(null,t,kt,Ln),e);break}Gr(t,kt,Ln);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gC(r/1960))-r,10<r){t.timeoutHandle=jd(Gr.bind(null,t,kt,Ln),r);break}Gr(t,kt,Ln);break;case 5:Gr(t,kt,Ln);break;default:throw Error(F(329))}}}return Mt(t,$e()),t.callbackNode===n?LE.bind(null,t):null}function of(t,e){var n=bo;return t.current.memoizedState.isDehydrated&&(ii(t,e).flags|=256),t=Eu(t,e),t!==2&&(e=kt,kt=n,e!==null&&af(e)),t}function af(t){kt===null?kt=t:kt.push.apply(kt,t)}function yC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~qp,e&=~sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function T0(t){if(ue&6)throw Error(F(327));rs();var e=ru(t,0);if(!(e&1))return Mt(t,$e()),null;var n=Eu(t,e);if(t.tag!==0&&n===2){var r=bd(t);r!==0&&(e=r,n=of(t,r))}if(n===1)throw n=oa,ii(t,0),ur(t,e),Mt(t,$e()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,kt,Ln),Mt(t,$e()),null}function Kp(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(ys=$e()+500,tc&&Or())}}function mi(t){hr!==null&&hr.tag===0&&!(ue&6)&&rs();var e=ue;ue|=1;var n=Zt.transition,r=pe;try{if(Zt.transition=null,pe=1,t)return t()}finally{pe=r,Zt.transition=n,ue=e,!(ue&6)&&Or()}}function Qp(){jt=Wi.current,_e(Wi)}function ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GI(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(Rp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lu();break;case 3:ms(),_e(Dt),_e(yt),Op();break;case 5:Lp(r);break;case 4:ms();break;case 13:_e(Ie);break;case 19:_e(Ie);break;case 10:Dp(r.type._context);break;case 22:case 23:Qp()}n=n.return}if(Xe=t,ze=t=Er(t.current,null),rt=jt=e,We=0,oa=null,qp=sc=pi=0,kt=bo=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function OE(t,e){do{var n=ze;try{if(Vp(),Dl.current=yu,gu){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gu=!1}if(fi=0,Ke=He=Pe=null,Ro=!1,ra=0,Wp.current=null,n===null||n.return===null){We=1,oa=e,ze=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=rt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=c0(o);if(w!==null){w.flags&=-257,h0(w,o,l,s,e),w.mode&1&&u0(s,c,e),e=w,u=c;var I=e.updateQueue;if(I===null){var P=new Set;P.add(u),e.updateQueue=P}else I.add(u);break e}else{if(!(e&1)){u0(s,c,e),Yp();break e}u=Error(F(426))}}else if(xe&&l.mode&1){var V=c0(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),h0(V,o,l,s,e),kp(gs(u,l));break e}}s=u=gs(u,l),We!==4&&(We=2),bo===null?bo=[s]:bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=EE(s,u,e);r0(s,x);break e;case 1:l=u;var v=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(wr===null||!wr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=xE(s,l,e);r0(s,b);break e}}s=s.return}while(s!==null)}zE(n)}catch(M){e=M,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function jE(){var t=vu.current;return vu.current=yu,t===null?yu:t}function Yp(){(We===0||We===3||We===2)&&(We=4),Xe===null||!(pi&268435455)&&!(sc&268435455)||ur(Xe,rt)}function Eu(t,e){var n=ue;ue|=2;var r=jE();(Xe!==t||rt!==e)&&(Ln=null,ii(t,e));do try{vC();break}catch(i){OE(t,i)}while(!0);if(Vp(),ue=n,vu.current=r,ze!==null)throw Error(F(261));return Xe=null,rt=0,We}function vC(){for(;ze!==null;)FE(ze)}function wC(){for(;ze!==null&&!HA();)FE(ze)}function FE(t){var e=UE(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?zE(t):ze=e,Wp.current=null}function zE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dC(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,ze=null;return}}else if(n=hC(n,e,jt),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);We===0&&(We=5)}function Gr(t,e,n){var r=pe,i=Zt.transition;try{Zt.transition=null,pe=1,_C(t,e,n,r)}finally{Zt.transition=i,pe=r}return null}function _C(t,e,n,r){do rs();while(hr!==null);if(ue&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eI(t,s),t===Xe&&(ze=Xe=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,HE(nu,function(){return rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=pe;pe=1;var l=ue;ue|=4,Wp.current=null,pC(t,n),ME(n,t),FI(Ld),iu=!!$d,Ld=$d=null,t.current=n,mC(n),WA(),ue=l,pe=o,Zt.transition=s}else t.current=n;if(fl&&(fl=!1,hr=t,_u=i),s=t.pendingLanes,s===0&&(wr=null),KA(n.stateNode),Mt(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wu)throw wu=!1,t=rf,rf=null,t;return _u&1&&t.tag!==0&&rs(),s=t.pendingLanes,s&1?t===sf?Vo++:(Vo=0,sf=t):Vo=0,Or(),null}function rs(){if(hr!==null){var t=E_(_u),e=Zt.transition,n=pe;try{if(Zt.transition=null,pe=16>t?16:t,hr===null)var r=!1;else{if(t=hr,hr=null,_u=0,ue&6)throw Error(F(331));var i=ue;for(ue|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:ko(8,h,s)}var f=h.child;if(f!==null)f.return=h,q=f;else for(;q!==null;){h=q;var p=h.sibling,w=h.return;if(VE(h),h===c){q=null;break}if(p!==null){p.return=w,q=p;break}q=w}}}var I=s.alternate;if(I!==null){var P=I.child;if(P!==null){I.child=null;do{var V=P.sibling;P.sibling=null,P=V}while(P!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ko(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,q=x;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,q=T;else e:for(o=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ic(9,l)}}catch(M){De(l,l.return,M)}if(l===o){q=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,q=b;break e}q=l.return}}if(ue=i,Or(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(Yu,t)}catch{}r=!0}return r}finally{pe=n,Zt.transition=e}}return!1}function S0(t,e,n){e=gs(n,e),e=EE(t,e,1),t=vr(t,e,1),e=St(),t!==null&&(Ta(t,1,e),Mt(t,e))}function De(t,e,n){if(t.tag===3)S0(t,t,n);else for(;e!==null;){if(e.tag===3){S0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wr===null||!wr.has(r))){t=gs(n,t),t=xE(e,t,1),e=vr(e,t,1),t=St(),e!==null&&(Ta(e,1,t),Mt(e,t));break}}e=e.return}}function EC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(rt&n)===n&&(We===4||We===3&&(rt&130023424)===rt&&500>$e()-Gp?ii(t,0):qp|=n),Mt(t,e)}function BE(t,e){e===0&&(t.mode&1?(e=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):e=1);var n=St();t=Wn(t,e),t!==null&&(Ta(t,e,n),Mt(t,n))}function xC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),BE(t,n)}function TC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),BE(t,n)}var UE;UE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dt.current)bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bt=!1,cC(t,e,n);bt=!!(t.flags&131072)}else bt=!1,xe&&e.flags&1048576&&G_(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ml(t,e),t=e.pendingProps;var i=ds(e,yt.current);ns(e,n),i=Fp(null,e,r,t,i,n);var s=zp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,uu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mp(e),i.updater=rc,e.stateNode=i,i._reactInternals=e,qd(e,r,t,n),e=Qd(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&Pp(e),Et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ml(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=AC(r),t=ln(r,t),i){case 0:e=Kd(null,e,r,t,n);break e;case 1:e=p0(null,e,r,t,n);break e;case 11:e=d0(null,e,r,t,n);break e;case 14:e=f0(null,e,r,ln(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Kd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),p0(t,e,r,i,n);case 3:e:{if(IE(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Z_(t,e),pu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=gs(Error(F(423)),e),e=m0(t,e,r,n,i);break e}else if(r!==i){i=gs(Error(F(424)),e),e=m0(t,e,r,n,i);break e}else for(Ft=yr(e.stateNode.containerInfo.firstChild),zt=e,xe=!0,cn=null,n=X_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),r===i){e=qn(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return eE(e),t===null&&Ud(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Od(r,i)?o=null:s!==null&&Od(r,s)&&(e.flags|=32),AE(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&Ud(e),null;case 13:return CE(t,e,n);case 4:return $p(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ps(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),d0(t,e,r,i,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(du,r._currentValue),r._currentValue=o,s!==null)if(mn(s.value,o)){if(s.children===i.children&&!Dt.current){e=qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Bn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Hd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ns(e,n),i=tn(i),r=r(i),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,i=ln(r,e.pendingProps),i=ln(r.type,i),f0(t,e,r,i,n);case 15:return TE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Ml(t,e),e.tag=1,Nt(r)?(t=!0,uu(e)):t=!1,ns(e,n),_E(e,r,i),qd(e,r,i,n),Qd(null,e,r,!0,t,n);case 19:return PE(t,e,n);case 22:return SE(t,e,n)}throw Error(F(156,e.tag))};function HE(t,e){return y_(t,e)}function SC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new SC(t,e,n,r)}function Xp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AC(t){if(typeof t=="function")return Xp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gp)return 11;if(t===yp)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Xp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Mi:return si(n.children,i,s,e);case mp:o=8,i|=8;break;case gd:return t=Jt(12,n,e,i|2),t.elementType=gd,t.lanes=s,t;case yd:return t=Jt(13,n,e,i),t.elementType=yd,t.lanes=s,t;case vd:return t=Jt(19,n,e,i),t.elementType=vd,t.lanes=s,t;case e_:return oc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jw:o=10;break e;case Zw:o=9;break e;case gp:o=11;break e;case yp:o=14;break e;case or:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function si(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function oc(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=e_,t.lanes=n,t.stateNode={isHidden:!1},t}function Ih(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function Ch(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ah(0),this.expirationTimes=ah(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ah(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jp(t,e,n,r,i,s,o,l,u){return t=new IC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mp(s),t}function CC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function WE(t){if(!t)return Cr;t=t._reactInternals;e:{if(xi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Nt(n))return W_(t,n,e)}return e}function qE(t,e,n,r,i,s,o,l,u){return t=Jp(n,r,!0,t,i,s,o,l,u),t.context=WE(null),n=t.current,r=St(),i=_r(n),s=Bn(r,i),s.callback=e??null,vr(n,s,i),t.current.lanes=i,Ta(t,i,r),Mt(t,r),t}function ac(t,e,n,r){var i=e.current,s=St(),o=_r(i);return n=WE(n),e.context===null?e.context=n:e.pendingContext=n,e=Bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(i,e,o),t!==null&&(fn(t,i,o,s),Vl(t,i,o)),o}function xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function A0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zp(t,e){A0(t,e),(t=t.alternate)&&A0(t,e)}function PC(){return null}var GE=typeof reportError=="function"?reportError:function(t){console.error(t)};function em(t){this._internalRoot=t}lc.prototype.render=em.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));ac(t,e,null,null)};lc.prototype.unmount=em.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mi(function(){ac(null,t,null,null)}),e[Hn]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=S_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&I_(t)}};function tm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function I0(){}function RC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=xu(o);s.call(c)}}var o=qE(e,r,t,0,null,!1,!1,"",I0);return t._reactRootContainer=o,t[Hn]=o.current,Jo(t.nodeType===8?t.parentNode:t),mi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=xu(u);l.call(c)}}var u=Jp(t,0,!1,null,null,!1,!1,"",I0);return t._reactRootContainer=u,t[Hn]=u.current,Jo(t.nodeType===8?t.parentNode:t),mi(function(){ac(e,u,n,r)}),u}function cc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=xu(o);l.call(u)}}ac(e,o,t,i)}else o=RC(n,e,t,i,r);return xu(o)}x_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yo(e.pendingLanes);n!==0&&(_p(e,n|1),Mt(e,$e()),!(ue&6)&&(ys=$e()+500,Or()))}break;case 13:mi(function(){var r=Wn(t,1);if(r!==null){var i=St();fn(r,t,1,i)}}),Zp(t,1)}};Ep=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=St();fn(e,t,134217728,n)}Zp(t,134217728)}};T_=function(t){if(t.tag===13){var e=_r(t),n=Wn(t,e);if(n!==null){var r=St();fn(n,t,e,r)}Zp(t,e)}};S_=function(){return pe};A_=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Pd=function(t,e,n){switch(e){case"input":if(Ed(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ec(r);if(!i)throw Error(F(90));n_(r),Ed(r,i)}}}break;case"textarea":i_(t,n);break;case"select":e=n.value,e!=null&&Ji(t,!!n.multiple,e,!1)}};h_=Kp;d_=mi;var kC={usingClientEntryPoint:!1,Events:[Aa,ji,ec,u_,c_,Kp]},ho={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bC={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=m_(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||PC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{Yu=pl.inject(bC),Tn=pl}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kC;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tm(e))throw Error(F(200));return CC(t,e,null,n)};Ut.createRoot=function(t,e){if(!tm(t))throw Error(F(299));var n=!1,r="",i=GE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Jp(t,1,!1,null,null,n,!1,r,i),t[Hn]=e.current,Jo(t.nodeType===8?t.parentNode:t),new em(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=m_(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return mi(t)};Ut.hydrate=function(t,e,n){if(!uc(e))throw Error(F(200));return cc(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!tm(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=GE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qE(e,null,t,1,n??null,i,!1,s,o),t[Hn]=e.current,Jo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new lc(e)};Ut.render=function(t,e,n){if(!uc(e))throw Error(F(200));return cc(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!uc(t))throw Error(F(40));return t._reactRootContainer?(mi(function(){cc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Kp;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!uc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return cc(t,e,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function KE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(KE)}catch(t){console.error(t)}}KE(),Kw.exports=Ut;var VC=Kw.exports,QE,C0=VC;QE=C0.createRoot,C0.hydrateRoot;var Ye=function(){return Ye=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ye.apply(this,arguments)};function vs(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var we="-ms-",Do="-moz-",fe="-webkit-",YE="comm",hc="rule",nm="decl",DC="@import",XE="@keyframes",NC="@layer",JE=Math.abs,rm=String.fromCharCode,lf=Object.assign;function MC(t,e){return Qe(t,0)^45?(((e<<2^Qe(t,0))<<2^Qe(t,1))<<2^Qe(t,2))<<2^Qe(t,3):0}function ZE(t){return t.trim()}function On(t,e){return(t=e.exec(t))?t[0]:t}function ee(t,e,n){return t.replace(e,n)}function jl(t,e,n){return t.indexOf(e,n)}function Qe(t,e){return t.charCodeAt(e)|0}function ws(t,e,n){return t.slice(e,n)}function _n(t){return t.length}function ex(t){return t.length}function wo(t,e){return e.push(t),t}function $C(t,e){return t.map(e).join("")}function P0(t,e){return t.filter(function(n){return!On(n,e)})}var dc=1,_s=1,tx=0,rn=0,Fe=0,Ms="";function fc(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:dc,column:_s,length:o,return:"",siblings:l}}function ir(t,e){return lf(fc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ri(t){for(;t.root;)t=ir(t.root,{children:[t]});wo(t,t.siblings)}function LC(){return Fe}function OC(){return Fe=rn>0?Qe(Ms,--rn):0,_s--,Fe===10&&(_s=1,dc--),Fe}function pn(){return Fe=rn<tx?Qe(Ms,rn++):0,_s++,Fe===10&&(_s=1,dc++),Fe}function oi(){return Qe(Ms,rn)}function Fl(){return rn}function pc(t,e){return ws(Ms,t,e)}function uf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jC(t){return dc=_s=1,tx=_n(Ms=t),rn=0,[]}function FC(t){return Ms="",t}function Ph(t){return ZE(pc(rn-1,cf(t===91?t+2:t===40?t+1:t)))}function zC(t){for(;(Fe=oi())&&Fe<33;)pn();return uf(t)>2||uf(Fe)>3?"":" "}function BC(t,e){for(;--e&&pn()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return pc(t,Fl()+(e<6&&oi()==32&&pn()==32))}function cf(t){for(;pn();)switch(Fe){case t:return rn;case 34:case 39:t!==34&&t!==39&&cf(Fe);break;case 40:t===41&&cf(t);break;case 92:pn();break}return rn}function UC(t,e){for(;pn()&&t+Fe!==57;)if(t+Fe===84&&oi()===47)break;return"/*"+pc(e,rn-1)+"*"+rm(t===47?t:pn())}function HC(t){for(;!uf(oi());)pn();return pc(t,rn)}function WC(t){return FC(zl("",null,null,null,[""],t=jC(t),0,[0],t))}function zl(t,e,n,r,i,s,o,l,u){for(var c=0,h=0,f=o,p=0,w=0,I=0,P=1,V=1,x=1,v=0,T="",b=i,M=s,$=r,E=T;V;)switch(I=v,v=pn()){case 40:if(I!=108&&Qe(E,f-1)==58){jl(E+=ee(Ph(v),"&","&\f"),"&\f",JE(c?l[c-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:E+=Ph(v);break;case 9:case 10:case 13:case 32:E+=zC(I);break;case 92:E+=BC(Fl()-1,7);continue;case 47:switch(oi()){case 42:case 47:wo(qC(UC(pn(),Fl()),e,n,u),u);break;default:E+="/"}break;case 123*P:l[c++]=_n(E)*x;case 125*P:case 59:case 0:switch(v){case 0:case 125:V=0;case 59+h:x==-1&&(E=ee(E,/\f/g,"")),w>0&&_n(E)-f&&wo(w>32?k0(E+";",r,n,f-1,u):k0(ee(E," ","")+";",r,n,f-2,u),u);break;case 59:E+=";";default:if(wo($=R0(E,e,n,c,h,i,l,T,b=[],M=[],f,s),s),v===123)if(h===0)zl(E,e,$,$,b,s,f,l,M);else switch(p===99&&Qe(E,3)===110?100:p){case 100:case 108:case 109:case 115:zl(t,$,$,r&&wo(R0(t,$,$,0,0,i,l,T,i,b=[],f,M),M),i,M,f,l,r?b:M);break;default:zl(E,$,$,$,[""],M,0,l,M)}}c=h=w=0,P=x=1,T=E="",f=o;break;case 58:f=1+_n(E),w=I;default:if(P<1){if(v==123)--P;else if(v==125&&P++==0&&OC()==125)continue}switch(E+=rm(v),v*P){case 38:x=h>0?1:(E+="\f",-1);break;case 44:l[c++]=(_n(E)-1)*x,x=1;break;case 64:oi()===45&&(E+=Ph(pn())),p=oi(),h=f=_n(T=E+=HC(Fl())),v++;break;case 45:I===45&&_n(E)==2&&(P=0)}}return s}function R0(t,e,n,r,i,s,o,l,u,c,h,f){for(var p=i-1,w=i===0?s:[""],I=ex(w),P=0,V=0,x=0;P<r;++P)for(var v=0,T=ws(t,p+1,p=JE(V=o[P])),b=t;v<I;++v)(b=ZE(V>0?w[v]+" "+T:ee(T,/&\f/g,w[v])))&&(u[x++]=b);return fc(t,e,n,i===0?hc:l,u,c,h,f)}function qC(t,e,n,r){return fc(t,e,n,YE,rm(LC()),ws(t,2,-2),0,r)}function k0(t,e,n,r,i){return fc(t,e,n,nm,ws(t,0,r),ws(t,r+1,-1),r,i)}function nx(t,e,n){switch(MC(t,e)){case 5103:return fe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return fe+t+t;case 4789:return Do+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+t+Do+t+we+t+t;case 5936:switch(Qe(t,e+11)){case 114:return fe+t+we+ee(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return fe+t+we+ee(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return fe+t+we+ee(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return fe+t+we+t+t;case 6165:return fe+t+we+"flex-"+t+t;case 5187:return fe+t+ee(t,/(\w+).+(:[^]+)/,fe+"box-$1$2"+we+"flex-$1$2")+t;case 5443:return fe+t+we+"flex-item-"+ee(t,/flex-|-self/g,"")+(On(t,/flex-|baseline/)?"":we+"grid-row-"+ee(t,/flex-|-self/g,""))+t;case 4675:return fe+t+we+"flex-line-pack"+ee(t,/align-content|flex-|-self/g,"")+t;case 5548:return fe+t+we+ee(t,"shrink","negative")+t;case 5292:return fe+t+we+ee(t,"basis","preferred-size")+t;case 6060:return fe+"box-"+ee(t,"-grow","")+fe+t+we+ee(t,"grow","positive")+t;case 4554:return fe+ee(t,/([^-])(transform)/g,"$1"+fe+"$2")+t;case 6187:return ee(ee(ee(t,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),t,"")+t;case 5495:case 3959:return ee(t,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return ee(ee(t,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+fe+t+t;case 4200:if(!On(t,/flex-|baseline/))return we+"grid-column-align"+ws(t,e)+t;break;case 2592:case 3360:return we+ee(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,On(r.props,/grid-\w+-end/)})?~jl(t+(n=n[e].value),"span",0)?t:we+ee(t,"-start","")+t+we+"grid-row-span:"+(~jl(n,"span",0)?On(n,/\d+/):+On(n,/\d+/)-+On(t,/\d+/))+";":we+ee(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return On(r.props,/grid-\w+-start/)})?t:we+ee(ee(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ee(t,/(.+)-inline(.+)/,fe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_n(t)-1-e>6)switch(Qe(t,e+1)){case 109:if(Qe(t,e+4)!==45)break;case 102:return ee(t,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+Do+(Qe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~jl(t,"stretch",0)?nx(ee(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ee(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,c){return we+i+":"+s+c+(o?we+i+"-span:"+(l?u:+u-+s)+c:"")+t});case 4949:if(Qe(t,e+6)===121)return ee(t,":",":"+fe)+t;break;case 6444:switch(Qe(t,Qe(t,14)===45?18:11)){case 120:return ee(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Qe(t,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+we+"$2box$3")+t;case 100:return ee(t,":",":"+we)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(t,"scroll-","scroll-snap-")+t}return t}function Tu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function GC(t,e,n,r){switch(t.type){case NC:if(t.children.length)break;case DC:case nm:return t.return=t.return||t.value;case YE:return"";case XE:return t.return=t.value+"{"+Tu(t.children,r)+"}";case hc:if(!_n(t.value=t.props.join(",")))return""}return _n(n=Tu(t.children,r))?t.return=t.value+"{"+n+"}":""}function KC(t){var e=ex(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function QC(t){return function(e){e.root||(e=e.return)&&t(e)}}function YC(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case nm:t.return=nx(t.value,t.length,n);return;case XE:return Tu([ir(t,{value:ee(t.value,"@","@"+fe)})],r);case hc:if(t.length)return $C(n=t.props,function(i){switch(On(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ri(ir(t,{props:[ee(i,/:(read-\w+)/,":"+Do+"$1")]})),Ri(ir(t,{props:[i]})),lf(t,{props:P0(n,r)});break;case"::placeholder":Ri(ir(t,{props:[ee(i,/:(plac\w+)/,":"+fe+"input-$1")]})),Ri(ir(t,{props:[ee(i,/:(plac\w+)/,":"+Do+"$1")]})),Ri(ir(t,{props:[ee(i,/:(plac\w+)/,we+"input-$1")]})),Ri(ir(t,{props:[i]})),lf(t,{props:P0(n,r)});break}return""})}}var XC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ot={},Es=typeof process<"u"&&Ot!==void 0&&(Ot.REACT_APP_SC_ATTR||Ot.SC_ATTR)||"data-styled",rx="active",ix="data-styled-version",mc="6.1.19",im=`/*!sc*/
`,Su=typeof window<"u"&&typeof document<"u",JC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==""?Ot.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ot.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.SC_DISABLE_SPEEDY!==void 0&&Ot.SC_DISABLE_SPEEDY!==""&&Ot.SC_DISABLE_SPEEDY!=="false"&&Ot.SC_DISABLE_SPEEDY),ZC={},gc=Object.freeze([]),xs=Object.freeze({});function sx(t,e,n){return n===void 0&&(n=xs),t.theme!==n.theme&&t.theme||e||n.theme}var ox=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tP=/(^-|-$)/g;function b0(t){return t.replace(eP,"-").replace(tP,"")}var nP=/(a)(d)/gi,ml=52,V0=function(t){return String.fromCharCode(t+(t>25?39:97))};function hf(t){var e,n="";for(e=Math.abs(t);e>ml;e=e/ml|0)n=V0(e%ml)+n;return(V0(e%ml)+n).replace(nP,"$1-$2")}var Rh,ax=5381,qi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},lx=function(t){return qi(ax,t)};function sm(t){return hf(lx(t)>>>0)}function rP(t){return t.displayName||t.name||"Component"}function kh(t){return typeof t=="string"&&!0}var ux=typeof Symbol=="function"&&Symbol.for,cx=ux?Symbol.for("react.memo"):60115,iP=ux?Symbol.for("react.forward_ref"):60112,sP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},oP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},aP=((Rh={})[iP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rh[cx]=hx,Rh);function D0(t){return("type"in(e=t)&&e.type.$$typeof)===cx?hx:"$$typeof"in t?aP[t.$$typeof]:sP;var e}var lP=Object.defineProperty,uP=Object.getOwnPropertyNames,N0=Object.getOwnPropertySymbols,cP=Object.getOwnPropertyDescriptor,hP=Object.getPrototypeOf,M0=Object.prototype;function dx(t,e,n){if(typeof e!="string"){if(M0){var r=hP(e);r&&r!==M0&&dx(t,r,n)}var i=uP(e);N0&&(i=i.concat(N0(e)));for(var s=D0(t),o=D0(e),l=0;l<i.length;++l){var u=i[l];if(!(u in oP||n&&n[u]||o&&u in o||s&&u in s)){var c=cP(e,u);try{lP(t,u,c)}catch{}}}}return t}function gi(t){return typeof t=="function"}function om(t){return typeof t=="object"&&"styledComponentId"in t}function ei(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Au(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function aa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function df(t,e,n){if(n===void 0&&(n=!1),!n&&!aa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=df(t[r],e[r]);else if(aa(e))for(var r in e)t[r]=df(t[r],e[r]);return t}function am(t,e){Object.defineProperty(t,"toString",{value:e})}function yi(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var dP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw yi(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(im);return n},t}(),Bl=new Map,Iu=new Map,Ul=1,gl=function(t){if(Bl.has(t))return Bl.get(t);for(;Iu.has(Ul);)Ul++;var e=Ul++;return Bl.set(t,e),Iu.set(e,t),e},fP=function(t,e){Ul=e+1,Bl.set(t,e),Iu.set(e,t)},pP="style[".concat(Es,"][").concat(ix,'="').concat(mc,'"]'),mP=new RegExp("^".concat(Es,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},yP=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(im),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(mP);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(fP(h,c),gP(t,h,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},$0=function(t){for(var e=document.querySelectorAll(pP),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Es)!==rx&&(yP(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function vP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var fx=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Es,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Es,rx),r.setAttribute(ix,mc);var o=vP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},wP=function(){function t(e){this.element=fx(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw yi(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),_P=function(){function t(e){this.element=fx(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),EP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),L0=Su,xP={isServer:!Su,useCSSOMInjection:!JC},Cu=function(){function t(e,n,r){e===void 0&&(e=xs),n===void 0&&(n={});var i=this;this.options=Ye(Ye({},xP),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Su&&L0&&(L0=!1,$0(this)),am(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",c=function(f){var p=function(x){return Iu.get(x)}(f);if(p===void 0)return"continue";var w=s.names.get(p),I=o.getGroup(f);if(w===void 0||!w.size||I.length===0)return"continue";var P="".concat(Es,".g").concat(f,'[id="').concat(p,'"]'),V="";w!==void 0&&w.forEach(function(x){x.length>0&&(V+="".concat(x,","))}),u+="".concat(I).concat(P,'{content:"').concat(V,'"}').concat(im)},h=0;h<l;h++)c(h);return u}(i)})}return t.registerId=function(e){return gl(e)},t.prototype.rehydrate=function(){!this.server&&Su&&$0(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ye(Ye({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new EP(i):r?new wP(i):new _P(i)}(this.options),new dP(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(gl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(gl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(gl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),TP=/&/g,SP=/^\s*\/\/.*$/gm;function px(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=px(n.children,e)),n})}function AP(t){var e,n,r,i=xs,s=i.options,o=s===void 0?xs:s,l=i.plugins,u=l===void 0?gc:l,c=function(p,w,I){return I.startsWith(n)&&I.endsWith(n)&&I.replaceAll(n,"").length>0?".".concat(e):p},h=u.slice();h.push(function(p){p.type===hc&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(TP,n).replace(r,c))}),o.prefix&&h.push(YC),h.push(GC);var f=function(p,w,I,P){w===void 0&&(w=""),I===void 0&&(I=""),P===void 0&&(P="&"),e=P,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var V=p.replace(SP,""),x=WC(I||w?"".concat(I," ").concat(w," { ").concat(V," }"):V);o.namespace&&(x=px(x,o.namespace));var v=[];return Tu(x,KC(h.concat(QC(function(T){return v.push(T)})))),v};return f.hash=u.length?u.reduce(function(p,w){return w.name||yi(15),qi(p,w.name)},ax).toString():"",f}var IP=new Cu,ff=AP(),mx=hn.createContext({shouldForwardProp:void 0,styleSheet:IP,stylis:ff});mx.Consumer;hn.createContext(void 0);function pf(){return U.useContext(mx)}var gx=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ff);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,am(this,function(){throw yi(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ff),this.name+e.hash},t}(),CP=function(t){return t>="A"&&t<="Z"};function O0(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;CP(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var yx=function(t){return t==null||t===!1||t===""},vx=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!yx(s)&&(Array.isArray(s)&&s.isCss||gi(s)?r.push("".concat(O0(i),":"),s,";"):aa(s)?r.push.apply(r,vs(vs(["".concat(i," {")],vx(s),!1),["}"],!1)):r.push("".concat(O0(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in XC||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function xr(t,e,n,r){if(yx(t))return[];if(om(t))return[".".concat(t.styledComponentId)];if(gi(t)){if(!gi(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return xr(i,e,n,r)}var s;return t instanceof gx?n?(t.inject(n,r),[t.getName(r)]):[t]:aa(t)?vx(t):Array.isArray(t)?Array.prototype.concat.apply(gc,t.map(function(o){return xr(o,e,n,r)})):[t.toString()]}function wx(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(gi(n)&&!om(n))return!1}return!0}var PP=lx(mc),RP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wx(e),this.componentId=n,this.baseHash=qi(PP,n),this.baseStyle=r,Cu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ei(i,this.staticRulesId);else{var s=Au(xr(this.rules,e,n,r)),o=hf(qi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=ei(i,o),this.staticRulesId=o}else{for(var u=qi(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")c+=f;else if(f){var p=Au(xr(f,e,n,r));u=qi(u,p+h),c+=p}}if(c){var w=hf(u>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(c,".".concat(w),void 0,this.componentId)),i=ei(i,w)}}return i},t}(),la=hn.createContext(void 0);la.Consumer;function j0(t){var e=hn.useContext(la),n=U.useMemo(function(){return function(r,i){if(!r)throw yi(14);if(gi(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw yi(8);return i?Ye(Ye({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?hn.createElement(la.Provider,{value:n},t.children):null}var bh={};function kP(t,e,n){var r=om(t),i=t,s=!kh(t),o=e.attrs,l=o===void 0?gc:o,u=e.componentId,c=u===void 0?function(b,M){var $=typeof b!="string"?"sc":b0(b);bh[$]=(bh[$]||0)+1;var E="".concat($,"-").concat(sm(mc+$+bh[$]));return M?"".concat(M,"-").concat(E):E}(e.displayName,e.parentComponentId):u,h=e.displayName,f=h===void 0?function(b){return kh(b)?"styled.".concat(b):"Styled(".concat(rP(b),")")}(t):h,p=e.displayName&&e.componentId?"".concat(b0(e.displayName),"-").concat(e.componentId):e.componentId||c,w=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,I=e.shouldForwardProp;if(r&&i.shouldForwardProp){var P=i.shouldForwardProp;if(e.shouldForwardProp){var V=e.shouldForwardProp;I=function(b,M){return P(b,M)&&V(b,M)}}else I=P}var x=new RP(n,p,r?i.componentStyle:void 0);function v(b,M){return function($,E,y){var S=$.attrs,C=$.componentStyle,k=$.defaultProps,D=$.foldedComponentIds,R=$.styledComponentId,Je=$.target,Wt=hn.useContext(la),Jn=pf(),he=$.shouldForwardProp||Jn.shouldForwardProp,B=sx(E,Wt,k)||xs,K=function(Ct,vt,Pt){for(var Fr,Vn=Ye(Ye({},vt),{className:void 0,theme:Pt}),Zn=0;Zn<Ct.length;Zn+=1){var Dn=gi(Fr=Ct[Zn])?Fr(Vn):Fr;for(var qt in Dn)Vn[qt]=qt==="className"?ei(Vn[qt],Dn[qt]):qt==="style"?Ye(Ye({},Vn[qt]),Dn[qt]):Dn[qt]}return vt.className&&(Vn.className=ei(Vn.className,vt.className)),Vn}(S,E,B),Q=K.as||Je,de={};for(var ne in K)K[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&K.theme===B||(ne==="forwardedAs"?de.as=K.forwardedAs:he&&!he(ne,Q)||(de[ne]=K[ne]));var Ee=function(Ct,vt){var Pt=pf(),Fr=Ct.generateAndInjectStyles(vt,Pt.styleSheet,Pt.stylis);return Fr}(C,K),$t=ei(D,R);return Ee&&($t+=" "+Ee),K.className&&($t+=" "+K.className),de[kh(Q)&&!ox.has(Q)?"class":"className"]=$t,y&&(de.ref=y),U.createElement(Q,de)}(T,b,M)}v.displayName=f;var T=hn.forwardRef(v);return T.attrs=w,T.componentStyle=x,T.displayName=f,T.shouldForwardProp=I,T.foldedComponentIds=r?ei(i.foldedComponentIds,i.styledComponentId):"",T.styledComponentId=p,T.target=r?i.target:t,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(M){for(var $=[],E=1;E<arguments.length;E++)$[E-1]=arguments[E];for(var y=0,S=$;y<S.length;y++)df(M,S[y],!0);return M}({},i.defaultProps,b):b}}),am(T,function(){return".".concat(T.styledComponentId)}),s&&dx(T,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function F0(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var z0=function(t){return Object.assign(t,{isCss:!0})};function lm(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(gi(t)||aa(t))return z0(xr(F0(gc,vs([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?xr(r):z0(xr(F0(r,e)))}function mf(t,e,n){if(n===void 0&&(n=xs),!e)throw yi(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,lm.apply(void 0,vs([i],s,!1)))};return r.attrs=function(i){return mf(t,e,Ye(Ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return mf(t,e,Ye(Ye({},n),i))},r}var _x=function(t){return mf(kP,t)},O=_x;ox.forEach(function(t){O[t]=_x(t)});var bP=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=wx(e),Cu.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Au(xr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Cu.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function VP(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=lm.apply(void 0,vs([t],e,!1)),i="sc-global-".concat(sm(JSON.stringify(r))),s=new bP(r,i),o=function(u){var c=pf(),h=hn.useContext(la),f=hn.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(f,u,c.styleSheet,h,c.stylis),hn.useLayoutEffect(function(){if(!c.styleSheet.server)return l(f,u,c.styleSheet,h,c.stylis),function(){return s.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,h,c.stylis]),null};function l(u,c,h,f,p){if(s.isStatic)s.renderStyles(u,ZC,h,p);else{var w=Ye(Ye({},c),{theme:sx(c,f,o.defaultProps)});s.renderStyles(u,w,h,p)}}return hn.memo(o)}function Ex(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Au(lm.apply(void 0,vs([t],e,!1))),i=sm(r);return new gx(i,r)}const um=U.createContext({});function cm(t){const e=U.useRef(null);return e.current===null&&(e.current=t()),e.current}const hm=typeof window<"u",xx=hm?U.useLayoutEffect:U.useEffect,yc=U.createContext(null);function dm(t,e){t.indexOf(e)===-1&&t.push(e)}function fm(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Gn=(t,e,n)=>n>e?e:n<t?t:n;let Pu=()=>{};const Kn={},Tx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Sx(t){return typeof t=="object"&&t!==null}const Ax=t=>/^0[^.\s]+$/u.test(t);function pm(t){let e;return()=>(e===void 0&&(e=t()),e)}const en=t=>t,DP=(t,e)=>n=>e(t(n)),Ca=(...t)=>t.reduce(DP),ua=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r};class mm{constructor(){this.subscriptions=[]}add(e){return dm(this.subscriptions,e),()=>fm(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const An=t=>t*1e3,In=t=>t/1e3;function Ix(t,e){return e?t*(1e3/e):0}const Cx=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,NP=1e-7,MP=12;function $P(t,e,n,r,i){let s,o,l=0;do o=e+(n-e)/2,s=Cx(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>NP&&++l<MP);return o}function Pa(t,e,n,r){if(t===e&&n===r)return en;const i=s=>$P(s,0,1,t,n);return s=>s===0||s===1?s:Cx(i(s),e,r)}const Px=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Rx=t=>e=>1-t(1-e),kx=Pa(.33,1.53,.69,.99),gm=Rx(kx),bx=Px(gm),Vx=t=>(t*=2)<1?.5*gm(t):.5*(2-Math.pow(2,-10*(t-1))),ym=t=>1-Math.sin(Math.acos(t)),Dx=Rx(ym),Nx=Px(ym),LP=Pa(.42,0,1,1),OP=Pa(0,0,.58,1),Mx=Pa(.42,0,.58,1),jP=t=>Array.isArray(t)&&typeof t[0]!="number",$x=t=>Array.isArray(t)&&typeof t[0]=="number",B0={linear:en,easeIn:LP,easeInOut:Mx,easeOut:OP,circIn:ym,circInOut:Nx,circOut:Dx,backIn:gm,backInOut:bx,backOut:kx,anticipate:Vx},FP=t=>typeof t=="string",U0=t=>{if($x(t)){Pu(t.length===4);const[e,n,r,i]=t;return Pa(e,n,r,i)}else if(FP(t))return Pu(B0[t]!==void 0),B0[t];return t},yl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],H0={value:null,addProjectionMetrics:null};function zP(t,e){let n=new Set,r=new Set,i=!1,s=!1;const o=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1},u=0;function c(f){o.has(f)&&(h.schedule(f),t()),u++,f(l)}const h={schedule:(f,p=!1,w=!1)=>{const P=w&&i?n:r;return p&&o.add(f),P.has(f)||P.add(f),f},cancel:f=>{r.delete(f),o.delete(f)},process:f=>{if(l=f,i){s=!0;return}i=!0,[n,r]=[r,n],n.forEach(c),e&&H0.value&&H0.value.frameloop[e].push(u),u=0,n.clear(),i=!1,s&&(s=!1,h.process(f))}};return h}const BP=40;function Lx(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=yl.reduce((T,b)=>(T[b]=zP(s,e?b:void 0),T),{}),{setup:l,read:u,resolveKeyframes:c,preUpdate:h,update:f,preRender:p,render:w,postRender:I}=o,P=()=>{const T=Kn.useManualTiming?i.timestamp:performance.now();n=!1,Kn.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(T-i.timestamp,BP),1)),i.timestamp=T,i.isProcessing=!0,l.process(i),u.process(i),c.process(i),h.process(i),f.process(i),p.process(i),w.process(i),I.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(P))},V=()=>{n=!0,r=!0,i.isProcessing||t(P)};return{schedule:yl.reduce((T,b)=>{const M=o[b];return T[b]=($,E=!1,y=!1)=>(n||V(),M.schedule($,E,y)),T},{}),cancel:T=>{for(let b=0;b<yl.length;b++)o[yl[b]].cancel(T)},state:i,steps:o}}const{schedule:Ae,cancel:Pr,state:tt,steps:Vh}=Lx(typeof requestAnimationFrame<"u"?requestAnimationFrame:en,!0);let Hl;function UP(){Hl=void 0}const Vt={now:()=>(Hl===void 0&&Vt.set(tt.isProcessing||Kn.useManualTiming?tt.timestamp:performance.now()),Hl),set:t=>{Hl=t,queueMicrotask(UP)}},Ox=t=>e=>typeof e=="string"&&e.startsWith(t),vm=Ox("--"),HP=Ox("var(--"),wm=t=>HP(t)?WP.test(t.split("/*")[0].trim()):!1,WP=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$s={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ca={...$s,transform:t=>Gn(0,1,t)},vl={...$s,default:1},No=t=>Math.round(t*1e5)/1e5,_m=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function qP(t){return t==null}const GP=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Em=(t,e)=>n=>!!(typeof n=="string"&&GP.test(n)&&n.startsWith(t)||e&&!qP(n)&&Object.prototype.hasOwnProperty.call(n,e)),jx=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,l]=r.match(_m);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},KP=t=>Gn(0,255,t),Dh={...$s,transform:t=>Math.round(KP(t))},ti={test:Em("rgb","red"),parse:jx("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+Dh.transform(t)+", "+Dh.transform(e)+", "+Dh.transform(n)+", "+No(ca.transform(r))+")"};function QP(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const gf={test:Em("#"),parse:QP,transform:ti.transform},Ra=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),sr=Ra("deg"),Cn=Ra("%"),X=Ra("px"),YP=Ra("vh"),XP=Ra("vw"),W0={...Cn,parse:t=>Cn.parse(t)/100,transform:t=>Cn.transform(t*100)},Gi={test:Em("hsl","hue"),parse:jx("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+Cn.transform(No(e))+", "+Cn.transform(No(n))+", "+No(ca.transform(r))+")"},je={test:t=>ti.test(t)||gf.test(t)||Gi.test(t),parse:t=>ti.test(t)?ti.parse(t):Gi.test(t)?Gi.parse(t):gf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ti.transform(t):Gi.transform(t),getAnimatableNone:t=>{const e=je.parse(t);return e.alpha=0,je.transform(e)}},JP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ZP(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(_m))==null?void 0:e.length)||0)+(((n=t.match(JP))==null?void 0:n.length)||0)>0}const Fx="number",zx="color",eR="var",tR="var(",q0="${}",nR=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ha(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const l=e.replace(nR,u=>(je.test(u)?(r.color.push(s),i.push(zx),n.push(je.parse(u))):u.startsWith(tR)?(r.var.push(s),i.push(eR),n.push(u)):(r.number.push(s),i.push(Fx),n.push(parseFloat(u))),++s,q0)).split(q0);return{values:n,split:l,indexes:r,types:i}}function Bx(t){return ha(t).values}function Ux(t){const{split:e,types:n}=ha(t),r=e.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=e[o],i[o]!==void 0){const l=n[o];l===Fx?s+=No(i[o]):l===zx?s+=je.transform(i[o]):s+=i[o]}return s}}const rR=t=>typeof t=="number"?0:je.test(t)?je.getAnimatableNone(t):t;function iR(t){const e=Bx(t);return Ux(t)(e.map(rR))}const Rr={test:ZP,parse:Bx,createTransformer:Ux,getAnimatableNone:iR};function Nh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function sR({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const l=n<.5?n*(1+e):n+e-n*e,u=2*n-l;i=Nh(u,l,t+1/3),s=Nh(u,l,t),o=Nh(u,l,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Ru(t,e){return n=>n>0?e:t}const Ce=(t,e,n)=>t+(e-t)*n,Mh=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},oR=[gf,ti,Gi],aR=t=>oR.find(e=>e.test(t));function G0(t){const e=aR(t);if(!e)return!1;let n=e.parse(t);return e===Gi&&(n=sR(n)),n}const K0=(t,e)=>{const n=G0(t),r=G0(e);if(!n||!r)return Ru(t,e);const i={...n};return s=>(i.red=Mh(n.red,r.red,s),i.green=Mh(n.green,r.green,s),i.blue=Mh(n.blue,r.blue,s),i.alpha=Ce(n.alpha,r.alpha,s),ti.transform(i))},yf=new Set(["none","hidden"]);function lR(t,e){return yf.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function uR(t,e){return n=>Ce(t,e,n)}function xm(t){return typeof t=="number"?uR:typeof t=="string"?wm(t)?Ru:je.test(t)?K0:dR:Array.isArray(t)?Hx:typeof t=="object"?je.test(t)?K0:cR:Ru}function Hx(t,e){const n=[...t],r=n.length,i=t.map((s,o)=>xm(s)(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function cR(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=xm(t[i])(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function hR(t,e){const n=[],r={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const s=e.types[i],o=t.indexes[s][r[s]],l=t.values[o]??0;n[i]=l,r[s]++}return n}const dR=(t,e)=>{const n=Rr.createTransformer(e),r=ha(t),i=ha(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?yf.has(t)&&!i.values.length||yf.has(e)&&!r.values.length?lR(t,e):Ca(Hx(hR(r,i),i.values),n):Ru(t,e)};function Wx(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Ce(t,e,n):xm(t)(t,e)}const fR=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>Ae.update(e,n),stop:()=>Pr(e),now:()=>tt.isProcessing?tt.timestamp:Vt.now()}},qx=(t,e,n=10)=>{let r="";const i=Math.max(Math.round(e/n),2);for(let s=0;s<i;s++)r+=Math.round(t(s/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},ku=2e4;function Tm(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<ku;)e+=n,r=t.next(e);return e>=ku?1/0:e}function pR(t,e=100,n){const r=n({...t,keyframes:[0,e]}),i=Math.min(Tm(r),ku);return{type:"keyframes",ease:s=>r.next(i*s).value/e,duration:In(i)}}const mR=5;function Gx(t,e,n){const r=Math.max(e-mR,0);return Ix(n-t(r),e-r)}const Ve={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},$h=.001;function gR({duration:t=Ve.duration,bounce:e=Ve.bounce,velocity:n=Ve.velocity,mass:r=Ve.mass}){let i,s,o=1-e;o=Gn(Ve.minDamping,Ve.maxDamping,o),t=Gn(Ve.minDuration,Ve.maxDuration,In(t)),o<1?(i=c=>{const h=c*o,f=h*t,p=h-n,w=vf(c,o),I=Math.exp(-f);return $h-p/w*I},s=c=>{const f=c*o*t,p=f*n+n,w=Math.pow(o,2)*Math.pow(c,2)*t,I=Math.exp(-f),P=vf(Math.pow(c,2),o);return(-i(c)+$h>0?-1:1)*((p-w)*I)/P}):(i=c=>{const h=Math.exp(-c*t),f=(c-n)*t+1;return-$h+h*f},s=c=>{const h=Math.exp(-c*t),f=(n-c)*(t*t);return h*f});const l=5/t,u=vR(i,s,l);if(t=An(t),isNaN(u))return{stiffness:Ve.stiffness,damping:Ve.damping,duration:t};{const c=Math.pow(u,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const yR=12;function vR(t,e,n){let r=n;for(let i=1;i<yR;i++)r=r-t(r)/e(r);return r}function vf(t,e){return t*Math.sqrt(1-e*e)}const wR=["duration","bounce"],_R=["stiffness","damping","mass"];function Q0(t,e){return e.some(n=>t[n]!==void 0)}function ER(t){let e={velocity:Ve.velocity,stiffness:Ve.stiffness,damping:Ve.damping,mass:Ve.mass,isResolvedFromDuration:!1,...t};if(!Q0(t,_R)&&Q0(t,wR))if(t.visualDuration){const n=t.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Gn(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:Ve.mass,stiffness:i,damping:s}}else{const n=gR(t);e={...e,...n,mass:Ve.mass},e.isResolvedFromDuration=!0}return e}function bu(t=Ve.visualDuration,e=Ve.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],l={done:!1,value:s},{stiffness:u,damping:c,mass:h,duration:f,velocity:p,isResolvedFromDuration:w}=ER({...n,velocity:-In(n.velocity||0)}),I=p||0,P=c/(2*Math.sqrt(u*h)),V=o-s,x=In(Math.sqrt(u/h)),v=Math.abs(V)<5;r||(r=v?Ve.restSpeed.granular:Ve.restSpeed.default),i||(i=v?Ve.restDelta.granular:Ve.restDelta.default);let T;if(P<1){const M=vf(x,P);T=$=>{const E=Math.exp(-P*x*$);return o-E*((I+P*x*V)/M*Math.sin(M*$)+V*Math.cos(M*$))}}else if(P===1)T=M=>o-Math.exp(-x*M)*(V+(I+x*V)*M);else{const M=x*Math.sqrt(P*P-1);T=$=>{const E=Math.exp(-P*x*$),y=Math.min(M*$,300);return o-E*((I+P*x*V)*Math.sinh(y)+M*V*Math.cosh(y))/M}}const b={calculatedDuration:w&&f||null,next:M=>{const $=T(M);if(w)l.done=M>=f;else{let E=M===0?I:0;P<1&&(E=M===0?An(I):Gx(T,M,$));const y=Math.abs(E)<=r,S=Math.abs(o-$)<=i;l.done=y&&S}return l.value=l.done?o:$,l},toString:()=>{const M=Math.min(Tm(b),ku),$=qx(E=>b.next(M*E).value,M,30);return M+"ms "+$},toTransition:()=>{}};return b}bu.applyToOptions=t=>{const e=pR(t,100,bu);return t.ease=e.ease,t.duration=An(e.duration),t.type="keyframes",t};function wf({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:l,max:u,restDelta:c=.5,restSpeed:h}){const f=t[0],p={done:!1,value:f},w=y=>l!==void 0&&y<l||u!==void 0&&y>u,I=y=>l===void 0?u:u===void 0||Math.abs(l-y)<Math.abs(u-y)?l:u;let P=n*e;const V=f+P,x=o===void 0?V:o(V);x!==V&&(P=x-f);const v=y=>-P*Math.exp(-y/r),T=y=>x+v(y),b=y=>{const S=v(y),C=T(y);p.done=Math.abs(S)<=c,p.value=p.done?x:C};let M,$;const E=y=>{w(p.value)&&(M=y,$=bu({keyframes:[p.value,I(p.value)],velocity:Gx(T,y,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:h}))};return E(0),{calculatedDuration:null,next:y=>{let S=!1;return!$&&M===void 0&&(S=!0,b(y),E(y)),M!==void 0&&y>=M?$.next(y-M):(!S&&b(y),p)}}}function xR(t,e,n){const r=[],i=n||Kn.mix||Wx,s=t.length-1;for(let o=0;o<s;o++){let l=i(t[o],t[o+1]);if(e){const u=Array.isArray(e)?e[o]||en:e;l=Ca(u,l)}r.push(l)}return r}function TR(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(Pu(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const l=xR(e,r,i),u=l.length,c=h=>{if(o&&h<t[0])return e[0];let f=0;if(u>1)for(;f<t.length-2&&!(h<t[f+1]);f++);const p=ua(t[f],t[f+1],h);return l[f](p)};return n?h=>c(Gn(t[0],t[s-1],h)):c}function SR(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=ua(0,e,r);t.push(Ce(n,1,i))}}function AR(t){const e=[0];return SR(e,t.length-1),e}function IR(t,e){return t.map(n=>n*e)}function CR(t,e){return t.map(()=>e||Mx).splice(0,t.length-1)}function Mo({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=jP(r)?r.map(U0):U0(r),s={done:!1,value:e[0]},o=IR(n&&n.length===e.length?n:AR(e),t),l=TR(o,e,{ease:Array.isArray(i)?i:CR(e,i)});return{calculatedDuration:t,next:u=>(s.value=l(u),s.done=u>=t,s)}}const PR=t=>t!==null;function Sm(t,{repeat:e,repeatType:n="loop"},r,i=1){const s=t.filter(PR),l=i<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!l||r===void 0?s[l]:r}const RR={decay:wf,inertia:wf,tween:Mo,keyframes:Mo,spring:bu};function Kx(t){typeof t.type=="string"&&(t.type=RR[t.type])}class Am{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const kR=t=>t/100;class Im extends Am{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==Vt.now()&&this.tick(Vt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Kx(e);const{type:n=Mo,repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=e;let{keyframes:l}=e;const u=n||Mo;u!==Mo&&typeof l[0]!="number"&&(this.mixKeyframes=Ca(kR,Wx(l[0],l[1])),l=[0,100]);const c=u({...e,keyframes:l});s==="mirror"&&(this.mirroredGenerator=u({...e,keyframes:[...l].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Tm(c));const{calculatedDuration:h}=c;this.calculatedDuration=h,this.resolvedDuration=h+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:r,totalDuration:i,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:l,calculatedDuration:u}=this;if(this.startTime===null)return r.next(0);const{delay:c=0,keyframes:h,repeat:f,repeatType:p,repeatDelay:w,type:I,onUpdate:P,finalKeyframe:V}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const x=this.currentTime-c*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?x<0:x>i;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let T=this.currentTime,b=r;if(f){const y=Math.min(this.currentTime,i)/l;let S=Math.floor(y),C=y%1;!C&&y>=1&&(C=1),C===1&&S--,S=Math.min(S,f+1),!!(S%2)&&(p==="reverse"?(C=1-C,w&&(C-=w/l)):p==="mirror"&&(b=o)),T=Gn(0,1,C)*l}const M=v?{done:!1,value:h[0]}:b.next(T);s&&(M.value=s(M.value));let{done:$}=M;!v&&u!==null&&($=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&$);return E&&I!==wf&&(M.value=Sm(h,this.options,V,this.speed)),P&&P(M.value),E&&this.finish(),M}then(e,n){return this.finished.then(e,n)}get duration(){return In(this.calculatedDuration)}get time(){return In(this.currentTime)}set time(e){var n;e=An(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Vt.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=In(this.currentTime))}play(){var i,s;if(this.isStopped)return;const{driver:e=fR,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(i=this.options).onPlay)==null||s.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Vt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function bR(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ni=t=>t*180/Math.PI,_f=t=>{const e=ni(Math.atan2(t[1],t[0]));return Ef(e)},VR={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:_f,rotateZ:_f,skewX:t=>ni(Math.atan(t[1])),skewY:t=>ni(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Ef=t=>(t=t%360,t<0&&(t+=360),t),Y0=_f,X0=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),J0=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),DR={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:X0,scaleY:J0,scale:t=>(X0(t)+J0(t))/2,rotateX:t=>Ef(ni(Math.atan2(t[6],t[5]))),rotateY:t=>Ef(ni(Math.atan2(-t[2],t[0]))),rotateZ:Y0,rotate:Y0,skewX:t=>ni(Math.atan(t[4])),skewY:t=>ni(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function xf(t){return t.includes("scale")?1:0}function Tf(t,e){if(!t||t==="none")return xf(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=DR,i=n;else{const l=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=VR,i=l}if(!i)return xf(e);const s=r[e],o=i[1].split(",").map(MR);return typeof s=="function"?s(o):o[s]}const NR=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Tf(n,e)};function MR(t){return parseFloat(t.trim())}const Ls=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Os=new Set(Ls),Z0=t=>t===$s||t===X,$R=new Set(["x","y","z"]),LR=Ls.filter(t=>!$R.has(t));function OR(t){const e=[];return LR.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const ai={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Tf(e,"x"),y:(t,{transform:e})=>Tf(e,"y")};ai.translateX=ai.x;ai.translateY=ai.y;const li=new Set;let Sf=!1,Af=!1,If=!1;function Qx(){if(Af){const t=Array.from(li).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=OR(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var l;(l=r.getValue(s))==null||l.set(o)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Af=!1,Sf=!1,li.forEach(t=>t.complete(If)),li.clear()}function Yx(){li.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Af=!0)})}function jR(){If=!0,Yx(),Qx(),If=!1}class Cm{constructor(e,n,r,i,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(li.add(this),Sf||(Sf=!0,Ae.read(Yx),Ae.resolveKeyframes(Qx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;if(e[0]===null){const s=i==null?void 0:i.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(r&&n){const l=r.readValue(n,o);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=o),i&&s===void 0&&i.set(e[0])}bR(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),li.delete(this)}cancel(){this.state==="scheduled"&&(li.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const FR=t=>t.startsWith("--");function zR(t,e,n){FR(e)?t.style.setProperty(e,n):t.style[e]=n}const BR=pm(()=>window.ScrollTimeline!==void 0),UR={};function HR(t,e){const n=pm(t);return()=>UR[e]??n()}const Xx=HR(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_o=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,ev={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_o([0,.65,.55,1]),circOut:_o([.55,0,1,.45]),backIn:_o([.31,.01,.66,-.59]),backOut:_o([.33,1.53,.69,.99])};function Jx(t,e){if(t)return typeof t=="function"?Xx()?qx(t,e):"ease-out":$x(t)?_o(t):Array.isArray(t)?t.map(n=>Jx(n,e)||ev.easeOut):ev[t]}function WR(t,e,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:l="easeOut",times:u}={},c=void 0){const h={[e]:n};u&&(h.offset=u);const f=Jx(l,i);Array.isArray(f)&&(h.easing=f);const p={delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(p.pseudoElement=c),t.animate(h,p)}function Zx(t){return typeof t=="function"&&"applyToOptions"in t}function qR({type:t,...e}){return Zx(t)&&Xx()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class GR extends Am{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:n,name:r,keyframes:i,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:l,onComplete:u}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Pu(typeof e.type!="string");const c=qR(e);this.animation=WR(n,r,i,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const h=Sm(i,this.options,l,this.speed);this.updateMotionValue?this.updateMotionValue(h):zR(n,r,h),this.animation.cancel()}u==null||u(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,n;this.isPseudoElement||(n=(e=this.animation).commitStyles)==null||n.call(e)}get duration(){var n,r;const e=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return In(Number(e))}get time(){return In(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=An(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&BR()?(this.animation.timeline=e,en):n(this)}}const eT={anticipate:Vx,backInOut:bx,circInOut:Nx};function KR(t){return t in eT}function QR(t){typeof t.ease=="string"&&KR(t.ease)&&(t.ease=eT[t.ease])}const tv=10;class YR extends GR{constructor(e){QR(e),Kx(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:r,onComplete:i,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const l=new Im({...o,autoplay:!1}),u=An(this.finishedTime??this.time);n.setWithVelocity(l.sample(u-tv).value,l.sample(u).value,tv),l.stop()}}const nv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Rr.test(t)||t==="0")&&!t.startsWith("url("));function XR(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function JR(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=nv(i,e),l=nv(s,e);return!o||!l?!1:XR(t)||(n==="spring"||Zx(n))&&r}function Cf(t){t.duration=0,t.type}const ZR=new Set(["opacity","clipPath","filter","transform"]),ek=pm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function tk(t){var h;const{motionValue:e,name:n,repeatDelay:r,repeatType:i,damping:s,type:o}=t;if(!(((h=e==null?void 0:e.owner)==null?void 0:h.current)instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:c}=e.owner.getProps();return ek()&&n&&ZR.has(n)&&(n!=="transform"||!c)&&!u&&!r&&i!=="mirror"&&s!==0&&o!=="inertia"}const nk=40;class rk extends Am{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",keyframes:l,name:u,motionValue:c,element:h,...f}){var I;super(),this.stop=()=>{var P,V;this._animation&&(this._animation.stop(),(P=this.stopTimeline)==null||P.call(this)),(V=this.keyframeResolver)==null||V.cancel()},this.createdAt=Vt.now();const p={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,name:u,motionValue:c,element:h,...f},w=(h==null?void 0:h.KeyframeResolver)||Cm;this.keyframeResolver=new w(l,(P,V,x)=>this.onKeyframesResolved(P,V,p,!x),u,c,h),(I=this.keyframeResolver)==null||I.scheduleResolve()}onKeyframesResolved(e,n,r,i){this.keyframeResolver=void 0;const{name:s,type:o,velocity:l,delay:u,isHandoff:c,onUpdate:h}=r;this.resolvedAt=Vt.now(),JR(e,s,o,l)||((Kn.instantAnimations||!u)&&(h==null||h(Sm(e,r,n))),e[0]=e[e.length-1],Cf(r),r.repeat=0);const p={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>nk?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:e},w=!c&&tk(p)?new YR({...p,element:p.motionValue.owner.current}):new Im(p);w.finished.then(()=>this.notifyFinished()).catch(en),this.pendingTimeline&&(this.stopTimeline=w.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=w}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),jR()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const ik=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function sk(t){const e=ik.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function tT(t,e,n=1){const[r,i]=sk(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return Tx(o)?parseFloat(o):o}return wm(i)?tT(i,e,n+1):i}function Pm(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const nT=new Set(["width","height","top","left","right","bottom",...Ls]),ok={test:t=>t==="auto",parse:t=>t},rT=t=>e=>e.test(t),iT=[$s,X,Cn,sr,XP,YP,ok],rv=t=>iT.find(rT(t));function ak(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Ax(t):!0}const lk=new Set(["brightness","contrast","saturate","opacity"]);function uk(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(_m)||[];if(!r)return t;const i=n.replace(r,"");let s=lk.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const ck=/\b([a-z-]*)\(.*?\)/gu,Pf={...Rr,getAnimatableNone:t=>{const e=t.match(ck);return e?e.map(uk).join(" "):t}},iv={...$s,transform:Math.round},hk={rotate:sr,rotateX:sr,rotateY:sr,rotateZ:sr,scale:vl,scaleX:vl,scaleY:vl,scaleZ:vl,skew:sr,skewX:sr,skewY:sr,distance:X,translateX:X,translateY:X,translateZ:X,x:X,y:X,z:X,perspective:X,transformPerspective:X,opacity:ca,originX:W0,originY:W0,originZ:X},Rm={borderWidth:X,borderTopWidth:X,borderRightWidth:X,borderBottomWidth:X,borderLeftWidth:X,borderRadius:X,radius:X,borderTopLeftRadius:X,borderTopRightRadius:X,borderBottomRightRadius:X,borderBottomLeftRadius:X,width:X,maxWidth:X,height:X,maxHeight:X,top:X,right:X,bottom:X,left:X,padding:X,paddingTop:X,paddingRight:X,paddingBottom:X,paddingLeft:X,margin:X,marginTop:X,marginRight:X,marginBottom:X,marginLeft:X,backgroundPositionX:X,backgroundPositionY:X,...hk,zIndex:iv,fillOpacity:ca,strokeOpacity:ca,numOctaves:iv},dk={...Rm,color:je,backgroundColor:je,outlineColor:je,fill:je,stroke:je,borderColor:je,borderTopColor:je,borderRightColor:je,borderBottomColor:je,borderLeftColor:je,filter:Pf,WebkitFilter:Pf},sT=t=>dk[t];function oT(t,e){let n=sT(t);return n!==Pf&&(n=Rr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const fk=new Set(["auto","none","0"]);function pk(t,e,n){let r=0,i;for(;r<t.length&&!i;){const s=t[r];typeof s=="string"&&!fk.has(s)&&ha(s).values.length&&(i=t[r]),r++}if(i&&n)for(const s of e)t[s]=oT(n,i)}class mk extends Cm{constructor(e,n,r,i,s){super(e,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let c=e[u];if(typeof c=="string"&&(c=c.trim(),wm(c))){const h=tT(c,n.current);h!==void 0&&(e[u]=h),u===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!nT.has(r)||e.length!==2)return;const[i,s]=e,o=rv(i),l=rv(s);if(o!==l)if(Z0(o)&&Z0(l))for(let u=0;u<e.length;u++){const c=e[u];typeof c=="string"&&(e[u]=parseFloat(c))}else ai[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)(e[i]===null||ak(e[i]))&&r.push(i);r.length&&pk(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ai[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var l;const{element:e,name:n,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=r.length-1,o=r[s];r[s]=ai[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([u,c])=>{e.getValue(u).set(c)}),this.resolveNoneKeyframes()}}function gk(t,e,n){if(t instanceof EventTarget)return[t];if(typeof t=="string"){const i=document.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t)}const aT=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function lT(t){return Sx(t)&&"offsetHeight"in t}const sv=30,yk=t=>!isNaN(parseFloat(t));class vk{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var s;const i=Vt.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Vt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=yk(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new mm);const r=this.events[e].add(n);return e==="change"?()=>{r(),Ae.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Vt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>sv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,sv);return Ix(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ts(t,e){return new vk(t,e)}const{schedule:km,cancel:MM}=Lx(queueMicrotask,!1),an={x:!1,y:!1};function uT(){return an.x||an.y}function wk(t){return t==="x"||t==="y"?an[t]?null:(an[t]=!0,()=>{an[t]=!1}):an.x||an.y?null:(an.x=an.y=!0,()=>{an.x=an.y=!1})}function cT(t,e){const n=gk(t),r=new AbortController,i={passive:!0,...e,signal:r.signal};return[n,i,()=>r.abort()]}function ov(t){return!(t.pointerType==="touch"||uT())}function _k(t,e,n={}){const[r,i,s]=cT(t,n),o=l=>{if(!ov(l))return;const{target:u}=l,c=e(u,l);if(typeof c!="function"||!u)return;const h=f=>{ov(f)&&(c(f),u.removeEventListener("pointerleave",h))};u.addEventListener("pointerleave",h,i)};return r.forEach(l=>{l.addEventListener("pointerenter",o,i)}),s}const hT=(t,e)=>e?t===e?!0:hT(t,e.parentElement):!1,bm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Ek=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function xk(t){return Ek.has(t.tagName)||t.tabIndex!==-1}const Wl=new WeakSet;function av(t){return e=>{e.key==="Enter"&&t(e)}}function Lh(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Tk=(t,e)=>{const n=t.currentTarget;if(!n)return;const r=av(()=>{if(Wl.has(n))return;Lh(n,"down");const i=av(()=>{Lh(n,"up")}),s=()=>Lh(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",r,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),e)};function lv(t){return bm(t)&&!uT()}function Sk(t,e,n={}){const[r,i,s]=cT(t,n),o=l=>{const u=l.currentTarget;if(!lv(l))return;Wl.add(u);const c=e(u,l),h=(w,I)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),Wl.has(u)&&Wl.delete(u),lv(w)&&typeof c=="function"&&c(w,{success:I})},f=w=>{h(w,u===window||u===document||n.useGlobalTarget||hT(u,w.target))},p=w=>{h(w,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",o,i),lT(l)&&(l.addEventListener("focus",c=>Tk(c,i)),!xk(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),s}function dT(t){return Sx(t)&&"ownerSVGElement"in t}function Ak(t){return dT(t)&&t.tagName==="svg"}const gt=t=>!!(t&&t.getVelocity),Ik=[...iT,je,Rr],Ck=t=>Ik.find(rT(t)),Vm=U.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class Pk extends U.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=lT(r)&&r.offsetWidth||0,s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft,s.right=i-s.width-s.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Rk({children:t,isPresent:e,anchorX:n,root:r}){const i=U.useId(),s=U.useRef(null),o=U.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=U.useContext(Vm);return U.useInsertionEffect(()=>{const{width:u,height:c,top:h,left:f,right:p}=o.current;if(e||!s.current||!u||!c)return;const w=n==="left"?`left: ${f}`:`right: ${p}`;s.current.dataset.motionPopId=i;const I=document.createElement("style");l&&(I.nonce=l);const P=r??document.head;return P.appendChild(I),I.sheet&&I.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${w}px !important;
            top: ${h}px !important;
          }
        `),()=>{P.contains(I)&&P.removeChild(I)}},[e]),A.jsx(Pk,{isPresent:e,childRef:s,sizeRef:o,children:U.cloneElement(t,{ref:s})})}const kk=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o,anchorX:l,root:u})=>{const c=cm(bk),h=U.useId();let f=!0,p=U.useMemo(()=>(f=!1,{id:h,initial:e,isPresent:n,custom:i,onExitComplete:w=>{c.set(w,!0);for(const I of c.values())if(!I)return;r&&r()},register:w=>(c.set(w,!1),()=>c.delete(w))}),[n,c,r]);return s&&f&&(p={...p}),U.useMemo(()=>{c.forEach((w,I)=>c.set(I,!1))},[n]),U.useEffect(()=>{!n&&!c.size&&r&&r()},[n]),o==="popLayout"&&(t=A.jsx(Rk,{isPresent:n,anchorX:l,root:u,children:t})),A.jsx(yc.Provider,{value:p,children:t})};function bk(){return new Map}function fT(t=!0){const e=U.useContext(yc);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,s=U.useId();U.useEffect(()=>{if(t)return i(s)},[t]);const o=U.useCallback(()=>t&&r&&r(s),[s,r,t]);return!n&&r?[!1,o]:[!0]}const wl=t=>t.key||"";function uv(t){const e=[];return U.Children.forEach(t,n=>{U.isValidElement(n)&&e.push(n)}),e}const Vu=({children:t,custom:e,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1,anchorX:l="left",root:u})=>{const[c,h]=fT(o),f=U.useMemo(()=>uv(t),[t]),p=o&&!c?[]:f.map(wl),w=U.useRef(!0),I=U.useRef(f),P=cm(()=>new Map),[V,x]=U.useState(f),[v,T]=U.useState(f);xx(()=>{w.current=!1,I.current=f;for(let $=0;$<v.length;$++){const E=wl(v[$]);p.includes(E)?P.delete(E):P.get(E)!==!0&&P.set(E,!1)}},[v,p.length,p.join("-")]);const b=[];if(f!==V){let $=[...f];for(let E=0;E<v.length;E++){const y=v[E],S=wl(y);p.includes(S)||($.splice(E,0,y),b.push(y))}return s==="wait"&&b.length&&($=b),T(uv($)),x(f),null}const{forceRender:M}=U.useContext(um);return A.jsx(A.Fragment,{children:v.map($=>{const E=wl($),y=o&&!c?!1:f===v||p.includes(E),S=()=>{if(P.has(E))P.set(E,!0);else return;let C=!0;P.forEach(k=>{k||(C=!1)}),C&&(M==null||M(),T(I.current),o&&(h==null||h()),r&&r())};return A.jsx(kk,{isPresent:y,initial:!w.current||n?void 0:!1,custom:e,presenceAffectsLayout:i,mode:s,root:u,onExitComplete:y?void 0:S,anchorX:l,children:$},E)})})},pT=U.createContext({strict:!1}),cv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ss={};for(const t in cv)Ss[t]={isEnabled:e=>cv[t].some(n=>!!e[n])};function Vk(t){for(const e in t)Ss[e]={...Ss[e],...t[e]}}const Dk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Du(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Dk.has(t)}let mT=t=>!Du(t);function Nk(t){typeof t=="function"&&(mT=e=>e.startsWith("on")?!Du(e):t(e))}try{Nk(require("@emotion/is-prop-valid").default)}catch{}function Mk(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(mT(i)||n===!0&&Du(i)||!e&&!Du(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}const vc=U.createContext({});function wc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function da(t){return typeof t=="string"||Array.isArray(t)}const Dm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Nm=["initial",...Dm];function _c(t){return wc(t.animate)||Nm.some(e=>da(t[e]))}function gT(t){return!!(_c(t)||t.variants)}function $k(t,e){if(_c(t)){const{initial:n,animate:r}=t;return{initial:n===!1||da(n)?n:void 0,animate:da(r)?r:void 0}}return t.inherit!==!1?e:{}}function Lk(t){const{initial:e,animate:n}=$k(t,U.useContext(vc));return U.useMemo(()=>({initial:e,animate:n}),[hv(e),hv(n)])}function hv(t){return Array.isArray(t)?t.join(" "):t}const fa={};function Ok(t){for(const e in t)fa[e]=t[e],vm(e)&&(fa[e].isCSSVariable=!0)}function yT(t,{layout:e,layoutId:n}){return Os.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!fa[t]||t==="opacity")}const jk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Fk=Ls.length;function zk(t,e,n){let r="",i=!0;for(let s=0;s<Fk;s++){const o=Ls[s],l=t[o];if(l===void 0)continue;let u=!0;if(typeof l=="number"?u=l===(o.startsWith("scale")?1:0):u=parseFloat(l)===0,!u||n){const c=aT(l,Rm[o]);if(!u){i=!1;const h=jk[o]||o;r+=`${h}(${c}) `}n&&(e[o]=c)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function Mm(t,e,n){const{style:r,vars:i,transformOrigin:s}=t;let o=!1,l=!1;for(const u in e){const c=e[u];if(Os.has(u)){o=!0;continue}else if(vm(u)){i[u]=c;continue}else{const h=aT(c,Rm[u]);u.startsWith("origin")?(l=!0,s[u]=h):r[u]=h}}if(e.transform||(o||n?r.transform=zk(e,t.transform,n):r.transform&&(r.transform="none")),l){const{originX:u="50%",originY:c="50%",originZ:h=0}=s;r.transformOrigin=`${u} ${c} ${h}`}}const $m=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function vT(t,e,n){for(const r in e)!gt(e[r])&&!yT(r,n)&&(t[r]=e[r])}function Bk({transformTemplate:t},e){return U.useMemo(()=>{const n=$m();return Mm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function Uk(t,e){const n=t.style||{},r={};return vT(r,n,t),Object.assign(r,Bk(t,e)),r}function Hk(t,e){const n={},r=Uk(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const Wk={offset:"stroke-dashoffset",array:"stroke-dasharray"},qk={offset:"strokeDashoffset",array:"strokeDasharray"};function Gk(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?Wk:qk;t[s.offset]=X.transform(-r);const o=X.transform(e),l=X.transform(n);t[s.array]=`${o} ${l}`}function wT(t,{attrX:e,attrY:n,attrScale:r,pathLength:i,pathSpacing:s=1,pathOffset:o=0,...l},u,c,h){if(Mm(t,l,c),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:p}=t;f.transform&&(p.transform=f.transform,delete f.transform),(p.transform||f.transformOrigin)&&(p.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),p.transform&&(p.transformBox=(h==null?void 0:h.transformBox)??"fill-box",delete f.transformBox),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),i!==void 0&&Gk(f,i,s,o,!1)}const _T=()=>({...$m(),attrs:{}}),ET=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Kk(t,e,n,r){const i=U.useMemo(()=>{const s=_T();return wT(s,e,ET(r),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};vT(s,t.style,t),i.style={...s,...i.style}}return i}const Qk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Lm(t){return typeof t!="string"||t.includes("-")?!1:!!(Qk.indexOf(t)>-1||/[A-Z]/u.test(t))}function Yk(t,e,n,{latestValues:r},i,s=!1){const l=(Lm(t)?Kk:Hk)(e,r,i,t),u=Mk(e,typeof t=="string",s),c=t!==U.Fragment?{...u,...l,ref:n}:{},{children:h}=e,f=U.useMemo(()=>gt(h)?h.get():h,[h]);return U.createElement(t,{...c,children:f})}function dv(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function Om(t,e,n,r){if(typeof e=="function"){const[i,s]=dv(r);e=e(n!==void 0?n:t.custom,i,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,s]=dv(r);e=e(n!==void 0?n:t.custom,i,s)}return e}function ql(t){return gt(t)?t.get():t}function Xk({scrapeMotionValuesFromProps:t,createRenderState:e},n,r,i){return{latestValues:Jk(n,r,i,t),renderState:e()}}function Jk(t,e,n,r){const i={},s=r(t,{});for(const p in s)i[p]=ql(s[p]);let{initial:o,animate:l}=t;const u=_c(t),c=gT(t);e&&c&&!u&&t.inherit!==!1&&(o===void 0&&(o=e.initial),l===void 0&&(l=e.animate));let h=n?n.initial===!1:!1;h=h||o===!1;const f=h?l:o;if(f&&typeof f!="boolean"&&!wc(f)){const p=Array.isArray(f)?f:[f];for(let w=0;w<p.length;w++){const I=Om(t,p[w]);if(I){const{transitionEnd:P,transition:V,...x}=I;for(const v in x){let T=x[v];if(Array.isArray(T)){const b=h?T.length-1:0;T=T[b]}T!==null&&(i[v]=T)}for(const v in P)i[v]=P[v]}}}return i}const xT=t=>(e,n)=>{const r=U.useContext(vc),i=U.useContext(yc),s=()=>Xk(t,e,r,i);return n?s():cm(s)};function jm(t,e,n){var s;const{style:r}=t,i={};for(const o in r)(gt(r[o])||e.style&&gt(e.style[o])||yT(o,t)||((s=n==null?void 0:n.getValue(o))==null?void 0:s.liveStyle)!==void 0)&&(i[o]=r[o]);return i}const Zk=xT({scrapeMotionValuesFromProps:jm,createRenderState:$m});function TT(t,e,n){const r=jm(t,e,n);for(const i in t)if(gt(t[i])||gt(e[i])){const s=Ls.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=t[i]}return r}const e5=xT({scrapeMotionValuesFromProps:TT,createRenderState:_T}),t5=Symbol.for("motionComponentSymbol");function Ki(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function n5(t,e,n){return U.useCallback(r=>{r&&t.onMount&&t.onMount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):Ki(n)&&(n.current=r))},[e])}const Fm=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),r5="framerAppearId",ST="data-"+Fm(r5),AT=U.createContext({});function i5(t,e,n,r,i){var P,V;const{visualElement:s}=U.useContext(vc),o=U.useContext(pT),l=U.useContext(yc),u=U.useContext(Vm).reducedMotion,c=U.useRef(null);r=r||o.renderer,!c.current&&r&&(c.current=r(t,{visualState:e,parent:s,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u}));const h=c.current,f=U.useContext(AT);h&&!h.projection&&i&&(h.type==="html"||h.type==="svg")&&s5(c.current,n,i,f);const p=U.useRef(!1);U.useInsertionEffect(()=>{h&&p.current&&h.update(n,l)});const w=n[ST],I=U.useRef(!!w&&!((P=window.MotionHandoffIsComplete)!=null&&P.call(window,w))&&((V=window.MotionHasOptimisedAnimation)==null?void 0:V.call(window,w)));return xx(()=>{h&&(p.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),h.scheduleRenderMicrotask(),I.current&&h.animationState&&h.animationState.animateChanges())}),U.useEffect(()=>{h&&(!I.current&&h.animationState&&h.animationState.animateChanges(),I.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)==null||x.call(window,w)}),I.current=!1),h.enteringChildren=void 0)}),h}function s5(t,e,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:l,layoutScroll:u,layoutRoot:c,layoutCrossfade:h}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:IT(t.parent)),t.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||l&&Ki(l),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,crossfade:h,layoutScroll:u,layoutRoot:c})}function IT(t){if(t)return t.options.allowProjection!==!1?t.projection:IT(t.parent)}function Oh(t,{forwardMotionProps:e=!1}={},n,r){n&&Vk(n);const i=Lm(t)?e5:Zk;function s(l,u){let c;const h={...U.useContext(Vm),...l,layoutId:o5(l)},{isStatic:f}=h,p=Lk(l),w=i(l,f);if(!f&&hm){a5();const I=l5(h);c=I.MeasureLayout,p.visualElement=i5(t,w,h,r,I.ProjectionNode)}return A.jsxs(vc.Provider,{value:p,children:[c&&p.visualElement?A.jsx(c,{visualElement:p.visualElement,...h}):null,Yk(t,l,n5(w,p.visualElement,u),w,f,e)]})}s.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const o=U.forwardRef(s);return o[t5]=t,o}function o5({layoutId:t}){const e=U.useContext(um).id;return e&&t!==void 0?e+"-"+t:t}function a5(t,e){U.useContext(pT).strict}function l5(t){const{drag:e,layout:n}=Ss;if(!e&&!n)return{};const r={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function u5(t,e){if(typeof Proxy>"u")return Oh;const n=new Map,r=(s,o)=>Oh(s,o,t,e),i=(s,o)=>r(s,o);return new Proxy(i,{get:(s,o)=>o==="create"?r:(n.has(o)||n.set(o,Oh(o,void 0,t,e)),n.get(o))})}function CT({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function c5({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function h5(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function jh(t){return t===void 0||t===1}function Rf({scale:t,scaleX:e,scaleY:n}){return!jh(t)||!jh(e)||!jh(n)}function Kr(t){return Rf(t)||PT(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function PT(t){return fv(t.x)||fv(t.y)}function fv(t){return t&&t!=="0%"}function Nu(t,e,n){const r=t-n,i=e*r;return n+i}function pv(t,e,n,r,i){return i!==void 0&&(t=Nu(t,i,r)),Nu(t,n,r)+e}function kf(t,e=0,n=1,r,i){t.min=pv(t.min,e,n,r,i),t.max=pv(t.max,e,n,r,i)}function RT(t,{x:e,y:n}){kf(t.x,e.translate,e.scale,e.originPoint),kf(t.y,n.translate,n.scale,n.originPoint)}const mv=.999999999999,gv=1.0000000000001;function d5(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let l=0;l<i;l++){s=n[l],o=s.projectionDelta;const{visualElement:u}=s.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Yi(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,RT(t,o)),r&&Kr(s.latestValues)&&Yi(t,s.latestValues))}e.x<gv&&e.x>mv&&(e.x=1),e.y<gv&&e.y>mv&&(e.y=1)}function Qi(t,e){t.min=t.min+e,t.max=t.max+e}function yv(t,e,n,r,i=.5){const s=Ce(t.min,t.max,i);kf(t,e,n,s,r)}function Yi(t,e){yv(t.x,e.x,e.scaleX,e.scale,e.originX),yv(t.y,e.y,e.scaleY,e.scale,e.originY)}function kT(t,e){return CT(h5(t.getBoundingClientRect(),e))}function f5(t,e,n){const r=kT(t,n),{scroll:i}=e;return i&&(Qi(r.x,i.offset.x),Qi(r.y,i.offset.y)),r}const vv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Xi=()=>({x:vv(),y:vv()}),wv=()=>({min:0,max:0}),Ne=()=>({x:wv(),y:wv()}),bf={current:null},bT={current:!1};function p5(){if(bT.current=!0,!!hm)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>bf.current=t.matches;t.addEventListener("change",e),e()}else bf.current=!1}const m5=new WeakMap;function g5(t,e,n){for(const r in e){const i=e[r],s=n[r];if(gt(i))t.addValue(r,i);else if(gt(s))t.addValue(r,Ts(i,{owner:t}));else if(s!==i)if(t.hasValue(r)){const o=t.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(r);t.addValue(r,Ts(o!==void 0?o:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const _v=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class y5{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Cm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Vt.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Ae.render(this.render,!1,!0))};const{latestValues:u,renderState:c}=o;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!s,this.isControllingVariants=_c(n),this.isVariantNode=gT(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const w=f[p];u[p]!==void 0&&gt(w)&&w.set(u[p])}}mount(e){var n;this.current=e,m5.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),bT.current||p5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:bf.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),Pr(this.notifyUpdate),Pr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Os.has(e);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&Ae.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ss){const n=Ss[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ne()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<_v.length;r++){const i=_v[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=e[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=g5(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Ts(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(Tx(r)||Ax(r))?r=parseFloat(r):!Ck(r)&&Rr.test(n)&&(r=oT(e,n)),this.setBaseTarget(e,gt(r)?r.get():r)),gt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=Om(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(r=o[e])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!gt(i)?i:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new mm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){km.render(this.render)}}class VT extends y5{constructor(){super(...arguments),this.KeyframeResolver=mk}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;gt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function DT(t,{style:e,vars:n},r,i){const s=t.style;let o;for(o in e)s[o]=e[o];i==null||i.applyProjectionStyles(s,r);for(o in n)s.setProperty(o,n[o])}function v5(t){return window.getComputedStyle(t)}class w5 extends VT{constructor(){super(...arguments),this.type="html",this.renderInstance=DT}readValueFromInstance(e,n){var r;if(Os.has(n))return(r=this.projection)!=null&&r.isProjecting?xf(n):NR(e,n);{const i=v5(e),s=(vm(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return kT(e,n)}build(e,n,r){Mm(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return jm(e,n,r)}}const NT=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function _5(t,e,n,r){DT(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(NT.has(i)?i:Fm(i),e.attrs[i])}class E5 extends VT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ne}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Os.has(n)){const r=sT(n);return r&&r.default||0}return n=NT.has(n)?n:Fm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return TT(e,n,r)}build(e,n,r){wT(e,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,n,r,i){_5(e,n,r,i)}mount(e){this.isSVGTag=ET(e.tagName),super.mount(e)}}const x5=(t,e)=>Lm(t)?new E5(e):new w5(e,{allowProjection:t!==U.Fragment});function is(t,e,n){const r=t.getProps();return Om(r,e,n!==void 0?n:r.custom,t)}const Vf=t=>Array.isArray(t);function T5(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ts(n))}function S5(t){return Vf(t)?t[t.length-1]||0:t}function A5(t,e){const n=is(t,e);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const l=S5(s[o]);T5(t,o,l)}}function I5(t){return!!(gt(t)&&t.add)}function Df(t,e){const n=t.getValue("willChange");if(I5(n))return n.add(e);if(!n&&Kn.WillChange){const r=new Kn.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function MT(t){return t.props[ST]}const C5=t=>t!==null;function P5(t,{repeat:e,repeatType:n="loop"},r){const i=t.filter(C5),s=e&&n!=="loop"&&e%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const R5={type:"spring",stiffness:500,damping:25,restSpeed:10},k5=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),b5={type:"keyframes",duration:.8},V5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},D5=(t,{keyframes:e})=>e.length>2?b5:Os.has(t)?t.startsWith("scale")?k5(e[1]):R5:V5;function N5({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:l,from:u,elapsed:c,...h}){return!!Object.keys(h).length}const zm=(t,e,n,r={},i,s)=>o=>{const l=Pm(r,t)||{},u=l.delay||r.delay||0;let{elapsed:c=0}=r;c=c-An(u);const h={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...l,delay:-c,onUpdate:p=>{e.set(p),l.onUpdate&&l.onUpdate(p)},onComplete:()=>{o(),l.onComplete&&l.onComplete()},name:t,motionValue:e,element:s?void 0:i};N5(l)||Object.assign(h,D5(t,h)),h.duration&&(h.duration=An(h.duration)),h.repeatDelay&&(h.repeatDelay=An(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let f=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&(Cf(h),h.delay===0&&(f=!0)),(Kn.instantAnimations||Kn.skipAnimations)&&(f=!0,Cf(h),h.delay=0),h.allowFlatten=!l.type&&!l.ease,f&&!s&&e.get()!==void 0){const p=P5(h.keyframes,l);if(p!==void 0){Ae.update(()=>{h.onUpdate(p),h.onComplete()});return}}return l.isSync?new Im(h):new rk(h)};function M5({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function $T(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...l}=e;r&&(s=r);const u=[],c=i&&t.animationState&&t.animationState.getState()[i];for(const h in l){const f=t.getValue(h,t.latestValues[h]??null),p=l[h];if(p===void 0||c&&M5(c,h))continue;const w={delay:n,...Pm(s||{},h)},I=f.get();if(I!==void 0&&!f.isAnimating&&!Array.isArray(p)&&p===I&&!w.velocity)continue;let P=!1;if(window.MotionHandoffAnimation){const x=MT(t);if(x){const v=window.MotionHandoffAnimation(x,h,Ae);v!==null&&(w.startTime=v,P=!0)}}Df(t,h),f.start(zm(h,f,p,t.shouldReduceMotion&&nT.has(h)?{type:!1}:w,t,P));const V=f.animation;V&&u.push(V)}return o&&Promise.all(u).then(()=>{Ae.update(()=>{o&&A5(t,o)})}),u}function LT(t,e,n,r=0,i=1){const s=Array.from(t).sort((c,h)=>c.sortNodePosition(h)).indexOf(e),o=t.size,l=(o-1)*r;return typeof n=="function"?n(s,o):i===1?s*r:l-s*r}function Nf(t,e,n={}){var u;const r=is(t,e,n.type==="exit"?(u=t.presenceContext)==null?void 0:u.custom:void 0);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all($T(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:h=0,staggerChildren:f,staggerDirection:p}=i;return $5(t,e,c,h,f,p,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[c,h]=l==="beforeChildren"?[s,o]:[o,s];return c().then(()=>h())}else return Promise.all([s(),o(n.delay)])}function $5(t,e,n=0,r=0,i=0,s=1,o){const l=[];for(const u of t.variantChildren)u.notify("AnimationStart",e),l.push(Nf(u,e,{...o,delay:n+(typeof r=="function"?0:r)+LT(t.variantChildren,u,r,i,s)}).then(()=>u.notify("AnimationComplete",e)));return Promise.all(l)}function L5(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>Nf(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=Nf(t,e,n);else{const i=typeof e=="function"?is(t,e,n.custom):e;r=Promise.all($T(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}function OT(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}const O5=Nm.length;function jT(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?jT(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<O5;n++){const r=Nm[n],i=t.props[r];(da(i)||i===!1)&&(e[r]=i)}return e}const j5=[...Dm].reverse(),F5=Dm.length;function z5(t){return e=>Promise.all(e.map(({animation:n,options:r})=>L5(t,n,r)))}function B5(t){let e=z5(t),n=Ev(),r=!0;const i=u=>(c,h)=>{var p;const f=is(t,h,u==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);if(f){const{transition:w,transitionEnd:I,...P}=f;c={...c,...P,...I}}return c};function s(u){e=u(t)}function o(u){const{props:c}=t,h=jT(t.parent)||{},f=[],p=new Set;let w={},I=1/0;for(let V=0;V<F5;V++){const x=j5[V],v=n[x],T=c[x]!==void 0?c[x]:h[x],b=da(T),M=x===u?v.isActive:null;M===!1&&(I=V);let $=T===h[x]&&T!==c[x]&&b;if($&&r&&t.manuallyAnimateOnMount&&($=!1),v.protectedKeys={...w},!v.isActive&&M===null||!T&&!v.prevProp||wc(T)||typeof T=="boolean")continue;const E=U5(v.prevProp,T);let y=E||x===u&&v.isActive&&!$&&b||V>I&&b,S=!1;const C=Array.isArray(T)?T:[T];let k=C.reduce(i(x),{});M===!1&&(k={});const{prevResolvedValues:D={}}=v,R={...D,...k},Je=he=>{y=!0,p.has(he)&&(S=!0,p.delete(he)),v.needsAnimating[he]=!0;const B=t.getValue(he);B&&(B.liveStyle=!1)};for(const he in R){const B=k[he],K=D[he];if(w.hasOwnProperty(he))continue;let Q=!1;Vf(B)&&Vf(K)?Q=!OT(B,K):Q=B!==K,Q?B!=null?Je(he):p.add(he):B!==void 0&&p.has(he)?Je(he):v.protectedKeys[he]=!0}v.prevProp=T,v.prevResolvedValues=k,v.isActive&&(w={...w,...k}),r&&t.blockInitialAnimation&&(y=!1);const Wt=$&&E;y&&(!Wt||S)&&f.push(...C.map(he=>{const B={type:x};if(typeof he=="string"&&r&&!Wt&&t.manuallyAnimateOnMount&&t.parent){const{parent:K}=t,Q=is(K,he);if(K.enteringChildren&&Q){const{delayChildren:de}=Q.transition||{};B.delay=LT(K.enteringChildren,t,de)}}return{animation:he,options:B}}))}if(p.size){const V={};if(typeof c.initial!="boolean"){const x=is(t,Array.isArray(c.initial)?c.initial[0]:c.initial);x&&x.transition&&(V.transition=x.transition)}p.forEach(x=>{const v=t.getBaseTarget(x),T=t.getValue(x);T&&(T.liveStyle=!0),V[x]=v??null}),f.push({animation:V})}let P=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(P=!1),r=!1,P?e(f):Promise.resolve()}function l(u,c){var f;if(n[u].isActive===c)return Promise.resolve();(f=t.variantChildren)==null||f.forEach(p=>{var w;return(w=p.animationState)==null?void 0:w.setActive(u,c)}),n[u].isActive=c;const h=o(u);for(const p in n)n[p].protectedKeys={};return h}return{animateChanges:o,setActive:l,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Ev(),r=!0}}}function U5(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!OT(e,t):!1}function Wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ev(){return{animate:Wr(!0),whileInView:Wr(),whileHover:Wr(),whileTap:Wr(),whileDrag:Wr(),whileFocus:Wr(),exit:Wr()}}class jr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class H5 extends jr{constructor(e){super(e),e.animationState||(e.animationState=B5(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();wc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let W5=0;class q5 extends jr{constructor(){super(...arguments),this.id=W5++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const G5={animation:{Feature:H5},exit:{Feature:q5}};function pa(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}function ka(t){return{point:{x:t.pageX,y:t.pageY}}}const K5=t=>e=>bm(e)&&t(e,ka(e));function $o(t,e,n,r){return pa(t,e,K5(n),r)}const FT=1e-4,Q5=1-FT,Y5=1+FT,zT=.01,X5=0-zT,J5=0+zT;function xt(t){return t.max-t.min}function Z5(t,e,n){return Math.abs(t-e)<=n}function xv(t,e,n,r=.5){t.origin=r,t.originPoint=Ce(e.min,e.max,t.origin),t.scale=xt(n)/xt(e),t.translate=Ce(n.min,n.max,t.origin)-t.originPoint,(t.scale>=Q5&&t.scale<=Y5||isNaN(t.scale))&&(t.scale=1),(t.translate>=X5&&t.translate<=J5||isNaN(t.translate))&&(t.translate=0)}function Lo(t,e,n,r){xv(t.x,e.x,n.x,r?r.originX:void 0),xv(t.y,e.y,n.y,r?r.originY:void 0)}function Tv(t,e,n){t.min=n.min+e.min,t.max=t.min+xt(e)}function eb(t,e,n){Tv(t.x,e.x,n.x),Tv(t.y,e.y,n.y)}function Sv(t,e,n){t.min=e.min-n.min,t.max=t.min+xt(e)}function Oo(t,e,n){Sv(t.x,e.x,n.x),Sv(t.y,e.y,n.y)}function Kt(t){return[t("x"),t("y")]}const BT=({current:t})=>t?t.ownerDocument.defaultView:null,Av=(t,e)=>Math.abs(t-e);function tb(t,e){const n=Av(t.x,e.x),r=Av(t.y,e.y);return Math.sqrt(n**2+r**2)}class UT{constructor(e,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=zh(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,I=tb(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!I)return;const{point:P}=p,{timestamp:V}=tt;this.history.push({...P,timestamp:V});const{onStart:x,onMove:v}=this.handlers;w||(x&&x(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,p)},this.handlePointerMove=(p,w)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=Fh(w,this.transformPagePoint),Ae.update(this.updatePoint,!0)},this.handlePointerUp=(p,w)=>{this.end();const{onEnd:I,onSessionEnd:P,resumeAnimation:V}=this.handlers;if(this.dragSnapToOrigin&&V&&V(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=zh(p.type==="pointercancel"?this.lastMoveEventInfo:Fh(w,this.transformPagePoint),this.history);this.startEvent&&I&&I(p,x),P&&P(p,x)},!bm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=o,this.contextWindow=i||window;const l=ka(e),u=Fh(l,this.transformPagePoint),{point:c}=u,{timestamp:h}=tt;this.history=[{...c,timestamp:h}];const{onSessionStart:f}=n;f&&f(e,zh(u,this.history)),this.removeListeners=Ca($o(this.contextWindow,"pointermove",this.handlePointerMove),$o(this.contextWindow,"pointerup",this.handlePointerUp),$o(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Pr(this.updatePoint)}}function Fh(t,e){return e?{point:e(t.point)}:t}function Iv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function zh({point:t},e){return{point:t,delta:Iv(t,HT(e)),offset:Iv(t,nb(e)),velocity:rb(e,.1)}}function nb(t){return t[0]}function HT(t){return t[t.length-1]}function rb(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=HT(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>An(e)));)n--;if(!r)return{x:0,y:0};const s=In(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function ib(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Ce(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Ce(n,t,r.max):Math.min(t,n)),t}function Cv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function sb(t,{top:e,left:n,bottom:r,right:i}){return{x:Cv(t.x,n,i),y:Cv(t.y,e,r)}}function Pv(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function ob(t,e){return{x:Pv(t.x,e.x),y:Pv(t.y,e.y)}}function ab(t,e){let n=.5;const r=xt(t),i=xt(e);return i>r?n=ua(e.min,e.max-r,t.min):r>i&&(n=ua(t.min,t.max-i,e.min)),Gn(0,1,n)}function lb(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Mf=.35;function ub(t=Mf){return t===!1?t=0:t===!0&&(t=Mf),{x:Rv(t,"left","right"),y:Rv(t,"top","bottom")}}function Rv(t,e,n){return{min:kv(t,e),max:kv(t,n)}}function kv(t,e){return typeof t=="number"?t:t[e]||0}const cb=new WeakMap;class hb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ne(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=f=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ka(f).point)},o=(f,p)=>{const{drag:w,dragPropagation:I,onDragStart:P}=this.getProps();if(w&&!I&&(this.openDragLock&&this.openDragLock(),this.openDragLock=wk(w),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Kt(x=>{let v=this.getAxisMotionValue(x).get()||0;if(Cn.test(v)){const{projection:T}=this.visualElement;if(T&&T.layout){const b=T.layout.layoutBox[x];b&&(v=xt(b)*(parseFloat(v)/100))}}this.originPoint[x]=v}),P&&Ae.postRender(()=>P(f,p)),Df(this.visualElement,"transform");const{animationState:V}=this.visualElement;V&&V.setActive("whileDrag",!0)},l=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p;const{dragPropagation:w,dragDirectionLock:I,onDirectionLock:P,onDrag:V}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:x}=p;if(I&&this.currentDirection===null){this.currentDirection=db(x),this.currentDirection!==null&&P&&P(this.currentDirection);return}this.updateAxis("x",p.point,x),this.updateAxis("y",p.point,x),this.visualElement.render(),V&&V(f,p)},u=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p,this.stop(f,p),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Kt(f=>{var p;return this.getAnimationState(f)==="paused"&&((p=this.getAxisMotionValue(f).animation)==null?void 0:p.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new UT(e,{onSessionStart:s,onStart:o,onMove:l,onSessionEnd:u,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,distanceThreshold:r,contextWindow:BT(this.visualElement)})}stop(e,n){const r=e||this.latestPointerEvent,i=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!i||!r)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&Ae.postRender(()=>l(r,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!_l(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=ib(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,i=this.constraints;e&&Ki(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=sb(r.layoutBox,e):this.constraints=!1,this.elastic=ub(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Kt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=lb(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ki(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=f5(r,i.root,this.visualElement.getTransformPagePoint());let o=ob(i.layout.layoutBox,s);if(n){const l=n(c5(o));this.hasMutatedConstraints=!!l,l&&(o=CT(l))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),u=this.constraints||{},c=Kt(h=>{if(!_l(h,n,this.currentDirection))return;let f=u&&u[h]||{};o&&(f={min:0,max:0});const p=i?200:1e6,w=i?40:1e7,I={type:"inertia",velocity:r?e[h]:0,bounceStiffness:p,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(h,I)});return Promise.all(c).then(l)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return Df(this.visualElement,e),r.start(zm(e,r,0,n,this.visualElement,!1))}stopAnimation(){Kt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Kt(e=>{var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Kt(n=>{const{drag:r}=this.getProps();if(!_l(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:l}=i.layout.layoutBox[n];s.set(e[n]-Ce(o,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ki(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Kt(o=>{const l=this.getAxisMotionValue(o);if(l&&this.constraints!==!1){const u=l.get();i[o]=ab({min:u,max:u},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Kt(o=>{if(!_l(o,e,null))return;const l=this.getAxisMotionValue(o),{min:u,max:c}=this.constraints[o];l.set(Ce(u,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;cb.set(this.visualElement,this);const e=this.visualElement.current,n=$o(e,"pointerdown",u=>{const{drag:c,dragListener:h=!0}=this.getProps();c&&h&&this.start(u)}),r=()=>{const{dragConstraints:u}=this.getProps();Ki(u)&&u.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Ae.read(r);const o=pa(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(Kt(h=>{const f=this.getAxisMotionValue(h);f&&(this.originPoint[h]+=u[h].translate,f.set(f.get()+u[h].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),l&&l()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Mf,dragMomentum:l=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:l}}}function _l(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function db(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class fb extends jr{constructor(e){super(e),this.removeGroupControls=en,this.removeListeners=en,this.controls=new hb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||en}unmount(){this.removeGroupControls(),this.removeListeners()}}const bv=t=>(e,n)=>{t&&Ae.postRender(()=>t(e,n))};class pb extends jr{constructor(){super(...arguments),this.removePointerDownListener=en}onPointerDown(e){this.session=new UT(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:BT(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:bv(e),onStart:bv(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&Ae.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=$o(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Gl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Vv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const fo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(X.test(t))t=parseFloat(t);else return t;const n=Vv(t,e.target.x),r=Vv(t,e.target.y);return`${n}% ${r}%`}},mb={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Rr.parse(t);if(i.length>5)return r;const s=Rr.createTransformer(t),o=typeof i[0]!="number"?1:0,l=n.x.scale*e.x,u=n.y.scale*e.y;i[0+o]/=l,i[1+o]/=u;const c=Ce(l,u,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};let Bh=!1;class gb extends U.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;Ok(yb),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),Bh&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Gl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,{projection:o}=r;return o&&(o.isPresent=s,Bh=!0,i||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Ae.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),km.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;Bh=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function WT(t){const[e,n]=fT(),r=U.useContext(um);return A.jsx(gb,{...t,layoutGroup:r,switchLayoutGroup:U.useContext(AT),isPresent:e,safeToRemove:n})}const yb={borderRadius:{...fo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fo,borderTopRightRadius:fo,borderBottomLeftRadius:fo,borderBottomRightRadius:fo,boxShadow:mb};function vb(t,e,n){const r=gt(t)?t:Ts(t);return r.start(zm("",r,e,n)),r.animation}const wb=(t,e)=>t.depth-e.depth;class _b{constructor(){this.children=[],this.isDirty=!1}add(e){dm(this.children,e),this.isDirty=!0}remove(e){fm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(wb),this.isDirty=!1,this.children.forEach(e)}}function Eb(t,e){const n=Vt.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(Pr(r),t(s-e))};return Ae.setup(r,!0),()=>Pr(r)}const qT=["TopLeft","TopRight","BottomLeft","BottomRight"],xb=qT.length,Dv=t=>typeof t=="string"?parseFloat(t):t,Nv=t=>typeof t=="number"||X.test(t);function Tb(t,e,n,r,i,s){i?(t.opacity=Ce(0,n.opacity??1,Sb(r)),t.opacityExit=Ce(e.opacity??1,0,Ab(r))):s&&(t.opacity=Ce(e.opacity??1,n.opacity??1,r));for(let o=0;o<xb;o++){const l=`border${qT[o]}Radius`;let u=Mv(e,l),c=Mv(n,l);if(u===void 0&&c===void 0)continue;u||(u=0),c||(c=0),u===0||c===0||Nv(u)===Nv(c)?(t[l]=Math.max(Ce(Dv(u),Dv(c),r),0),(Cn.test(c)||Cn.test(u))&&(t[l]+="%")):t[l]=c}(e.rotate||n.rotate)&&(t.rotate=Ce(e.rotate||0,n.rotate||0,r))}function Mv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Sb=GT(0,.5,Dx),Ab=GT(.5,.95,en);function GT(t,e,n){return r=>r<t?0:r>e?1:n(ua(t,e,r))}function $v(t,e){t.min=e.min,t.max=e.max}function Gt(t,e){$v(t.x,e.x),$v(t.y,e.y)}function Lv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Ov(t,e,n,r,i){return t-=e,t=Nu(t,1/n,r),i!==void 0&&(t=Nu(t,1/i,r)),t}function Ib(t,e=0,n=1,r=.5,i,s=t,o=t){if(Cn.test(e)&&(e=parseFloat(e),e=Ce(o.min,o.max,e/100)-o.min),typeof e!="number")return;let l=Ce(s.min,s.max,r);t===s&&(l-=e),t.min=Ov(t.min,e,n,l,i),t.max=Ov(t.max,e,n,l,i)}function jv(t,e,[n,r,i],s,o){Ib(t,e[n],e[r],e[i],e.scale,s,o)}const Cb=["x","scaleX","originX"],Pb=["y","scaleY","originY"];function Fv(t,e,n,r){jv(t.x,e,Cb,n?n.x:void 0,r?r.x:void 0),jv(t.y,e,Pb,n?n.y:void 0,r?r.y:void 0)}function zv(t){return t.translate===0&&t.scale===1}function KT(t){return zv(t.x)&&zv(t.y)}function Bv(t,e){return t.min===e.min&&t.max===e.max}function Rb(t,e){return Bv(t.x,e.x)&&Bv(t.y,e.y)}function Uv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function QT(t,e){return Uv(t.x,e.x)&&Uv(t.y,e.y)}function Hv(t){return xt(t.x)/xt(t.y)}function Wv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class kb{constructor(){this.members=[]}add(e){dm(this.members,e),e.scheduleRender()}remove(e){if(fm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function bb(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:h,rotateX:f,rotateY:p,skewX:w,skewY:I}=n;c&&(r=`perspective(${c}px) ${r}`),h&&(r+=`rotate(${h}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),w&&(r+=`skewX(${w}deg) `),I&&(r+=`skewY(${I}deg) `)}const l=t.x.scale*e.x,u=t.y.scale*e.y;return(l!==1||u!==1)&&(r+=`scale(${l}, ${u})`),r||"none"}const Uh=["","X","Y","Z"],Vb=1e3;let Db=0;function Hh(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function YT(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=MT(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Ae,!(i||s))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&YT(r)}function XT({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},l=e==null?void 0:e()){this.id=Db++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach($b),this.nodes.forEach(Fb),this.nodes.forEach(zb),this.nodes.forEach(Lb)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new _b)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new mm),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const u=this.eventHandlers.get(o);u&&u.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=dT(o)&&!Ak(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(u||l)&&(this.isLayoutDirty=!0),t){let h,f=0;const p=()=>this.root.updateBlockedByResize=!1;Ae.read(()=>{f=window.innerWidth}),t(o,()=>{const w=window.innerWidth;w!==f&&(f=w,this.root.updateBlockedByResize=!0,h&&h(),h=Eb(p,250),Gl.hasAnimatedSinceResize&&(Gl.hasAnimatedSinceResize=!1,this.nodes.forEach(Kv)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeLayoutChanged:p,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const I=this.options.transition||c.getDefaultTransition()||qb,{onLayoutAnimationStart:P,onLayoutAnimationComplete:V}=c.getProps(),x=!this.targetLayout||!QT(this.targetLayout,w),v=!f&&p;if(this.options.layoutRoot||this.resumeFrom||v||f&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const T={...Pm(I,"layout"),onPlay:P,onComplete:V};(c.shouldReduceMotion||this.options.layoutRoot)&&(T.delay=0,T.type=!1),this.startAnimation(T),this.setAnimationOrigin(h,v)}else f||Kv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Pr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Bb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&YT(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const f=this.path[h];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:u}=this.options;if(l===void 0&&!u)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(qv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Gv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(jb),this.nodes.forEach(Nb),this.nodes.forEach(Mb)):this.nodes.forEach(Gv),this.clearAllSnapshots();const l=Vt.now();tt.delta=Gn(0,1e3/60,l-tt.timestamp),tt.timestamp=l,tt.isProcessing=!0,Vh.update.process(tt),Vh.preRender.process(tt),Vh.render.process(tt),tt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,km.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ob),this.sharedNodes.forEach(Ub)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ae.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ae.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!xt(this.snapshot.measuredBox.x)&&!xt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ne(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l&&this.instance){const u=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:u,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:u}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!KT(this.projectionDelta),u=this.getTransformTemplate(),c=u?u(this.latestValues,""):void 0,h=c!==this.prevTransformTemplateValue;o&&this.instance&&(l||Kr(this.latestValues)||h)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let u=this.removeElementScroll(l);return o&&(u=this.removeTransform(u)),Gb(u),{animationId:this.root.animationId,measuredBox:l,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return Ne();const l=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(Kb))){const{scroll:h}=this.root;h&&(Qi(l.x,h.offset.x),Qi(l.y,h.offset.y))}return l}removeElementScroll(o){var u;const l=Ne();if(Gt(l,o),(u=this.scroll)!=null&&u.wasRoot)return l;for(let c=0;c<this.path.length;c++){const h=this.path[c],{scroll:f,options:p}=h;h!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Gt(l,o),Qi(l.x,f.offset.x),Qi(l.y,f.offset.y))}return l}applyTransform(o,l=!1){const u=Ne();Gt(u,o);for(let c=0;c<this.path.length;c++){const h=this.path[c];!l&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Yi(u,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),Kr(h.latestValues)&&Yi(u,h.latestValues)}return Kr(this.latestValues)&&Yi(u,this.latestValues),u}removeTransform(o){const l=Ne();Gt(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!Kr(c.latestValues))continue;Rf(c.latestValues)&&c.updateSnapshot();const h=Ne(),f=c.measurePageBox();Gt(h,f),Fv(l,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,h)}return Kr(this.latestValues)&&Fv(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==tt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=tt.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ne(),this.relativeTargetOrigin=Ne(),Oo(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),Gt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ne(),this.targetWithTransforms=Ne()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),eb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Gt(this.target,this.layout.layoutBox),RT(this.target,this.targetDelta)):Gt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ne(),this.relativeTargetOrigin=Ne(),Oo(this.relativeTargetOrigin,this.target,w.target),Gt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Rf(this.parent.latestValues)||PT(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var I;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let u=!0;if((this.isProjectionDirty||(I=this.parent)!=null&&I.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===tt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||h))return;Gt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;d5(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Ne());const{target:w}=o;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Lv(this.prevProjectionDelta.x,this.projectionDelta.x),Lv(this.prevProjectionDelta.y,this.projectionDelta.y)),Lo(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!Wv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Wv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),o){const u=this.getStack();u&&u.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Xi(),this.projectionDelta=Xi(),this.projectionDeltaWithTransform=Xi()}setAnimationOrigin(o,l=!1){const u=this.snapshot,c=u?u.latestValues:{},h={...this.latestValues},f=Xi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=Ne(),w=u?u.source:void 0,I=this.layout?this.layout.source:void 0,P=w!==I,V=this.getStack(),x=!V||V.members.length<=1,v=!!(P&&!x&&this.options.crossfade===!0&&!this.path.some(Wb));this.animationProgress=0;let T;this.mixTargetDelta=b=>{const M=b/1e3;Qv(f.x,o.x,M),Qv(f.y,o.y,M),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Oo(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Hb(this.relativeTarget,this.relativeTargetOrigin,p,M),T&&Rb(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=Ne()),Gt(T,this.relativeTarget)),P&&(this.animationValues=h,Tb(h,c,this.latestValues,M,v,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var l,u,c;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(c=(u=this.resumingFrom)==null?void 0:u.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Pr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ae.update(()=>{Gl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ts(0)),this.currentAnimation=vb(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:h=>{this.mixTargetDelta(h),o.onUpdate&&o.onUpdate(h)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Vb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:u,layout:c,latestValues:h}=o;if(!(!l||!u||!c)){if(this!==o&&this.layout&&c&&JT(this.options.animationType,this.layout.layoutBox,c.layoutBox)){u=this.target||Ne();const f=xt(this.layout.layoutBox.x);u.x.min=o.target.x.min,u.x.max=u.x.min+f;const p=xt(this.layout.layoutBox.y);u.y.min=o.target.y.min,u.y.max=u.y.min+p}Gt(l,u),Yi(l,h),Lo(this.projectionDeltaWithTransform,this.layoutCorrected,l,h)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new kb),this.sharedNodes.get(o).add(l);const c=l.options.initialPromotionConfig;l.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var l;const{layoutId:o}=this.options;return o?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:o}=this.options;return o?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:u}={}){const c=this.getStack();c&&c.promote(this,u),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:u}=o;if((u.z||u.rotate||u.rotateX||u.rotateY||u.rotateZ||u.skewX||u.skewY)&&(l=!0),!l)return;const c={};u.z&&Hh("z",o,c,this.animationValues);for(let h=0;h<Uh.length;h++)Hh(`rotate${Uh[h]}`,o,c,this.animationValues),Hh(`skew${Uh[h]}`,o,c,this.animationValues);o.render();for(const h in c)o.setStaticValue(h,c[h]),this.animationValues&&(this.animationValues[h]=c[h]);o.scheduleRender()}applyProjectionStyles(o,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const u=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=ql(l==null?void 0:l.pointerEvents)||"",o.transform=u?u(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=ql(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!Kr(this.latestValues)&&(o.transform=u?u({},""):"none",this.hasProjected=!1);return}o.visibility="";const h=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=bb(this.projectionDeltaWithTransform,this.treeScale,h);u&&(f=u(h,f)),o.transform=f;const{x:p,y:w}=this.projectionDelta;o.transformOrigin=`${p.origin*100}% ${w.origin*100}% 0`,c.animationValues?o.opacity=c===this?h.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:o.opacity=c===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const I in fa){if(h[I]===void 0)continue;const{correct:P,applyTo:V,isCSSVariable:x}=fa[I],v=f==="none"?h[I]:P(h[I],c);if(V){const T=V.length;for(let b=0;b<T;b++)o[V[b]]=v}else x?this.options.visualElement.renderState.vars[I]=v:o[I]=v}this.options.layoutId&&(o.pointerEvents=c===this?ql(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(qv),this.root.sharedNodes.clear()}}}function Nb(t){t.updateLayout()}function Mb(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;s==="size"?Kt(f=>{const p=o?e.measuredBox[f]:e.layoutBox[f],w=xt(p);p.min=r[f].min,p.max=p.min+w}):JT(s,e.layoutBox,r)&&Kt(f=>{const p=o?e.measuredBox[f]:e.layoutBox[f],w=xt(r[f]);p.max=p.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+w)});const l=Xi();Lo(l,r,e.layoutBox);const u=Xi();o?Lo(u,t.applyTransform(i,!0),e.measuredBox):Lo(u,r,e.layoutBox);const c=!KT(l);let h=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:w}=f;if(p&&w){const I=Ne();Oo(I,e.layoutBox,p.layoutBox);const P=Ne();Oo(P,r,w.layoutBox),QT(I,P)||(h=!0),f.options.layoutRoot&&(t.relativeTarget=P,t.relativeTargetOrigin=I,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:u,layoutDelta:l,hasLayoutChanged:c,hasRelativeLayoutChanged:h})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function $b(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Lb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Ob(t){t.clearSnapshot()}function qv(t){t.clearMeasurements()}function Gv(t){t.isLayoutDirty=!1}function jb(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Kv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Fb(t){t.resolveTargetDelta()}function zb(t){t.calcProjection()}function Bb(t){t.resetSkewAndRotation()}function Ub(t){t.removeLeadSnapshot()}function Qv(t,e,n){t.translate=Ce(e.translate,0,n),t.scale=Ce(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Yv(t,e,n,r){t.min=Ce(e.min,n.min,r),t.max=Ce(e.max,n.max,r)}function Hb(t,e,n,r){Yv(t.x,e.x,n.x,r),Yv(t.y,e.y,n.y,r)}function Wb(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const qb={duration:.45,ease:[.4,0,.1,1]},Xv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Jv=Xv("applewebkit/")&&!Xv("chrome/")?Math.round:en;function Zv(t){t.min=Jv(t.min),t.max=Jv(t.max)}function Gb(t){Zv(t.x),Zv(t.y)}function JT(t,e,n){return t==="position"||t==="preserve-aspect"&&!Z5(Hv(e),Hv(n),.2)}function Kb(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const Qb=XT({attachResizeListener:(t,e)=>pa(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Wh={current:void 0},ZT=XT({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Wh.current){const t=new Qb({});t.mount(window),t.setOptions({layoutScroll:!0}),Wh.current=t}return Wh.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Yb={pan:{Feature:pb},drag:{Feature:fb,ProjectionNode:ZT,MeasureLayout:WT}};function e1(t,e,n){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&Ae.postRender(()=>s(e,ka(e)))}class Xb extends jr{mount(){const{current:e}=this.node;e&&(this.unmount=_k(e,(n,r)=>(e1(this.node,r,"Start"),i=>e1(this.node,i,"End"))))}unmount(){}}class Jb extends jr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ca(pa(this.node.current,"focus",()=>this.onFocus()),pa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function t1(t,e,n){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&Ae.postRender(()=>s(e,ka(e)))}class Zb extends jr{mount(){const{current:e}=this.node;e&&(this.unmount=Sk(e,(n,r)=>(t1(this.node,r,"Start"),(i,{success:s})=>t1(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const $f=new WeakMap,qh=new WeakMap,eV=t=>{const e=$f.get(t.target);e&&e(t)},tV=t=>{t.forEach(eV)};function nV({root:t,...e}){const n=t||document;qh.has(n)||qh.set(n,{});const r=qh.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(tV,{root:t,...e})),r[i]}function rV(t,e,n){const r=nV(e);return $f.set(t,n),r.observe(t),()=>{$f.delete(t),r.unobserve(t)}}const iV={some:0,all:1};class sV extends jr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:iV[i]},l=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:h,onViewportLeave:f}=this.node.getProps(),p=c?h:f;p&&p(u)};return rV(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(oV(e,n))&&this.startObserver()}unmount(){}}function oV({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const aV={inView:{Feature:sV},tap:{Feature:Zb},focus:{Feature:Jb},hover:{Feature:Xb}},lV={layout:{ProjectionNode:ZT,MeasureLayout:WT}},uV={...G5,...aV,...Yb,...lV},ie=u5(uV,x5),g={colors:{primary:"#e53935",primaryDark:"#c62828",primaryLight:"#ff6659",accent:"#1e1e2f",accentLight:"#2a2a3e",background:"#fefcf9",backgroundAlt:"#f8f6f3",surface:"#ffffff",surfaceAlt:"#f5f5f5",text:"#2c2c2c",textLight:"#666666",textMuted:"#999999",success:"#43a047",warning:"#ff9800",error:"#f44336",white:"#ffffff",black:"#000000",overlay:"rgba(0, 0, 0, 0.5)",overlayLight:"rgba(0, 0, 0, 0.3)"},gradients:{primary:"linear-gradient(135deg, #e53935 0%, #ff6659 100%)",accent:"linear-gradient(135deg, #1e1e2f 0%, #2a2a3e 100%)",hero:"linear-gradient(135deg, rgba(229, 57, 53, 0.9) 0%, rgba(30, 30, 47, 0.8) 100%)",card:"linear-gradient(145deg, #ffffff 0%, #f8f6f3 100%)"},fonts:{heading:"'Playfair Display', serif",body:"'Inter', sans-serif",accent:"'Poppins', sans-serif"},fontSizes:{xs:"clamp(0.75rem, 2vw, 0.875rem)",sm:"clamp(0.875rem, 2.5vw, 1rem)",base:"clamp(1rem, 3vw, 1.125rem)",lg:"clamp(1.125rem, 3.5vw, 1.25rem)",xl:"clamp(1.25rem, 4vw, 1.5rem)","2xl":"clamp(1.5rem, 5vw, 1.875rem)","3xl":"clamp(1.875rem, 6vw, 2.25rem)","4xl":"clamp(2.25rem, 7vw, 3rem)","5xl":"clamp(3rem, 8vw, 4rem)"},fontWeights:{light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem","4xl":"6rem","5xl":"8rem"},borderRadius:{sm:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem","2xl":"1.5rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",card:"0 4px 20px rgba(0, 0, 0, 0.08)",cardHover:"0 8px 30px rgba(0, 0, 0, 0.12)"},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},zIndex:{dropdown:1e3,sticky:1020,fixed:1030,modal:1040,popover:1050,tooltip:1060},transitions:{fast:"0.15s ease-in-out",normal:"0.3s ease-in-out",slow:"0.5s ease-in-out"}},n1=VP`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${g.fonts.body};
    font-size: ${g.fontSizes.base};
    font-weight: ${g.fontWeights.normal};
    line-height: 1.6;
    color: ${g.colors.text};
    background-color: ${g.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${g.fonts.heading};
    font-weight: ${g.fontWeights.bold};
    line-height: 1.2;
    margin-bottom: ${g.spacing.md};
    color: ${g.colors.text};
  }

  h1 {
    font-size: ${g.fontSizes["4xl"]};
    font-weight: ${g.fontWeights.extrabold};
  }

  h2 {
    font-size: ${g.fontSizes["3xl"]};
    font-weight: ${g.fontWeights.bold};
  }

  h3 {
    font-size: ${g.fontSizes["2xl"]};
    font-weight: ${g.fontWeights.bold};
  }

  h4 {
    font-size: ${g.fontSizes.xl};
    font-weight: ${g.fontWeights.semibold};
  }

  h5 {
    font-size: ${g.fontSizes.lg};
    font-weight: ${g.fontWeights.semibold};
  }

  h6 {
    font-size: ${g.fontSizes.base};
    font-weight: ${g.fontWeights.semibold};
  }

  p {
    margin-bottom: ${g.spacing.md};
    color: ${g.colors.textLight};
  }

  a {
    color: ${g.colors.primary};
    text-decoration: none;
    transition: ${g.transitions.fast};

    &:hover {
      color: ${g.colors.primaryDark};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: ${g.transitions.fast};

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  input, textarea, select {
    font-family: inherit;
    outline: none;
    transition: ${g.transitions.fast};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${g.colors.backgroundAlt};
  }

  ::-webkit-scrollbar-thumb {
    background: ${g.colors.primary};
    border-radius: ${g.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${g.colors.primaryDark};
  }

  /* Selection */
  ::selection {
    background: ${g.colors.primary};
    color: ${g.colors.white};
  }

  /* Focus styles */
  *:focus-visible {
    outline: 2px solid ${g.colors.primary};
    outline-offset: 2px;
  }

  /* Utility classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${g.spacing.sm};

    @media (min-width: ${g.breakpoints.sm}) {
      padding: 0 ${g.spacing.md};
    }

    @media (min-width: ${g.breakpoints.lg}) {
      padding: 0 ${g.spacing.lg};
    }
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  /* Animation keyframes */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeft {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideRight {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,vi=O.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${g.spacing.sm};

  @media (min-width: ${g.breakpoints.sm}) {
    padding: 0 ${g.spacing.md};
  }

  @media (min-width: ${g.breakpoints.lg}) {
    padding: 0 ${g.spacing.lg};
  }
`;O.section`
  padding: ${g.spacing["3xl"]} 0;

  @media (min-width: ${g.breakpoints.md}) {
    padding: ${g.spacing["4xl"]} 0;
  }
`;O.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${t=>t.minWidth||"300px"}, 1fr));
  gap: ${t=>t.gap||g.spacing.lg};

  @media (min-width: ${g.breakpoints.md}) {
    grid-template-columns: repeat(${t=>t.columns||"auto-fit"}, 1fr);
  }
`;const cV=O.div`
  display: flex;
  flex-direction: ${t=>t.direction||"row"};
  align-items: ${t=>t.align||"stretch"};
  justify-content: ${t=>t.justify||"flex-start"};
  gap: ${t=>t.gap||"0"};
  flex-wrap: ${t=>t.wrap?"wrap":"nowrap"};
`;O.div`
  background: ${g.colors.surface};
  border-radius: ${g.borderRadius.lg};
  padding: ${t=>t.padding||g.spacing.lg};
  box-shadow: ${t=>t.shadow?g.shadows.card:"none"};
  transition: ${g.transitions.normal};

  ${t=>t.hover&&`
    &:hover {
      box-shadow: ${g.shadows.cardHover};
      transform: translateY(-2px);
    }
  `}
`;O.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${g.spacing.sm};
  font-family: ${g.fonts.accent};
  font-weight: ${g.fontWeights.semibold};
  border-radius: ${g.borderRadius.lg};
  transition: ${g.transitions.fast};
  text-decoration: none;
  cursor: pointer;
  border: 2px solid transparent;
  
  ${t=>t.fullWidth&&"width: 100%;"}

  /* Size variants */
  ${t=>{switch(t.size){case"sm":return`
          padding: ${g.spacing.sm} ${g.spacing.md};
          font-size: ${g.fontSizes.sm};
        `;case"lg":return`
          padding: ${g.spacing.lg} ${g.spacing.xl};
          font-size: ${g.fontSizes.lg};
        `;default:return`
          padding: ${g.spacing.md} ${g.spacing.lg};
          font-size: ${g.fontSizes.base};
        `}}}

  /* Color variants */
  ${t=>{switch(t.variant){case"secondary":return`
          background: ${g.colors.accent};
          color: ${g.colors.white};
          
          &:hover {
            background: ${g.colors.accentLight};
            transform: translateY(-1px);
          }
        `;case"outline":return`
          background: transparent;
          color: ${g.colors.primary};
          border-color: ${g.colors.primary};
          
          &:hover {
            background: ${g.colors.primary};
            color: ${g.colors.white};
            transform: translateY(-1px);
          }
        `;case"ghost":return`
          background: transparent;
          color: ${g.colors.text};
          
          &:hover {
            background: ${g.colors.backgroundAlt};
            transform: translateY(-1px);
          }
        `;default:return`
          background: ${g.gradients.primary};
          color: ${g.colors.white};
          
          &:hover {
            transform: translateY(-1px);
            box-shadow: ${g.shadows.lg};
          }
        `}}}

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;O.span`
  display: inline-flex;
  align-items: center;
  gap: ${g.spacing.xs};
  font-family: ${g.fonts.accent};
  font-weight: ${g.fontWeights.medium};
  border-radius: ${g.borderRadius.full};
  
  ${t=>{switch(t.size){case"sm":return`
          padding: ${g.spacing.xs} ${g.spacing.sm};
          font-size: ${g.fontSizes.xs};
        `;default:return`
          padding: ${g.spacing.sm} ${g.spacing.md};
          font-size: ${g.fontSizes.sm};
        `}}}

  ${t=>{switch(t.variant){case"success":return`
          background: ${g.colors.success};
          color: ${g.colors.white};
        `;case"warning":return`
          background: ${g.colors.warning};
          color: ${g.colors.white};
        `;case"error":return`
          background: ${g.colors.error};
          color: ${g.colors.white};
        `;default:return`
          background: ${g.colors.primary};
          color: ${g.colors.white};
        `}}}
`;O.input`
  width: 100%;
  padding: ${g.spacing.md};
  font-size: ${g.fontSizes.base};
  border: 2px solid ${g.colors.surfaceAlt};
  border-radius: ${g.borderRadius.lg};
  background: ${g.colors.surface};
  color: ${g.colors.text};
  transition: ${g.transitions.fast};

  &:focus {
    border-color: ${g.colors.primary};
    box-shadow: 0 0 0 3px rgba(229, 57, 53, 0.1);
  }

  &::placeholder {
    color: ${g.colors.textMuted};
  }
`;const hV=O(ie.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${g.zIndex.sticky};
  background: ${t=>t.isScrolled?"rgba(255, 255, 255, 0.95)":"rgba(255, 255, 255, 0.9)"};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${t=>t.isScrolled?"rgba(229, 57, 53, 0.1)":"transparent"};
  transition: ${g.transitions.normal};
  box-shadow: ${t=>t.isScrolled?g.shadows.md:"none"};
`,dV=O(vi)`
  padding-top: ${g.spacing.md};
  padding-bottom: ${g.spacing.md};
`,fV=O(ie.div)`
  display: flex;
  align-items: center;
  gap: ${g.spacing.md};
  cursor: pointer;
`,pV=O.img`
  width: 50px;
  height: 50px;
  border-radius: ${g.borderRadius.full};
  object-fit: cover;
  box-shadow: ${g.shadows.md};
`,mV=O.h1`
  font-family: ${g.fonts.heading};
  font-size: ${g.fontSizes["2xl"]};
  font-weight: ${g.fontWeights.bold};
  color: ${g.colors.primary};
  margin: 0;
  
  @media (min-width: ${g.breakpoints.md}) {
    font-size: ${g.fontSizes["3xl"]};
  }
`,gV=O.nav`
  display: none;
  
  @media (min-width: ${g.breakpoints.lg}) {
    display: block;
  }
`,yV=O.ul`
  display: flex;
  gap: ${g.spacing.lg};
  align-items: center;
`,r1=O(ie.li)`
  position: relative;
`,i1=O.a`
  font-family: ${g.fonts.accent};
  font-size: ${g.fontSizes.base};
  font-weight: ${g.fontWeights.medium};
  color: ${t=>t.isActive?g.colors.primary:g.colors.text};
  text-decoration: none;
  padding: ${g.spacing.sm} ${g.spacing.md};
  border-radius: ${g.borderRadius.lg};
  transition: ${g.transitions.fast};
  position: relative;
  
  &:hover {
    color: ${g.colors.primary};
    background: rgba(229, 57, 53, 0.05);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: ${t=>t.isActive?"100%":"0"};
    height: 2px;
    background: ${g.colors.primary};
    transition: ${g.transitions.fast};
  }
`,vV=O(ie.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: ${g.borderRadius.lg};
  transition: ${g.transitions.fast};
  
  &:hover {
    background: rgba(229, 57, 53, 0.05);
  }
  
  @media (min-width: ${g.breakpoints.lg}) {
    display: none;
  }
`,wV=O.div`
  position: relative;
  width: 24px;
  height: 18px;
  
  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${g.colors.text};
    border-radius: 1px;
    transition: ${g.transitions.fast};
    
    &:nth-child(1) {
      top: 0;
      transform: ${t=>t.isOpen?"rotate(45deg) translate(6px, 6px)":"none"};
    }
    
    &:nth-child(2) {
      top: 8px;
      opacity: ${t=>t.isOpen?"0":"1"};
    }
    
    &:nth-child(3) {
      top: 16px;
      transform: ${t=>t.isOpen?"rotate(-45deg) translate(6px, -6px)":"none"};
    }
  }
`,_V=O(ie.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(229, 57, 53, 0.1);
  box-shadow: ${g.shadows.lg};
`,EV=O.ul`
  padding: ${g.spacing.lg} 0;
`,s1=O(ie.li)`
  border-bottom: 1px solid rgba(229, 57, 53, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`,o1=O.a`
  display: block;
  padding: ${g.spacing.md} ${g.spacing.lg};
  font-family: ${g.fonts.accent};
  font-size: ${g.fontSizes.lg};
  font-weight: ${g.fontWeights.medium};
  color: ${t=>t.isActive?g.colors.primary:g.colors.text};
  text-decoration: none;
  transition: ${g.transitions.fast};
  
  &:hover {
    color: ${g.colors.primary};
    background: rgba(229, 57, 53, 0.05);
  }
`,xV=({restaurantInfo:t,categories:e,activeCategory:n})=>{const[r,i]=U.useState(!1),[s,o]=U.useState(!1);U.useEffect(()=>{const c=()=>{i(window.scrollY>20)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const l=c=>{const h=document.getElementById(c);if(h){const p=h.offsetTop-80;window.scrollTo({top:p,behavior:"smooth"})}o(!1)},u=()=>{window.scrollTo({top:0,behavior:"smooth"}),o(!1)};return A.jsx(hV,{isScrolled:r,initial:{y:-100},animate:{y:0},transition:{duration:.5,ease:"easeOut"},children:A.jsxs(dV,{children:[A.jsxs(cV,{align:"center",justify:"space-between",children:[A.jsxs(fV,{onClick:u,whileHover:{scale:1.05},whileTap:{scale:.95},children:[t.logo&&A.jsx(pV,{src:t.logo,alt:t.name}),A.jsx(mV,{children:t.name})]}),A.jsx(gV,{children:A.jsxs(yV,{children:[A.jsx(r1,{whileHover:{y:-2},transition:{duration:.2},children:A.jsx(i1,{href:"#hero",onClick:c=>{c.preventDefault(),u()},isActive:!n,children:"Home"})}),e.map(c=>A.jsx(r1,{whileHover:{y:-2},transition:{duration:.2},children:A.jsx(i1,{href:`#${c.id}`,onClick:h=>{h.preventDefault(),l(c.id)},isActive:n===c.id,children:c.name})},c.id))]})}),A.jsx(vV,{onClick:()=>o(!s),whileTap:{scale:.95},children:A.jsxs(wV,{isOpen:s,children:[A.jsx("span",{}),A.jsx("span",{}),A.jsx("span",{})]})})]}),A.jsx(Vu,{children:s&&A.jsx(_V,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3,ease:"easeInOut"},children:A.jsx(vi,{children:A.jsxs(EV,{children:[A.jsx(s1,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1},children:A.jsx(o1,{href:"#hero",onClick:c=>{c.preventDefault(),u()},isActive:!n,children:"Home"})}),e.map((c,h)=>A.jsx(s1,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1+(h+1)*.05},children:A.jsx(o1,{href:`#${c.id}`,onClick:f=>{f.preventDefault(),l(c.id)},isActive:n===c.id,children:c.name})},c.id))]})})})})]})})},TV=O.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
`,SV=O.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(229, 57, 53, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(229, 57, 53, 0.05) 0%, transparent 50%);
  z-index: 1;
`,AV=O(vi)`
  position: relative;
  z-index: 3;
  text-align: center;
  padding-top: 120px;
  padding-bottom: ${g.spacing["3xl"]};
`,IV=O(ie.div)`
  display: inline-flex;
  align-items: center;
  gap: ${g.spacing.sm};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${g.borderRadius.full};
  padding: ${g.spacing.sm} ${g.spacing.lg};
  margin-bottom: ${g.spacing.xl};
  font-family: ${g.fonts.accent};
  font-size: ${g.fontSizes.sm};
  color: rgba(255, 255, 255, 0.9);
  font-weight: ${g.fontWeights.medium};
`,CV=O(ie.h1)`
  font-family: ${g.fonts.heading};
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: ${g.fontWeights.extrabold};
  color: ${g.colors.white};
  margin-bottom: ${g.spacing.lg};
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  line-height: 1.1;
  letter-spacing: -0.02em;
`,PV=O(ie.p)`
  font-family: ${g.fonts.body};
  font-size: clamp(1.1rem, 4vw, 1.5rem);
  font-weight: ${g.fontWeights.normal};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${g.spacing.sm};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
`,RV=O(ie.p)`
  font-family: ${g.fonts.accent};
  font-size: clamp(0.9rem, 3vw, 1.1rem);
  font-weight: ${g.fontWeights.medium};
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: ${g.spacing["2xl"]};
  text-transform: uppercase;
  letter-spacing: 2px;
`,kV=O(ie.div)`
  display: flex;
  flex-direction: column;
  gap: ${g.spacing.md};
  align-items: center;
  margin-bottom: ${g.spacing["2xl"]};
  
  @media (min-width: ${g.breakpoints.sm}) {
    flex-direction: row;
    justify-content: center;
    gap: ${g.spacing.lg};
  }
`,a1=O(ie.button)`
  position: relative;
  padding: ${g.spacing.lg} ${g.spacing["2xl"]};
  font-family: ${g.fonts.accent};
  font-size: ${g.fontSizes.base};
  font-weight: ${g.fontWeights.semibold};
  border: none;
  border-radius: ${g.borderRadius.xl};
  cursor: pointer;
  transition: ${g.transitions.normal};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${g.spacing.sm};
  min-width: 180px;
  justify-content: center;
  overflow: hidden;
  
  ${t=>t.variant==="secondary"?`
    background: rgba(255, 255, 255, 0.1);
    color: ${g.colors.white};
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }
    
    &:hover::before {
      left: 100%;
    }
    
    &:hover {
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
  `:`
    background: ${g.gradients.primary};
    color: ${g.colors.white};
    box-shadow: 0 8px 25px rgba(229, 57, 53, 0.3);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.5s;
    }
    
    &:hover::before {
      left: 100%;
    }
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(229, 57, 53, 0.4);
    }
  `}
  
  &:active {
    transform: translateY(0);
  }
`,bV=O(ie.div)`
  display: flex;
  justify-content: center;
  gap: ${g.spacing.xl};
  flex-wrap: wrap;
  margin-bottom: ${g.spacing["2xl"]};
`,Gh=O.div`
  text-align: center;
  padding: ${g.spacing.lg};
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${g.borderRadius.xl};
  min-width: 120px;
`,Kh=O.div`
  font-family: ${g.fonts.heading};
  font-size: ${g.fontSizes["2xl"]};
  font-weight: ${g.fontWeights.bold};
  color: ${g.colors.white};
  margin-bottom: ${g.spacing.xs};
`,Qh=O.div`
  font-family: ${g.fonts.accent};
  font-size: ${g.fontSizes.sm};
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
`,VV=O(ie.div)`
  position: absolute;
  bottom: ${g.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${g.spacing.sm};
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  z-index: 3;
`,DV=O.span`
  font-family: ${g.fonts.accent};
  font-size: ${g.fontSizes.xs};
  font-weight: ${g.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 2px;
`,NV=O(ie.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
`,MV=O.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  pointer-events: none;
`,$V=O(ie.div)`
  position: absolute;
  width: ${t=>t.size}px;
  height: ${t=>t.size}px;
  background: rgba(229, 57, 53, 0.1);
  border-radius: 50%;
  top: ${t=>t.top};
  left: ${t=>t.left};
  backdrop-filter: blur(5px);
  border: 1px solid rgba(229, 57, 53, 0.2);
`,LV=({restaurantInfo:t})=>{const e=()=>{const r=document.querySelector(".menu-container");if(r){const s=r.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:s,behavior:"smooth"})}},n=[{size:80,top:"15%",left:"10%",delay:0},{size:60,top:"25%",left:"85%",delay:1},{size:100,top:"65%",left:"5%",delay:2},{size:70,top:"75%",left:"90%",delay:3},{size:50,top:"35%",left:"75%",delay:4}];return A.jsxs(TV,{id:"hero",children:[A.jsx(SV,{}),A.jsx(MV,{children:n.map((r,i)=>A.jsx($V,{size:r.size,top:r.top,left:r.left,delay:r.delay,animate:{y:[0,-30,0],opacity:[.3,.7,.3],scale:[1,1.1,1]},transition:{duration:6+r.delay,repeat:1/0,ease:"easeInOut",delay:r.delay}},i))}),A.jsxs(AV,{children:[A.jsxs(IV,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[A.jsx("span",{children:"🍽️"}),A.jsx("span",{children:"Welcome to"})]}),A.jsx(CV,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:t.name}),t.tagline&&A.jsx(PV,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:t.tagline}),t.tagline2&&A.jsx(RV,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:t.tagline2}),A.jsxs(bV,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},children:[A.jsxs(Gh,{children:[A.jsx(Kh,{children:"50+"}),A.jsx(Qh,{children:"Dishes"})]}),A.jsxs(Gh,{children:[A.jsx(Kh,{children:"4.8"}),A.jsx(Qh,{children:"Rating"})]}),A.jsxs(Gh,{children:[A.jsx(Kh,{children:"15min"}),A.jsx(Qh,{children:"Delivery"})]})]}),A.jsxs(kV,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.2},children:[A.jsxs(a1,{onClick:e,whileHover:{scale:1.05},whileTap:{scale:.95},children:[A.jsx("span",{children:"Explore Menu"}),A.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),A.jsxs(a1,{variant:"secondary",as:"a",href:"tel:+916376535219",whileHover:{scale:1.05},whileTap:{scale:.95},children:[A.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),A.jsx("span",{children:"Call Now"})]})]})]}),A.jsxs(VV,{onClick:e,initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1.8},whileHover:{scale:1.1},children:[A.jsx(DV,{children:"Scroll to Menu"}),A.jsx(NV,{animate:{y:[0,8,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"}})]})]})},ma=O(ie.div)`
  display: flex;
  gap: ${g.spacing.md};
  padding: ${g.spacing.lg};
  background: linear-gradient(135deg, ${g.colors.surface} 0%, rgba(248, 246, 243, 0.8) 100%);
  transition: ${g.transitions.normal};
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${g.gradients.primary};
    transform: scaleY(0);
    transition: ${g.transitions.normal};
    transform-origin: bottom;
  }
  
  &:hover {
    background: linear-gradient(135deg, ${g.colors.surface} 0%, rgba(229, 57, 53, 0.02) 100%);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.08),
      0 4px 12px rgba(229, 57, 53, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
    
    &::before {
      transform: scaleY(1);
    }
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  &:nth-child(even) {
    background: linear-gradient(135deg, rgba(248, 246, 243, 0.6) 0%, ${g.colors.surface} 100%);
    
    &:hover {
      background: linear-gradient(135deg, rgba(229, 57, 53, 0.01) 0%, ${g.colors.surface} 100%);
    }
  }
`,OV=O.div`
  width: 85px;
  height: 85px;
  min-width: 85px;
  border-radius: ${g.borderRadius.lg};
  background: ${t=>t.backgroundImage?`url(${t.backgroundImage})`:`linear-gradient(135deg, ${g.colors.surfaceAlt} 0%, ${g.colors.backgroundAlt} 100%)`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${g.fontSizes.xl};
  color: ${g.colors.textMuted};
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.8);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(229, 57, 53, 0.1) 0%, transparent 50%);
    opacity: 0;
    transition: ${g.transitions.normal};
  }
  
  ${ma}:hover &::after {
    opacity: 1;
  }
  
  ${ma}:hover & {
    transform: scale(1.05);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.15),
      0 4px 12px rgba(229, 57, 53, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }
`,jV=O.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 85px;
`,FV=O.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${g.spacing.sm};
  margin-bottom: ${g.spacing.xs};
`,zV=O.h3`
  font-family: ${g.fonts.heading};
  font-size: ${g.fontSizes.lg};
  font-weight: ${g.fontWeights.bold};
  color: ${g.colors.text};
  margin: 0;
  line-height: 1.3;
  flex: 1;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  
  ${ma}:hover & {
    color: ${g.colors.primary};
    text-shadow: 0 2px 4px rgba(229, 57, 53, 0.2);
  }
`,BV=O.div`
  display: flex;
  align-items: center;
  gap: ${g.spacing.xs};
  flex-shrink: 0;
`,UV=O.div`
  width: 18px;
  height: 18px;
  border: 2px solid ${t=>t.isVeg?g.colors.success:g.colors.error};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 2px;
  box-shadow: 
    0 3px 8px ${t=>t.isVeg?"rgba(67, 160, 71, 0.25)":"rgba(244, 67, 54, 0.25)"},
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.9);
  
  &::after {
    content: '';
    width: 8px;
    height: 8px;
    background: ${t=>t.isVeg?g.colors.success:g.colors.error};
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`,HV=O.span`
  background: linear-gradient(135deg, ${g.colors.warning} 0%, #ff8f00 100%);
  color: ${g.colors.white};
  font-size: ${g.fontSizes.xs};
  padding: 3px 8px;
  border-radius: ${g.borderRadius.sm};
  font-weight: ${g.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 
    0 3px 10px rgba(255, 152, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,WV=O.p`
  font-size: ${g.fontSizes.sm};
  color: ${g.colors.textLight};
  line-height: 1.5;
  margin: 0 0 ${g.spacing.sm} 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: ${g.fontWeights.normal};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`,qV=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${g.spacing.sm};
`,GV=O.div`
  display: flex;
  align-items: center;
  gap: ${g.spacing.md};
  font-size: ${g.fontSizes.xs};
  color: ${g.colors.textMuted};
`,KV=O.div`
  display: flex;
  align-items: center;
  gap: 3px;
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(255, 193, 7, 0.08) 100%);
  padding: 3px 8px;
  border-radius: ${g.borderRadius.sm};
  border: 1px solid rgba(255, 193, 7, 0.3);
  box-shadow: 0 2px 6px rgba(255, 193, 7, 0.2);
`,QV=O.div`
  display: flex;
  align-items: center;
  gap: 3px;
  background: linear-gradient(135deg, rgba(67, 160, 71, 0.15) 0%, rgba(67, 160, 71, 0.08) 100%);
  padding: 3px 8px;
  border-radius: ${g.borderRadius.sm};
  border: 1px solid rgba(67, 160, 71, 0.3);
  box-shadow: 0 2px 6px rgba(67, 160, 71, 0.2);
`,YV=O.div`
  display: flex;
  align-items: center;
  gap: ${g.spacing.sm};
  flex-direction: column;
  align-items: flex-end;
`,XV=O.span`
  font-family: ${g.fonts.heading};
  font-size: ${g.fontSizes.xl};
  font-weight: ${g.fontWeights.bold};
  color: ${g.colors.primary};
  text-shadow: 
    0 2px 4px rgba(229, 57, 53, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.1);
  
  ${ma}:hover & {
    text-shadow: 
      0 3px 6px rgba(229, 57, 53, 0.4),
      0 1px 3px rgba(0, 0, 0, 0.15);
  }
`,JV=O.span`
  font-size: ${g.fontSizes.sm};
  color: ${g.colors.textMuted};
  text-decoration: line-through;
  font-weight: ${g.fontWeights.medium};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`,ZV=({item:t,index:e})=>A.jsxs(ma,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-20px"},transition:{duration:.4,delay:e*.05,ease:"easeOut"},children:[A.jsx(OV,{backgroundImage:t.image,children:!t.image&&"🍽️"}),A.jsxs(jV,{children:[A.jsxs("div",{children:[A.jsxs(FV,{children:[A.jsx(zV,{children:t.name}),A.jsxs(BV,{children:[A.jsx(UV,{isVeg:t.isVeg}),t.isPopular&&A.jsx(HV,{children:"★"})]})]}),t.description&&A.jsx(WV,{children:t.description})]}),A.jsxs(qV,{children:[A.jsxs(GV,{children:[t.rating&&A.jsxs(KV,{children:[A.jsx("span",{children:"⭐"}),A.jsx("span",{children:t.rating})]}),t.prepTime&&A.jsxs(QV,{children:[A.jsx("span",{children:"🕐"}),A.jsx("span",{children:t.prepTime})]})]}),A.jsxs(YV,{children:[A.jsx(XV,{children:t.price}),t.originalPrice&&A.jsx(JV,{children:t.originalPrice})]})]})]})]}),l1=O.section`
  margin-bottom: ${g.spacing.xl};
`,u1=O(ie.div)`
  background: ${g.colors.surface};
  border-left: 4px solid ${g.colors.primary};
  margin-bottom: ${g.spacing.md};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,c1=O(vi)`
  padding: ${g.spacing.md} ${g.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${g.spacing.md};
`,h1=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
`,e4=O.img`
  width: 40px;
  height: 40px;
  border-radius: ${g.borderRadius.lg};
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,d1=O.span`
  font-size: ${g.fontSizes.xl};
  min-width: 40px;
  text-align: center;
`,f1=O.div`
  flex: 1;
`,p1=O.h2`
  font-family: ${g.fonts.heading};
  font-size: ${g.fontSizes.lg};
  font-weight: ${g.fontWeights.bold};
  color: ${g.colors.text};
  margin: 0 0 ${g.spacing.xs} 0;
  
  @media (min-width: ${g.breakpoints.md}) {
    font-size: ${g.fontSizes.xl};
  }
`,m1=O.div`
  display: flex;
  align-items: center;
  gap: ${g.spacing.md};
  font-size: ${g.fontSizes.xs};
  color: ${g.colors.textLight};
  flex-wrap: wrap;
`,po=O.span`
  display: flex;
  align-items: center;
  gap: ${g.spacing.xs};
  font-weight: ${g.fontWeights.medium};
  font-family: ${g.fonts.accent};
`,t4=O.div`
  background: ${g.colors.surface};
  border-radius: ${g.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
`,n4=O(ie.div)`
  text-align: center;
  padding: ${g.spacing["2xl"]} ${g.spacing.lg};
  color: ${g.colors.textMuted};
  background: ${g.colors.surface};
  border-radius: ${g.borderRadius.lg};
  margin: ${g.spacing.md} ${g.spacing.lg};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,r4=O.div`
  font-size: ${g.fontSizes["2xl"]};
  margin-bottom: ${g.spacing.md};
  opacity: 0.5;
`,i4=O.p`
  font-size: ${g.fontSizes.base};
  color: ${g.colors.textMuted};
  margin: 0;
`,s4=({category:t,animationDelay:e=0})=>{const n=t.items.filter(o=>o.isVeg).length,r=t.items.filter(o=>!o.isVeg).length,i=t.items.filter(o=>o.isPopular).length,s=()=>t.image&&t.image.trim()!==""&&t.image!=="undefined"?A.jsx(e4,{src:t.image,alt:t.name,onError:o=>{o.currentTarget.style.display="none";const l=o.currentTarget.nextElementSibling;l&&(l.style.display="block")}}):A.jsx(d1,{children:t.icon||"🍽️"});return t.items.length===0?A.jsx(l1,{id:t.id,className:"category-section",children:A.jsxs(vi,{children:[A.jsx(u1,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:e},children:A.jsxs(c1,{children:[A.jsx(h1,{children:s()}),A.jsxs(f1,{children:[A.jsx(p1,{children:t.name}),A.jsx(m1,{children:A.jsxs(po,{children:[A.jsx("span",{children:"📋"}),A.jsx("span",{children:"0 items"})]})})]})]})}),A.jsxs(n4,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.3,delay:e+.1},children:[A.jsx(r4,{children:"🍽️"}),A.jsx(i4,{children:"No items available in this category"})]})]})}):A.jsx(l1,{id:t.id,className:"category-section",children:A.jsxs(vi,{children:[A.jsx(u1,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:e},children:A.jsxs(c1,{children:[A.jsxs(h1,{children:[s(),t.image&&t.image.trim()!==""&&t.image!=="undefined"&&A.jsx(d1,{style:{display:"none"},children:t.icon||"🍽️"})]}),A.jsxs(f1,{children:[A.jsx(p1,{children:t.name}),A.jsxs(m1,{children:[A.jsxs(po,{children:[A.jsx("span",{children:"📋"}),A.jsxs("span",{children:[t.items.length," items"]})]}),n>0&&A.jsxs(po,{children:[A.jsx("span",{children:"🥬"}),A.jsxs("span",{children:[n," veg"]})]}),r>0&&A.jsxs(po,{children:[A.jsx("span",{children:"🍖"}),A.jsxs("span",{children:[r," non-veg"]})]}),i>0&&A.jsxs(po,{children:[A.jsx("span",{children:"⭐"}),A.jsxs("span",{children:[i," popular"]})]})]})]})]})}),A.jsx(ie.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:e+.1},children:A.jsx(t4,{children:t.items.map((o,l)=>A.jsx(ZV,{item:o,index:l},o.id))})})]})})},o4=O(ie.div)`
  position: fixed;
  bottom: ${g.spacing.lg};
  right: ${g.spacing.md};
  z-index: ${g.zIndex.fixed};
  
  @media (min-width: ${g.breakpoints.md}) {
    right: ${g.spacing.lg};
  }
`,a4=O(ie.button)`
  width: 56px;
  height: 56px;
  border-radius: ${g.borderRadius.full};
  border: none;
  background: ${t=>t.isActive?g.gradients.primary:g.colors.surface};
  color: ${t=>t.isActive?g.colors.white:g.colors.text};
  box-shadow: ${g.shadows.lg};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${g.fontSizes.lg};
  transition: ${g.transitions.fast};
  backdrop-filter: blur(10px);
  border: 2px solid ${t=>t.isActive?"transparent":"rgba(229, 57, 53, 0.1)"};
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${g.shadows.xl};
  }
  
  &:active {
    transform: scale(0.95);
  }
`,l4=O(ie.div)`
  position: absolute;
  bottom: 70px;
  right: 0;
  background: ${g.colors.surface};
  border-radius: ${g.borderRadius.xl};
  box-shadow: ${g.shadows.xl};
  padding: ${g.spacing.md};
  min-width: 200px;
  max-width: 280px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(229, 57, 53, 0.1);
`,u4=O.h3`
  font-family: ${g.fonts.heading};
  font-size: ${g.fontSizes.base};
  font-weight: ${g.fontWeights.bold};
  color: ${g.colors.text};
  margin-bottom: ${g.spacing.md};
  text-align: center;
`,g1=O.div`
  margin-bottom: ${g.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`,y1=O.h4`
  font-family: ${g.fonts.accent};
  font-size: ${g.fontSizes.xs};
  font-weight: ${g.fontWeights.semibold};
  color: ${g.colors.textLight};
  margin-bottom: ${g.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`,c4=O.div`
  display: flex;
  flex-direction: column;
  gap: ${g.spacing.xs};
`,v1=O(ie.button)`
  display: flex;
  align-items: center;
  gap: ${g.spacing.sm};
  padding: ${g.spacing.sm};
  border: none;
  border-radius: ${g.borderRadius.md};
  background: ${t=>t.isActive?"rgba(229, 57, 53, 0.1)":"transparent"};
  color: ${t=>t.isActive?g.colors.primary:g.colors.text};
  cursor: pointer;
  transition: ${g.transitions.fast};
  text-align: left;
  width: 100%;
  font-family: ${g.fonts.accent};
  font-size: ${g.fontSizes.sm};
  font-weight: ${g.fontWeights.medium};
  
  &:hover {
    background: ${t=>t.isActive?"rgba(229, 57, 53, 0.15)":"rgba(229, 57, 53, 0.05)"};
  }
`,Yh=O.span`
  font-size: ${g.fontSizes.base};
  min-width: 20px;
  text-align: center;
`,Xh=O.span`
  flex: 1;
`,h4=O.div`
  max-height: 200px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${g.colors.backgroundAlt};
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${g.colors.primary};
    border-radius: 2px;
  }
`,d4=O(ie.button)`
  display: flex;
  align-items: center;
  gap: ${g.spacing.sm};
  padding: ${g.spacing.sm};
  border: none;
  border-radius: ${g.borderRadius.md};
  background: ${t=>t.isActive?"rgba(229, 57, 53, 0.1)":"transparent"};
  color: ${t=>t.isActive?g.colors.primary:g.colors.text};
  cursor: pointer;
  transition: ${g.transitions.fast};
  text-align: left;
  width: 100%;
  font-family: ${g.fonts.accent};
  font-size: ${g.fontSizes.sm};
  font-weight: ${g.fontWeights.medium};
  
  &:hover {
    background: ${t=>t.isActive?"rgba(229, 57, 53, 0.15)":"rgba(229, 57, 53, 0.05)"};
  }
`,f4=O(ie.button)`
  position: fixed;
  bottom: ${g.spacing.lg};
  left: ${g.spacing.md};
  width: 48px;
  height: 48px;
  border-radius: ${g.borderRadius.full};
  border: none;
  background: ${g.colors.accent};
  color: ${g.colors.white};
  box-shadow: ${g.shadows.lg};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${g.zIndex.fixed};
  transition: ${g.transitions.fast};
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${g.shadows.xl};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (min-width: ${g.breakpoints.md}) {
    left: ${g.spacing.lg};
  }
`,p4=({categories:t,activeFilter:e,onFilterChange:n})=>{const[r,i]=U.useState(!1),[s,o]=U.useState(!1);U.useEffect(()=>{const h=()=>{o(window.scrollY>300)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const l=()=>{window.scrollTo({top:0,behavior:"smooth"})},u=h=>{const f=document.getElementById(h);if(f){const w=f.offsetTop-80;window.scrollTo({top:w,behavior:"smooth"})}i(!1)},c=()=>{if(e==="veg")return"🥬";if(e==="all")return"🍽️";const h=t.find(f=>f.id===e);return(h==null?void 0:h.icon)||"🍽️"};return A.jsxs(A.Fragment,{children:[A.jsxs(o4,{children:[A.jsx(Vu,{children:r&&A.jsxs(l4,{initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:20},transition:{duration:.2,ease:"easeOut"},children:[A.jsx(u4,{children:"Filter & Navigate"}),A.jsxs(g1,{children:[A.jsx(y1,{children:"Diet"}),A.jsxs(c4,{children:[A.jsxs(v1,{isActive:e==="all",onClick:()=>{n("all"),i(!1)},whileHover:{x:2},whileTap:{scale:.98},children:[A.jsx(Yh,{children:"🍽️"}),A.jsx(Xh,{children:"All Items"})]}),A.jsxs(v1,{isActive:e==="veg",onClick:()=>{n("veg"),i(!1)},whileHover:{x:2},whileTap:{scale:.98},children:[A.jsx(Yh,{children:"🥬"}),A.jsx(Xh,{children:"Veg Only"})]})]})]}),A.jsxs(g1,{children:[A.jsx(y1,{children:"Categories"}),A.jsx(h4,{children:t.map(h=>A.jsxs(d4,{isActive:e===h.id,onClick:()=>u(h.id),whileHover:{x:2},whileTap:{scale:.98},children:[A.jsx(Yh,{children:h.icon||"🍽️"}),A.jsx(Xh,{children:h.name})]},h.id))})]})]})}),A.jsx(a4,{isActive:r,onClick:()=>i(!r),whileHover:{scale:1.05},whileTap:{scale:.95},animate:{rotate:r?45:0},children:r?"✕":c()})]}),A.jsx(Vu,{children:s&&A.jsx(f4,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},onClick:l,whileHover:{scale:1.05},whileTap:{scale:.95},children:A.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M18 15l-6-6-6 6"})})})})]})},m4=O.footer`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: ${g.colors.white};
  padding: ${g.spacing["4xl"]} 0 ${g.spacing.lg} 0;
  margin-top: ${g.spacing["5xl"]};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${g.gradients.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(135deg, transparent 0%, rgba(229, 57, 53, 0.05) 50%, transparent 100%);
    transform: skewY(-2deg);
  }
`,g4=O.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(229, 57, 53, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(229, 57, 53, 0.05) 0%, transparent 50%);
  z-index: 1;
`,y4=O(vi)`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${g.spacing["3xl"]};
  
  @media (min-width: ${g.breakpoints.md}) {
    grid-template-columns: 2fr 1fr 1fr;
    gap: ${g.spacing["4xl"]};
  }
`,Jh=O(ie.div)`
  display: flex;
  flex-direction: column;
  gap: ${g.spacing.lg};
`,v4=O.div`
  display: flex;
  align-items: center;
  gap: ${g.spacing.lg};
  margin-bottom: ${g.spacing.xl};
`,w4=O.div`
  width: 80px;
  height: 80px;
  background: ${g.gradients.primary};
  border-radius: ${g.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(229, 57, 53, 0.3);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: ${g.gradients.primary};
    border-radius: ${g.borderRadius.xl};
    z-index: -1;
    filter: blur(10px);
    opacity: 0.6;
  }
`,_4=O.img`
  width: 60px;
  height: 60px;
  border-radius: ${g.borderRadius.lg};
  object-fit: cover;
`,E4=O.div`
  flex: 1;
`,x4=O.h3`
  font-family: ${g.fonts.heading};
  font-size: ${g.fontSizes["2xl"]};
  font-weight: ${g.fontWeights.bold};
  color: ${g.colors.white};
  margin: 0 0 ${g.spacing.sm} 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`,T4=O.p`
  font-family: ${g.fonts.accent};
  font-size: ${g.fontSizes.sm};
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-weight: ${g.fontWeights.medium};
`,S4=O.p`
  font-size: ${g.fontSizes.base};
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: ${g.spacing.xl};
  font-weight: ${g.fontWeights.normal};
`,w1=O.h4`
  font-family: ${g.fonts.heading};
  font-size: ${g.fontSizes.xl};
  font-weight: ${g.fontWeights.bold};
  color: ${g.colors.white};
  margin-bottom: ${g.spacing.lg};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${g.gradients.primary};
    border-radius: 2px;
  }
`,Zh=O.div`
  display: flex;
  align-items: flex-start;
  gap: ${g.spacing.md};
  margin-bottom: ${g.spacing.lg};
  padding: ${g.spacing.md};
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${g.borderRadius.lg};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: ${g.transitions.normal};
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`,ed=O.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${g.gradients.primary};
  border-radius: ${g.borderRadius.lg};
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(229, 57, 53, 0.3);
`,td=O.div`
  flex: 1;
  padding-top: ${g.spacing.xs};
`,_1=O.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: ${g.transitions.fast};
  font-weight: ${g.fontWeights.medium};
  
  &:hover {
    color: ${g.colors.white};
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }
`,A4=O.div`
  display: flex;
  flex-direction: column;
  gap: ${g.spacing.md};
`,E1=O(ie.a)`
  display: flex;
  align-items: center;
  gap: ${g.spacing.md};
  padding: ${g.spacing.lg};
  background: rgba(255, 255, 255, 0.1);
  color: ${g.colors.white};
  text-decoration: none;
  border-radius: ${g.borderRadius.xl};
  transition: ${g.transitions.normal};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-family: ${g.fonts.accent};
  font-weight: ${g.fontWeights.semibold};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`,x1=O.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`,I4=O.div`
  display: flex;
  gap: ${g.spacing.md};
  margin-top: ${g.spacing.xl};
`,nd=O(ie.a)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: ${g.colors.white};
  text-decoration: none;
  border-radius: ${g.borderRadius.xl};
  transition: ${g.transitions.normal};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: ${g.gradients.primary};
    border-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(229, 57, 53, 0.4);
  }
`,C4=O.div`
  margin-top: ${g.spacing["3xl"]};
  padding-top: ${g.spacing.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: ${g.spacing.lg};
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
  
  @media (min-width: ${g.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`,P4=O.p`
  font-size: ${g.fontSizes.sm};
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: ${g.fontWeights.normal};
`,R4=O.div`
  display: flex;
  align-items: center;
  gap: ${g.spacing.sm};
  font-size: ${g.fontSizes.sm};
  color: rgba(255, 255, 255, 0.7);
`,k4=O.a`
  display: flex;
  align-items: center;
  gap: ${g.spacing.xs};
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: ${g.fontWeights.semibold};
  transition: ${g.transitions.fast};
  padding: ${g.spacing.xs} ${g.spacing.sm};
  border-radius: ${g.borderRadius.md};
  
  &:hover {
    color: ${g.colors.white};
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
`,b4=O.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,V4=({restaurantInfo:t})=>{const e=new Date().getFullYear();return A.jsxs(m4,{children:[A.jsx(g4,{}),A.jsxs(y4,{children:[A.jsxs(Jh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[A.jsxs(v4,{children:[A.jsx(w4,{children:t.logo?A.jsx(_4,{src:t.logo,alt:t.name}):A.jsx("span",{style:{fontSize:"2rem"},children:"🍽️"})}),A.jsxs(E4,{children:[A.jsx(x4,{children:t.name}),A.jsx(T4,{children:"Authentic Flavors, Memorable Experiences"})]})]}),A.jsx(S4,{children:"Experience the finest culinary journey with authentic flavors and exceptional hospitality. We serve fresh, delicious meals prepared with love and the finest ingredients, bringing you the taste of tradition with a modern touch."}),A.jsxs(I4,{children:[A.jsx(nd,{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.95},children:A.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:A.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),A.jsx(nd,{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:-5},whileTap:{scale:.95},children:A.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:A.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),A.jsx(nd,{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.95},children:A.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:A.jsx("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})})})]})]}),A.jsxs(Jh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:[A.jsx(w1,{children:"Contact Info"}),t.address&&A.jsxs(Zh,{children:[A.jsx(ed,{children:A.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),A.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),A.jsx(td,{children:A.jsx(_1,{href:"https://maps.app.goo.gl/vztXTynWqZ7C1nbx7",target:"_blank",rel:"noopener noreferrer",children:t.address})})]}),t.phone&&A.jsxs(Zh,{children:[A.jsx(ed,{children:A.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),A.jsx(td,{children:A.jsx(_1,{href:`tel:${t.phone.replace(/[^\d+]/g,"")}`,children:t.phone})})]}),A.jsxs(Zh,{children:[A.jsx(ed,{children:A.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("circle",{cx:"12",cy:"12",r:"10"}),A.jsx("polyline",{points:"12,6 12,12 16,14"})]})}),A.jsx(td,{children:A.jsx("div",{style:{color:"rgba(255, 255, 255, 0.9)",fontWeight:500},children:"Open Daily: 11:00 AM - 11:00 PM"})})]})]}),A.jsxs(Jh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},children:[A.jsx(w1,{children:"Quick Actions"}),A.jsxs(A4,{children:[A.jsxs(E1,{href:"https://maps.app.goo.gl/vztXTynWqZ7C1nbx7",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.02},whileTap:{scale:.98},children:[A.jsx(x1,{children:A.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),A.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),A.jsx("span",{children:"Get Directions"})]}),A.jsxs(E1,{href:"https://www.google.com/maps/place/Om+Kathiyawadi/@23.079501,72.526994,19z/data=!4m6!3m5!1s0x395e8300035acdfd:0x46bc5c14fe47370e!8m2!3d23.0794492!4d72.5266068!16s%2Fg%2F11vwpg2x08?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.02},whileTap:{scale:.98},children:[A.jsx(x1,{children:A.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("polygon",{points:"12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"})})}),A.jsx("span",{children:"Write Review"})]})]})]})]}),A.jsxs(C4,{children:[A.jsxs(P4,{children:["© ",e," ",t.name,". All rights reserved."]}),A.jsxs(R4,{children:[A.jsx("span",{children:"Powered by"}),A.jsxs(k4,{href:"https://quickmenus.org/",target:"_blank",rel:"noopener noreferrer",children:[A.jsx(b4,{children:A.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),A.jsx("circle",{cx:"9",cy:"9",r:"2"}),A.jsx("path",{d:"M21 15.5c-1-1.5-3-2.5-5-2.5s-4 1-5 2.5"})]})}),A.jsx("span",{children:"Quick Menus"})]})]})]})]})},D4=O.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${g.gradients.hero};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${g.zIndex.modal};
`,N4=O.div`
  text-align: center;
  color: ${g.colors.white};
`,M4=Ex`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,eS=Ex`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
`,$4=O.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: ${g.spacing.xl};
`,T1=O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid ${g.colors.white};
  border-radius: 50%;
  animation: ${M4} 1.5s linear infinite;
  animation-delay: ${t=>t.delay||0}s;
  opacity: ${t=>t.delay?.6:1};
`,L4=O(ie.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${g.fontSizes["2xl"]};
  animation: ${eS} 2s ease-in-out infinite;
`,O4=O(ie.h1)`
  font-family: ${g.fonts.heading};
  font-size: ${g.fontSizes["3xl"]};
  font-weight: ${g.fontWeights.bold};
  color: ${g.colors.white};
  margin-bottom: ${g.spacing.md};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`,j4=O(ie.p)`
  font-family: ${g.fonts.accent};
  font-size: ${g.fontSizes.lg};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${g.spacing.lg};
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
`,F4=O.div`
  display: flex;
  gap: ${g.spacing.sm};
  justify-content: center;
`,rd=O(ie.div)`
  width: 8px;
  height: 8px;
  background: ${g.colors.white};
  border-radius: 50%;
  animation: ${eS} 1.4s ease-in-out infinite;
  animation-delay: ${t=>t.delay}s;
`,z4=({restaurantName:t="Restaurant"})=>A.jsx(D4,{children:A.jsxs(N4,{children:[A.jsxs($4,{children:[A.jsx(T1,{}),A.jsx(T1,{delay:.3}),A.jsx(L4,{initial:{scale:0},animate:{scale:1},transition:{duration:.5,delay:.2},children:"🍽️"})]}),A.jsx(O4,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:t}),A.jsx(j4,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},children:"Preparing your culinary experience"}),A.jsxs(F4,{children:[A.jsx(rd,{delay:0}),A.jsx(rd,{delay:.2}),A.jsx(rd,{delay:.4})]})]})}),B4=()=>{};var S1={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},U4=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|l>>4;let p=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(p=64)),r.push(n[h],n[f],n[p],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):U4(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new H4;const p=s<<2|l>>4;if(r.push(p),c!==64){const w=l<<4&240|c>>2;if(r.push(w),f!==64){const I=c<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class H4 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const W4=function(t){const e=tS(t);return nS.encodeByteArray(e,!0)},Mu=function(t){return W4(t).replace(/\./g,"")},q4=function(t){try{return nS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4=()=>G4().__FIREBASE_DEFAULTS__,Q4=()=>{if(typeof process>"u"||typeof S1>"u")return;const t=S1.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Y4=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&q4(t[1]);return e&&JSON.parse(e)},Bm=()=>{try{return B4()||K4()||Q4()||Y4()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},X4=t=>{var e,n;return(n=(e=Bm())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},J4=t=>{const e=X4(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rS=()=>{var t;return(t=Bm())==null?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z4{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function eD(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Mu(JSON.stringify(n)),Mu(JSON.stringify(o)),""].join(".")}const jo={};function nD(){const t={prod:[],emulator:[]};for(const e of Object.keys(jo))jo[e]?t.emulator.push(e):t.prod.push(e);return t}function rD(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let A1=!1;function iD(t,e){if(typeof window>"u"||typeof document>"u"||!Um(window.location.host)||jo[t]===e||jo[t]||A1)return;jo[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",s=nD().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function u(p,w){p.setAttribute("width","24"),p.setAttribute("id",w),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function c(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{A1=!0,o()},p}function h(p,w){p.setAttribute("id",w),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=rD(r),w=n("text"),I=document.getElementById(w)||document.createElement("span"),P=n("learnmore"),V=document.getElementById(P)||document.createElement("a"),x=n("preprendIcon"),v=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const T=p.element;l(T),h(V,P);const b=c();u(v,x),T.append(v,I,V,b),document.body.appendChild(T)}s?(I.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sD(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oD(){var e;const t=(e=Bm())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aD(){return!oD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lD(){try{return typeof indexedDB=="object"}catch{return!1}}function uD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD="FirebaseError";class js extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cD,Object.setPrototypeOf(this,js.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,iS.prototype.create)}}class iS{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hD(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new js(i,l,r)}}function hD(t,e){return t.replace(dD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dD=/\{\$([^}]+)}/g;function $u(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(I1(s)&&I1(o)){if(!$u(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function I1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return t&&t._delegate?t._delegate:t}class ga{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Z4;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mD(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pD(t){return t===Qr?void 0:t}function mD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const yD={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},vD=oe.INFO,wD={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},_D=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sS{constructor(e){this.name=e,this._logLevel=vD,this._logHandler=_D,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const ED=(t,e)=>e.some(n=>t instanceof n);let C1,P1;function xD(){return C1||(C1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TD(){return P1||(P1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oS=new WeakMap,Lf=new WeakMap,aS=new WeakMap,id=new WeakMap,Hm=new WeakMap;function SD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oS.set(n,t)}).catch(()=>{}),Hm.set(e,t),e}function AD(t){if(Lf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lf.set(t,e)}let Of={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ID(t){Of=t(Of)}function CD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sd(this),e,...n);return aS.set(r,e.sort?e.sort():[e]),Tr(r)}:TD().includes(t)?function(...e){return t.apply(sd(this),e),Tr(oS.get(this))}:function(...e){return Tr(t.apply(sd(this),e))}}function PD(t){return typeof t=="function"?CD(t):(t instanceof IDBTransaction&&AD(t),ED(t,xD())?new Proxy(t,Of):t)}function Tr(t){if(t instanceof IDBRequest)return SD(t);if(id.has(t))return id.get(t);const e=PD(t);return e!==t&&(id.set(t,e),Hm.set(e,t)),e}const sd=t=>Hm.get(t);function RD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Tr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Tr(o.result),u.oldVersion,u.newVersion,Tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const kD=["get","getKey","getAll","getAllKeys","count"],bD=["put","add","delete","clear"],od=new Map;function R1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(od.get(e))return od.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=bD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kD.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return od.set(e,s),s}ID(t=>({...t,get:(e,n,r)=>R1(e,n)||t.get(e,n,r),has:(e,n)=>!!R1(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function DD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jf="@firebase/app",k1="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new sS("@firebase/app"),ND="@firebase/app-compat",MD="@firebase/analytics-compat",$D="@firebase/analytics",LD="@firebase/app-check-compat",OD="@firebase/app-check",jD="@firebase/auth",FD="@firebase/auth-compat",zD="@firebase/database",BD="@firebase/data-connect",UD="@firebase/database-compat",HD="@firebase/functions",WD="@firebase/functions-compat",qD="@firebase/installations",GD="@firebase/installations-compat",KD="@firebase/messaging",QD="@firebase/messaging-compat",YD="@firebase/performance",XD="@firebase/performance-compat",JD="@firebase/remote-config",ZD="@firebase/remote-config-compat",e3="@firebase/storage",t3="@firebase/storage-compat",n3="@firebase/firestore",r3="@firebase/ai",i3="@firebase/firestore-compat",s3="firebase",o3="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="[DEFAULT]",a3={[jf]:"fire-core",[ND]:"fire-core-compat",[$D]:"fire-analytics",[MD]:"fire-analytics-compat",[OD]:"fire-app-check",[LD]:"fire-app-check-compat",[jD]:"fire-auth",[FD]:"fire-auth-compat",[zD]:"fire-rtdb",[BD]:"fire-data-connect",[UD]:"fire-rtdb-compat",[HD]:"fire-fn",[WD]:"fire-fn-compat",[qD]:"fire-iid",[GD]:"fire-iid-compat",[KD]:"fire-fcm",[QD]:"fire-fcm-compat",[YD]:"fire-perf",[XD]:"fire-perf-compat",[JD]:"fire-rc",[ZD]:"fire-rc-compat",[e3]:"fire-gcs",[t3]:"fire-gcs-compat",[n3]:"fire-fst",[i3]:"fire-fst-compat",[r3]:"fire-vertex","fire-js":"fire-js",[s3]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new Map,l3=new Map,zf=new Map;function b1(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ju(t){const e=t.name;if(zf.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;zf.set(e,t);for(const n of Ou.values())b1(n,t);for(const n of l3.values())b1(n,t);return!0}function u3(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function c3(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h3={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new iS("app","Firebase",h3);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d3{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ga("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f3=o3;function lS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ff,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=rS()),!n)throw Sr.create("no-options");const s=Ou.get(i);if(s){if($u(n,s.options)&&$u(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new gD(i);for(const u of zf.values())o.addComponent(u);const l=new d3(n,r,o);return Ou.set(i,l),l}function p3(t=Ff){const e=Ou.get(t);if(!e&&t===Ff&&rS())return lS();if(!e)throw Sr.create("no-app",{appName:t});return e}function ss(t,e,n){let r=a3[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(o.join(" "));return}ju(new ga(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m3="firebase-heartbeat-database",g3=1,ya="firebase-heartbeat-store";let ad=null;function uS(){return ad||(ad=RD(m3,g3,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ya)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),ad}async function y3(t){try{const n=(await uS()).transaction(ya),r=await n.objectStore(ya).get(cS(t));return await n.done,r}catch(e){if(e instanceof js)Qn.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function V1(t,e){try{const r=(await uS()).transaction(ya,"readwrite");await r.objectStore(ya).put(e,cS(t)),await r.done}catch(n){if(n instanceof js)Qn.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function cS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v3=1024,w3=30;class _3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new x3(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=D1();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>w3){const o=T3(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=D1(),{heartbeatsToSend:r,unsentEntries:i}=E3(this._heartbeatsCache.heartbeats),s=Mu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Qn.warn(n),""}}}function D1(){return new Date().toISOString().substring(0,10)}function E3(t,e=v3){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),N1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),N1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class x3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lD()?uD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await y3(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return V1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return V1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function N1(t){return Mu(JSON.stringify({version:2,heartbeats:t})).length}function T3(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S3(t){ju(new ga("platform-logger",e=>new VD(e),"PRIVATE")),ju(new ga("heartbeat",e=>new _3(e),"PRIVATE")),ss(jf,k1,t),ss(jf,k1,"esm2020"),ss("fire-js","")}S3("");var M1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,hS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function S(){}S.prototype=y.prototype,E.D=y.prototype,E.prototype=new S,E.prototype.constructor=E,E.C=function(C,k,D){for(var R=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)R[Je-2]=arguments[Je];return y.prototype[k].apply(C,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,S){S||(S=0);var C=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)C[k]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(k=0;16>k;++k)C[k]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=E.g[0],S=E.g[1],k=E.g[2];var D=E.g[3],R=y+(D^S&(k^D))+C[0]+3614090360&4294967295;y=S+(R<<7&4294967295|R>>>25),R=D+(k^y&(S^k))+C[1]+3905402710&4294967295,D=y+(R<<12&4294967295|R>>>20),R=k+(S^D&(y^S))+C[2]+606105819&4294967295,k=D+(R<<17&4294967295|R>>>15),R=S+(y^k&(D^y))+C[3]+3250441966&4294967295,S=k+(R<<22&4294967295|R>>>10),R=y+(D^S&(k^D))+C[4]+4118548399&4294967295,y=S+(R<<7&4294967295|R>>>25),R=D+(k^y&(S^k))+C[5]+1200080426&4294967295,D=y+(R<<12&4294967295|R>>>20),R=k+(S^D&(y^S))+C[6]+2821735955&4294967295,k=D+(R<<17&4294967295|R>>>15),R=S+(y^k&(D^y))+C[7]+4249261313&4294967295,S=k+(R<<22&4294967295|R>>>10),R=y+(D^S&(k^D))+C[8]+1770035416&4294967295,y=S+(R<<7&4294967295|R>>>25),R=D+(k^y&(S^k))+C[9]+2336552879&4294967295,D=y+(R<<12&4294967295|R>>>20),R=k+(S^D&(y^S))+C[10]+4294925233&4294967295,k=D+(R<<17&4294967295|R>>>15),R=S+(y^k&(D^y))+C[11]+2304563134&4294967295,S=k+(R<<22&4294967295|R>>>10),R=y+(D^S&(k^D))+C[12]+1804603682&4294967295,y=S+(R<<7&4294967295|R>>>25),R=D+(k^y&(S^k))+C[13]+4254626195&4294967295,D=y+(R<<12&4294967295|R>>>20),R=k+(S^D&(y^S))+C[14]+2792965006&4294967295,k=D+(R<<17&4294967295|R>>>15),R=S+(y^k&(D^y))+C[15]+1236535329&4294967295,S=k+(R<<22&4294967295|R>>>10),R=y+(k^D&(S^k))+C[1]+4129170786&4294967295,y=S+(R<<5&4294967295|R>>>27),R=D+(S^k&(y^S))+C[6]+3225465664&4294967295,D=y+(R<<9&4294967295|R>>>23),R=k+(y^S&(D^y))+C[11]+643717713&4294967295,k=D+(R<<14&4294967295|R>>>18),R=S+(D^y&(k^D))+C[0]+3921069994&4294967295,S=k+(R<<20&4294967295|R>>>12),R=y+(k^D&(S^k))+C[5]+3593408605&4294967295,y=S+(R<<5&4294967295|R>>>27),R=D+(S^k&(y^S))+C[10]+38016083&4294967295,D=y+(R<<9&4294967295|R>>>23),R=k+(y^S&(D^y))+C[15]+3634488961&4294967295,k=D+(R<<14&4294967295|R>>>18),R=S+(D^y&(k^D))+C[4]+3889429448&4294967295,S=k+(R<<20&4294967295|R>>>12),R=y+(k^D&(S^k))+C[9]+568446438&4294967295,y=S+(R<<5&4294967295|R>>>27),R=D+(S^k&(y^S))+C[14]+3275163606&4294967295,D=y+(R<<9&4294967295|R>>>23),R=k+(y^S&(D^y))+C[3]+4107603335&4294967295,k=D+(R<<14&4294967295|R>>>18),R=S+(D^y&(k^D))+C[8]+1163531501&4294967295,S=k+(R<<20&4294967295|R>>>12),R=y+(k^D&(S^k))+C[13]+2850285829&4294967295,y=S+(R<<5&4294967295|R>>>27),R=D+(S^k&(y^S))+C[2]+4243563512&4294967295,D=y+(R<<9&4294967295|R>>>23),R=k+(y^S&(D^y))+C[7]+1735328473&4294967295,k=D+(R<<14&4294967295|R>>>18),R=S+(D^y&(k^D))+C[12]+2368359562&4294967295,S=k+(R<<20&4294967295|R>>>12),R=y+(S^k^D)+C[5]+4294588738&4294967295,y=S+(R<<4&4294967295|R>>>28),R=D+(y^S^k)+C[8]+2272392833&4294967295,D=y+(R<<11&4294967295|R>>>21),R=k+(D^y^S)+C[11]+1839030562&4294967295,k=D+(R<<16&4294967295|R>>>16),R=S+(k^D^y)+C[14]+4259657740&4294967295,S=k+(R<<23&4294967295|R>>>9),R=y+(S^k^D)+C[1]+2763975236&4294967295,y=S+(R<<4&4294967295|R>>>28),R=D+(y^S^k)+C[4]+1272893353&4294967295,D=y+(R<<11&4294967295|R>>>21),R=k+(D^y^S)+C[7]+4139469664&4294967295,k=D+(R<<16&4294967295|R>>>16),R=S+(k^D^y)+C[10]+3200236656&4294967295,S=k+(R<<23&4294967295|R>>>9),R=y+(S^k^D)+C[13]+681279174&4294967295,y=S+(R<<4&4294967295|R>>>28),R=D+(y^S^k)+C[0]+3936430074&4294967295,D=y+(R<<11&4294967295|R>>>21),R=k+(D^y^S)+C[3]+3572445317&4294967295,k=D+(R<<16&4294967295|R>>>16),R=S+(k^D^y)+C[6]+76029189&4294967295,S=k+(R<<23&4294967295|R>>>9),R=y+(S^k^D)+C[9]+3654602809&4294967295,y=S+(R<<4&4294967295|R>>>28),R=D+(y^S^k)+C[12]+3873151461&4294967295,D=y+(R<<11&4294967295|R>>>21),R=k+(D^y^S)+C[15]+530742520&4294967295,k=D+(R<<16&4294967295|R>>>16),R=S+(k^D^y)+C[2]+3299628645&4294967295,S=k+(R<<23&4294967295|R>>>9),R=y+(k^(S|~D))+C[0]+4096336452&4294967295,y=S+(R<<6&4294967295|R>>>26),R=D+(S^(y|~k))+C[7]+1126891415&4294967295,D=y+(R<<10&4294967295|R>>>22),R=k+(y^(D|~S))+C[14]+2878612391&4294967295,k=D+(R<<15&4294967295|R>>>17),R=S+(D^(k|~y))+C[5]+4237533241&4294967295,S=k+(R<<21&4294967295|R>>>11),R=y+(k^(S|~D))+C[12]+1700485571&4294967295,y=S+(R<<6&4294967295|R>>>26),R=D+(S^(y|~k))+C[3]+2399980690&4294967295,D=y+(R<<10&4294967295|R>>>22),R=k+(y^(D|~S))+C[10]+4293915773&4294967295,k=D+(R<<15&4294967295|R>>>17),R=S+(D^(k|~y))+C[1]+2240044497&4294967295,S=k+(R<<21&4294967295|R>>>11),R=y+(k^(S|~D))+C[8]+1873313359&4294967295,y=S+(R<<6&4294967295|R>>>26),R=D+(S^(y|~k))+C[15]+4264355552&4294967295,D=y+(R<<10&4294967295|R>>>22),R=k+(y^(D|~S))+C[6]+2734768916&4294967295,k=D+(R<<15&4294967295|R>>>17),R=S+(D^(k|~y))+C[13]+1309151649&4294967295,S=k+(R<<21&4294967295|R>>>11),R=y+(k^(S|~D))+C[4]+4149444226&4294967295,y=S+(R<<6&4294967295|R>>>26),R=D+(S^(y|~k))+C[11]+3174756917&4294967295,D=y+(R<<10&4294967295|R>>>22),R=k+(y^(D|~S))+C[2]+718787259&4294967295,k=D+(R<<15&4294967295|R>>>17),R=S+(D^(k|~y))+C[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,E.g[2]=E.g[2]+k&4294967295,E.g[3]=E.g[3]+D&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var S=y-this.blockSize,C=this.B,k=this.h,D=0;D<y;){if(k==0)for(;D<=S;)i(this,E,D),D+=this.blockSize;if(typeof E=="string"){for(;D<y;)if(C[k++]=E.charCodeAt(D++),k==this.blockSize){i(this,C),k=0;break}}else for(;D<y;)if(C[k++]=E[D++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var S=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=S&255,S/=256;for(this.u(E),E=Array(16),y=S=0;4>y;++y)for(var C=0;32>C;C+=8)E[S++]=this.g[y]>>>C&255;return E};function s(E,y){var S=l;return Object.prototype.hasOwnProperty.call(S,E)?S[E]:S[E]=y(E)}function o(E,y){this.h=y;for(var S=[],C=!0,k=E.length-1;0<=k;k--){var D=E[k]|0;C&&D==y||(S[k]=D,C=!1)}this.g=S}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return V(c(-E));for(var y=[],S=1,C=0;E>=S;C++)y[C]=E/S|0,S*=4294967296;return new o(y,0)}function h(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return V(h(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(y,8)),C=f,k=0;k<E.length;k+=8){var D=Math.min(8,E.length-k),R=parseInt(E.substring(k,k+D),y);8>D?(D=c(Math.pow(y,D)),C=C.j(D).add(c(R))):(C=C.j(S),C=C.add(c(R)))}return C}var f=u(0),p=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-V(this).m();for(var E=0,y=1,S=0;S<this.g.length;S++){var C=this.i(S);E+=(0<=C?C:4294967296+C)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(I(this))return"0";if(P(this))return"-"+V(this).toString(E);for(var y=c(Math.pow(E,6)),S=this,C="";;){var k=b(S,y).g;S=x(S,k.j(y));var D=((0<S.g.length?S.g[0]:S.h)>>>0).toString(E);if(S=k,I(S))return D+C;for(;6>D.length;)D="0"+D;C=D+C}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function I(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=x(this,E),P(E)?-1:I(E)?0:1};function V(E){for(var y=E.g.length,S=[],C=0;C<y;C++)S[C]=~E.g[C];return new o(S,~E.h).add(p)}t.abs=function(){return P(this)?V(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),S=[],C=0,k=0;k<=y;k++){var D=C+(this.i(k)&65535)+(E.i(k)&65535),R=(D>>>16)+(this.i(k)>>>16)+(E.i(k)>>>16);C=R>>>16,D&=65535,R&=65535,S[k]=R<<16|D}return new o(S,S[S.length-1]&-2147483648?-1:0)};function x(E,y){return E.add(V(y))}t.j=function(E){if(I(this)||I(E))return f;if(P(this))return P(E)?V(this).j(V(E)):V(V(this).j(E));if(P(E))return V(this.j(V(E)));if(0>this.l(w)&&0>E.l(w))return c(this.m()*E.m());for(var y=this.g.length+E.g.length,S=[],C=0;C<2*y;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<E.g.length;k++){var D=this.i(C)>>>16,R=this.i(C)&65535,Je=E.i(k)>>>16,Wt=E.i(k)&65535;S[2*C+2*k]+=R*Wt,v(S,2*C+2*k),S[2*C+2*k+1]+=D*Wt,v(S,2*C+2*k+1),S[2*C+2*k+1]+=R*Je,v(S,2*C+2*k+1),S[2*C+2*k+2]+=D*Je,v(S,2*C+2*k+2)}for(C=0;C<y;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=y;C<2*y;C++)S[C]=0;return new o(S,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function T(E,y){this.g=E,this.h=y}function b(E,y){if(I(y))throw Error("division by zero");if(I(E))return new T(f,f);if(P(E))return y=b(V(E),y),new T(V(y.g),V(y.h));if(P(y))return y=b(E,V(y)),new T(V(y.g),y.h);if(30<E.g.length){if(P(E)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var S=p,C=y;0>=C.l(E);)S=M(S),C=M(C);var k=$(S,1),D=$(C,1);for(C=$(C,2),S=$(S,2);!I(C);){var R=D.add(C);0>=R.l(E)&&(k=k.add(S),D=R),C=$(C,1),S=$(S,1)}return y=x(E,k.j(y)),new T(k,y)}for(k=f;0<=E.l(y);){for(S=Math.max(1,Math.floor(E.m()/y.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),D=c(S),R=D.j(y);P(R)||0<R.l(E);)S-=C,D=c(S),R=D.j(y);I(D)&&(D=p),k=k.add(D),E=x(E,R)}return new T(k,E)}t.A=function(E){return b(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),S=[],C=0;C<y;C++)S[C]=this.i(C)&E.i(C);return new o(S,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),S=[],C=0;C<y;C++)S[C]=this.i(C)|E.i(C);return new o(S,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),S=[],C=0;C<y;C++)S[C]=this.i(C)^E.i(C);return new o(S,this.h^E.h)};function M(E){for(var y=E.g.length+1,S=[],C=0;C<y;C++)S[C]=E.i(C)<<1|E.i(C-1)>>>31;return new o(S,E.h)}function $(E,y){var S=y>>5;y%=32;for(var C=E.g.length-S,k=[],D=0;D<C;D++)k[D]=0<y?E.i(D+S)>>>y|E.i(D+S+1)<<32-y:E.i(D+S);return new o(k,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Ar=o}).apply(typeof M1<"u"?M1:typeof self<"u"?self:typeof window<"u"?window:{});var El=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dS,Eo,fS,Kl,Bf,pS,mS,gS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,m){return a==Array.prototype||a==Object.prototype||(a[d]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof El=="object"&&El];for(var d=0;d<a.length;++d){var m=a[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var m=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var N=a[_];if(!(N in m))break e;m=m[N]}a=a[a.length-1],_=m[a],d=d(_),d!=_&&d!=null&&e(m,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var m=0,_=!1,N={next:function(){if(!_&&m<a.length){var L=m++;return{value:d(L,a[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,m){return a.call.apply(a.bind,arguments)}function f(a,d,m){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),a.apply(d,N)}}return function(){return a.apply(d,arguments)}}function p(a,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function w(a,d){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function I(a,d){function m(){}m.prototype=d.prototype,a.aa=d.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(_,N,L){for(var H=Array(arguments.length-2),me=2;me<arguments.length;me++)H[me-2]=arguments[me];return d.prototype[N].apply(_,H)}}function P(a){const d=a.length;if(0<d){const m=Array(d);for(let _=0;_<d;_++)m[_]=a[_];return m}return[]}function V(a,d){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(u(_)){const N=a.length||0,L=_.length||0;a.length=N+L;for(let H=0;H<L;H++)a[N+H]=_[H]}else a.push(_)}}class x{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var M=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function $(a,d,m){for(const _ in a)d.call(m,a[_],_,a)}function E(a,d){for(const m in a)d.call(void 0,a[m],m,a)}function y(a){const d={};for(const m in a)d[m]=a[m];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,d){let m,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(m in _)a[m]=_[m];for(let L=0;L<S.length;L++)m=S[L],Object.prototype.hasOwnProperty.call(_,m)&&(a[m]=_[m])}}function k(a){var d=1;a=a.split(":");const m=[];for(;0<d&&a.length;)m.push(a.shift()),d--;return a.length&&m.push(a.join(":")),m}function D(a){l.setTimeout(()=>{throw a},0)}function R(){var a=K;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Je{constructor(){this.h=this.g=null}add(d,m){const _=Wt.get();_.set(d,m),this.h?this.h.next=_:this.g=_,this.h=_}}var Wt=new x(()=>new Jn,a=>a.reset());class Jn{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let he,B=!1,K=new Je,Q=()=>{const a=l.Promise.resolve(void 0);he=()=>{a.then(de)}};var de=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(m){D(m)}var d=Wt;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}B=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var $t=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,d),l.removeEventListener("test",m,d)}catch{}return a}();function Ct(a,d){if(Ee.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(M){e:{try{b(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else m=="mouseover"?d=a.fromElement:m=="mouseout"&&(d=a.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ct.aa.h.call(this)}}I(Ct,Ee);var vt={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),Fr=0;function Vn(a,d,m,_,N){this.listener=a,this.proxy=null,this.src=d,this.type=m,this.capture=!!_,this.ha=N,this.key=++Fr,this.da=this.fa=!1}function Zn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Dn(a){this.src=a,this.g={},this.h=0}Dn.prototype.add=function(a,d,m,_,N){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var H=Nc(a,d,_,N);return-1<H?(d=a[H],m||(d.fa=!1)):(d=new Vn(d,this.src,L,!!_,N),d.fa=m,a.push(d)),d};function qt(a,d){var m=d.type;if(m in a.g){var _=a.g[m],N=Array.prototype.indexOf.call(_,d,void 0),L;(L=0<=N)&&Array.prototype.splice.call(_,N,1),L&&(Zn(d),a.g[m].length==0&&(delete a.g[m],a.h--))}}function Nc(a,d,m,_){for(var N=0;N<a.length;++N){var L=a[N];if(!L.da&&L.listener==d&&L.capture==!!m&&L.ha==_)return N}return-1}var Mc="closure_lm_"+(1e6*Math.random()|0),$c={};function _g(a,d,m,_,N){if(Array.isArray(d)){for(var L=0;L<d.length;L++)_g(a,d[L],m,_,N);return null}return m=Tg(m),a&&a[Pt]?a.K(d,m,c(_)?!!_.capture:!!_,N):b2(a,d,m,!1,_,N)}function b2(a,d,m,_,N,L){if(!d)throw Error("Invalid event type");var H=c(N)?!!N.capture:!!N,me=Oc(a);if(me||(a[Mc]=me=new Dn(a)),m=me.add(d,m,_,H,L),m.proxy)return m;if(_=V2(),m.proxy=_,_.src=a,_.listener=m,a.addEventListener)$t||(N=H),N===void 0&&(N=!1),a.addEventListener(d.toString(),_,N);else if(a.attachEvent)a.attachEvent(xg(d.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function V2(){function a(m){return d.call(a.src,a.listener,m)}const d=D2;return a}function Eg(a,d,m,_,N){if(Array.isArray(d))for(var L=0;L<d.length;L++)Eg(a,d[L],m,_,N);else _=c(_)?!!_.capture:!!_,m=Tg(m),a&&a[Pt]?(a=a.i,d=String(d).toString(),d in a.g&&(L=a.g[d],m=Nc(L,m,_,N),-1<m&&(Zn(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete a.g[d],a.h--)))):a&&(a=Oc(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Nc(d,m,_,N)),(m=-1<a?d[a]:null)&&Lc(m))}function Lc(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Pt])qt(d.i,a);else{var m=a.type,_=a.proxy;d.removeEventListener?d.removeEventListener(m,_,a.capture):d.detachEvent?d.detachEvent(xg(m),_):d.addListener&&d.removeListener&&d.removeListener(_),(m=Oc(d))?(qt(m,a),m.h==0&&(m.src=null,d[Mc]=null)):Zn(a)}}}function xg(a){return a in $c?$c[a]:$c[a]="on"+a}function D2(a,d){if(a.da)a=!0;else{d=new Ct(d,this);var m=a.listener,_=a.ha||a.src;a.fa&&Lc(a),a=m.call(_,d)}return a}function Oc(a){return a=a[Mc],a instanceof Dn?a:null}var jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tg(a){return typeof a=="function"?a:(a[jc]||(a[jc]=function(d){return a.handleEvent(d)}),a[jc])}function ot(){ne.call(this),this.i=new Dn(this),this.M=this,this.F=null}I(ot,ne),ot.prototype[Pt]=!0,ot.prototype.removeEventListener=function(a,d,m,_){Eg(this,a,d,m,_)};function wt(a,d){var m,_=a.F;if(_)for(m=[];_;_=_.F)m.push(_);if(a=a.M,_=d.type||d,typeof d=="string")d=new Ee(d,a);else if(d instanceof Ee)d.target=d.target||a;else{var N=d;d=new Ee(_,a),C(d,N)}if(N=!0,m)for(var L=m.length-1;0<=L;L--){var H=d.g=m[L];N=$a(H,_,!0,d)&&N}if(H=d.g=a,N=$a(H,_,!0,d)&&N,N=$a(H,_,!1,d)&&N,m)for(L=0;L<m.length;L++)H=d.g=m[L],N=$a(H,_,!1,d)&&N}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var m=a.g[d],_=0;_<m.length;_++)Zn(m[_]);delete a.g[d],a.h--}}this.F=null},ot.prototype.K=function(a,d,m,_){return this.i.add(String(a),d,!1,m,_)},ot.prototype.L=function(a,d,m,_){return this.i.add(String(a),d,!0,m,_)};function $a(a,d,m,_){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,L=0;L<d.length;++L){var H=d[L];if(H&&!H.da&&H.capture==m){var me=H.listener,Ze=H.ha||H.src;H.fa&&qt(a.i,H),N=me.call(Ze,_)!==!1&&N}}return N&&!_.defaultPrevented}function Sg(a,d,m){if(typeof a=="function")m&&(a=p(a,m));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Ag(a){a.g=Sg(()=>{a.g=null,a.i&&(a.i=!1,Ag(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class N2 extends ne{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ag(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ws(a){ne.call(this),this.h=a,this.g={}}I(Ws,ne);var Ig=[];function Cg(a){$(a.g,function(d,m){this.g.hasOwnProperty(m)&&Lc(d)},a),a.g={}}Ws.prototype.N=function(){Ws.aa.N.call(this),Cg(this)},Ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fc=l.JSON.stringify,M2=l.JSON.parse,$2=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function zc(){}zc.prototype.h=null;function Pg(a){return a.h||(a.h=a.i())}function Rg(){}var qs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bc(){Ee.call(this,"d")}I(Bc,Ee);function Uc(){Ee.call(this,"c")}I(Uc,Ee);var zr={},kg=null;function La(){return kg=kg||new ot}zr.La="serverreachability";function bg(a){Ee.call(this,zr.La,a)}I(bg,Ee);function Gs(a){const d=La();wt(d,new bg(d))}zr.STAT_EVENT="statevent";function Vg(a,d){Ee.call(this,zr.STAT_EVENT,a),this.stat=d}I(Vg,Ee);function _t(a){const d=La();wt(d,new Vg(d,a))}zr.Ma="timingevent";function Dg(a,d){Ee.call(this,zr.Ma,a),this.size=d}I(Dg,Ee);function Ks(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function Qs(){this.g=!0}Qs.prototype.xa=function(){this.g=!1};function L2(a,d,m,_,N,L){a.info(function(){if(a.g)if(L)for(var H="",me=L.split("&"),Ze=0;Ze<me.length;Ze++){var ce=me[Ze].split("=");if(1<ce.length){var at=ce[0];ce=ce[1];var lt=at.split("_");H=2<=lt.length&&lt[1]=="type"?H+(at+"="+ce+"&"):H+(at+"=redacted&")}}else H=null;else H=L;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+d+`
`+m+`
`+H})}function O2(a,d,m,_,N,L,H){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+d+`
`+m+`
`+L+" "+H})}function Si(a,d,m,_){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+F2(a,m)+(_?" "+_:"")})}function j2(a,d){a.info(function(){return"TIMEOUT: "+d})}Qs.prototype.info=function(){};function F2(a,d){if(!a.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var _=m[a];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var L=N[0];if(L!="noop"&&L!="stop"&&L!="close")for(var H=1;H<N.length;H++)N[H]=""}}}}return Fc(m)}catch{return d}}var Oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ng={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hc;function ja(){}I(ja,zc),ja.prototype.g=function(){return new XMLHttpRequest},ja.prototype.i=function(){return{}},Hc=new ja;function er(a,d,m,_){this.j=a,this.i=d,this.l=m,this.R=_||1,this.U=new Ws(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mg}function Mg(){this.i=null,this.g="",this.h=!1}var $g={},Wc={};function qc(a,d,m){a.L=1,a.v=Ua(Nn(d)),a.m=m,a.P=!0,Lg(a,null)}function Lg(a,d){a.F=Date.now(),Fa(a),a.A=Nn(a.v);var m=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Xg(m.i,"t",_),a.C=0,m=a.j.J,a.h=new Mg,a.g=my(a.j,m?d:null,!a.m),0<a.O&&(a.M=new N2(p(a.Y,a,a.g),a.O)),d=a.U,m=a.g,_=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Ig[0]=N.toString()),N=Ig);for(var L=0;L<N.length;L++){var H=_g(m,N[L],_||d.handleEvent,!1,d.h||d);if(!H)break;d.g[H.key]=H}d=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Gs(),L2(a.i,a.u,a.A,a.l,a.R,a.m)}er.prototype.ca=function(a){a=a.target;const d=this.M;d&&Mn(a)==3?d.j():this.Y(a)},er.prototype.Y=function(a){try{if(a==this.g)e:{const lt=Mn(this.g);var d=this.g.Ba();const Ci=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||iy(this.g)))){this.J||lt!=4||d==7||(d==8||0>=Ci?Gs(3):Gs(2)),Gc(this);var m=this.g.Z();this.X=m;t:if(Og(this)){var _=iy(this.g);a="";var N=_.length,L=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),Ys(this);var H="";break t}this.h.i=new l.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,a+=this.h.i.decode(_[d],{stream:!(L&&d==N-1)});_.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=m==200,O2(this.i,this.u,this.A,this.l,this.R,lt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Ze=this.g;if((me=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(me)){var ce=me;break t}}ce=null}if(m=ce)Si(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kc(this,m);else{this.o=!1,this.s=3,_t(12),Br(this),Ys(this);break e}}if(this.P){m=!0;let sn;for(;!this.J&&this.C<H.length;)if(sn=z2(this,H),sn==Wc){lt==4&&(this.s=4,_t(14),m=!1),Si(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==$g){this.s=4,_t(15),Si(this.i,this.l,H,"[Invalid Chunk]"),m=!1;break}else Si(this.i,this.l,sn,null),Kc(this,sn);if(Og(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||H.length!=0||this.h.h||(this.s=1,_t(16),m=!1),this.o=this.o&&m,!m)Si(this.i,this.l,H,"[Invalid Chunked Response]"),Br(this),Ys(this);else if(0<H.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),eh(at),at.M=!0,_t(11))}}else Si(this.i,this.l,H,null),Kc(this,H);lt==4&&Br(this),this.o&&!this.J&&(lt==4?hy(this.j,this):(this.o=!1,Fa(this)))}else iA(this.g),m==400&&0<H.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Br(this),Ys(this)}}}catch{}finally{}};function Og(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function z2(a,d){var m=a.C,_=d.indexOf(`
`,m);return _==-1?Wc:(m=Number(d.substring(m,_)),isNaN(m)?$g:(_+=1,_+m>d.length?Wc:(d=d.slice(_,_+m),a.C=_+m,d)))}er.prototype.cancel=function(){this.J=!0,Br(this)};function Fa(a){a.S=Date.now()+a.I,jg(a,a.I)}function jg(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ks(p(a.ba,a),d)}function Gc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}er.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(j2(this.i,this.A),this.L!=2&&(Gs(),_t(17)),Br(this),this.s=2,Ys(this)):jg(this,this.S-a)};function Ys(a){a.j.G==0||a.J||hy(a.j,a)}function Br(a){Gc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Cg(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Kc(a,d){try{var m=a.j;if(m.G!=0&&(m.g==a||Qc(m.h,a))){if(!a.K&&Qc(m.h,a)&&m.G==3){try{var _=m.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)Qa(m),Ga(m);else break e;Zc(m),_t(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=Ks(p(m.Za,m),6e3));if(1>=Bg(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Hr(m,11)}else if((a.K||m.g==a)&&Qa(m),!v(d))for(N=m.Da.g.parse(d),d=0;d<N.length;d++){let ce=N[d];if(m.T=ce[0],ce=ce[1],m.G==2)if(ce[0]=="c"){m.K=ce[1],m.ia=ce[2];const at=ce[3];at!=null&&(m.la=at,m.j.info("VER="+m.la));const lt=ce[4];lt!=null&&(m.Aa=lt,m.j.info("SVER="+m.Aa));const Ci=ce[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(_=1.5*Ci,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const sn=a.g;if(sn){const Xa=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xa){var L=_.h;L.g||Xa.indexOf("spdy")==-1&&Xa.indexOf("quic")==-1&&Xa.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Yc(L,L.h),L.h=null))}if(_.D){const th=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;th&&(_.ya=th,ye(_.I,_.D,th))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var H=a;if(_.qa=py(_,_.J?_.ia:null,_.W),H.K){Ug(_.h,H);var me=H,Ze=_.L;Ze&&(me.I=Ze),me.B&&(Gc(me),Fa(me)),_.g=H}else uy(_);0<m.i.length&&Ka(m)}else ce[0]!="stop"&&ce[0]!="close"||Hr(m,7);else m.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Hr(m,7):Jc(m):ce[0]!="noop"&&m.l&&m.l.ta(ce),m.v=0)}}Gs(4)}catch{}}var B2=class{constructor(a,d){this.g=a,this.map=d}};function Fg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bg(a){return a.h?1:a.g?a.g.size:0}function Qc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Yc(a,d){a.g?a.g.add(d):a.h=d}function Ug(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Fg.prototype.cancel=function(){if(this.i=Hg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Hg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const m of a.g.values())d=d.concat(m.D);return d}return P(a.i)}function U2(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],m=a.length,_=0;_<m;_++)d.push(a[_]);return d}d=[],m=0;for(_ in a)d[m++]=a[_];return d}function H2(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var m=0;m<a;m++)d.push(m);return d}d=[],m=0;for(const _ in a)d[m++]=_;return d}}}function Wg(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var m=H2(a),_=U2(a),N=_.length,L=0;L<N;L++)d.call(void 0,_[L],m&&m[L],a)}var qg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function W2(a,d){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var _=a[m].indexOf("="),N=null;if(0<=_){var L=a[m].substring(0,_);N=a[m].substring(_+1)}else L=a[m];d(L,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ur){this.h=a.h,za(this,a.j),this.o=a.o,this.g=a.g,Ba(this,a.s),this.l=a.l;var d=a.i,m=new Zs;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Gg(this,m),this.m=a.m}else a&&(d=String(a).match(qg))?(this.h=!1,za(this,d[1]||"",!0),this.o=Xs(d[2]||""),this.g=Xs(d[3]||"",!0),Ba(this,d[4]),this.l=Xs(d[5]||"",!0),Gg(this,d[6]||"",!0),this.m=Xs(d[7]||"")):(this.h=!1,this.i=new Zs(null,this.h))}Ur.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Js(d,Kg,!0),":");var m=this.g;return(m||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Js(d,Kg,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(Js(m,m.charAt(0)=="/"?K2:G2,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",Js(m,Y2)),a.join("")};function Nn(a){return new Ur(a)}function za(a,d,m){a.j=m?Xs(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ba(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Gg(a,d,m){d instanceof Zs?(a.i=d,X2(a.i,a.h)):(m||(d=Js(d,Q2)),a.i=new Zs(d,a.h))}function ye(a,d,m){a.i.set(d,m)}function Ua(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Xs(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Js(a,d,m){return typeof a=="string"?(a=encodeURI(a).replace(d,q2),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function q2(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Kg=/[#\/\?@]/g,G2=/[#\?:]/g,K2=/[#\?]/g,Q2=/[#\?@]/g,Y2=/#/g;function Zs(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function tr(a){a.g||(a.g=new Map,a.h=0,a.i&&W2(a.i,function(d,m){a.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Zs.prototype,t.add=function(a,d){tr(this),this.i=null,a=Ai(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(d),this.h+=1,this};function Qg(a,d){tr(a),d=Ai(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Yg(a,d){return tr(a),d=Ai(a,d),a.g.has(d)}t.forEach=function(a,d){tr(this),this.g.forEach(function(m,_){m.forEach(function(N){a.call(d,N,_,this)},this)},this)},t.na=function(){tr(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let _=0;_<d.length;_++){const N=a[_];for(let L=0;L<N.length;L++)m.push(d[_])}return m},t.V=function(a){tr(this);let d=[];if(typeof a=="string")Yg(this,a)&&(d=d.concat(this.g.get(Ai(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)d=d.concat(a[m])}return d},t.set=function(a,d){return tr(this),this.i=null,a=Ai(this,a),Yg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Xg(a,d,m){Qg(a,d),0<m.length&&(a.i=null,a.g.set(Ai(a,d),P(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var _=d[m];const L=encodeURIComponent(String(_)),H=this.V(_);for(_=0;_<H.length;_++){var N=L;H[_]!==""&&(N+="="+encodeURIComponent(String(H[_]))),a.push(N)}}return this.i=a.join("&")};function Ai(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function X2(a,d){d&&!a.j&&(tr(a),a.i=null,a.g.forEach(function(m,_){var N=_.toLowerCase();_!=N&&(Qg(this,_),Xg(this,N,m))},a)),a.j=d}function J2(a,d){const m=new Qs;if(l.Image){const _=new Image;_.onload=w(nr,m,"TestLoadImage: loaded",!0,d,_),_.onerror=w(nr,m,"TestLoadImage: error",!1,d,_),_.onabort=w(nr,m,"TestLoadImage: abort",!1,d,_),_.ontimeout=w(nr,m,"TestLoadImage: timeout",!1,d,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else d(!1)}function Z2(a,d){const m=new Qs,_=new AbortController,N=setTimeout(()=>{_.abort(),nr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:_.signal}).then(L=>{clearTimeout(N),L.ok?nr(m,"TestPingServer: ok",!0,d):nr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),nr(m,"TestPingServer: error",!1,d)})}function nr(a,d,m,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(m)}catch{}}function eA(){this.g=new $2}function tA(a,d,m){const _=m||"";try{Wg(a,function(N,L){let H=N;c(N)&&(H=Fc(N)),d.push(_+L+"="+encodeURIComponent(H))})}catch(N){throw d.push(_+"type="+encodeURIComponent("_badmap")),N}}function Ha(a){this.l=a.Ub||null,this.j=a.eb||!1}I(Ha,zc),Ha.prototype.g=function(){return new Wa(this.l,this.j)},Ha.prototype.i=function(a){return function(){return a}}({});function Wa(a,d){ot.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Wa,ot),t=Wa.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,to(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,eo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,to(this)),this.g&&(this.readyState=3,to(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?eo(this):to(this),this.readyState==3&&Jg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,eo(this))},t.Qa=function(a){this.g&&(this.response=a,eo(this))},t.ga=function(){this.g&&eo(this)};function eo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,to(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=d.next();return a.join(`\r
`)};function to(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zg(a){let d="";return $(a,function(m,_){d+=_,d+=":",d+=m,d+=`\r
`}),d}function Xc(a,d,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=Zg(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):ye(a,d,m))}function be(a){ot.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(be,ot);var nA=/^https?$/i,rA=["POST","PUT"];t=be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hc.g(),this.v=this.o?Pg(this.o):Pg(Hc),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(L){ey(this,L);return}if(a=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)m.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())m.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(rA,d,void 0))||_||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,H]of m)this.g.setRequestHeader(L,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ry(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){ey(this,L)}};function ey(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,ty(a),qa(a)}function ty(a){a.A||(a.A=!0,wt(a,"complete"),wt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,wt(this,"complete"),wt(this,"abort"),qa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qa(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ny(this):this.bb())},t.bb=function(){ny(this)};function ny(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Mn(a)!=4||a.Z()!=2)){if(a.u&&Mn(a)==4)Sg(a.Ea,0,a);else if(wt(a,"readystatechange"),Mn(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var _;if(_=H===0){var N=String(a.D).match(qg)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),_=!nA.test(N?N.toLowerCase():"")}m=_}if(m)wt(a,"complete"),wt(a,"success");else{a.m=6;try{var L=2<Mn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",ty(a)}}finally{qa(a)}}}}function qa(a,d){if(a.g){ry(a);const m=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||wt(a,"ready");try{m.onreadystatechange=_}catch{}}}function ry(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),M2(d)}};function iy(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function iA(a){const d={};a=(a.g&&2<=Mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(v(a[_]))continue;var m=k(a[_]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=d[N]||[];d[N]=L,L.push(m)}E(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function no(a,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||d}function sy(a){this.Aa=0,this.i=[],this.j=new Qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=no("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=no("baseRetryDelayMs",5e3,a),this.cb=no("retryDelaySeedMs",1e4,a),this.Wa=no("forwardChannelMaxRetries",2,a),this.wa=no("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Fg(a&&a.concurrentRequestLimit),this.Da=new eA,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=sy.prototype,t.la=8,t.G=1,t.connect=function(a,d,m,_){_t(0),this.W=a,this.H=d||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=py(this,null,this.W),Ka(this)};function Jc(a){if(oy(a),a.G==3){var d=a.U++,m=Nn(a.I);if(ye(m,"SID",a.K),ye(m,"RID",d),ye(m,"TYPE","terminate"),ro(a,m),d=new er(a,a.j,d),d.L=2,d.v=Ua(Nn(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=d.v,m=!0),m||(d.g=my(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Fa(d)}fy(a)}function Ga(a){a.g&&(eh(a),a.g.cancel(),a.g=null)}function oy(a){Ga(a),a.u&&(l.clearTimeout(a.u),a.u=null),Qa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ka(a){if(!zg(a.h)&&!a.s){a.s=!0;var d=a.Ga;he||Q(),B||(he(),B=!0),K.add(d,a),a.B=0}}function sA(a,d){return Bg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ks(p(a.Ga,a,d),dy(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new er(this,this.j,a);let L=this.o;if(this.S&&(L?(L=y(L),C(L,this.S)):L=this.S),this.m!==null||this.O||(N.H=L,L=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=ly(this,N,d),m=Nn(this.I),ye(m,"RID",a),ye(m,"CVER",22),this.D&&ye(m,"X-HTTP-Session-Id",this.D),ro(this,m),L&&(this.O?d="headers="+encodeURIComponent(String(Zg(L)))+"&"+d:this.m&&Xc(m,this.m,L)),Yc(this.h,N),this.Ua&&ye(m,"TYPE","init"),this.P?(ye(m,"$req",d),ye(m,"SID","null"),N.T=!0,qc(N,m,null)):qc(N,m,d),this.G=2}}else this.G==3&&(a?ay(this,a):this.i.length==0||zg(this.h)||ay(this))};function ay(a,d){var m;d?m=d.l:m=a.U++;const _=Nn(a.I);ye(_,"SID",a.K),ye(_,"RID",m),ye(_,"AID",a.T),ro(a,_),a.m&&a.o&&Xc(_,a.m,a.o),m=new er(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),d&&(a.i=d.D.concat(a.i)),d=ly(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Yc(a.h,m),qc(m,_,d)}function ro(a,d){a.H&&$(a.H,function(m,_){ye(d,_,m)}),a.l&&Wg({},function(m,_){ye(d,_,m)})}function ly(a,d,m){m=Math.min(a.i.length,m);var _=a.l?p(a.l.Na,a.l,a):null;e:{var N=a.i;let L=-1;for(;;){const H=["count="+m];L==-1?0<m?(L=N[0].g,H.push("ofs="+L)):L=0:H.push("ofs="+L);let me=!0;for(let Ze=0;Ze<m;Ze++){let ce=N[Ze].g;const at=N[Ze].map;if(ce-=L,0>ce)L=Math.max(0,N[Ze].g-100),me=!1;else try{tA(at,H,"req"+ce+"_")}catch{_&&_(at)}}if(me){_=H.join("&");break e}}}return a=a.i.splice(0,m),d.D=a,_}function uy(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;he||Q(),B||(he(),B=!0),K.add(d,a),a.v=0}}function Zc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ks(p(a.Fa,a),dy(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,cy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ks(p(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Ga(this),cy(this))};function eh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function cy(a){a.g=new er(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Nn(a.qa);ye(d,"RID","rpc"),ye(d,"SID",a.K),ye(d,"AID",a.T),ye(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(d,"TO",a.ja),ye(d,"TYPE","xmlhttp"),ro(a,d),a.m&&a.o&&Xc(d,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=Ua(Nn(d)),m.m=null,m.P=!0,Lg(m,a)}t.Za=function(){this.C!=null&&(this.C=null,Ga(this),Zc(this),_t(19))};function Qa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function hy(a,d){var m=null;if(a.g==d){Qa(a),eh(a),a.g=null;var _=2}else if(Qc(a.h,d))m=d.D,Ug(a.h,d),_=1;else return;if(a.G!=0){if(d.o)if(_==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var N=a.B;_=La(),wt(_,new Dg(_,m)),Ka(a)}else uy(a);else if(N=d.s,N==3||N==0&&0<d.X||!(_==1&&sA(a,d)||_==2&&Zc(a)))switch(m&&0<m.length&&(d=a.h,d.i=d.i.concat(m)),N){case 1:Hr(a,5);break;case 4:Hr(a,10);break;case 3:Hr(a,6);break;default:Hr(a,2)}}}function dy(a,d){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*d}function Hr(a,d){if(a.j.info("Error code "+d),d==2){var m=p(a.fb,a),_=a.Xa;const N=!_;_=new Ur(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||za(_,"https"),Ua(_),N?J2(_.toString(),m):Z2(_.toString(),m)}else _t(2);a.G=0,a.l&&a.l.sa(d),fy(a),oy(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function fy(a){if(a.G=0,a.ka=[],a.l){const d=Hg(a.h);(d.length!=0||a.i.length!=0)&&(V(a.ka,d),V(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function py(a,d,m){var _=m instanceof Ur?Nn(m):new Ur(m);if(_.g!="")d&&(_.g=d+"."+_.g),Ba(_,_.s);else{var N=l.location;_=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var L=new Ur(null);_&&za(L,_),d&&(L.g=d),N&&Ba(L,N),m&&(L.l=m),_=L}return m=a.D,d=a.ya,m&&d&&ye(_,m,d),ye(_,"VER",a.la),ro(a,_),_}function my(a,d,m){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new be(new Ha({eb:m})):new be(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function gy(){}t=gy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ya(){}Ya.prototype.g=function(a,d){return new Lt(a,d)};function Lt(a,d){ot.call(this),this.g=new sy(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!v(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ii(this)}I(Lt,ot),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Jc(this.g)},Lt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=Fc(a),a=m);d.i.push(new B2(d.Ya++,a)),d.G==3&&Ka(d)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Jc(this.g),delete this.g,Lt.aa.N.call(this)};function yy(a){Bc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const m in d){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}I(yy,Bc);function vy(){Uc.call(this),this.status=1}I(vy,Uc);function Ii(a){this.g=a}I(Ii,gy),Ii.prototype.ua=function(){wt(this.g,"a")},Ii.prototype.ta=function(a){wt(this.g,new yy(a))},Ii.prototype.sa=function(a){wt(this.g,new vy)},Ii.prototype.ra=function(){wt(this.g,"b")},Ya.prototype.createWebChannel=Ya.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,gS=function(){return new Ya},mS=function(){return La()},pS=zr,Bf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oa.NO_ERROR=0,Oa.TIMEOUT=8,Oa.HTTP_ERROR=6,Kl=Oa,Ng.COMPLETE="complete",fS=Ng,Rg.EventType=qs,qs.OPEN="a",qs.CLOSE="b",qs.ERROR="c",qs.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Eo=Rg,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,dS=be}).apply(typeof El<"u"?El:typeof self<"u"?self:typeof window<"u"?window:{});const $1="@firebase/firestore",L1="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new sS("@firebase/firestore");function ki(){return wi.logLevel}function W(t,...e){if(wi.logLevel<=oe.DEBUG){const n=e.map(Wm);wi.debug(`Firestore (${Fs}): ${t}`,...n)}}function Yn(t,...e){if(wi.logLevel<=oe.ERROR){const n=e.map(Wm);wi.error(`Firestore (${Fs}): ${t}`,...n)}}function As(t,...e){if(wi.logLevel<=oe.WARN){const n=e.map(Wm);wi.warn(`Firestore (${Fs}): ${t}`,...n)}}function Wm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,yS(t,r,n)}function yS(t,e,n){let r=`FIRESTORE (${Fs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Yn(r),new Error(r)}function Re(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||yS(e,i,r)}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends js{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class I3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class C3{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Re(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ui;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ui,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ui)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new vS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class P3{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class R3{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new P3(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k3{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,c3(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Re(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new O1(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new O1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b3(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=b3(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Uf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return ld(i)===ld(s)?re(i,s):ld(i)?1:-1}return re(t.length,e.length)}const V3=55296,D3=57343;function ld(t){const e=t.charCodeAt(0);return e>=V3&&e<=D3}function Is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="__name__";class wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=wn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return re(e.length,n.length)}static compareSegments(e,n){const r=wn.isNumericId(e),i=wn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?wn.extractNumericId(e).compare(wn.extractNumericId(n)):Uf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ar.fromString(e.substring(4,e.length-2))}}class Te extends wn{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const N3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends wn{construct(e,n,r){return new mt(e,n,r)}static isValidIdentifier(e){return N3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===j1}static keyField(){return new mt([j1])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Te.fromString(e))}static fromName(e){return new Y(Te.fromString(e).popFirst(5))}static empty(){return new Y(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Te(e.slice()))}}function M3(t,e,n,r){if(e===!0&&r===!0)throw new G(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function F1(t){if(Y.isDocumentKey(t))throw new G(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _S(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function Hf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ec(t);throw new G(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e){const n={typeString:t};return e&&(n.value=e),n}function ba(t,e){if(!_S(t))throw new G(z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new G(z.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=-62135596800,B1=1e6;class Se{static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*B1);return new Se(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<z1)throw new G(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/B1}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ba(e,Se._jsonSchema))return new Se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-z1;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Se._jsonSchemaVersion="firestore/timestamp/1.0",Se._jsonSchema={type:Ue("string",Se._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new Se(0,0))}static max(){return new J(new Se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=-1;function $3(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new kr(i,Y.empty(),e)}function L3(t){return new kr(t.readTime,t.key,va)}class kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kr(J.min(),Y.empty(),va)}static max(){return new kr(J.max(),Y.empty(),va)}}function O3(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class F3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xc(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==j3)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++l,l===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function z3(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Tc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B3=-1;function Sc(t){return t==null}function Fu(t){return t===0&&1/t==-1/0}function U3(t){return typeof t=="number"&&Number.isInteger(t)&&!Fu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="";function H3(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=U1(e)),e=W3(t.get(n),e);return U1(e)}function W3(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case ES:n+="";break;default:n+=s}}return n}function U1(t){return t+ES+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xl(this.root,e,this.comparator,!1)}getReverseIterator(){return new xl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xl(this.root,e,this.comparator,!0)}}class xl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??nt.RED,this.left=i??nt.EMPTY,this.right=s??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new nt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new W1(this.data.getIterator())}getIteratorFrom(e){return new W1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class W1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new dr([])}unionWith(e){let n=new qe(mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new TS("Invalid base64 string: "+s):s}}(e);return new st(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const q3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(Re(!!t,39018),typeof t=="string"){let e=0;const n=q3.exec(t);if(Re(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="server_timestamp",AS="__type__",IS="__previous_value__",CS="__local_write_time__";function qm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[AS])==null?void 0:r.stringValue)===SS}function Ac(t){const e=t.mapValue.fields[IS];return qm(e)?Ac(e):e}function wa(t){const e=br(t.mapValue.fields[CS].timestampValue);return new Se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(e,n,r,i,s,o,l,u,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=h}}const zu="(default)";class _a{constructor(e,n){this.projectId=e,this.database=n||zu}static empty(){return new _a("","")}get isDefaultDatabase(){return this.database===zu}isEqual(e){return e instanceof _a&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="__type__",RS="__max__",Tl={mapValue:{fields:{__type__:{stringValue:RS}}}},kS="__vector__",Bu="value";function Dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qm(t)?4:Q3(t)?9007199254740991:K3(t)?10:11:Z(28295,{value:t})}function bn(t,e){if(t===e)return!0;const n=Dr(t);if(n!==Dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wa(t).isEqual(wa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=br(i.timestampValue),l=br(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Vr(i.bytesValue).isEqual(Vr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),l=Me(s.doubleValue);return o===l?Fu(o)===Fu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Is(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(H1(o)!==H1(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!bn(o[u],l[u])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function Ea(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Cs(t,e){if(t===e)return 0;const n=Dr(t),r=Dr(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Me(s.integerValue||s.doubleValue),u=Me(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return q1(t.timestampValue,e.timestampValue);case 4:return q1(wa(t),wa(e));case 5:return Uf(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Vr(s),u=Vr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=re(l[c],u[c]);if(h!==0)return h}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=re(Me(s.latitude),Me(o.latitude));return l!==0?l:re(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return G1(t.arrayValue,e.arrayValue);case 10:return function(s,o){var p,w,I,P;const l=s.fields||{},u=o.fields||{},c=(p=l[Bu])==null?void 0:p.arrayValue,h=(w=u[Bu])==null?void 0:w.arrayValue,f=re(((I=c==null?void 0:c.values)==null?void 0:I.length)||0,((P=h==null?void 0:h.values)==null?void 0:P.length)||0);return f!==0?f:G1(c,h)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Tl.mapValue&&o===Tl.mapValue)return 0;if(s===Tl.mapValue)return 1;if(o===Tl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const p=Uf(u[f],h[f]);if(p!==0)return p;const w=Cs(l[u[f]],c[h[f]]);if(w!==0)return w}return re(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function q1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=br(t),r=br(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function G1(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Cs(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function Ps(t){return Wf(t)}function Wf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Wf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Wf(n.fields[o])}`;return i+"}"}(t.mapValue):Z(61005,{value:t})}function Ql(t){switch(Dr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ac(t);return e?16+Ql(e):16;case 5:return 2*t.stringValue.length;case 6:return Vr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ql(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Bs(r.fields,(s,o)=>{i+=s.length+Ql(o)}),i}(t.mapValue);default:throw Z(13486,{value:t})}}function K1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qf(t){return!!t&&"integerValue"in t}function Gm(t){return!!t&&"arrayValue"in t}function Q1(t){return!!t&&"nullValue"in t}function Y1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ud(t){return!!t&&"mapValue"in t}function K3(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[PS])==null?void 0:r.stringValue)===kS}function Fo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Bs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fo(t.arrayValue.values[n]);return e}return{...t}}function Q3(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===RS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.value=e}static empty(){return new xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ud(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fo(n)}setAll(e){let n=mt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Fo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ud(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ud(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Bs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xn(Fo(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,J.min(),J.min(),J.min(),xn.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,J.min(),J.min(),xn.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,J.min(),J.min(),xn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this.position=e,this.inclusive=n}}function X1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Cs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function J1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Y3(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{}class Be extends bS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new J3(e,n,r):n==="array-contains"?new tN(e,r):n==="in"?new nN(e,r):n==="not-in"?new rN(e,r):n==="array-contains-any"?new iN(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Z3(e,r):new eN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Cs(n,this.value)):n!==null&&Dr(this.value)===Dr(n)&&this.matchesComparison(Cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends bS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new gn(e,n)}matches(e){return VS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function VS(t){return t.op==="and"}function DS(t){return X3(t)&&VS(t)}function X3(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function Gf(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+Ps(t.value);if(DS(t))return t.filters.map(e=>Gf(e)).join(",");{const e=t.filters.map(n=>Gf(n)).join(",");return`${t.op}(${e})`}}function NS(t,e){return t instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&bn(r.value,i.value)}(t,e):t instanceof gn?function(r,i){return i instanceof gn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&NS(o,i.filters[l]),!0):!1}(t,e):void Z(19439)}function MS(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${Ps(n.value)}`}(t):t instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(MS).join(" ,")+"}"}(t):"Filter"}class J3 extends Be{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class Z3 extends Be{constructor(e,n){super(e,"in",n),this.keys=$S("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class eN extends Be{constructor(e,n){super(e,"not-in",n),this.keys=$S("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $S(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class tN extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gm(n)&&Ea(n.arrayValue,this.value)}}class nN extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ea(this.value.arrayValue,n)}}class rN extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ea(this.value.arrayValue,n)}}class iN extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ea(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Z1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new sN(t,e,n,r,i,s,o)}function Km(t){const e=ae(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ps(r)).join(",")),e.Te=n}return e.Te}function Qm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Y3(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!NS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!J1(t.startAt,e.startAt)&&J1(t.endAt,e.endAt)}function Kf(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function oN(t,e,n,r,i,s,o,l){return new Va(t,e,n,r,i,s,o,l)}function LS(t){return new Va(t)}function ew(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function OS(t){return t.collectionGroup!==null}function zo(t){const e=ae(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new qe(mt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Hu(s,r))}),n.has(mt.keyField().canonicalString())||e.Ie.push(new Hu(mt.keyField(),r))}return e.Ie}function Pn(t){const e=ae(t);return e.Ee||(e.Ee=aN(e,zo(t))),e.Ee}function aN(t,e){if(t.limitType==="F")return Z1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Hu(i.field,s)});const n=t.endAt?new Uu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Uu(t.startAt.position,t.startAt.inclusive):null;return Z1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qf(t,e){const n=t.filters.concat([e]);return new Va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yf(t,e,n){return new Va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ic(t,e){return Qm(Pn(t),Pn(e))&&t.limitType===e.limitType}function jS(t){return`${Km(Pn(t))}|lt:${t.limitType}`}function bi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>MS(i)).join(", ")}]`),Sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ps(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ps(i)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function Cc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of zo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=X1(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,zo(r),i)||r.endAt&&!function(o,l,u){const c=X1(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,zo(r),i))}(t,e)}function lN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function FS(t){return(e,n)=>{let r=!1;for(const i of zo(t)){const s=uN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function uN(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Cs(u,c):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return xS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=new Le(Y.comparator);function Nr(){return cN}const zS=new Le(Y.comparator);function xo(...t){let e=zS;for(const n of t)e=e.insert(n.key,n);return e}function hN(t){let e=zS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ri(){return Bo()}function BS(){return Bo()}function Bo(){return new Ti(t=>t.toString(),(t,e)=>t.isEqual(e))}const dN=new qe(Y.comparator);function le(...t){let e=dN;for(const n of t)e=e.add(n);return e}const fN=new qe(re);function pN(){return fN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fu(e)?"-0":e}}function US(t){return{integerValue:""+t}}function mN(t,e){return U3(e)?US(e):Ym(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this._=void 0}}function gN(t,e,n){return t instanceof Xf?function(i,s){const o={fields:{[AS]:{stringValue:SS},[CS]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qm(s)&&(s=Ac(s)),s&&(o.fields[IS]=s),{mapValue:o}}(n,e):t instanceof Wu?HS(t,e):t instanceof qu?WS(t,e):function(i,s){const o=vN(i,s),l=tw(o)+tw(i.Ae);return qf(o)&&qf(i.Ae)?US(l):Ym(i.serializer,l)}(t,e)}function yN(t,e,n){return t instanceof Wu?HS(t,e):t instanceof qu?WS(t,e):n}function vN(t,e){return t instanceof Jf?function(r){return qf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xf extends Pc{}class Wu extends Pc{constructor(e){super(),this.elements=e}}function HS(t,e){const n=qS(e);for(const r of t.elements)n.some(i=>bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class qu extends Pc{constructor(e){super(),this.elements=e}}function WS(t,e){let n=qS(e);for(const r of t.elements)n=n.filter(i=>!bn(i,r));return{arrayValue:{values:n}}}class Jf extends Pc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function tw(t){return Me(t.integerValue||t.doubleValue)}function qS(t){return Gm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Wu&&i instanceof Wu||r instanceof qu&&i instanceof qu?Is(r.elements,i.elements,bn):r instanceof Jf&&i instanceof Jf?bn(r.Ae,i.Ae):r instanceof Xf&&i instanceof Xf}(t.transform,e.transform)}class ci{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ci}static exists(e){return new ci(void 0,e)}static updateTime(e){return new ci(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xm{}function GS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new EN(t.key,ci.none()):new Jm(t.key,t.data,ci.none());{const n=t.data,r=xn.empty();let i=new qe(mt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Rc(t.key,r,new dr(i.toArray()),ci.none())}}function _N(t,e,n){t instanceof Jm?function(i,s,o){const l=i.value.clone(),u=rw(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Rc?function(i,s,o){if(!Yl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=rw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(KS(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Uo(t,e,n,r){return t instanceof Jm?function(s,o,l,u){if(!Yl(s.precondition,o))return l;const c=s.value.clone(),h=iw(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rc?function(s,o,l,u){if(!Yl(s.precondition,o))return l;const c=iw(s.fieldTransforms,u,o),h=o.data;return h.setAll(KS(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return Yl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function nw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Is(r,i,(s,o)=>wN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jm extends Xm{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rc extends Xm{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function KS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rw(t,e,n){const r=new Map;Re(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,yN(o,l,n[i]))}return r}function iw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,gN(s,o,e))}return r}class EN extends Xm{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_N(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=BS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=GS(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Is(this.mutations,e.mutations,(n,r)=>nw(n,r))&&Is(this.baseMutations,e.baseMutations,(n,r)=>nw(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,se;function QS(t){if(t===void 0)return Yn("GRPC error has no .code"),z.UNKNOWN;switch(t){case Oe.OK:return z.OK;case Oe.CANCELLED:return z.CANCELLED;case Oe.UNKNOWN:return z.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return z.INTERNAL;case Oe.UNAVAILABLE:return z.UNAVAILABLE;case Oe.UNAUTHENTICATED:return z.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case Oe.NOT_FOUND:return z.NOT_FOUND;case Oe.ALREADY_EXISTS:return z.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return z.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case Oe.ABORTED:return z.ABORTED;case Oe.OUT_OF_RANGE:return z.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return z.UNIMPLEMENTED;case Oe.DATA_LOSS:return z.DATA_LOSS;default:return Z(39323,{code:t})}}(se=Oe||(Oe={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=new Ar([4294967295,4294967295],0);function sw(t){const e=AN().encode(t),n=new hS;return n.update(e),new Uint8Array(n.digest())}function ow(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ar([n,r],0),new Ar([i,s],0)]}class Zm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new To(`Invalid padding: ${n}`);if(r<0)throw new To(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new To(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new To(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ar.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Ar.fromNumber(r)));return i.compare(IN)===1&&(i=new Ar([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=sw(e),[r,i]=ow(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=sw(e),[r,i]=ow(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class To extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kc(J.min(),i,new Le(re),Nr(),le())}}class Da{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Da(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class YS{constructor(e,n){this.targetId=e,this.Ce=n}}class XS{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class aw{constructor(){this.ve=0,this.Fe=lw(),this.Me=st.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=le(),n=le(),r=le();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z(38017,{changeType:s})}}),new Da(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=lw()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class CN{constructor(e){this.Ge=e,this.ze=new Map,this.je=Nr(),this.Je=Sl(),this.He=Sl(),this.Ye=new Le(re)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Kf(s))if(r===0){const o=new Y(s.path);this.et(n,o,pt.newNoDocument(o,J.min()))}else Re(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Vr(r).toUint8Array()}catch(u){if(u instanceof TS)return As("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Zm(o,i,s)}catch(u){return As(u instanceof To?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Kf(l.target)){const u=new Y(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,pt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=le();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new kc(e,n,this.Ye,this.je,r);return this.je=Nr(),this.Je=Sl(),this.He=Sl(),this.Ye=new Le(re),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new aw,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new qe(re),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new qe(re),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new aw),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Sl(){return new Le(Y.comparator)}function lw(){return new Le(Y.comparator)}const PN={asc:"ASCENDING",desc:"DESCENDING"},RN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kN={and:"AND",or:"OR"};class bN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zf(t,e){return t.useProto3Json||Sc(e)?e:{value:e}}function ep(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function os(t){return Re(!!t,49232),J.fromTimestamp(function(n){const r=br(n);return new Se(r.seconds,r.nanos)}(t))}function ZS(t,e){return tp(t,e).canonicalString()}function tp(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function e2(t){const e=Te.fromString(t);return Re(s2(e),10190,{key:e.toString()}),e}function cd(t,e){const n=e2(e);if(n.get(1)!==t.databaseId.projectId)throw new G(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(n2(n))}function t2(t,e){return ZS(t.databaseId,e)}function VN(t){const e=e2(t);return e.length===4?Te.emptyPath():n2(e)}function uw(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function n2(t){return Re(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function DN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Re(h===void 0||typeof h=="string",58123),st.fromBase64String(h||"")):(Re(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),st.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const h=c.code===void 0?z.UNKNOWN:QS(c.code);return new G(h,c.message||"")}(o);n=new XS(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cd(t,r.document.name),s=os(r.document.updateTime),o=r.document.createTime?os(r.document.createTime):J.min(),l=new xn({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(i,s,o,l),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Xl(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cd(t,r.document),s=r.readTime?os(r.readTime):J.min(),o=pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Xl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cd(t,r.document),s=r.removedTargetIds||[];n=new Xl([],s,i,null)}else{if(!("filter"in e))return Z(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new SN(i,s),l=r.targetId;n=new YS(l,o)}}return n}function NN(t,e){return{documents:[t2(t,e.path)]}}function MN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=t2(t,i);const s=function(c){if(c.length!==0)return i2(gn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Vi(p.field),direction:ON(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Zf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function $N(t){let e=VN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1,65062);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=r2(f);return p instanceof gn&&DS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(I){return new Hu(Di(I.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(f){let p;return p=typeof f=="object"?f.value:f,Sc(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,w=f.values||[];return new Uu(w,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,w=f.values||[];return new Uu(w,p)}(n.endAt)),oN(e,i,o,s,l,"F",u,c)}function LN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function r2(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Di(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Di(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Di(n.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Di(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return Be.create(Di(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(r=>r2(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function ON(t){return PN[t]}function jN(t){return RN[t]}function FN(t){return kN[t]}function Vi(t){return{fieldPath:t.canonicalString()}}function Di(t){return mt.fromServerFormat(t.fieldPath)}function i2(t){return t instanceof Be?function(n){if(n.op==="=="){if(Y1(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NAN"}};if(Q1(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Y1(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NAN"}};if(Q1(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vi(n.field),op:jN(n.op),value:n.value}}}(t):t instanceof gn?function(n){const r=n.getFilters().map(i=>i2(i));return r.length===1?r[0]:{compositeFilter:{op:FN(n.op),filters:r}}}(t):Z(54877,{filter:t})}function s2(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=st.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.yt=e}}function BN(t){const e=$N({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(){this.Cn=new HN}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(kr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(kr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class HN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},o2=41943040;class Rt{static withCacheSize(e){return new Rt(e,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(o2,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Rs(0)}static cr(){return new Rs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="LruGarbageCollector",WN=1048576;function dw([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class qN{constructor(e){this.Ir=e,this.buffer=new qe(dw),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();dw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){W(hw,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zs(n)?W(hw,"Ignoring IndexedDB error during garbage collection: ",n):await xc(n)}await this.Vr(3e5)})}}class KN{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Tc.ce);const r=new qN(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(cw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cw):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),ki()<=oe.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function QN(t,e){return new KN(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(){this.changes=new Ti(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Uo(r.mutation,i,dr.empty(),Se.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=ri();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=xo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ri();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Nr();const o=Bo(),l=function(){return Bo()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Rc)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Uo(h.mutation,c,h.mutation.getFieldMask(),Se.now())):o.set(c.key,dr.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>l.set(c,new XN(h,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Bo();let i=new Le((o,l)=>o-l),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||dr.empty();h=l.applyToLocalView(c,h),r.set(u,h);const f=(i.get(l.batchId)||le()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,f=BS();h.forEach(p=>{if(!s.has(p)){const w=GS(n.get(p),r.get(p));w!==null&&f.set(p,w),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):OS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(ri());let l=va,u=s;return o.next(c=>j.forEach(c,(h,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,le())).next(h=>({batchId:l,changes:hN(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=xo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=xo();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,u=>{const c=function(f,p){return new Va(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,pt.newInvalidDocument(h)))});let l=xo();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Uo(h.mutation,c,dr.empty(),Se.now()),Cc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:os(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:BN(i.bundledQuery),readTime:os(i.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(){this.overlays=new Le(Y.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ri();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=ri(),s=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Le((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ri(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=ri(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return j.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new TN(n,r));let s=this.qr.get(n);s===void 0&&(s=le(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.Qr=new qe(Ge.$r),this.Ur=new qe(Ge.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ge(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Y(new Te([])),r=new Ge(n,e),i=new Ge(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Y(new Te([])),r=new Ge(n,e),i=new Ge(n,e+1);let s=le();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ge(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Y.comparator(e.key,n.key)||re(e.Yr,n.Yr)}static Kr(e,n){return re(e.Yr,n.Yr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new qe(Ge.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Ge(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?B3:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),i=new Ge(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(re);return n.forEach(i=>{const s=new Ge(i,0),o=new Ge(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new Ge(new Y(s),0);let l=new qe(re);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),j.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,i=>{const s=new Ge(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ge(n,0),i=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(e){this.ri=e,this.docs=function(){return new Le(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nr();const o=n.path,l=new Y(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||O3(L3(h),r)<=0||(i.has(h.key)||Cc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z(9500)}ii(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new i6(this)}getSize(e){return j.resolve(this.size)}}class i6 extends YN{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(e){this.persistence=e,this.si=new Ti(n=>Km(n),Qm),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.oi=0,this._i=new eg,this.targetCount=0,this.ai=Rs.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Rs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n){this.ui={},this.overlays={},this.ci=new Tc(0),this.li=!1,this.li=!0,this.hi=new t6,this.referenceDelegate=e(this),this.Pi=new s6(this),this.indexManager=new UN,this.remoteDocumentCache=function(i){return new r6(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new zN(n),this.Ii=new ZN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new e6,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new n6(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new o6(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return j.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class o6 extends F3{constructor(e){super(),this.currentSequenceNumber=e}}class tg{constructor(e){this.persistence=e,this.Ri=new eg,this.Vi=null}static mi(e){return new tg(e)}get fi(){if(this.Vi)return this.Vi;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,r=>{const i=Y.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Gu{constructor(e,n){this.persistence=e,this.pi=new Ti(r=>H3(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=QN(this,n)}static mi(e,n){return new Gu(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return j.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?j.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ql(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return j.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ng(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return aD()?8:z3(sD())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new a6;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(ki()<=oe.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(ki()<=oe.DEBUG&&W("QueryEngine","Query:",bi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ki()<=oe.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):j.resolve())}ys(e,n){if(ew(n))return j.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yf(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Yf(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return ew(n)||i.isEqual(J.min())?j.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?j.resolve(null):(ki()<=oe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bi(n)),this.vs(e,o,n,$3(i,va)).next(l=>l))})}Ds(e,n){let r=new qe(FS(e));return n.forEach((i,s)=>{Cc(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return ki()<=oe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",bi(n)),this.ps.getDocumentsMatchingQuery(e,n,kr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="LocalStore",u6=3e8;class c6{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Le(re),this.xs=new Ti(s=>Km(s),Qm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JN(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function h6(t,e,n,r){return new c6(t,e,n,r)}async function l2(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=le();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function u2(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function d6(t,e){const n=ae(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;l.push(n.Pi.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Pi.addMatchingKeys(s,h.addedDocuments,f)));let w=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(st.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),i=i.insert(f,w),function(P,V,x){return P.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=u6?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,w,h)&&l.push(n.Pi.updateTargetData(s,w))});let u=Nr(),c=le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(f6(s,o,e.documentUpdates).next(h=>{u=h.ks,c=h.qs})),!r.isEqual(J.min())){const h=n.Pi.getLastRemoteSnapshotVersion(s).next(f=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(h)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function f6(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(rg,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function p6(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function np(t,e,n){const r=ae(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zs(o))throw o;W(rg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function fw(t,e,n){const r=ae(t);let i=J.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=ae(u),p=f.xs.get(h);return p!==void 0?j.resolve(f.Ms.get(p)):f.Pi.getTargetData(c,h)}(r,o,Pn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:le())).next(l=>(m6(r,lN(e),l),{documents:l,Qs:s})))}function m6(t,e,n){let r=t.Os.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class pw{constructor(){this.activeTargetIds=pN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class g6{constructor(){this.Mo=new pw,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new pw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="ConnectivityMonitor";class gw{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){W(mw,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){W(mw,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al=null;function rp(){return Al===null?Al=function(){return 268435456+Math.round(2147483648*Math.random())}():Al++,"0x"+Al.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="RestConnection",v6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class w6{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===zu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=rp(),l=this.zo(e,n.toUriEncodedString());W(hd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),h=Um(c);return this.Jo(e,l,u,r,h).then(f=>(W(hd,`Received RPC '${e}' ${o}: `,f),f),f=>{throw As(hd,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=v6[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _6{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class E6 extends w6{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=rp();return new Promise((l,u)=>{const c=new dS;c.setWithCredentials(!0),c.listenOnce(fS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Kl.NO_ERROR:const f=c.getResponseJson();W(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case Kl.TIMEOUT:W(ht,`RPC '${e}' ${o} timed out`),u(new G(z.DEADLINE_EXCEEDED,"Request time out"));break;case Kl.HTTP_ERROR:const p=c.getStatus();if(W(ht,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let w=c.getResponseJson();Array.isArray(w)&&(w=w[0]);const I=w==null?void 0:w.error;if(I&&I.status&&I.message){const P=function(x){const v=x.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(v)>=0?v:z.UNKNOWN}(I.status);u(new G(P,I.message))}else u(new G(z.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new G(z.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W(ht,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);W(ht,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",h,r,15)})}T_(e,n,r){const i=rp(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gS(),l=mS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");W(ht,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);this.I_(f);let p=!1,w=!1;const I=new _6({Yo:V=>{w?W(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(p||(W(ht,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),W(ht,`RPC '${e}' stream ${i} sending:`,V),f.send(V))},Zo:()=>f.close()}),P=(V,x,v)=>{V.listen(x,T=>{try{v(T)}catch(b){setTimeout(()=>{throw b},0)}})};return P(f,Eo.EventType.OPEN,()=>{w||(W(ht,`RPC '${e}' stream ${i} transport opened.`),I.o_())}),P(f,Eo.EventType.CLOSE,()=>{w||(w=!0,W(ht,`RPC '${e}' stream ${i} transport closed`),I.a_(),this.E_(f))}),P(f,Eo.EventType.ERROR,V=>{w||(w=!0,As(ht,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),I.a_(new G(z.UNAVAILABLE,"The operation could not be completed")))}),P(f,Eo.EventType.MESSAGE,V=>{var x;if(!w){const v=V.data[0];Re(!!v,16349);const T=v,b=(T==null?void 0:T.error)||((x=T[0])==null?void 0:x.error);if(b){W(ht,`RPC '${e}' stream ${i} received error:`,b);const M=b.status;let $=function(S){const C=Oe[S];if(C!==void 0)return QS(C)}(M),E=b.message;$===void 0&&($=z.INTERNAL,E="Unknown error status: "+M+" with message "+b.message),w=!0,I.a_(new G($,E)),f.close()}else W(ht,`RPC '${e}' stream ${i} received:`,v),I.u_(v)}}),P(l,pS.STAT_EVENT,V=>{V.stat===Bf.PROXY?W(ht,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Bf.NOPROXY&&W(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.__()},0),I}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function dd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t){return new bN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="PersistentStream";class x6{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new c2(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new G(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(yw,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(W(yw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class T6 extends x6{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=DN(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?os(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=uw(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Kf(u)?{documents:NN(s,u)}:{query:MN(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=JS(s,o.resumeToken);const c=Zf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=ep(s,o.snapshotVersion.toTimestamp());const c=Zf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=LN(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=uw(this.serializer),n.removeTarget=e,this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S6{}class A6 extends S6{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new G(z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,tp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(z.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,tp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(z.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class I6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Yn(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="RemoteStore";class C6{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ma(this)&&(W(ks,"Restarting streams for network reachability change."),await async function(u){const c=ae(u);c.Ea.add(4),await Na(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Vc(c)}(this))})}),this.Ra=new I6(r,i)}}async function Vc(t){if(Ma(t))for(const e of t.da)await e(!0)}async function Na(t){for(const e of t.da)await e(!1)}function h2(t,e){const n=ae(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ag(n)?og(n):Us(n).O_()&&sg(n,e))}function ig(t,e){const n=ae(t),r=Us(n);n.Ia.delete(e),r.O_()&&d2(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ma(n)&&n.Ra.set("Unknown"))}function sg(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Us(t).Y_(e)}function d2(t,e){t.Va.Ue(e),Us(t).Z_(e)}function og(t){t.Va=new CN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Us(t).start(),t.Ra.ua()}function ag(t){return Ma(t)&&!Us(t).x_()&&t.Ia.size>0}function Ma(t){return ae(t).Ea.size===0}function f2(t){t.Va=void 0}async function P6(t){t.Ra.set("Online")}async function R6(t){t.Ia.forEach((e,n)=>{sg(t,e)})}async function k6(t,e){f2(t),ag(t)?(t.Ra.ha(e),og(t)):t.Ra.set("Unknown")}async function b6(t,e,n){if(t.Ra.set("Online"),e instanceof XS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){W(ks,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vw(t,r)}else if(e instanceof Xl?t.Va.Ze(e):e instanceof YS?t.Va.st(e):t.Va.tt(e),!n.isEqual(J.min()))try{const r=await u2(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.Ia.get(c);h&&s.Ia.set(c,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const h=s.Ia.get(u);if(!h)return;s.Ia.set(u,h.withResumeToken(st.EMPTY_BYTE_STRING,h.snapshotVersion)),d2(s,u);const f=new fr(h.target,u,c,h.sequenceNumber);sg(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(ks,"Failed to raise snapshot:",r),await vw(t,r)}}async function vw(t,e,n){if(!zs(e))throw e;t.Ea.add(1),await Na(t),t.Ra.set("Offline"),n||(n=()=>u2(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(ks,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Vc(t)})}async function ww(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),W(ks,"RemoteStore received new credentials");const r=Ma(n);n.Ea.add(3),await Na(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Vc(n)}async function V6(t,e){const n=ae(t);e?(n.Ea.delete(2),await Vc(n)):e||(n.Ea.add(2),await Na(n),n.Ra.set("Unknown"))}function Us(t){return t.ma||(t.ma=function(n,r,i){const s=ae(n);return s.sa(),new T6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:P6.bind(null,t),t_:R6.bind(null,t),r_:k6.bind(null,t),H_:b6.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),ag(t)?og(t):t.Ra.set("Unknown")):(await t.ma.stop(),f2(t))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new lg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function p2(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),zs(t))return new G(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{static emptySet(e){return new as(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=xo(),this.sortedSet=new Le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof as)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new as;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(){this.ga=new Le(Y.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Z(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class bs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new bs(e,n,as.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D6{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class N6{constructor(){this.queries=Ew(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ae(n),s=i.queries;i.queries=Ew(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new G(z.ABORTED,"Firestore shutting down"))}}function Ew(){return new Ti(t=>jS(t),Ic)}async function M6(t,e){const n=ae(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new D6,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=p2(o,`Initialization of query '${bi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&ug(n)}async function $6(t,e){const n=ae(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function L6(t,e){const n=ae(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&ug(n)}function O6(t,e,n){const r=ae(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function ug(t){t.Ca.forEach(e=>{e.next()})}var ip,xw;(xw=ip||(ip={})).Ma="default",xw.Cache="cache";class j6{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ip.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e){this.key=e}}class g2{constructor(e){this.key=e}}class F6{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=le(),this.mutatedKeys=le(),this.eu=FS(e),this.tu=new as(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new _w,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),w=Cc(this.query,f)?f:null,I=!!p&&this.mutatedKeys.has(p.key),P=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let V=!1;p&&w?p.data.isEqual(w.data)?I!==P&&(r.track({type:3,doc:w}),V=!0):this.su(p,w)||(r.track({type:2,doc:w}),V=!0,(u&&this.eu(w,u)>0||c&&this.eu(w,c)<0)&&(l=!0)):!p&&w?(r.track({type:0,doc:w}),V=!0):p&&!w&&(r.track({type:1,doc:p}),V=!0,(u||c)&&(l=!0)),V&&(w?(o=o.add(w),s=P?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,f)=>function(w,I){const P=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Rt:V})}};return P(w)-P(I)}(h.type,f.type)||this.eu(h.doc,f.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new bs(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new _w,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=le(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new g2(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new m2(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return bs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const cg="SyncEngine";class z6{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class B6{constructor(e){this.key=e,this.hu=!1}}class U6{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ti(l=>jS(l),Ic),this.Iu=new Map,this.Eu=new Set,this.du=new Le(Y.comparator),this.Au=new Map,this.Ru=new eg,this.Vu={},this.mu=new Map,this.fu=Rs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function H6(t,e,n=!0){const r=E2(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await y2(r,e,n,!0),i}async function W6(t,e){const n=E2(t);await y2(n,e,!0,!1)}async function y2(t,e,n,r){const i=await p6(t.localStore,Pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await q6(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&h2(t.remoteStore,i),l}async function q6(t,e,n,r,i){t.pu=(f,p,w)=>async function(P,V,x,v){let T=V.view.ru(x);T.Cs&&(T=await fw(P.localStore,V.query,!1).then(({documents:E})=>V.view.ru(E,T)));const b=v&&v.targetChanges.get(V.targetId),M=v&&v.targetMismatches.get(V.targetId)!=null,$=V.view.applyChanges(T,P.isPrimaryClient,b,M);return Sw(P,V.targetId,$.au),$.snapshot}(t,f,p,w);const s=await fw(t.localStore,e,!0),o=new F6(e,s.Qs),l=o.ru(s.documents),u=Da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Sw(t,n,c.au);const h=new z6(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function G6(t,e,n){const r=ae(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Ic(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await np(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ig(r.remoteStore,i.targetId),sp(r,i.targetId)}).catch(xc)):(sp(r,i.targetId),await np(r.localStore,i.targetId,!0))}async function K6(t,e){const n=ae(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ig(n.remoteStore,r.targetId))}async function v2(t,e){const n=ae(t);try{const r=await d6(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Re(o.hu,14607):i.removedDocuments.size>0&&(Re(o.hu,42227),o.hu=!1))}),await _2(n,r,e)}catch(r){await xc(r)}}function Tw(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ae(o);u.onlineState=l;let c=!1;u.queries.forEach((h,f)=>{for(const p of f.Sa)p.va(l)&&(c=!0)}),c&&ug(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Q6(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Le(Y.comparator);o=o.insert(s,pt.newNoDocument(s,J.min()));const l=le().add(s),u=new kc(J.min(),new Map,new Le(re),o,l);await v2(r,u),r.du=r.du.remove(s),r.Au.delete(e),hg(r)}else await np(r.localStore,e,!1).then(()=>sp(r,e,n)).catch(xc)}function sp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||w2(t,r)})}function w2(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ig(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),hg(t))}function Sw(t,e,n){for(const r of n)r instanceof m2?(t.Ru.addReference(r.key,e),Y6(t,r)):r instanceof g2?(W(cg,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||w2(t,r.key)):Z(19791,{wu:r})}function Y6(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(W(cg,"New document in limbo: "+n),t.Eu.add(r),hg(t))}function hg(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Y(Te.fromString(e)),r=t.fu.next();t.Au.set(r,new B6(n)),t.du=t.du.insert(n,r),h2(t.remoteStore,new fr(Pn(LS(n.path)),r,"TargetPurposeLimboResolution",Tc.ce))}}async function _2(t,e,n){const r=ae(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=ng.As(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const h=ae(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,p=>j.forEach(p.Es,w=>h.persistence.referenceDelegate.addReference(f,p.targetId,w)).next(()=>j.forEach(p.ds,w=>h.persistence.referenceDelegate.removeReference(f,p.targetId,w)))))}catch(f){if(!zs(f))throw f;W(rg,"Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const w=h.Ms.get(p),I=w.snapshotVersion,P=w.withLastLimboFreeSnapshotVersion(I);h.Ms=h.Ms.insert(p,P)}}}(r.localStore,s))}async function X6(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){W(cg,"User change. New user:",e.toKey());const r=await l2(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new G(z.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _2(n,r.Ls)}}function J6(t,e){const n=ae(t),r=n.Au.get(e);if(r&&r.hu)return le().add(r.key);{let i=le();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function E2(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=v2.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=J6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Q6.bind(null,e),e.Pu.H_=L6.bind(null,e.eventManager),e.Pu.yu=O6.bind(null,e.eventManager),e}class Ku{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return h6(this.persistence,new l6,e.initialUser,this.serializer)}Cu(e){return new a2(tg.mi,this.serializer)}Du(e){return new g6}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ku.provider={build:()=>new Ku};class Z6 extends Ku{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Re(this.persistence.referenceDelegate instanceof Gu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new GN(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new a2(r=>Gu.mi(r,n),this.serializer)}}class op{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=X6.bind(null,this.syncEngine),await V6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new N6}()}createDatastore(e){const n=bc(e.databaseInfo.databaseId),r=function(s){return new E6(s)}(e.databaseInfo);return function(s,o,l,u){return new A6(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new C6(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Tw(this.syncEngine,n,0),function(){return gw.v()?new gw:new y6}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,h){const f=new U6(i,s,o,l,u,c);return h&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ae(i);W(ks,"RemoteStore shutting down."),s.Ea.add(5),await Na(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}op.provider={build:()=>new op};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="FirestoreClient";class tM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=wS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W(Mr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(Mr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=p2(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fd(t,e){t.asyncQueue.verifyOperationInProgress(),W(Mr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await l2(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Aw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nM(t);W(Mr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ww(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ww(e.remoteStore,i)),t._onlineComponents=e}async function nM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Mr,"Using user provided OfflineComponentProvider");try{await fd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===z.FAILED_PRECONDITION||i.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;As("Error using user provided cache. Falling back to memory cache: "+n),await fd(t,new Ku)}}else W(Mr,"Using default OfflineComponentProvider"),await fd(t,new Z6(void 0));return t._offlineComponents}async function rM(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Mr,"Using user provided OnlineComponentProvider"),await Aw(t,t._uninitializedComponentsProvider._online)):(W(Mr,"Using default OnlineComponentProvider"),await Aw(t,new op))),t._onlineComponents}async function iM(t){const e=await rM(t),n=e.eventManager;return n.onListen=H6.bind(null,e.syncEngine),n.onUnlisten=G6.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=W6.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=K6.bind(null,e.syncEngine),n}function sM(t,e,n={}){const r=new ui;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new eM({next:p=>{h.Nu(),o.enqueueAndForget(()=>$6(s,f)),p.fromCache&&u.source==="server"?c.reject(new G(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new j6(l,h,{includeMetadataChanges:!0,qa:!0});return M6(s,f)}(await iM(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2="firestore.googleapis.com",Cw=!0;class Pw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=T2,this.ssl=Cw}else this.host=e.host,this.ssl=e.ssl??Cw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=o2;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<WN)throw new G(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}M3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=x2(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dg{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new A3;switch(r.type){case"firstParty":return new R3(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Iw.get(n);r&&(W("ComponentProvider","Removing Datastore"),Iw.delete(n),r.terminate())}(this),Promise.resolve()}}function oM(t,e,n,r={}){var c;t=Hf(t,dg);const i=Um(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(eD(`https://${l}`),iD("Firestore",!0)),s.host!==T2&&s.host!==l&&As("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!$u(u,o)&&(t._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=dt.MOCK_USER;else{h=tD(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new G(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new dt(p)}t._authCredentials=new I3(new vS(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hs(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}toJSON(){return{type:Tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ba(n,Tt._jsonSchema))return new Tt(e,r||null,new Y(Te.fromString(n.referencePath)))}}Tt._jsonSchemaVersion="firestore/documentReference/1.0",Tt._jsonSchema={type:Ue("string",Tt._jsonSchemaVersion),referencePath:Ue("string")};class ls extends Hs{constructor(e,n,r){super(e,n,LS(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new Y(e))}withConverter(e){return new ls(this.firestore,e,this._path)}}function fg(t,e,...n){if(t=Lu(t),t instanceof dg){const r=Te.fromString(e,...n);return F1(r),new ls(t,null,r)}{if(!(t instanceof Tt||t instanceof ls))throw new G(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return F1(r),new ls(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="AsyncQueue";class kw{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new c2(this,"async_queue_retry"),this._c=()=>{const r=dd();r&&W(Rw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=dd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=dd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ui;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!zs(e))throw e;W(Rw,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Yn("INTERNAL UNHANDLED ERROR: ",bw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=lg.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Z(47125,{Pc:bw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function bw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class S2 extends dg{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new kw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kw(e),this._firestoreClient=void 0,await e}}}function aM(t,e){const n=typeof t=="object"?t:p3(),r=typeof t=="string"?t:zu,i=u3(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=J4("firestore");s&&oM(i,...s)}return i}function lM(t){if(t._terminated)throw new G(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||uM(t),t._firestoreClient}function uM(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,h){return new G3(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,x2(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new tM(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xt(st.fromBase64String(e))}catch(n){throw new G(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xt(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ba(e,Xt._jsonSchema))return Xt.fromBase64String(e.bytes)}}Xt._jsonSchemaVersion="firestore/bytes/1.0",Xt._jsonSchema={type:Ue("string",Xt._jsonSchemaVersion),bytes:Ue("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rn._jsonSchemaVersion}}static fromJSON(e){if(ba(e,Rn._jsonSchema))return new Rn(e.latitude,e.longitude)}}Rn._jsonSchemaVersion="firestore/geoPoint/1.0",Rn._jsonSchema={type:Ue("string",Rn._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:kn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ba(e,kn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new kn(e.vectorValues);throw new G(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kn._jsonSchemaVersion="firestore/vectorValue/1.0",kn._jsonSchema={type:Ue("string",kn._jsonSchemaVersion),vectorValues:Ue("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=/^__.*__$/;function C2(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{Ac:t})}}class pg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new pg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ap(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(C2(this.Ac)&&cM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class hM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bc(e)}Cc(e,n,r,i=!1){return new pg({Ac:e,methodName:n,Dc:r,path:mt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dM(t){const e=t._freezeSettings(),n=bc(t._databaseId);return new hM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fM(t,e,n,r=!1){return mg(n,t.Cc(r?4:3,e))}function mg(t,e){if(P2(t=Lu(t)))return mM("Unsupported field value:",e,t),pM(t,e);if(t instanceof I2)return function(r,i){if(!C2(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=mg(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Lu(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Se.fromDate(r);return{timestampValue:ep(i.serializer,s)}}if(r instanceof Se){const s=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ep(i.serializer,s)}}if(r instanceof Rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xt)return{bytesValue:JS(i.serializer,r._byteString)};if(r instanceof Tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ZS(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof kn)return function(o,l){return{mapValue:{fields:{[PS]:{stringValue:kS},[Bu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Ym(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Ec(r)}`)}(t,e)}function pM(t,e){const n={};return xS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bs(t,(r,i)=>{const s=mg(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function P2(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof Rn||t instanceof Xt||t instanceof Tt||t instanceof I2||t instanceof kn)}function mM(t,e,n){if(!P2(n)||!_S(n)){const r=Ec(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}const gM=new RegExp("[~\\*/\\[\\]]");function yM(t,e,n){if(e.search(gM)>=0)throw ap(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new A2(...e.split("."))._internalPath}catch{throw ap(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ap(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(z.INVALID_ARGUMENT,l+t+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vM extends R2{data(){return super.data()}}function gg(t,e){return typeof e=="string"?yM(t,e):e instanceof A2?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yg{}class _M extends yg{}function EM(t,e,...n){let r=[];e instanceof yg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof vg).length,l=s.filter(u=>u instanceof Dc).length;if(o>1||o>0&&l>0)throw new G(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Dc extends _M{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Dc(e,n,r)}_apply(e){const n=this._parse(e);return k2(e._query,n),new Hs(e.firestore,e.converter,Qf(e._query,n))}_parse(e){const n=dM(e.firestore);return function(s,o,l,u,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new G(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Dw(f,h);const I=[];for(const P of f)I.push(Vw(u,s,P));p={arrayValue:{values:I}}}else p=Vw(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Dw(f,h),p=fM(l,o,f,h==="in"||h==="not-in");return Be.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xM(t,e,n){const r=e,i=gg("where",t);return Dc._create(i,r,n)}class vg extends yg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)k2(o,u),o=Qf(o,u)}(e._query,n),new Hs(e.firestore,e.converter,Qf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Vw(t,e,n){if(typeof(n=Lu(n))=="string"){if(n==="")throw new G(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!OS(e)&&n.indexOf("/")!==-1)throw new G(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!Y.isDocumentKey(r))throw new G(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return K1(t,new Y(r))}if(n instanceof Tt)return K1(t,n._key);throw new G(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ec(n)}.`)}function Dw(t,e){if(!Array.isArray(t)||t.length===0)throw new G(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function k2(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class TM{convertValue(e,n="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Bs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Bu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Me(o.doubleValue));return new kn(n)}convertGeoPoint(e){return new Rn(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ac(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wa(e));default:return null}}convertTimestamp(e){const n=br(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);Re(s2(r),9688,{name:e});const i=new _a(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||Yn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}class Il{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class us extends R2{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=us._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}us._jsonSchemaVersion="firestore/documentSnapshot/1.0",us._jsonSchema={type:Ue("string",us._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class Jl extends us{data(e={}){return super.data(e)}}class cs{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Il(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Jl(this._firestore,this._userDataWriter,r.key,r,new Il(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Jl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Il(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Jl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Il(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:SM(l.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=cs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wS.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function SM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}cs._jsonSchemaVersion="firestore/querySnapshot/1.0",cs._jsonSchema={type:Ue("string",cs._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class AM extends TM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function wg(t){t=Hf(t,Hs);const e=Hf(t.firestore,S2),n=lM(e),r=new AM(e);return wM(t._query),sM(n,t._query).then(i=>new cs(e,r,t,i))}(function(e,n=!0){(function(i){Fs=i})(f3),ju(new ga("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new S2(new C3(r.getProvider("auth-internal")),new k3(o,r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _a(c.options.projectId,h)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ss($1,L1,e),ss($1,L1,"esm2020")})();var IM="firebase",CM="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ss(IM,CM,"app");const Yr={RESTAURANT_ID:"SQ07dNk53TOOiyENjJrMtTAv4ep1",FIREBASE_CONFIG:{apiKey:"AIzaSyCcJgANsxjpwpWFaRxG3rQxfpdlq6kbVJM",authDomain:"qrmenu-7d16d.firebaseapp.com",projectId:"qrmenu-7d16d",storageBucket:"qrmenu-7d16d.firebasestorage.app",messagingSenderId:"976316644154",appId:"1:976316644154:web:d78bc2e5dd9052ebccee03"},FALLBACK_DATA:{RESTAURANT_NAME:"Testy sizzler",RESTAURANT_TAGLINE:"Mexican restaurant",RESTAURANT_PHONE:"+91 63765 35219",RESTAURANT_ADDRESS:"Gujarat High Court, Vishwas City 1, Sola, Ahmedabad"}},pd={apiKey:Yr.FIREBASE_CONFIG.apiKey,authDomain:Yr.FIREBASE_CONFIG.authDomain,projectId:Yr.FIREBASE_CONFIG.projectId,storageBucket:Yr.FIREBASE_CONFIG.storageBucket,messagingSenderId:Yr.FIREBASE_CONFIG.messagingSenderId,appId:Yr.FIREBASE_CONFIG.appId};let Nw=null,_i=null;try{pd.apiKey&&pd.projectId?(Nw=lS(pd),_i=aM(Nw),console.log("Firebase initialized successfully")):(console.warn("Firebase configuration missing. Using fallback data only."),console.log("To enable Firebase, add your configuration to src/config/app.ts"))}catch(t){console.error("Error initializing Firebase:",t),console.log("Falling back to static data")}const PM=async t=>{try{if(!_i)return[];const e=fg(_i,"users",t,"categories"),n=await wg(e),r=[];return n.forEach(s=>{r.push({id:s.id,...s.data()})}),r.filter(s=>s.visible===!0).sort((s,o)=>(s.order||0)-(o.order||0))}catch(e){return console.error("Error fetching categories:",e),[]}},RM=async t=>{try{if(!_i)return[];const e=fg(_i,"users",t,"menuItems"),n=await wg(e),r=[];return n.forEach(s=>{r.push({id:s.id,...s.data()})}),r.filter(s=>s.available===!0)}catch(e){return console.error("Error fetching menu items:",e),[]}},kM=async t=>{try{if(!_i)return null;const e=fg(_i,"users"),n=EM(e,xM("__name__","==",t)),r=await wg(n);if(!r.empty){const i=r.docs[0],s=i.data();return{id:i.id,name:s.restaurantName||"Testy sizzler",tagline:s.tagline||"Mexican restaurant",tagline2:s.tagline2||"Mexican restaurant",address:s.address||"Gujarat High Court, Vishwas City 1, Sola, Ahmedabad",phone:s.phone||"+91 63765 35219",logo:s.logo,heroImage:s.heroImage}}return null}catch(e){return console.error("Error fetching restaurant info:",e),null}},Mw=t=>{if(!t||t.trim()===""||t==="undefined"||t==="null")return!1;try{return new URL(t),!0}catch{return!1}},bM=(t,e)=>t.map(r=>{const i=e.filter(s=>s.categoryId===r.id);return{id:r.id,name:r.name,icon:VM(r.name),image:Mw(r.image)?r.image:void 0,description:r.description,items:i.map(s=>({id:s.id,name:s.name,price:`₹${s.price}`,image:Mw(s.image)?s.image:void 0,description:s.description,isVeg:!0,isPopular:s.featured,rating:4.5,prepTime:"15 mins"}))}}),VM=t=>DM(t||""),DM=t=>{if(!t)return $w();const e=t.toLowerCase().trim(),n={appetizers:"🥗",appetizer:"🥗",starters:"🥗",starter:"🥗",snacks:"🍿","finger foods":"🥨","small plates":"🍽️",soups:"🍲",soup:"🍲",broths:"🍲",bisque:"🍲",salads:"🥙",salad:"🥙",greens:"🥬",fresh:"🥗","main course":"🍛",mains:"🍛",entrees:"🍛",entree:"🍛","main dishes":"🍛",curry:"🍛",curries:"🍛",rice:"🍚",biryani:"🍚",biryanis:"🍚",pulao:"🍚","fried rice":"🍚",breads:"🥖",bread:"🥖",naan:"🥖",roti:"🥖",chapati:"🥖",paratha:"🥖",kulcha:"🥖",chinese:"🥢","indo chinese":"🥢","indo-chinese":"🥢","chow mein":"🍜",hakka:"🥢",desserts:"🍰",dessert:"🍰",sweets:"🧁",sweet:"🧁","ice cream":"🍨",cakes:"🎂",pastries:"🥧",beverages:"🥤",beverage:"🥤",drinks:"🥤",drink:"🥤",juices:"🧃",juice:"🧃",tea:"🍵",coffee:"☕",lassi:"🥛",shakes:"🥤",smoothies:"🥤",dal:"🍛",daal:"🍛",sabji:"🥘",sabzi:"🥘",paneer:"🧀",chicken:"🍗",mutton:"🍖",lamb:"🍖",fish:"🐟",seafood:"🦐",tandoor:"🔥",tikka:"🍢",kebab:"🍢",kebabs:"🍢",gujarati:"🍛",kathiyawadi:"🍛",kathiawadi:"🍛",thali:"🍽️",farsan:"🥨",dhokla:"🟡",khandvi:"🟨",undhiyu:"🥘",punjabi:"🍛",makki:"🌽",sarson:"🥬",chole:"🟤",rajma:"🔴",kadhi:"🟡",mexican:"🌮",tacos:"🌮",burritos:"🌯",quesadillas:"🧀",nachos:"🧀",salsa:"🍅",guacamole:"🥑",enchiladas:"🌮",fajitas:"🌶️",churros:"🍩",accompaniments:"🥗",sides:"🥗","side dishes":"🥗",pickles:"🥒",papad:"🥖",raita:"🥛",chutney:"🟢",breakfast:"🍳",morning:"🌅",poha:"🍚",upma:"🥣",dosa:"🥞",idli:"⚪","street food":"🌮",chaat:"🥗","pani puri":"🟡",bhel:"🥗","vada pav":"🍔",samosa:"🔺",kachori:"🟤",pizza:"🍕",pizzas:"🍕",burger:"🍔",burgers:"🍔",sandwich:"🥪",sandwiches:"🥪",wraps:"🌯",rolls:"🌯",pasta:"🍝",pastas:"🍝",spaghetti:"🍝",noodles:"🍜",grilled:"🔥",bbq:"🔥",barbecue:"🔥",roasted:"🔥",healthy:"🥗",diet:"🥗","low calorie":"🥗",organic:"🌱",vegan:"🌱",vegetarian:"🥬"};if(n[e])return n[e];for(const[r,i]of Object.entries(n))if(e.includes(r))return i;return $w()},$w=()=>{const t=["🍽️","🍛","🍚","🍜","🍲","🥘","🍗","🍖","🥩","🍤","🍣","🍱","🍙","🍘","🍥","🥟","🥠","🥡","🌮","🌯","🥙","🥪","🍕","🍔","🍟","🌭","🥓","🍳","🧀","🥨","🥖","🥐","🍞","🥯","🧈","🥞","🧇","🍰","🎂","🧁","🥧","🍮","🍭","🍬","🍫","🍿","🍩","🍪","🌰","🥜","🍯","🥛","☕","🍵","🧃","🥤","🍷","🍺","🍻","🥂"];return t[Math.floor(Math.random()*t.length)]},$n={name:"Testy sizzler",tagline:"Mexican restaurant",tagline2:"Mexican restaurant",logo:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200",heroImage:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",phone:"+91 63765 35219",address:"Gujarat High Court, Vishwas City 1, Sola, Ahmedabad"};function NM(){const[t,e]=U.useState(!0),[n,r]=U.useState(""),[i,s]=U.useState("all"),[o,l]=U.useState([]),[u,c]=U.useState($n),[h,f]=U.useState(!1),p=Yr.RESTAURANT_ID;U.useEffect(()=>{(async()=>{try{e(!0);const[V,x,v]=await Promise.all([PM(p),RM(p),kM(p)]);if(console.log("Firebase restaurant data:",v),V.length>0&&x.length>0){const T=bM(V,x);l(T),f(!0)}c({name:$n.name,tagline:$n.tagline,tagline2:$n.tagline2,phone:(v==null?void 0:v.phone)||$n.phone,address:(v==null?void 0:v.address)||$n.address,logo:(v==null?void 0:v.logo)||$n.logo,heroImage:(v==null?void 0:v.heroImage)||$n.heroImage})}catch(V){console.error("Error loading Firebase data:",V),c($n)}finally{setTimeout(()=>{e(!1)},1500)}})()},[p]);const w=U.useMemo(()=>i==="all"?o:i==="veg"?o.map(P=>({...P,items:P.items.filter(V=>V.isVeg)})).filter(P=>P.items.length>0):o.filter(P=>P.id===i),[o,i]);U.useEffect(()=>{if(i!=="all")return;const P=()=>{const V=document.querySelectorAll(".category-section"),x=window.scrollY+200;V.forEach(v=>{const T=v,b=T.offsetTop,M=b+T.offsetHeight;x>=b&&x<M&&r(T.id)})};return window.addEventListener("scroll",P),()=>window.removeEventListener("scroll",P)},[i]);const I=P=>{s(P),r("")};return t?A.jsxs(j0,{theme:g,children:[A.jsx(n1,{}),A.jsx(z4,{restaurantName:u.name})]}):A.jsxs(j0,{theme:g,children:[A.jsx(n1,{}),A.jsxs("div",{className:"app",children:[A.jsx(xV,{restaurantInfo:u,categories:o,activeCategory:n}),A.jsxs("main",{children:[A.jsx(LV,{restaurantInfo:u}),A.jsxs(ie.div,{className:"menu-container",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.2},children:[A.jsx(Vu,{mode:"wait",children:w.map((P,V)=>P.items.length>0&&A.jsx(s4,{category:P,animationDelay:V*.1},`${P.id}-${i}`))}),w.length===0&&A.jsxs(ie.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},style:{textAlign:"center",padding:"4rem 1rem",color:g.colors.textMuted},children:[A.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🔍"}),A.jsx("h3",{children:"No items found"}),A.jsx("p",{children:"Try adjusting your filter to see more items."})]})]})]}),A.jsx(V4,{restaurantInfo:u}),A.jsx(p4,{categories:o,activeFilter:i,onFilterChange:I})]})]})}QE(document.getElementById("root")).render(A.jsx(U.StrictMode,{children:A.jsx(NM,{})}));
