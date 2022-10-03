/*! For license information please see bundle.js.LICENSE.txt */
!function(){var t={702:function(t,e,n){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,i=void 0,s=function(t,e){f[r]=t,f[r+1]=e,2===(r+=2)&&(i?i(m):y())};var a="undefined"!=typeof window?window:void 0,c=a||{},l=c.MutationObserver||c.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(m,1)}}var f=new Array(1e3);function m(){for(var t=0;t<r;t+=2)(0,f[t])(f[t+1]),f[t]=void 0,f[t+1]=void 0;r=0}var v,p,g,_,y=void 0;function w(t,e){var n=this,r=new this.constructor(E);void 0===r[S]&&I(r);var o=n._state;if(o){var i=arguments[o-1];s((function(){return $(o,r,i,n._result)}))}else j(n,r,t,e);return r}function b(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(E);return x(e,t),e}y=u?function(){return process.nextTick(m)}:l?(p=0,g=new l(m),_=document.createTextNode(""),g.observe(_,{characterData:!0}),function(){_.data=p=++p%2}):d?((v=new MessageChannel).port1.onmessage=m,function(){return v.port2.postMessage(0)}):void 0===a?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(m)}:h()}catch(t){return h()}}():h();var S=Math.random().toString(36).substring(2);function E(){}var L=void 0;function A(e,n,r){n.constructor===e.constructor&&r===w&&n.constructor.resolve===b?function(t,e){1===e._state?C(t,e._result):2===e._state?T(t,e._result):j(e,void 0,(function(e){return x(t,e)}),(function(e){return T(t,e)}))}(e,n):void 0===r?C(e,n):t(r)?function(t,e,n){s((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?x(t,n):C(t,n))}),(function(e){r||(r=!0,T(t,e))}),t._label);!r&&o&&(r=!0,T(t,o))}),t)}(e,n,r):C(e,n)}function x(t,e){if(t===e)T(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)C(t,e);else{var n=void 0;try{n=e.then}catch(e){return void T(t,e)}A(t,e,n)}var r,o}function q(t){t._onerror&&t._onerror(t._result),M(t)}function C(t,e){t._state===L&&(t._result=e,t._state=1,0!==t._subscribers.length&&s(M,t))}function T(t,e){t._state===L&&(t._state=2,t._result=e,s(q,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=n,o[i+2]=r,0===i&&t._state&&s(M,t)}function M(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?$(n,r,o,i):o(i);t._subscribers.length=0}}function $(e,n,r,o){var i=t(r),s=void 0,a=void 0,c=!0;if(i){try{s=r(o)}catch(t){c=!1,a=t}if(n===s)return void T(n,new TypeError("A promises callback cannot return that same promise."))}else s=o;n._state!==L||(i&&c?x(n,s):!1===c?T(n,a):1===e?C(n,s):2===e&&T(n,s))}var D=0;function I(t){t[S]=D++,t._state=void 0,t._result=void 0,t._subscribers=[]}var k=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(E),this.promise[S]||I(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?C(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&C(this.promise,this._result))):T(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===L&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===b){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===w&&t._state!==L)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===O){var a=new n(E);s?T(a,i):A(a,t,o),this._willSettleAt(a,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===L&&(this._remaining--,2===t?T(r,n):this._result[e]=n),0===this._remaining&&C(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,(function(t){return n._settledAt(1,e,t)}),(function(t){return n._settledAt(2,e,t)}))},t}();var O=function(){function e(t){this[S]=D++,this._result=this._state=void 0,this._subscribers=[],E!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){x(t,e)}),(function(e){T(t,e)}))}catch(e){T(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();return O.prototype.then=w,O.all=function(t){return new k(this,t).promise},O.race=function(t){var n=this;return e(t)?new n((function(e,r){for(var o=t.length,i=0;i<o;i++)n.resolve(t[i]).then(e,r)})):new n((function(t,e){return e(new TypeError("You must pass an array to race."))}))},O.resolve=b,O.reject=function(t){var e=new this(E);return T(e,t),e},O._setScheduler=function(t){i=t},O._setAsap=function(t){s=t},O._asap=s,O.polyfill=function(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=O},O.Promise=O,O}()},746:function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(746);function t(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",e&&clearInterval(e)}function e(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}n(702).polyfill(),document.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>t(".modal",n)),15e3);(function(t){let{tabsSelector:e,tabsContentSelector:n,activeClass:r}=t;const o=document.querySelectorAll(e),i=document.querySelectorAll(n);function s(){i.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),o.forEach((t=>{t.classList.remove(r)}))}function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;i[t].classList.add("show","fade"),i[t].classList.remove("hide"),o[t].classList.add(r)}s(),a(),o.forEach(((t,e)=>{t.addEventListener("click",(()=>{s(),a(e)}))}))})({tabsSelector:".tabheader__item",tabsContentSelector:".tabcontent",activeClass:"tabheader__item_active"}),function(t,e){function n(t){return t>=0&&t<10?`0${t}`:t}!function(t,e){const r=document.querySelector(t),o=r.querySelector("#days"),i=r.querySelector("#hours"),s=r.querySelector("#minutes"),a=r.querySelector("#seconds"),c=setInterval(l,1e3);function l(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date);return{total:e,days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/6e4%60),seconds:Math.floor(e/1e3%60)}}(e);o.innerHTML=n(t.days),i.innerHTML=n(t.hours),s.innerHTML=n(t.minutes),a.innerHTML=n(t.seconds),t.total<=0&&clearInterval(c)}l()}(t,e)}(".timer","2022-11-11"),function(n,r,o){const i=document.querySelector(n);document.querySelectorAll(r).forEach((e=>{e.addEventListener("click",(()=>t(n,o)))})),i.addEventListener("click",(t=>{t.target!==i&&""!=t.target.getAttribute("data-close")||e(n)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&i.classList.contains("show")&&e(n)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(t(n,o),window.removeEventListener("scroll",e))}))}(".modal","[data-modal]",n),function(n){function r(r){const o=document.querySelector(".modal__dialog");o.classList.add("hide"),t(".modal",n);const i=document.createElement("div");i.classList.add("modal__dialog"),i.innerHTML=`\n                <div class="modal__content">\n                            <div data-close class="modal__close">&times;</div>\n                            <div class="modal__title">${r}</div>\n                    </div>\n                `,document.querySelector(".modal").append(i),setTimeout((()=>{i.remove(),o.classList.add("show"),o.classList.remove("hide"),e(".modal")}),4e3)}document.querySelectorAll("form").forEach((t=>{t.addEventListener("submit",(e=>{e.preventDefault();const n=document.createElement("img");n.src="/icons/spinner.svg",n.style.cssText="\n                  display: block;\n                  margin: 0 auto;\n                  ",t.insertAdjacentElement("afterend",n);const o=new FormData(t);(async(t,e)=>{const n=await fetch(t,{method:"POST",headers:{"Content-type":"application/json"},body:e});if(!n.ok)throw new Error(console.log(`Could not fetch ${t}, status: ${n.status}`));return await n.json()})("https://mate-academy.github.io/fe-students-api",JSON.stringify(Object.fromEntries(o.entries()))).then((t=>{console.log(t),r("Спасибо !")})).catch((()=>{r("Что-то пошло не так...")})).finally((()=>{t.reset(),n.remove()}))}))}))}(n),function(){class t{constructor(t,e,n,r,o,i){this.img=t,this.altimg=e,this.parent=document.querySelector(i),this.title=n,this.descr=r,this.price=o;for(var s=arguments.length,a=new Array(s>6?s-6:0),c=6;c<s;c++)a[c-6]=arguments[c];this.classes=a,this.transfer=27,this.changeToUah()}changeToUah(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.element="menu__item",t.classList.add(this.element)):this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n        <img src="${this.img}" alt="${this.altimg}">\n        <h3 class="menu__item-subtitle">${this.title}</h3>\n        <div class="menu__item-descr">${this.descr}</div>\n        <div class="menu__item-divider"></div>\n        <div class="menu__item-price">\n            <div class="menu__item-cost">Цена:</div>\n            <div class="menu__item-total"><span class="menu__item-pricenum">${this.price}</span> грн/день</div>\n        </div>\n        `,this.parent.append(t)}}new t("img/tabs/vegy.jpg","vegy",'Меню "Фитнес"',"Меню “Фитнес” - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",10,".menu .container").render(),new t("img/tabs/elite.jpg","elite",'Меню "Премиум"',"В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",20,".menu .container","menu__item").render(),new t("img/tabs/post.jpg","post",'Меню "Постное"',"Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",15,".menu .container","menu__item").render()}(),function(t){let{slide:e,nextArrow:n,prevArrow:r,totalCounter:o,currentCounter:i,wrapper:s,field:a}=t;const c=document.querySelectorAll(e),l=document.querySelector(r),u=document.querySelector(n),d=document.querySelector(i),h=document.querySelector(o),f=document.querySelector(s),m=document.querySelector(a),v=window.getComputedStyle(f).width;let p=1,g=0;c.length<10?h.textContent=`0${c.length}`:h.textContent=c.length,d.textContent=p<10?`0${p}`:p,m.style.width=100*c.length+"%",m.style.display="flex",m.style.transition="0.5s all",f.style.overflow="hidden",c.forEach((t=>{t.style.width=v})),f.style.position="relative";const _=document.createElement("ol"),y=[];_.classList.add("carousel-indicators"),f.append(_);for(let t=0;t<c.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.classList.add("dot"),0==t&&(e.style.opacity=1),_.append(e),y.push(e)}u.addEventListener("click",(()=>{g===+v.replace(/\D/gi,"")*(c.length-1)?g=0:g+=+v.replace(/\D/gi,""),m.style.transform=`translateX(-${g}px)`,p==c.length?p=1:p++,d.textContent=p<10?`0${p}`:p,y.forEach((t=>{t.style.opacity="0.5",y[p-1].style.opacity=1}))})),l.addEventListener("click",(()=>{0==g?g=+v.replace(/\D/gi,"")*(c.length-1):g-=+v.replace(/\D/gi,""),m.style.transform=`translateX(-${g}px)`,1==p?p=c.length:p--,d.textContent=p<10?`0${p}`:p,y.forEach((t=>{t.style.opacity="0.5",y[p-1].style.opacity=1}))})),y.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");p=e,g=+v.replace(/\D/gi,"")*(e-1),m.style.transform=`translateX(-${g}px)`,d.textContent=p<10?`0${p}`:p,y.forEach((t=>{t.style.opacity="0.5",y[p-1].style.opacity=1}))}))}))}({slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"}),function(){const t=document.querySelector(".calculating__result span");let e,n,r,o,i;function s(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function a(){t.textContent=e&&n&&r&&o&&i?"female"===e?((447.6+9.2*r+3.1*n-4.3*o)*i).toFixed(2):((88.36+13.4*r+4.8*n-5.7*o)*i).toFixed(2):"___"}function c(t,n){const r=document.querySelectorAll(t);r.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(i=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),r.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),a()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none","height"===e.getAttribute("id")?n=+e.value:"weight"===e.getAttribute("id")?r=+e.value:"age"===e.getAttribute("id")&&(o=+e.value),a()}))}localStorage.getItem("ratio")?i=localStorage.getItem("ratio"):(i=1.375,localStorage.setItem("ratio",1.375)),localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active"),a(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}()}))}()}();
//# sourceMappingURL=bundle.js.map