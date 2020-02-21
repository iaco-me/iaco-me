function setTitle(){
  var fullTitle = document.getElementsByTagName('title')[0].innerHTML;

  var regexTags = /\[(.*?)\]/g;
  var tags = '';
  for (var match of fullTitle.matchAll(regexTags)) {
    tags += '<span>' + match[1] + '</span>';
  }
  document.getElementById('mainTags').innerHTML = tags;

  var regexTitle = /^(.+?)[\n#\[]/;
  var title = fullTitle.match(regexTitle)[1];
  document.getElementById('mainTitle').innerHTML = title;

  var regexBTags = /#(\w+)/g;
  var bTags = '';
  for (var match of fullTitle.matchAll(regexBTags)) {
    bTags += '<a>' + match[1] + '</a>';
  }
  document.getElementById('bottomTags').innerHTML = bTags;
}
function configurePage(){
  $('#author').load('/post/author.html');
  $('#footer').load('/post/footer.html');
  $('head').append('
                  <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png">
                  <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png">
                  <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png">
                  <link rel="manifest" href="/icon/site.webmanifest">
                  <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#141414">
                  <link rel="shortcut icon" href="/icon/favicon.ico">
                  <meta name="msapplication-TileColor" content="#141414">
                  <meta name="msapplication-config" content="/icon/browserconfig.xml">
                  <meta name="theme-color" content="#141414">
                  ');
}
function loadPosts(){
  $('#list').load('/post/list.html');
}
