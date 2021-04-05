"use strict";

const $   = q => document.querySelector(q);
const $$  = q => Array.from(document.querySelectorAll(q));
// const $$ = document.querySelectorAll.bind(document);
const $on = (el, ev, fn) => {
  Array.isArray(el) ? el.forEach(o => $on(o, ev, fn)) : 
    el.addEventListener(ev, fn);
  return el;
}