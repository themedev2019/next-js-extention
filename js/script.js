"use strict";
var el = NextExt.createElement;

let $prefix = 'app-';
let $div = document.querySelector('.app');

function app_home( e){
    e.preventDefault();
    console.log(e);
}

/*start header section*/
let $header = el(
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
                    class: $prefix+'continer header-main'
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
                                {
                                    'child' : [
                                        'img',
                                        {
                                            class: $prefix+'main-logo',
                                            src: 'assets/logo.jpg'
                                        }
                                    ]
                                }
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
                                                                    data_title_name: 'home',
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

let $footer = el(
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


el( document.querySelector('.app-right-side'),
    'div',
    {
        class: 'top-div',
        content: 'Top Div'
    },
    [

    ],
    'before'
);