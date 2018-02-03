
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

HTML("index.html",
    page("page title",
        appshell("aaaa", "index",
            sidebar(),
            content("index", "name 0")
        )
    ),
    true
);

HTML("views.html",
    page("page title",
        appshell("aaaa", "views",
            sidebar(),
            content("views", "name 1")
        )
    ),
    true
);
