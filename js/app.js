//building Wikipedia full url
function build_wiki_search_url(searchTerm) {
var base_url = "https://en.wikipedia.org/w/api.php";
var format = "&format=json";
var request_url = "?action=query&format=json&list=search&srsearch=";
var url = base_url + request_url + searchTerm;
return url;
}

// AJAX call
$(document).ready(function(){
	$("#search").click(function(e){
    e.preventDefault();
   var searchTerm = $("#search").val();
   var url = build_wiki_search_url(searchTerm);
		$.ajax({
      type:'GET',
      url:  url,
      dataType: 'jsonp',
      success: function(data) {
      var result = data.query.pages;
      for (var num in result) {
             $("ul").append('<a target="_blank" href="https://en.wikipedia.org/wiki?curid=' + result[num].pageid + '">' + '<li><h3 class="title ">' + result[num].title + '</h3><p class="text">' + result[num].extract + '</p></li></a>');
           }
         }
       });
     });
   });
    })
  });
});
