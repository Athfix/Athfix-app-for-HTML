(this.webpackJsonpathfixapp=this.webpackJsonpathfixapp||[]).push([[0],{10:function(t,e,i){},12:function(t,e,i){"use strict";i.r(e);i(2);var l=i(4),s=i.n(l),c=(i(9),i(1)),a=i.n(c),h=(i(10),i(0));a()(document).ready((function(){a()("#videoInterface").mouseover((function(){a()("#next,#back").attr("style","display:block"),setTimeout((function(){a()("#next,#back").attr("style","display:none")}),5e3)}));var t=!0;a()("#pButton").click((function(){1==t?(a()("#editor").attr("style","height:600px"),a()(".frame").attr("style","height:550px"),a()("#pButton").attr("style","color:lightgreen")):(a()("#editor").attr("style","height:50px"),a()(".frame").attr("style","height:0px"),a()("#pButton").attr("style","color:white")),t=!t}));var e=!0;a()("#head").click((function(){1==e?a()("#playList").height("300px"):(a()("#playList").height("0px"),a()(window).width()>1e3&&a()("#playList").height("100px")),e=!e}));var i=["https://www.youtube.com/embed/npxhI9-Vi4A","https://www.youtube.com/embed/Ydz-zLmOgQY","https://www.youtube.com/embed/uXAd5VycRw0","https://www.youtube.com/embed/eLXqFer0DjI","https://www.youtube.com/embed/SOrAdTnwGwQ","https://www.youtube.com/embed/siV-VEW4010","https://www.youtube.com/embed/xx8Sf3R13A8"],l=["https://athfix.github.io/IntroductionToHTML/","https://athfix.github.io/AttributesAsStart/","https://athfix.github.io/tablesStart/","https://athfix.github.io/IntroductionToHTML5/","https://athfix.github.io/AnimationsInHTML/","https://athfix.github.io/CanvasInHTML/","https://athfix.github.io/FormsInHTML5/"],s=0;a()("#next").click((function(){++s>=i.length&&(s=i.length-1,a()(".comp").attr("style","width:300px;height:330px")),a()("#iframe").attr("src",i[s]),a()("#Notes").attr("src",l[s]),a()("#playList li:nth-child("+(s+1)+")").attr("style","background:lightgrey")})),a()("#back").click((function(){--s<0&&(s=0),a()("#iframe").attr("src",i[s]),a()("#Notes").attr("src",l[s])})),a()(".down").click((function(){a()(".comp").attr("style","width:0px;height:0px")}))}));var r=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{style:{position:"absolute"},id:"wid"}),Object(h.jsxs)("div",{id:"videoInterface",children:[Object(h.jsx)("iframe",{id:"iframe",width:"540",height:"315",src:"https://www.youtube.com/embed/npxhI9-Vi4A",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(h.jsx)("p",{id:"next",children:Object(h.jsx)("svg",{style:{marginLeft:"5px",marginTop:"10px"},xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"white",class:"bi bi-arrow-right-circle-fill",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"})})}),Object(h.jsx)("p",{id:"back",children:Object(h.jsx)("svg",{style:{marginLeft:"5px",marginTop:"10px"},xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"white",class:"bi bi-arrow-left-circle-fill",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"})})})]}),Object(h.jsx)("p",{id:"head",children:"Playlist"}),Object(h.jsxs)("div",{id:"playList",children:[Object(h.jsx)("li",{children:"Structure of HTML and Tags, Use of VS code"}),Object(h.jsxs)("li",{children:["Attribute,Image,link,list,Image,table,",Object(h.jsx)("br",{}),"forms in HTML"]}),Object(h.jsxs)("li",{children:["Attribute,Image,link,list,Image,table,",Object(h.jsx)("br",{}),"forms in VS code"]}),Object(h.jsx)("li",{children:"Audio, video, progress in HTML5"}),Object(h.jsx)("li",{children:"SVG animation using VS code"}),Object(h.jsx)("li",{children:"SVG polyline, ellipse, polygon, canvas, forms in HTML5"}),Object(h.jsx)("li",{children:"Forms and types of input in HTML5"})]}),Object(h.jsx)("div",{id:"NotesPlat",children:Object(h.jsx)("iframe",{id:"Notes",src:"https://athfix.github.io/IntroductionToHTML/"})}),Object(h.jsxs)("div",{id:"editor",children:[Object(h.jsxs)("svg",{id:"pButton",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"white",class:"bi bi-power",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{d:"M7.5 1v7h1V1h-1z"}),Object(h.jsx)("path",{d:"M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"})]}),Object(h.jsx)("iframe",{className:"frame",src:"https://stackblitz.com/edit/js-eauwuo?file=index.html"})]}),Object(h.jsx)("div",{id:"ad",children:Object(h.jsxs)("p",{id:"adText",children:["If you are intrested in the courses you can visit the athfix info store and explore it to grab new courses",Object(h.jsx)("p",{id:"click",children:"Athfix store"})]})}),Object(h.jsxs)("footer",{children:[Object(h.jsxs)("p",{id:"Teaching",children:[Object(h.jsx)("n",{children:"Explore"}),Object(h.jsx)("li",{children:"Creative"}),Object(h.jsx)("li",{children:"Teacher"}),Object(h.jsx)("li",{children:"Books"})]}),Object(h.jsxs)("p",{id:"App",children:[Object(h.jsx)("n",{children:"Get our apps"}),Object(h.jsx)("li",{children:"IOS"}),Object(h.jsx)("li",{children:"Android"})]}),Object(h.jsxs)("p",{id:"Ath",children:[Object(h.jsx)("li",{children:Object(h.jsx)("b",{children:Object(h.jsx)("a",{children:"\xa9 Athfix info 2021"})})}),Object(h.jsx)("li",{children:"Help"}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{style:{color:"white"},href:"/Privacy",children:"Privacy"})})]}),Object(h.jsxs)("p",{id:"Follow",children:[Object(h.jsx)("n",{children:"Follow us on"}),Object(h.jsx)("br",{}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",class:"bi bi-youtube",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"})})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",class:"bi bi-facebook",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",class:"bi bi-twitter",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})})})})]})]}),Object(h.jsx)("div",{className:"comp",children:Object(h.jsx)("p",{className:"down",children:"X"})})]})};a()("document").ready((function(){var t=!0,e=!0,i=!0,l=!0;a()("#menu").click((function(){1==t?(a()("#menuBar").attr("style","left:0px"),a()(".App").attr("style","position:fixed")):(a()("#menuBar").attr("style","left:-300px"),a()(".App").attr("style","position:absolute"),a()("#setting li").attr("style","margin-left:85px;"),setTimeout((function(){a()("#setting").attr("style","width:0px")}),1e3),a()("#resource li").attr("style","margin-left:85px;"),setTimeout((function(){a()("#resource").attr("style","width:0px")}),1e3),a()("#quiz").attr("style","margin-left:85px;"),setTimeout((function(){a()("#quiz li").attr("style","width:0px")}),1e3),a()("#BrekTime").height("0px"),e=i=l=s=!0),t=!t})),a()("#menuBar li:nth-child(2)").click((function(){1==e?(a()("#setting").attr("style","width:80px"),a()("#setting li").attr("style","margin-left:15px;"),a()("#quiz").attr("style","margin-left:85px;"),setTimeout((function(){a()("#quiz li").attr("style","width:0px")}),1e3),a()("#resource li").attr("style","margin-left:85px;"),setTimeout((function(){a()("#resource").attr("style","width:0px")}),1e3),i=l=!0):(a()("#setting li").attr("style","margin-left:85px;"),setTimeout((function(){a()("#setting").attr("style","width:0px")}),1e3)),e=!e})),a()("#menuBar li:nth-child(4)").click((function(){1==i?(a()("#quiz").attr("style","width:140px"),a()("#quiz li").attr("style","margin-left:15px;"),a()("#setting li").attr("style","margin-left:85px;"),setTimeout((function(){a()("#setting").attr("style","width:0px")}),1e3),a()("#resource li").attr("style","margin-left:85px;"),setTimeout((function(){a()("#resource").attr("style","width:0px")}),1e3),e=l=!0):(a()("#quiz").attr("style","margin-left:85px;"),setTimeout((function(){a()("#quiz li").attr("style","width:0px")}),1e3)),i=!i})),a()("#menuBar li:nth-child(3)").click((function(){1==l?(a()("#resource").attr("style","width:80px"),a()("#resource li").attr("style","margin-left:15px;"),a()("#setting li").attr("style","margin-left:85px;"),setTimeout((function(){a()("#setting").attr("style","width:0px")}),1e3),a()("#quiz").attr("style","margin-left:85px;"),setTimeout((function(){a()("#quiz li").attr("style","width:0px")}),1e3),e=i=!0):(a()("#resource li").attr("style","margin-left:85px;"),setTimeout((function(){a()("#resource").attr("style","width:0px")}),1e3)),l=!l})),a()("#setting li:nth-child(1)").mouseover((function(){a()(".ed").attr("style","opacity:1"),setTimeout((function(){a()(".ed").attr("style","opacity:0")}),1e3)})),a()("#setting li:nth-child(2)").mouseover((function(){a()(".Be").attr("style","opacity:1"),setTimeout((function(){a()(".Be").attr("style","opacity:0")}),1e3)})),a()("#setting li:nth-child(3)").mouseover((function(){a()(".No").attr("style","opacity:1"),setTimeout((function(){a()(".No").attr("style","opacity:0")}),1e3)})),a()("#resource li:nth-child(1)").mouseover((function(){a()(".ot").attr("style","opacity:1"),setTimeout((function(){a()(".ot").attr("style","opacity:0")}),1e3)})),a()("#resource li:nth-child(2)").mouseover((function(){a()(".Bo").attr("style","opacity:1"),setTimeout((function(){a()(".Bo").attr("style","opacity:0")}),1e3)})),a()("#resource li:nth-child(3)").mouseover((function(){a()(".Po").attr("style","opacity:1"),setTimeout((function(){a()(".Po").attr("style","opacity:0")}),1e3)}));var s=!0;a()("#setting li:nth-child(2)").click((function(){1==s?a()("#BrekTime").height("180px"):a()("#BrekTime").height("0px"),s=!s}));var c=96e4;a()("#BrekTime li:nth-child(1)").click((function(){c=96e4,a()("#BrekTime li:nth-child(1)").attr("style","color:white;background:black;"),a()("#BrekTime li:nth-child(3),#BrekTime li:nth-child(2)").attr("style","color:black;background:white;")})),a()("#BrekTime li:nth-child(2)").click((function(){c=156e4,a()("#BrekTime li:nth-child(2)").attr("style","color:white;background:black;"),a()("#BrekTime li:nth-child(1),#BrekTime li:nth-child(3)").attr("style","color:black;background:white;")})),a()("#BrekTime li:nth-child(3)").click((function(){a()("#BrekTime li:nth-child(3)").attr("style","color:white;background:black;"),a()("#BrekTime li:nth-child(1),#BrekTime li:nth-child(2)").attr("style","color:black;background:white;"),c=216e4})),a()("#videoInterface").click((function(){setTimeout((function(){a()("#none").attr("src","http://ellisonleao.github.io/clumsy-bird/"),a()("#alertMess").attr("style","width:500px;height:400px"),a()(window).width()<700&&a()("#alertMess").attr("style","width:80%;height:400px"),a()(window).width()<700&&a()("#alertMess").attr("style","width:95%;height:350px")}),c),setTimeout((function(){a()("#alertMess").attr("style","width:0px;height:0px"),a()("#none").attr("src","none"),a()(window).width()<700&&a()("#alertMess").attr("style","width:80%;height:400px")}),3e5)})),a()("#red").click((function(){a()("#alertMess").attr("style","width:0px;height:0px"),a()("#none").attr("src","none")})),a()("#yellow").click((function(){a()("#alertMess").attr("style","width:50%;height:60%")})),a()("#green").click((function(){a()(window).width()<700&&a()("#alertMess").attr("style","width:200px;height:150px"),a()("#alertMess").attr("style","width:500px;height:400px")})),a()("#cut").click((function(){a()("form").attr("style","width:0px;height:0px")})),a()("#exp").click((function(){a()("form").attr("style","width:60%;height:75%")})),a()("#line").click((function(){a()("form").attr("style","width:30%;height:75%"),a()(window).width()<1e3&&a()(window).width()>400&&a()("form").attr("style","width:80%;height:75%;"),a()(window).width()<400&&a()("form").attr("style","width:95%;height:75%;")})),a()("#setting li:nth-child(3),#menuBar li:nth-child(7)").click((function(){a()("form").attr("style","width:30%;height:75%"),a()(window).width()<1e3&&a()(window).width()>400&&a()("form").attr("style","width:80%;height:85%"),a()(window).width()<400&&a()("form").attr("style","width:95%;height:75%")}))}));var n=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"logo",children:"Athfix"}),Object(h.jsx)("svg",{id:"menu",xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"lightgreen",class:"bi bi-columns-gap",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"})})]}),Object(h.jsxs)("div",{id:"menuBar",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("svg",{id:"men",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"orange",class:"bi bi-house-door-fill",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"})}),Object(h.jsx)("a",{href:"https://athfix.github.io/AthfixHome",children:"Home"})]}),Object(h.jsxs)("li",{children:[Object(h.jsxs)("svg",{id:"men",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"orange",class:"bi bi-gear",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}),Object(h.jsx)("path",{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"})]}),"Settings"]}),Object(h.jsxs)("li",{children:[Object(h.jsxs)("svg",{id:"men",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"orange",class:"bi bi-journal-arrow-down",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z"}),Object(h.jsx)("path",{d:"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"}),Object(h.jsx)("path",{d:"M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"})]}),"Resource"]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("svg",{id:"men",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"orange",class:"bi bi-signpost-fill",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M7.293.707A1 1 0 0 0 7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414A1 1 0 0 0 7.293.707z"})}),"Completion"]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("svg",{id:"men",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"orange",class:"bi bi-shield-fill-check",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"})}),Object(h.jsx)("a",{href:" https://athfix.github.io/Privacy/",children:"Privacy"})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{id:"men",width:"40px",src:"https://cdn-icons-png.flaticon.com/128/232/232416.png"}),Object(h.jsx)("a",{href:"https://www.makeuseof.com/tag/top-10-professional-sample-code-websites-for-programmers/",children:"Google it"})]}),Object(h.jsx)("li",{children:"Feed back"})]}),Object(h.jsxs)("div",{id:"setting",children:[Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"https://stackblitz.com/edit/js-asdpck",children:[Object(h.jsx)("l",{className:"ed",children:"editor"}),Object(h.jsx)("svg",{style:{marginTop:"10px"},xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",class:"bi bi-code-slash",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"})})]})}),Object(h.jsxs)("li",{children:[Object(h.jsx)("l",{className:"Be",style:{marginTop:"50px"},children:"Break"}),Object(h.jsx)("svg",{style:{marginTop:"10px"},xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-alarm-fill",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z"})})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("l",{className:"No",style:{marginTop:"50px"},children:"notify"}),Object(h.jsx)("svg",{style:{marginTop:"10px"},xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-bell-fill",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"})})]})]}),Object(h.jsxs)("div",{id:"quiz",children:[Object(h.jsx)("li",{children:"Quiz"}),Object(h.jsx)("li",{children:"Project"})]}),Object(h.jsxs)("div",{id:"resource",children:[Object(h.jsx)("li",{children:Object(h.jsxs)("a",{style:{color:"white"},href:"https://athfix.github.io/NotesOfHTML/",children:[Object(h.jsx)("k",{className:"ot",children:"Notes"}),Object(h.jsxs)("svg",{style:{marginTop:"10px",marginLeft:"10px"},xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-journal-text",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{d:"M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"}),Object(h.jsx)("path",{d:"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"}),Object(h.jsx)("path",{d:"M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"})]})]})}),Object(h.jsxs)("li",{children:[Object(h.jsx)("k",{className:"Bo",children:"Book"}),Object(h.jsx)("a",{href:"https://drive.google.com/drive/folders/1QR_3DbJFQ0tIaVzWkVdQJ8SMUMvtv60h?usp=sharing",children:Object(h.jsxs)("svg",{style:{marginTop:"10px",marginLeft:"10px"},xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",class:"bi bi-journal-bookmark-fill",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"}),Object(h.jsx)("path",{d:"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"}),Object(h.jsx)("path",{d:"M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"})]})})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("k",{className:"Po",children:"Project"}),Object(h.jsx)("a",{href:"https://github.com/its-shashankY/image-slider",children:Object(h.jsx)("svg",{style:{marginTop:"10px",marginLeft:"10px"},xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",class:"bi bi-github",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})})]})]}),Object(h.jsxs)("div",{id:"BrekTime",children:[Object(h.jsx)("li",{children:"30"}),Object(h.jsx)("li",{children:"40"}),Object(h.jsx)("li",{children:"50"})]}),Object(h.jsxs)("div",{id:"alertMess",children:[Object(h.jsx)("o",{children:"It's a Time break"}),Object(h.jsx)("p",{id:"red",children:"X"}),Object(h.jsx)("p",{id:"yellow",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",fill:"currentColor",class:"bi bi-square",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"})})}),Object(h.jsx)("p",{id:"green",children:"-"}),Object(h.jsx)("iframe",{id:"none",style:{width:"100%",height:"90%",marginTop:"10%"},src:"http://ellisonleao.github.io/clumsy-bird/"})]}),Object(h.jsxs)("form",{action:"mailto:officialathfix@gmail.com",method:"post",enctype:"multipart/form-data",children:[Object(h.jsx)("p",{id:"cut",children:"X"}),Object(h.jsx)("p",{id:"exp",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"11",fill:"currentColor",class:"bi bi-square",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"})})}),Object(h.jsx)("p",{id:"line",children:"-"}),Object(h.jsxs)("div",{id:"fill",children:[Object(h.jsx)("label",{children:"Name: "}),Object(h.jsx)("input",{type:"text",className:"name"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Email: "}),Object(h.jsx)("input",{type:"email",className:"email"}),Object(h.jsx)("br",{}),Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"Your Query goes here"}),Object(h.jsx)("textarea",{style:{marginTop:"30px"},rows:"10",cols:"40"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",id:"sub",value:"submit"})]})]}),Object(h.jsx)(r,{})]})};s.a.render(Object(h.jsx)(n,{}),document.getElementById("root"))},9:function(t,e,i){}},[[12,1,2]]]);
//# sourceMappingURL=main.c9125824.chunk.js.map