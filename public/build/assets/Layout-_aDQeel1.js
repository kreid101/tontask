import{q as n,a as c,j as t,y as i}from"./app-DzJEpXaM.js";import{T as x,k as a,E as m,l as j,m as k,W as u,P as d}from"./Icons-kv67BJ2F.js";function f(){const{url:s,component:v}=n(),e=c(),o=()=>{i.get("/tasks/"+e)},l=()=>{i.get("/exec/"+e)},r=()=>{i.get("/mywallet")};return t.jsxs(x,{className:"left-0 bottom-0 fixed",children:[t.jsx(a,{onClick:o,icon:m(),active:s.startsWith("/tasks")}),t.jsx(a,{onClick:l,icon:j(),active:s.startsWith("/exec")}),t.jsx(a,{icon:k()}),t.jsx(a,{onClick:r,icon:u(),active:s.startsWith("/mywallet")})]})}function h({children:s}){return n(),c(),t.jsxs(d,{children:[t.jsx("article",{children:s}),t.jsx(f,{})]})}export{h as L};
