var $$ = mdui.JQ;
/* Gotop */
$$(function () {
  $$(window).on('scroll', function (e) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop !== 0) {
      $$('#gotop').removeClass('mdui-fab-hide');
    } else {
      $$('#gotop').addClass('mdui-fab-hide');
    }
  });
  $$('#gotop').on('click', function (e) {
    (function animateScroll() {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop !== 0) {
        window.requestAnimationFrame(animateScroll);
        window.scrollTo(0, scrollTop - (scrollTop / 5));
      }
    })();
  });
});

/* Dark Mode */
if (localStorage.getItem('mdui-theme-layout-dark')=='true') {
  $$('body').addClass('mdui-theme-layout-dark');
  $$('#footer').removeClass('mdui-color-theme');
  $$('#nightmode_switch').prop('checked', true);
}
$$('#nightmode_switch').on('click', function (e) {
  if ($$('body').hasClass('mdui-theme-layout-dark')) {
    $$('body').removeClass('mdui-theme-layout-dark');
    $$('#footer').addClass('mdui-color-theme');
    localStorage.removeItem('mdui-theme-layout-dark');
  } else {
    $$('body').addClass('mdui-theme-layout-dark');
    $$('#footer').removeClass('mdui-color-theme');
    localStorage.setItem('mdui-theme-layout-dark', true);
  }
});

/* Search */
var searchFunc = function (path, search_id, content_id) {
  $$.ajax({
    url: path,
    dataType: 'xml',
    success: function (xmlResponse) {
      var datas = $$(xmlResponse).find('entry').map(function () {
        return {
          title: $$(this).find('title').text(),
          content: $$(this).find('content').text(),
          url: $$(this).find('url').text()
        };
      }).get();
      var $input = $$(search_id)[0];
      var $resultContent = $$(content_id)[0];
      $input.addEventListener('input', function () {
        var str = '<ul class="search-result-list">';
        var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
        $resultContent.innerHTML = '';
        if (this.value.trim().length <= 0) {
          return;
        }
        datas.forEach(function (data) {
          var isMatch = true;
          if (!data.title || data.title.trim() === '') {
            data.title = 'Untitled';
          }
          var orig_data_title = data.title.trim();
          var data_title = orig_data_title.toLowerCase();
          var orig_data_content = data.content.trim().replace(/<[^>]+>/g, '');
          var data_content = orig_data_content.toLowerCase();
          var data_url = data.url;
          var index_title = -1;
          var index_content = -1;
          var first_occur = -1;
          if (data_content !== '') {
            keywords.forEach(function (keyword, i) {
              index_title = data_title.indexOf(keyword);
              index_content = data_content.indexOf(keyword);
              if (index_title < 0 && index_content < 0) {
                isMatch = false;
              } else {
                if (index_content < 0) {
                  index_content = 0;
                }
                if (i == 0) {
                  first_occur = index_content;
                }
              }
            });
          } else {
            isMatch = false;
          }
          if (isMatch) {
            str += '<li><a href="' + data_url + '" class="search-result-title" target="_blank">' + orig_data_title + '</a>';
            var content = orig_data_content;
            if (first_occur >= 0) {
              var start = first_occur - 20;
              var end = first_occur + 80;
              if (start < 0) {
                start = 0;
              }
              if (start == 0) {
                end = 100;
              }
              if (end > content.length) {
                end = content.length;
              }
              var match_content = content.substr(start, end);
              keywords.forEach(function (keyword) {
                var regS = new RegExp(keyword, 'gi');
                match_content = match_content.replace(regS, '<em class="search-result-keyword">$&</em>');
              });
              str += '<p class="search-result-content">' + match_content + '...</p>';
            }
            str += '</li>';
          }
        });
        str += '</ul>';
        $resultContent.innerHTML = str;
      });
    }
  });
};
var isListenSearch = false;
var listenSearchFunc = function () {
  var resource = $$('.search-result').attr('data-resource');
  if (resource) {
    if (!isListenSearch) { 
      isListenSearch = true;
      searchFunc(resource, '.search-form-input', '.search-result');
    }
  }
};
$$('#search').on('close.mdui.dialog',function () {
  $$('.search-form-input').val('');
  $$('.search-result').html('');
})
