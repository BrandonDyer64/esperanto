(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{57:function(e,a,t){e.exports=t(97)},62:function(e,a,t){},63:function(e,a,t){e.exports=t.p+"static/media/logo.f47058d3.png"},66:function(e,a,t){var n={"./en.json":67,"./eo.json":68,"./fr.json":69};function r(e){var a=o(e);return t(a)}function o(e){var a=n[e];if(!(a+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=66},67:function(e){e.exports={okazejo:"English",esperantujo:"Esperanto",lingvo:"Language",hejmo:"Home",pri:"About",kial:"Why",lerni:"Learn",KialEsperanto:"Why Learn Esperanto?",Citajxo:"The internal idea of Esperanto is: the foundation of a neutral language will help break down barriers between peoples and help people get used to the idea that each one of them should see their neighbors only as a human being and a brother."}},68:function(e){e.exports={okazejo:"Esperanto",esperantujo:"Esperantujo",lingvo:"Lingvo",hejmo:"Hejmo",pri:"Pri",kial:"Kial",lerni:"Lerni",KioEstasEsperanto:"Kio Estas Esperanto?",KioEstasEsperanto_:"Esperanto estas la plej bona lingvo.",KielGxiLaboras:"Kiel Gxi Laboras?",KielGxiLaboras_:"Gxi ne laboras.",KialEsperanto:"Kial Lerni Esperanton?",Citajxo:"La interna ideo de Esperanto estas: sur ne\u016dtrala lingva fundamento forigi la murojn inter la gentoj kaj alkutimigadi la homojn, ke \u0109iu el ili vidu en sia proksimulo nur homon kaj fraton."}},69:function(e){e.exports={okazejo:"Fran\xe7ais",esperantujo:"L'esp\xe9ranto",lingvo:"Langue",hejmo:"La maison",pri:"\xc0 propos de",kial:"Pourquoi",lerni:"Apprendre",KialEsperanto:"Pourquoi l'esp\xe9ranto?",Citajxo:"\xab L\u2019id\xe9e interne de l\u2019esp\xe9ranto est, sur la base d'une langue neutre, de d\xe9truire les murs entre les populations et de rapprocher les \xeatres humains pour que chacun d'eux voie dans son prochain seulement un \xeatre humain et un fr\xe8re. \xbb"}},95:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(14),l=t.n(o),i=(t(62),t(18)),c=t(19),s=t(22),u=t(20),m=t(21),p=t(107),d=t(106),h=t(104),g=t(99),E=t(105),v=t(103),f=t(102),b=t(100),k=(t(63),t(49)),j=t.n(k),y=t(66),L={eo:{}};y.keys().forEach(function(e){L[e.substr(2,2)]=y(e)});var w=new j.a(L),x=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).fiksuLingvon=e.fiksuLingvon,t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"traktuElekton",value:function(e){this.fiksuLingvon(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{bg:"light",expand:"md",variant:"light"},r.a.createElement(g.a,null,r.a.createElement(h.a.Brand,null,r.a.createElement(b.a,{to:"/"},w.esperantujo)),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(E.a,{className:"mr-auto"}),r.a.createElement(E.a,{onSelect:function(a){return e.traktuElekton(a)}},r.a.createElement(v.a,{title:w.okazejo,id:"basic-nav-dropdown",className:"jsonly"},r.a.createElement(v.a.Item,{eventKey:"eo"},"Esperanto"),r.a.createElement(v.a.Item,{eventKey:"en"},"English"),r.a.createElement(v.a.Item,{eventKey:"fr"},"Fran\xe7ais")),r.a.createElement(b.a,{to:"/",className:"nav-link"},w.hejmo),r.a.createElement(b.a,{to:"/pri",className:"nav-link"},w.pri),r.a.createElement(b.a,{to:"/kial",className:"nav-link"},w.kial),r.a.createElement(f.a,{inline:!0},r.a.createElement(b.a,{to:"/lerni",className:"btn btn-depth btn-primary",id:"lerniNavButton",style:{marginLeft:"1.1rem"}},w.lerni))))))}}]),a}(r.a.Component),O=function(e){return r.a.createElement("section",{style:{paddingTop:"3rem",paddingBottom:"2rem",backgroundColor:e.dark?"var(--primary)":"var(--light)",color:e.dark?"var(--light)":"var(--dark)"}},r.a.createElement(g.a,null,e.children))},K=(t(95),t(101)),C=t(54),N=function(e){function a(e){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).call(this,e))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{dark:!0},r.a.createElement(K.a,null,r.a.createElement(C.a,{lg:"6"},r.a.createElement("h2",null,w.KioEstasEsperanto),r.a.createElement("p",null,w.KioEstasEsperanto_)),r.a.createElement(C.a,{lg:"6"},r.a.createElement("h2",null,w.KielGxiLaboras),r.a.createElement("p",null,w.KielGxiLaboras_)))),r.a.createElement(O,{dark:!1},r.a.createElement(K.a,null,r.a.createElement(C.a,{lg:"6"},r.a.createElement("div",{class:"video-container"},r.a.createElement("iframe",{id:"ytplayer",type:"text/html",width:"640",height:"360",src:"https://www.youtube.com/embed/8gSAkUOElsg?autoplay=0&rel=0"+"&cc_lang_pref=".concat(w.getLanguage())+"&hl=".concat(w.getLanguage())+"".concat("en"!=w.getLanguage()?"&cc_load_policy=1":""),style:{maxWidth:"100%"},frameborder:"0"}))),r.a.createElement(C.a,{lg:"6"},r.a.createElement("h2",null,w.KialEsperanto),r.a.createElement("p",{className:"justify"},w.Citajxo),r.a.createElement("p",{style:{textAlign:"center"}},"-- L. L. Zamenhof, 1912")))))}}]),a}(r.a.Component),_=function(){return r.a.createElement("div",{style:{height:"100%",display:"flex",flexWrap:"wrap"}},r.a.createElement("div",{style:{width:"50%",height:"50%",backgroundColor:"var(--success)",margin:"0px"}}),r.a.createElement("div",{style:{width:"50%",height:"50%",backgroundColor:"var(--secondary)",margin:"0px"}}),r.a.createElement("div",{style:{width:"50%",height:"50%",backgroundColor:"var(--warning)",margin:"0px"}}),r.a.createElement("div",{style:{width:"50%",height:"50%",backgroundColor:"var(--danger)",margin:"0px"}}))},I=function(e){function a(e){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).call(this,e))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,{className:"lerniContainer"},r.a.createElement(_,null))}}]),a}(r.a.Component),B=function(e){function a(e){var t;Object(i.a)(this,a),t=Object(s.a)(this,Object(u.a)(a).call(this,e));var n=localStorage.getItem("okazejo");return n&&t.fiksuLingvon(n),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"fiksuLingvon",value:function(e){w.setLanguage(e),localStorage.setItem("okazejo",e),this.setState({})}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{fiksuLingvon:function(a){return e.fiksuLingvon(a)}}),r.a.createElement(d.a,{exact:!0,path:"/",component:N}),r.a.createElement(d.a,{path:"/lerni",component:I})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.getElementById("root").hasChildNodes()?l.a.hydrate(r.a.createElement(B,null),document.getElementById("root")):l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[57,1,2]]]);
//# sourceMappingURL=main.73ea48af.chunk.js.map