import{q as o,a as n,j as s,y as e}from"./app-B-7a2OMU.js";import{T as x,k as a,E as m,l as j,m as k,W as u,P as d}from"./Icons-BlbIg6Sa.js";function f(){const{url:t,component:v}=o(),i=n(),c=()=>{e.get("/tasks/"+i)},l=()=>{e.get("/exec/"+i)},r=()=>{console.log(123),e.get("/mywallet")};return s.jsxs(x,{className:"left-0 bottom-0 fixed",children:[s.jsx(a,{onClick:c,icon:m(),active:t.startsWith("/tasks")}),s.jsx(a,{onClick:l,icon:j(),active:t.startsWith("/exec")}),s.jsx(a,{icon:k()}),s.jsx(a,{onClick:r,icon:u(),active:t.startsWith("/mywallet")})]})}function g({children:t}){return o(),n(),s.jsxs(d,{children:[s.jsx("article",{children:t}),s.jsx(f,{})]})}export{g as L};