import{q as n,a as o,j as t,y as a}from"./app-Dzr-hfI8.js";import{T as m,k as e,E as u,l as d,m as j,W as v,P as f}from"./Icons-7RV9aam7.js";import{u as T}from"./useTonConnect-Dxmdc7WI.js";function W(){const{url:s,component:h}=n(),i=o(),c=T(),r=()=>{a.get("/tasks/"+i)},l=()=>{a.get("/exec/"+i)},x=()=>{a.get("/mywallet")},k=()=>{a.get("/taken/"+c.sender.address)};return t.jsxs(m,{className:"left-0 bottom-0 fixed",children:[t.jsx(e,{onClick:r,icon:u(),active:s.startsWith("/tasks")}),t.jsx(e,{onClick:l,icon:d(),active:s.startsWith("/exec")}),t.jsx(e,{onClick:k,icon:j(),active:s.startsWith("/taken")}),t.jsx(e,{onClick:x,icon:v(),active:s.startsWith("/mywallet")})]})}function y({children:s}){return n(),o(),t.jsxs(f,{children:[t.jsx("article",{children:s}),t.jsx(W,{})]})}export{y as L};
