
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


const site = "Site Gen";

HTML("index.html",
    page(site,
        appshell(site, "Index",
            sidebar("index.html"),
            content("Index Title", "name index")
        )
    ),
    true
);

HTML("overview.html",
    page(site,
        appshell(site, "Overview",
            sidebar("overview.html"),
            content("Overview Title", "name overview")
        )
    ),
    true
);

HTML("views.html",
    page(site,
        appshell(site, "Views",
            sidebar("views.html"),
            content("Views Title", "name views")
        )
    ),
    true
);

HTML("news.html",
    page(site,
        appshell(site, "News",
            sidebar("news.html"),
            content("News Title", "name news")
        )
    ),
    true
);

HTML("settings.html",
    page(site,
        appshell(site, "Settings",
            sidebar("settings.html"),
            content("Settings Title", "name settings")
        )
    ),
    true
);
