  
import './Home.css';
import $ from "jquery";

function Home(){
    return(<><p style={{position:"absolute"}} id="wid"></p>
    <div id="videoInterface">
  <iframe id="iframe" width="540" height="315" src="https://www.youtube.com/embed/npxhI9-Vi4A"
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
       </iframe>
       <p id="next"><svg style={{marginLeft:"5px",marginTop:"10px"}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></p><p id="back"><svg style={{marginLeft:"5px",marginTop:"10px"}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg></p>
        </div>
        <p id="head">Playlist</p>
        <div id="playList">
            <li>Structure of HTML and Tags, Use of VS code</li>
            <li>Attribute,Image,link,list,Image,table,<br/>forms in HTML</li>
            <li>Attribute,Image,link,list,Image,table,<br/>forms in VS code</li>
            <li>Audio, video, progress in HTML5</li>
            <li>SVG animation using VS code</li>
            <li>SVG polyline, ellipse, polygon, canvas, forms in HTML5</li>
            <li>Forms and types of input in HTML5</li>
        </div>
        <div id="NotesPlat">
<iframe id="Notes" src="https://athfix.github.io/IntroductionToHTML/"></iframe>     
</div>

<div id="editor">
    <svg id="pButton" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" class="bi bi-power" viewBox="0 0 16 16">
  <path d="M7.5 1v7h1V1h-1z"/>
  <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
</svg>
<iframe className="frame" src="https://stackblitz.com/edit/js-eauwuo?file=index.html"></iframe>
</div>

<div id="ad">
  <p id="adText">If you are intrested in the courses you can visit the athfix info store and explore it to grab new courses
  <p id="click">Athfix store</p></p>
</div>

<footer>
  <p id="Teaching">
    <n>Explore</n>
    <li>Creative</li>
    <li>Teacher</li>
    <li>Books</li>
  </p>

  <p id="App">
    <n>Get our apps</n>
    <li>IOS</li>
    <li>Android</li>
  </p>

  <p id="Ath">
    <li><b><a>© Athfix info 2021</a></b></li>
    <li>Help</li>
    <li><a style={{color:"white"}} href="/Privacy">Privacy</a></li>
  </p>

  <p id="Follow">
    <n>Follow us on</n><br/>
    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg></a></li>
    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg></a></li>
    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg></a></li>
  </p>
</footer>
  
  <div className="comp">
    <p className="down">X</p>
  </div>
</>)
}



$(document).ready(function(){
   $("#videoInterface").mouseover(function(){
     $("#next,#back").attr("style","display:block");
     setTimeout(()=>{
      $("#next,#back").attr("style","display:none");
     },5000);
   })


   var editor=true;
   $("#pButton").click(function(){
      if(editor==true){
        $("#editor").attr("style","height:600px");
        $(".frame").attr("style","height:550px");
        $("#pButton").attr("style","color:lightgreen");
      }
      else{
        $("#editor").attr("style","height:50px");
        $(".frame").attr("style","height:0px");
        $("#pButton").attr("style","color:white")
      }
      editor=!editor;
   })

   var head=true;
  $("#head").click(function(){
      if(head==true){
        $("#playList").height("300px");
      }
      else{
        $("#playList").height("0px");
        if($(window).width()>1000){
          $("#playList").height("100px");
        }
      }
      head=!head;
  })
 
  var frameLink=["https://www.youtube.com/embed/npxhI9-Vi4A","https://www.youtube.com/embed/Ydz-zLmOgQY"
  ,"https://www.youtube.com/embed/uXAd5VycRw0","https://www.youtube.com/embed/eLXqFer0DjI"
  ,"https://www.youtube.com/embed/SOrAdTnwGwQ","https://www.youtube.com/embed/siV-VEW4010",
   "https://www.youtube.com/embed/xx8Sf3R13A8"];

   var NoteLink=["https://athfix.github.io/IntroductionToHTML/","https://athfix.github.io/AttributesAsStart/",
     "https://athfix.github.io/tablesStart/","https://athfix.github.io/IntroductionToHTML5/","https://athfix.github.io/AnimationsInHTML/",
    "https://athfix.github.io/CanvasInHTML/","https://athfix.github.io/FormsInHTML5/"]

  var count=0;
   $("#next").click(function(){
     count++;
     if(count>=frameLink.length){
       count=frameLink.length-1;
       $(".comp").attr("style","width:300px;height:330px");
    }
     $("#iframe").attr("src",frameLink[count]);
     $("#Notes").attr("src",NoteLink[count]);
     $("#playList li:nth-child("+(count+1)+")").attr("style","background:lightgrey");
   })

   $("#back").click(function(){
     count--;
     if(count<0){count=0}
     $("#iframe").attr("src",frameLink[count]);
     $("#Notes").attr("src",NoteLink[count]);
   })


   $(".down").click(function(){
     $(".comp").attr("style","width:0px;height:0px");
   })


})


export default Home;