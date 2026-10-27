import Lenis from 'lenis';
let lenis:Lenis|undefined;
export function startScroll(reduced=false){if(lenis)lenis.destroy();lenis=new Lenis({smoothWheel:!reduced,duration:1.1});let raf=(time:number)=>{lenis?.raf(time);document.documentElement.style.setProperty('--scroll-y',String(window.scrollY));requestAnimationFrame(raf)};requestAnimationFrame(raf);return()=>lenis?.destroy()}
export function scrollToHash(hash:string){document.querySelector(hash)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});history.pushState(null,'',hash)}