import { JsonMLs } from "./prest/jsonml/jsonml";

export function appshell(title: string,
                         title1: string,
                         sidebar: JsonMLs,
                         content: JsonMLs): JsonMLs {
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
                ["strong",
                    ["a", { href: "./", style: "text-decoration: none;" }, title]
                ],
                ["span", title1 ? ` - ${title1}` : ""],
            ],
            ["span.w3-bar-item.w3-right",
                ["a",
                    {
                        href: "https://github.com/peter-rybar/prest-gen",
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
