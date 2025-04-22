(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(a){if(a.ep)return;a.ep=!0;const t=r(a);fetch(a.href,t)}})();function g(){const e=new Date,s=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");return`${s}:${r}`}const u=document.querySelector(".app-page__header"),f=document.querySelector(".app-header__info-btn-grp"),C=document.querySelector(".media-plans-btn"),x=document.querySelector(".reports-btn"),T=document.querySelector(".media-plans-box__title"),P=document.querySelector(".reports-box__title"),R=document.querySelector(".assistant-title__badge"),k=document.querySelector(".assistant-title__options"),p=document.querySelector(".get-reports-btn"),m=document.querySelector(".get-media-plans-btn"),B=document.querySelector(".app-main__all-files"),O=document.querySelector(".all-files__cap"),A=document.querySelector(".all-files__plans-and-reports-wrapper");document.querySelector(".all-files__media-plans");const v=document.querySelector(".media-plans-box__list");document.querySelector(".all-files__reports");const L=document.querySelector(".reports-box__list"),h=document.querySelector(".app-chat__descrip-and-actions"),i=document.querySelector(".app-chat__messages"),y=document.querySelector(".app-chat__body"),n=document.querySelector(".chat-body__text-area"),H=document.querySelector(".chat-actions__send-msg"),$=()=>{window.innerWidth<1440&&window.scrollY>0?(u.classList.add("sticky-nav-menu"),f.classList.add("hidden-elem")):(u.classList.remove("sticky-nav-menu"),f.classList.remove("hidden-elem"))},b=()=>{B.classList.toggle("active-elem")},D=()=>{k.classList.toggle("active-elem")},o=(e,s)=>{s?(e.classList.remove("hidden-elem"),e.classList.add("active-elem")):(e.classList.add("hidden-elem"),e.classList.remove("active-elem"))},F=e=>{v.innerHTML=`
    ${e?G:W}
  `},N=e=>{L.innerHTML=`
    ${e?I:J}
  `},U=()=>{v.classList.toggle("hidden-elem")},j=()=>{L.classList.toggle("hidden-elem")},G=`  
    <li class="media-plans-list__elem">
      <div class="media-plans-list__elem__company media-plans-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="media-plans-company__name">Companyname 11/23</p>
        <div class="media-plans-company__download">
          <i class="fa-solid fa-download"></i>
        </div>
      </div>

      <div class="media-plans-list__elem__rdy media-plan-elem-rdy">
        <i class="fa-solid fa-check"></i>
        <p class="media-plan-elem-rdy__text">Медиаплан от 18.04.2025 готов</p>
      </div>
    </li>
    <li class="media-plans-list__elem">
      <div class="media-plans-list__elem__company media-plans-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="media-plans-company__name">Companyname 11/23</p>
        <div class="media-plans-company__download">
          <i class="fa-solid fa-download"></i>
        </div>
      </div>
    </li>
    <li class="media-plans-list__elem">
      <div class="media-plans-list__elem__company media-plans-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="media-plans-company__name">Companyname 11/23</p>
        <div class="media-plans-company__download">
          <i class="fa-solid fa-download"></i>
        </div>
      </div>
    </li>
    <li class="media-plans-list__elem">
      <div class="media-plans-list__elem__company media-plans-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="media-plans-company__name">Companyname 11/23</p>
        <div class="media-plans-company__download">
          <i class="fa-solid fa-download"></i>
        </div>
      </div>
    </li>
    <li class="media-plans-list__elem">
      <button class="media-plans-box__show-more-btn">
        Показать еще
      </button>
    </li>
`,W=`
  <ul class="media-plans-box__list media-plans-list-empty">
    <i class="fa-regular fa-folder-closed"></i>
    <p class="media-plans-list__empty-text">Вы можете загрузить медиапланы нажав на кнопку в чате</p>
  </ul>
`,I=`  
    <li class="reports-list__elem">
      <div class="reports-list__elem__company reports-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="reports-company__name">Companyname 11/23</p>
        <div class="reports-company__download download-process">
          <i class="fa-solid fa-arrow-rotate-left"></i>
        </div>
      </div>

      <div class="reports-list__elem__dev reports-elem-dev report-dev-process">
        <i class="fa-solid fa-exclamation"></i>
        <p class="reports-elem-dev__text">Отчет формируется</p>
      </div>
    </li>
    <li class="reports-list__elem">
      <div class="reports-list__elem__company reports-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="reports-company__name">Companyname 11/23</p>
        <div class="reports-company__download">
          <i class="fa-solid fa-download"></i>
        </div>
      </div>
    </li>
    <li class="reports-list__elem">
      <div class="reports-list__elem__company reports-company">
        <i class="fa-regular fa-folder-closed"></i>
        <p class="reports-company__name">Companyname 11/23</p>
        <div class="reports-company__download">
          <i class="fa-solid fa-download"></i>
        </div>
      </div>
    </li>
    <li class="reports-list__elem">
      <button class="reports-box__show-more-btn">
        Показать еще
      </button>
    </li>
`,J=`  
  <ul class="reports-box__list reports-list-empty">
    <i class="fa-regular fa-folder-closed"></i>
    <p class="reports-list__empty-text">Вы можете загрузить отчеты нажав на кнопку в чате</p>
  </ul>
`,K=e=>{const s=document.createElement("div");return s.classList.add("app-chat__messages__message","assitant-msg"),s.innerHTML=`
      <div class="assitant-msg__body">
        <div class="assitant-msg__body__photo">
          <i class="fa-regular fa-user"></i>
        </div>
        <div class="assitant-msg__body__text">
          <span>${e}</span>
        </div>
      </div>
      <div class="assitant-msg__info">
        <span class="assitant-msg__from">Jim</span>
        <span class="assitant-msg__info__time">${g()}</span>
      </div>
  `,s},V=e=>{const s=document.createElement("div");return s.classList.add("app-chat__messages__message","my-msg"),s.innerHTML=`
    <div class="my-msg__body">
      <div class="my-msg__body__text">
        <span>${e}</span>
      </div>
    </div>
    <div class="my-msg__info">
      <span class="my-msg__info__time">${g()}</span>
    </div>
  `,s},_=e=>{o(h,!1),o(i,!0);const s=K(e);i.append(s)},Y=e=>{o(h,!1),o(i,!0);const s=V(e);i.append(s)},w=e=>{e?y.classList.add("chat-active"):y.classList.remove("chat-active")},l={isReportsLoaded:!1,isMediaPlansLoaded:!1,loadingTimer:2e3},M={reports:"reports",mediaplans:"mediaplans"},S=(e,s)=>{e.disabled=!1,s==="reports"&&(l.isReportsLoaded=!0),s==="mediaplans"&&(l.isMediaPlansLoaded=!0),o(O,!1),o(A,!0)},q=e=>{_(e),N(l.isReportsLoaded),F(l.isMediaPlansLoaded)},z=async()=>{if(l.isReportsLoaded){alert("Данные по отчетам уже загружены!");return}_("Обработка Вашего запроса на получение отчетов!"),p.disabled=!0;try{await new Promise((e,s)=>{setTimeout(()=>{S(p,M.reports),e()},l.loadingTimer)}),q("Отчеты загружены!")}catch(e){console.log("Ошибка:",e.message)}},Q=async()=>{if(l.isMediaPlansLoaded){alert("Данные по медиапланам уже загружены!");return}_("Обработка Вашего запроса на получение медиапланов!"),m.disabled=!0;try{await new Promise((e,s)=>{setTimeout(()=>{S(m,M.mediaplans),e()},l.loadingTimer)}),q("Медиапланы загружены!")}catch(e){console.log("Ошибка:",e.message)}},E=()=>{const e=n.value;e.length>0?(Y(e),n.value=""):alert("Пожалуйста введите Ваше сообщение!")};document.addEventListener("scroll",$);x.addEventListener("click",b);C.addEventListener("click",b);T.addEventListener("click",U);P.addEventListener("click",j);p.addEventListener("click",z);m.addEventListener("click",Q);R.addEventListener("click",D);H.addEventListener("click",E);document.addEventListener("keydown",e=>{e.key==="Enter"&&E()});n.addEventListener("focus",()=>{w(!0)});n.addEventListener("blur",()=>{w(!1)});
