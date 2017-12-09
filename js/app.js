//creating a variable for the new content after the search
var pages = $('.wrap');


$(document).ready(function() {
  $("#result").click(function(e) {
    e.preventDefault();
    // value entered by the user
    var searchTerm = $("#search").val();
    console.log(searchTerm);
    // url to look for using the search input by the user
    var url = "https://en.wikipedia.org/w/api.php";

    // AJAX call
    $.ajax({
      type: 'GET',
      url: url,
      async: true,
      data: {
        action: 'query',
        list: 'search',
        srsearch: searchTerm,
        format: 'json'
      },
      dataType: "jsonp",
      success: function(data) {
        console.log(data);
        var html = '  <!-- pages -->';
        html += '  <div class="row row-centered">';

        data.query.search.map(function(w) {
          html += '    <div class="col-centered">';
          html += '      <a href="https://en.wikipedia.org/wiki/' + w.title + '" target="_blank">';
          html += '        <div class="panel panel-default">';
          html += '          <div class="panel-heading">';
          html += '            <h3 class="panel-title">' + w.title + '</h3>';
          html += '          </div>';
          html += '          <div class="panel-body">';
          html += '            ' + w.snippet;
          html += '          </div>';
          html += '        </div>';
          html += '      </a>';
          html += '    </div>';
        });

        html += '  </div>';

        // changing the content after the result - displaying all possible result pages
        pages.html(html);
      },
      error: function() {
        alert("Error retrieving search results, please refresh the page");
      }
    });
  });
});

// $(".searchbox").autocomplete({
//     source: function(request, response) {
//         console.log(request.term);
//         $.ajax({
//             url: "http://en.wikipedia.org/w/api.php",
//             dataType: "jsonp",
//             data: {
//                 'action': "opensearch",
//                 'format': "json",
//                 'search': request.term
//             },
//             success: function(data) {
//                 response(data[1]);
//             }
//         });
//     }
// });
