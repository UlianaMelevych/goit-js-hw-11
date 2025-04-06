import{a as m,S as y,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="49665099-2f67bd35a0157bd44eee07542",h="https://pixabay.com/api/";async function b(s){return(await m.get(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:f,downloads:p})=>`
    <a class="gallery__item" href="${i}">
      <div class="photo-card">
        <img src="${o}" alt="${e}" loading="lazy" />
        <div class="info">
          <p class="info-text"><b>Likes</b> ${t}</p>
          <p class="info-text"><b>Views</b> ${a}</p>
          <p class="info-text"><b>Comments</b> ${f}</p>
          <p class="info-text"><b>Downloads</b> ${p}</p>
        </div>
      </div>
    </a>
  `).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function w(){l.innerHTML=""}function S(){u.classList.add("visible")}function c(){u.classList.remove("visible")}const d=document.querySelector(".form"),x=d.querySelector('input[name="search-text"]');d.addEventListener("submit",async s=>{s.preventDefault();const r=x.value.trim();if(!r){n.warning({title:"Oops!",message:"Please enter a search term!"});return}w(),S();try{const o=await b(r);if(c(),o.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}v(o.hits)}catch(o){c(),n.error({title:"Error",message:"Something went wrong. Try again later."}),console.error(o)}});
//# sourceMappingURL=index.js.map
