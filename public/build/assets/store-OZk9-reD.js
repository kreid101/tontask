import{r as b,g as R,R as A}from"./app-Cvgke5Jc.js";var P={VITE_APP_NAME:"Laravel",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const y=e=>{let t;const n=new Set,r=(s,d)=>{const c=typeof s=="function"?s(t):s;if(!Object.is(c,t)){const i=t;t=d??(typeof c!="object"||c===null)?c:Object.assign({},t,c),n.forEach(a=>a(t,i))}},o=()=>t,v={setState:r,getState:o,getInitialState:()=>S,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>{(P?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},S=t=e(r,o,v);return v},V=e=>e?y(e):y;var _={exports:{}},w={},D={exports:{}},O={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=b;function j(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var I=typeof Object.is=="function"?Object.is:j,$=f.useState,C=f.useEffect,T=f.useLayoutEffect,L=f.useDebugValue;function W(e,t){var n=t(),r=$({inst:{value:n,getSnapshot:t}}),o=r[0].inst,u=r[1];return T(function(){o.value=n,o.getSnapshot=t,h(o)&&u({inst:o})},[e,n,t]),C(function(){return h(o)&&u({inst:o}),e(function(){h(o)&&u({inst:o})})},[e]),L(n),n}function h(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!I(e,n)}catch{return!0}}function q(e,t){return t()}var z=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?q:W;O.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:z;D.exports=O;var B=D.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=b,F=B;function U(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var k=typeof Object.is=="function"?Object.is:U,N=F.useSyncExternalStore,G=E.useRef,H=E.useEffect,J=E.useMemo,K=E.useDebugValue;w.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var u=G(null);if(u.current===null){var l={hasValue:!1,value:null};u.current=l}else l=u.current;u=J(function(){function v(i){if(!S){if(S=!0,s=i,i=r(i),o!==void 0&&l.hasValue){var a=l.value;if(o(a,i))return d=a}return d=i}if(a=d,k(s,i))return a;var m=r(i);return o!==void 0&&o(a,m)?a:(s=i,d=m)}var S=!1,s,d,c=n===void 0?null:n;return[function(){return v(t())},c===null?void 0:function(){return v(c())}]},[t,n,r,o]);var p=N(e,u[0],u[1]);return H(function(){l.hasValue=!0,l.value=p},[p]),K(p),p};_.exports=w;var Q=_.exports;const X=R(Q);var M={VITE_APP_NAME:"Laravel",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:Y}=A,{useSyncExternalStoreWithSelector:Z}=X;let x=!1;const ee=e=>e;function te(e,t=ee,n){(M?"production":void 0)!=="production"&&n&&!x&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),x=!0);const r=Z(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Y(r),r}const g=e=>{(M?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?V(e):e,n=(r,o)=>te(t,r,o);return Object.assign(n,t),n},ne=e=>e?g(e):g,re=ne(e=>({modalOpen:!1,chooseModal:!1,OpenModal:()=>e(()=>({modalOpen:!0})),CloseModal:()=>e(()=>({modalOpen:!1})),OpenChooseModal:()=>e(()=>({chooseModal:!0})),CloseChooseModal:()=>e(()=>({chooseModal:!1}))}));export{re as u};