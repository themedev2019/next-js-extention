"use strict";

let $prefix = 'app-';
let $div = document.querySelector('.app');

function app_home( e){
    e.preventDefault();
    console.log(e);
}

/*start header section*/
let $header = nJs.el(
    $div,
    'header',
    {
        class: $prefix+'header',
        id: $prefix+'header-main'
    },
    [
        // render title tag
        {
            child: [
                'h1',
                {
                    content: 'Welcome to Our Websites',
                },
                [],
            ]
        },
        // render main header
        {
            'child' : [
                'div',
                {
                    class: $prefix+'continer header-main app-header1'
                },
                [
                    // logo area
                    {
                        'child' : [
                            'div',
                            {
                                class: $prefix+'logo'
                            },
                            [
                                /*{
                                    'child' : [
                                        'img',
                                        {
                                            class: $prefix+'main-logo',
                                            src: 'assets/logo.jpg'
                                        }
                                    ]
                                }*/
                            ]
                        ]
                    },
                    // end logo area
                    //start main menu
                    {
                        'child' : [
                            'nav',
                            {
                                class: $prefix+'nav-menu'
                            },
                            [
                                {
                                    'child' : [
                                        'ul',
                                        {
                                            class: $prefix+'menu-ul'
                                        },
                                        [
                                            {
                                                'child': [
                                                    'li',
                                                    {

                                                    },
                                                    [
                                                        {
                                                            child: [
                                                                'a',
                                                                {
                                                                    href: '#home',
                                                                    innerHTML: 'Home',
                                                                    'data-title-name': 'My Home',
                                                                    trigger: 
                                                                    {
                                                                        click: ['app_home', {f: 'name'}],
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                ]
                                                
                                            },
                                            {
                                                'child': [
                                                    'li',
                                                    {

                                                    },
                                                    [
                                                        {
                                                            child: [
                                                                'a',
                                                                {
                                                                    href: '#about',
                                                                    innerHTML: 'About Us'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                ]
                                                
                                            },
                                            {
                                                'child': [
                                                    'li',
                                                    {

                                                    },
                                                    [
                                                        {
                                                            child: [
                                                                'a',
                                                                {
                                                                    href: '#contact',
                                                                    innerHTML: 'Contact Us'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                ]
                                                
                                            },

                                        ]
                                    ]
                                }
                            ]
                        ]
                    },
                    //end main menu
                ]
            ]
        },
        // end main header
    ]
);


/*Footer render*/ 

let $footer = nJs.el(
    $div,
    'footer',
    {
        class: $prefix+'footer-main',
    },
    [
        {
            'child' : [
                'div',
                {
                    class: $prefix+'continer main-footer',
                    data_title: 'Footer Section',
                    innerHTML: '<p>hello world</p>'
                },
                [
                    {
                        child: [
                            'div',
                            {
                                class: $prefix+'left-side',
                                content: 'Left Site'
                            }
                        ]
                    },
                    {
                        child: [
                            'div',
                            {
                                class: $prefix+'right-side',
                                content: 'Right Site'
                            }
                        ]
                    },
                    {
                        child: [
                            'nav',
                            {
                                class: $prefix+'footer=nav',
                            },
                            [
                                {
                                    child: [
                                        'ul',
                                        {
                                            class: 'footer-nav-menu'
                                        },
                                        [
                                            {
                                                child: [
                                                    'li',
                                                    {
    
                                                    },
                                                    [
                                                        {
                                                            child: [
                                                                'a',
                                                                {
                                                                    href: '#',
                                                                    innerHTML: 'Home'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                ]
                                            },
                                            {
                                                child: [
                                                    'li',
                                                    {
    
                                                    },
                                                    [
                                                        {
                                                            child: [
                                                                'a',
                                                                {
                                                                    href: '#',
                                                                    innerHTML: 'About'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                ]
                                            }
                                        ]
                                    ]
                                }
                            ]
                        ]
                    }
                ]
            ]
        }
    ]
);


nJs.el( document.querySelector('.app-menu-ul'),
    'div',
    {
        class: 'top-div',
        content: 'Top Div'
    },
    [

    ],
    'after'
);

// add element by arrow
nJs.addElement(
    [
        [
            '.app-menu-ul',
            'div',
            {
                class: 'top-div1',
                content: 'Top Div 1'
            },
            [

            ],
            '2'
        ],
        [
            '.app-menu-ul',
            'div',
            {
                class: 'top-div2',
                content: 'Top Div 2'
            },
            [

            ],
            '1'
        ],
        [
            '.app-menu-ul',
            'div',
            {
                class: 'top-div3',
                content: 'Top Div 3'
            },
            [

            ],
            '0'
        ]
    ]
);


console.log(nJs);

let $parent = nJs.parents(document.querySelector('.app-menu-ul'), '.app-header');

// add class
nJs.addClass( document.querySelector('.app-menu-ul'), ['golap', 'mostafa', 'fsdfsf hazi']);

let $getClaas = nJs.getClass( document.querySelector('.app-menu-ul'));

//set attribute
nJs.setAttr( document.querySelector('.app-menu-ul'), {golap: 'test', mostaf : 'fdff'});

// remove class
nJs.removeClass( document.querySelector('.app-menu-ul'), ['golap', 'fsdfsf hazi1']);

// find
let $find = nJs.find('.app-menu-ul');

// ajax
/*
nJs.ajax(
    {
        'action' : './ajax.txt',
        'method' : 'POST', 
        'header' : {
            "Content-type" : 'application/x-www-form-urlencoded'
        },
        'data' : {
            'test1' : 'golap',
            'test2' : 'mostafa'
        }
    }
)
*/
// get
nJs.get('./ajax.txt', 
    {
        'header' : {
            "Content-type" : 'application/x-www-form-urlencoded'
        },
        'data' : {
            'test1' : 'golap',
            'test2' : 'mostafa'
        }
    }
).onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector(".app-header h1").innerHTML = this.responseText;
    }
};


// get json
/*
nJs.json('http://localhost/next-js-extention/js/json/test.json').onload = function(res){
    console.log( nJs.strToJson(this.response) );
};*/

var $form = document.querySelector($nxCamSetting.save_form);
if( $form ){
    // submit form
    $form.removeEventListener('submit', $nxCamSetting.saveSetting);
    $form.addEventListener('submit', $nxCamSetting.saveSetting);

}

$nxCamSetting = {
        
    saveSetting: function( $e ){
        $e.preventDefault();
        var $this = this;

        var $btn = $this.querySelector('button.full-demo');
        
        $btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Saving';
        $this.classList.add('next3-loading');

        nJs.ajax(
            {
                'action' : nextcam.ajax_url+'?action=nextcamsave_settings',
                'method' : 'POST', 
                'header' : {
                'X-WP-Nonce' : window.nextcam.nonce
                },
                'data' : {
                    message: 'save settings data',
                    'form_data': nJs.serialize($this)
                }
            }
        ).onload = function() {
            
            if (this.readyState == 4 && this.status == 200) {
                let $res = JSON.parse(this.responseText);

                $btn.innerHTML = '<i></i> Saved';
                
                var tim = setInterval(function(){
                    $btn.innerHTML = '<i></i> Save Settings';
                    clearInterval(tim);
            }, 1500);

            $this.classList.remove('next3-loading');
            }
        }
    }
};