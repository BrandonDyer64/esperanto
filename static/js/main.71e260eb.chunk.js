(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{57:function(e,a,t){e.exports=t(97)},62:function(e,a,t){},63:function(e,a,t){e.exports=t.p+"static/media/logo.f47058d3.png"},66:function(e,a,t){var n={"./en.json":67,"./eo.json":68,"./fr.json":69};function r(e){var a=o(e);return t(a)}function o(e){var a=n[e];if(!(a+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=66},67:function(e){e.exports={okazejo:"English",esperantujo:"Esperanto",lingvo:"Language",hejmo:"Home",pri:"About",kial:"Why",lerni:"Learn",KialEsperanto:"Why Learn Esperanto?",Citajxo:"The internal idea of Esperanto is: the foundation of a neutral language will help break down barriers between peoples and help people get used to the idea that each one of them should see their neighbors only as a human being and a brother."}},68:function(e){e.exports={okazejo:"Esperanto",esperantujo:"Esperantujo",lingvo:"Lingvo",hejmo:"Hejmo",pri:"Pri",kial:"Kial",lerni:"Lerni",KioEstasEsperanto:"Kio Estas Esperanto?",KioEstasEsperanto_:"Esperanto estas la plej bona lingvo.",KielGxiLaboras:"Kiel Gxi Laboras?",KielGxiLaboras_:"Gxi ne laboras.",KialEsperanto:"Kial Lerni Esperanton?",Citajxo:"La interna ideo de Esperanto estas: sur ne\u016dtrala lingva fundamento forigi la murojn inter la gentoj kaj alkutimigadi la homojn, ke \u0109iu el ili vidu en sia proksimulo nur homon kaj fraton."}},69:function(e){e.exports={okazejo:"Fran\xe7ais",esperantujo:"L'esp\xe9ranto",lingvo:"Langue",hejmo:"La maison",pri:"\xc0 propos de",kial:"Pourquoi",lerni:"Apprendre",KialEsperanto:"Pourquoi l'esp\xe9ranto?",Citajxo:"\xab L\u2019id\xe9e interne de l\u2019esp\xe9ranto est, sur la base d'une langue neutre, de d\xe9truire les murs entre les populations et de rapprocher les \xeatres humains pour que chacun d'eux voie dans son prochain seulement un \xeatre humain et un fr\xe8re. \xbb"}},95:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(14),l=t.n(o),i=(t(62),t(21)),s=t(22),c=t(28),u=t(23),m=t(27),p=t(107),E=t(106),d=t(104),g=t(99),h=t(105),f=t(103),v=t(102),k=t(100),b={test:!1},j=(t(63),t(49)),y=t.n(j),L=t(66),w={eo:{}};L.keys().forEach(function(e){w[e.substr(2,2)]=L(e)});var x=new y.a(w),O=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).fiksuLingvon=e.fiksuLingvon,t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"traktuElekton",value:function(e){this.fiksuLingvon(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{bg:"light",expand:"lg",variant:"light"},r.a.createElement(g.a,null,r.a.createElement(d.a.Brand,null,r.a.createElement(k.a,{to:"/"},x.esperantujo)),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,{className:"mr-auto"}),r.a.createElement(h.a,{onSelect:function(a){return e.traktuElekton(a)}},r.a.createElement(f.a,{title:x.okazejo,id:"basic-nav-dropdown",className:"jsonly"},r.a.createElement(f.a.Item,{eventKey:"eo"},"Esperanto"),r.a.createElement(f.a.Item,{eventKey:"en"},"English"),r.a.createElement(f.a.Item,{eventKey:"fr"},"Fran\xe7ais")),r.a.createElement(k.a,{to:"/",className:"nav-link"},x.hejmo),r.a.createElement(k.a,{to:"/pri",className:"nav-link"},x.pri),r.a.createElement(k.a,{to:"/kial",className:"nav-link"},x.kial),r.a.createElement(v.a,{inline:!0},r.a.createElement("a",{href:"https://lernu.net",className:"btn btn-depth btn-primary",target:"_blank",style:{marginLeft:"1.1rem"}},x.lerni))))))}}]),a}(r.a.Component),K=function(e){return r.a.createElement("section",{style:{paddingTop:"3rem",paddingBottom:"2rem",backgroundColor:e.dark?"var(--primary)":"var(--light)",color:e.dark?"var(--light)":"var(--dark)"}},r.a.createElement(g.a,null,e.children))},C=(t(95),t(101)),_=t(54),N=function(e){function a(e){return Object(i.a)(this,a),Object(c.a)(this,Object(u.a)(a).call(this,e))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{dark:!0},r.a.createElement(C.a,null,r.a.createElement(_.a,{lg:"6"},r.a.createElement("h2",null,x.KioEstasEsperanto),r.a.createElement("p",null,x.KioEstasEsperanto_)),r.a.createElement(_.a,{lg:"6"},r.a.createElement("h2",null,x.KielGxiLaboras),r.a.createElement("p",null,x.KielGxiLaboras_)))),r.a.createElement(K,{dark:!1},r.a.createElement(C.a,null,r.a.createElement(_.a,{lg:"6"},r.a.createElement("div",{class:"video-container"},r.a.createElement("iframe",{id:"ytplayer",type:"text/html",width:"640",height:"360",src:"https://www.youtube.com/embed/8gSAkUOElsg?autoplay=0&rel=0"+"&cc_lang_pref=".concat(x.getLanguage())+"&hl=".concat(x.getLanguage())+"".concat("en"!=x.getLanguage()?"&cc_load_policy=1":""),style:{maxWidth:"100%"},frameborder:"0"}))),r.a.createElement(_.a,{lg:"6"},r.a.createElement("h2",null,x.KialEsperanto),r.a.createElement("p",{className:"justify"},x.Citajxo),r.a.createElement("p",{style:{textAlign:"center"}},"-- L. L. Zamenhof, 1912")))))}}]),a}(r.a.Component),I=function(e){function a(e){var t;Object(i.a)(this,a),t=Object(c.a)(this,Object(u.a)(a).call(this,e));var n=localStorage.getItem("okazejo");return n&&t.fiksuLingvon(n),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"fiksuLingvon",value:function(e){x.setLanguage(e),localStorage.setItem("okazejo",e),this.setState({})}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{fiksuLingvon:function(a){return e.fiksuLingvon(a)}}),r.a.createElement(E.a,{exact:!0,path:"/",component:N})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.getElementById("root").hasChildNodes()?l.a.hydrate(r.a.createElement(I,null),document.getElementById("root")):(b.test=!0,l.a.render(r.a.createElement(I,null),document.getElementById("root"))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[57,1,2]]]);
//# sourceMappingURL=main.71e260eb.chunk.js.map