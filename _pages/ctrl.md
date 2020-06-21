---
layout: blank
title: CTRL
permalink: /ctrl
---

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IΛCO VIVΛCI</title>
    <link rel="stylesheet" href="../config/hi.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
</head>
<body>
    <ul>
        <a href="https://ticktick.com">
            <i class='far fa-check-circle fa-2x'></i>
        </a>
        &nbsp;
        <a href="https://www.ovh.com/fr/mail">
            <span class="fa-stack" style="vertical-align: top;">
                <i class="fas fa-envelope fa-stack-2x"></i>
                <i class="fas fa-info-circle fa-stack-1x" style="color: black"></i>
            </span>
        </a>
        <a href="https://gmail.com">
            <span class="fa-stack" style="vertical-align: top;">
                <i class="fas fa-envelope fa-stack-2x"></i>
                <i class="fas fa-circle fa-stack-1x" style="color: black"></i>
                <i class="fab fa-google fa-stack-1x fa-xs" style="color: white"></i>
            </span>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://web.whatsapp.com">
            <i class='fab fa-whatsapp fa-2x'></i>
        </a>
        &nbsp;
        <a href="https://www.messenger.com">
            <i class='fab fa-facebook-messenger fa-2x'></i>
        </a>
        <a href="https://www.instagram.com/direct/inbox">
            <span class="fa-stack" style="vertical-align: top;">
                <i class="fab fa-facebook-messenger fa-stack-2x"></i>
                <i class="fas fa-circle fa-stack-1x fa-lg" style="color: white"></i>
                <i class="fab fa-instagram fa-stack-1x fa-lg" style="color: black"></i>
            </span>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.facebook.com/profile">
            <i class='fab fa-facebook fa-2x'></i>
        </a>
        <a href="https://iaco.me/facebook">
            <span class="fa-stack" style="vertical-align: top;">
                <i class="fas fa-file fa-stack-2x"></i>
                <i class="fab fa-facebook-f fa-stack-1x" style="color: black"></i>
            </span>
        </a>
        <hr style="width: 30%;">
    </ul>

    <ul id="list"></ul>

    <script src="../config/jquery/jquery.min.js"></script>
    <script>
        var links = [
            ["hi@iaco.me", "https://www.ovh.com/fr/mail", "fa fa-envelope"],
            ["Chrome Dark Mode", "chrome://flags", "fa fa-flag"],
            ["IΛCO.me", "https://iaco.me", "fa fa-rocket"],
            ["VIVΛCI.LIFE Project", "https://vivaci.life", "far fa-heart"],
            ["7h15 <i class='fa fa-bus'></i> Condillac", "https://www.transisere.fr/fr/horaires-a-larret/28/StopSchedules/condillac-universites/30626/gieres-campus-montbonnot-bernin/80/bernin-montbonnot-saint-martin/1?Date=27%2F12%2F2018&PhysicalId=15279", "fa fa-briefcase"],
            ["16h10 <i class='fa fa-bus'></i> Norbert Segard", "https://www.transisere.fr/fr/horaires-a-larret/28/StopSchedules/norbert-segard-cnet/43647/gieres-campus-montbonnot-bernin/80/gieres/2?Date=27%2F12%2F2018&PhysicalId=12069", "fa fa-home"],
            ["Cronometer", "https://cronometer.com", "fa fa-apple-alt"],
            ["iago-food-1w", "https://lite.framacalc.org/iago-food-1w", "fa fa-carrot"]
        ];
        for(l of links) {
            $("#list").append(
                "<li class='i-s'>"+
                "<a href='"+l[1]+"'>"+
                "<div class='logo'><!-- <img src='config/images/avatars/1.jpg' width='48' /> -->"+
                "<i class='"+(l[2] ? l[2] : "far fa-hand-pointer fa-rotate-90")+" fa-2x'></i>"+
                "</div>"+
                "<p class='title'>"+
                l[0]+
                "<span>"+l[1]+"</span>"+
                "</p>"+
                "</a>"+
                "</li>");
        }
    </script>

    <ul>
        <li class='i-s'>
            <a href>
                <div class='logo'>
                    <i class='fas fa-calendar-check fa-2x'></i>
                </div>
                <p class='title'>
                    <span id="gym">_</span>💪 Gymshark<br>
                    <span id="vegan">_</span>🌱 Vegan<br>
                    <span id="sleepmaster">_</span>😴 Sleepmaster<br>
                </p>
            </a>
        </li>
        <li class='i-s'>
            <a href>
                <div class='logo'>
                    <i class='fas fa-calendar-alt fa-2x'></i>
                </div>
                <p class='title'>
                    <span id="iaco2030">_</span>🐢 IΛCO 2030<br>
                    <span id="vivaci2100">_</span>🌲 VIVΛCI 2100<br>
                    <span id="iacovivaci3000">_</span>🔮 IΛCO VIVΛCI 3000<br>
                </p>
            </a>
        </li>
    </ul>

    <script>
    window.onload = function() {
      countUpFromTime("2018-06-28", 'gym', 'd');
      countUpFromTime("2019-02-28", 'vegan', 'd');
      countUpFromTime("2020-04-28", 'sleepmaster', 'd');

      countUpFromTime("2100-01-01", 'vivaci2100', 'w');
      countUpFromTime("2030-01-01", 'iaco2030', 'w');
      countUpFromTime("3000-01-01", 'iacovivaci3000', 'w');
    };
    function countUpFromTime(countFrom, id, type) {
      txtdate = countFrom;
      countFrom = new Date(countFrom).getTime();
      var now = new Date(),
          countFrom = new Date(countFrom),
          timeDifference = (now - countFrom);

      var secondsInADay = 60 * 60 * 1000 * 24,
          secondsInAHour = 60 * 60 * 1000;

      days = Math.floor(timeDifference / (secondsInADay) * 1);
      hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
      mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
      secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

      weeks = Math.floor(days / 7);

      if(type == 'd') var idEl = document.getElementById(id).innerHTML = Math.abs(days) + " days (" + txtdate + ")";
      if(type == 'w') var idEl = document.getElementById(id).innerHTML = Math.abs(weeks) + " weeks (" + txtdate + ")";

      //idEl.getElementsByClassName('days')[0].innerHTML = days;
      //idEl.getElementsByClassName('hours')[0].innerHTML = hours;
      //idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
      //idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

      //clearTimeout(countUpFromTime.interval);
      //countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
    }
    </script>
</body>
</html>
