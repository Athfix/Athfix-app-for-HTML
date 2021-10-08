
import './App.css';
import $ from "jquery";
import Home from './Home';

function App() {
  return (<>
     <div className="App">
       <div className="logo">Athfix</div>
       <svg id="menu" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="lightgreen" class="bi bi-columns-gap" viewBox="0 0 16 16">
  <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
</svg> 
    </div>
    <div id="menuBar">
      <li><svg id="men" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="orange" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
</svg><a href="https://athfix.github.io/AthfixHome">Home</a></li>
      <li><svg id="men" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="orange" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg>Settings</li>
      <li><svg id="men" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="orange" class="bi bi-journal-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg>Resource</li>
      <li><svg id="men" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="orange" class="bi bi-signpost-fill" viewBox="0 0 16 16">
  <path d="M7.293.707A1 1 0 0 0 7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414A1 1 0 0 0 7.293.707z"/>
</svg>Completion</li>
      <li><svg id="men" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="orange" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
</svg><a href=" https://athfix.github.io/Privacy/">Privacy</a></li>
      <li><img id="men" width="40px" src={"https://cdn-icons-png.flaticon.com/128/232/232416.png"}/><a href="https://www.makeuseof.com/tag/top-10-professional-sample-code-websites-for-programmers/">Google it</a></li>
    <li>Feed back</li>
    </div>

    <div id="setting">
      <li><a href="https://stackblitz.com/edit/js-asdpck"><l className="ed">editor</l><svg  style={{marginTop:"10px"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-code-slash" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
</svg></a></li>
      <li><l className="Be" style={{marginTop:"50px"}}>Break</l><svg style={{marginTop:"10px"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-alarm-fill" viewBox="0 0 16 16">
  <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z"/>
</svg></li>
      <li><l className="No" style={{marginTop:"50px"}}>notify</l><svg style={{marginTop:"10px"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg></li>
    </div>
    <div id="quiz">
      <li>Quiz</li>
      <li>Project</li>
    </div>

    <div id="resource">
      <li><a style={{color:"white"}} href="https://athfix.github.io/NotesOfHTML/"><k className="ot">Notes</k><svg style={{marginTop:"10px",marginLeft:"10px"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
  <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg></a></li>
      <li><k className="Bo">Book</k><a href="https://drive.google.com/drive/folders/1QR_3DbJFQ0tIaVzWkVdQJ8SMUMvtv60h?usp=sharing"><svg style={{marginTop:"10px",marginLeft:"10px"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg></a></li>
      <li><k className="Po">Project</k><a href="https://github.com/its-shashankY/image-slider"><svg style={{marginTop:"10px",marginLeft:"10px"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a></li>
    </div>

    <div id="BrekTime">
      <li>30</li>
      <li>40</li>
      <li>50</li>
    </div>

  <div id="alertMess">
    <o>It's a Time break</o>
      <p id="red">X</p>
      <p id="yellow"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
</svg></p>
      <p id="green">-</p>
      <iframe id="none" style={{width:"100%",height:"90%",marginTop:"10%"}} src="http://ellisonleao.github.io/clumsy-bird/"></iframe>
  </div>


  <form action="mailto:officialathfix@gmail.com" method="post" enctype="multipart/form-data">
    <p id="cut">X</p>
    <p id="exp"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
</svg></p>
    <p id="line">-</p>
     <div id="fill"><label>Name: </label><input type="text" className="name"/><br/>
     <label>Email: </label><input type="email" className="email"/><br/>
     <fieldset><legend>Your Query goes here</legend><textarea style={{marginTop:"30px"}} rows="10" cols="40"/></fieldset><br/>
     <input type="submit" id="sub" value="submit"/>
    </div></form>
    <Home/>
  </>);
}


$("document").ready(function(){
  var menu=true;var set=true;var quiz=true;var resou=true;
    $("#menu").click(function(){
       if(menu==true){
         $("#menuBar").attr("style","left:0px");
         $(".App").attr("style","position:fixed");         
       }
       else{
        $("#menuBar").attr("style","left:-300px");
        $(".App").attr("style","position:absolute");
        $("#setting li").attr("style","margin-left:85px;");
         setTimeout(()=>{$("#setting").attr("style","width:0px")},1000);
         $("#resource li").attr("style","margin-left:85px;");
         setTimeout(()=>{$("#resource").attr("style","width:0px")},1000);
         $("#quiz").attr("style","margin-left:85px;");
         setTimeout(()=>{$("#quiz li").attr("style","width:0px")},1000);
         $("#BrekTime").height("0px");
         set=quiz=resou=brek=true;   
       }
       menu=!menu;
    })
  
    $("#menuBar li:nth-child(2)").click(function(){
      if(set==true){
        $("#setting").attr("style","width:80px");
        $("#setting li").attr("style","margin-left:15px;");
        $("#quiz").attr("style","margin-left:85px;");
     setTimeout(()=>{$("#quiz li").attr("style","width:0px")},1000);
     $("#resource li").attr("style","margin-left:85px;");
     setTimeout(()=>{$("#resource").attr("style","width:0px")},1000);
     quiz=resou=true;
      }
      else{
        $("#setting li").attr("style","margin-left:85px;");
     setTimeout(()=>{$("#setting").attr("style","width:0px")},1000);
       }
      set=!set;
    })
    
    $("#menuBar li:nth-child(4)").click(function(){
      if(quiz==true){
        $("#quiz").attr("style","width:140px");
        $("#quiz li").attr("style","margin-left:15px;");
        $("#setting li").attr("style","margin-left:85px;");
        setTimeout(()=>{$("#setting").attr("style","width:0px")},1000);
        $("#resource li").attr("style","margin-left:85px;");
        setTimeout(()=>{$("#resource").attr("style","width:0px")},1000);   
        set=resou=true;   
      }
      else{
        $("#quiz").attr("style","margin-left:85px;");
     setTimeout(()=>{$("#quiz li").attr("style","width:0px")},1000);
       }
      quiz=!quiz;
    })

    $("#menuBar li:nth-child(3)").click(function(){
      if(resou==true){
        $("#resource").attr("style","width:80px");
        $("#resource li").attr("style","margin-left:15px;");
        $("#setting li").attr("style","margin-left:85px;");
        setTimeout(()=>{$("#setting").attr("style","width:0px")},1000);
        $("#quiz").attr("style","margin-left:85px;");
        setTimeout(()=>{$("#quiz li").attr("style","width:0px")},1000);   
        set=quiz=true;   
      }
      else{
        $("#resource li").attr("style","margin-left:85px;");
     setTimeout(()=>{$("#resource").attr("style","width:0px")},1000);
       }
      resou=!resou;
    })
   

    $("#setting li:nth-child(1)").mouseover(function(){
      $(".ed").attr("style","opacity:1");
      setTimeout(()=>{ $(".ed").attr("style","opacity:0");},1000);
    })
     
    $("#setting li:nth-child(2)").mouseover(function(){
      $(".Be").attr("style","opacity:1");
      setTimeout(()=>{ $(".Be").attr("style","opacity:0");},1000);
    })

    $("#setting li:nth-child(3)").mouseover(function(){
      $(".No").attr("style","opacity:1");
      setTimeout(()=>{ $(".No").attr("style","opacity:0");},1000);
    })

    $("#resource li:nth-child(1)").mouseover(function(){
      $(".ot").attr("style","opacity:1");
      setTimeout(()=>{ $(".ot").attr("style","opacity:0");},1000);
    })

    $("#resource li:nth-child(2)").mouseover(function(){
      $(".Bo").attr("style","opacity:1");
      setTimeout(()=>{ $(".Bo").attr("style","opacity:0");},1000);
    })

    $("#resource li:nth-child(3)").mouseover(function(){
      $(".Po").attr("style","opacity:1");
      setTimeout(()=>{ $(".Po").attr("style","opacity:0");},1000);
    })

      var brek=true;
    $("#setting li:nth-child(2)").click(function(){
       if(brek==true){ $("#BrekTime").height("180px");}
       else{ $("#BrekTime").height("0px");}
       brek=!brek;
    })
  
    var time=960000;
    $("#BrekTime li:nth-child(1)").click(function(){
      time=960000;
      $("#BrekTime li:nth-child(1)").attr("style","color:white;background:black;");
      $("#BrekTime li:nth-child(3),#BrekTime li:nth-child(2)").attr("style","color:black;background:white;");
    });

    $("#BrekTime li:nth-child(2)").click(function(){
      time=1560000;
      $("#BrekTime li:nth-child(2)").attr("style","color:white;background:black;");
      $("#BrekTime li:nth-child(1),#BrekTime li:nth-child(3)").attr("style","color:black;background:white;");
    });

    $("#BrekTime li:nth-child(3)").click(function(){
      $("#BrekTime li:nth-child(3)").attr("style","color:white;background:black;");
      $("#BrekTime li:nth-child(1),#BrekTime li:nth-child(2)").attr("style","color:black;background:white;");
       time=2160000;
    });

  $("#videoInterface").click(function(){
   setTimeout(()=>{
    $("#none").attr("src","http://ellisonleao.github.io/clumsy-bird/");
      $("#alertMess").attr("style","width:500px;height:400px");
      if($(window).width()<700){$("#alertMess").attr("style","width:80%;height:400px");}
    if($(window).width()<700){
      $("#alertMess").attr("style","width:95%;height:350px");
    }
    },time);


   setTimeout(()=>{
    $("#alertMess").attr("style","width:0px;height:0px");
    $("#none").attr("src","none");
    if($(window).width()<700){$("#alertMess").attr("style","width:80%;height:400px");}
 },300000)
  })
    
  $("#red").click(function(){
    $("#alertMess").attr("style","width:0px;height:0px");
    $("#none").attr("src","none");
  })

  $("#yellow").click(function(){
    $("#alertMess").attr("style","width:50%;height:60%");
  })

  $("#green").click(function(){
    if($(window).width()<700){$("#alertMess").attr("style","width:200px;height:150px");}
    $("#alertMess").attr("style","width:500px;height:400px");
  })

  $("#cut").click(function(){
    $("form").attr('style','width:0px;height:0px');
  })

  $("#exp").click(function(){
    $("form").attr('style','width:60%;height:75%');
  })
   
  $("#line").click(function(){
    $("form").attr('style','width:30%;height:75%');
    if($(window).width()<1000 && $(window).width()>400){
      $("form").attr('style','width:80%;height:75%;');
    }
    if( $(window).width()<400){
      $("form").attr('style','width:95%;height:75%;');
    }
  })

  $("#setting li:nth-child(3),#menuBar li:nth-child(7)").click(function(){
    $("form").attr('style','width:30%;height:75%');
    if($(window).width()<1000 && $(window).width()>400){
      $("form").attr('style','width:80%;height:300px');
    }
    if( $(window).width()<400){
      $("form").attr('style','width:95%;height:75%');
    }
  })

})
export default App;
