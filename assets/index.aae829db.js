import{l as c,v as t,S as i}from"./vendor.0c3666cb.js";const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};p();var u="assets/logo.d24554a6.svg";const d=()=>{const[s,o]=c(0);return t("div",{className:"App"},t("header",{className:"App-header"},t("img",{src:u,className:"App-logo",alt:"logo"}),t("p",null,"Hello Vite + Preact!"),t("p",null,t("button",{type:"button",onClick:()=>o(n=>n+1)},"count is: ",s)),t("p",null,"Edit ",t("code",null,"App.tsx")," and save to test HMR updates."),t("p",null,t("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",t("a",{className:"App-link",href:"https://preactjs.com",target:"_blank",rel:"noopener noreferrer"},"Learn Preact")," | ",t("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs"))))};i(t(d,null),document.getElementById("root"));