import { JsonMLs } from "./prest/jsonml/jsonml";

export function page(title: string,
                     content: JsonMLs,
                     lang = "en"): JsonMLs {
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
