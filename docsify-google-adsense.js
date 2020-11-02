(function(){
    function appendScript() {
        var style = document.createElement('style');
        var script = document.createElement('script');
        style.innerHTML = ".ad-container{overflow: hidden;margin: 10px 0;}";
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        document.body.appendChild(script);
        document.head.appendChild(style);
    };

    function adStr(id, adClient, adSlot) {
        var str = 
            '<div id="'+ id +'" class="ad-container"><ins class="adsbygoogle"'+
                'style="display:block"'+
                'data-ad-client="' + adClient + '"'+
                'data-ad-slot="' + adSlot + '"'+
                'data-ad-format="auto"'+
                'data-full-width-responsive="true">'+
            '</ins></div>';
        return str
    }
    
    function main(hook) {
        if(!$docsify.adClient) {
          console.error('[Docsify] ga is required.');
          return;
        }else{
            hook.beforeEach(appendScript);
            if($docsify.adHeaderSlot){
                hook.beforeEach(function(content){
                    return adStr('header-ad', $docsify.adClient, $docsify.adHeaderSlot) + "\n\n" + content
                });
                hook.doneEach(function() {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                });
            }
            if($docsify.adFooterSlot){
                hook.beforeEach(function(content){
                    return content + "\n\n" + adStr('footer-ad', $docsify.adClient, $docsify.adFooterSlot) 
                });
                hook.doneEach(function() {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                });            
            }
        }
    };
    
    $docsify.plugins = [].concat(main, $docsify.plugins);
})();