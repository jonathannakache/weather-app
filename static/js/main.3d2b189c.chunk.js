(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{14:function(e,a,t){e.exports=t(39)},19:function(e,a,t){},20:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),i=t.n(c),o=(t(19),t(2));t(20);var s=function(e){var a=e.city,t=Object(n.useRef)(null);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(t.current.value),t.current.value="",t.current.placeholder="Tapez une ville"},className:"search-bar"},r.a.createElement("input",{type:"text",className:"search-bar",ref:t,placeholder:"Tapez une ville"}))},l=t(13),m=t.n(l),u={Mist:"wi wi-windy",Thunderstorm:"wi wi-day-thunderstorm",Drizzle:"wi wi-day-rain",Rain:"wi wi-day-sprinkle",Snow:"wi wi-day-snow",Atmosphere:"wi wi-day-snow",Clear:"wi wi-day-sunny",Clouds:"wi wi-day-cloudy"};var d=function(e){var a=e.city,t=Object(n.useState)(""),c=Object(o.a)(t,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){""!==a&&m.a.get("".concat("https://api.openweathermap.org/data/2.5/weather?q=").concat(a,"&appid=").concat("dce781b2f988c11ca536248397a31ff2","&lang=fr&units=metric")).then((function(e){document.body.className=e.data.weather[0].main.toLowerCase(),s({description:e.data.weather[0].description,main:e.data.weather[0].main,icon:e.data.weather[0].icon,temp:e.data.main.temp,name:e.data.name})})).catch((function(e){return console.log(e)}))}),[a]),r.a.createElement("div",{className:"weather"},i.name&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is-1"},i.name),r.a.createElement("i",{id:"wi",className:u[i.main].toLowerCase()}),r.a.createElement("h3",null,i.temp&&r.a.createElement("span",{className:"is-size-2"}," ",Math.round(i.temp),"\xb0C"),r.a.createElement("span",{className:"is-size-2 is-capitalized"},"(",i.description,")"," "))))};var w=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(s,{city:function(e){return c(e)}}),r.a.createElement(d,{city:t})))};t(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.3d2b189c.chunk.js.map