---
layout: blank
title: SpeakEat
permalink: /orglife
---

<html>
  <head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <script src="/config/jquery/jquery.min.js"></script>
    <script>window.onclick = ()=>{var r=$('#rain')[0];r.play();$('#intro-text').hide();window.onclick=null;}</script>
  </head>
  <body style="background-image: url('/assets/images/vivaci-bg/rain.gif'); background-size: cover;">
    <center>
    <div style="width: 750px; height: 23px; text-align: right;">
      <span
        onclick="$('.bar').toggle();var h=$('#hide-button');h.toggleClass('fa-chevron-right');h.toggleClass('fa-chevron-left');"
        style="color: gray;">
        <span id="intro-text" style="font-family: tahoma; font-size: 10px;">THIS IS YOUR SAFE SPACE&nbsp;</span>
        <i id="hide-button" class="fas fa-chevron-left fa-xs"></i>
      </span>
      <span class="bar"
        onclick=""
        style="color: gray; display: none;">
        &nbsp;&nbsp;&nbsp;
        <i class="fas fa-sticky-note fa-xs"></i>
      </span>
      <span class="bar"
        onclick=""
        style="color: gray; display: none;">
        <i class="fas fa-tasks fa-xs"></i>
      </span>
      <span class="bar"
        onclick=""
        style="color: gray; display: none;">
        <i class="fas fa-rocket fa-xs"></i>
      </span>
      <span class="bar"
        onclick=""
        style="color: gray; display: none;">
        <i class="fas fa-mountain fa-xs"></i>
      </span>
      <span class="bar"
        onclick=""
        style="color: gray; display: none;">
        <i class="fas fa-pen-fancy fa-xs"></i>
      </span>
      <span class="bar"
        onclick="var i=$('#iframe');if(i.width()==750){i.width('1000px');i.height('700px');}else{if(i.width()==1000){i.width('1200px');i.height('800px');}else{i.width('750px');i.height('600px');}}"
        style="color: gray; display: none;">
        &nbsp;&nbsp;&nbsp;
        <i class="fas fa-expand fa-xs"></i>
      </span>
      <span class="bar"
        onclick="var i=$('#iframe');i.toggle();"
        style="color: gray; display: none;">
        <i class="fas fa-circle-notch fa-xs"></i>
      </span>
      <span class="bar"
        onclick="var r=$('#rain')[0];r.paused ? r.play() : r.pause();"
        style="color: gray; display: none;">
        <i class="fab fa-itunes-note fa-xs"></i>
      </span>
    </div>
    <iframe
      src="https://ticktick.com/webapp/#p/5e3984078f08eb2e69f9d38d/tasks/5f94a56bab4cd124dba9c1e4"
      id="iframe" style="width: 750px; max-width: 90vw; height: 600px; max-height: 90vh; border: 0; display: none;">
    </iframe>
    <br>
    <audio src="/assets/audio/rain.mp3"
      id="rain" autoplay loop>
    </audio>
    </center>
  </body>
</html>
