import { JsonMLs } from "./prest/jsonml/jsonml";

export function page(title: string, content: JsonMLs, lang = "en"): JsonMLs {
    return [
        "<!DOCTYPE html>",
        ["html", { lang: lang },
            ["head",
                ["meta", { charset: "utf-8" }],
                ["meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" }],
                ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0" }],
                ["meta", { name: "author", content: "Peter Rybar, pr.rybar@gmail.com" }],
                ["title", title],
                ["link", { rel: "stylesheet", href: "https://www.w3schools.com/w3css/4/w3.css" }],
                ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Raleway" }],
                ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" }],
                ["link", { rel: "stylesheet", href: "assets/css/styles.css" }],
                ["style", `html, body, h1, h2, h3, h4, h5 { font-family: "Raleway", sans-serif }`],
                ["meta", { id: "theme-color", name: "theme-color", content: "#37474F" }],
                ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
                ["link", { rel: "manifest", href: "manifest.json" }]
            ],
            ["body.w3-light-grey",
                ...content,
                ["script", { src: "sw-init.js" }]
            ]
        ]
    ];
}

export function appshell(title: string, title1: string, sidebar: JsonMLs, content: JsonMLs): JsonMLs {
    return [
        // header
        ["div.w3-bar.w3-top.w3-large.w3-blue",
            {
                style: "z-index:4"
            },
            ["button.w3-bar-item.w3-button.w3-hide-large.w3-hover-none.w3-hover-text-light-grey",
                { onclick: "w3_open();" },
                ["i.fa.fa-bars"],
            ],
            ["span.w3-bar-item",
                ["strong", title],
                ["span", title1 ? ` - ${title1}` : ""],
            ],
            ["span.w3-bar-item.w3-right",
                ["a",
                    {
                        href: "https://github.com/peter-rybar/wallet-dct",
                        title: "github",
                        target: "_blank"
                    },
                    ["i.fa.fa-github"]
                ]
            ]
        ],
        // sidebar
        ["div#sidebar.w3-sidebar.w3-collapse.w3-white.w3-animate-left",
            {
                style: "z-index:3;width:300px;"
            },
            ...sidebar
        ],
        // overlay
        ["div#overlay.w3-overlay.w3-hide-large.w3-animate-opacity",
            {
                style: "cursor:pointer",
                title: "close side menu",
                onclick: "w3_close();"
            },
            " "
        ],
        // main
        ["div.w3-main",
            {
                style: "margin-left:300px;margin-top:43px;"
            },
            ["div#content.w3-container",
                ...content
            ]
        ],
        // snackbar
        ["div#snackbar", "test"],
        ["script",
            `var sidebar = document.getElementById("sidebar");
            var overlay = document.getElementById("overlay");
            function w3_open() {
                if (sidebar.style.display === 'block') {
                    sidebar.style.display = 'none';
                    overlay.style.display = "none";
                } else {
                    sidebar.style.display = 'block';
                    overlay.style.display = "block";
                }
            }
            function w3_close() {
                sidebar.style.display = "none";
                overlay.style.display = "none";
            }`
        ]
    ];
}

interface User {
    name: string;
    avatar: string;
}

interface Menu {
    url: string;
    label: string;
    icon: string;
}

export function sidebar(): JsonMLs {
    const user: User = { name: "Peter", avatar: "" };
    const hash = "views";
    const menu: Menu[] = [
        { url: "./", label: "Overview", icon: "i.fa.fa-users.fa-fw" },
        { url: "views.html", label: "Views", icon: "i.fa.fa-eye.fa-fw" },
        { url: "#news", label: "News", icon: "i.fa.fa-bell.fa-fw" },
        { url: "#settings", label: "Settings", icon: "i.fa.fa-cog.fa-fw" },
    ];
    const nbsp = "\u00a0 ";
    return [
        ["nav",
            ["br"],
            ["div.w3-container.w3-row",
                ["div.w3-col.s4",
                    ["img.w3-circle.w3-margin-right",
                        {
                            src:  user.avatar || "https://www.w3schools.com/w3images/avatar2.png",
                            style: "width:46px"
                        }
                    ]
                ],
                ["div.w3-col.s8.w3-bar",
                    ["span",
                        ["a", { href: "#", style: "text-decoration: none;" }, "Welcome"],
                        user.name ? ", " : " ",
                        ["strong~name", user.name]
                    ],
                    ["br"],
                    ["a.w3-bar-item.w3-button", { href: "#messages", title: "Messages" },
                        ["i.fa.fa-envelope"]
                    ],
                    ["a.w3-bar-item.w3-button", { href: "#profile", title: "Profile" },
                        ["i.fa.fa-user"]
                    ],
                    ["a.w3-bar-item.w3-button", { href: "#settings", title: "Settings" },
                        ["i.fa.fa-cog"]
                    ],
                ],
            ],
            ["hr"],
            ["div.w3-container",
                ["h5", "Menu"],
            ],
            ["div.w3-bar-block",
                ...menu.map(m => {
                    return (
                        ["a.w3-bar-item.w3-button.w3-padding",
                            {
                                href: m.url,
                                classes: m.url === hash ? ["w3-blue"] : []
                            },
                            [m.icon], nbsp, m.label
                        ]);
                }),
                ["br"],
                ["br"]
            ]
        ]
    ];
}

export function content(title: string, name: string): JsonMLs {
    return [
        ["h1", title],
        ["p", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"],
        ...hello(name)
    ];
}

export function hello(name: string): JsonMLs {
    return [
        ["p",
            ["input.w3-input~i",
                { type: "text", value: name }
            ],
            ["p", "Hello ", ["strong", name], " !"]
        ]
    ];
}
