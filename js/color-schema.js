/* global Fluid */
/**
 * Modified from https://blog.skk.moe/post/hello-darkmode-my-old-friend/
 */
!function(e,t){var r=t.documentElement,i="Fluid_Color_Scheme",a="--color-mode",o="data-user-color-scheme",n="data-default-color-scheme",c="#color-toggle-icon";function u(e){try{return localStorage.getItem(e)}catch(e){return null}}function l(){var e=getComputedStyle(r).getPropertyValue(a);return"string"==typeof e?e.replace(/["'\s]/g,""):null}function s(){r.setAttribute(o,g()),function(e){try{localStorage.removeItem(e)}catch(e){}}(i)}var d={dark:!0,light:!0};function g(){
// 取默认字段的值
var e,t="string"==typeof(e=r.getAttribute(n))?e.replace(/["'\s]/g,""):null;
// 如果明确指定了 schema 则返回
if(d[t])return t;
// 默认优先按 prefers-color-scheme
if(t=l(),d[t])return t;
// 否则按本地时间是否大于 18 点或凌晨 0 ~ 6 点
var i=(new Date).getHours();return i>=18||i>=0&&i<=6?"dark":"light"}function m(a){
// 接受从「开关」处传来的模式，或者从 localStorage 读取，否则按默认设置值
var n=a||u(i)||g();if(n===g())
// 当用户切换的显示模式和默认模式相同时，则恢复为自动模式
s();else{if(!d[n])
// 特殊情况重置
return void s();
// 根据当前模式设置图标
r.setAttribute(o,n)}!function(e){if(d[e]){
// 切换图标
var r=h("dark");e&&(r=h(e));var i=t.querySelector(c);if(i?(i.setAttribute("class","iconfont "+r),i.setAttribute("data",f[e])):
// 如果图标不存在则说明图标还没加载出来，等到页面全部加载再尝试切换
Fluid.utils.waitElementLoaded(c,(function(){var i=t.querySelector(c);i&&(i.setAttribute("class","iconfont "+r),i.setAttribute("data",f[e]))})),t.documentElement.getAttribute("data-user-color-scheme")){var a=getComputedStyle(t.documentElement).getPropertyValue("--navbar-bg-color").trim();t.querySelector('meta[name="theme-color"]').setAttribute("content",a)}}}(n),
// 设置代码高亮
function(e){
// 启用对应的代码高亮的样式
var r=t.getElementById("highlight-css"),i=t.getElementById("highlight-css-dark");"dark"===e?(i&&i.removeAttribute("disabled"),r&&r.setAttribute("disabled","")):(r&&r.removeAttribute("disabled"),i&&i.setAttribute("disabled",""));setTimeout((function(){
// 设置代码块组件样式
t.querySelectorAll(".markdown-body pre").forEach((e=>{var t=Fluid.utils.getBackgroundLightness(e)>=0?"code-widget-light":"code-widget-dark",r=e.querySelector(".code-widget-light, .code-widget-dark");r&&(r.classList.remove("code-widget-light","code-widget-dark"),r.classList.add(t))}))}),200)}(n),
// 设置其他应用
function(r){
// 设置 remark42 评论主题
e.REMARK42&&e.REMARK42.changeTheme(r);
// 设置 cusdis 评论主题
e.CUSDIS&&e.CUSDIS.setTheme(r);
// 设置 utterances 评论主题
var i=t.querySelector(".utterances-frame");if(i){const t={type:"set-theme",theme:"dark"===r?e.UtterancesThemeDark:e.UtterancesThemeLight};i.contentWindow.postMessage(t,"https://utteranc.es")}
// 设置 giscus 评论主题
var a=t.querySelector("iframe.giscus-frame");if(a){const t={setConfig:{theme:"dark"===r?e.GiscusThemeDark:e.GiscusThemeLight}};a.style.cssText+="color-scheme: normal;",a.contentWindow.postMessage({giscus:t},"https://giscus.app")}}
// 当页面加载时，将显示模式设置为 localStorage 中自定义的值（如果有的话）
(n)}var f={dark:"light",light:"dark"};function h(e){return"icon-"+e}function v(){var e=u(i);if(d[e])
// 从 localStorage 中读取模式，并取相反的模式
e=f[e];else{if(null!==e)return;
// 将相反的模式写入 localStorage
// 当 localStorage 中没有相关值，或者 localStorage 抛了 Error
// 先按照按钮的状态进行切换
var r=t.querySelector(c);r&&(e=r.getAttribute("data")),r&&d[e]||(
// 当 localStorage 中没有相关值，或者 localStorage 抛了 Error，则读取默认值并切换到相反的模式
e=f[l()])}return function(e,t){try{localStorage.setItem(e,t)}catch(e){}}(i,e),e}m(),Fluid.utils.waitElementLoaded(c,(function(){m();var e=t.querySelector("#color-toggle-btn");if(e){
// 当用户点击切换按钮时，获得新的显示模式、写入 localStorage、并在页面上生效
e.addEventListener("click",(function(){m(v())}));var r=t.querySelector(c);r&&(
// 光标悬停在按钮上时，切换图标
e.addEventListener("mouseenter",(function(){var e=r.getAttribute("data");r.classList.replace(h(f[e]),h(e))})),e.addEventListener("mouseleave",(function(){var e=r.getAttribute("data");r.classList.replace(h(e),h(f[e]))})))}})),Fluid.utils.waitElementLoaded("iframe",(function(){m()}))}(window,document);