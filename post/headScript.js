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
  $.get('head.html', function(data){
    $('head').append(data);
  });
}
function loadPosts(){
  $('#list').load('/post/list.html');
}
