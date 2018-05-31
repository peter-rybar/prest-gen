
import * as fs from "fs";
import { JsonMLs } from "./prest/jsonml/jsonml";
import { jsonmls2htmls, } from "./prest/jsonml/jsonml-html";
import { page } from "./components/page";
import { appshell } from "./components/appshell";
import { sidebar } from "./components/sidebar";
import { content } from "./components/content";

function HTML(file: string, jsonmls: JsonMLs, pretty = false): void {
    const path = __dirname + "/../../dist/" + file;
    console.log("generate:", path);
    const html = jsonmls2htmls(jsonmls, pretty).join("");
    fs.writeFileSync(path, html);
}


const siteTitle = "Site Gen";

let file = "index.html";
HTML(file,
    page(siteTitle,
        appshell(siteTitle, "Index",
            sidebar(file),
            content("Index Title", "name index")
        )
    ),
    true
);

file = "overview.html";
HTML(file,
    page(siteTitle,
        appshell(siteTitle, "Overview",
            sidebar(file),
            content("Overview Title", "name overview")
        )
    ),
    true
);

file = "views.html";
HTML(file,
    page(siteTitle,
        appshell(siteTitle, "Views",
            sidebar(file),
            content("Views Title", "name views")
        )
    ),
    true
);

file = "news.html";
HTML(file,
    page(siteTitle,
        appshell(siteTitle, "News",
            sidebar(file),
            content("News Title", "name news")
        )
    ),
    true
);

file = "settings.html";
HTML(file,
    page(siteTitle,
        appshell(siteTitle, "Settings",
            sidebar(file),
            content("Settings Title", "name settings")
        )
    ),
    true
);
