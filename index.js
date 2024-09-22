import{i as m,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const y="46111886-e1974f40af7d3aa808257f9c9",p=s=>{const o=`https://pixabay.com/api/?key=${y}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("No images found");return e.hits}).catch(e=>{throw console.error(e),e})},g=s=>{const o=document.querySelector(".gallery");o.innerHTML="";const e=s.map(({webformatURL:i,largeImageURL:t,tags:r,likes:n,views:c,comments:u,downloads:f})=>`
            <li class="gallery-item">
                <a href="${t}" class="gallery-link">
                    <img class="gallery-image" src="${i}" alt="${r}" loading="lazy" />
                    <div class="info">
                        <p class="info-item"><b>Likes:</b> ${n}</p>
                        <p class="info-item"><b>Views:</b> ${c}</p>
                        <p class="info-item"><b>Comments:</b> ${u}</p>
                        <p class="info-item"><b>Downloads:</b> ${f}</p>
                    </div>
                </a>
            </li>
        `).join("");o.insertAdjacentHTML("beforeend",e)},l=s=>{m.error({title:"Error",message:s,position:"topRight",timeout:2e3,backgroundColor:"#EF4040",closeOnClick:!0})},h=document.querySelector("#search-form"),b=document.querySelector(".gallery"),a=document.querySelector("#loader"),L=new d(".gallery a");h.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.query.value.trim();if(!o){l("Please enter a search term."),a.style.display="none";return}a.style.display="block",b.innerHTML="",p(o).then(e=>{console.log("Images received",e),e.length===0?l("Sorry, there are no images matching your search query. Please try again!"):(g(e),L.refresh())}).catch(e=>{console.log("Error:",e),l(e.message)}).finally(()=>{setTimeout(()=>{a.style.display="none"},.5)})});
//# sourceMappingURL=index.js.map
