---
layout: blank
title: SpeakEat
permalink: /orglife
---

<html>
  <head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <script src="jquery.min.js"></script>
  </head>
  <body style="background-image: url('c2445dd759cf52be7e37d294c62d730e.gif'); background-size: cover;">
    <center>
    <div style="width: 750px; height: 23px; text-align: right;">
      <span
        onclick="$('.bar').toggle();var h=$('#hide-button');h.toggleClass('fa-chevron-right');h.toggleClass('fa-chevron-left');"
        style="color: gray;">
        <i id="hide-button" class="fas fa-chevron-left fa-xs"></i>
      </span>
      <span class="bar"
        onclick="var i=$('#iframe');if(i.width()==750){i.width('1000px');i.height('700px');}else{if(i.width()==1000){i.width('1200px');i.height('800px');}else{i.width('750px');i.height('600px');}}"
        style="color: gray; display: none;">
        <i class="fas fa-expand fa-xs"></i>
      </span>
      <span class="bar"
        onclick="var i=$('#iframe');i.width('750px');i.height('600px');i.toggle();"
        style="color: gray; display: none;">
        <i class="far fa-circle fa-xs"></i>
      </span>
      <span class="bar"
        onclick="var r=$('#rain')[0];r.paused ? r.play() : r.pause();"
        style="color: gray; display: none;">
        <i class="fas fa-cloud-showers-heavy fa-xs"></i>
      </span>
    </div>
    <iframe
      src="https://ticktick.com/webapp/#p/5e3984078f08eb2e69f9d38d/tasks/5f94a56bab4cd124dba9c1e4"
      id="iframe" style="width: 750px; max-width: 90vw; height: 600px; max-height: 90vh; border: 0; display: none;">
    </iframe>
    <br>
    <audio src="zapsplat_nature_thunderstorm_close_windy_driving_rain_thunder_rumbles_and_light_cracks_57912.mp3"
      id="rain" autoplay loop>
    </audio>
    <script>var r=$('#rain')[0];r.play();</script>
    </center>
  </body>
</html>
