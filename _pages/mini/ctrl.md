---
layout: blank
title: CTRL
permalink: /ctrl
---

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
        <li class='i-s'>
            <a style="cursor: pointer;" onclick="document.location='https://www.timeanddate.com/calendar/custom.html?year='+new Date().getFullYear()+'&amp;country=5&amp;cols=0&amp;fdow=6&amp;wno=6&amp;wncs=2&amp;ctf=2&amp;wdf=1&amp;holmark=2&amp;hod=1&amp;hcl=1&amp;cdt=1&amp;ccg=1&amp;cci=6&amp;ccp=3&amp;ccu=10&amp;ccz=0&amp;cwd=2______2&amp;cwf=______&amp;holm=1&amp;doy=1&amp;dly=1&amp;hid=1&amp;typ=0&amp;display=3&amp;df=1'">
                <div class='logo'>
                    <i class='fas fa-history fa-2x'></i>
                </div>
                <script>
                    Date.prototype.getWeekNumber = function(){
                      var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
                      var dayNum = d.getUTCDay() || 7;
                      d.setUTCDate(d.getUTCDate() + 4 - dayNum);
                      var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
                      var w = Math.ceil((((d - yearStart) / 86400000) + 1)/7);
                      if(this.getDay() == 0 | this.getDay() == 6) w = w + 1;
                      return w;
                    };
                </script>
                <p class='title'>
                    <script>document.write(new Date().getFullYear());</script> 📆 <b id="yeardayspassed">_</b> → <b id="yeardaystogo">_</b><br>
                    <script>document.write(new Date().getFullYear());</script> 📆 <script>document.write(new Date().getWeekNumber());</script> <span>weeks</span> → <script>document.write(new Date(new Date().getFullYear(), 11, 31).getWeekNumber() - new Date().getWeekNumber());</script> <span>weeks</span><br>
                </p>
            </a>
        </li>
        <li class='i-s'>
            <a>
                <div class='logo'>
                    <i class='fas fa-star fa-2x'></i>
                </div>
                <p class='title'>
                    IΛCO 🌟 <b id="borndayspassed">_</b><br>
                    IΛCO 🌟 <b id="bornweekspassed">_</b><br>
                </p>
            </a>
        </li>
        <li class='i-s'>
            <a>
                <div class='logo'>
                    <i class='fas fa-calendar-check fa-2x'></i>
                </div>
                <p class='title'>
                    💪 <b id="gym">_</b><br>
                    🌱 <b id="vegan">_</b><br>
                    😴 <b id="sleepmaster">_</b>
                </p>
            </a>
        </li>
        <li class='i-s'>
            <a>
                <div class='logo'>
                    <i class='fas fa-user-astronaut fa-2x'></i>
                </div>
                <p class='title'>
                    🐢 <b id="iaco2030">_</b><br>
                    🌲 <b id="vivaci2100">_</b><br>
                    🔮 <b id="iacovivaci3000">_</b><br>
                </p>
            </a>
        </li>
    </ul>

    <script>
    window.onload = function() {
      countUpFromTime((new Date().getFullYear()-1)+"-12-31", 'yeardayspassed', 'd', false);
      countUpFromTime(new Date().getFullYear()+"-12-31", 'yeardaystogo', 'd', false);
      /*countUpFromTime((new Date().getFullYear()-1)+"-12-28", 'yearweekspassed', 'w', false);
      countUpFromTime((new Date().getFullYear()+1)+"-01-10", 'yearweekstogo', 'w', false);*/

      countUpFromTime("1994-01-31", 'borndayspassed', 'd');
      countUpFromTime("1994-01-31", 'bornweekspassed', 'w');

      countUpFromTime("2018-06-28", 'gym', 'd', true);
      countUpFromTime("2019-02-28", 'vegan', 'd', true);
      countUpFromTime("2020-10-28", 'sleepmaster', 'd', true);

      countUpFromTime("2100-01-01", 'vivaci2100', 'w', true);
      countUpFromTime("2030-01-01", 'iaco2030', 'w', true);
      countUpFromTime("3000-01-01", 'iacovivaci3000', 'w', true);
    };

    function countUpFromTime(countFrom, id, type, date) {
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

      if(type == 'd') var idEl = document.getElementById(id).innerHTML = Math.abs(days) + " <span>days" + (date ? " (" + txtdate + ")" : "") + "</span>";
      if(type == 'w') var idEl = document.getElementById(id).innerHTML = Math.abs(weeks) + " <span>weeks" + (date ? " (" + txtdate + ")" : "") + "</span>";

      //idEl.getElementsByClassName('days')[0].innerHTML = days;
      //idEl.getElementsByClassName('hours')[0].innerHTML = hours;
      //idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
      //idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

      //clearTimeout(countUpFromTime.interval);
      //countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
    }
    </script>

    <hr style="max-width: 400px;">
    
    <!--
    <ul>
        <a href="https://ticktick.com">
            <i class='far fa-check-circle fa-2x'></i>
        </a>
        <a href="https://mail.ovh.net/roundcube/?_task=login">
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
        &nbsp;&nbsp;
        <a href="https://web.whatsapp.com">
            <i class='fab fa-whatsapp fa-2x'></i>
        </a>
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
        &nbsp;&nbsp;
        <a href="https://www.facebook.com/profile">
            <i class='fab fa-facebook fa-2x'></i>
        </a>
        <a href="https://iaco.me/facebook">
            <span class="fa-stack" style="vertical-align: top;">
                <i class="fas fa-file fa-stack-2x"></i>
                <i class="fab fa-facebook-f fa-stack-1x" style="color: black"></i>
            </span>
        </a>
    </ul>

    <hr style="max-width: 400px;">
    -->
    
    <ul id="list"></ul>

    <script src="../config/jquery/jquery.min.js"></script>
    <script>
        var links = [
            ["hi@iaco.me", "https://mail.ovh.net/roundcube/?_task=login", "fa fa-envelope"],
            ["TickTick", "https://ticktick.com", "far fa-check-circle"],
            //["TASKS be100you", "https://docs.google.com/spreadsheets/d/1pX134g2Mze-CwYD6Qh1eGVbsqy6JZKh924BTdfAYXsI/edit?usp=sharing", "fa fa-mountain"],
            ["VIVΛCI.LIFE Project", "https://vivaci.life", "far fa-heart"],
            ["iago-food-1w", "https://lite.framacalc.org/iago-food-1w", "fa fa-carrot"],
            ["10h20 <i class='fa fa-bus'></i> Condillac", "https://www.transisere.fr/fr/horaires-a-larret/28/StopSchedules/condillac-universites/30626/gieres-campus-montbonnot-bernin/80/bernin-montbonnot-saint-martin/1?Date=27%2F12%2F2018&PhysicalId=15279", "fa fa-briefcase"],
            ["14h46 <i class='fa fa-bus'></i> Norbert Segard", "https://www.transisere.fr/fr/horaires-a-larret/28/StopSchedules/norbert-segard-cnet/43647/gieres-campus-montbonnot-bernin/80/gieres/2?Date=27%2F12%2F2018&PhysicalId=12069", "fa fa-home"],
            ["Creator Studio", "https://business.facebook.com/creatorstudio", "fab fa-facebook"],
            ["Business Suite", "https://business.facebook.com/latest/inbox/messenger", "fa fa-user-tie"]
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
                "<span style='display: block;'>"+l[1]+"</span>"+
                "</p>"+
                "</a>"+
                "</li>");
        }
    </script>

</body>

</html>
