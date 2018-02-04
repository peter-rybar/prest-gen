import { JsonMLs } from "./prest/jsonml/jsonml";

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
        { url: "./views.html", label: "Views", icon: "i.fa.fa-eye.fa-fw" },
        { url: "./news.html", label: "News", icon: "i.fa.fa-bell.fa-fw" },
        { url: "./settings.html", label: "Settings", icon: "i.fa.fa-cog.fa-fw" },
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
                        ["strong", user.name]
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
