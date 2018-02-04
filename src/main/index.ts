
import { JsonMLs } from "./prest/jsonml/jsonml";
import { jsonmls2htmls, } from "./prest/jsonml/jsonml-html";
import { appshell, sidebar, page, content } from "./components";
import * as fs from "fs";

function HTML(file: string, jsonmls: JsonMLs, pretty = false): void {
    const path = __dirname + "/../../dist/" + file;
    console.log("generate:", path);
    const html = jsonmls2htmls(jsonmls, pretty).join("");
    fs.writeFileSync(path, html);
}


const site = "Site";

HTML("index.html",
    page(site,
        appshell(site, "Index",
            sidebar(),
            content("Index Title", "name 0")
        )
    ),
    true
);

HTML("views.html",
    page(site,
        appshell(site, "Views",
            sidebar(),
            content("Views Title", "name 1")
        )
    ),
    true
);
