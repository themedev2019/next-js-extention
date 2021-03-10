"use strict";
class NextExt{
    constructor(){
        let $window = window;
    }

    static createElement($append, $element, $props, $child, $type){
        let $el, $chiNew, $eleNew, $propsNew, $chieldNew, $typeNew;
        if( $element == '' || !$append){
            return null;
        }

        $el = NextExt.instance().nx_append($append, $element, $props, $type);
        
        if( Array.isArray($child) && $child.length > 0){
            $child.forEach(function($data, $c){
                if( $data.child && $data.child != ''){
                    $chiNew = ($data.child) ? $data.child : [];
                    $eleNew = ($chiNew[0]) ? $chiNew[0] : '';
                    $propsNew = ($chiNew[1]) ? $chiNew[1] : '';
                    $chieldNew = ($chiNew[2]) ? $chiNew[2] : '';
                    $typeNew = ($chiNew[3]) ? $chiNew[3] : 'append';

                    NextExt.createElement($el, $eleNew, $propsNew, $chieldNew, $typeNew);
                    
                }
            });
        }
        return $el;
    }

    nx_append($append, $element, $props, $type){
        let $attr = ['content', 'contenthtml', 'contentHTML', 'innerhtml', 'innerHTML', 'innerText', 'contentText', 'trigger', 'removetrigger'];
        if($append){
            let $e = document.createElement($element);
            if( Object.entries($props) ){ 
                for (const [$k, $v] of Object.entries($props)) {
                    if( $k == ''){
                        continue;
                    }
                    if( $attr.indexOf($k) > -1){
                        if( ['content', 'innertext', 'innerText', 'contentText'].indexOf($k) > -1){
                            $e.innerText = $v;
                        } else if ($k == 'trigger'){
                            NextExt.instance().addTrigger($e, $v);
                        } else if ($k == 'removetrigger'){
                            NextExt.instance().removeTrigger($e, $v);
                        } else{
                            $e.innerHTML = $v;
                        }
                    } else {
                        let $key = $k.replace(/_/g, '-').replace(/--/g, '-');
                        $e.setAttribute($key, $v);
                    }
                    
                };
            }
            if($type == 'before'){
                $append.insertBefore($e, $append.childNodes[0]);
            } else if($type == 'after'){
                let $len = $append.childNodes.length;
                $append.insertBefore($e, $append.childNodes[$len]);
            } else {
                $append.appendChild($e);
            }
            return $e;
        }
        return null;
    }

    removeTrigger($element, $props){
        if( Object.entries($props) ){
            for (const [$k, $v] of Object.entries($props)) {
                if( $k == ''){
                    continue;
                }
                var fn = window[$k];
                if( typeof fn === "function"){
                    $element.removeEventListener($k, fn);
                }
            }
        }
        return $element;
    }
    addTrigger($element, $props){
        if( Object.entries($props) ){
            for (const [$k, $v] of Object.entries($props)) {
                if( $k == ''){
                    continue;
                }
                
                if( Array.isArray($v) && $v.length > 0){
                    let $func = ($v[0]) ? $v[0] : ''; 
                    let $params = ($v[1]) ? $v[1] : false; 
                    
                    var fn = window[$func];
                    if( typeof fn === "function"){
                        $element.addEventListener($k, fn, $params);
                    }
                }else{
                    var fn = window[$v];
                    if( typeof fn === "function"){
                        $element.addEventListener($k, fn);
                    }
                }
            }
        }
        return $element;
    }

    getJson($url){
        if( NextExt.instance().checkFileExist($url) ){
            fetch($url).then(function(response){
                return response.json();
            }).then(data => {
                //console.log(data);
            });
        }
        return null;
    }

    checkFileExist( url ) { 
        let http = new XMLHttpRequest();
        if (url.length === 0) { 
            return false;
        } else {
            http.open('HEAD', url, false); 
            http.send();
            if (http.status === 200) { 
                return true;
            } else { 
                return false;
            } 
        } 
        return false;
    } 

    static instance() {
        return new NextExt();
    }
}
